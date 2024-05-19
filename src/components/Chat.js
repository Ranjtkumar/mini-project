import React from 'react'

export default function Chat() {
  return (
    <div className='w-full h-[89vh] '>
        <div className='bg-white grid grid-cols-12 h-full border-7 border-gray-400 rounded-lg'>
            <div className='col-span-3 border-r-2 border-gray-600 bg-slate-200'>
                <div className='text-2xl font-bold px-2 pt-2'>Chats</div>
                <div className='border-1 border-gray-400 rounded-lg py-1 px-1.5 mt-3 mx-2 bg-white'>
                    <input placeholder='Search for user' style={{outline:"none"}} className='w-full'/>
                </div>

                <div className='my-2 overflow-scroll chats shadow-md mx-2 rounded-xl bg-white'>
                    <div className='flex gap-2 border-b border-slate-400 p-2'>
                        <img src="/assets/EmptyPic.jpg" className='h-12 w-12 rounded-full'/>
                        <div className='flex flex-col justify-center gap-1'>
                            <div className='text-base font-semibold'>Ranjitkumar</div>
                            <div className='text-sm font-normal'>Good Morning</div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='col-span-9 p-2'>
                Message
            </div>
        </div>
    </div>
  )
}
