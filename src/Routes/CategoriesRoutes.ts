import { Router } from "express";
import { CategoriesRepository } from "../Modules/Cars/Repositories/CategoriesRepository";
import { PostgresCategoryRepository } from "../Modules/Cars/Repositories/PostgresCategoryRepository";

import { CreateCategoryService } from "../Modules/Cars/Services/CreateCategoryService";

const categoriesRoutes = Router();

const categoryRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request, response) => {
  const data = categoryRepository.show();
  return response.json(data);
});

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateCategoryService(categoryRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

export { categoriesRoutes };
