import ProductModel from "./product_model.js";
// Initializing ProductModel Class
const productRepo = new ProductModel();
export default class ProductController {
  async addProduct(req, res) {
    try {
      let {
        title,
        brand,
        description,
        price,

        category,
        stock,
        size,
        rating,
        review,
      } = req.body;
      let file = req.file;
      let product = {
        title,
        brand,
        description,
        price,
        images: file.filename,
        category,
        stock,
        size,
        rating,
        review,
      };

      let result = await productRepo.add(product);
      console.log(result);
      if (result) {
        res.status(201).json({
          success: true,
          message: "Product Added Successfully",
          result,
        });
      } else {
        res.status(400).json({ success: false, message: "Bad Request" });
      }
    } catch (err) {
      res.status(500).json({
        description: "Internal Server Error :" + err,
        success: false,
        messsage: "Error while Adding Product to Database",
      });
      console.log(err.message);
    }
  }
  getProduct(req, res) {}
  getProductById(req, res) {}
  updateProduct(req, res) {}
  deleteProduct(req, res) {}
}
