"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var AppError_1 = require("./Errors/AppError");
var Routes_1 = require("./Routes");
require("./Database");
require("./Shared/Container");
var swagger_json_1 = __importDefault(require("./swagger.json"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(Routes_1.router);
app.use(function (err, req, res, next) {
    if (err instanceof AppError_1.AppError) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    console.log(err);
    return res.status(500).json({
        status: 'error',
        message: "Internal server error - " + err.message,
    });
});
app.listen(3333, function () { return console.log('Server is Running! 🎉'); });
