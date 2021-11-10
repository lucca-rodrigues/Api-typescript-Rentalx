import { inject, injectable } from "tsyringe";
import { CategoryRepository } from "../../Repositories/Implementations/CategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: CategoryRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryExists = await this.categoryRepository.findByName(name);

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
