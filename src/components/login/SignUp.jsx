import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from '../butons/Button';
import AuthButtons from '../butons/AuthButtons';
import { USER_REGISTER } from '../../config/Urls';  // Importación de la URL de registro

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');  // Nuevo campo
  const [lastName, setLastName] = useState('');    // Nuevo campo
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    if (!firstName || !lastName || !username || !email || !password) {
      setError('Please fill out all fields.');
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    try {
      const response = await fetch(USER_REGISTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ first_name: firstName, last_name: lastName, username, email, password }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setMessage('Account created successfully!');
        setError('');
        setUsername('');
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        navigate('/Login'); 
      } else {
        setError(result.error || 'An error occurred during registration.');
      }
    } catch (error) {
      setError('An unexpected error occurred.');
      console.error(error);
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-[url('/image/style.png')]">
      <div className="relative flex flex-col justify-start pb-40 -mt-6">
        
        <AuthButtons />
        <br></br>
        <div className="relative mb-1">
          {error && <p className="mb-4 text-center text-red-500">{error}</p>}
          {message && <p className="mb-4 text-center text-green-500">{message}</p>}
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 border rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 border rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="relative mb-8">
              <input
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
            <Button
              type="submit"
              className="font-semibold text-white transition-colors rounded-full bg-purple-600 hover:bg-purple-700"
            >
              Sign up
            </Button>
            <div className="w-[334px] mb-4 text-center mt-6 text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/AccountStart" className="text-blue-600 hover:underline">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

