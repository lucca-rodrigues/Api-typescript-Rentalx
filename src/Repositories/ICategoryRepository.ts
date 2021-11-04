import { CategoryModel } from "../Models/CategoryModel";

interface ICreateCategoryRepository {
  findByName(name: string): CategoryModel;
  list(): CategoryModel[];
  create(name: string, description: string): void;
}

export { ICreateCategoryRepository };
