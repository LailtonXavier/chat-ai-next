'use client'

import { useChat } from 'ai/react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import Recorder from './Recorder'
import PlayAudio from './PlayAudio'
import BtnSend from './BtnSend'
import UserMessage from './UserMessage'
import GPTMessage from './GPTMessage'
import { Pause } from 'lucide-react'
import { useEffect, useRef } from 'react'

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit, 
    setInput, stop
  } = useChat({
    api: '/api/chat',
  }) 
  const lastMessage = messages[messages.length - 1];
  const lastMessageContent = lastMessage?.content || `It's empty`;
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };
  
  return (
    <Card className='w-[440px] sm:h-[90%] h-screen py-2 m-4 grid grid-rows-[min-content_1fr_min-content] bg-[#040D1F] border-none relative'>
      <CardHeader>
        <CardTitle className='text-center text-cyan-50 text-2xl'>Chat</CardTitle>
          <form onSubmit={handleSubmit}>
            <Input 
              className='bg-[#081021] border-b-2 border-gray-500 text-cyan-100 text-center'
              value={input} 
              onChange={handleInputChange} 
              />
          </form>
      </CardHeader>
      <CardContent className='space-y-12 overflow-y-auto scroll-smooth' ref={chatContainerRef}>
        {messages.map(message => (
          <div key={message.id} className='gap-3 text-slate-600 text-sm'>
            <UserMessage content={message.content} role={message.role} />
            <GPTMessage content={message.content} role={message.role} />
          </div>
        ))}
      </CardContent>

      <CardFooter className='flex items-center justify-center mt-5'>
        <PlayAudio text={lastMessageContent} />
        <Recorder setText={setInput} />
        <BtnSend handleSubmit={handleSubmit} input={input} />
        <button
          className='absolute bottom-36 right-0 rounded-l-lg w-8 hover:w-12
          ease-in-out delay-75 transition-all bg-[#0C1424]'
          type="button"
          onClick={stop}
          >
            <Pause color='#dfdfdf' size={30} />
        </button>
      </CardFooter>      
    </Card>
  )
}

export default Chat