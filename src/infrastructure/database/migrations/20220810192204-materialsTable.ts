import { QueryInterface } from "sequelize";
import MaterialsModel from "../../../domain/materials/materials.model";

export default {
    up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
        async (transaction) => {
          await MaterialsModel.sync({ force: true })
        }
    ),

    down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
        async (transaction) => {
          await MaterialsModel.drop()
        }
    )
};