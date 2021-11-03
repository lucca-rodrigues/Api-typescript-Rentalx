import { CategoryModel } from "../Models/CategoryModel";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: CategoryModel[] = [];

  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new CategoryModel();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  show(): CategoryModel[] {
    return this.categories;
  }
}

export { CategoriesRepository };
