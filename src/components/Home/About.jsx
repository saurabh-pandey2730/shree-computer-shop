import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
export default function About() {
  return (
    <div className='md:mt-16 sm:mt-10 lg:flex  justify-between  '>
      
    <img className='h-96 rounded-lg  md:ml-16 sm:ml-6 rounded-br-full md:mt-8 sm:mt-0 ' src='https://th.bing.com/th/id/OIP.Prq11nic_h3ubwKfgeeBbwHaE8?rs=1&pid=ImgDetMain' alt="mta - india" />

 <div className='w-full md:ml-24 sm:ml-4 '>
  {/* <span className='text-red-500 font-bold'>About us</span> */}
  <h1 className='mt-6 text-4xl font-bold text-amber-700 sm:mt-5 md:mt-0  ml-8 '><span className='text-slate-600 '>Welcome To</span> Shree Computer Shop</h1>
  <p className='mt-4 px-3 text-lg text-slate-600'>Step into our world of cutting-edge technology, where innovation meets affordability. Whether you're a seasoned professional or a tech enthusiast, we have the perfect solution tailored to your needs.

Explore our extensive range of products, from state-of-the-art laptops and desktops to high-performance peripherals and accessories. With brands known for quality and reliability, you can trust that your computing needs are in good hands.

</p>
  
 <div className='mt-4'>
 <span className='flex'><FaRegArrowAltCircleRight className='w-7 text-red-600 mt-1'/>ISO Certified </span>
 <span className='flex mt-2'><FaRegArrowAltCircleRight className='w-7 text-red-600 mt-1'/>Rental Service Available</span>
 <span className='flex mt-2'><FaRegArrowAltCircleRight className='w-7 text-red-600 mt-1'/>Other Tech Support</span>
 <p className='font font-semibold md:text-2xl mt-4 text-base sm:text-xl m-5'>*We Have <span className='text-red-500'>10 Years</span> of Working Experience</p>
 </div>
 </div>
</div>
  )
}
