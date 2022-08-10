import { Request, Response } from "express";
import UsersService from "./users.service";

const UsersController = {
    async getUserByName(req: Request, res: Response) {
        try {
            let name = req.params.name

            let data = await UsersService.getUserByName(name)

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