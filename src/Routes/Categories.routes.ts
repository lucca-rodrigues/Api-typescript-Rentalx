import { Router } from "express";
import { CategoriesRepository } from "../Modules/Cars/Repositories/CategoriesRepository";
import { CreateCategoryService } from "../Modules/Cars/Services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository)

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.show();

  return response.json(categories);
});

export { categoriesRoutes };
