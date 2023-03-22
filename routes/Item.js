import express from "express";
import {
    createItem,
  getAllItems,
  getItemById,
  getItemBySearch,
} from "../controllers/item.js";

const router = express.Router();

router.get("/", getAllItems);
router.get("/item/:search?term=veg", getItemBySearch);
router.get("/item/:id", getItemById);
router.post("/createItem", createItem)

export default router;
