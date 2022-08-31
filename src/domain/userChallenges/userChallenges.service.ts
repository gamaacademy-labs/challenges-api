import { isAfter, parseJSON } from "date-fns";
import ChallengesModel from "../challenges/challenges.model";
import ChallengesService from "../challenges/challenges.service";
import UsersModel from "../users/users.model";
import { UserChallenge } from "./userChallenges.entity";
import UserChallengesModel from "./userChallenges.model";
import {
  DateFinished_type,
  UserIdChallengeId_type
} from "./userChallenges.types";

const UserChallengesService = {
  async getScoresByChallenge(challengeId: string): Promise<UserChallenge[]> {
    const challengeExists = await ChallengesModel.count({
      where: {
        id: challengeId,
      },
    });
    if (!challengeExists) throw new Error("Desafio não encontrado");
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
    userId,
    challengeId,
  }: UserIdChallengeId_type): Promise<UserChallenge> {
    const userExists = await UsersModel.count({
      where: {
        id: userId,
      },
    });
    if (!userExists) throw new Error("Usuário não encontrado");

    const challengeStarted = await UserChallengesModel.count({
      where: {
        userId,
        challengeId,
      },
    });
    if (challengeStarted == 1) throw new Error("Desafio já foi iniciado");

    const startingChallenge = await UserChallengesModel.create({
      userId,
      challengeId,
      startedAt: new Date().toString(),
    });

    const finishAt = await ChallengesService.getFinishAt(challengeId)
    const finishedAfter = isAfter(new Date(), parseJSON(finishAt))
    
    if(finishedAfter == true){
      this.endChallenge({ challengeId, userId, dateFinished: finishAt })
      await UserChallengesModel.update({ startedAt: finishAt },
        {
          where: {
            challengeId,
            userId,
          },
        })
      throw new Error("Data limite para finalizar o desafio ultrapassada")
    }
    
    return startingChallenge as unknown as UserChallenge;
  },

  async getUserChallenge({
    userId,
    challengeId,
  }: UserIdChallengeId_type): Promise<UserChallenge> {
    const challengeExists = await ChallengesModel.count({
      where: {
        id: challengeId,
      },
    });
    if (!challengeExists) throw new Error("Desafio não encontrado");

    const userExists = await UsersModel.count({
      where: {
        id: userId,
      },
    });
    if (!userExists) throw new Error("Usuário não encontrado");

    const userChallenge = await UserChallengesModel.findOne({
      where: {
        challengeId,
        userId,
      },
    });
    if (!userChallenge) throw new Error("Desafio não iniciado pelo usuário");

    return userChallenge as unknown as UserChallenge;
  },

  async endChallenge({ challengeId, userId, dateFinished }: DateFinished_type) {
    const userChallenge = await UserChallengesModel.findOne({
      where: {
        challengeId,
        userId,
      },
    });
    if (!userChallenge) throw new Error("Desafio não iniciado pelo usuário");

    const finishChallenge = await UserChallengesModel.update(
      { finishedAt: dateFinished },
      {
        where: {
          challengeId,
          userId,
        },
      }
    );
    return finishChallenge;
  },
};

export default UserChallengesService;
