import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res =await axios.post('http://localhost:8080/api/auth/login',{
        email,
        password,
      })
      if (res.data=="Login successfull") {
        toast.success('User logged in');  
          // Save token for future requests
      // localStorage.setItem("token", res.data.token);
      // localStorage.setItem("username", res.data.username);
        navigate('/')
      }else {
      toast.error(response.data.message || 'Login failed!');
    }
      
    } catch (error) {
        console.error(error);
    toast.error('Something went wrong!');
      
    }
  };

  return (
    <div className="min-h-screen flex w-full items-center justify-center bg-gray-100 px-4">

      <div className=' bg-gray-800 w-2/3 min-h-screen max-wd-md text-white flex items-center justify-center p-8 '>
            <div className='max-w-md space-y-4'>
                <h2 className='text-3xl font-bold'>EventGo</h2>
                <p className='text-lg leading-relax'>Introducing EventGo, our cutting-edge EventGo web application designed to revolutionize how you manage events. With EventGO, you can effortlessly track and monitor cureent events, upcoming Events and productivity from anywhere, anytime, using any internet-connected device</p>
            </div>
        </div>

        {/* Login Box */}
      <div className="max-w-md w-2/3 pt-30 min-h-screen bg-white rounded-lg shadow-md p-8 border border-black-100">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Login to Your Account</h2>
        <button
            variant="outlined"
            size="lg"
            className="mt-6 flex h-12 items-center justify-center gap-2 border border-black-100 rounded-xl w-full hover:shadow-xl/50"
            fullWidth
          >
            <img
              src={`https://www.material-tailwind.com/logos/logo-apple.png`}
              alt="google"
              className="h-6 w-6"
            />{" "}
            sign in with google
          </button>
          <button
            variant="outlined"
            size="lg"
            className="mt-6 flex h-12 items-center justify-center gap-2 border border-black-100 rounded-xl w-full hover:shadow-xl/50"
            fullWidth
          >
            <img
              src={`https://www.material-tailwind.com/logos/logo-google.png`}
              alt="google"
              className="h-6 w-6"
            />{" "}
            sign in with Apple
          </button>

          <span className='flex justify-center mt-5 mb-5'>Or</span>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900  text-white py-3 rounded-md font-semibold transition-colors duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/registration" className="text-gray-900 hover:underline font-semibold">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
