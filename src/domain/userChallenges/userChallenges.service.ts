import sequelize from "sequelize";
import { UserChallenge } from "./userChallenges.entity";
import UserChallengesModel from "./userChallenges.model";

const UserChallengesService = {
  async getScoresByChallenge(challengeId: string): Promise<UserChallenge[]> {
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
