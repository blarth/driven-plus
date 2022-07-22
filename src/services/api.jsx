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
  const response = await axios.post(`${VITE_BASE_URL}auth/login`, data);
  return response;
}
async function signUp(data) {
  await axios.post(`${VITE_BASE_URL}auth/sign-up`, data);
  return
}
async function subscriptions(token) {
  console.log(token)
  const response = await axios.get(`${VITE_BASE_URL}subscriptions/memberships`, createConfig(token));
  return response
}


 const api = {
   signIn,
   signUp,
   subscriptions,
 };
export default api