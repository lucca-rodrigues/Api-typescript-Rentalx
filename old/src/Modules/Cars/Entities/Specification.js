"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Specification = void 0;
var uuid_1 = require("uuid");
var typeorm_1 = require("typeorm");
var Specification = /** @class */ (function () {
    function Specification() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)()
    ], Specification.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)()
    ], Specification.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)()
    ], Specification.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], Specification.prototype, "created_at", void 0);
    Specification = __decorate([
        (0, typeorm_1.Entity)("specifications")
    ], Specification);
    return Specification;
}());
exports.Specification = Specification;
