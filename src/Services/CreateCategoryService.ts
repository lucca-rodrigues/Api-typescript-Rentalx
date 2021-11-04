import { CategoriesRepository } from "../Repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryExists = this.categoriesRepository.findByName(name);

    if (categoryExists) {
      throw Error("Category already exists");
    }
    this.categoriesRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryService };
