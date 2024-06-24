// src/models/User.ts
import {Table, Column, Model, DataType, Unique} from "sequelize-typescript";

interface Note {
  note: string;
  createdAt: Date | string;
}

// interface UserInterface {
//   username: string;
//   notes?: Note[];
// }

@Table
export class User extends Model {
  @Unique
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public username!: string;

  @Column({
    type: DataType.JSON,
    allowNull: true,
    // defaultValue: [],
  })
  public notes?: Note[];
}
