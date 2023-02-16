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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("config"));
const connectionDB_1 = __importDefault(require("./utils/connectionDB"));
const router_1 = __importDefault(require("./router"));
dotenv_1.default.config({ path: path_1.default.resolve('.env') });
const app = (0, express_1.default)();
app.use("/", router_1.default);
app.listen(config_1.default.get('port'), () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connectionDB_1.default)();
    console.log("service is running ");
}));
