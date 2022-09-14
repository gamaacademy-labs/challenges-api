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
          thumbnail: "https://escolauniwork.com.br/wp-content/uploads/2021/09/html-5-logo.pngt",
          level: enum_challenge_difficult.medium,
          instruction: "Lorem ipsum dolor sit amet, consectetur.",
          tags: "a, b, c",
          score: "12",
          answers: "Lorem ipsum dolor sit amet",
          startedAt: "2020-08-01 23:59:59",
          finishAt: "2020-09-01 23:59:59",
        },
        {
          id: "661d66e4-b36a-49a9-b2af-f5464ef59acb",
          title: "desafio-dois",
          description: "Lorem ipsum dolor sit amet, consectetur.",
          thumbnail: "https://www.devmedia.com.br/arquivos/cursos/curso_introducao-ao-javascript_2181.png",
          level: enum_challenge_difficult.hard,
          instruction: "Lorem ipsum dolor sit amet, consectetur.",
          tags: "a, b, c",
          score: "12",
          answers: "Lorem ipsum dolor sit amet",
          startedAt: "2022-12-01 23:59:59",
          finishAt: "2022-10-01 23:59:59",
        },
        {
          id: "926ad065-6dd1-4add-ad90-91440b97172d",
          title: "desafio-tres",
          description: "Lorem ipsum dolor sit amet, consectetur.",
          thumbnail: "https://i.ytimg.com/vi/IOfDoyP1Aq0/maxresdefault.jpg",
          level: enum_challenge_difficult.easy,
          instruction: "Lorem ipsum dolor sit amet, consectetur.",
          tags: "a, b, c",
          score: "12",
          answers: "Lorem ipsum dolor sit amet",
          finishAt: "2022-11-01 23:59:59",
        },
        {
          id: "886471b9-00df-4a9d-9138-4fbe703c9569",
          title: "desafio-quatro",
          description: "Lorem ipsum dolor.",
          thumbnail: "https://arquivo.devmedia.com.br/cursos/imagem/curso_o-que-e-react_2127.png",
          level: enum_challenge_difficult.easy,
          instruction: "Lorem ipsum dolor.",
          tags: "d, e, f",
          score: "15",
          answers: "Lorem ipsum dolor.",
          startedAt: "2022-09-07 23:59:59",
          finishAt: "2022-10-01 23:59:59",
        },
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await ChallengesModel.destroy({ truncate: true });
  },
};
