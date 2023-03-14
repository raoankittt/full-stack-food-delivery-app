import Cart from "../models/Cart.js";
import User from "../models/User.js";

export const addToCart = async (req, res) => {
  const { userId } = req.params;
  const { title, price, rating, image, extraData } = req.body;

  /* CHECK USERID IS VALID */
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  /* CHECK DUPLICATE PRODUCT */
  const check = await Cart.findOne({ user: userId, title, price, rating });
  if (check) {
    return res.status(304).json({ message: "Product already added" });
  }

  const newCart = new Cart({
    user: userId,
    title,
    price,
    rating,
    image,
    extraData,
  });
  const response = await newCart.save();

  const cart = await Cart.find({ user: userId });
  res.send(cart);
};

export const removeFromCart = async (req, res) => {
  const { userId, itemId } = req.params;
  const delteCart = await Cart.findByIdAndDelete(itemId);
  if (!delteCart) {
    return res.status(404).json({ message: "Item not found" });
  }
  const cart = await Cart.find({ user: userId });
  res.send(cart);
};

/* GET ALL CART ITEM BY USERID */

export const getAllCartItems = async (req, res) => {
  const { userId } = req.params;
  const cart = await Cart.find({ user: userId });
  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }
  res.send(cart);
};
