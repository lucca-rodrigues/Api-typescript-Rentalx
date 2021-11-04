import { CategoryModel } from "../Models/CategoryModel";
import { ICreateCategoryDTO } from "./ICategoryRepository";

class CategoriesRepository {
  private categories: CategoryModel[] = [];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
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

  findByName(name: string): CategoryModel {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
}

export { CategoriesRepository };
