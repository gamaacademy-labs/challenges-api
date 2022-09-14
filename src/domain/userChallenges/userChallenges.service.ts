import { isAfter, isBefore, parseJSON } from "date-fns";
import ChallengesService from "../challenges/challenges.service";
import UsersService from "../users/users.service";
import { UserChallenge } from "./userChallenge.entity";
import UserChallengesModel from "./userChallenges.model";
import { DateFinishedType, DateVerificationType, UserIdChallengeIdType } from "./userChallenges.types";

const UserChallengesService = {
  async userChallengeExists(userChallengeId: string) {
    const userChallengeExists = await UserChallengesModel.count({
      where: {
        id: userChallengeId,
      },
    });
    if (!userChallengeExists) throw new Error("ID de desafio do usuário não é válido");
  },

  async getScoresByChallenge(challengeId: string): Promise<UserChallenge[]> {
    await ChallengesService.challengeExists(challengeId);

    const usersScores = await UserChallengesModel.findAll({
      where: {
        challengeId,
      },
      include: "user",
      order: [["score", "DESC"]],
    });

    return usersScores as unknown as UserChallenge[];
  },
  
  async getStartedAt(userChallengId:string){
    const startedAt = await UserChallengesModel.findOne({where:{id: userChallengId}})
    if (!startedAt) throw new Error("Desafio não iniciado");

    return startedAt.get({plain: true}).startedAt;
  },

  async startChallenge({
    challengeId,
    userId
  }: UserIdChallengeIdType): Promise<UserChallenge> {
    await UsersService.userExists(userId);
    const finishAt = await ChallengesService.getFinishAt(challengeId);
    const startedAt = await ChallengesService.getStartedAt(challengeId);

    const startedBefore = await this.startedDateVerification({
      challengeId,
      userId
    });

    if (startedBefore == true){
      throw new Error("Você ainda não tem permissão para iniciar esse desafio.")
    }
        
    const challengeStarted = await UserChallengesModel.count({
      where: {
        challengeId,
        userId,
      },
    });
    if (challengeStarted == 1) throw new Error("Desafio já foi iniciado");

    const startingChallenge = await UserChallengesModel.create({
      challengeId,
      userId,
      startedAt: new Date().toString(),
    });


    const finishedAfter = await this.finishDateVerification({ 
      challengeId, 
      userId 
    });
    
    if(finishedAfter == true){
      await UserChallengesModel.update({        
        startedAt: finishAt 
      },
      {
        where: {
          challengeId,
          userId,
        },
      })
      throw new Error("Data limite para finalizar o desafio ultrapassada")
    }
    
    return startingChallenge as unknown as UserChallenge;
  },

  async getUserChallengeByUserAndChallenge({
    challengeId,userId
  }: UserIdChallengeIdType): Promise<UserChallenge> {
    await ChallengesService.challengeExists(challengeId);
    await UsersService.userExists(userId);

    const userChallenge = await UserChallengesModel.findOne({
      where: {
        challengeId,
        userId,
      }
    });
    if (!userChallenge) throw new Error("Desafio não iniciado pelo usuário");

    return userChallenge as unknown as UserChallenge;
  },

  async finishDateVerification({ 
    challengeId, 
    userId 
  }: DateVerificationType): Promise<boolean> {
    const finishAt = await ChallengesService.getFinishAt(challengeId);
    const finishedAfter = isAfter(new Date(), parseJSON(finishAt));
    
    if (finishedAfter == true) {
      this.endChallenge({ 
        challengeId, 
        userId, 
        dateFinished: finishAt 
      });
      throw new Error("Data limite para finalizar o desafio ultrapassada");
    }
    return finishedAfter;
  },

  async startedDateVerification({
  challengeId
  }: DateVerificationType): Promise<boolean>{
  const startedAt = await ChallengesService.getStartedAt(challengeId);
  if(!startedAt){
    return false;
  }
  const startedBefore = isBefore(new Date(), parseJSON(startedAt));

  return startedBefore;
  },

  async endChallenge({ 
    challengeId, 
    userId, 
    dateFinished 
  }: DateFinishedType) {
    const userChallenge = await this.getUserChallengeByUserAndChallenge({ 
      challengeId, 
      userId
    });
    if (!userChallenge) throw new Error("Desafio não iniciado pelo usuário");
    
    const finishAt = await ChallengesService.getFinishAt(challengeId);
    const finishedAfter = isAfter(new Date(), parseJSON(finishAt));
    
    if (finishedAfter == true) {
      dateFinished = finishAt;
    }

    await UserChallengesModel.update(
      { 
        finishedAt: dateFinished 
      },
      {
        where: {
          challengeId,
          userId,
        },
      }
    );
    return "Desafio finalizado";
  },
};

export default UserChallengesService;
