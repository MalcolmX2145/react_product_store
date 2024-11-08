import Product from "../models/product.model.js";
import mongoose from "mongoose";

// API GET logic
export const getProducts = async (req, res) => {
  try {
    co = await Product.find({});
    res.status(200).json({ success: true, da });
  } catch (error) {
    console.log("Error in fetch: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

//API POST logic
export const createProduct = async (req, res) => {
  const product = req.body; // user will send this data

  // condition to check if product fields (name, price and image) are empty
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save(); // saves it to the database
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Error in create Product", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// API PUT logic (PUT is to update data in db)
export const updateProduct = async (req, res) => {
  const { id } = req.params; // grabs id from the database

  const product = req.body; // user will send this data

  // condition to check if id is valid and from database
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid product id" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    }); // the updated product
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    // console.log("Error in delet: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// API DELETE logic
export const deleteProduct = async (req, res) => {
  const { id } = req.params; // grabs id from the database

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.log("Error in delet: ", error.message);
    res.status(404).json({ success: false, message: "Product not found" });
  }
};
