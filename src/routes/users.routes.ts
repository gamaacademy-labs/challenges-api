import express from "express";
import UsersController from "../domain/users/users.controller";

const usersRouter = express.Router();

usersRouter.get("/users/:name", UsersController.getUserByName)

export default usersRouter;