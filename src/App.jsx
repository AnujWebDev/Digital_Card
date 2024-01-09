import React from 'react'
import './App.css'
import DefaultNavbar from './Components/DefaultNavbar'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Products from './Pages/Products'
import Payment from './Pages/Payment'
import Feedback from './Pages/Feedback'
import Enquiry from './Pages/Enquiry'
function App() {
  return (
    <>
      <Home/>
      <AboutUs/>
      <Products/>
      <Payment/>
      <Feedback/>
      <Enquiry/>
      <DefaultNavbar/>
    </>
  )
}

export default App
