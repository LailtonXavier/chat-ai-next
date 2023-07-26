import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'
import { IGPTMessagens } from '../UserMessage'

const GPTMessage = ({ role, content}: IGPTMessagens) => {
  return (
    <>
    {role === 'assistant' && (
      <div className='flex'>
        <Avatar className='mr-4'>
          <AvatarFallback>RS</AvatarFallback>
          <AvatarImage src='https://cdn3d.iconscout.com/3d/premium/thumb/customer-service-5233716-4379020.png' />
        </Avatar>
        <p className='leading-relaxed text-cyan-100 font-semibold bg-chatGptMessage w-80 rounded-sm p-4'>    
            {content}      
        </p>
      </div>
    )}
    </>
  )
}

export default GPTMessage