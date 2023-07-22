type PropsTitle = {
  title: string;
}

const ModalTitle = ({title}:PropsTitle) => {
  return <p className='text-lg font-extrabold'>{title}</p>
}

export default ModalTitle