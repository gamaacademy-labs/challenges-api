"use strict";
import { QueryInterface, Sequelize } from "sequelize";
import UserDeliverablesModel from "../../../domain/userDeliverables/userDeliverables.model";

export default {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await UserDeliverablesModel.bulkCreate(
      [
        {
          id: "51caf855-e713-4f2b-b0bb-4e224af4de1e",
          link: "https://github.com/lmtfn/desafiochefao-techdental",
          explanation: "Duis non feugiat orci. Aliquam ultricies sem nec molestie molestie. Vivamus vel nisi commodo lorem tristique fermentum. Ut finibus varius gravida. Etiam auctor nisi et finibus tempus. Nullam magna purus, dapibus et ullamcorper id, condimentum eget tellus. Pellentesque fringilla vitae nisi eget eleifend. In imperdiet placerat dui, ornare scelerisque mi porttitor non. Nulla in nisi eget sapien finibus vehicula. Praesent pretium, tellus vel fringilla sagittis, dolor augue dapibus ante, et bibendum ante ligula nec ante. Vestibulum facilisis consequat ultricies. Proin eleifend et mauris a ullamcorper. Maecenas nec pellentesque libero, eget iaculis enim. Nam tincidunt, nisl vitae rutrum faucibus, tortor enim tincidunt nibh, ac gravida leo mauris vel libero. Morbi sed diam in justo aliquam egestas.",
          userChallengeId: "d42403b2-a25d-4f02-9b4e-997fa9f9ada0",
          challengeDeliverableId: "eca72141-0be4-455f-bbb1-e38c6668af69"
        },
        {
          id: "2895bda4-b97a-4cd1-95ea-c1ea175394a9",
          link: "https://github.com/helenilsonholamek/boleto-inter",
          explanation: "Sed dolor justo, dignissim sit amet lacinia vel, semper at dui. Integer sit amet sem vel magna tempor imperdiet sed sed lorem. In dapibus augue arcu, ac venenatis nulla rutrum non. Sed vel iaculis ligula. Etiam blandit diam eu augue aliquam, in finibus leo euismod. Proin eu dictum est, non ullamcorper nulla. Nam eu ante velit. Fusce egestas fringilla lectus, vitae porttitor massa tempor a. Nulla semper id nulla at lobortis. Aliquam vel mauris quis orci cursus lobortis. Nunc vitae dui ut sapien dictum bibendum. Curabitur in massa vestibulum, tincidunt tellus sed, convallis quam. Praesent purus ante, dapibus at eros a, consequat cursus turpis. Aenean facilisis euismod dui, aliquam finibus ligula viverra nec.",
          userChallengeId: "d42403b2-a25d-4f02-9b4e-997fa9f9ada0",
          challengeDeliverableId: "eca72141-0be4-455f-bbb1-e38c6668af69"
        },
        {
          id: "1fa3139a-c7ca-48fc-8aa8-be63e383a684",
          link: "https://github.com/CintiaMacchia/Desafio-Chefao",
          explanation: "Aenean quis lorem auctor, fermentum ipsum et, pharetra tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin finibus facilisis dignissim. Ut dictum ex vehicula luctus porttitor. Proin justo libero, convallis at nulla et, maximus blandit orci. Etiam sapien leo, mattis ac viverra ut, pharetra non augue. Sed nibh ipsum, tempus porttitor imperdiet quis, auctor ut eros. Nullam sit amet porttitor urna. Vestibulum semper neque et ultricies tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec nisl lacus. Praesent sit amet augue in ante tincidunt luctus ut a neque. Donec pharetra tempus nibh in tempus.",
          userChallengeId: "43c72a4b-83e8-49ce-ac00-2f26a0e07b67",
          challengeDeliverableId: "eca72141-0be4-455f-bbb1-e38c6668af69"
        },
        {
          id: "eaac6341-e1c0-49fa-98cc-7b8da30cbebd",
          link: "https://github.com/laura-cordeiro/challenge-backend-teste",
          explanation: "Cras molestie erat vel quam faucibus sollicitudin. Maecenas sed nisi non purus euismod sollicitudin quis sed purus. Proin quis justo ut augue aliquam gravida. Pellentesque fermentum, libero lacinia volutpat molestie, ex lectus condimentum dui, et tempus magna felis non ex. Proin molestie suscipit tempor. Cras blandit, orci ultrices congue condimentum, ante elit vehicula quam, quis iaculis nunc erat vitae orci. Curabitur mattis id velit ac maximus. Etiam nec augue mattis, ultricies urna ut, hendrerit diam. Quisque ut consequat metus. Morbi sed facilisis tellus. Maecenas mattis augue ut libero aliquet dictum.",
          userChallengeId: "e23857e7-7ffa-4978-97af-5669ff95b665",
          challengeDeliverableId: "13967613-da69-4c55-9fbd-d3d731bfff9a"
        },
        {
          id: "3a294f0b-725b-4c87-baed-2516a9efe41b",
          link: "https://github.com/simaraconceicao/javascript-ii-gama-xp",
          explanation: "Vivamus lacinia, nulla at pulvinar pellentesque, quam libero convallis eros, quis consectetur nisi leo eget odio. Curabitur at quam eget est pulvinar maximus. Mauris quis semper turpis. Nunc malesuada turpis venenatis, dictum metus at, viverra neque. Pellentesque nec bibendum ligula. Proin congue elementum euismod. Nam non odio nisi. Donec efficitur neque et ante consequat sagittis. Phasellus neque dui, condimentum at libero in, gravida imperdiet tellus. Sed sit amet nisi nec sem ultrices auctor ac eu dui. Phasellus malesuada dignissim libero, ac aliquam leo suscipit ut. Proin tincidunt tempus sodales.",
          userChallengeId: "ab65569c-853c-4e3d-afe8-6627fb4c60c9",
          challengeDeliverableId: "13967613-da69-4c55-9fbd-d3d731bfff9a"
        },
        {
          id: "cbab50e6-039f-4e3e-a2a5-d9c9de3913a0",
          link: "https://github.com/professorisidro/api-express-sequelize",
          explanation: "Curabitur erat sem, mollis finibus nunc vel, ultricies suscipit lorem. Mauris ipsum erat, vulputate in finibus nec, rutrum ut dui. Curabitur blandit vestibulum diam non blandit. Integer dapibus ipsum vitae nulla accumsan, non hendrerit neque mattis. Integer ac facilisis est. Vestibulum in metus eu neque mattis suscipit. Duis maximus ipsum ut suscipit consequat. Proin elementum lacinia tortor, sodales consequat ligula suscipit nec. Nam sed ligula nec mi convallis gravida vel ac est. Vestibulum et tincidunt eros, vel facilisis neque. Donec consectetur massa felis, eu varius dolor condimentum vel. Vivamus eleifend mauris diam, et euismod nulla semper vitae. Vestibulum quis nulla nec massa blandit eleifend sit amet sed risus. Aenean maximus velit sem, efficitur euismod turpis venenatis et.",
          userChallengeId: "ab65569c-853c-4e3d-afe8-6627fb4c60c9",
          challengeDeliverableId: "f77e6b1e-4dd2-4cd4-8067-998c9452b30f"
        },
        {
          id: "e77436aa-c09e-4acf-adaf-6d1bd2934145",
          link: "https://github.com/engcfraposo/angular-poc-copa-do-mundo",
          explanation: "Proin pharetra ante ut magna scelerisque, quis vulputate ex ullamcorper. Aliquam ut gravida nisi, in facilisis libero. Nullam vel mauris aliquet, vulputate ipsum vel, sagittis lacus. In sit amet eros interdum, aliquet sem vitae, tristique ante. Cras laoreet nisl tincidunt rhoncus vestibulum. Cras fringilla porttitor euismod. Maecenas sed varius ligula, sit amet facilisis nibh. Donec eu pellentesque nisi, sed posuere odio. Morbi vitae tincidunt ex, eu consequat velit. Morbi pulvinar ultricies justo, convallis tristique dolor volutpat nec. Suspendisse in sodales tellus, a rhoncus sem. Nam dapibus felis mi, vitae semper velit tincidunt vel. In dignissim ante turpis. Nulla in consequat nisi. Curabitur euismod odio id placerat aliquam.",
          userChallengeId: "d536ed07-7826-47e2-8a0c-0f69373ad50d",
          challengeDeliverableId: "f947511f-f8a4-4dc4-ab7d-88b9223037b7"
        },
        {
          id: "e517e09e-b880-47a4-8389-203da1034b51",
          link: "https://github.com/NataliaLira/livraria-pagina-nova-deploy",
          explanation: "Sed imperdiet lorem nisi, vel finibus nisl viverra in. Curabitur sed sapien tincidunt, pellentesque neque vel, semper augue. Donec eu pellentesque justo. Nunc commodo mi vel ex iaculis, ac tempus elit malesuada. Aenean molestie, velit et ullamcorper hendrerit, magna dolor rhoncus orci, non lobortis mi ante eget elit. Donec scelerisque nibh ante. Aliquam metus purus, aliquet nec massa nec, mollis laoreet sem. Integer a purus non erat imperdiet blandit. Curabitur placerat, odio sit amet varius eleifend, tellus nunc tincidunt tortor, quis rutrum odio tortor in leo. Praesent quis ligula malesuada, dignissim nisi sed, pretium nibh. Suspendisse nec ultrices lacus, scelerisque egestas est. Fusce pharetra mi vel nunc pellentesque mollis. Pellentesque placerat semper justo id convallis. Duis aliquet volutpat risus ut semper.",
          userChallengeId: "d536ed07-7826-47e2-8a0c-0f69373ad50d",
          challengeDeliverableId: "e7cfaa35-ba9d-4d65-b695-8859ee6f7629"
        },
        {
          id: "636bf1f7-2cce-4580-920c-1f784d6bf153",
          link: "https://github.com/rafaballerini/GitTutorial",
          explanation: "Vivamus lacinia, nulla at pulvinar pellentesque, quam libero convallis eros, quis consectetur nisi leo eget odio. Curabitur at quam eget est pulvinar maximus. Mauris quis semper turpis. Nunc malesuada turpis venenatis, dictum metus at, viverra neque. Pellentesque nec bibendum ligula. Proin congue elementum euismod. Nam non odio nisi. Donec efficitur neque et ante consequat sagittis. Phasellus neque dui, condimentum at libero in, gravida imperdiet tellus. Sed sit amet nisi nec sem ultrices auctor ac eu dui. Phasellus malesuada dignissim libero, ac aliquam leo suscipit ut. Proin tincidunt tempus sodales.",
          userChallengeId: "d536ed07-7826-47e2-8a0c-0f69373ad50d",
          challengeDeliverableId: "58f34daf-0205-433d-9d37-15338b7cc6d1"
        },
        {
          id: "c824fc4c-4630-45f9-97ea-7dbd7453d1bd",
          link: "https://github.com/franciscpd/parrot-front-logical",
          explanation: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut sodales odio nibh, ac semper magna malesuada in. Donec elementum arcu ut leo interdum, ac aliquam leo laoreet. Pellentesque non elit semper, mattis nisl quis, placerat diam. Nam id congue lorem. Phasellus pellentesque justo non ligula pulvinar hendrerit. Maecenas tincidunt velit enim. Duis nec ultricies dolor. Nulla pretium augue justo, volutpat porttitor velit consectetur tincidunt. Aliquam eget tincidunt felis. Maecenas ac consectetur magna. Donec pellentesque scelerisque congue. Curabitur non finibus nisi. Morbi consectetur quis erat eu pellentesque. Integer ac nulla egestas, pretium mi a, consectetur orci.",
          userChallengeId: "5cd13538-090f-4a5a-adad-2554b09e2e58",
          challengeDeliverableId: "e7cfaa35-ba9d-4d65-b695-8859ee6f7629"
        },
        {
          id: "28279daf-4eb6-4c99-8944-2ba3452bacdd",
          link: "https://github.com/DanielObara/Javascript_Gama_Academy",
          explanation: "Proin et sem diam. Sed lacinia velit blandit nisi varius tincidunt. Praesent lorem ex, interdum et luctus non, gravida quis urna. Nulla enim arcu, aliquam ac ipsum nec, fermentum dignissim quam. Donec eget mauris efficitur, sodales mauris et, viverra nunc. Nam quis porttitor lorem. Vivamus sapien diam, mattis a est nec, ornare hendrerit diam. Vestibulum porttitor ultricies sem imperdiet ullamcorper. Vestibulum sed ex nec sem tincidunt aliquet. Donec a faucibus purus, sit amet pretium ipsum. Nulla convallis convallis dolor. Curabitur mollis hendrerit enim, vitae dignissim mi posuere id. Quisque volutpat tempus metus, non pharetra sem. Praesent eros purus, commodo ac purus non, pulvinar sagittis enim.",
          userChallengeId: "5cd13538-090f-4a5a-adad-2554b09e2e58",
          challengeDeliverableId: "58f34daf-0205-433d-9d37-15338b7cc6d1"
        },
        {
          id: "4834d499-d255-4797-b63f-86904ae42d6e",
          link: "https://github.com/NikolasRoger/teste-desenvolvedor-mobile",
          explanation: "Proin pharetra ante ut magna scelerisque, quis vulputate ex ullamcorper. Aliquam ut gravida nisi, in facilisis libero. Nullam vel mauris aliquet, vulputate ipsum vel, sagittis lacus. In sit amet eros interdum, aliquet sem vitae, tristique ante. Cras laoreet nisl tincidunt rhoncus vestibulum. Cras fringilla porttitor euismod. Maecenas sed varius ligula, sit amet facilisis nibh. Donec eu pellentesque nisi, sed posuere odio. Morbi vitae tincidunt ex, eu consequat velit. Morbi pulvinar ultricies justo, convallis tristique dolor volutpat nec. Suspendisse in sodales tellus, a rhoncus sem. Nam dapibus felis mi, vitae semper velit tincidunt vel. In dignissim ante turpis. Nulla in consequat nisi. Curabitur euismod odio id placerat aliquam.",
          userChallengeId: "4b382f0e-9a99-45c0-9f4f-d918797c3cf2",
          challengeDeliverableId: "13967613-da69-4c55-9fbd-d3d731bfff9a"
        }
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await UserDeliverablesModel.destroy({ truncate: true });
  }
};
