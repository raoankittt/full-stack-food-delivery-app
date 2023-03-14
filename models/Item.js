import { Schema, model } from "mongoose";

const ItemSchema = Schema({}, { timestamps: true });

export default model("Item", ItemSchema);
