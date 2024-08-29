"use client";

import { useRouter } from "next/navigation";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import api from "../utils/api";

interface AuthContextType {
  isLoggedIn: boolean;
  setAuthStatus: (status: boolean) => void;
  isAuthChecked: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isAuthChecked, setIsAuthChecked] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await api.get("/auth/user");
        setIsLoggedIn(response.data.isLoggedIn);
      } catch (error) {
        setIsLoggedIn(false);
      } finally {
        setIsAuthChecked(true);
      }
    };

    checkAuthStatus();
  }, [router]);

  const setAuthStatus = (status: boolean) => {
    setIsLoggedIn(status);
  };

  const value = useMemo(
    () => ({ isLoggedIn, setAuthStatus, isAuthChecked }),
    [isAuthChecked, isLoggedIn]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
