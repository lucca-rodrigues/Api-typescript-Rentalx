import { Router } from "express";

import { createCategoryController } from "../Modules/Cars/UseCases/CreateCategory";
import { listCategoryController } from "../Modules/Cars/UseCases/Listcategory";

const categoryRoutes = Router();

categoryRoutes.get("/", (request, response) => {
  return listCategoryController.handle(request, response);
});

categoryRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

export { categoryRoutes };
