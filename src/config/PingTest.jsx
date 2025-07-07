/*
import { useEffect, useState } from "react";
import axiosInstance from "./Axios";

function PingTest() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axiosInstance.get("/ping")
      .then(response => {
        console.log("✅ Respuesta del backend:", response.data);
        setMessage(response.data);
      })
      .catch(error => {
        console.error("❌ Error al conectar con el backend:", error);
        setMessage("Error al conectar con el backend");
      });
  }, []);

  return (
    <div className="text-center mt-10">
      <h1 className="text-xl font-bold">Prueba de conexión</h1>
      <p>{message}</p>
    </div>
  );
}

export default PingTest;

*/