import { Request, Response } from "express";
import UsersService from "./users.service";

const UsersController = {
    async getUserById(req: Request, res: Response) {
        try {
            let { userId } = req.params

            let data = await UsersService.getUserById(userId)

            res.status(200)
            res.json(data)
            
        } catch (err: any) {
            res.status(400)
            res.json({
                message: err.message
            })
        }
    }
}

export default UsersController