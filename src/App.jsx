import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NAVBAR/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Faqs from './pages/Faqs';
import ItemDetail from './pages/ItemDetail';  // Agregar import

function App() {
    return (
        <Router>
            <Navbar logo="NestCodeStudio"/>  

            <div className="">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/category/:categoryId" element={<Shop />} />  
                    <Route path="/item/:id" element={<ItemDetail />} />  
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faqs" element={<Faqs/>} />
                </Routes>
            </div>

            <Footer />
        </Router>
    );
}

export default App;
