'use client'

import { Mic, Pause, Play } from 'lucide-react'
import { useChat } from 'ai/react'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const typeButtonPlay = {
  play: 'play',
  pause: 'pause',
  resume: 'resume',
} as const

const Chat = () => {
  const [isPlay, setIsPlay] = useState< 'play' | 'pause' | 'resume'>('play')
  const { messages, input, handleInputChange, handleSubmit, setInput } = useChat({
    api: '/api/chat',
  }) 
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState('...');
  let recognition: any;


  
  const lastMessage = messages[messages.length - 1];
  const lastMessageContent = lastMessage?.content || `It's empty`;
  
  const handleTextToSpeech = ( 
    text: string, 
    type: 'play' | 'pause' | 'resume',
    ) => {    
      if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text)      
      speech.lang = 'en-US'
      if (type === 'play' ) {
        window.speechSynthesis.speak(speech)
        setIsPlay('pause')
      }
      if (type === 'pause' ) { 
        window.speechSynthesis.pause()
        setIsPlay('resume')
      }
      if (type === 'resume' ) { 
        window.speechSynthesis.resume()   
        setIsPlay('resume')
      }

      const handleEnd = () => {
        console.log('cheguei aqui')
        setIsPlay('play');
      };  
      speech.addEventListener('end', handleEnd);
    } else {
      console.error('Speech synthesis is not supported in this browser.')
    }
  } 

  useEffect(() => {
    if (!isListening) return

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.continuous = true;
      recognition.start()

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        setText(transcript);
        setInput(transcript);
      };

      recognition.onerror = (event: any) => {
        console.error(event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      return () => {
        recognition.stop();
      };
    } else {
      console.error('Speech recognition is not supported in this browser.');
    }
  }, [isListening]);

  const toggleListening = () => {
    setIsListening(!isListening);
  };


  

  return (
    <Card className='w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content] bg-chat border-none relative'>
      <CardHeader>
        <CardTitle className='text-center text-cyan-50 text-2xl'>Chat</CardTitle>
        {/* <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription> */}
        <p className='text-center text-cyan-50 text-2xl'>{text}</p>

      </CardHeader>
      <CardContent className='space-y-4 overflow-auto scroll-smooth'>
        { messages.map(message => {
          return (
            <div key={message.id} className='flex gap-3 text-slate-600 text-sm'>
              {message.role === 'user' && (
                <Avatar>
                  <AvatarFallback>LX</AvatarFallback>
                  <AvatarImage src='https://github.com/LailtonXavier.png' />
                </Avatar>
              )}
              <p className='leading-relaxed text-cyan-100 font-semibold bg-chatmessage w-full rounded-xl p-2 shadow-md shadow-indigo-700/50'>  
              <span className='block font-extrabold text-gray-50'>
                {message.role === 'user' ? 'Lailton' : 'ChatGPBosta'}
              </span>    
                {message.content}      
              </p>
              {message.role === 'assistant' && (
                <Avatar>
                  <AvatarFallback>RS</AvatarFallback>
                  <AvatarImage src='https://cdn3d.iconscout.com/3d/premium/thumb/customer-service-5233716-4379020.png' />
                </Avatar>
              )}
            </div>
          )
        })}
      </CardContent>
      <CardFooter>
        <form className='w-full flex gap-2' onSubmit={handleSubmit}>
          <Input 
            className='bg-backinput text-cyan-100'
            placeholder="How can I help you?" 
            value={input} 
            onChange={handleInputChange} 
            />
          <Button type='submit'>Send</Button>
          </form>
          <button onClick={toggleListening}>
            {isListening ? 
              (<Mic color='rgba(255, 0, 0, 0.6)' size={30} />) : 
              (<Mic size={30} />)}
          </button>
      </CardFooter>
      <button
        className='text-purple-50 bg-purple-950/30 py-1.5 px-2 shadow-md
         shadow-purple-400/50 rounded absolute top-[89.5px] right-7'
        type='button'
        onClick={() => handleTextToSpeech(lastMessageContent, typeButtonPlay[isPlay])}
        >
        {isPlay === 'play' ? <Play size={30} /> : <Pause size={30} />}
      </button>      
    </Card>
  )
}

export default Chat