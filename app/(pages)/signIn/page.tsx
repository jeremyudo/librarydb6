"use client"

//CHECK OUT NAVIGATE STUFF

import React, { useState } from 'react';
import './signIn.css'; // Make sure the CSS file is correctly linked
import Navbar from '@/components/Navbar';
import Link from 'next/link';


function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  //const history = useHistory();
  //const navigate = useNavigate();

  const handleSignIn = (e: any) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage('Please enter both username and password');
      return;
    }

  async function fetchdata(){
    try {
      const response = await fetch('/api/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      
      //history.push('/student')
      //navigate('/student');
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Failed to authenticate. Please check your username and password.');
    }

  }
    // Reset the form fields
    setUsername('');
    setPassword('');
  };

  
  return (
    <div className="signInWrapper">
      <h1 className="header">Student Login</h1>
      <div className="signInContainer">
        <h2 className="title">Sign In</h2>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <form onSubmit={handleSignIn} className="signInForm">
          <div className="inputGroup">
            <label className="inFormText" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="inputGroup">
            <label className="inFormText" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="signIn">Sign In</button>
          </form>
          <div>
          <Link href="/profsignIn" className="profSignIn">Professor Sign in</Link>
          <Link href="/libsignIn" className="libSignIn">Librarian Sign in</Link>
          <Link href="/adminsignIn" className="adminSignIn">Admin Sign in</Link>
          </div>
      </div>
    </div>
  );
}

export default SignInPage;