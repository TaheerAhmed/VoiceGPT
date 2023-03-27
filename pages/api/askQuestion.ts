import query from "../../lib/queryAPI";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import logo from "../../public/logo.png";
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
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXWltIVwM1YEB6FYvjPEV63V7gtDJPtRgr3-1Bu7el&s",
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
