import { CategoryModel } from "../Models/CategoryModel";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";

class PostgresCategoryRepository implements ICategoryRepository {
  findByName(name: string): CategoryModel {
    throw new Error("Method not implemented.");
  }

  list(): CategoryModel[] {
    throw new Error("Method not implemented.");
  }
  create(name, description): ICreateCategoryDTO {
    throw new Error("Method not implemented.");
  }
}

export { PostgresCategoryRepository };
