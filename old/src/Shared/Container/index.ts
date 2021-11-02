import { container } from "tsyringe";
import { UsersRepository } from "../../Modules/Accounts/Repositories/Implementations/UserRepository";
import { IUsersRepository } from "../../Modules/Accounts/Repositories/IUserRepository";

import { ICategoriesRepository } from "../../Modules/Cars/Repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../Modules/Cars/Repositories/Implementations/CategoriesRepository";
import { SpecificationsRepository } from "../../Modules/Cars/Repositories/Implementations/SpecificationsRepository";
import { ISpecificationRepository } from "../../Modules/Cars/Repositories/ISpecificationRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "IUsersRepository",
  UsersRepository
);
