import { DocumentData } from 'firebase/firestore'
import { type } from 'os'
import React from 'react'


type Props = {
    message: DocumentData
}

const Message = ({
    message
}: Props) => {

    const isAI=message.user.name==="VoiceGPT"
    return (
        <div className={`py-3  ${isAI && "bg-white"} shadow `}>
            <div className='flex space-x-5 px-10 max-w-2xl mx-auto py-1'>
                <img src={message.user.avatar} alt="avatar" className='h-10 w-10' />

                <p className='pt-1 text-small '>{message.text}</p>
            </div>
        </div>
    )
}

export default Message
