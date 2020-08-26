"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const logtime_routes_1 = __importDefault(require("./routes/logtime.routes"));
require("./ProcessEnvInterface");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = express_1.default();
const port = 5000 || process.env.PORT;
mongoose_1.default.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    return console.log('Connected');
})
    .catch((err) => {
    console.log('Error');
});
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(logtime_routes_1.default);
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.send('Hello World')
// })
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
//# sourceMappingURL=App.js.map