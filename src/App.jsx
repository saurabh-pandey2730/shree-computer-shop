 
import React from 'react'
import Homepage from './components/Home/Homepage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import About from './components/Home/About'
import Services from './components/Home/Services'
import Products from './components/pages/Products'
import Contact from './components/pages/Contact'
import Caraousal from './components/Home/Caraousal'
import Clients from './components/Home/Clients'
import NavBar from './components/Home/Navbar'
import { FooterComponent } from './components/Home/Footer'
 

function App() {
 

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

export default App
