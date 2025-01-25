import React from "react";
import { useParams } from "react-router-dom";
import products from "../components/products";

const ItemDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-gray-600">Producto no encontrado.</p>;
  }

  return (
    <div className="mt-20 mb-40 p-12 text-center">
      <h1 className="text-3xl font-bold mb-5">{product.name}</h1>
      <img src={product.image} alt={product.name} className="mx-auto w-80 h-80 object-cover rounded-lg shadow-md" />
      <p className="text-gray-600 mt-4">{product.description}</p>
      <p className="text-lg font-semibold mt-2">Precio: ${product.price}</p>
    </div>
  );
};

export default ItemDetail;
