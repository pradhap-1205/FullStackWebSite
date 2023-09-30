import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import AuthRouter from "./Routes/UserRoutes.js";


dotenv.config();
const app = express();

const corsOption = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOption));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT ;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MonGo DB Connection SuccessFully  ");
    app.listen(PORT, () => {
      console.log(`Server Listen  PORT No [${PORT}]`);
    });
  })
  .catch((err) => {
    console.log(`DisConnected MonGo DB ${err}`);
  });


app.use('/auth', AuthRouter)
