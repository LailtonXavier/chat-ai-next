import { Play } from 'lucide-react';
import { useState } from 'react';
declare const annyang: any;

interface IPlayAudio {
  text: string;
}

const typeButtonPlay = {
  play: 'play',
  pause: 'pause',
  resume: 'resume',
} as const

const PlayAudio = ({ text }:IPlayAudio) => {
  const [isPlay, setIsPlay] = useState< 'play' | 'pause' | 'resume'>('play')

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
        setIsPlay('play');
      };  
      speech.addEventListener('end', handleEnd);
    } else {
      console.error('Speech synthesis is not supported in this browser.')
    }
  }

  return (
    <>
      {isPlay === 'play' ?   
        <button
          className='flex items-center justify-center bg-audioOff h-24 pl-2 w-24 
          rounded-full '
          type='button'
          onClick={() => handleTextToSpeech(text, typeButtonPlay[isPlay])}
          >
            <Play color='#089505' size={60} />
        </button>   
          :
        <button
          className='flex items-center justify-center bg-audioActived h-24 pl-2 w-24 
          rounded-full shadow-2xl shadow-[1px 5px 38px] shadow-[#089505]/50'
          type='button'
          onClick={() => handleTextToSpeech(text, typeButtonPlay[isPlay])}
          >
            <Play color='#93E99C' size={60} />
        </button>      
      }
    </>
  );
};

export default PlayAudio;
