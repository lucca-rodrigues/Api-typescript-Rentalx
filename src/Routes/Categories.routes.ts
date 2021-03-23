import { Router } from "express";
import { CategoriesRepository } from "../Repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
 const { name, description } = request.body;

 const categoryExists = categoriesRepository.findByName(name);

 if (categoryExists){
   return response.status(400).json({error: 'Category Exists'});
 }

 categoriesRepository.create({ name, description });

 return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.show();

  return response.json(categories);
});

export {categoriesRoutes};
