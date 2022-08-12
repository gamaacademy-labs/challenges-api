"use strict";
import { QueryInterface, Sequelize } from "sequelize";
import UserChallengeModel from "../../../domain/userChallenges/userChallenges.model";

export default {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await UserChallengeModel.bulkCreate(
      [
        {
          id: "d42403b2-a25d-4f02-9b4e-997fa9f9ada0",
          score: "633",
          startedAt: new Date().toString(),
          challengeId: "be9316ba-90de-4860-90a4-d4bb8e1846db",
          userId: "e5663bae-95b9-4a36-a836-2006a3bc0453",
        },
        {
          id: "e23857e7-7ffa-4978-97af-5669ff95b665",
          score: "777",
          startedAt: new Date().toString(),
          challengeId: "661d66e4-b36a-49a9-b2af-f5464ef59acb",
          userId: "2ee62d21-8957-4004-a3d5-b7f8220354b9",
        },
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await UserChallengeModel.destroy({ truncate: true });
  },
};
