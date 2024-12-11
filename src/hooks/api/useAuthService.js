import axios from "axios";
import ApiEndPoints from "../../config/ApiEndPoints";

export const handleLogin = async ({ email, password }) => {
  console.log("Attempting login");
  const response = await axios.post(ApiEndPoints.login, {
    email,
    password,
  });
  return response.data;
};

const register = async ({ email, password }) => {
  const response = await axios.post(ApiEndPoints.login, {
    email,
    password,
  });
  return response;
};
