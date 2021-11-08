import { UploadFilesCategoryController } from "./UploadFilesCategoryController";
import { UploadFilesCategoryUseCase } from "./UploadFilesCategoryUseCase";

const uploadFilesCategoryUseCase = new UploadFilesCategoryUseCase();
const uploadFilesCategoryController = new UploadFilesCategoryController(
  uploadFilesCategoryUseCase
);

export { uploadFilesCategoryController };
