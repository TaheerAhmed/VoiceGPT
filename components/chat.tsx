"use client";
import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";
import Opening from "./Opening";
import ModelSelection from "./ModelSelection";

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
  return (<div className="flex-1 mt-5 overflow-y-auto overflow-x-hidden">
<div >
  {messages?.docs.length!==0?
(<div>
          <div className={`py-3 bg-white shadow text-center font-bold`}>Model: {messages?.docs[0]?.data()?.user?.model}</div>
  {messages?.docs.map((message)=>(
  <Message key={message.id} message={message.data()}/>
))}</div>):(<>
          <div className=' items-center justify-center  sm:hidden mx-[15%] md:mx-[40%] m-3 border-2 p-1 bg-gray-200 border-gray-300 text-black text-left text-xs z-0'>
            Select a Model <ModelSelection /></div>
<Opening/>
          </>)}

</div>

  </div>);
};

export default Chat;
