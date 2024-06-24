// src/config/sequelize-config.ts
import {Sequelize} from "sequelize-typescript";
import path from "path";
import dotenv from "dotenv";
import {User} from "../models/User";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "mysql", // Replace with your database dialect
  host: process.env.DB_HOST, // Replace with your database host
  username: process.env.DB_USERNAME, // Replace with your database username
  password: process.env.DB_PASSWORD, // Replace with your database password
  database: process.env.DB_DATABASE, // Replace with your database name
  models: [User], // Path to your models
});

export default sequelize;
