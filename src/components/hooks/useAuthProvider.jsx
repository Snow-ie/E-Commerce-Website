import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = async ({ email, password }) => {
    if (!email || !password) {
      throw new Error("Login failed");
    }
    setUser({ email });
    setToken("sample-token");
    localStorage.setItem("email", email);
    localStorage.setItem("token", "sample-token");
  };

  const logout = async () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("email");
    localStorage.removeItem("token");
  };
  //
  //
  const checkError = async (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      throw new Error("Session expired");
    }
  };

  const checkAuth = async () => {
    if (!localStorage.getItem("email")) {
      throw new Error("Not authenticated");
    }
  };

  console.log({ token, user });
  const value = useMemo(
    () => ({
      user,
      token,
      login,
      logout,
      checkAuth,
      checkError,
      isAuth: !!token && !!user,
    }),
    [token, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
