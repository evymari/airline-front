import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function AuthButtons() {

  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-purple-200 p-1 rounded-full flex">

        <button
          onClick={() => {
            setIsLogin(true);
            navigate('/login');
          }}
          className={`w-32 py-2 rounded-full ${isLogin ? 'bg-gray-400 text-white' : 'bg-purple-200 text-gray-600'
            } transition-colors duration-300`}
        >
          Log In
        </button>


        <button
          onClick={() => {
            setIsLogin(false);
            navigate('/signup');
          }}
          className={`w-32 py-2 rounded-full ${!isLogin ? 'bg-gray-400 text-white' : 'bg-purple-200 text-gray-600'
            } transition-colors duration-300`}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}