'use client'


import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { MicrophoneIcon } from '@heroicons/react/24/solid'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import React, { FormEvent, useState } from 'react'
import { db } from '@/firebase'
import toast from 'react-hot-toast'
type Props = {
  chatId: string
}

//use swr to get model




const ChatInput = ({ chatId }: Props) => {

  const [prompt, setPrompt] = useState('')
  const { data: session } = useSession()
  const model = 'text-davinci-003'

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!prompt) return

    const input = prompt.trim()
    setPrompt("")

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      }
    }
    await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), message)

    const notification = toast.loading('Voice GPT is working on this')
    //Toaster Notification

    await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: input, chatId, model, session
      }),
    }).then(() => {
      console.log("yay")
      toast.success('Voice GPT is successful', {
        id: notification
      })
      //Toast notification ot say loadin 
    })
  }

  return (
    <div className='bg-gray-300/50 text-black rounded-xl text-sm justify-center content-center lg:mx-80 mb-5 '>
      <form className='p-5  flex justify-center content-center' onSubmit={sendMessage}>
        <input type='text'
          className='focus:outline-none bg-transparent flex-1  disabled:cursor-not-allowed disabled:text-gray-300 truncate'
          placeholder='Type or use the mic to talk to the AI'
          value={prompt}
          disabled={!session}
          onChange={e => setPrompt(e.target.value)}
        />
        <button
          disabled={!session}
          className='bg-transparent bg-gray-300 p-2 rounded-lg disabled:cursor-not-allowed disabled:bg-gray-300 m-1 hover:bg-gray-40sss0 '>
          <MicrophoneIcon className='h-4 w-4 ' />
        </button>
        <button
          disabled={!prompt || !session}
          className='bg-transparent hover:bg-gray-400 p-2 rounded-lg disabled:cursor-not-allowed disabled:bg-gray-300 m-1 '
          type='submit'
        >
          <PaperAirplaneIcon className='h-4 w-4 -rotate-45 ' />
        </button>

      </form>
    </div>
  )
}

export default ChatInput
