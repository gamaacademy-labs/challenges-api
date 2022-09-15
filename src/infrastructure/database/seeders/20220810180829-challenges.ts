"use strict";

import { QueryInterface, Sequelize } from "sequelize";
import { enum_challenge_difficult } from "../../../domain/challenges/challenge.entity";
import ChallengesModel from "../../../domain/challenges/challenges.model";

export default {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await ChallengesModel.bulkCreate(
      [
        {
          id: "be9316ba-90de-4860-90a4-d4bb8e1846db",
          title: "Desafio HTML",
          description: "Lorem ipsum dolor sit amet, consectetur.",
          thumbnail: "https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw",
          level: enum_challenge_difficult.medium,
          instruction: "Aliquam pharetra nec est a interdum. Pellentesque at urna dapibus, faucibus ex posuere, consequat lorem. Ut vestibulum ut ex ac placerat. Nulla facilisi. Donec at turpis quam. Sed interdum, arcu fringilla pulvinar hendrerit, felis ante rutrum orci, ac varius neque ligula quis massa. Ut sit amet urna tempus nunc blandit dignissim. Nunc accumsan in ante eget pharetra. Quisque eget euismod erat, et molestie lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eget feugiat nisi.",
          tags: "html5, html, front",
          score: 2,
          answers: "https://github.com/gamaacademy-labs/challenges-api",
          startedAt: "2020-08-01 23:59:59",
          finishAt: "2020-09-01 23:59:59",
        },
        {
          id: "661d66e4-b36a-49a9-b2af-f5464ef59acb",
          title: "Desafio JavaScript",
          description: "Lorem ipsum dolor sit amet, consectetur.",
          thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
          level: enum_challenge_difficult.hard,
          instruction: "Praesent tempor porta mi, et posuere nibh posuere nec. Nam vel sapien eu nulla congue sollicitudin. Fusce sem massa, congue vel tincidunt a, porta ut elit. Sed gravida lobortis dolor, id congue nisl pulvinar id. Sed dictum sollicitudin ligula, eleifend imperdiet tellus semper at. Cras convallis ligula sit amet nibh tincidunt, vel ultricies massa accumsan. Proin vestibulum congue est, quis fringilla massa congue at. Ut eget imperdiet nunc. Pellentesque a augue porttitor libero ullamcorper sagittis. Vivamus maximus dui sit amet convallis ullamcorper. Maecenas fringilla, massa ornare ultrices mattis, diam ex pulvinar velit, id feugiat ante diam rhoncus nisi. Proin fermentum aliquet lacus, ac tristique erat dignissim non. Aliquam eu justo nec est finibus consequat. Nam vulputate, lacus quis blandit pulvinar, diam magna rutrum urna, sit amet convallis neque turpis ut est. Morbi id velit ante.",
          tags: "javascript, ecma6",
          score: 2,
          answers: "https://github.com/gamaacademy-labs/challenges-web",
          startedAt: "2022-09-01 23:59:59",
          finishAt: "2022-10-01 23:59:59",
        },
        {
          id: "926ad065-6dd1-4add-ad90-91440b97172d",
          title: "Desafio Node",
          description: "Lorem ipsum dolor sit amet, consectetur.",
          thumbnail: "https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg",
          level: enum_challenge_difficult.easy,
          instruction: "Sed tincidunt placerat tortor sit amet pulvinar. Suspendisse et erat quis purus malesuada varius tincidunt id nibh. Mauris accumsan sapien ut orci dictum egestas. Praesent rutrum neque sem, vitae dictum purus tristique sit amet. Cras sodales, nisl nec luctus porta, orci nibh egestas magna, sed pretium metus tortor nec dolor. Integer aliquam dui turpis, eget hendrerit turpis eleifend ac. Suspendisse potenti. Aenean rutrum non nisl ut tristique. Duis in risus ut metus cursus bibendum. Mauris et purus orci. Pellentesque eget ligula ligula. Quisque magna lacus, accumsan sit amet venenatis non, convallis molestie velit. Etiam pretium nunc sit amet ornare dictum. Vivamus id ex ac nisl vestibulum scelerisque in quis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
          tags: "node",
          score: 3,
          answers: "https://github.com/gamaacademy-labs",
          finishAt: "2022-11-01 23:59:59",
        },
        {
          id: "886471b9-00df-4a9d-9138-4fbe703c9569",
          title: "Desafio React",
          description: "Lorem ipsum dolor.",
          thumbnail: "https://arquivo.devmedia.com.br/cursos/imagem/curso_o-que-e-react_2127.png",
          level: enum_challenge_difficult.easy,
          instruction: "Curabitur nec mollis dui. Sed auctor, velit ut placerat lobortis, nulla dolor egestas odio, non porta neque mauris a turpis. Pellentesque ut fringilla tortor, vel aliquam enim. Aliquam erat volutpat. Nam pretium magna eget auctor hendrerit. Vestibulum et mauris ipsum. Cras aliquet velit tortor, nec ornare diam maximus eleifend.Cras sagittis turpis et enim finibus suscipit. Duis a purus lorem. Nunc eleifend risus ac lacus condimentum, non vulputate orci dapibus. Donec tincidunt tellus quis tellus ultrices, id gravida lectus auctor. In hac habitasse platea dictumst. Vivamus quis pretium nisl, vitae vulputate arcu. Quisque feugiat dui et tempor maximus.",
          tags: "react, front",
          score: 1,
          answers: "https://github.com/gamaacademy-labs/assesment-api",
          startedAt: "2022-09-07 23:59:59",
          finishAt: "2022-10-01 23:59:59",
        },
        {
          id: "86d17248-3388-4412-9616-625672c045f9",
          title: "Desafio Next.js",
          description: "Lorem ipsum dolor.",
          thumbnail: "https://miro.medium.com/max/1000/0*hXm4rb8UAf5DEhZ2.png",
          level: enum_challenge_difficult.easy,
          instruction: "Vestibulum eu gravida ipsum, hendrerit pulvinar neque. Phasellus tincidunt mollis sapien vitae scelerisque. Nam vitae dictum diam. Sed egestas aliquet elit. Integer posuere erat nec sapien dapibus auctor. Sed at lacus a quam condimentum vehicula. Integer accumsan in nulla sit amet viverra. Sed auctor imperdiet orci. Etiam ante leo, egestas sed auctor sed, efficitur vel sapien. Integer erat magna, tincidunt ut faucibus et, rhoncus a justo. Nulla dictum imperdiet velit a elementum. Donec sagittis quis quam maximus imperdiet. Nullam finibus nibh quis eleifend sollicitudin. Aenean rhoncus sapien sed ante ullamcorper, quis tempor sem rhoncus. Maecenas odio lorem, iaculis sed orci non, placerat imperdiet lacus. Morbi fermentum commodo purus.",
          tags: "next",
          score: 1,
          answers: "Lorem ipsum dolor.",
          startedAt: "2022-07-07 23:59:59",
          finishAt: "2022-09-09 23:59:59",
        },
        {
          id: "78382a91-5583-45a0-b0e8-f1620918aa50",
          title: "Desafio Sequelize",
          description: "Lorem ipsum dolor.",
          thumbnail: "https://www.luiztools.com.br/wp-content/uploads/2021/01/sequelize.png",
          level: enum_challenge_difficult.easy,
          instruction: "Ut at risus pharetra mi pharetra pretium et et quam. Duis faucibus turpis turpis, a ullamcorper lacus tempus eu. Praesent diam dolor, pharetra quis volutpat id, scelerisque quis felis. Nam at ante ac ex rutrum dictum. Donec interdum mi quis diam fermentum, imperdiet feugiat massa ultricies. Fusce nisi odio, dictum vestibulum risus et, rhoncus posuere elit. Quisque pulvinar suscipit quam, et blandit nunc euismod sed. Proin elementum nulla vitae felis tempor, a posuere dui tempor. Curabitur sed felis sed leo sollicitudin sollicitudin lobortis nec augue. Integer fringilla maximus metus quis faucibus. Nulla lacinia urna arcu, sagittis ornare massa aliquet ut. Vestibulum gravida augue in lorem vulputate tristique. Cras accumsan tristique luctus. In hac habitasse platea dictumst. Quisque quis felis eget nisl pulvinar rhoncus tempus hendrerit urna. Phasellus eget sem at felis varius aliquet eu non leo.",
          tags: "sequlize, mysql",
          score: 1,
          answers: "https://github.com/gamaacademy-labs/assesment-api",
          startedAt: "2023-09-01 23:59:59",
          finishAt: "2023-10-03 23:59:59",
        },
      ],
      
      {}
    );
  },

  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await ChallengesModel.destroy({ truncate: true });
  },
};
