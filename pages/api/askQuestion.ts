import query from '../../lib/queryAPI';
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";
type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt" });
  }
  if (!chatId) {
    res.status(400).json({
      answer: "Please provide a pvalid chat id ",
    });
  }

  const response = await query(prompt, model);

  const message: Message = {
    text: response || "No answer found",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "VoiceGPT",
      name: "VoiceGPT",
      model:"VoiceGPT",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
