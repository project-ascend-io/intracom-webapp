"use client";
import { useContext, createContext, useState } from "react";
import { AuthContextType, AuthUserType, AuthProviderType } from "../types/auth";

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderType) {
  const [user, setUser] = useState<AuthUserType | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
