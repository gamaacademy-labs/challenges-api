import { isAfter, isBefore, parseJSON } from "date-fns";
import ChallengesService from "../challenges/challenges.service";
import UserDeliverablesService from "../userDeliverables/userDeliverables.service";
import UsersService from "../users/users.service";
import { UserChallenge } from "./userChallenge.entity";
import UserChallengesModel from "./userChallenges.model";
import { DateFinishedType, DateVerificationType, UserIdChallengeIdType } from "./userChallenges.types";

const UserChallengesService = {
  async userChallengeExists(userChallengeId: string) {
    const userChallengeExists = await UserChallengesModel.count({
      where: {
        id: userChallengeId,
      },
    });
    if (!userChallengeExists) throw new Error("ID de desafio do usuário não é válido");
  },

  async getScoresByChallenge(challengeId: string): Promise<UserChallenge[]> {
    await ChallengesService.challengeExists(challengeId);

    const usersScores = await UserChallengesModel.findAll({
      where: {
        challengeId,
      },
      include: "user",
      order: [["score", "DESC"]],
    });

    return usersScores as unknown as UserChallenge[];
  },
  
  async getStartedAt(userChallengId:string){
    const startedAt = await UserChallengesModel.findOne({where:{id: userChallengId}})
    if (!startedAt) throw new Error("Desafio não iniciado");

    return startedAt.get({plain: true}).startedAt;
  },

  async startChallenge({
    challengeId,
    userId
  }: UserIdChallengeIdType): Promise<UserChallenge> {
    await UsersService.userExists(userId);
    const finishAt = await ChallengesService.getFinishAt(challengeId);

    const startedBefore = await this.startedDateVerification({
      challengeId,
      userId
    });

    if (startedBefore == true){
      throw new Error("Você ainda não tem permissão para iniciar esse desafio.")
    }

    const challengeStarted = await UserChallengesModel.findOne({
      where: {
        challengeId,
        userId,
      },
    });
    if (challengeStarted) return challengeStarted as unknown as UserChallenge;

    const finishedAfter = await this.finishDateVerification(challengeId);
    
    if(finishedAfter == true){
      throw new Error("Você não pode iniciar o desafio.");
    }

    const startingChallenge = await UserChallengesModel.create({
      startedAt: new Date().toString(),
      challengeId,
      userId,
    });
    
    return startingChallenge as unknown as UserChallenge;
  },

  async getUserChallengeByUserAndChallenge({
    challengeId,userId
  }: UserIdChallengeIdType): Promise<UserChallenge> {
    await ChallengesService.challengeExists(challengeId);
    await UsersService.userExists(userId);

    const userChallenge = await UserChallengesModel.findOne({
      where: {
        challengeId,
        userId,
      }
    });
    if (!userChallenge) throw new Error("Desafio não iniciado pelo usuário");

    return userChallenge as unknown as UserChallenge;
  },

  async finishDateVerification(challengeId: string): Promise<boolean> {
    const finishAt = await ChallengesService.getFinishAt(challengeId);
    const finishedAfter = isAfter(new Date(), parseJSON(finishAt));
    
    return finishedAfter;
  },

  async endExpiredChallenge({ challengeId, userId, dateFinished }: DateFinishedType) {
    this.endChallenge({ 
      challengeId, 
      userId, 
      dateFinished 
    });
    throw new Error("Data limite para finalizar o desafio ultrapassada");
  },

  async startedDateVerification({
  challengeId
  }: DateVerificationType): Promise<boolean>{
  const startedAt = await ChallengesService.getStartedAt(challengeId);
  if(!startedAt){
    return false;
  }
  const startedBefore = isBefore(new Date(), parseJSON(startedAt));

  return startedBefore;
  },

  async endChallenge({ 
    challengeId, 
    userId, 
    dateFinished 
  }: DateFinishedType) {
    const userChallenge = await this.getUserChallengeByUserAndChallenge({ 
      challengeId, 
      userId
    });
    if (!userChallenge) throw new Error("Desafio não iniciado pelo usuário");
    
    const finishAt = await ChallengesService.getFinishAt(challengeId);
    const finishedAfter = isAfter(new Date(), parseJSON(finishAt));
    
    if (finishedAfter == true) {
      dateFinished = finishAt;
    }

    const userChallengeId = userChallenge.id;

    if (!userChallengeId) throw new Error ("Desafio do usuário não encontrado")

    const score = await UserDeliverablesService.getCountUserDeliverables(userChallengeId);

    await UserChallengesModel.update(
      { 
        finishedAt: dateFinished,
        score,
      },
      {
        where: {
          challengeId,
          userId,
        },
      }
    );
    return "Desafio finalizado";
  },
};

export default UserChallengesService;
