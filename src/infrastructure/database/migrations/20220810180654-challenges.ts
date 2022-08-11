import { QueryInterface } from "sequelize";
import ChallengesModel from "../../../domain/challenges/challenges.model";

export default {
    up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
        async (transaction) => {
          await ChallengesModel.sync({ force: true })
        }
    ),

    down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
        async (transaction) => {
          await ChallengesModel.drop()
        }
    )
};