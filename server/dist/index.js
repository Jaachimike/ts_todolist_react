"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_config_1 = __importDefault(require("./config/sequelize-config"));
const user_1 = __importDefault(require("./routes/user"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
const port = process.env.PORT || 3200;
app.use("/users", user_1.default); // Use the user routes
// Sync the database and start the server
sequelize_config_1.default
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
exports.default = app;
// {force: true}  add this to reset table on refresh
