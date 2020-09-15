"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const logtime_controllers_1 = require("../controllers/logtime.controllers");
router.get('/', (req, res) => {
    res.send('TEST');
});
router.post('/createLogtime', logtime_controllers_1.logtimeController);
router.put('/stopLogTime', logtime_controllers_1.stopLogTime);
router.put('/startLogTime', logtime_controllers_1.startLogTime);
exports.default = router;
//# sourceMappingURL=logtime.routes.js.map