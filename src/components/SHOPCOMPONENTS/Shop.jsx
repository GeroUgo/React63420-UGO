import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemListContainer from "../ItemListContainer";

const Shop = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    let q = categoryId
      ? query(collection(db, "items"), where("category", "==", categoryId))
      : collection(db, "items");

    getDocs(q)
      .then((snapshot) => {
        if (snapshot.empty) {
          setProducts([]);
        } else {
          const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setProducts(items);
        }
      })
      .catch((error) => {
        console.error("Error obteniendo productos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="mb-40 p-12">
      <h1 className="text-3xl font-bold text-center mb-20">
        <ItemListContainer greeting={"Bienvenido a nuestra tienda"} />
      </h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="ml-4 text-gray-600 text-lg font-semibold">Cargando productos...</p>
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map(({ id, price, description, name, image, stock }) => (
            <div key={id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={image} alt={name || "Imagen del producto"} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
                <p className="text-lg font-semibold mt-2">Precio: ${price}</p>
                <div className="flex w-full mt-4 gap-2 justify-center">
                  <Link to={`/item/${id}`} className="w-[50%]">
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                      Ver Detalle
                    </button>
                  </Link>
                </div>
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
