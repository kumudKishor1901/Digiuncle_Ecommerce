import userModel from "./user_schema.js";

export default class UserModel {
  async add(user) {
    try {
      const result = await userModel.create(user);
      return result;
    } catch (err) {
      console.log("Error populating record to database");
    }
  }
  async isExist(data) {
    try {
      const user = await userModel.findOne(data);
      // If a user is found, return user data or true
      // If no user is found, return false or null
      return user || null;
    } catch (error) {
      console.error("Error checking user existence:", error.message);
    }
  }

  getAll() {}
  getById() {}
  update() {}
  delete() {}
}
