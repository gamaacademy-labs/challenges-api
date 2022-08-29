import { ChallengeMaterial } from "./challengeMaterial.entity";
import ChallengeMaterialsModel from "./challengeMaterials.model";
import ChallengesModel from "../challenges/challenges.model";


const ChallengeMaterialsService = {

    async getMaterialsByChallenge(challengeId: string): Promise<ChallengeMaterial[]> {
        const challengeExists = await ChallengesModel.count({
            where: {
                id: challengeId
            }
        });
        
        if(!challengeExists) throw new Error("Desafio não encontrado");

        const material = await ChallengeMaterialsModel.findAll({ 
            where: { 
                challengeId
            }
        });
        
        return material as unknown as ChallengeMaterial[];
    }
}

export default ChallengeMaterialsService;