import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteDoc, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";
import { collection } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { orderBy } from "firebase/firestore";
type Props = {
  id: string;
};

const ChatRow = ({ id }: Props) => {
  const pathName = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    query(
      collection(db, "users", session?.user?.email!, "chats", id, "messages"),
      orderBy("createdAt", "asc")
    )
  );
  useEffect(() => {
    if (!pathName) return;
    setActive(pathName.includes(id));
  }, [pathName, id]);

  const deleteChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.replace("/");
  };

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow justify-center text-white ${
        active && "bg-gray-500"
      } m-1.5`}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 md:inline-flex truncate">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <TrashIcon
        className="h-5 w-5 text-white hover:text-red-300 "
        onClick={() => deleteChat()}
      />
    </Link>
  );
};

export default ChatRow;
