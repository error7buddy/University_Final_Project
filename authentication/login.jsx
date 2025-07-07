import React, { useState } from 'react';
import Navbar from '../src/Header/Navbar';
import Footer from '../src/Footer/Footer';
import { Link } from 'react-router-dom';


export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      alert(`Signing up with:\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);
    } else {
      alert(`Logging in with:\nEmail: ${email}\nPassword: ${password}`);
    }
  };

  return (
    
    <div>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md space-y-4"
      >
                 <Link
                  to="/Home"
                  style={{
                    fontFamily: 'Luckiest Guy, cursive',
                    marginRight: '1rem',
                    color: 'red',
                    fontSize: '40px',
                    textAlign: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    padding: '0px',
                    marginBottom: '0px',
                  }}
                >
                  H&R
                </Link>
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {isSignUp ? 'Sign Up' : 'Login'}
        </h2>

        {isSignUp && (
          <div>
            <label className="block text-sm text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your name"
            />
          </div>
        )}

        <div>
          <label className="block text-sm text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-200"
        >
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>

        <p className="text-sm text-center text-gray-600">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          <span
            onClick={() => setIsSignUp(!isSignUp)}
            className="ml-1 text-red-500 font-semibold cursor-pointer hover:underline"
          >
            {isSignUp ? 'Login' : 'Sign Up'}
          </span>
        </p>
      </form>
    </div>
    <Footer />
    </div>
  );
}
