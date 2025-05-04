import React from 'react';

const Topbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-900 py-2 px-16 text-xs text-white">
        <img src="/logo.svg" alt="Logo" className="h-6" />
      
      <button className="bg-green-700 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-yellow-800 transition-colors">
        Buy Now
      </button>
      
    </div>
  );
};

export default Topbar;
