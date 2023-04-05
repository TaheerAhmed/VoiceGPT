"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { MicrophoneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import { db } from "@/firebase";
import toast from "react-hot-toast";
import Opening from "./Opening";


import { StopIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef } from 'react';
declare global {
  interface Window {
    SpeechRecognition: any;
  }
}

type Props = {
  chatId: string;
};

//use swr to get model

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();
  const model = "text-davinci-003";

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };
    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    const notification = toast.loading("Voice GPT is working on this");
    //Toaster Notification

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      toast.success("Voice GPT is successful", {
        id: notification,
      });
      //Toast notification ot say loadin
    });
  };

  const SpeechToText = () => {

    const [isRecording, setIsRecording] = useState(false);


    const recognitionRef = useRef<any>();
    const addingLines=(val:string)=>{
      if(prompt.length==0){
        setPrompt(val)
      }
      else{
        setPrompt(prompt+" "+val)
      }

    }
    useEffect(() => {
      let recognition: any;

      if (typeof window !== 'undefined') {
        recognition = new (window as any).webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = false;

        recognition.onresult = (event: any) => {
          const transcript = event.results[event.results.length - 1][0].transcript;
          addingLines(transcript)
        };
        console.log(recognition)

        recognition.onend = () => {
          setIsRecording(false);
        };

        recognitionRef.current = recognition;
      }

      return () => {
        if (recognitionRef.current) {
          recognitionRef.current.stop();
        }
      };
    }, []);
    

    

    const toggleRecording = () => {
      if (isRecording) {
        recognitionRef.current?.stop();
        setIsRecording(false);
      } else {
        setIsRecording(true);
        recognitionRef.current?.start();
      }
    };

    const microphoneIcon = < MicrophoneIcon />;
    const stopIcon = <StopIcon />;
    const squareIcon = <StopIcon />;

    return (
      <div>
        <div onClick={toggleRecording} className='w-5 h-5'>
          {isRecording ? stopIcon : microphoneIcon}
          {/* {isRecording ? squareIcon : null} */}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white text-black text-sm justify-center content-center  mx-[2%] sm:mx-[5%]  mb-8 lg:mr-[25%] lg:ml-[25%] hover:border-slate-400 border   border-gray-300">
      
      <form
        className="px-2.5  flex justify-center content-center"
        onSubmit={sendMessage}
      >
        <input
        type='text'
          
          className="focus:outline-none bg-transparent  flex-1 disabled:cursor-not-allowed disabled:text-gray-300 truncate resize:none"
          placeholder="Type or use the mic to talk to the AI"
          value={prompt}
          disabled={!session}
          onChange={(e) => setPrompt(e.target.value)}
        />
       


        <button
          disabled={!session}
          className="bg-transparent bg-gray-300 p-2 rounded-lg disabled:cursor-not-allowed disabled:bg-gray-300 m-1 hover:bg-gray-40sss0 "
        >
          <SpeechToText/>
        </button>
        <button
          disabled={!prompt || !session}
          className="bg-transparent hover:bg-gray-400 p-2 rounded-lg disabled:cursor-not-allowed disabled:bg-gray-300 m-1 "
          type="submit"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45 " />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
