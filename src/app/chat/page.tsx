import React from "react";
import Layout from "../../layout/layout";
import { Chat } from "@/screens/layout/chat/chat";
import { Chatconversation } from "@/screens/layout/chat-conversation/chat-conversation";

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
