"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadConfig = void 0;
var crypto_1 = __importDefault(require("crypto"));
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var uploadConfig = {
    upload: function (folder) {
        return {
            storage: multer_1.default.diskStorage({
                destination: path_1.default.resolve(__dirname, '..', '..', folder),
                filename: function (request, file, callback) {
                    var fileHash = crypto_1.default.randomBytes(16).toString('hex');
                    var fileName = fileHash + "-" + file.originalname;
                    callback(null, fileName);
                },
            }),
        };
    },
};
exports.uploadConfig = uploadConfig;
