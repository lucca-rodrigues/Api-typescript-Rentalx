import { CategoryRepository } from "../../Repositories/Implementations/CategoryRepository";
import { UploadFilesCategoryController } from "./UploadFilesCategoryController";
import { UploadFilesCategoryUseCase } from "./UploadFilesCategoryUseCase";

const categoryRepository = CategoryRepository.getInstance();
const uploadFilesCategoryUseCase = new UploadFilesCategoryUseCase(
  categoryRepository
);
const uploadFilesCategoryController = new UploadFilesCategoryController(
  uploadFilesCategoryUseCase
);

export { uploadFilesCategoryController };
