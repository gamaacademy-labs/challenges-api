import { Challenge } from "./challenge.entity";
import ChallengesModel from "./challenges.model";
import { isAfter, parseJSON } from "date-fns";

const ChallengesService = {
  async challengeExists(challengeId: string) {
    const challengeExists = await ChallengesModel.count({
      where: {
        id: challengeId,
      },
    });
    if (!challengeExists) throw new Error("Desafio não encontrado");
  },

  async finishDateVerification(challengeId: string) {
    const finishAt = await this.getFinishAt(challengeId);
    const finishedAfter = isAfter(new Date(), parseJSON(finishAt));
    
    if (finishedAfter == true) {
      throw new Error("Data limite para a entrega do desafio ultrapassada");
    }
  },

  async getChallengeById(challengeId: string): Promise<Challenge> {
    let challenge = await ChallengesModel.findOne({
      where: { 
        id: challengeId 
      },
      include: "challenges_deliverables",
    });
    if (!challenge) throw new Error("Desafio não encontrado");

    return challenge.get({ plain: true });
  },
  
  async getAllChallenges(): Promise<Challenge[]> {
    let challengesList = await ChallengesModel.findAll();
    if (challengesList.length < 1) throw new Error("Não existe nenhum desafio");
    return challengesList as unknown as Challenge[];
  },

  async getFinishAt(challengeId:string) {
    const finishAt = await this.getChallengeById(challengeId);
    return finishAt.finishAt;
  }
};

export default ChallengesService;
