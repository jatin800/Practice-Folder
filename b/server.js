import express from "express";
import { connectToMongoDB } from "./db/DB.js";

const app = express();

connectToMongoDB();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
