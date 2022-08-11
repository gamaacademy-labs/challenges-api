import { Challenge } from "./challenge.entity";
import ChallengeModel from "./challenges.model";

const ChallengesService = {
  async getChallengeByName(id: string): Promise<Challenge> {
    let challenge = await ChallengeModel.findOne({
      where: { id },
      include: "deliverables"
    });
    if (!challenge) throw new Error("Desafio não encontrado");

    return challenge.get({ plain: true });
  }
};

export default ChallengesService;
