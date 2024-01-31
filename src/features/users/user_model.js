import dbConnection from "../../config/db_connection.js";
import userModel from "./user_schema.js";
import mongoose from "mongoose";

export default class UserModel {
  async add(user) {
    try {
      dbConnection();
      const result = await userModel.create(user);
      return result || false;
    } catch (err) {
      console.log("Error populating record to database");
    } finally {
      await mongoose.connection.close();
    }
  }
  async isExist(data) {
    try {
      dbConnection();
      const user = await userModel.findOne(data);
      // If a user is found, return user data or true
      // If no user is found, return false or null
      return user;
    } catch (error) {
      console.error("Error checking user existence:", error.message);
    } finally {
      await mongoose.connection.close();
    }
  }

  getAll() {}
  getById() {}
  update() {}
  delete() {}
}
