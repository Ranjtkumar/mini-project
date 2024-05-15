import React from 'react'
import { Carousel,Card } from 'react-bootstrap'

export default function Home() {
  return (
    <div>
        
        <Carousel >
          <Carousel.Item className='border-0 p-0 bg-white'>
            <div className='w-full grid grid-cols-12 py-5 px-20 gap-10' style={{backgroundColor:"blueviolet"}}>
                <div className='text-5xl col-span-6 leading-normal text-white font-bold'>
                  The Internet Transforming Society and Shaping The Future Through The Chat
                </div>
                <div className='col-span-6'>
                  <img className='w-full h-full' src="/assets/chatimg.jpg"/>
                </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className='border-0 p-0 bg-white'>
            <div className="grid grid-cols-12 py-5 px-20 gap-10"  style={{backgroundImage:`url('/assets/chatbg1.jpg')`}}>
              <div className='col-span-6 text-blue-700 rounded-4  border-4 border-blue-600 font-semibold bg-amber-300 flex flex-col items-center py-4 text-center' >
                <div className='text-5xl'>FRIENDSHIP IS</div>
                <div className='flex mt-10 gap-x-10 '>
                  <img src="/assets/chaticon1.png" className=' rounded-full h-28 w-28'/>
                  <img src="/assets/personchat.jpg" className=' rounded-full h-28 w-28'/>
                </div>
                
                <div className='text-4xl font-bold px-10 pt-4 text-sky-600'>
                    ...a never-ending Supply of GREAT Conversations
                </div>
              </div>
              <div className='flex col-span-6'>
                <img src="/assets/grpchat.jpg" className='h-96 w-full'/>
              </div>

            </div>
          </Carousel.Item>
        </Carousel>
        <Card>
          
        </Card>
    </div>
  )
}
