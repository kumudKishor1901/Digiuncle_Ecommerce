import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((data) => {
      console.log("Database Connected Successfully " + data.connection.host);
    })
    .catch((err) => {
      console.log("Error connecting to database", err.message);
    });
};

export default dbConnection;
