// @ts-ignore 'use client';
'use client';


import React, { MouseEvent, useState } from 'react';
import loginImg from '../assets/plant.jpg';
import Image from 'next/image'
 


export default function Authentication() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignIn = (e : React.FormEvent) => {
    e.preventDefault();
    // sign-in logic here
    console.log("Sign in success!");
    console.log(email);
    console.log(password);
    console.log("\n");
  };


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <Image className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>


      <div className="bg-gray-100 flex flex-col justify-center">
        {/* Sign In Form */}
        <form className="max-w-[400px] w-full mx-auto bg-white p-4" onSubmit={handleSignIn}>
          <h2 className="text-4xl font-bold text-center py-6">SIGN IN</h2>
          <div className="flex flex-col py-2">
            <label>Email address</label>
            <input
              className="border p-2"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border p-2"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="border w-full my-5 py-2 bg-emerald-600 hover:bg-green-500 text-white" type="submit">
            Sign In
          </button>
          <div className="flex justify-between">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
           
          </div>
        </form>


     
      </div>
    </div>
  );
}



