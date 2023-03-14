import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/cart.js";

// CONFIGURATION
const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

// ROUTES
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

// MONGODB CONFIGURATION AND PORT LISTENERS

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `Server running on port http://localhost:${process.env.PORT || 5000}`
      );
    });
  });
