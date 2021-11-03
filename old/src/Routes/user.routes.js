"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var Upload_1 = require("../Config/Upload");
var EnsureAuth_1 = require("../Middlewares/EnsureAuth");
var CreateUserController_1 = require("../Modules/Accounts/UseCases/CreateUser/CreateUserController");
var UpdateUSerAvatarController_1 = require("../Modules/Accounts/UseCases/UpdateUserAvatar/UpdateUSerAvatarController");
var usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
var uploadAvatar = (0, multer_1.default)(Upload_1.uploadConfig.upload('./tmp/avatar'));
var createUserController = new CreateUserController_1.CreateUserController();
var updateUserAvatarController = new UpdateUSerAvatarController_1.UpdateUserAvatarController();
usersRoutes.post('/', createUserController.handle);
usersRoutes.patch('/avatar', EnsureAuth_1.EnsureAuth, uploadAvatar.single('avatar'), updateUserAvatarController.handle);
