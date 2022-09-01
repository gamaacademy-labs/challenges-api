import UserChallengesService from "../userChallenges/userChallenges.service";
import { UserDeliverable } from "./userDeliverable.entity";
import UserDeliverablesModel from "./userDeliverables.model";
import { createUserDeliverable_type } from "./userDeliverables.types";
import { isAfter, parseJSON } from "date-fns";
import ChallengesService from "../challenges/challenges.service";

const UserDeliverablesService = {
    async includeUserDeliverable({
        userId,
        challengeId,
        challengeDeliverableId,
        link,
        explanation
      }: createUserDeliverable_type): Promise<UserDeliverable> {
        const getUserChallenge = await UserChallengesService.getUserChallenge({
            userId,
            challengeId
        });
        const userChallengeId = getUserChallenge.id;
        if (!userChallengeId) throw new Error("Desafio não iniciado pelo usuário");

        const finishAt = await ChallengesService.getFinishAt(challengeId);
        const finishedAfter = isAfter(new Date(), parseJSON(finishAt));
        
        if(finishedAfter == true){
            throw new Error("Data limite para a entrega do desafio ultrapassada")
        }
        
        const includeUserDeliverable = await UserDeliverablesModel.create({
            userChallengeId,
            challengeDeliverableId,
            link,
            explanation
          });

        return includeUserDeliverable as unknown as UserDeliverable;
    },

    async getDeliverableById(id: string): Promise<UserDeliverable> {
        let userDeliverables = await UserDeliverablesModel.findOne({
            where: {
                id
            }
        });
        if (!userDeliverables) throw new Error("Desafio não encontrado");

        return userDeliverables.get({ plain: true });
      
    }

}

export default UserDeliverablesService;

