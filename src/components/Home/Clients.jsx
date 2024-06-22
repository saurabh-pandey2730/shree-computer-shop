import React from 'react'

export default function Clients() {
  return (
    <div className=' sm:h-64 md:h-11/12 sm:mt-10 md:mt-16 bg-zinc-100'>
       <h1 className='text-center pt-4 text-3xl font-semibold'>Our Clients</h1>
       <marquee behavior="alternate" direction="" pauseOnHover='true' speed='50' loop='2' >
        <div className='flex justify-between mt-8 mb-10  items-start'>
        <div className='md:h-32 md:w-48 hover:scale-105 h-32 w-[600px] ml-8 '>            
               <img className='md:h-32 md:w-48 rounded-lg h-24 w-[600px]' src="https://th.bing.com/th/id/OIP.hCuZce4tatBhkTjk14qI4QAAAA?rs=1&pid=ImgDetMain" alt="" />  
           </div>
        <div className='md:h-32 md:w-48 hover:scale-105 h-32 w-[600px] ml-8 '>            
               <img className='md:h-32 md:w-48 rounded-lg h-24 w-[600px]' src="https://th.bing.com/th/id/OIP.hCuZce4tatBhkTjk14qI4QAAAA?rs=1&pid=ImgDetMain" alt="" />  
           </div>
        <div className='md:h-32 md:w-48 hover:scale-105 h-32 w-[600px] ml-8 '>            
               <img className='md:h-32 md:w-48 rounded-lg h-24 w-[600px] ' src="https://th.bing.com/th/id/OIP.hCuZce4tatBhkTjk14qI4QAAAA?rs=1&pid=ImgDetMain" alt="" />  
           </div>
        <div className='md:h-32 md:w-48 hover:scale-105 h-32 w-[600px] ml-8 '>            
               <img className='md:h-32 md:w-48 rounded-lg h-24 w-[600px] ' src="https://th.bing.com/th/id/OIP.hCuZce4tatBhkTjk14qI4QAAAA?rs=1&pid=ImgDetMain" alt="" />  
           </div>
       
        {/* <div className='h-32 w-48 hover:scale-105 ml-8'>            
               <img className='h-32 w-48 rounded-lg ' src="https://th.bing.com/th/id/OIP.9kiE2OBFOSG23iVzxLevUgAAAA?rs=1&pid=ImgDetMain" alt="" />  
           </div>
        <div className='md:h-32 md:w-48 h-10 w-32 hover:scale-105 ml-12'>            
               <img className='h-32 w-48 rounded-lg ' src="https://th.bing.com/th/id/OIP.L-hBzJCegRGAD2pHJIyCJgHaCS?w=347&h=108&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />  
           </div> */}
        {/* <div className='h-32 w-48 hover:scale-105'>            
               <img className='h-32 w-48 rounded-lg ' src="https://th.bing.com/th/id/OIP.9kiE2OBFOSG23iVzxLevUgAAAA?rs=1&pid=ImgDetMain" alt="" />  
           </div>
        <div className='h-32 w-48 hover:scale-105'>            
               <img className='h-32 w-48 rounded-lg sm:h-20 sm:w-32 ' src="https://th.bing.com/th/id/OIP.D1ZMfA_WIjCXUT8N2-tMzQAAAA?w=226&h=159&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />  
           </div> */}
       
        
        </div>
       </marquee>
    </div>
  )
}
