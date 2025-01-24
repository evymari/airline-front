import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from '../butons/Button';
import AuthButtons from '../butons/AuthButtons';
import { USER_LOGIN } from '../../config/Urls';
import UseApi from '../../hook/UseApi';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await fetch(USER_LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        const { token, user } = result.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userData', JSON.stringify(user));

        setMessage('User logged in successfully');
        navigate('/ViewPost');
      } else {
        setError(result.error || 'An error occurred during login.');
      }
    } catch (error) {
      setError('An unexpected error occurred.');
      console.error(error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-[url('/image/style.png')]">
      <div className="relative flex flex-col justify-start pb-40">

        <AuthButtons />
        <br></br>
        <div className="relative mb-1">
          {error && <p className="mb-4 text-center text-red-500">{error}</p>}
          {message && <p className="mb-4 text-center text-green-500">{message}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="relative mb-8">
              <label htmlFor="password" className="sr-only">Password</label>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            <div className="mb-4 text-right">
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                Forgot your password?
              </a>
            </div>
            <Button
              type="submit"
              className="font-semibold text-white transition-colors rounded-full bg-purple-600 hover:bg-purple-700"
            >
              Log in
            </Button>
            <div className="w-[334px] mb-4 text-center mt-6 text-sm text-gray-600">
              Don&apos;t have an account yet?{" "}
              <Link to="/SignUp" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
