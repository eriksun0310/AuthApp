import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false, //是否登入
  authenticate: () => {}, //成功進行身份驗證時觸發的行為
  logout: () => {}, //登出
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState("");



  //成功登入、註冊,觸發的行為
  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
  }

  // 登出
  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("token");
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthContextProvider;
