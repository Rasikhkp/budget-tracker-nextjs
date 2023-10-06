import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
   todo: String,
});

const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);

export default Todo;
