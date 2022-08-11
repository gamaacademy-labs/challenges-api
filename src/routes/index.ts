import express from "express";
import usersRouter from "./users.routes";
import challengesRouter from "./challenge.routes"

const routes = express.Router();

routes.use(usersRouter)
routes.use(challengesRouter)

export default routes;