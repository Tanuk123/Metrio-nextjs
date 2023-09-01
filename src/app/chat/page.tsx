import React from "react";
import Layout from "../../layout/layout";
import { Chat } from "@/pages/layout/chat/chat";
import { Chatconversation } from "@/pages/layout/chat-conversation/chat-conversation";

const ChatPage = () => {
  return (
    <div>
      <Layout>
        
        <Chatconversation />
      </Layout>
    </div>
  );
};

export default ChatPage;
