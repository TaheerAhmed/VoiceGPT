"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

import images from "../public/images.png";

const Login = () => {
  return (
    <div className="bg-[#f7f7f8] h-screen flex flex-col items-center justify-center text-center">
      <Image src={images} width={50} height={50} alt="logo" className="m-5"/>
      <div>
        Welcome to Voice GPT
      </div>
      <div>
        Log into your VoiceGPT account to continue
      </div>
      <div className="flex">
      <button
        onClick={() => signIn("google")}
          className="bg-[#11A37F] hover:bg-[#2c7f6a] text-white font-bold py-2 px-4 border-b-4 border-white hover:border-black rounded m-3"
      >
        Sign up
      </button>
      <button
        onClick={() => signIn("google")}
          className="bg-[#11A37F] hover:bg-[#2c7f6a] text-white font-bold py-2 px-4 border-b-4 border-white hover:border-black rounded m-3"
      >
        Log in
      </button>
      </div>
    </div>
  );
};

export default Login;
