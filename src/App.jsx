import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App;
