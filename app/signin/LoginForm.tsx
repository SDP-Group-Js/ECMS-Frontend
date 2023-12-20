"use client";
import { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const {user} = useAuth()

  useEffect(() => {
    if (user) {
      router.push("/dashboard")
    }
  }, [])

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
    <div className="grid h-screen w-full grid-cols-1 sm:grid-cols-2">
      <div className="hidden sm:block">
        <Image
          width={100}
          height={100}
          className="h-full w-full object-cover"
          src="/plant.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-center bg-gray-100">
        {/* Sign In Form */}
        <form
          className="mx-auto w-full max-w-[400px] bg-white p-4"
          onSubmit={login}
        >
          <h2 className="py-6 text-center text-4xl font-bold">SIGN IN</h2>
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
          <button
            className="my-5 w-full border bg-emerald-600 py-2 text-white hover:bg-green-500"
            type="submit"
          >
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
