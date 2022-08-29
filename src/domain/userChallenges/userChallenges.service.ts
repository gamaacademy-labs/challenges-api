import ChallengesModel from "../challenges/challenges.model";
import UsersModel from "../users/users.model";
import { UserChallenge } from "./userChallenges.entity";
import UserChallengesModel from "./userChallenges.model";

const UserChallengesService = {
  async getScoresByChallenge(challengeId: string): Promise<UserChallenge[]> {
    const challengeExists = await ChallengesModel.count({
      where: {
        id: challengeId
      }
    });
    if (!challengeExists) throw new Error("Desafio não encontrado");
    const usersScores = await UserChallengesModel.findAll({
      where: {
        challengeId
      },
      include: "user",
      order: [["score", "DESC"]]
    });

    return usersScores as unknown as UserChallenge[];
  },

  async startChallenge(
    userId: string,
    challengeId: string
  ): Promise<UserChallenge> {
    const userExists = await UsersModel.count({
      where: {
        id: userId
      }
    });

    if (!userExists) throw new Error("Usuário não encontrado");
    const challengeStarted = await UserChallengesModel.count({
      where: {
        userId,
        challengeId
      }
    });

    if (challengeStarted == 1) throw new Error("Desafio já foi iniciado");
    const startingChallenge = await UserChallengesModel.create({
      userId,
      challengeId
    });
    return startingChallenge as unknown as UserChallenge;
  },

  async getUserChallenge({ 
    challengeId, 
    userId 
  }: any): Promise<UserChallenge> {
    const challengeExists = await ChallengesModel.count({
      where: {
        id: challengeId
      }
    });
    if (!challengeExists) throw new Error("Desafio não encontrado");

    const userExists = await UsersModel.count({
      where: {
        id: userId
      }
    });
    if (!userExists) throw new Error("Usuário não encontrado");

    const userChallenge = await UserChallengesModel.findOne({
      where: {
        challengeId,
        userId
      }
    });
    if (!userChallenge) throw new Error("Desafio não iniciado pelo usuário");

    return userChallenge as unknown as UserChallenge;
  },
  
};

export default UserChallengesService;
