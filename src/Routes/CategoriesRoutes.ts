import { Router } from "express";
import { CategoriesRepository } from "../Modules/Cars/Repositories/CategoriesRepository";

import { CreateCategoryService } from "../Modules/Cars/UseCases/CreateCategory/CreateCategoryUseCase";

const categoriesRoutes = Router();

const categoryRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request, response) => {
  const data = categoryRepository.show();
  return response.json(data);
});

categoriesRoutes.post("/", (request, response) => {});

export { categoriesRoutes };
