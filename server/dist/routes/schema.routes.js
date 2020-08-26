"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const schema_controllers_1 = require("../controllers/schema.controllers");
router.get('/', schema_controllers_1.testController);
//# sourceMappingURL=schema.routes.js.map