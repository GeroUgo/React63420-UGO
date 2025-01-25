import React from 'react';
import { useParams } from "react-router-dom";
import EstructuraShop from '../components/ShopComponents/Shop';

const Shop = () => {
  const { categoryId } = useParams(); 
  return (
    <div>
      <EstructuraShop categoryId={categoryId} />
    </div>
  );
};

export default Shop;
