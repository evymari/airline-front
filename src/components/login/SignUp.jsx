import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Button from '../butons/Button';

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
    photoUrl: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    const { username, password, email, photoUrl } = form;

    // 🔹 Validaciones
    if (!username || !password || !email) {
      setError('Todos los campos obligatorios deben completarse.');
      return;
    }
      const letterMatches = username.match(/[A-Za-zÁÉÍÓÚáéíóúÜüÑñ]/g) || [];
    if (letterMatches.length < 4) {
      setError('El nombre de usuario debe contener al menos 4 letras.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('El correo no es válido.');
      return;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError('La contraseña debe contener al menos una letra mayúscula.');
      return;
    }
    if (!/\d/.test(password)) {
      setError('La contraseña debe contener al menos un número.');
      return;
    }
      const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/;
    if (!specialCharRegex.test(password)) {
      setError('La contraseña debe contener al menos un carácter especial (ej: !@#$%).');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch('http://localhost:8080/api/v1/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          email,
          password,
          photoUrl,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('✅ ¡Cuenta creada exitosamente!');
        setForm({ username: '', password: '', email: '', photoUrl: '' });
        setTimeout(() => navigate('/login'), 1500);
      } else {
        if (result.error?.toLowerCase().includes("email")) {
          setError("❌ Este correo ya está registrado.");
        } else if (result.error?.toLowerCase().includes("username")) {
          setError("❌ Este nombre de usuario ya está en uso.");
        } else {
          setError(result.error || 'Error durante el registro.');
        }
      }
    } catch (err) {
      setError('❌ Error de red o del servidor.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-purple-700">Crear Cuenta</h2>

        {error && <div className="text-red-600 text-sm text-center">{error}</div>}
        {message && <div className="text-green-600 text-sm text-center">{message}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Usuario */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              Nombre de Usuario
            </label>
            <input
              name="username"
              placeholder="Ej: evelyn_dev"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              Correo Electrónico
            </label>
            <input
              name="email"
              type="email"
              placeholder="tucorreo@email.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Foto opcional */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              URL de Foto (opcional)
            </label>
            <input
              name="photoUrl"
              placeholder="https://..."
              value={form.photoUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Contraseña */}
          <div className="relative">
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              Contraseña
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Mínimo 6 caracteres, mayúscula y número"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] text-gray-600 hover:text-purple-600"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          {/* Botón */}
          <Button
            type="submit"
            className="rounded-full bg-purple-600 hover:bg-purple-700 text-white w-full py-2 flex items-center justify-center gap-2 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Registrando...' : 'Registrarse'}
          </Button>
        </form>

        <div className="text-sm text-center text-gray-600">
          ¿Ya tienes una cuenta?{' '}
          <a href="/login" className="text-purple-600 hover:underline">
            Inicia sesión
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
