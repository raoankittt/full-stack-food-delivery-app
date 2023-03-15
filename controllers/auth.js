import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { createUserValidator, loginValidator } from "../utils/validation.js";

export const login = async (req, res) => {
  let { email, password } = req.body;
  /* VALIDATION */
  const { errors, valid } = loginValidator(email, password);
  if (valid) return res.status(400).json(errors);

  /* LOGIN */
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
  res.status(200).json({
    user: user,
    message: "Login successful",
    token,
  });
};

export const createUser = async (req, res) => {
  let { name, avatar, email, password } = req.body;

  /* VALIDATION */
  const { errors, valid } = createUserValidator(name, avatar, email, password);
  if (valid) return res.status(400).json(errors);

  /* IF USER ALREADY EXITST */
  const user = await User.findOne({ email });
  if (user) return res.status(404).json({ message: "User already exists" });

  /* PASSWORD ENCRYPTION */
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);

  const newUser = new User({
    name,
    email,
    password,
    avatar,
  });
  const response = await newUser.save();
  const token = jwt.sign({ id: response._id }, process.env.JWT_SECRET_KEY);
  res.status(201).json({
    user: response,
    token,
  });
};
