// src/routes/user.ts
import {Router, Request, Response} from "express";
import {User} from "../models/User";
import sequelize from "../config/sequelize-config";

const router = Router();

interface CreateUserRequest {
  username: string;
}

interface AddNoteRequest {
  username: string;
  note: string;
  createdAt: Date | string;
}

// Route to create a user
router.post(
  "/create",
  async (req: Request<CreateUserRequest>, res: Response) => {
    const {username} = req.body;
    try {
      const user = await User.create({username});
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({error});
    }
  }
);

// Route to add a note to an existing user
router.post(
  "/add-note",
  async (req: Request<AddNoteRequest>, res: Response) => {
    const {username, note, createdAt} = req.body;
    try {
      let user = await User.findOne({where: {username}});
      if (!user) {
        return res.status(404).json({error: "User not found"});
      }
      // Ensure 'createdAt' is a Date object
      const createdAtDate = new Date(createdAt);
      // Initialize user.notes if it's null or undefined
      user.notes = user.notes || [];

      // Use spread operator to create a new array with existing notes and the new note
      const updatedNotes = [...user.notes, {note, createdAt: createdAtDate}];

      // Update user object with the new notes array
      user.notes = updatedNotes;

      console.log("Updated notes:", user.notes); // Debug statement
      // Save the updated user object
      await user.save();

      // Respond with the updated user object
      res.status(200).json(user);
    } catch (error) {
      console.error("Error adding note:", error);
      res.status(500).json({error});
    }
  }
);

export default router;
