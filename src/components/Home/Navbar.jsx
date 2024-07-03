import React from 'react'
import { Button, Navbar } from "flowbite-react"
// import logo from '../../assets/shree-logo.png'
import logo from '../../assets/logo-scs-.png' 
export default function NavBar() {
  return (
    <Navbar fluid rounded className='bg-[#f5f5f5] sticky top-0 z-10 ; '>
       <Navbar.Brand href="http">
         <img src={logo} className=" lg:h-16 sm:h-20 h-16" alt="Shree-computer-shop " />
         <span className='font-bold ml-9 sm:ml-0 md:ml-0 px-2 py-1 lg:ml-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'> Shree Computer Shop</span> 
       </Navbar.Brand>
      <div className="flex md:order-2">
         <Button gradientDuoTone='purpleToBlue' className='outline mr-14 hidden md:inline'>Rental Services</Button>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="/" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="/about">About</Navbar.Link>
      <Navbar.Link href="/services">Services</Navbar.Link>
      <Navbar.Link href="/products">Products</Navbar.Link>
      <Navbar.Link href="/contact">Contact</Navbar.Link>
      <Navbar.Link className='md:hidden' href="/rent">Rental</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  )
}
