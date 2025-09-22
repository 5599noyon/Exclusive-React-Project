import React, { useState } from 'react';
import LoginImg from "../assets/login_Image.svg"
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login:', { email, password });
  };

  return (
    <>

        <div className="min-h-screen flex pt-[60px] pb-[140px] ">
      {/* Left Side - Illustration */}
      <div>
        <img src={LoginImg} alt={LoginImg} />
      </div>
      
      {/* Right Side - Form */}
      <div className="w-1/2 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-bold pb-[24px] pt-[48px] ">Log in to Exclusive</h1>
          <p className="text-gray-600 pb-8">Enter your details below</p>
          
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 border-b-2 border-gray-200 focus:border-red-500 outline-none"
            />
            
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 border-b-2 border-gray-200 focus:border-red-500 outline-none"
            />
            
            <div className="flex justify-between items-center pt-[40px] ">
              <button
                onClick={handleLogin}
                className="bg-red-500 text-white px-8 py-3 translate-x-[-35px] rounded hover:bg-red-600"
              >
                Log In
              </button>
              
              <button className="text-red-500 text-sm ">
                Forget Password?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}