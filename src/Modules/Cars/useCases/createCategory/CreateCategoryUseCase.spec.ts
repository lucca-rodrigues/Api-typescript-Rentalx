
import { AppError } from "../../../../Errors/AppError";
import { CategoriesRepositoryInMemory } from "../../Repositories/In-memory/CreateCategoryInMemory";


import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create a Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("Should be able to create a new category", async () => {
    const category = {
      name: "Category Name Test",
      description: "Category Description Test",
    };

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });

  it("Should not be able to create a category that already exists", async () => {
    const category = {
      name: "Category Name Test",
      description: "Category Description Test",
    };

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    await expect(
      createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      })
    ).rejects.toEqual(new AppError("Category already exists!"));
  });
});
