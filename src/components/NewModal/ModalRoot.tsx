type ModalProps = {
  children: React.ReactNode
}

const ModalRoot = ({ children }:ModalProps ) => {
  return (
    <>
      <div className='bg-slate-300 rounded-xl p-2 w-96
        h-full shadow-2xl shadow-purple-900/25
        transition ease-in-out hover:-translate-y-1
        hover:scale-105 duration-250 animate-show-smooth
      '>
        {children}
      </div>
    </>
  )
}

export default ModalRoot