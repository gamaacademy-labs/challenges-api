import { User } from "./user.entity";
import UsersModel from "./users.model";

const UsersService = {
    async getUserByName(name: string): Promise<User> {
        let user = await UsersModel.findOne({ where: { name } })
        if(!user) throw new Error("Usuário não encontrado")

        return user.get({ plain: true })
    }
}

export default UsersService;