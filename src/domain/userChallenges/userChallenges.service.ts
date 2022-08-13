import sequelize from "sequelize";
import ChallengesModel from "../challenges/challenges.model";
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
  }
};

export default UserChallengesService;
