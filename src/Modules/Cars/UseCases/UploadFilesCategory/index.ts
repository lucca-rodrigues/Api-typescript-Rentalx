import { CategoryRepository } from "../../Repositories/Implementations/CategoryRepository";
import { UploadFilesCategoryController } from "./UploadFilesCategoryController";
import { UploadFilesCategoryUseCase } from "./UploadFilesCategoryUseCase";

const categoryRepository = null;
const uploadFilesCategoryUseCase = new UploadFilesCategoryUseCase(
  categoryRepository
);
const uploadFilesCategoryController = new UploadFilesCategoryController(
  uploadFilesCategoryUseCase
);

export { uploadFilesCategoryController };
