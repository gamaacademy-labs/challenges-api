import { Material } from "./material.entity";
import MaterialsModel from "./materials.model";
import ChallengesModel from "../challenges/challenges.model";


const MaterialsService = {

    async getMaterialsByChallenge(challengeId: string): Promise<Material[]> {
        const challengeExists = await ChallengesModel.count({
            where: {
                id: challengeId
            }
        });
        
        if(!challengeExists) throw new Error("Desafio não encontrado");

        const material = await MaterialsModel.findAll({ 
            where: { 
                challengeId
            }
        });
        
        return material as unknown as Material[];
    }
}

export default MaterialsService;