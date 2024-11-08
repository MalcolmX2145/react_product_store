import mongoose from "mongoose";

// schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // makes sure it has the createdAt and updatedAt fields
  }
);

const Product = mongoose.model("Product", productSchema); // Product is the collection, schema is productSchema

export default Product;
