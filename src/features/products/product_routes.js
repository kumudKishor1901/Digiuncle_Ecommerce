import express from "express";
import ProductController from "./product_controller.js";

let productController = new ProductController();
const productRouter = express.Router();

productRouter.post("/add", productController.addProduct);

export default productRouter;
