import axiosInstance from "../config/Axios";

// 🔐 AUTH
export const registerUser = async (username, email, password, photoUrl = null) => {
  try {
    const response = await axiosInstance.post("/register", { username, email, password, photoUrl });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response?.data?.error || "Error al registrar" };
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post("/auth/login", { email, password });
    const { username, email: backendEmail, role, token } = response.data;

    const userData = { username, email: backendEmail, role, token };
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);

    return { success: true, ...userData };
  } catch (error) {
    return { success: false, message: error.response?.data?.error || "Credenciales inválidas" };
  }
};

export const logoutUser = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

// 📝 PERFIL
export const getProfile = async () => {
  try {
    const response = await axiosInstance.get("/profile");
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: "Error al obtener perfil" };
  }
};

export const updateProfile = async (updates) => {
  try {
    const response = await axiosInstance.put("/profile/update", updates);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: "Error al actualizar perfil" };
  }
};

export const deleteProfile = async () => {
  try {
    await axiosInstance.delete("/profile/delete");
    logoutUser();
    return { success: true };
  } catch (error) {
    return { success: false, message: "Error al eliminar perfil" };
  }
};

// ✈️ VUELOS
export const getFlights = async (filters = {}) => {
  try {
    const response = await axiosInstance.get("/flights", { params: filters });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: "Error al obtener vuelos" };
  }
};

export const getFlightById = async (flightId) => {
  try {
    const response = await axiosInstance.get(`/flights/${flightId}`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: "Error al obtener vuelo" };
  }
};

export const bookFlight = async (flightId, bookingData) => {
  try {
    const response = await axiosInstance.post(`/flights/${flightId}/book`, bookingData);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: "Error al reservar vuelo" };
  }
};

export const getMyBookings = async () => {
  try {
    const response = await axiosInstance.get("/my-bookings");
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: "Error al obtener reservas" };
  }
};

export const cancelBooking = async (bookingId) => {
  try {
    await axiosInstance.delete(`/bookings/${bookingId}`);
    return { success: true };
  } catch (error) {
    return { success: false, message: "Error al cancelar reserva" };
  }
};
