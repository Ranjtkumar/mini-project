import React, { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { MoreVert } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

export default function Chat() {
    const [showMenu,setShowMenu] = useState(false)
  return (
    <div className='w-full h-[89vh] '>
        <div className='bg-white grid grid-cols-12 h-full border-7 border-gray-400 rounded-lg'>
            <div className='col-span-3 border-r-2 border-gray-600 bg-slate-200'>
                <div className="flex justify-between  px-2 pt-2 relative">
                    <div className='text-2xl font-bold '>Chats</div>
                    <div className="bg-green-500 cursor-pointer w-3 flex items-center justify-center text-white rounded-t-full rounded-b-full"
                        onClick={()=>{setShowMenu(!showMenu)}}>
                        <MoreVert/>
                    </div>

                   {showMenu && <div className='shadow-sm border-1 absolute border-gray-400 right-2 top-10 bg-white rounded-2'>
                        <div className='p-2 border-b border-slate-300 cursor-pointer'>Profie</div>
                        <div className='p-2 border-b cousor-pointer'>Settings</div>
                    </div> }

                </div>
               
                <div className='border-1 border-gray-400 rounded-lg py-1 px-1.5 mt-3 mx-2 bg-white flex'>
                    <div className="text-base border-r border-slate-400 text-gray-600 pr-1"><SearchIcon/></div>
                    <input placeholder='Search for user' style={{outline:"none"}} className='text-base grow pl-2'/>
                </div>

                <div className='my-2 overflow-scroll chats shadow-md mx-2 rounded-xl bg-white border-1 border-gray-500'>
                    <div className='flex gap-2 border-b border-slate-400 p-2'>
                        <img src="/assets/EmptyPic.jpg" className='h-12 w-12 rounded-full'/>
                        <div className='flex flex-col justify-center gap-1'>
                            <div className='text-base font-semibold'>Ranjitkumar</div>
                            <div className='text-sm font-normal'>Good Morning</div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='col-span-9 '>
                <div className='bg-[#004225] w-fit text-white text-base p-2 relative rounded-l-lg rounded-br-lg m-4 send-message'>
                    Hi,How are you
                </div>
                <div className='flex fixed shadow-sm border-2 bottom-0 gap-2 justify-between w-[-webkit-fill-available] bg-slate-300  py-2 px-3'>
                    <div className='grow'>
                        <input className='w-full h-full border-1 border-gray-500  rounded-full px-3 outline-0 text-base' placeholder="Enter your message"/>
                    </div>
                    <div className='h-10 w-10 bg-green-500 rounded-full flex justify-center text-white items-center'><ArrowForwardIcon/></div>
                </div>
              
            </div>
        </div>
    </div>
  )
}
