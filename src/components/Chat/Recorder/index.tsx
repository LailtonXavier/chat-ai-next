import { Mic } from 'lucide-react';
import { useEffect, useState } from 'react';
declare const annyang: any;

interface IRecorder {
  setText: (value: string) => void;
}

const Recorder = ({setText }:IRecorder) => {
  const [listening, setListening] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const annyang = require('annyang');
      if (annyang) {
        annyang.addCallback('result', (phrases: string[]) => {
          const speechText = phrases[0];
          displayText(speechText);
        });
      }
    }
  }, []);

  const toggleListening = () => {
    if (annyang) {
      if (listening) {
        annyang.abort(); 
      } else {
        annyang.start(); 
      }
      setListening((prevState) => !prevState);
    }
  };

  const displayText = (text: string) => {

    console.log(text); 
    setText(text); 
  };

  return (
    <div className='mx-4'>
      {
        listening ?
        <button
          className='flex items-center justify-center bg-micactive h-24 w-24 
          rounded-full shadow-2xl shadow-[1px 5px 38px] shadow-[#840404]'
          onClick={toggleListening}
          >
            <Mic className='text-[#B99898]' size={60} />
        </button>
        :
        <button
          className='flex items-center justify-center bg-micoff h-24 w-24
          rounded-full'
          onClick={toggleListening}
        >
          <Mic className='text-[#840404]' size={60} />
        </button>
      }
    </div>
  );
};

export default Recorder;
