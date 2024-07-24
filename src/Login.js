import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  const navigate=useNavigate()

  const handleSubmit = async (event) => {   
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8081/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({   
          email,password }),
      
    
        });


      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        // Handle successful login here (e.g., redirect to another page, store token, etc.)
        navigate("/dashboard")

      } else {
        const data = await response.json();
        console.log(data)
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Urban Bank</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">email or Access Card</label>
            <input
              type="text"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
            <div className="text-sm">
              <li className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your email or password?</li>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          
          {error && <p className="mt-2 text-center text-sm text-red-600">{error}</p>}
          
          <p className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?
            <li className="font-medium text-indigo-600 hover:text-indigo-500">Register</li>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
