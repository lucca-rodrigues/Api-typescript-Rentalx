"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationsRoutes = void 0;
var express_1 = require("express");
var CreateSpecificationController_1 = require("../Modules/Cars/useCases/createSpecification/CreateSpecificationController");
var specificationsRoutes = (0, express_1.Router)();
exports.specificationsRoutes = specificationsRoutes;
var createSpecificationController = new CreateSpecificationController_1.CreateSpecificationController();
specificationsRoutes.post("/", createSpecificationController.handle);
