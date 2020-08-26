"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.addBook = exports.showBook = exports.testController = exports.allBooks = void 0;
const schema_model_1 = __importDefault(require("../models/schema.model"));
exports.allBooks = (req, res) => {
    const books = schema_model_1.default.find((err, books) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(books);
        }
    });
};
exports.testController = (req, res) => {
    res.send('Ich bin working');
};
exports.showBook = (req, res) => {
    const book = schema_model_1.default.findById(req.params.id, (err, book) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
exports.addBook = (req, res) => {
    const book = new schema_model_1.default(req.body);
    book.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
exports.updateBook = (req, res) => {
    let book = schema_model_1.default.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
exports.deleteBook = (req, res) => {
    const book = schema_model_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Book deleted from database");
        }
    });
};
//# sourceMappingURL=schema.controllers.js.map