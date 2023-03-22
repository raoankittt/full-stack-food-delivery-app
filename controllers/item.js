import Item from "../models/Item.js";

//: GET ALL ITEMS
export const getAllItems = async (req, res) => {};

//: GET ITEM BY SEARCH
export const getItemBySearch = async (req, res) => {};

//: GET ITEM BY ID
export const getItemById = async (req, res) => {};

//: Creating a new Item
export const createItem = async (req, res) => {
  const { name, rating, image_url, url, price, alias } = req.body;

  const checkDuplicate = await Item.findOne({
    name,
    price,
    rating,
    image_url,
    url,
  });
  if (checkDuplicate)
    return res.status(404).json({ message: "item already exists" });

  const newItem = new Item({
    name,
    rating,
    image_url,
    url,
    price,
    alias,
  });

  const item = await newItem.save();
  res.status(201).json(item);
};
