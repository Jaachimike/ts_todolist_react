import express, {Express, Request, Response} from "express";
import sequelize from "./config/sequelize-config";
import userRoutes from "./routes/user";
import dotenv from "dotenv";

const app: Express = express();
dotenv.config();

app.use(express.json());

const port = process.env.PORT || 3200;

app.use("/users", userRoutes); // Use the user routes

// Sync the database and start the server
sequelize
  .sync() // Use force: true to drop and recreate the tables on every restart
  .then(() => {
    console.log("Database & tables created!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(error => {
    console.error("Unable to connect to the database:", error);
  });

export default app;

// {force: true}  add this to reset table on refresh
