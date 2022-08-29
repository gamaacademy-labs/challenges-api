import { QueryInterface } from "sequelize";
import UserDeliverablesModel from "../../../domain/userDeliverables/userDeliverables.model";

export default {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      await UserDeliverablesModel.sync({ force: true });
    }),

  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      await UserDeliverablesModel.drop();
    }),
};
