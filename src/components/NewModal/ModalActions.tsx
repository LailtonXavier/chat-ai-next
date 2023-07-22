type PropsAction = {
  onSubmit: () => void;
  onClose: () => void;
  name: string;
}

const ModalActions = ({onSubmit, onClose, name}:PropsAction) => {
  return (
    <div className='px-2 flex justify-end'>
      <button
          onClick={onClose}
          className='text-slate-100 font-bold mr-3 bg-red-400 w-24 h-8 rounded-lg'
          type="button">
            Cancelar
        </button>
      <button
        onClick={onSubmit}
        className='text-slate-100 font-bold bg-gray-900 w-24 h-8 rounded-lg'
        type="button">
          {name}
      </button>
    </div>
  )
}

export default ModalActions