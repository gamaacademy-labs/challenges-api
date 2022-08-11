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
      challengeId: "661d66e4-b36a-49a9-b2af-f5464ef59acb"
    }, {
      id: "b5ab3e8a-6b0c-4035-b70c-8978177426b1",
      title: "file2",
      link: "file2.txt",
      type: enum_material_type.file,
      challengeId: "926ad065-6dd1-4add-ad90-91440b97172d"
    }, {
      id: "aceb793d-f592-4b4f-a8e5-97b19fecb464",
      title: "file1",
      link: "file.txt",
      type: enum_material_type.file,
      challengeId: "926ad065-6dd1-4add-ad90-91440b97172d"
    }], {});
  },

  async down (queryInterface: QueryInterface, Sequelize: Sequelize) {
    await MaterialsModel.destroy({ truncate: true })
  }
};
