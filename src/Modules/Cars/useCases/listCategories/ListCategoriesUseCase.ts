import { Category } from "../../Entities/Category";
import { ICategoriesRepository } from "../../Repositories/ICategoriesRepository";
import { inject, injectable} from "tsyringe";
@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ){}

  async execute(): Promise<Category[]>{
    const categories = await this.categoriesRepository.show();

    return categories;
  }
}

export {ListCategoriesUseCase}
