import axios from "axios";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

async function signIn(data) {
  const response = await axios.post(`${VITE_BASE_URL}/auth/login`, data);
  return response;
}


 const api = {
  signIn
}
export default api