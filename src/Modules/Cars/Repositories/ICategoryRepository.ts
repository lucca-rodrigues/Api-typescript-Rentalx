import { CategoryModel } from "../Entities/CategoryModel";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}
interface ICategoryRepository {
  findByName(name: string): CategoryModel;
  show(): CategoryModel[];
  create(name, description): ICreateCategoryDTO;
}

export { ICategoryRepository, ICreateCategoryDTO };
