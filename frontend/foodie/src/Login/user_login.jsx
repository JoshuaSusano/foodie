import React, { useState } from 'react';

const User_login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example login validation (replace with your logic)
    if (username === '' || password === '') {
      setError('Please fill in all fields');
    } else if (username !== 'admin' || password !== '1234') {
      setError('Invalid username or password');
    } else {
      setError('');
      // Navigate to dashboard or perform login logic
      console.log('Logged in successfully');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="hidden md:flex w-2/6 h-[450px]">
        <img src= '#' alt="Building" className="w-full h-full object-cover rounded-l-lg" />
      </div>
      <div className="w-full md:w-2/5 flex flex-col items-center bg-white shadow-lg p-6 h-[450px] rounded-r-lg">
        <img src="#" alt="Logo" className="w-16 mb-3 mt-6" />
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Login Your Account</h2>

        {error && (
          <div className="w-full max-w-xs mb-4 p-2 rounded text-center bg-red-100 text-red-800">
            {error}
          </div>
        )}

        <form className="w-full max-w-xs" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-gray-700">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="flex justify-between items-center mb-2 text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" /> Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default User_login;
