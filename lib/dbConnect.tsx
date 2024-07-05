"use server"

import mongoose from "mongoose";

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.set("strictQuery", false);
  try{
    console.log("here" + process.env.DB_URI)
    mongoose.connect(process.env.DB_URI!);

  } catch(error:any) {
    console.log(error)
  }
};

export default dbConnect;