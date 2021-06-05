// imports
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { CORSOptions } from "./config/allowedURLs";
import { database } from "./config/database";
import { routes } from "./config/routes";

// Starting express app
const app = express();

// Enabling CORS
app.use(cors(CORSOptions));

// Enabling ENV with dotenv
dotenv.config();

// Calling database connection function
database();
routes(app);

// Defining port number for Express web server
const port = parseInt(<string>process.env.PORT) || 3000;

// Creating web server with port number
app.listen(port, () => console.log(`Connected to port ${port} 🚀!`));
