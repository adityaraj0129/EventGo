import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  let EventImg = 'images/Event-Management.webp';

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/auth/signup', {
        name,
        email,
        password,
      });
      console.log(response);
      if (response.data) {
        toast.success('✅ Register successfully');
        navigate('/login');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        toast.error(response.data.message || "Registration failed!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return ( 
   <div className='min-h-screen w-full flex items-center justify-center'>
    
    <div className=' bg-gray-800 w-2/3 min-h-screen max-wd-md text-white flex items-center justify-center p-8 '>
    <img src={EventImg} alt="" />
            <div className='max-w-md space-y-4'>
                
            </div>
        </div>

     <div className="max-w-md border w-1/3 border-black-100 mx-auto mt-10 p-8 shadow-[inset_0px_5px_15px_-3px_rgba(0,_0,_0,_0.2)] rounded-lg">
      <Toaster />
      <p className='font-semibold mb-7 flex justify-center text-3xl '>Create your Account</p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-semibold text-gray-800">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter your name"
            className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-semibold text-gray-800">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-2 font-semibold text-gray-800">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter your password"
            className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="mb-2 font-semibold text-gray-800">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 text-white font-bold py-3 rounded-md hover:bg-gray-800 transition-colors duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
   </div>
  );
}

export default Registration;
