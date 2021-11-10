import { container } from "tsyringe";
import { ICategoryRepository } from "../../Modules/Cars/Repositories/ICategoryRepository";
import { CategoryRepository } from "../../Modules/Cars/Repositories/Implementations/CategoryRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);
