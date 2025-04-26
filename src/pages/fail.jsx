import React from 'react';
import { Link } from 'react-router-dom';

function Fail() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-red-100 to-pink-100">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center animate-fade-in">
        <div className="text-5xl mb-4 animate-sad-bounce">😢</div>
        <h1 className="text-3xl font-bold text-red-600 mb-2">Login Failed!</h1>
        <p className="text-gray-700 mb-6">Oops! Your username or password is incorrect.</p>
        <Link to="/" className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded transition">
          Try Again
        </Link>
      </div>
    </div>
  );
}

export default Fail;
