"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
var express_1 = require("express");
var AuthUserController_1 = require("../Modules/Accounts/UseCases/Auth/AuthUserController");
var authRoutes = (0, express_1.Router)();
exports.authRoutes = authRoutes;
var authUserController = new AuthUserController_1.AuthUserController();
authRoutes.post("/sessions", authUserController.handle);
