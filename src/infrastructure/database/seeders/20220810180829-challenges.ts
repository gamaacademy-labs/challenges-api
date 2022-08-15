"use strict";

import { QueryInterface, Sequelize } from "sequelize";
import { enum_challenge_difficult } from "../../../domain/challenges/challenge.entity";
import ChallengesModel from "../../../domain/challenges/challenges.model";

export default {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await ChallengesModel.bulkCreate(
      [
        {
          id: "be9316ba-90de-4860-90a4-d4bb8e1846db",
          title: "desafio-teste",
          description: "Lorem ipsum dolor sit amet, consectetur.",
          thumbnail: "Lorem ipsum dolor sit amet",
          level: enum_challenge_difficult.medium,
          instruction: "Lorem ipsum dolor sit amet, consectetur.",
          tags: "a, b, c",
          score: "12",
        },
        {
          id: "661d66e4-b36a-49a9-b2af-f5464ef59acb",
          title: "desafio-dois",
          description: "Lorem ipsum dolor sit amet, consectetur.",
          thumbnail: "Lorem ipsum dolor sit amet",
          level: enum_challenge_difficult.hard,
          instruction: "Lorem ipsum dolor sit amet, consectetur.",
          tags: "a, b, c",
          score: "12",
        },
        {
          id: "926ad065-6dd1-4add-ad90-91440b97172d",
          title: "desafio-tres",
          description: "Lorem ipsum dolor sit amet, consectetur.",
          thumbnail: "Lorem ipsum dolor sit amet",
          level: enum_challenge_difficult.easy,
          instruction: "Lorem ipsum dolor sit amet, consectetur.",
          tags: "a, b, c",
          score: "12",
        },
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await ChallengesModel.destroy({ truncate: true });
  },
};
