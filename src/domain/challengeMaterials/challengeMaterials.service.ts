import { ChallengeMaterial } from "./challengeMaterial.entity";
import ChallengeMaterialsModel from "./challengeMaterials.model";
import ChallengesService from "../challenges/challenges.service";


const ChallengeMaterialsService = {
    async getMaterialsByChallenge(challengeId: string): Promise<ChallengeMaterial[]> {
        await ChallengesService.challengeExists(challengeId);
        
        const material = await ChallengeMaterialsModel.findAll({ 
            where: { 
                challengeId
            }
        });
        
        return material as unknown as ChallengeMaterial[];
    }
}

export default ChallengeMaterialsService;