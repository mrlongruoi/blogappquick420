import axios from "axios";

// Central axios instance for the app. Keeping this in a separate module
// prevents non-component exports in component files (helps Fast Refresh).
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const setAuthToken = (token) => {
  if (token) api.defaults.headers.common["Authorization"] = token;
  else delete api.defaults.headers.common["Authorization"];
};

export default api;
