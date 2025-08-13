import axiosInstance from "../config/Axios";

export const loginUser = async (email, password) => {
  // Validar que el email tenga mínimo 4 letras antes del "@"
  
  // Validar que la contraseña tenga al menos un signo
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  if (!hasSymbol) {
    return { success: false, message: "La contraseña debe contener al menos un signo" };
  }

  try {
    const { data } = await axiosInstance.post("/auth/login", { email, password });

    // Guardar token, username y roles
    localStorage.setItem("token", data.token);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        username: data.username,
        roles: data.roles,
      })
    );

    return { success: true, username: data.username, roles: data.roles };
  } catch (error) {
    let message = "Error de conexión";
    if (error.response) {
      message = error.response.data?.message || "Credenciales inválidas";
    }
    return { success: false, message };
  }
};

