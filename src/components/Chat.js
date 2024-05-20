import React, { useEffect, useRef, useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { MoreVert } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

export default function Chat() {
    const [showMenu,setShowMenu] = useState(false)
    const menuRef = useRef()
    const inputFile = useRef(null)

    


    useEffect(()=>{
        
       const event = window.addEventListener("click",function(){
        console.log(menuRef)
        setShowMenu(false)
       })

       return()=>{
        window.removeEventListener("click",event)
       }
    },[])
  return (
    <div className='w-full h-[89vh] overflow-hidden'>
        <div className='bg-white h-full grid grid-cols-12 border-7 border-gray-400 rounded-lg'>
            <div className='col-span-3 border-r-2 border-gray-600 bg-slate-200'>
                <div className="flex justify-between  px-2 pt-2 relative">
                    <div className='text-2xl font-bold '>Chats</div>
                    <div className="bg-green-500 cursor-pointer w-3 flex items-center justify-center text-white rounded-t-full rounded-b-full"
                        onClick={()=>{setShowMenu(!showMenu)}}>
                        <MoreVert/>
                    </div>

                   {showMenu && <div ref={menuRef} className='shadow-sm border-1 absolute border-gray-400 right-2 top-10 bg-white rounded-2'>
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
            <div className='col-span-9 messages overflow-scroll mb-14 pt-8'>
                <div className='flex justify-end w-[-webkit-fill-available] '>
                    <div className='bg-[#036242] w-fit text-white text-base p-3 relative rounded-l-lg rounded-br-lg mr-4 ml-28 mb-4 send-message'>
                        Hi,How are you blue and green. White is at the extreme upper end of the achromatic value scale and black is at the extreme lower end of the achromatic value scale, with all the colors normally considered tones of achromatic gray colors in between. Since achromatic colors have no hue, the hue code (h code) is left blank for achromatic colors (usually marked as a dash).
                    </div>
                </div>
                <div className='bg-gray-700 w-fit leading-6 w-fit text-white text-base p-3 relative rounded-r-lg rounded-bl-lg ml-4 mr-28 mb-4 receive-message'>
                    I am Fine How are you 
                    amounts of red, blue and green. White is at the extreme upper end of the achromatic value scale and black is at the extreme lower end of the achromatic value scale, with all the colors normally considered tones of achromatic gray colors in between. Since achromatic colors have no hue, the hue code (h code) is left blank for achromatic colors (usually marked as a dash).
                </div>
                <div className='bg-gray-700 w-fit leading-6 w-fit text-white text-base p-3 relative rounded-r-lg rounded-bl-lg ml-4 mr-28 mb-4 receive-message'>
                    I am Fine How are you 
                    amounts of red, blue and green. White is at the extreme upper end of the achromatic value scale and black is at the extreme lower end of the achromatic value scale, with all the colors normally considered tones of achromatic gray colors in between. Since achromatic colors have no hue, the hue code (h code) is left blank for achromatic colors (usually marked as a dash).
                </div>
                <div className='bg-gray-700 w-fit leading-6 w-fit text-white text-base p-3 relative rounded-r-lg rounded-bl-lg ml-4 mr-28 mb-4 receive-message'>
                    I am Fine How are you 
                    amounts of red, blue and green. White is at the extreme upper end of the achromatic value scale and black is at the extreme lower end of the achromatic value scale, with all the colors normally considered tones of achromatic gray colors in between. Since achromatic colors have no hue, the hue code (h code) is left blank for achromatic colors (usually marked as a dash).
                </div>
                <div className='bg-gray-700 w-fit leading-6 w-fit text-white text-base p-3 relative rounded-r-lg rounded-bl-lg ml-4 mr-28 mb-4 receive-message'>
                    I am Fine How are you 
                    amounts of red, blue and green. White is at the extreme upper end of the achromatic value scale and black is at the extreme lower end of the achromatic value scale, with all the colors normally considered tones of achromatic gray colors in between. Since achromatic colors have no hue, the hue code (h code) is left blank for achromatic colors (usually marked as a dash).
                </div>
                
                <div className='flex fixed shadow-sm border-2 bottom-0 gap-2 justify-between w-[-webkit-fill-available] bg-slate-300  py-2 px-3'>
                    <div onClick={()=>{inputFile.current.click()}}
                     className='h-10 w-10 bg-green-800 rounded-full flex justify-center text-white items-center'>
                        <input ref={inputFile} type='file' style={{display:"none"}}/>
                        <FileUploadOutlinedIcon/>
                    </div>
                    <div className='grow'>
                        <input className='w-full h-full border-1 border-gray-500  rounded-full px-3 outline-0 text-base text-wrap' placeholder="Enter your message"/>
                    </div>
                    <div className='h-10 w-10 bg-[#002387] rounded-full flex justify-center text-white items-center'><ArrowForwardIcon/></div>
                </div>
              
            </div>
        </div>
    </div>
  )
}
