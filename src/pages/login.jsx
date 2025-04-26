import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [username, setU] = useState('');
  const [password, setP] = useState('');
  const [error, setError] = useState('');
  const nav = useNavigate();

  // Pull the base URL from your .env
  const API = process.env.REACT_APP_API_URL;

  function login() {
    axios
      .post(`${API}/login`, { username, password })
      .then(() => {
        nav('/success');
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          alert("You don't have an account. Please sign up first.");
          nav('/signup');
        } else if (err.response && err.response.status === 401) {
          setError('Wrong password');
          nav('/fail');
        } else {
          setError('Something went wrong');
        }
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Login</h2>

        <input
          type="text"
          onChange={e => setU(e.target.value)}
          placeholder="Username"
          className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <input
          type="password"
          onChange={e => setP(e.target.value)}
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <button
          onClick={login}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-semibold transition"
        >
          Sign In
        </button>

        {error && (
          <h4 className="text-red-500 mt-4 text-center">{error}</h4>
        )}

        <p className="mt-6 text-center text-gray-600 text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;