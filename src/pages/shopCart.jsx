import React, { useState, useEffect } from "react";
import { errorAlert } from "../components/alerts";


const ShopCart = () => {
    // Estado para almacenar los productos del carrito
    const [carritoItems, setCarritoItems] = useState([]);
    const [cupon, setCupon] = useState("");
    const [descuento, setDescuento] = useState(0);

    // Recuperar el carrito del localStorage al cargar la página
    useEffect(() => {
        const recuperarLocal = () => {
            const carrito = localStorage.getItem("carrito");
            return carrito ? JSON.parse(carrito) : [];
        };
        setCarritoItems(recuperarLocal());
    }, []);

    // Eliminar un producto del carrito
    const eliminarProducto = (id) => {
        const nuevoCarrito = carritoItems.filter((item) => item.id !== id);
        setCarritoItems(nuevoCarrito);
        localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

        window.dispatchEvent(new Event("cartUpdated"));
    };

    // Calcular subtotal y total
    const subtotal = carritoItems.reduce((acc, item) => acc + item.price * item.cantidad, 0);
    const total = subtotal - descuento;

    // Aplicar cupón de descuento
    const aplicarCupon = () => {
        if (cupon === "SOULS10") {
            setDescuento(subtotal * 0.10); // 10% de descuento
        } else if (cupon === "SOULS20") {
            setDescuento(subtotal * 0.20); // 20% de descuento
        } else {
            setDescuento(0);
            errorAlert("Cupon invalido")
        }
    };

    return (
        <div className={` min-h-screen p-12 ${carritoItems.length === 0 ? 'min-h-screen flex flex-col items-center justify-center' : ''}`}>
            <h1 className="text-3xl font-bold text-center mb-10">Resumen de Carrito</h1>

            {carritoItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Sección de productos en el carrito */}
                    <div className="md:col-span-2">
                        {carritoItems.map(({ id, name, price, cantidad, image }) => (
                            <div key={id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-lg mb-4">
                                <img src={image} alt={name} className="w-24 h-24 object-cover rounded-lg" />
                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold">{name}</h2>
                                    <p className="text-gray-600">Cantidad: {cantidad}</p>
                                    <p className="text-lg font-bold">Total: ${price * cantidad}</p>
                                </div>
                                <button
                                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                                    onClick={() => eliminarProducto(id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Sección de resumen del pedido */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Resumen del Pedido</h2>
                        <p className="text-gray-700">Subtotal: <span className="font-bold">${subtotal.toFixed(2)}</span></p>
                        <p className="text-gray-700">Descuento: <span className="font-bold text-red-500">-${descuento.toFixed(2)}</span></p>
                        <p className="text-lg font-bold mt-2">Total a pagar: <span className="text-green-600">${total.toFixed(2)}</span></p>

                        {/* Aplicar cupon */}
                        <div className="mt-4">
                            <input
                                type="text"
                                placeholder="Código de cupón"
                                className="w-full p-2 border rounded-lg"
                                value={cupon}
                                onChange={(e) => setCupon(e.target.value)}
                            />
                            <button
                                className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                                onClick={aplicarCupon}
                            >
                                Aplicar Cupón
                            </button>
                        </div>

                        {/* Botón de finalizar compra */}
                        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
                            Finalizar Compra
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-600 text-lg ">Tu carrito está vacío.</p>
            )}
        </div>
    );
};

export default ShopCart;
