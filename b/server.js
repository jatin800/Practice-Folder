import express from "express";
import cors from "cors";
import { connectToMongoDB } from "./db/DB.js";
import router from "./route/userRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
connectToMongoDB();

app.use(router);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
