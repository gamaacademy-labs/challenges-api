"use strict";
import { QueryInterface, Sequelize } from "sequelize";
import UserDeliverablesModel from "../../../domain/userDeliverables/userDeliverables.model";

export default {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await UserDeliverablesModel.bulkCreate(
      [
        {
          id: "51caf855-e713-4f2b-b0bb-4e224af4de1e",
          link: "www.site1.com.br",
          explanation: "Lorem ipsum malesuada tellus, vulputate donec lacinia duis, elementum vestibulum.",
          usersChallengesId: "d42403b2-a25d-4f02-9b4e-997fa9f9ada0",
          challengeDeliverablesId: "eca72141-0be4-455f-bbb1-e38c6668af69"
        },
        {
          id: "eaac6341-e1c0-49fa-98cc-7b8da30cbebd",
          link: "www.site2.com.br",
          explanation: "Lorem ipsum malesuada tellus, vulputate donec lacinia duis, elementum vestibulum.",
          usersChallengesId: "e23857e7-7ffa-4978-97af-5669ff95b665",
          challengeDeliverablesId: "13967613-da69-4c55-9fbd-d3d731bfff9a"
        },
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await UserDeliverablesModel.destroy({ truncate: true });
  }
};
