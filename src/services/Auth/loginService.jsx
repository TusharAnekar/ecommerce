import axios from "axios";

export const loginService = async (email, password) =>
  await axios("/api/auth/login", {
    email: email,
    password: password,
  });
