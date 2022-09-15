import ChallengeDeliverablesService from "../challengeDeliverables/challengeDeliverables.service";
import UserChallengesService from "../userChallenges/userChallenges.service";
import { UserDeliverable } from "./userDeliverable.entity";
import UserDeliverablesModel from "./userDeliverables.model";
import { CreateUserDeliverableType, UpdateUserDeliverableIdType } from "./userDeliverables.types";

const UserDeliverablesService = {
  async includeUserDeliverable({
    challengeDeliverableId,
    userId,
    link,
    explanation,
  }: CreateUserDeliverableType): Promise<UserDeliverable> {
    const challengeDeliverable = await ChallengeDeliverablesService.getChallengeDeliverableById(challengeDeliverableId);
    const challengeId = challengeDeliverable.challengeId;
    
    const getUserChallenge = await UserChallengesService.getUserChallengeByUserAndChallenge({
      challengeId,
      userId,
    });
    const userChallengeId = getUserChallenge.id;
    if (!userChallengeId) throw new Error("Desafio não iniciado pelo usuário");
    if (getUserChallenge.finishedAt) throw new Error("Desafio já finalizado");

    const finishedAfter = await UserChallengesService.finishDateVerification(challengeId);

    if(finishedAfter == true){
      await UserChallengesService.endExpiredChallenge({ challengeId, userId, dateFinished: new Date().toString() });
      throw new Error("Data limite para finalizar o desafio ultrapassada")
    };

    const includeUserDeliverable = await UserDeliverablesModel.create({
      challengeDeliverableId,
      userChallengeId,
      link,
      explanation,
    });

    return includeUserDeliverable as unknown as UserDeliverable;
  },

  async updateUserDeliverable({
    userDeliverableId,
    link,
    explanation
  }: UpdateUserDeliverableIdType) {
   
    const userDeliverable = await this.getUserDeliverableById(userDeliverableId);
    const userChallenge = userDeliverable.userChallenges;
    if (!userChallenge) throw new Error("Desafio não iniciado pelo usuário");

    const userChallengeFinished = userChallenge.finishedAt;
    if (userChallengeFinished) throw new Error("Desafio já finalizado");

    const userId = userChallenge.userId;
    const challengeId = userChallenge.challengeId;

    const finishedAfter = await UserChallengesService.finishDateVerification(userChallenge.challengeId);

    if(finishedAfter == true){
      await UserChallengesService.endExpiredChallenge({ challengeId, userId, dateFinished: new Date().toString() });
      throw new Error("Data limite para finalizar o desafio ultrapassada")
    }

    const updateUserDeliverable = await UserDeliverablesModel.update(
      {
        link,
        explanation,
      },
      {
        where: {
          id: userDeliverableId,
        },
      }
    );
    return updateUserDeliverable;
  },

  async getUserDeliverableById(userDeliverableId: string): Promise<UserDeliverable> {
    let userDeliverablesId = await UserDeliverablesModel.findOne({
      where: {
        id: userDeliverableId,
      },
      include: "userChallenges",
    });
    if (!userDeliverablesId) throw new Error("Entrega do usuário não encontrada");

    return userDeliverablesId.get({ plain: true });
  },

  async getUserDeliverablesByUserChallengeId(userChallengeId: string): Promise<UserDeliverable[]> {
    await UserChallengesService.userChallengeExists(userChallengeId);

    const userDeliverables = await UserDeliverablesModel.findAll({
      where: {
        userChallengeId,
      }
    });

    if (userDeliverables.length == 0) throw new Error("Ainda não há entregas deste usuário para este desafio");

    return userDeliverables as unknown as UserDeliverable[];
  },

  async getCountUserDeliverables(userChallengeId: string): Promise<number> {
    const userScore = await UserDeliverablesModel.count({
      where: {
        userChallengeId,
      }
    });
    
    return userScore;
  },
};

export default UserDeliverablesService;
