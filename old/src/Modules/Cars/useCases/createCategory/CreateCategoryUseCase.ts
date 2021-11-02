import { CategoriesRepository } from "../../Repositories/Implementations/CategoriesRepository";
import { inject, injectable} from "tsyringe";
interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor (
    @inject("CategoriesRepository")
    private categoriesRepository: CategoriesRepository
  ) {}

  async execute({ description, name }: IRequest): Promise<void> {
    const categoryExists = await this.categoriesRepository.findByName(name);

    if (categoryExists){
      throw new Error("Category already exists!");
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase }
