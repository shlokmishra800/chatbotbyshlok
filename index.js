import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cors from "cors"
import chatbotRoutes from "./routes/chatbot.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// niche middleware heiii

app.use(express.json());
app.use(cors({
  origin: "https://apnabhaibyshlok.netlify.app/", 
  methods: ["GET", "POST"],
}));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB error:", error));

// routes
app.use("/bot/v1", chatbotRoutes);

app.listen(port, () => {
  console.log(`SERVER listening on port ${port}`);
});
