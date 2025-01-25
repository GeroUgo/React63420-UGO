import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../products";

const Shop = () => {
  const { categoryId } = useParams();

  // Obtener todas las categorías válidas
  const validCategories = products.map(p => p.category);

  const filteredProducts = categoryId
    ? products.filter(p => p.category.trim().toLowerCase() === categoryId.trim().toLowerCase())
    : products;


  return (
    <div className="mt-20 mb-40 p-12">
      <h1 className="text-3xl font-bold text-center mb-20">Bienvenido a nuestra tienda</h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(({ id, price, description, name, image }) => (
            <div key={id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={image} alt={name || "Imagen del producto"} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
                <p className="text-lg font-semibold mt-2">Precio: ${price}</p>

                <Link to={`/item/${id}`}>
                  <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                    Ver Detalle
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No hay productos en esta categoría.</p>
      )}
    </div>
  );
};

export default Shop;
