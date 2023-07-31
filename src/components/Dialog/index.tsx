const Dialog = ({open, onClose, children}: any) => {

  if(open) {
    return (
      <div className='dialogContainer'>
        <div className='dialog'>
          <h2>Dialog---------------------------------</h2>
          {children}
          <span className='dialog__close' onClick={onClose}>Done</span>
        </div>
      </div>
    )
  }
  return null
}

export default Dialog