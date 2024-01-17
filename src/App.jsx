import React from 'react'
import Header from './components/global/Header'
import Footer from './components/global/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='max-w-5xl mx-auto pt-16'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App