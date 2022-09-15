import { QueryInterface } from "sequelize";
import UsersModel from "../../../domain/users/users.model";

export default {
    up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
        async (transaction) => {
          await UsersModel.sync({ force: true })
        }
    ),

    down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
        async (transaction) => {
          await UsersModel.drop()
        }
    )
};