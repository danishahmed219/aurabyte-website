import React from 'react';

const App = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="w-full bg-blue-500 py-4 fixed top-0">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl font-bold text-center">AURABYTE</h1>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-grow flex items-center justify-center">
        <h2 className="text-gray-800 text-3xl font-bold">Welcome to Aurabyte!</h2>
      </div>
    </div>
  );
};

export default App;
