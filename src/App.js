import React from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Cart />
      <h1 className="text-3xl font-bold mb-6">Product Store</h1>
      <ProductCard />
    </div>
  );
};

export default App;
