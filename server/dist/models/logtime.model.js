"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const LogItemModel = new mongoose_1.Schema({
    userId: { type: String, required: true },
    taskName: { type: String, required: true },
    projectName: { type: String, required: true },
    billable: { type: Number, required: true },
    lastStart: { type: Date, default: Date.now },
    logTime: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});
LogItemModel.methods.updateStopTime = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const calculatedTime = yield this.model('LogItemSchema').aggregate([
            { $match: { _id: this._id } },
            { $addFields: { currentTime: new Date() } },
            { $project: { logTime: { $subtract: ["$currentTime", "$lastStart"] } } }
        ]);
        console.log(`Calculated time: ${calculatedTime[0].logTime / 600}s`);
        this.logTime += calculatedTime[0].logTime;
        return yield this.save();
    });
};
LogItemModel.methods.updateStartTime = function () {
    return __awaiter(this, void 0, void 0, function* () {
        this.lastStart = Date.now();
        return yield this.save();
    });
};
const LogItem = mongoose_1.default.model('LogItemSchema', LogItemModel);
exports.default = LogItem;
//# sourceMappingURL=logtime.model.js.map