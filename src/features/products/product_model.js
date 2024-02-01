import productModel from "./product_schema.js";

export default class ProductModel {
  async add(product) {
    try {
      const result = await productModel.create(product);
      result.stock = 150;
      await result.save();
      return result || false;
    } catch (err) {
      console.log(err.message);
    }
  }
}
