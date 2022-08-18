import { stringify } from "querystring";
import sequelize from "sequelize";
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
  }
};

export default UserChallengesService;
