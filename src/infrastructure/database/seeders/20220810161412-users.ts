"use strict";

import { QueryInterface, Sequelize } from "sequelize";
import UsersModel from "../../../domain/users/users.model";

export default {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await UsersModel.bulkCreate(
      [
        {
          name: "Kaique Rodrigo Rodrigues",
          id: "2ee62d21-8957-4004-a3d5-b7f8220354b9"
        },
        {
          name: "Tomás Diego da Mota",
          id: "e5663bae-95b9-4a36-a836-2006a3bc0453"
        },
        {
          name: "Francisca Allana Lorena Ribeiro",
          id: "8857ecdf-c704-40f2-9cbe-f55096f1f331"
        },
        {
          name: "Josefina Silva Santos",
          id: "db1526a7-907f-4d47-b284-d4186e4c5c98"
        }
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await UsersModel.destroy({ truncate: true });
  }
};
