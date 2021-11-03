import { Router } from "express";
import { v4 as uuidV4 } from "uuid";

import { CategoriesRepository } from "../Repositories/CategoriesRepository";

const categoriesRoutes = Router();

const categoryRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request, response) => {
  const data = categoryRepository.show();
  return response.json(data);
});

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const categoryExists = categoryRepository.findByName(name);
  if (!categoryExists) {
    categoryRepository.create({
      name,
      description,
    });

    return response.status(201).send();
  }
  return response.status(400).send({ message: "Categoria já existente!" });
});

export { categoriesRoutes };
