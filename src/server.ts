import express from "express";

import { categoriesRoutes } from "./Routes/CategoriesRoutes";
import { specificationsRoutes } from "./Routes/SpecificationsRoutes";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);
app.listen(3333, () => console.log("Server started on port 3333"));
