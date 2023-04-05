import React from "react";
import Chat from "@/components/chat";
import ChatInput from "@/components/chatInput";

type Props = {
  params: {
    id: string;
  };
};

const chatPage = ({ params: { id } }: Props) => {
  return (
    <div className="overflow flex flex-col h-screen">
      {/* chat window */}
      <Chat chatId={id} />
      {/* chat input */}
      <ChatInput chatId={id} />
    </div>
  );
};

export default chatPage;
