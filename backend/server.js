import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express(); // variable that holds the express methods

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // middleware which allows us to accept JSON data into the req.body

app.use("/api/products", productRoutes); // this will prefix all the routes in product.route.js with /api/products

// code for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

//checks(listens) on port 5000 for any activity
app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:5000 hello " + PORT);
});
