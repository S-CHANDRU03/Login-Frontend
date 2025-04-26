import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const [username, setU] = useState('');
  const [password, setP] = useState('');
  const nav = useNavigate();

  // Pull the base URL from your .env
  const API = process.env.REACT_APP_API_URL;

  function signup() {
    axios
      .post(`${API}/signup`, { username, password })
      .then(() => {
        alert('Signed up! Now log in.');
        nav('/');
      })
      .catch(err => {
        alert(err.response?.data?.message || 'Signup failed');
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-green-100 to-blue-200">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Sign Up</h2>

        <input
          type="text"
          onChange={e => setU(e.target.value)}
          placeholder="Username"
          className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />

        <input
          type="password"
          onChange={e => setP(e.target.value)}
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />

        <button
          onClick={signup}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-semibold transition"
        >
          Create Account
        </button>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{' '}
          <Link to="/" className="text-green-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
