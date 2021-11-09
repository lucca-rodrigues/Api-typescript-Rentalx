import csvParse from "csv-parse";
import fs from "fs";
import { CategoryRepository } from "../../Repositories/Implementations/CategoryRepository";

interface IImportCategory {
  name: string;
  description: string;
}
class UploadFilesCategoryUseCase {
  constructor(private categoriesRepository: CategoryRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;

          categories.push({ name, description });
        })
        .on("end", () => {
          fs.promises.unlink(file.path); // Remove file after read
          resolve(categories);
        })
        .on("error", (err) => reject(err));

      return categories;
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const existsCategory = await this.categoriesRepository.findByName(name);

      if (!existsCategory) {
        await this.categoriesRepository.create({ name, description });
      }
    });
  }
}

export { UploadFilesCategoryUseCase };
