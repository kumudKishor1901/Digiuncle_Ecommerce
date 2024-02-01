import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Name is Required"] },
  brand: { type: String, required: true },
  description: { type: String, required: [true, "Description Required"] },
  price: { type: Number, required: [true, "Price Required"], maxLength: 8 },
  images: [{ public_id: { type: String } }, { url: { type: String } }],
  category: { type: String, required: [true, "Please enter product Category"] },
  stock: {
    type: Number,
    default: 100,
  },
  size: [{ type: String, upperCase: true }],
  rating: { type: Number, required: true, max: 5 },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  createdAt: { type: Date, immutable: true, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
