import React from 'react'
import Navbar from '../NavBar/Navbar'
import PaymentsBill from '../Events/Payments/PaymentsBill'

const About = () => {
  return (
    <div >
        <Navbar/>
        <div className=' bg-[url(images/About-Bacnkground.jpg)] min-h-screen w-full bg-cover bg-no-repeat bg-fixed' >
        <div className='fixed top-10 right-10 w-[550px] h-100 bg-white-100  rounded-xl p-6 animate-slide-up z-50 mt-30 '>
          <h1 className='font-semibold text-4xl flex justify-center'>EventGo</h1>
          <p className='mt-10 leading-relaxed font-light'>EventGo is a cutting-edge web application designed to revolutionize how you manage and experience events. It enables you to effortlessly track, organize, and monitor current, upcoming, and past events through a smart and intuitive interface. With real-time updates and seamless navigation, EventGo helps boost your productivity and keeps you informed about every event detail. Accessible anytime, anywhere, and on any internet-connected device, it brings powerful event management directly to your fingertips. EventGo transforms the way you stay connected with events, making the entire process smooth, efficient, and user-friendly.</p>
        </div>
        </div>
        </div>
  )
}

export default About