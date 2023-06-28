import axios from "axios";

export const GetCartService = async (encodedToken) =>
  await axios("/api/user/cart", {
    headers: { authorization: encodedToken },
  });
