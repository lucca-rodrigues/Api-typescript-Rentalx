"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var CreateCategoryController_1 = require("../Modules/Cars/useCases/createCategory/CreateCategoryController");
var ImportCategoryController_1 = require("../Modules/Cars/useCases/importCategory/ImportCategoryController");
var ListCategoriesController_1 = require("../Modules/Cars/useCases/listCategories/ListCategoriesController");
var categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
var upload = (0, multer_1.default)({
    dest: "./tmp",
});
var createCategoryController = new CreateCategoryController_1.CreateCategoryController();
var listCategoriesController = new ListCategoriesController_1.ListCategoriesController();
var importCategoryController = new ImportCategoryController_1.ImportCategoryController();
categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.get("/", listCategoriesController.handle);
categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);
