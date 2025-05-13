import mongoose, { Schema, Document } from "mongoose";

export interface ITodo extends Document {
     title: string;
     completed: boolean;
     
}
const toDoSchema: Schema= new Schema({
     title: {
          type: String,
          required: [true, "Title is required"],
     },
     completed: {
          type: Boolean,
          default: false
}
})

export default mongoose.model<ITodo>("Todo", toDoSchema);
