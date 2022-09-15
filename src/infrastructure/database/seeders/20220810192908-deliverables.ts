"use strict";

import { QueryInterface, Sequelize } from "sequelize";
import ChallengeDeliverablesModel from "../../../domain/challengeDeliverables/challengeDeliverables.model";


export default {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await ChallengeDeliverablesModel.bulkCreate(
      [
        {
          id: "eca72141-0be4-455f-bbb1-e38c6668af69",
          title: "Nullam eget venenatis magna",
          description: "Sed non metus sapien. Aenean et ornare augue, sit amet sagittis nisi.",
          averageTime: 30,
          challengeId: "be9316ba-90de-4860-90a4-d4bb8e1846db"
        },
        {
          id: "33a626f3-f488-404b-beda-f4a893594505",
          title: "Nullam eget",
          description: "Sed non metus sapien.",
          averageTime: 10,
          challengeId: "be9316ba-90de-4860-90a4-d4bb8e1846db"
        },
        {
          id: "13967613-da69-4c55-9fbd-d3d731bfff9a",
          title: "Pellentesque est dolor",
          description: "Mauris sed condimentum nisl, sed lobortis nibh. Phasellus ultricies scelerisque velit ornare finibus.",
          averageTime: 45,
          challengeId: "661d66e4-b36a-49a9-b2af-f5464ef59acb"
        },
        {
          id: "f77e6b1e-4dd2-4cd4-8067-998c9452b30f",
          title: "Est dolor",
          description: "Sed lobortis nibh. Phasellus ultricies scelerisque velit ornare finibus.",
          averageTime: 35,
          challengeId: "661d66e4-b36a-49a9-b2af-f5464ef59acb"
        },
        {
          id: "f947511f-f8a4-4dc4-ab7d-88b9223037b7",
          title: "Pellentesque",
          description: "Mauris sed condimentum nisl.",
          averageTime: 90,
          challengeId: "926ad065-6dd1-4add-ad90-91440b97172d"
        },
        {
          id: "e7cfaa35-ba9d-4d65-b695-8859ee6f7629",
          title: "Duis massa neque",
          description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
          averageTime: 15,
          challengeId: "926ad065-6dd1-4add-ad90-91440b97172d"
        },
        {
          id: "58f34daf-0205-433d-9d37-15338b7cc6d1",
          title: "Curabitur mi tortor",
          description: "Mauris a pellentesque elit. Fusce id dolor mauris.",
          averageTime: 45,
          challengeId: "926ad065-6dd1-4add-ad90-91440b97172d"
        },
        {
          id: "28a6605a-42dd-4ba2-a948-4226035ccc99",
          title: "Venenatis magna",
          description: "Aenean et ornare augue, sit amet sagittis nisi.",
          averageTime: 15,
          challengeId: "886471b9-00df-4a9d-9138-4fbe703c9569"
        },
        {
          id: "e8abcbdf-49d1-42c5-85c0-60f8b870ab03",
          title: "Venenatis magna",
          description: "Aenean it amet sagittis nisi.",
          averageTime: 25,
          challengeId: "86d17248-3388-4412-9616-625672c045f9"
        },
        {
          id: "678abe27-85d2-45fc-8d26-8d1b00568e82",
          title: "Venenatis magna",
          description: "Ornare augue, sit amet sagittis.",
          averageTime: 35,
          challengeId: "78382a91-5583-45a0-b0e8-f1620918aa50"
        }
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await ChallengeDeliverablesModel.destroy({ truncate: true });
  }
};
