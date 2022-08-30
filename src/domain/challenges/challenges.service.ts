import { Challenge } from "./challenge.entity";
import ChallengeModel from "./challenges.model";

const ChallengesService = {
  async getChallengeById(id: string): Promise<Challenge> {
    let challenge = await ChallengeModel.findOne({
      where: { id },
      include: "deliverables",
    });
    if (!challenge) throw new Error("Desafio não encontrado");

    return challenge.get({ plain: true });
  },
  
  async getAllChallenges(): Promise<Challenge[]> {
    let challengesList = await ChallengeModel.findAll();

    if (challengesList.length < 1) throw new Error("Não existe nenhum desafio");

    return challengesList as unknown as Challenge[];
  },

  async getDeadline(challengeId:string){
    const deadline: any = await ChallengeModel.findOne({where:{id: challengeId}})
    return deadline.deadline;
  }
};

export default ChallengesService;
