class UploadFilesCategoryUseCase {
  execute(file: Express.Multer.File): void {
    console.log(file);
  }
}

export { UploadFilesCategoryUseCase };
