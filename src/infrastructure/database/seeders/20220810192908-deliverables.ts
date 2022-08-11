"use strict";

import { QueryInterface, Sequelize } from "sequelize";
import DeliverablesModel from "../../../domain/deliverables/deliverables.model";

export default {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await DeliverablesModel.bulkCreate(
      [
        {
          id: "13967613-da69-4c55-9fbd-d3d731bfff9a",
          title: "Pellentesque est dolor",
          description:
            "Mauris sed condimentum nisl, sed lobortis nibh. Phasellus ultricies scelerisque velit ornare finibus.",
          averageTime: 45,
          challengeId: "661d66e4-b36a-49a9-b2af-f5464ef59acb"
        },
        {
          id: "eca72141-0be4-455f-bbb1-e38c6668af69",
          title: "Nullam eget venenatis magna",
          description:
            "Sed non metus sapien. Aenean et ornare augue, sit amet sagittis nisi.",
          averageTime: 30,
          challengeId: "be9316ba-90de-4860-90a4-d4bb8e1846db"
        }
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await DeliverablesModel.destroy({ truncate: true });
  }
};
