import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./Routes";

import swaggerFile from "./swagger.json";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Api Ok!");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);
app.listen(3333, () => console.log("Server started on port 3333"));
