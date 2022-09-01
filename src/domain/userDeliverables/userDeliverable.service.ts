import  { UserDeliverable }  from "./userDeliverable.entity";
import UserDeliverablesModel from "./userDeliverables.model"

const UserDeliverableService = {
    async getDeliverableById(id: string): Promise<UserDeliverable> {
        let userDeliverables = await UserDeliverablesModel.findOne({
            where: {
                id
            }
        });
        if (!userDeliverables) throw new Error("Desafio não encontrado");

        return userDeliverables.get({ plain: true });
      
    }
}

export default UserDeliverableService
