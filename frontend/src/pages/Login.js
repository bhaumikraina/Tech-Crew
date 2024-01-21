import React from 'react';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', margin: '20px' }}>
      {/* Left side with clear background image */}
      <div
       style={{
        width: '50%', // or any other percentage or fixed value
        background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSArkE8ug_aNv82OfMlrzxTTzf0uxUKy39xLQ&usqp=CAU')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        marginRight: '20px',
        marginLeft: '20px',
      }}
      >
        {/* You can add content or components here */}
      </div>

      {/* Right side with the login form */}
      <form
         style={{
          width: '50%', // or any other percentage or fixed value
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className="login"
        onSubmit={handleSubmit}
      >
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Log In</h3>

        <label style={{ display: 'block', margin: '10px 0' }}>Email address:</label>
        <input
          type="email"
          style={{ width: '100%', padding: '10px', boxSizing: 'border-box', margin: '5px 0' }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label style={{ display: 'block', margin: '10px 0' }}>Password:</label>
        <input
          type="password"
          style={{ width: '100%', padding: '10px', boxSizing: 'border-box', margin: '5px 0' }}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Log in
        </button>
      </form>
    </div>
  );
}