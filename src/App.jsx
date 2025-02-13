import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NAVBAR/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Faqs from './pages/Faqs';
import ShopCart from './pages/shopCart';
import ItemDetail from './pages/ItemDetail';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ Importa los estilos de Toastify

function App() {
    return (
        <Router>
            <Navbar logo="NestCodeStudio" />  

            <div className="">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/category/:categoryId" element={<Shop />} />  
                    <Route path="/item/:id" element={<ItemDetail />} />  
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faqs" element={<Faqs />} />
                    <Route path='/shopCart' element={<ShopCart />} />
                </Routes>
            </div>

            <Footer />

            {/* Agregar el ToastContainer aquí */}
            <ToastContainer position="top-right" autoClose={3000} />
        </Router>
    );
}

export default App;
