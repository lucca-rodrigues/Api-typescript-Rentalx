import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../Modules/Cars/UseCases/CreateCategory";
import { listCategoryController } from "../Modules/Cars/UseCases/Listcategory";

const categoryRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoryRoutes.get("/", (request, response) => {
  return listCategoryController.handle(request, response);
});

categoryRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoryRoutes.post("/files", upload.single("file"), (request, response) => {
  const { file } = request;
  console.log(file);

  return response.send();
});

export { categoryRoutes };
