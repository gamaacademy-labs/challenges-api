import UserChallengesService from "../userChallenges/userChallenges.service";
import { UserDeliverable } from "./userDeliverable.entity";
import UserDeliverablesModel from "./userDeliverables.model";
import {
  createUserDeliverable_type,
  updateUserDeliverableId_type,
} from "./userDeliverables.types";
import { isAfter, parseJSON } from "date-fns";
import ChallengesService from "../challenges/challenges.service";

const UserDeliverablesService = {
  async includeUserDeliverable({
    userId,
    challengeId,
    challengeDeliverableId,
    link,
    explanation,
  }: createUserDeliverable_type): Promise<UserDeliverable> {
    const getUserChallenge = await UserChallengesService.getUserChallenge({
      userId,
      challengeId,
    });
    const userChallengeId = getUserChallenge.id;
    if (!userChallengeId) throw new Error("Desafio não iniciado pelo usuário");

    const finishAt = await ChallengesService.getFinishAt(challengeId);
    const finishedAfter = isAfter(new Date(), parseJSON(finishAt));

    if (finishedAfter == true) {
      throw new Error("Data limite para a entrega do desafio ultrapassada");
    }

    const includeUserDeliverable = await UserDeliverablesModel.create({
      userChallengeId,
      challengeDeliverableId,
      link,
      explanation,
    });

    return includeUserDeliverable as unknown as UserDeliverable;
  },

  async updateUserDeliverable({
    link,
    explanation,
    userDeliverableId,
    challengeId,
    userId,
  }: updateUserDeliverableId_type) {
    const getUserChallenge = await UserChallengesService.getUserChallenge({
      userId,
      challengeId,
    });

    const userChallengefinished = getUserChallenge.finishedAt;
    if (userChallengefinished) {
      throw new Error("Desafio já finalizado");
    }

    const finishAt = await ChallengesService.getFinishAt(challengeId);
    const finishedAfter = isAfter(new Date(), parseJSON(finishAt));

    if (finishedAfter == true) {
      throw new Error("Data limite para a entrega do desafio ultrapassada");
    }
    const updateUserDeliverable = await UserDeliverablesModel.update(
      {
        link,
        explanation,
      },
      {
        where: {
          id: userDeliverableId,
        },
      }
    );
    return updateUserDeliverable;
  },
  async getDeliverableById(
    userDeliverableId: string
  ): Promise<UserDeliverable> {
    let userDeliverablesId = await UserDeliverablesModel.findOne({
      where: {
        id: userDeliverableId,
      },
    });
    if (!userDeliverablesId) throw new Error("Desafio não encontrado");

    return userDeliverablesId.get({ plain: true });
  },
};

export default UserDeliverablesService;
