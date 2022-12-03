import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const API = "http://35.203.116.125/api/v1/";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function register(formData, navigate) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}accounts/register/`, formData);
      navigate("/login");
      alert("Please check mail and activate your account!");
      console.log(res);
    } catch (err) {
      setError(Object.values(err.response.data));
      console.log(err);
    } finally {
      setLoading(false);
      // console.log(formData);
    }
  }

  async function login(formData, navigate) {
    setLoading();
    try {
      const res = await axios.post(`${API}accounts/login/`, formData);
      console.log(formData);
      localStorage.setItem("token", JSON.stringify(res.data));
      // localStorage.setItem("email", email);
      navigate("/info");
      console.log(res);
    } catch (err) {
      setError(err);
      console.log(error);
      // alert("Please activate or create an account");
    } finally {
      setLoading();
    }
  }

  const values = {
    currentUser,
    error,
    loading,

    setCurrentUser,
    setError,
    setLoading,
    register,
    login,
  };

  return (
    <>
      <authContext.Provider value={values}>{children}</authContext.Provider>
    </>
  );
};

export default AuthContextProvider;
