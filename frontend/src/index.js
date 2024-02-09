import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './context/FavContext';
import { AuthContextProvider } from './context/authContext';
import { ReviewProvider } from './context/reviewContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <CartProvider>
  <ReviewProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>

  </ReviewProvider>
  </CartProvider>
  </AuthContextProvider>
);

