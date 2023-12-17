"use client";
import { useEffect, useState } from "react";
import { auth } from "@/config/firebaseStorage";
import { signInWithEmailAndPassword } from "firebase/auth";

import Link from "next/link";
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      router.push("../report-complaint");
    }
  });

  const login = async (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful");
      router.push("../report-complaint");
    } catch (error: any) {
      setError(error.message);
      alert(error.message);
    }
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
