import { CategoriesRepository } from "../../Repositories/CategoriesRepository";
import { CreateCategoryController } from "./createCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = new CategoriesRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export {createCategoryUseCase, categoriesRepository, createCategoryController}
