import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express(); // variable that holds the express methods

app.use(express.json()); // middleware which allows us to accept JSON data into the req.body

app.use("/api/products", productRoutes); // this will prefix all the routes in product.route.js with /api/products

//checks(listens) on port 5000 for any activity
app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000 hello");
});
