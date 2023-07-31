
'use client'

import Dialog from '@/components/Dialog';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { CandyOff, Play, PlayCircle, Settings, Shapes } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSpeechSynthesis } from "react-speech-kit";
interface IPlayAudio {
  text: string;
}

const PlayAudio = ({ text }:IPlayAudio) => {
    const [highlightedText, setHighlightedText] = useState<string | undefined>('')
    const [voiceIndex, setVoiceIndex] = useState('');
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
  
    const onEnd = () => {
      setHighlightedText('')
    }
    const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({onEnd})
  
    const voice = voices[voiceIndex] || null
  
    const handleTextSet = () => {
      const text = window.getSelection()?.toString()
      if(text !== '') setHighlightedText(text)
    }
  
    useEffect(() => {
      document.addEventListener('mouseup', handleTextSet)
      return () => {
        document.removeEventListener('mouseup', handleTextSet)
      }
    }, [])
  
    console.log('supported', supported)
  
    return (
      <>
      <div>

        {supported && !speaking ? 
          <button
            className='flex items-center justify-center bg-audioOff h-24 pl-2 w-24 
            rounded-full '
            type='button'
            onClick={() => speak({ text: highlightedText || text, voice, rate, pitch})}
            >
              <Play color='#089505' size={60} />
          </button> 
         : 
          <button
            className='flex items-center justify-center bg-audioActived h-24 pl-2 w-24 
            rounded-full shadow-2xl shadow-[1px 5px 38px] shadow-[#089505]/50'
            type='button'
            onClick={cancel}
          >
            <Play color='#93E99C' size={60} />
          </button>           
        }      
      </div>

        <Sheet>
          <SheetTrigger>
            <Settings
              color='#ffffffd1' 
              className='absolute top-8 left-6 hover:rotate-45
              transition-all delay-75 ease-linear cursor-pointer'
            />
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle>Config your chat!</SheetTitle>
              <SheetDescription>
                <div className='p-10 space-y-3 flex flex-col'>
                  {/* VOices -- browser dependent */}
                  <select
                    name="voice"
                    value={voiceIndex || ''}
                    className='bg-chat p-2'
                    onChange={(e: any) => {
                      setVoiceIndex(e.target.value)
                    }}
                  >
                    {voices.map((option: any, index: any) => (
                      <option key={option.voiceURI} value={index}>
                        {`${option.lang} - ${option.name} ${ option.default ? '- Default' : ''}`}
                      </option>
                    ))}
                  </select>
                  <div className='rangeContainer'>
                    <div>
                      <label htmlFor="rate">Rate: </label>
                      <span>{rate}</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="2"
                      step="0.1"
                      value={rate}
                      onChange={(e:any) => {
                        setRate(e.target.value);
                      }}
                    />
                  </div>
                  <div className='rangeContainer'>
                    <div>
                      <label htmlFor="pitch">Pitch: </label>
                      <span>{pitch}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="2"
                      step="0.1"
                      value={pitch}
                      id="pitch"
                      onChange={(event: any) => {
                        setPitch(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </>    
    )
  }
  
export default PlayAudio;
