import { CategoryModel } from "../Models/CategoryModel";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}
interface ICategoryRepository {
  findByName(name: string): CategoryModel;
  list(): CategoryModel[];
  create(name, description): ICreateCategoryDTO;
}

export { ICategoryRepository, ICreateCategoryDTO };
