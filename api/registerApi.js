import axios from "axios";

export const registerApi = async function (userData) {
  try {
    const response = await axios.post(
      "https://localhost:7002/api/User/register",
      userData
    );
    console.log("Response from registerApi:", response);
    return response.data.data;
  } catch (error) {
    throw new Error(response.data.message);
  }
};
