import React from "react";


const products = [
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: 100, image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', price: 200, image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', price: 300, image: 'https://via.placeholder.com/200' },
    { id: 4, name: 'Producto 4', description: 'Descripción del producto 4', price: 400, image: 'https://via.placeholder.com/200' }
  ];

const EstructuraShop = () => {
  return (
    <div className="mt-20 mb-40 p-12">
      <h1 className="text-3xl font-bold text-center mb-20">Bienvenido a nuestra tienda</h1>

      {/* Grilla de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-lg font-semibold mt-2">Precio: ${product.price}</p>
              <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EstructuraShop