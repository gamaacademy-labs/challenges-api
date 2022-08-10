'use strict';

import { QueryInterface, Sequelize } from "sequelize";
import UsersModel from "../../../domain/users/users.model";

export default {
  async up (queryInterface: QueryInterface, Sequelize: Sequelize) {
    await UsersModel.bulkCreate([{
      name: 'jhon',
      id: "2ee62d21-8957-4004-a3d5-b7f8220354b9"
    }, {
      name: "foo",
      id: "e5663bae-95b9-4a36-a836-2006a3bc0453"
    }], {});
  },

  async down (queryInterface: QueryInterface, Sequelize: Sequelize) {
    await UsersModel.destroy()
  }
};
