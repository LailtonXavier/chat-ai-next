type PropsAction = {
  onClick: () => void;
  name: string;
}

const ModalAction = ({onClick, name}:PropsAction) => {
  return (
    <div className='px-2 flex justify-end'>
      <button
        onClick={onClick}
        className='text-slate-100 font-bold bg-gray-900 w-24 h-8 rounded-lg'
        type="button">
          {name}
      </button>
    </div>
  )
}

export default ModalAction