import React from 'react'
import { Button, Navbar } from "flowbite-react"
import logo from '../../assets/shree-logo.png'
export default function NavBar() {
  return (
    <Navbar fluid rounded className='bg-[#f5f5f5] '>
    <Navbar.Brand href="http">
      <img src={logo} className="mr-3 lg:h-12 sm:h-20" alt="Shree-computer-shop" />
      <span className='px-2 py-1 lg:ml-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'> Shree Computer Shop</span> 
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Button gradientDuoTone='purpleToBlue' className='outline mr-14'>Rental Services</Button>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="#" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="#">About</Navbar.Link>
      <Navbar.Link href="#">Services</Navbar.Link>
      <Navbar.Link href="#">Products</Navbar.Link>
      <Navbar.Link href="#">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  )
}
