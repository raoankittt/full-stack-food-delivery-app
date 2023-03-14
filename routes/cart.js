import express from "express";
import { addToCart, getAllCartItems, removeFromCart } from "../controllers/cart.js";

const router = express.Router();

router.get("/:userId/cart", getAllCartItems);
router.post("/:userId/addCart", addToCart);
router.delete("/:userId/cart/:itemId/remove", removeFromCart);

export default router;
