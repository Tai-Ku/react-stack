import axios from "../axios";

const handleLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getAllUser = (userId) => {
  return axios.get(`/api/get-all-user?id=${userId}`);
};

const createNewUser = (data) => {
  return axios.post("/api/create-newuser", {
    email: data.email,
    password: data.password,
    address: data.address,
    firstName: data.firstName,
    lastName: data.lastName,
  });
};

const deleteUser = (userId) => {
  console.log(userId);
  return axios.delete(`/api/delete-user?id=${userId}`);
};

const editUser = (data) => {
  return axios.put(`/api/update-user`, {
    id: data.id,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
  });
};

export { handleLoginApi, getAllUser, createNewUser, deleteUser, editUser };
