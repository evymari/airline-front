import React from 'react';
import Button from '../butons/Button';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar'


function Welcome() {
  const handleClick = () => {
    
  };
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-100" onClick={handleClick}>
      <img
        src="/image/2.png"
        alt="Favorite place logo"
        className="mb-4 w-25 h-25"

      />
      <h1 className="text-4xl font-bold text-purple-600 mb-2">Favorite place</h1>
      <p className="text-gray-600 text-center mb-8">
        Welcome to <span className="text-purple-500 font-bold">Favorite place</span><br />
        Connecting people who like to know new places
      </p>
      

      <div className="flex flex-col items-center w-full">
        <Button className="w-[334px] mb-4 font-roboto bg-purple-600 " onClick={() => navigate('/login')}>Next</Button>
        
        <NavBar></NavBar>

      </div>

    </div>
  );
}

export default Welcome;