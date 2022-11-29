import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const API = "";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function register(formData, navigate) {
    setLoading(true);

    try {
      const res = await axios.post(`${API}account/register/`, formData);
      navigate("/login");
      alert("Вы успешно зарегистрировались!");
    } catch (err) {
      setError(Object.values(err.response.data));
      console.log(err);
    } finally {
      setLoading(false);
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
  };

  return (
    <>
      <authContext.Provider value={values}>{children}</authContext.Provider>
    </>
  );
};

export default AuthContextProvider;
