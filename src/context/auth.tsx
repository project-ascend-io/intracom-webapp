"use client";
import { useContext, createContext, useState } from "react";
import { AuthContextType, AuthUserType, AuthProviderType } from "../types/auth";

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderType) {
  const userString = localStorage.getItem("intracom-user") || "";
  const userObject = userString.length ? JSON.parse(userString) : null;

  const [user, setUser] = useState<AuthUserType | null>(userObject);

  const expires = userObject?.expires;

  // if current date surpases the expire date clear user and local storage
  if (expires && Date.parse(expires) < Date.parse(new Date().toISOString())) {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
