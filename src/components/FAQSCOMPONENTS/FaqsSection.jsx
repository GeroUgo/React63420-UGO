import React, { useState } from 'react';

const faqs = [
  {
    question: '¿Cómo puedo realizar un pedido?',
    answer: 'Puedes realizar un pedido seleccionando los productos que desees y añadiéndolos al carrito. Luego, ve a la página del carrito y completa tu compra con los métodos de pago disponibles.'
  },
  {
    question: '¿Cuáles son los métodos de pago disponibles?',
    answer: 'Aceptamos pagos con tarjeta de crédito/débito, PayPal y transferencias bancarias.'
  },
  {
    question: '¿Puedo cancelar mi pedido?',
    answer: 'Una vez que el pedido ha sido procesado, no es posible cancelarlo. Sin embargo, si el pedido aún no ha sido enviado, puedes contactarnos para ver si es posible hacer una cancelación.'
  },
  {
    question: '¿En qué países realizan envíos?',
    answer: 'Realizamos envíos a varios países. Consulta nuestra página de envíos para ver la lista de países disponibles.'
  },
  {
    question: '¿Puedo devolver un producto?',
    answer: 'Sí, ofrecemos devoluciones dentro de los 30 días posteriores a la compra. Los productos deben estar en su estado original y sin uso.'
  }
];

const FaqsSection = () => {
  const [openIndex, setOpenIndex] = useState(null); 

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);  
  };

  return (
    <div className="flex flex-col items-center mb-40 mt-20 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
      
      <div className="space-y-4 w-2/3 max-w-4xl ">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <div
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center py-4 cursor-pointer"
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
            </div>
            
            {openIndex === index && (
              <div className="transition-all duration-300 ease-in-out pl-8 pb-4">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsSection;
