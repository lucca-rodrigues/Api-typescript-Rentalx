import { Request, Response } from "express";
import { UploadFilesCategoryUseCase } from "./UploadFilesCategoryUseCase";

class UploadFilesCategoryController {
  constructor(private importCategoryUseCase: UploadFilesCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoryUseCase.execute(file);

    return response.send();
  }
}

export { UploadFilesCategoryController };
