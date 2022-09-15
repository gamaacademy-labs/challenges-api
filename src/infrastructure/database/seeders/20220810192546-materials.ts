'use strict';

import { QueryInterface, Sequelize } from "sequelize";
import { enum_material_type } from "../../../domain/challengeMaterials/challengeMaterial.entity";
import ChallengeMaterialsModel from "../../../domain/challengeMaterials/challengeMaterials.model";

export default {
  async up (queryInterface: QueryInterface, Sequelize: Sequelize) {
    await ChallengeMaterialsModel.bulkCreate([{
      id: "5e760261-4f1b-41b8-b232-d36ce5ffed60",
      title: "HTML",
      link: "html.pdf",
      type: enum_material_type.file,
      challengeId: "be9316ba-90de-4860-90a4-d4bb8e1846db"
    },{
      id: "7dbd8f91-0271-4f49-81a1-a5d1aba2a829",
      title: "JavaScript",
      link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
      type: enum_material_type.link,
      challengeId: "661d66e4-b36a-49a9-b2af-f5464ef59acb"
    }, {
      id: "b5ab3e8a-6b0c-4035-b70c-8978177426b1",
      title: "Node",
      link: "node.pdf",
      type: enum_material_type.file,
      challengeId: "926ad065-6dd1-4add-ad90-91440b97172d"
    }, {
      id: "aceb793d-f592-4b4f-a8e5-97b19fecb464",
      title: "Node avançado",
      link: "node-avancado.pdf",
      type: enum_material_type.file,
      challengeId: "926ad065-6dd1-4add-ad90-91440b97172d"
    }, {
      id: "471a3f52-d8e5-4d25-bb87-316bc5f68580",
      title: "React",
      link: "https://pt-br.reactjs.org/docs/getting-started.html",
      type: enum_material_type.link,
      challengeId: "886471b9-00df-4a9d-9138-4fbe703c9569"
    }, {
      id: "fe3468ef-6f7d-40ee-87cb-f85e467e27b3",
      title: "Next",
      link: "next.pdf",
      type: enum_material_type.file,
      challengeId: "86d17248-3388-4412-9616-625672c045f9"
    }], {});
  },

  async down (queryInterface: QueryInterface, Sequelize: Sequelize) {
    await ChallengeMaterialsModel.destroy({ truncate: true })
  }
};
