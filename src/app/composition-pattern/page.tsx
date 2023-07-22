'use client'

import { NewModal } from '@/components/NewModal'
import OldModal from '@/components/OldModal'
import { Button } from '@/components/ui/button'
import { useState } from "react";

const CompositionPattern = () => {
  const [open, setOpen] = useState<boolean>(false)
  
  const closeModal = () => {
    setOpen(false)
  }

  return (
    <div className='bg-slate-800 min-h-screen flex items-center
     justify-center'>
      {open ? (
        // <OldModal
        //   title='Modal antigo' 
        //   content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eaque eveniet, iure quis laudantium facere at officia doloribus fugiat libero distinctio necessitatibus ipsa explicabo expedita pariatur maxime soluta, neque saepe.'
        //   onClose={() => setOpen(false)}
        //   handleSubmit={() => console.log('submit')}
        // />
        <NewModal.Root>
          <NewModal.Header>
            <NewModal.Title title='Modal novo' />
            <NewModal.CloseTop onClose={closeModal} />
          </NewModal.Header>
          <NewModal.Content content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo repellat itaque blanditiis error distinctio cum sint molestias deleniti tenetur assumenda nostrum quod veritatis temporibus inventore suscipit, amet esse. Nihil!' />
          {/* <NewModal.Action onClick={closeModal} name='Ok' /> */}
          <NewModal.Actions
            name='Enviar'
            onSubmit={() => console.log('enviour')} 
            onClose={closeModal} 
          />
        </NewModal.Root>
      ) : (
        <Button onClick={() => setOpen(true)}>Abrir modal</Button>
      )}
    </div>
  )
}

export default CompositionPattern