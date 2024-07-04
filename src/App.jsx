 
import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import About from './components/Home/About'
import Services from './components/Home/Services'
import Products from './components/pages/Products'
import Contact from './components/pages/Contact'
import Caraousal from './components/Home/Caraousal'
import Clients from './components/Home/Clients'
import NavBar from './components/Home/Navbar'
import { FooterComponent } from './components/Home/Footer'
import MoreAboutUs from './components/Home/MoreAboutUs'
import HomeNav from './components/Header/Home'
 

function App() {
 

  return (
    <BrowserRouter>
            
    {/* <NavBar/> */}
    <HomeNav/>

<Routes>
 
<Route path='/'  element={  <div>
    {/* <Caraousal/> */}
    <About/>
    <Clients/>
    <MoreAboutUs/>
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

export default App
