import React from 'react'

export default function Clients() {
  return (
    <div className=' sm:h-64 md:h-11/12 sm:mt-10 md:mt-16 bg-zinc-100'>
       <h1 className='text-center pt-4 text-3xl font-bold hover:text-blue-700'>Our Clients</h1>
       <marquee behavior="slide" direction="left"  speed='200' loop='' >
        <div className='flex justify-between mt-8 mb-8'>
        <div className='md:h-32 md:w-48 hover:scale-105 h-32 w-[600px]  '>            
               <img className='md:h-32 md:w-48 rounded-lg h-24 w-[600px]' src="https://th.bing.com/th/id/OIP.hCuZce4tatBhkTjk14qI4QAAAA?rs=1&pid=ImgDetMain" alt="" />  
           </div>
        <div className='md:h-32 md:w-48 hover:scale-105 h-32 w-[600px] ml-6 '>            
               <img className='md:h-32 md:w-48 rounded-lg h-24 w-[600px]' src="https://th.bing.com/th/id/OIP.hCuZce4tatBhkTjk14qI4QAAAA?rs=1&pid=ImgDetMain" alt="" />  
           </div>
        <div className='md:h-32 md:w-48 hover:scale-105 h-32 w-[600px] ml-6 '>            
               <img className='md:h-32 md:w-48 rounded-lg h-24 w-[600px] ' src="https://th.bing.com/th/id/OIP.hCuZce4tatBhkTjk14qI4QAAAA?rs=1&pid=ImgDetMain" alt="" />  
           </div>
        <div className='md:h-32 md:w-48 hover:scale-105 h-32 w-[600px] ml-6 '>            
               <img className='md:h-32 md:w-48 rounded-lg h-24 w-[600px] ' src="https://th.bing.com/th/id/OIP.hCuZce4tatBhkTjk14qI4QAAAA?rs=1&pid=ImgDetMain" alt="" />  
           </div>
       
       
        
        </div>
       </marquee>
       {/* <div className=' items-start flex justify-between gap-5 max-md:flex-wrap max-md:justify-center '>             */}
              
    </div>
  )
}
