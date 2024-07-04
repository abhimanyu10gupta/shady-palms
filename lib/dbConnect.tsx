"use server"

import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.set("strictQuery", false);
  try{
    mongoose.connect(process.env.DB_URI!);

  } catch(error:any) {
    console.log(error)
  }
};

export default dbConnect;