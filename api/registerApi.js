import axios from "axios";

export const registerApi = async function (formData) {
  console.log("Form data in registerApi:", {
    ...formData,
    dateOfBirth: formData.dateOfBirth.toISOString(),
  });
  try {
    const response = await axios.post(
      "http://10.0.2.2:5160/api/User/register",
      {
        ...formData,
        dateOfBirth: formData.dateOfBirth.toISOString(),
      }
    );
    console.log("Response from registerApi:", response);
    return response.data.data;
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
    const errorMessage = error.response.data.message;

    throw new Error(errorMessage);
  }
};

export const loginApi = async function (credentials) {
  try {
    const response = await axios.post(
      "http://10.0.2.2:5160/api/User/login",
      credentials
    );
    return response.data.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Login failed";
    console.log("Error in loginApi:", errorMessage);
    throw new Error(errorMessage);
  }
};

export const getUsersByQueryApi = async function (filter) {
  console.log("Filter in getUsersByQueryApi:", filter);
  try {
    const response = await axios.post("http://10.0.2.2:5160/user", filter);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to fetch users";
    console.log("Error in getUsersByQueryApi:", errorMessage);
    throw new Error(errorMessage);
  }
};

export const getUserByNameApi = async function (name) {
  console.log("Name in getUserByNameApi:", name);
  try {
    const response = await axios.get(
      `http://10.0.2.2:5160/api/User/searchByFirstName/${name}`
    );
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to fetch user";
    console.log("Error in getUserByNameApi:", errorMessage);
    throw new Error(errorMessage);
  }
};

export const getAllUsersApi = async function () {
  try {
    const response = await axios.get(
      "http://10.0.2.2:5160/api/User/getAllUsers"
    );
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to fetch all users";
    console.log("Error in getAllUsersApi:", errorMessage);
    throw new Error(errorMessage);
  }
};
