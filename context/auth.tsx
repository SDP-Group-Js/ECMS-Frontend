import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "@/config/firebase";
import LoginForm from "@/app/signin/LoginForm";

export const AuthContext = createContext({
  user: null,
  loading: false,
});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:8080"

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;

      // Need to fetch user details by providing uid
      // const userDetails = await fetch(`${API_URL}/user/${uid}`)

      setUser(user);
      setLoading(false)
    } else {
      setUser(null);
      setLoading(false)
    }
  });

  const AuthValues = {
    user: user,
    loading: loading,
  };

  return (
    <AuthContext.Provider value={AuthValues}>
      {loading ? (
        <div>
          Loading...
        </div>
      ) : (
        <>
        {user ? <>{children}</> : <LoginForm />}
        </>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
