import React from 'react'

export default function Login() {
  return (
    <div className='flex justify-center items-center h-[100vh] bg-no-repeat bg-cover' style={{backgroundImage:`url('/assets/chatbg.jpg')`}}>
     
        <div className='grid grid-cols-12 w-1/2 border-8 border-orange-700 rounded'>
          <div className='flex flex-col items-center col-span-5 bg-blue-200'>
            <div className='flex flex-col items-center'>
              <img src="/assets/chatIcon.png" className='mt-5 w-20'/>
              <div className='mb-5 text-lg font-bold pt-3'>Welcome to Chatamps</div>
            </div>
            
            <img src="/assets/quotes.jpg" className='w-full'/>
          </div>
          <div className='col-span-7 grid justify-center bg-slate-100 items-center'>
              <form>
                <label className='font-semibold'>Email Id</label><br/>
                <input className='mt-2 border-2 border-black rounded-lg px-1 py-0.5 text-base'/><br/>
                <label className='font-semibold pt-4'>Password</label><br/>
                <input className='mt-2 border-2 border-black rounded-lg px-1 py-0.5 base'/><br/>
                <button type='sumbit' className='bg-green-600 px-4 py-2 rounded-lg mt-4 font-medium 
                text-white text-lg'>Login</button>
              </form>
          </div>
        </div>
      

    </div>
  )
}
