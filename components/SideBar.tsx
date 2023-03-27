"use client";

import { useSession ,signOut} from "next-auth/react";
import { collection, orderBy } from "firebase/firestore";
import { db } from "@/firebase";
import React from "react";
import NewChat from "./NewChat";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import {useCollection} from 'react-firebase-hooks/firestore'
import { collectionGroup } from "firebase/firestore";
import { query } from "firebase/firestore";
import ChatRow from "../components/ChatRow";
const SideBar = () => {
  const { data: session } = useSession();
const [chats,loading,error]=useCollection(
session &&query(collection(db,'users',session?.user?.email!,'chats'),orderBy("createdAt","asc"))
)
  return (
    <div className="p-2 flex flex-col h-screen text-white">
      <div className="flex-1">
        <div>
          {/* newchat */}
          <NewChat />
          <div>{/* modelSelection */}</div>

          {/* map through the chats */}
          <div className="mt-5">{chats?.docs.map((chat) => (<ChatRow key={chat.id} id={chat.id} />))}</div>
          
        </div>
      </div>
      {session && (
        <div className="rounded-lg bg-slate-900">
          <div className="text-white mx-auto text-center">
            User: {session.user?.name}
          </div>
          <img
            src={session.user?.image!}
            alt="profile pic"
            className="rounded-full h-12 w-12 cursor-pointer mx-auto"
          />
          <div className='border-gray-700 border  chatRow text-white' onClick={()=>signOut()}>
            <ArrowLeftOnRectangleIcon className='h-4 w-4' />
            <p>
              Logout
            </p></div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
