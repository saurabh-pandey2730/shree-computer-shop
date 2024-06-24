import React from 'react'
import NavBar from './Navbar'
import Caraousal from './Caraousal'
import About from './About'
import Clients from './Clients'
import Services from './Services'
import { FooterComponent } from './Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Products from '../pages/Products'
import Contact from '../pages/Contact'
export default function Homepage() {
  return (
    <BrowserRouter>
            
                      <NavBar/>
         
           <Routes>
                   
           <Route path='/'  element={  <div>
                      <Caraousal/>
                      <About/>
                      <Clients/>
                      <Services/>
                   </div>} />
           <Route path='/about'  element={ <About/>} />
           <Route path='/services'  element={ <Services/>} />
           <Route path='/products'  element={ <Products/>} />
           <Route path='/contact'  element={ <Contact/>} />
   
           </Routes>
                      <FooterComponent/>
      </BrowserRouter>
  )
}
