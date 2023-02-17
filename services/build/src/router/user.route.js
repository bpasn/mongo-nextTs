"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateResource_1 = __importDefault(require("../middlewares/validateResource"));
const user_scheme_1 = require("../Scheme/user.scheme");
const user_controller_1 = require("../controllers/user.controller");
const route = express_1.default.Router();
route.post('/api/users', (0, validateResource_1.default)(user_scheme_1.createUserSchema), user_controller_1.creatrUserHandler);
exports.default = route;
