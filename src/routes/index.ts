import express from "express";
import usersRouter from "./users.routes";
import materialsRouter from "./materials.routes";

const routes = express.Router();

routes.use(usersRouter);
routes.use(materialsRouter);

export default routes;