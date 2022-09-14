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
          score: "587",
          startedAt: new Date().toString(),
          challengeId: "661d66e4-b36a-49a9-b2af-f5464ef59acb",
          userId: "2ee62d21-8957-4004-a3d5-b7f8220354b9",
        },
        {
          id: "ab65569c-853c-4e3d-afe8-6627fb4c60c9",
          score: "142",
          startedAt: new Date().toString(),
          finishedAt: new Date().toString(),
          challengeId: "661d66e4-b36a-49a9-b2af-f5464ef59acb",
          userId: "e5663bae-95b9-4a36-a836-2006a3bc0453",
        },
        {
          id: "4b382f0e-9a99-45c0-9f4f-d918797c3cf2",
          score: "800",
          startedAt: new Date().toString(),
          challengeId: "661d66e4-b36a-49a9-b2af-f5464ef59acb",
          userId: "8857ecdf-c704-40f2-9cbe-f55096f1f331",
        },
        {
          id: "3aeccdb5-d3b8-4284-8a07-913d1709245a",
          score: "200",
          startedAt: new Date().toString(),
          challengeId: "86d17248-3388-4412-9616-625672c045f9",
          userId: "8857ecdf-c704-40f2-9cbe-f55096f1f331",
        },
        {
          id: "1875e894-9c3e-4589-ad25-99ff2c61400e",
          score: "200",
          startedAt: new Date().toString(),
          challengeId: "886471b9-00df-4a9d-9138-4fbe703c9569",
          userId: "8857ecdf-c704-40f2-9cbe-f55096f1f331",
        },
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await UserChallengeModel.destroy({ truncate: true });
  },
};
