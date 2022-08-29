import { QueryInterface } from "sequelize";
import ChallengeDeliverablesModel from "../../../domain/challengeDeliverables/challengeDeliverables.model";

export default {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async transaction => {
      await ChallengeDeliverablesModel.sync({ force: true });
    }),

  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async transaction => {
      await ChallengeDeliverablesModel.drop();
    })
};
