import React from 'react'

export default function Clients() {
  return (
    <div className=' sm:h-64 md:h-11/12 sm:mt-10 md:mt-16 bg-zinc-100'>
       <h1 className='text-center pt-4 text-3xl font-semibold'>Our Clients</h1>
       <marquee behavior="" direction="" pauseOnHover='true' speed='50' >
        <div className='flex justify-around mt-8'>
        <div className='h-32 w-48 bg-slate-600'> 
           <img src="https://th.bing.com/th/id/OIP.9kiE2OBFOSG23iVzxLevUgAAAA?rs=1&pid=ImgDetMain" alt="" />
           </div>
        <div className='h-32 w-48 bg-slate-600'> 
           <img src="https://th.bing.com/th/id/OIP.9kiE2OBFOSG23iVzxLevUgAAAA?rs=1&pid=ImgDetMain" alt="" />
           </div>
        <div className='h-32 w-48 bg-slate-600'> 
           <img src="https://th.bing.com/th/id/OIP.9kiE2OBFOSG23iVzxLevUgAAAA?rs=1&pid=ImgDetMain" alt="" />
           </div>
        <div className='h-32 w-48 bg-slate-600'> 
           <img src="https://th.bing.com/th/id/OIP.9kiE2OBFOSG23iVzxLevUgAAAA?rs=1&pid=ImgDetMain" alt="" />
           </div>
        
        </div>
       </marquee>
    </div>
  )
}
