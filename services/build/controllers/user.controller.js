"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.creatrUserHandler = void 0;
const user_service_1 = require("../services/user.service");
const mailer_1 = __importDefault(require("../utils/mailer"));
function creatrUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body.body;
        try {
            const user = yield (0, user_service_1.createUser)(body);
            yield (0, mailer_1.default)();
            res.json("User successfully created");
        }
        catch (error) {
            if (error.code === 11000) {
                return res.status(409).send("Action already exists");
            }
            return res.status(500).send(error);
        }
    });
}
exports.creatrUserHandler = creatrUserHandler;
