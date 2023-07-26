import { ChatRequestOptions } from 'ai'
import { ArrowRight } from 'lucide-react'
import { FormEvent } from 'react'

interface IBtnSend {
  handleSubmit: (e: FormEvent<HTMLFormElement>, 
    chatRequestOptions?: ChatRequestOptions | undefined) => void,
  input: string,
}

const BtnSend = ({ handleSubmit, input }: IBtnSend) => {
  return (
    <form onSubmit={handleSubmit}>
      {input.length > 0 ?   
        <button
        className='flex items-center justify-center bg-sendActive h-24 w-24 
        rounded-full shadow-2xl shadow-[1px 5px 38px] shadow-[#00D0FF]/50'
        type='submit'
        >
          <ArrowRight color='#5CDCF9' size={70} />
        </button>   
        :
        <button
          className='flex items-center justify-center bg-sendFalse h-24 w-24 
          rounded-full'
          type='submit'
        >
          <ArrowRight color='#00D0FF' size={70} />
        </button>      
      }
    </form>
  )
}

export default BtnSend