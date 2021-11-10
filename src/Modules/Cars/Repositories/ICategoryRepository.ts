import { CategoryModel } from "../Entities/CategoryModel";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}
interface ICategoryRepository {
  findByName(name: string): Promise<CategoryModel>;
  show(): Promise<CategoryModel[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoryRepository, ICreateCategoryDTO };
