
import './App.css';
import React, { useState } from 'react';
import Navbar  from './Component/Navbar'; 
import Home from './Component/Home';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      }
      return [...prevItems, product];
    });
  };
  
  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter(item => item.id !== id)
    );
  };
  
  return (
    <div>
      <Navbar cartItems={cartItems} removeFromCart={removeFromCart} />

      <Home addToCart={addToCart} />
    </div>
  );
};

export default App;