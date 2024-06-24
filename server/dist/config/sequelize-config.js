"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/config/sequelize-config.ts
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = require("../models/User");
dotenv_1.default.config();
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "mysql", // Replace with your database dialect
    host: process.env.DB_HOST, // Replace with your database host
    username: process.env.DB_USERNAME, // Replace with your database username
    password: process.env.DB_PASSWORD, // Replace with your database password
    database: process.env.DB_DATABASE, // Replace with your database name
    models: [User_1.User], // Path to your models
});
exports.default = sequelize;
