import React, { createContext, useContext, useEffect, useState } from "react";
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

  const API_URL = "http://localhost:8080";

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;

      const response = await fetch(`${API_URL}/api/user/users/${uid}`);
      const userData = await response.json();
      const userRole = userData.userRole;

      if (userRole !== "SystemAdmin" && userRole !== "OfficeAdmin") {
        window.location.pathname = "/dashboard";
        alert("Admin privileges required.");
      }

      setUser(user);
      setLoading(false);
    } else {
      setUser(null);
      setLoading(false);
    }
  });

  const AuthValues = {
    user: user,
    loading: loading,
  };

  return (
    <AuthContext.Provider value={AuthValues}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>{user ? <>{children}</> : <LoginForm />}</>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
