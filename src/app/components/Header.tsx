import React from 'react';

const Header: React.FC = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Volarte_tiny.webp')", backgroundAttachment: "fixed" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl md:text-5xl text-white font-bold mb-8">
        VUELOS EN PARAPENTE TAPALPA
        </h1>
        <h2 className="text-3xl md:text-4xl text-white font-bold mb-8">
        ¡Con nosotros el tiempo se pasa <span className='text-[#3399cc] md:text-5xl text.4xl'>VOLANDO!</span>
        </h2>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-2 bg-[#3399cc] text-white rounded-2xl hover:bg-[#2e8ab8] transition duration-300 hover:scale-105 font-montserrat font-semibold"
        >
          Reserva Ahora
        </a>
      </div>
    </div>
  );
};

export default Header;
