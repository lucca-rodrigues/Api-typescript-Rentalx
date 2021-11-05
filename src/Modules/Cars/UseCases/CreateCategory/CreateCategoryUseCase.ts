import { ICategoryRepository } from "../../Repositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

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
