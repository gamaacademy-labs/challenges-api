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
          challengeId: "00ae2d57-bff3-4da1-a43c-5b790098c039"
        },
        {
          id: "eca72141-0be4-455f-bbb1-e38c6668af69",
          title: "Nullam eget venenatis magna",
          description:
            "Sed non metus sapien. Aenean et ornare augue, sit amet sagittis nisi.",
          averageTime: 30,
          challengeId: "f176a272-4766-41c5-98f7-d89436625da7"
        }
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await DeliverablesModel.destroy({ truncate: true });
  }
};
