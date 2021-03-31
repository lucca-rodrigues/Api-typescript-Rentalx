import { CategoriesRepository } from "../../Repositories/Implementations/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateCategoryUseCase {
  constructor (private categoriesRepository: CategoriesRepository) {}

  execute({ description, name }: IRequest): void {
    const categoryExists = this.categoriesRepository.findByName(name);

    if (categoryExists){
      throw new Error("Category already exists!");
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase }
