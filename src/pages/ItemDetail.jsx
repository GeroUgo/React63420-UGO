import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { CirclePlus, CircleMinus } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import { errorAlert } from "../components/alerts";

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [contador, setContador] = useState(1);
  const [loading, setLoading] = useState(true);

  // Obtener producto de Firestore
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const db = getFirestore();
      const productRef = doc(db, "items", id);
      const snapshot = await getDoc(productRef);

      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      } else {
        setProduct(null);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  // Funciones de suma y resta con validación
  const sumarContadorStock = () => {
    setContador((prev) => (prev < product.stock ? prev + 1 : prev));
  };

  const restarContadorStock = () => {
    setContador((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // Agregar producto al carrito en localStorage
  const agregarAlCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const productoEnCarrito = carrito.find((item) => item.id === product.id);

    const nuevaCantidadTotal = (productoEnCarrito?.cantidad || 0) + contador;

    if (nuevaCantidadTotal > product.stock) {
      errorAlert("No hay stock disponible");
      return;
    }

    const nuevoCarrito = productoEnCarrito
      ? carrito.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: nuevaCantidadTotal }
            : item
        )
      : [...carrito, { ...product, cantidad: contador }];

    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

    window.dispatchEvent(new Event("cartUpdated"));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[100vh]">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="ml-4 text-gray-600 text-lg font-semibold">
          Cargando productos...
        </p>
      </div>
    );
  }

  if (!product) {
    return <p className="text-center text-gray-600">Producto no encontrado.</p>;
  }

  return (
    <div className="mt-20 mb-40 p-12 text-center relative">
      <Link to="/shop">
        <button className="py-2 px-6 mb-10 bg-black text-white border rounded-lg hover:bg-white hover:text-black transition duration-300">
          Atrás
        </button>
      </Link>
      <h1 className="text-3xl font-bold mb-5">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="mx-auto w-80 h-80 object-cover rounded-lg shadow-md"
      />
      <p className="text-gray-600 mt-4">{product.description}</p>
      <p className="text-lg font-semibold mt-2">Precio: ${product.price}</p>
      <p className="text-sm text-gray-500">Stock disponible: {product.stock}</p>

      {/* Contador */}
      <div className="flex justify-center gap-2 items-center mt-2">
        <CircleMinus
          className="cursor-pointer hover:text-red-500 transition"
          onClick={restarContadorStock}
        />
        <p className="text-xl">{contador}</p>
        <CirclePlus
          className="cursor-pointer hover:text-green-500 transition"
          onClick={sumarContadorStock}
        />
      </div>

      <button
        className="mt-4 border border-black py-2 px-4 rounded-lg hover:bg-black hover:text-white transition duration-300"
        onClick={agregarAlCarrito}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetail;
