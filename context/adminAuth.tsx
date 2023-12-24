import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "@/config/firebase";
import LoginForm from "@/app/signin/LoginForm";

export const AuthContext = createContext({
  user: null,
  institutions: [],
  divisions: [],
  branches: [],
  beatOffices: [],
  loading: false,
});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [institutions, setInstitutions] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [branches, setBranches] = useState([]);
  const [beatOffices, setBeatOffices] = useState([]);
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

        if (userRole !== "SystemAdmin" && userRole !== "OfficeAdmin") {
          window.location.pathname = "/dashboard";
          alert("Admin privileges required.");
        }

        if (userRole == "SystemAdmin") {
          const offices = await fetch(`${API_URL}/api/institution`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const officeDetails = await offices.json();
          const institutionOffices = officeDetails.filter(
            (office: any) => office.Institution != null,
          );
          const divisionOffices = officeDetails.filter(
            (office: any) => office.Division != null,
          );
          const branchOffices = officeDetails.filter(
            (office: any) => office.Branch != null,
          );
          const beatOfficeOffices = officeDetails.filter(
            (office: any) => office.BeatOffice != null,
          );

          setInstitutions(institutionOffices);
          setDivisions(divisionOffices);
          setBranches(branchOffices);
          setBeatOffices(beatOfficeOffices);
        }

        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
        setInstitutions([]);
        setDivisions([]);
        setBranches([]);
        setBeatOffices([]);
      }
    });

    return unsubscribe;
  }, []);

  const AuthValues = {
    user: user,
    loading: loading,
    institutions: institutions,
    divisions: divisions,
    branches: branches,
    beatOffices: beatOffices,
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
