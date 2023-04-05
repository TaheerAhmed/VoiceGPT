"use client";
import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";
import Opening from "./Opening";

type Props = {
  chatId: string;
};

const Chat = ({ chatId }: Props) => {
  const { data: session } = useSession();

  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );
  console.log('here',messages?.docs.length)

  return (<div className="flex-1 mt-5 overflow-y-auto overflow-x-hidden">
<div >
  {messages?.docs.length!==0?
(messages?.docs.map((message)=>(
  <Message key={message.id} message={message.data()}/>
))):(<Opening/>)}

</div>

  </div>);
};

export default Chat;
