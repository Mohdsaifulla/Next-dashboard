
import mongoose, { Schema, models } from "mongoose";
const userShema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const User=models.User ||mongoose.model("User",userShema)
export default User