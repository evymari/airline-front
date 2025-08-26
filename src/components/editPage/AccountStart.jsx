import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faChevronRight, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function AccountStart() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cargar los datos del usuario desde localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUserData(JSON.parse(storedUser));
      }
    } catch (err) {
      console.error("❌ Error leyendo localStorage:", err);
      localStorage.removeItem("user");
    } finally {
      setLoading(false);
    }
  }, []);

  // Función de logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserData(null);
    navigate("/login");
  };

  if (loading) {
    return <p className="text-center mt-10">Cargando perfil...</p>;
  }

  if (!userData) {
    return (
      <div className="text-center mt-10">
        <p>No hay usuario logueado.</p>
        <button
          onClick={() => navigate("/login")}
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700"
        >
          Ir a Login
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-100 flex flex-col items-center p-4">
      <div className="w-full max-w-sm p-8 bg-white shadow-md rounded-2xl mt-16">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {userData.username || "User"}
            </h2>
            <p className="text-gray-500 text-sm">View and edit your profile</p>
          </div>
          <img
            className="w-20 h-20 rounded-full shadow"
            src={userData.photoUrl || "/image/account2.png"}
            alt="User Avatar"
          />
        </div>

        {/* Datos */}
        <div className="mt-8 space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">Username</span>
            <span className="text-gray-900">
              {userData.username || userData.email || "Unknown"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">Email</span>
            <span className="text-gray-900">{userData.email || "Unknown"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">Rol</span>
            <span className="text-gray-900">{userData.role || "USER"}</span>
          </div>
        </div>

        {/* Opciones */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-gray-700">Edit Profile</span>
          <FontAwesomeIcon
            icon={faGear}
            className="text-blue-500 cursor-pointer hover:text-blue-700"
            onClick={() => navigate("/EditSignUp")}
          />
        </div>

        {/* Opciones extra */}
        <div className="space-y-3 mt-4">
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200">
            <span className="text-gray-800 font-medium">Información personal</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>

          <div
            className="flex justify-between items-center p-4 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200"
            onClick={() => navigate("/reservas")}
          >
            <span className="text-gray-800 font-medium">Historial de reservas</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>

        {/* Logout */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-gray-700">Log out</span>
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className="text-red-500 cursor-pointer hover:text-red-700"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
}

export default AccountStart;
