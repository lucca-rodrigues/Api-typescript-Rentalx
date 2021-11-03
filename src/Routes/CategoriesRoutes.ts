import { Router } from "express";
import { v4 as uuidV4 } from "uuid";

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.get("/categories", (request, response) => {
  response.json({ categories });
});

categoriesRoutes.post("/categories", (request, response) => {
  const { name, description } = request.body;

  console.log("name", name);

  const category = {
    id: uuidV4(),
    name,
    description,
  };

  categories.push(category);

  console.log(category);

  return response.status(201).send();
});

export { categoriesRoutes };
