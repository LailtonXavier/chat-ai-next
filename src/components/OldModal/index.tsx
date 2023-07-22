import { X } from 'lucide-react'

interface IOldModal {
  title: string,
  content: string,
  onClose: () => void
  handleSubmit: () => void
}

const OldModal = ({ title, content, onClose, handleSubmit }:IOldModal) => {
  return (
    <div className='bg-slate-200 rounded-xl p-2 w-[450px] h-[600] shadow-2xl shadow-purple-600/25'>
      <div className='flex flex-row justify-between'>
        <p className='text-lg font-extrabold'>{title}</p>
        <button type='button'><X /></button>
      </div>

      <div className='min-h-[200px] flex justify-center items-center'>
        <p>{content}</p>
      </div>
      
      <div className='px-2'>
        <button
          onClick={onClose}
          className='text-slate-100 font-bold mr-3 bg-red-400 w-24 h-8 rounded-lg'
          type="button">
            Cancelar
        </button>
        <button
          onClick={handleSubmit}
          className='text-slate-100 font-bold bg-gray-900 w-24 h-8 rounded-lg'
          type="button">
            Enviar
        </button>
      </div>
    </div>
  )
}

export default OldModal