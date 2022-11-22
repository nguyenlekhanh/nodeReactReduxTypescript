import mongoose from "mongoose";
import { app } from "./app";

const port: string | undefined = process.env.PORT;
const mongoDBURL: string | undefined = process.env.MONGODB_URL;

const startServer = async () => {
  try {
    //mongodb://localhost:27017/yt_soccer
    await mongoose.connect(
      "mongodb+srv://academic:123654789@cluster0.5la9p.mongodb.net/yt_soccer?retryWrites=true&w=majority"
    );
    console.log("Connected to db");
    app.listen(port, () => console.log("Server running on port", port));
  } catch (error) {
    console.log("Failed to connect to the db");
    console.log(error);
  }
};

startServer();
