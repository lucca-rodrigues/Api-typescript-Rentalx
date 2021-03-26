import { Router } from "express";
import { CategoriesRepository } from "../Modules/Cars/Repositories/CategoriesRepository";
import { createCategoryController } from "../Modules/Cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.show();

  return response.json(categories);
});

export { categoriesRoutes };
