import { CategoryModel } from "../../Entities/CategoryModel";
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from "../ICategoryRepository";
import { getRepository, Repository } from "typeorm";
class CategoryRepository implements ICategoryRepository {
  private repository: Repository<CategoryModel>;

  constructor() {
    this.repository = getRepository(CategoryModel);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }

  async show(): Promise<CategoryModel[]> {
    const categories = await this.repository.find();

    return categories;
  }

  async findByName(name: string): Promise<CategoryModel> {
    const category = await this.repository.findOne({ name });

    return category;
  }
}

export { CategoryRepository };
