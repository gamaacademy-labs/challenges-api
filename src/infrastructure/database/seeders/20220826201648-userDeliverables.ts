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
          userChallengeId: "d42403b2-a25d-4f02-9b4e-997fa9f9ada0",
          challengeDeliverableId: "eca72141-0be4-455f-bbb1-e38c6668af69"
        },
        {
          id: "2895bda4-b97a-4cd1-95ea-c1ea175394a9",
          link: "www.site11.com.br",
          explanation: "Lorem ipsum malesuada tellus.",
          userChallengeId: "d42403b2-a25d-4f02-9b4e-997fa9f9ada0",
          challengeDeliverableId: "eca72141-0be4-455f-bbb1-e38c6668af69"
        },
        {
          id: "1fa3139a-c7ca-48fc-8aa8-be63e383a684",
          link: "www.site2.com.br",
          explanation: "Lorem ipsum malesuada tellus, vulputate donec lacinia duis.",
          userChallengeId: "43c72a4b-83e8-49ce-ac00-2f26a0e07b67",
          challengeDeliverableId: "eca72141-0be4-455f-bbb1-e38c6668af69"
        },
        {
          id: "eaac6341-e1c0-49fa-98cc-7b8da30cbebd",
          link: "www.site3.com.br",
          explanation: "Lorem ipsum malesuada tellus, vulputate donec.",
          userChallengeId: "e23857e7-7ffa-4978-97af-5669ff95b665",
          challengeDeliverableId: "13967613-da69-4c55-9fbd-d3d731bfff9a"
        },
        {
          id: "3a294f0b-725b-4c87-baed-2516a9efe41b",
          link: "www.site4.com.br",
          explanation: "Lorem ipsum malesuada tellus.",
          userChallengeId: "ab65569c-853c-4e3d-afe8-6627fb4c60c9",
          challengeDeliverableId: "13967613-da69-4c55-9fbd-d3d731bfff9a"
        },
        {
          id: "e77436aa-c09e-4acf-adaf-6d1bd2934145",
          link: "www.site5.com.br",
          explanation: "Quisque tincidunt.",
          userChallengeId: "d536ed07-7826-47e2-8a0c-0f69373ad50d",
          challengeDeliverableId: "f947511f-f8a4-4dc4-ab7d-88b9223037b7"
        },
        {
          id: "e517e09e-b880-47a4-8389-203da1034b51",
          link: "www.site55.com.br",
          explanation: "Duis tempus, ipsum eget.",
          userChallengeId: "d536ed07-7826-47e2-8a0c-0f69373ad50d",
          challengeDeliverableId: "e7cfaa35-ba9d-4d65-b695-8859ee6f7629"
        },
        {
          id: "636bf1f7-2cce-4580-920c-1f784d6bf153",
          link: "www.site555.com.br",
          explanation: "Morbi interdum velit nec.",
          userChallengeId: "d536ed07-7826-47e2-8a0c-0f69373ad50d",
          challengeDeliverableId: "58f34daf-0205-433d-9d37-15338b7cc6d1"
        },
        {
          id: "c824fc4c-4630-45f9-97ea-7dbd7453d1bd",
          link: "www.site6.com.br",
          explanation: "Nisl mauris gravida mi",
          userChallengeId: "5cd13538-090f-4a5a-adad-2554b09e2e58",
          challengeDeliverableId: "e7cfaa35-ba9d-4d65-b695-8859ee6f7629"
        },
        {
          id: "28279daf-4eb6-4c99-8944-2ba3452bacdd",
          link: "www.site66.com.br",
          explanation: "Curabitur mi tortor, faucibus vitae",
          userChallengeId: "5cd13538-090f-4a5a-adad-2554b09e2e58",
          challengeDeliverableId: "58f34daf-0205-433d-9d37-15338b7cc6d1"
        },
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await UserDeliverablesModel.destroy({ truncate: true });
  }
};
