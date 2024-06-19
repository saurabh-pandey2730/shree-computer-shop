import React from 'react'
import NavBar from './Navbar'
import Caraousal from './Caraousal'
import About from './About'
import Clients from './Clients'
import Services from './Services'
import { FooterComponent } from './Footer'

export default function Homepage() {
  return (
    <div>
      <NavBar/>
      <Caraousal/>
      <About/>
   <Clients/>
    <Services/>
      <FooterComponent/>
          </div>
  )
}
