'use strict';

import { QueryInterface, Sequelize } from "sequelize";
import { enum_material_type } from "../../../domain/materials/material.entity";
import MaterialsModel from "../../../domain/materials/materials.model";

export default {
  async up (queryInterface: QueryInterface, Sequelize: Sequelize) {
    await MaterialsModel.bulkCreate([{
      id: "7dbd8f91-0271-4f49-81a1-a5d1aba2a829",
      title: "video1",
      link: "www.google.com",
      type: enum_material_type.link,
      challengeId: "05a9e2e3-fd66-45b4-a8da-2e3025746eba"
    }, {
      id: "b5ab3e8a-6b0c-4035-b70c-8978177426b1",
      title: "file2",
      link: "file2.txt",
      type: enum_material_type.file,
      challengeId: "fc187155-6f70-405f-817f-a4e7e9c562de"
    }, {
      id: "aceb793d-f592-4b4f-a8e5-97b19fecb464",
      title: "file1",
      link: "file.txt",
      type: enum_material_type.file,
      challengeId: "fc187155-6f70-405f-817f-a4e7e9c562de"
    }], {});
  },

  async down (queryInterface: QueryInterface, Sequelize: Sequelize) {
    await MaterialsModel.destroy({ truncate: true })
  }
};
