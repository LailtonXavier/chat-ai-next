type PropsHeader = {
  children: React.ReactNode
}

const ModalHeader = ({children}:PropsHeader) => {
  return (
    <div className='flex flex-row justify-between'>
      {children}
    </div>
  )
}

export default ModalHeader