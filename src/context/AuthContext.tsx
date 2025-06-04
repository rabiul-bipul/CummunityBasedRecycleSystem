"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  isAdmin: boolean;
  login: (token: string) => void;
  logout: () => void;
}

// Create the AuthContext
const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  isAdmin: false,
  login: () => {},
  logout: () => {},
});

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = useCallback((token: string) => {
    localStorage.setItem("accessToken", token);
    const payload: any = JSON.parse(atob(token.split(".")[1]));
    setIsLoggedIn(true);
    setIsAdmin(payload.role === "Admin");
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    setIsAdmin(false);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const payload: any = JSON.parse(atob(token.split(".")[1]));
      setIsLoggedIn(true);
      setIsAdmin(payload.role === "Admin");
    } else {
      setIsLoggedIn(false);
      setIsAdmin(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
