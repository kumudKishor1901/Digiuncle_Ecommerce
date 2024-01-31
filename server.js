import express, { json } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
import swagger from "swagger-ui-express";
import userRouter from "./src/features/users/user_routes.js";
import apiDocs from "./swagger.json" assert { type: "json" };
import dbConnection from "./src/config/db_connection.js";
// Instantiating Express server
const server = express();
server.use(cors());
try {
  dotenv.config({ path: "src/config/.env" });
} catch (err) {
  console.log("Error loading .env file", err);
}
server.use(express.json());
server.use(cookieParser());
server.use(express.urlencoded({ extended: true }));
// For open API specification(swagger)
server.use("/api-docs", swagger.serve, swagger.setup(apiDocs));

// Users Routes
server.use("/api/users", userRouter);

// Server Port
const port = process.env.PORT || 3000;
server.listen(port, () => {
  dbConnection();
  console.log("Server is running on port", port);
});
