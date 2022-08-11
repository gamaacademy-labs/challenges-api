import express from "express";
import usersRouter from "./users.routes";
import challengesRouter from "./challenge.routes"
import materialsRouter from "./materials.routes";

const routes = express.Router();

routes.use(usersRouter);
routes.use(materialsRouter);
routes.use(challengesRouter)

export default routes;