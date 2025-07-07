import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;


console.log("🔍 API Base URL:", apiUrl);

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;

