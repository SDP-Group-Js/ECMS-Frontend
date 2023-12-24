import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "@/config/firebase";
import LoginForm from "@/app/signin/LoginForm";

export const AuthContext = createContext({
  user: null,
  complaints: [],
  institutions: [],
  publicUsers: [],
  loading: false,
});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [complaints, setComplaints] = useState([]);
  const [institutions, setInstitutions] = useState([]);
  const [publicUsers, setPublicUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:8080";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log("Hi");
        const uid = user.uid;

        // Need to fetch user details by providing uid
        const token = await user.getIdToken(true);
        const userResponse = await fetch(
          `${API_URL}/api/user/users/getDetails/${uid}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const userDetails = await userResponse.json();
        user.details = userDetails;
        const userRole = userDetails.userRole;

        //if (userRole !== "ComplaintHandler") {
        //window.location.pathname = "/dashboard";
        //alert("Only complaint handlers are allowed to allocate complaints");
        //}

        //if (userRole == "ComplaintHandler") {
        const complaints = await fetch(
          `${API_URL}/api/complaint/unallocatedComplaints`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const complaintData = await complaints.json();

        const institutions = await fetch(
          `${API_URL}/api/institution/institutions`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const institutionData = await institutions.json();

        const publicUsers = await fetch(`${API_URL}/api/user/publicUsers`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const publicUserData = await publicUsers.json();

        setComplaints(complaintData);
        setInstitutions(institutionData);
        setPublicUsers(publicUserData);
        //}

        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
        setComplaints([]);
        setInstitutions([]);
        setPublicUsers([]);
      }
    });

    return unsubscribe;
  }, []);

  const AuthValues = {
    user: user,
    loading: loading,
    complaints: complaints,
    institutions: institutions,
    publicUsers: publicUsers,
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
