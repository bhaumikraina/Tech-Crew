import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './context/FavContext';
import { AuthContextProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <CartProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CartProvider></AuthContextProvider>
);

