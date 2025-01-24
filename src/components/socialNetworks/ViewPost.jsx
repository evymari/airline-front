
import React from 'react';

function ViewPos() {
  return (
    <div className="bg-gray-100 h-screen">
      
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-xl font-semibold text-blue-600">Home</h1>
        <div className="flex items-center">
          <div className="text-gray-400 text-xl">🔔</div>
        </div>
      </div>

   
      <div className="bg-white p-4 my-4 rounded-lg shadow-md">
        <div className="flex items-center mb-3">
          <img
            className="w-10 h-10 rounded-full"
            src="/image/5.png"
            alt="profile"
          />
          <input
            type="text"
            placeholder="What's on your head?"
            className="ml-3 w-full bg-gray-100 rounded-full px-4 py-2 focus:outline-none"
          />
        </div>
        <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
          <button className="flex items-center space-x-1 text-purple-500">
            <span>🖼️</span>
            <span>Image</span>
          </button>
          <button className="flex items-center space-x-1 text-purple-500">
            <span>📹</span>
            <span>Video</span>
          </button>
          <button className="flex items-center space-x-1 text-purple-500">
            <span>📎</span>
            <span>Attach</span>
          </button>
        </div>
        
        <div className="flex space-x-2 mt-3">
          <img
            className="w-24 h-24 rounded-lg"
            src="/image/3.png"
            alt="Preview 1"
          />
          <img
            className="w-24 h-24 rounded-lg"
            src="/image/4.png"
            alt="Preview 2"
          />
          <img
            className="w-24 h-24 rounded-lg"
            src="/image/2.png"
            alt="Preview 3"
          />
        </div>
      </div>

      
      <div className="bg-white p-4 my-4 rounded-lg shadow-md">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full"
            src="/image/account3.png"
            alt="profile"
          />
          <div className="ml-3">
            <h2 className="font-semibold">Karim Saif</h2>
            <p className="text-sm text-gray-500">3h ago</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Pharetra Mauris id Aramus.
        </p>

        <img
          className="my-4 w-full rounded-lg"
          src="/image/photo.jpeg"
          alt="Post Image"
        />

        <div className="flex justify-between items-center text-gray-500">
          <div className="flex items-center space-x-2">
            <button>👍 1.3M</button>
            <button>❤️ 5.4K</button>
          </div>
          <button className="text-gray-400">💬 1.2K</button>
        </div>
      </div>

      
      <div className="bg-white p-4 my-4 rounded-lg shadow-md">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full"
            src="/image/2.png"
            alt="profile"
          />
          <div className="ml-3">
            <h2 className="font-semibold">Kriston Watson</h2>
            <p className="text-sm text-gray-500">5h ago</p>
          </div>
        </div>

        <img
          className="my-4 w-full rounded-lg"
          src="/image/3.png"
          alt="Post Image"
        />
      </div>

     
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md">
        <div className="flex justify-between text-gray-500">
          {/* <button className="text-purple-500"><span>🏠</span></button> */}
          {/* <button><span>🔍</span></button>
          <button><span>📸</span></button>
          <button><span>🔔</span></button>
          <button><span>👤</span></button> */}
        </div>
      </div>
    </div>
  );
}



  export default ViewPos;