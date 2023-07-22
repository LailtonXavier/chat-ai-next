import { X } from 'lucide-react'

type PropsHeader = {
  onClose: () => void;
}

const ModalX = ({onClose}:PropsHeader) => {
  return (
    <button
      className='transition ease-in hover:rotate-90 duration-200
      hover:scale-110'
      onClick={onClose}
      type='button'>
        <X />
    </button>
  )
}

export default ModalX