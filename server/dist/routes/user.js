"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/user.ts
const express_1 = require("express");
const User_1 = require("../models/User");
const router = (0, express_1.Router)();
// Route to create a user
router.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const user = yield User_1.User.create({ username });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ error });
    }
}));
// Route to add a note to an existing user
router.post("/add-note", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, note, createdAt } = req.body;
    try {
        let user = yield User_1.User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        // Ensure 'createdAt' is a Date object
        const createdAtDate = new Date(createdAt);
        // Initialize user.notes if it's null or undefined
        user.notes = user.notes || [];
        // Use spread operator to create a new array with existing notes and the new note
        const updatedNotes = [...user.notes, { note, createdAt: createdAtDate }];
        // Update user object with the new notes array
        user.notes = updatedNotes;
        console.log("Updated notes:", user.notes); // Debug statement
        // Save the updated user object
        yield user.save();
        // Respond with the updated user object
        res.status(200).json(user);
    }
    catch (error) {
        console.error("Error adding note:", error);
        res.status(500).json({ error });
    }
}));
exports.default = router;
