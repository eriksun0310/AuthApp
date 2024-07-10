import axios from "axios";

const API_KEY = "AIzaSyDQPBLG33VIAAShabYT6YR3SfjrYXWmKGk";

// 驗證身份
export const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
};
//創建User
export const createUser = (email, password) => {
  return authenticate("signUp", email, password);
};

//登入
export const login = (email, password) => {
  return authenticate("signInWithPassword", email, password);
};
