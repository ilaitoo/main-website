import mongoose from "mongoose";

export default async function dbConnection() {
  try {
    if (mongoose?.connection?.readyState === 1) {
      return await mongoose.connection.asPromise();
    } else {
      const uri = process?.env?.MONGODB_URI;
      return await mongoose.connect(uri);
    }
  } catch (err) {
    console.log("error connecting to db: ", err);
  }
}
