import React from 'react';
import { useNavigate } from 'react-router-dom';

import FileUploader from './FileUploader';

// CreatePost.jsx
const CreatePost = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Home');
  };
  
  return (
    <div className="bg-purple-100 min-h-screen p-4 flex flex-col items-center min-h-screen">
  
      
            <div className="w-full max-w-xs p-8 mt-12 bg-white rounded-lg shadow-md ">
                <button
                    className="text-blue-500"
                    onClick={() => navigate('/ViewPost')}
                >
                    &larr; Back
                </button>
                
      <div className="bg-white rounded-xl p-4 shadow-lg">
        <div className="flex items-center mb-4">
          <img
            src="/image/account2.png"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <div className="ml-2">
            <h2 className="font-bold">Ardito Saputra</h2>
            <p className="text-sm text-gray-500">Location</p>
          </div>
        </div>

        <div >
          
          <FileUploader></FileUploader>
        </div>
        

        <textarea
          placeholder="Type something here..."
          className="w-full p-3 rounded-lg bg-gray-100 text-gray-600 mb-4"
        ></textarea>

        <button className="w-full p-3 rounded-lg bg-purple-600 text-white font-bold">
          Posting Now
        </button>
      </div>
      

    
    </div>
    </div>
  );
};

export default CreatePost;


