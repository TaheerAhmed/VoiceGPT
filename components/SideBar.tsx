"use client";

import { useSession, signOut } from "next-auth/react";
import { collection, orderBy } from "firebase/firestore";
import { db } from "@/firebase";
import Image from "next/image";
import NewChat from "./NewChat";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { useCollection } from "react-firebase-hooks/firestore";
import { query } from "firebase/firestore";
import ChatRow from "../components/ChatRow";
import ModelSelection from "./ModelSelection";
import Upgrade from "./Upgrade";
const SideBar = () => {
  const { data: session } = useSession();
  const [chats] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );
  return (
    <div className="p-2 flex flex-col h-screen text-white scroll-y">
      <div className="flex-1">
        <div>
          {/* newchat */}
          <NewChat />
          <div className="m-1">
            Select an AI Model
            <ModelSelection/></div>

          {/* map through the chats */}
          <div className="mt-10  max-h-[500px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
          <div className="mt-3">
            <Upgrade />

          </div>
        </div>
      </div>
      {session && (
        <div className="rounded-lg bg-white text-black mb-3">
          <div className="text-black  text-center">
            User: {session.user?.name}
          </div>
          <Image
            src={session.user?.image!}
            width={32}
            height={32}
            alt="profile pic"
            className="rounded-full h-12 w-12 cursor-pointer mx-auto"
          />
          <div
            className="border-gray-700  chatRow textx-black"
            onClick={() => signOut()}
          >
            <ArrowLeftOnRectangleIcon className="h-4 w-4 color-black" />
            <p>Logout</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
