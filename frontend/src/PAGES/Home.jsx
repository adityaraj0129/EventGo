import React from 'react'
import Navbar from '../NavBar/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-[url(images/Home-Background-img.jpg)] min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed '>
        <Navbar/>
        <div className='flex flex-col justify-center items-center  border border-white-300 bg-black/35 min h-screen  '>
            <h1 className='text-white text-5xl'>One Stop</h1>
            <h1 className='text-white text-6xl font-bold drop-shadow-lg  px-4 py-2 rounded '>Event Planner</h1>
            <p className='text-white font-mono text-2xl'>Every Event Should Be Perfect</p>
           <div className='flex mt-15'>
            <button className='py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-black-200 bg-white text-gray-800 shadow-2xs hover:bg-orange-200 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none mr-10 w-30 flex justify-center hover:shadow-xl/50'><Link to={'/about'}> About US</Link></button>
            
            <button className='py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-black-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none w-40 flex justify-center hover:shadow-xl/50'> GET STARTED</button>
           </div>
        </div>
         </div>
  )
}

export default Home