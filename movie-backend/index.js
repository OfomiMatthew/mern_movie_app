import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

import connectDB from "./config/db.js";

dotenv.config();
connectDB()
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.use('/api/v1/users',userRoutes)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
