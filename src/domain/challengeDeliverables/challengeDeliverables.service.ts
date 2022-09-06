import { ChallengeDeliverable } from "./challengeDeliverable.entity";
import ChallengeDeliverablesModel from "./challengeDeliverables.model";

const ChallengeDeliverablesService = {
    async getChallengeDeliverableById(challengeDeliverableId: string): Promise<ChallengeDeliverable> {
        const challengeDeliverable = await ChallengeDeliverablesModel.findOne({
            where: {
                id: challengeDeliverableId
            }
        });

        return challengeDeliverable as unknown as ChallengeDeliverable;
    },
}

export default ChallengeDeliverablesService;
