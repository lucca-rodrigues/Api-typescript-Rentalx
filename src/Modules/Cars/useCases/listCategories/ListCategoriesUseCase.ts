import { ICategoriesRepository } from "../../Repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository){}

  execute(): Category[]{
    const categories = this.categoriesRepository.show();

    return categories;
  }
  return
}

export {ListCategoriesUseCase}
