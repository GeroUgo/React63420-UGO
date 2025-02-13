import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import EstructuraShop from '../components/ShopComponents/Shop';

const Shop = () => {
  const { categoryId } = useParams(); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [categoryId]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 text-lg font-semibold">Cargando productos...</p>
        </div>
      ) : (
        <EstructuraShop categoryId={categoryId} />
      )}
    </div>
  );
};

export default Shop;
