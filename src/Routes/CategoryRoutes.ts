import { Router } from "express";
import multer from "multer";

import { uploadFilesCategoryController } from "../Modules/Cars/UseCases/UploadFilesCategory";
import { listCategoryController } from "../Modules/Cars/UseCases/Listcategory";
import { CreateCategoryController } from "../Modules/Cars/UseCases/CreateCategory/CreateCategoryController";

const categoryRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

categoryRoutes.get("/", (request, response) => {
  return listCategoryController.handle(request, response);
});

categoryRoutes.post("/", createCategoryController.handle);

categoryRoutes.post("/files", upload.single("file"), (request, response) => {
  return uploadFilesCategoryController.handle(request, response);
});

export { categoryRoutes };
