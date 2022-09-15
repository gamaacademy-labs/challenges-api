import { QueryInterface } from "sequelize";
import UserChallengesModel from "../../../domain/userChallenges/userChallenges.model";

export default {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      await UserChallengesModel.sync({ force: true });
    }),

  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      await UserChallengesModel.drop();
    }),
};
