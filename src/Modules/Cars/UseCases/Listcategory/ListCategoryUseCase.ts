import { CategoryModel } from "../../Entities/CategoryModel";
import { ICategoryRepository } from "../../Repositories/ICategoryRepository";

class ListCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute(): CategoryModel[] {
    const categories = this.categoryRepository.show();

    return categories;
  }
}

export { ListCategoryUseCase };
