import { container } from "tsyringe";

import { UsersRepository } from "../../Modules/Accounts/Repositories/Implementations/UserRepository";
import { IUsersRepository } from "../../Modules/Accounts/Repositories/IUserRepository";
import { ICategoriesRepository } from "../../Modules/Cars/Repositories/ICategoriesRepository";
import { SpecificationsRepository } from "../../Modules/Cars/Repositories/Implementations/SpecificationsRepository";
import { CategoriesRepositoryInMemory } from "../../Modules/Cars/Repositories/In-memory/CreateCategoryInMemory";
import { ISpecificationRepository } from "../../Modules/Cars/Repositories/ISpecificationRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepositoryInMemory
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "IUsersRepository",
  UsersRepository
);
