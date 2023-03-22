import { Schema, model } from "mongoose";

const ItemSchema = Schema(
  {
    alias: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    review_count: {
      type: Number,
    },
    categories: {
      type: Map,
    },
  },
  { timestamps: true }
);

export default model("Item", ItemSchema);
