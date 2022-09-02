import { Challenge } from "./challenge.entity";
import ChallengeModel from "./challenges.model";

const ChallengesService = {
  async getChallengeById(challengeId: string): Promise<Challenge> {
    let challenge = await ChallengeModel.findOne({
      where: { 
        id: challengeId 
      },
      include: "challenges_deliverables",
    });
    if (!challenge) throw new Error("Desafio não encontrado");

    return challenge.get({ plain: true });
  },
  
  async getAllChallenges(): Promise<Challenge[]> {
    let challengesList = await ChallengeModel.findAll();
    if (challengesList.length < 1) throw new Error("Não existe nenhum desafio");
    return challengesList as unknown as Challenge[];
  },

  async getFinishAt(challengeId:string){
    const finishAt = await ChallengeModel.findOne({where:{id: challengeId}})
    if (!finishAt) throw new Error("Desafio não encontrado");
    return finishAt.get({ plain: true }).finishAt;
  }
};

export default ChallengesService;
