import React from 'react';
import { useNavigate } from 'react-router-dom';


function FrontPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Welcome');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-purple-100 ">
      <div
        onClick={handleClick}
        className="relative w-3/4 h-3/4 bg-black rounded-lg cursor-pointer"
      >
        <img
          src="/image/logo-white.png" 
          alt="Favorite place logo"
          className="absolute inset-0 w-full h-full object-contain"
          
        />
       
      </div>
    </div>
  );
}



export default FrontPage;

