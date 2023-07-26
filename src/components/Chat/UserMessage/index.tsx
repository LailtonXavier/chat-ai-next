import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'

export interface IGPTMessagens {
  role: "function" | "user" | "system" | "assistant",
  content: string
}

const UserMessage = ({role, content}: IGPTMessagens) => {
  return (
    <>
    {role === 'user' && (
      <div className='flex justify-end'>
        <p className='leading-relaxed text-end text-cyan-100 font-semibold bg-chatUserMessage min-w-80 rounded-sm p-4'>    
            {content}      
        </p>
        <Avatar className='ml-4'>
          <AvatarFallback>LX</AvatarFallback>
          <AvatarImage src='https://github.com/LailtonXavier.png' />
        </Avatar>
      </div>
    )}
    </>
  )
}

export default UserMessage