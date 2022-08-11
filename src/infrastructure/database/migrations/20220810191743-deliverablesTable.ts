import { QueryInterface } from "sequelize";
import DeliverablesModel from "../../../domain/deliverables/deliverables.model";

export default {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async transaction => {
      await DeliverablesModel.sync({ force: true });
    }),

  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async transaction => {
      await DeliverablesModel.drop();
    })
};
