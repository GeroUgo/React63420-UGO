import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const [cartCount, setCartCount] = useState(0);

  // Función para actualizar el contador del carrito
  const actualizarContador = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    setCartCount(totalItems);
  };

  useEffect(() => {
    actualizarContador(); // Inicializa el contador

    // Escuchar eventos personalizados y cambios en localStorage
    window.addEventListener("cartUpdated", actualizarContador);
    window.addEventListener("storage", actualizarContador);

    return () => {
      window.removeEventListener("cartUpdated", actualizarContador);
      window.removeEventListener("storage", actualizarContador);
    };
  }, []);

  return (
    <div className="relative hover:opacity-90">
      <Link to="/shopCart">
        <FaShoppingCart className="text-white text-2xl transition" />
        {cartCount > 0 && (
          <span className="absolute top-[-5px] right-[-10px] bg-red-500 text-white rounded-full text-xs px-[4px] py-[3px]">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;
