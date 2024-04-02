import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Form from './components/Form'
import Login from './components/Login'

import { BrowserRouter,Routes,Route } from 'react-router-dom'



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/portfolio' element={<Portfolio />}/>
    <Route path='/form' element={<Form />}/>
    <Route path='/login' element={<Login />}/>



    </Routes>
    </BrowserRouter>
   

    </>
  )
}

export default App


