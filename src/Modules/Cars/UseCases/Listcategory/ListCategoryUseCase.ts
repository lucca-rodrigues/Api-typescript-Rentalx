import { CategoryModel } from "../../Models/CategoryModel";
import { ICategoryRepository } from "../../Repositories/ICategoryRepository";

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute(): CategoryModel[] {
    const categories = this.categoriesRepository.show();

    return categories;
  }
}

export { ListCategoryUseCase };
