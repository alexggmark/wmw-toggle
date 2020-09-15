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
exports.startLogTime = exports.stopLogTime = exports.logtimeController = void 0;
const logtime_model_1 = __importDefault(require("../models/logtime.model"));
exports.logtimeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const request = new logtime_model_1.default(req.body);
        yield request.save();
        res.send(request);
    }
    catch (err) {
        console.log(`ERROR: ${err}`);
    }
});
exports.stopLogTime = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('stopLogTime');
    try {
        const request = yield logtime_model_1.default.findOne({ _id: req.body.id });
        if (request === null)
            return res.status(400);
        yield request.updateStopTime();
        res.send(request);
    }
    catch (err) {
        console.log(`ERROR: ${err}`);
    }
});
exports.startLogTime = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('startLogTime');
    try {
        const request = yield logtime_model_1.default.findOne({ _id: req.body.id });
        if (request === null)
            return res.status(400);
        yield request.updateStartTime();
        res.send(request);
    }
    catch (err) {
        console.log(`ERROR: ${err}`);
    }
});
//# sourceMappingURL=logtime.controllers.js.map