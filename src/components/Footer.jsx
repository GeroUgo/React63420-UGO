import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
        
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-gray-400">Acerca de</a></li>
              <li><a href="#shop" className="hover:text-gray-400">Tienda</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contacto</a></li>
              <li><a href="#privacy" className="hover:text-gray-400">Política de Privacidad</a></li>
            </ul>
          </div>
          

          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul>
              <li className="mb-2">
                <span className="block">Email:</span>
                <a href="mailto:info@nestcodestudio.com" className="hover:text-gray-400">info@nestcodestudio.com</a>
              </li>
              <li className="mb-2">
                <span className="block">Teléfono:</span>
                <a href="tel:+123456789" className="hover:text-gray-400">+123 456 789</a>
              </li>
            </ul>
          </div>
          

          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4 text-xl">
              <a href="https://facebook.com" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          

          <div>
            <h3 className="text-xl font-semibold mb-4">Suscríbete a nuestro boletín</h3>
            <form>
              <input
                type="email"
                placeholder="Ingresa tu correo"
                className="p-2 rounded-l-md w-full mb-4 text-gray-800"
              />
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-r-md w-full sm:w-auto">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>{new Date().getFullYear()} NestCodeStudio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
