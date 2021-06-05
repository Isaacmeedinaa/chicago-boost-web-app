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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const allowedURLs_1 = require("./config/allowedURLs");
const database_1 = require("./config/database");
const routes_1 = require("./config/routes");
// Starting express app
const app = express_1.default();
// Enabling CORS
app.use(cors_1.default(allowedURLs_1.CORSOptions));
// Enabling ENV with dotenv
dotenv.config();
// Calling database connection function
database_1.database();
routes_1.routes(app);
// Defining port number for Express web server
const port = parseInt(process.env.PORT) || 3000;
// Creating web server with port number
app.listen(port, () => console.log(`Connected to port ${port} 🚀!`));
