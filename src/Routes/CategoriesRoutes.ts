import { Router } from "express";
import { CategoriesRepository } from "../Modules/Cars/Repositories/CategoriesRepository";
import { createCategoryController } from "../Modules/Cars/UseCases/CreateCategory";

const categoriesRoutes = Router();

const categoryRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request, response) => {
  const data = categoryRepository.show();
  return response.json(data);
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

export { categoriesRoutes };
