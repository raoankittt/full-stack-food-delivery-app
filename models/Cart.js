import mongoose from "mongoose";

const CartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    title: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },

    extraData: {
      quantity: {
        type: Number,
        required: true,
      },
      categories: {
        type: Array,
        required: true,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", CartSchema);
