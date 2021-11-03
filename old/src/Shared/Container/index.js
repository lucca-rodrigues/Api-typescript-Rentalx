"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var UserRepository_1 = require("../../Modules/Accounts/Repositories/Implementations/UserRepository");
var SpecificationsRepository_1 = require("../../Modules/Cars/Repositories/Implementations/SpecificationsRepository");
var CreateCategoryInMemory_1 = require("../../Modules/Cars/Repositories/In-memory/CreateCategoryInMemory");
tsyringe_1.container.registerSingleton("CategoriesRepository", CreateCategoryInMemory_1.CategoriesRepositoryInMemory);
tsyringe_1.container.registerSingleton("SpecificationsRepository", SpecificationsRepository_1.SpecificationsRepository);
tsyringe_1.container.registerSingleton("IUsersRepository", UserRepository_1.UsersRepository);
