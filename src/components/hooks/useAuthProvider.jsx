import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("pearl");
  const [user, setUser] = useState({ name: "obiora" });

  const login = (userData, token) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, token, login, logout, isAuth: token && user }),
    [token, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
