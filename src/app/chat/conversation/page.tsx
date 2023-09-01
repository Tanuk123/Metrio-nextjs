import React from 'react'
import Layout from '../../layout'
import { Chatconversation } from '@/pages/layout/chat-conversation/chat-conversation'
import { Chat } from '@/pages/layout/chat/chat'

const ConversationPage = () => {
  return (
    <div>
       <Layout >
        <Chat />
        </Layout>
    </div>
  )
}

export default ConversationPage
