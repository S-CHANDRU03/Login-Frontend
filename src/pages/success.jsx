import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-green-100 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center animate-fade-in">
        <div className="text-5xl mb-4 animate-party">🎉</div>
        <h1 className="text-3xl font-bold text-green-600 mb-2">Login Successful!</h1>
        <p className="text-gray-700 mb-6">Welcome! You have successfully logged in.</p>
        <Link to="/" className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition">
          Back to Login
        </Link>
      </div>
    </div>
  );
}

export default Success;
