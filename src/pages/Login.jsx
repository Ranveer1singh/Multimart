import React, { useState } from 'react';

const LoginLogoutPage = () => {
  // State to track whether the user is logged in or not
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <h1>{isLoggedIn ? 'Welcome! You are logged in.' : 'Please log in.'}</h1>
      
      {isLoggedIn ? (
        // Display logout button if the user is logged in
        <button onClick={handleLogout}>Logout</button>
      ) : (
        // Display login button if the user is not logged in
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default LoginLogoutPage;
