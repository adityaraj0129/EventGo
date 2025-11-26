import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './AuthPage/Login'
import Registration from './AuthPage/Registration';
import Home from './PAGES/Home';
import Navbar from './NavBar/Navbar';
import About from './PAGES/About';
import Events from './Events/Events';
import Contact from './PAGES/Contact';
import PaymentsBill from './Events/Payments/PaymentsBill';


const App = () => {
  return (
    <div>
        <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
           <Route path="/" element={<Home/>} />
           <Route path="/about" element={<About />} />
           <Route path="/events" element={<Events />} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/paymentsbill' element={<PaymentsBill/>}/>
          {/* <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product/search/:term" element={<SearchProduct />} />
          <Route path='/profile' element={<Profile/>} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App