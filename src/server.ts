import express from "express";
import { categoryRoutes } from "./Routes/CategoryRoutes";

import { specificationRoutes } from "./Routes/SpecificationRoutes";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.use("/categories", categoryRoutes);
app.use("/specifications", specificationRoutes);
app.listen(3333, () => console.log("Server started on port 3333"));
