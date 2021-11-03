import { Router } from "express";
import { v4 as uuidV4 } from "uuid";

import { CategoryModel } from "../Models/CategoryModel";

const categoriesRoutes = Router();

const categories: CategoryModel[] = [];

categoriesRoutes.get("/categories", (request, response) => {
  response.json({ categories });
});

categoriesRoutes.post("/categories", (request, response) => {
  const { name, description } = request.body;

  const category: CategoryModel = {
    name,
    description,
    created_at: new Date(),
  };

  categories.push(category);

  console.log(category);

  return response.status(201).send();
});

export { categoriesRoutes };
