
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const AuthToggleButtons = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-purple-200 p-1 rounded-full flex gap-2">
        <Button
          onClick={() => {
            setIsLogin(true);
            navigate('/login');
          }}
          textColor={isLogin ? 'white' : 'black'}
          className={`w-32 py-2 rounded-full ${
            isLogin ? 'bg-gray-400' : 'bg-purple-200'
          } transition-colors duration-300`}
        >
          Log In
        </Button>

        <Button
          onClick={() => {
            setIsLogin(false);
            navigate('/signup');
          }}
          textColor={!isLogin ? 'white' : 'black'}
          className={`w-32 py-2 rounded-full ${
            !isLogin ? 'bg-gray-400' : 'bg-purple-200'
          } transition-colors duration-300`}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default AuthToggleButtons;
