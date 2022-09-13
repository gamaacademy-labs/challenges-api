import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import routes from "../routes";
import swaggerDocs from "../swagger.json";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

export default app;