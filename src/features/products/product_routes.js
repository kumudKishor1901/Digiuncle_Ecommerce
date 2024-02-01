import express from "express";
import ProductController from "./product_controller.js";
import uploadFile from "../../middlewares/file_upload_middleware.js";

let productController = new ProductController();
const productRouter = express.Router();

productRouter.post(
  "/add",
  uploadFile.single("images"),
  productController.addProduct
);

export default productRouter;
