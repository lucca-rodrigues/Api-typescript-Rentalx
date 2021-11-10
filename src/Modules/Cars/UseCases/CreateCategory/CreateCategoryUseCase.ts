import { CategoryRepository } from "../../Repositories/Implementations/CategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryExists = this.categoryRepository.findByName(name);

    if (categoryExists) {
      throw Error("Category already exists");
    }
    this.categoryRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryUseCase };
