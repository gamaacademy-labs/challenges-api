import { Challenge } from "./challenge.entity";
import ChallengeModel from "./challenges.model";

const ChallengesService = {
    async getChallengeByName(tittle: string): Promise<Challenge> {
        let challenge = await ChallengeModel.findOne({ where: { tittle } })
        if(!challenge) throw new Error("Usuário não encontrado")

        return challenge.get({ plain: true })
    }
}

export default ChallengesService