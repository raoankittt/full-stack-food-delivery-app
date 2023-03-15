import express from "express";
import { addToFavorite, getAllFavoriteItems, removeFromFavorite } from "../controllers/favorite.js";

const router = express.Router();

router.get("/:userId/favorite", getAllFavoriteItems);
router.post("/:userId/addToFavorite", addToFavorite)
router.delete("/:userId/favorite/:itemId/remove", removeFromFavorite)

export default router;
