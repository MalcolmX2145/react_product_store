import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// API GET route
router.get("/", getProducts);

//API POST route
router.post("/", createProduct);

// API PUT route (PUT is to update data in db)
router.put("/:id", updateProduct);

// API DELETE route
router.delete("/:id", deleteProduct);

export default router;
