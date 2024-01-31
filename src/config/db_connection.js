import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/digiuncle", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((err) => {
      console.log("Error connecting to database", err);
    });
};

export default dbConnection;
