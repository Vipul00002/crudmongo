import mongoose from "mongoose";
import { Schema } from "mongoose";

const toDoSchema = new Schema({
  status: {
    type: String,
    enum: ['completed','pending'],
  },
  message: {
    type: String,
    required: true,
  },
  createdat: {
    type: Date,
    default: Date.now(),
  },
  updatedat: {
    type: Date,
    default: Date.now(),
  },
});
const toDoModel = mongoose.model("todo", toDoSchema);
export { toDoModel };
