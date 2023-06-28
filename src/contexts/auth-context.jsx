import { createContext, useEffect } from "react";
import { loginService } from "../services/Auth/loginService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  async function getAuth() {
    try {
      const response = await loginService();
      console.log(response);
    } catch (error) {}
  }

  useEffect(() => {
    getAuth();
  }, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
