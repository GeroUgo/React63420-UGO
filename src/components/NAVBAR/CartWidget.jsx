import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 

const CartWidget = () => {
  const cartCount = 3; 

  return (
    <div className="relative">
      <FaShoppingCart className="text-white text-2xl" />
      <span className="absolute top-[-5px] right-[-10px] bg-red-500 text-white rounded-full text-xs px-2 py-1">
        {cartCount}
      </span>
    </div>
  );
};

export default CartWidget;
