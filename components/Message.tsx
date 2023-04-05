import { DocumentData } from 'firebase/firestore'

import Image from 'next/image'

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
                <Image src={message.user.avatar} alt="avatar" width={30} height={30} className=" h-12 w-12 " />

                <p className='pt-1 text-small '>{message.text}</p>
            </div>
        </div>
    )
}

export default Message
