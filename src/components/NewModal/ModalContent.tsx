type PropsContent = {
  content: string
}

const ModalContent = ({ content }: PropsContent) => {
  return (
    <div className='flex justify-center items-center my-5'>
      <p>{content}</p>
    </div>
  )
}

export default ModalContent