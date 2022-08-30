import express from "express";
import usersRouter from "./users.routes";
import challengesRouter from "./challenge.routes";
import challengeMaterialsRouter from "./challengeMaterials.routes";
import usersChallengeRouter from "./usersChallenge.routes";

const routes = express.Router();

routes.use(usersRouter);
routes.use(challengeMaterialsRouter);
routes.use(challengesRouter);
routes.use(usersChallengeRouter);

export default routes;
