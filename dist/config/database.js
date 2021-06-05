"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const database = () => {
    mongoose_1.default.connect(process.env.NODE_ENV
        ? process.env.MONGODB_URI
        : "mongodb://localhost/chicago-boost", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
        .then(() => console.log("Connected to MongoDB 🚀!"))
        .catch((err) => console.log(err));
};
exports.database = database;
