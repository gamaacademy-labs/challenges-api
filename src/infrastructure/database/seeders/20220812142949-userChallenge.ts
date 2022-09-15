"use strict";
import { QueryInterface, Sequelize } from "sequelize";
import UserChallengeModel from "../../../domain/userChallenges/userChallenges.model";

export default {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await UserChallengeModel.bulkCreate(
      [
        {
          id: "d42403b2-a25d-4f02-9b4e-997fa9f9ada0",
          startedAt: new Date().toString(),
          challengeId: "be9316ba-90de-4860-90a4-d4bb8e1846db",
          userId: "e5663bae-95b9-4a36-a836-2006a3bc0453",
        },
        {
          id: "43c72a4b-83e8-49ce-ac00-2f26a0e07b67",
          startedAt: new Date().toString(),
          challengeId: "be9316ba-90de-4860-90a4-d4bb8e1846db",
          userId: "db1526a7-907f-4d47-b284-d4186e4c5c98",
        },
        {
          id: "e23857e7-7ffa-4978-97af-5669ff95b665",
          score: 1,
          startedAt: new Date().toString(),
          finishedAt: new Date().toString(),
          challengeId: "661d66e4-b36a-49a9-b2af-f5464ef59acb",
          userId: "2ee62d21-8957-4004-a3d5-b7f8220354b9",
        },
        {
          id: "ab65569c-853c-4e3d-afe8-6627fb4c60c9",
          score: 2,
          startedAt: new Date().toString(),
          finishedAt: new Date().toString(),
          challengeId: "661d66e4-b36a-49a9-b2af-f5464ef59acb",
          userId: "e5663bae-95b9-4a36-a836-2006a3bc0453",
        },
        {
          id: "4b382f0e-9a99-45c0-9f4f-d918797c3cf2",
          startedAt: new Date().toString(),
          challengeId: "661d66e4-b36a-49a9-b2af-f5464ef59acb",
          userId: "8857ecdf-c704-40f2-9cbe-f55096f1f331",
        },
        {
          id: "d536ed07-7826-47e2-8a0c-0f69373ad50d",
          score: 3,
          startedAt: new Date().toString(),
          finishedAt: new Date().toString(),
          challengeId: "926ad065-6dd1-4add-ad90-91440b97172d",
          userId: "e5663bae-95b9-4a36-a836-2006a3bc0453",
        },
        {
          id: "5cd13538-090f-4a5a-adad-2554b09e2e58",
          score: 2,
          startedAt: new Date().toString(),
          finishedAt: new Date().toString(),
          challengeId: "926ad065-6dd1-4add-ad90-91440b97172d",
          userId: "2ee62d21-8957-4004-a3d5-b7f8220354b9",
        },
        {
          id: "9b12fd84-14b4-4b0c-843e-fa1638ea7a61",
          startedAt: new Date().toString(),
          challengeId: "926ad065-6dd1-4add-ad90-91440b97172d",
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
