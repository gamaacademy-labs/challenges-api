import { QueryInterface } from "sequelize";
import ChallengeMaterialsModel from "../../../domain/challengeMaterials/challengeMaterials.model";

export default {
    up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
        async (transaction) => {
          await ChallengeMaterialsModel.sync({ force: true })
        }
    ),

    down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
        async (transaction) => {
          await ChallengeMaterialsModel.drop()
        }
    )
};