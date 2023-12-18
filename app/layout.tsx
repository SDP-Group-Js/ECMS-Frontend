"use client";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../config/firebase";
import React from "react";
import LoginForm from "./signin/LoginForm";
import { useRouter } from "next/router";

const Layout = ({ children }: any) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;

      return (
        <html>
          <body>{children}</body>
        </html>
      );
    } else {
      const router = useRouter();
      router.push("/signin");

      return <></>;
    }
  });
};

export default Layout;
