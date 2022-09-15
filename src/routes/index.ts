import express from "express";
import usersRouter from "./users.routes";
import challengesRouter from "./challenges.routes";
import challengeMaterialsRouter from "./challengeMaterials.routes";
import userChallengesRouter from "./userChallenges.routes";
import userDeliverablesRouter from "./userDeliverables.routes";

const routes = express.Router();

routes.use(usersRouter);
routes.use(challengeMaterialsRouter);
routes.use(challengesRouter);
routes.use(userChallengesRouter);
routes.use(userDeliverablesRouter)

export default routes;
