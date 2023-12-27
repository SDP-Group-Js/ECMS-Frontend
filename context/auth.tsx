import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "@/config/firebase";
import LoginForm from "@/app/signin/LoginForm";

export const AuthContext = createContext({
  user: null,
  loading: false,
  fetchData: (user: any) => {},
});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:8080";

  const fetchData = async (user: any) => {
    const uid = user.uid;

    //Need to fetch user details by providing uid
    const token = await user.getIdToken(true);
    const response = await fetch(
      `${API_URL}/api/user/users/getDetails/${uid}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const userDetails = await response.json();
    console.log(userDetails);
    user.details = userDetails;
    const userRole = userDetails.userRole;

    if (userRole == "ComplaintHandler") {
      window.location.pathname = "/Complaints";
    }

    setUser(user);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log("Hi");
        const uid = user.uid;

        //Need to fetch user details by providing uid
        const token = await user.getIdToken(true);
        const response = await fetch(
          `${API_URL}/api/user/users/getDetails/${uid}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const userDetails = await response.json();
        console.log(userDetails);
        user.details = userDetails;
        const userRole = userDetails.userRole;

        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const AuthValues = {
    user: user,
    loading: loading,
    fetchData: fetchData,
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
