import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from './AppContext';

const AppState = ({ children }) => {
  const url = "http://localhost:8080/api";

  const [Event, setEvent] = useState([]);
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  // ---------- FETCH EVENTS ----------
  // async function fetchData() {
  //   try {
  //     const res = await axios.get(`${url}/get`);
  //     console.log(res.data);
  //     setEvent(res.data);
  //   } catch (err) {
  //     console.error("Error fetching events:", err);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // ---------- REGISTER ----------
  const register = async (userData) => {
    try {
      const response = await axios.post(`${url}/auth/signup`, userData);
      setUser(response.data);
    } catch (err) {
      console.error("Error registering user:", err);
    }
  };

  // ---------- GET PROFILE ----------
  const profile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${url}/auth/login`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUserProfile(res.data);
    } catch (error) {
      console.log("Profile error:", error);
    }
  };

  // ---------- LOGOUT ----------
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    setUser(null);
    setUserProfile(null);
  };

  // ---------- PROVIDER RETURN ----------
  return (
    <AppContext.Provider
      value={{
        Event,        // Events list
        user,         // logged user
        register,     // register function
        profile,      // get profile
        userProfile,  // profile data
        logout        // logout function
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
