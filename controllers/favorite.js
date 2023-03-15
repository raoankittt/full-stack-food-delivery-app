import Favorite from "../models/Favorite.js";
import User from "../models/User.js";

export const addToFavorite = async (req, res) => {
  const { userId } = req.params;
  const { title, price, rating, image } = req.body;

  /* CHECK USERID IS VALID */
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  /* CHECK DUPLICATE PRODUCT */
  const check = await Favorite.findOne({ user: userId, title, price, rating });
  if (check) {
    return res.status(400).json({ message: "Product already added" });
  }

  const newFavorite = new Favorite({
    user: userId,
    title,
    price,
    rating,
    image,
  });
  const response = await newFavorite.save();

  const favorite = await Favorite.find({ user: userId });
  res.send(favorite);
};

export const removeFromFavorite = async (req, res) => {
  const { userId, itemId } = req.params;
  const deleteFavorite = await Favorite.findByIdAndDelete(itemId);
  if (!deleteFavorite) {
    return res.status(404).json({ message: "Item not found" });
  }
  const favorite = await Favorite.find({ user: userId });
  res.send(favorite);
};

/* GET ALL CART ITEM BY USERID */

export const getAllFavoriteItems = async (req, res) => {
  const { userId } = req.params;
  const favorite = await Favorite.find({ user: userId });
  if (!favorite) {
    return res.status(404).json({ message: "favorite not found" });
  }
  res.send(favorite);
};
