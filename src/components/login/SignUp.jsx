import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password, email, photoUrl } = form;

    if (!username || !password || !email) {
      setError('Todos los campos son obligatorios');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('El correo no es válido');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/v1/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          email,
          password: btoa(password),
          photoUrl,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('¡Cuenta creada exitosamente!');
        setForm({ username: '', password: '', email: '', photoUrl: '' });
        navigate('/login');
      } else {
        setError(result.error || 'Error durante el registro.');
      }
    } catch (err) {
      setError('Error de red o del servidor.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-purple-700">Crear Cuenta</h2>

        {error && <div className="text-red-600 text-sm text-center">{error}</div>}
        {message && <div className="text-green-600 text-sm text-center">{message}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Nombre de Usuario</label>
            <input
              name="username"
              placeholder="Ej: evelyn_dev"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Correo Electrónico</label>
            <input
              name="email"
              type="email"
              placeholder="tucorreo@email.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">URL de Foto (opcional)</label>
            <input
              name="photoUrl"
              placeholder="https://..."
              value={form.photoUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div className="relative">
            <label className="block mb-1 text-sm font-semibold text-gray-700">Contraseña</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Mínimo 6 caracteres"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[35px] text-sm text-purple-600 hover:underline"
            >
              {showPassword ? 'Ocultar' : 'Ver'}
            </button>
          </div>

          <Button type="submit" text="Registrarse" />
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
