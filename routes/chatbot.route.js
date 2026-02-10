import  express from "express"
import { Message } from "../Controllers/chatbot.message.js"

const router = express.Router()
router.post("/message", (req, res) => {
  const userMessage = req.body.text;
  const botMessage = `You said: ${userMessage}`;

  res.json({
    userMessage,
    botMessage,
  });
});


export default router