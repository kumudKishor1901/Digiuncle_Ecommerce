import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((err) => {
      console.log("Error connecting to database", err.message);
    });
};

export default dbConnection;
