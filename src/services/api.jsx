import axios from 'axios'

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

const { VITE_BASE_URL } = import.meta.env

async function signIn(data) {
  const response = await axios.post(`${VITE_BASE_URL}auth/login`, data)
  return response
}
async function signUp(data) {
  await axios.post(`${VITE_BASE_URL}auth/sign-up`, data)
}
async function subscriptions(token) {
  const response = await axios.get(
    `${VITE_BASE_URL}subscriptions/memberships`,
    createConfig(token),
  )
  return response
}
async function subscription(token, id) {
  const response = await axios.get(
    `${VITE_BASE_URL}subscriptions/memberships/${id}`,
    createConfig(token),
  )
  return response
}
async function postSubscription(data, token) {
  const response = await axios.post(
    `${VITE_BASE_URL}subscriptions`,
    data,
    createConfig(token),
  )
  return response
}

async function deleteSubscription(token) {
  await axios.delete(`${VITE_BASE_URL}subscriptions`, createConfig(token))
}

const api = {
  signIn,
  signUp,
  subscriptions,
  subscription,
  postSubscription,
  deleteSubscription,
}
export default api
