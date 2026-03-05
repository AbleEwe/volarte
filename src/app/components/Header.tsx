import React from 'react';

const Header: React.FC = () => {
  return (
    <div
      className="relative h-[70vh] md:h-screen bg-top flex items-center justify-center bg-[url('/Volarte_tiny.webp')] bg-cover mt-40 md:mt-0"
    >
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="relative z-10 flex flex-col items-center md:justify-center h-full text-center max-w-[80%] md:max-w-full">
        <h1 className="text-2xl md:text-5xl text-white mb-36 mt-8 md:mt-0 md:mb-8">
          Vuelos en Parapente en Tapalpa
        </h1>
        <h2 className="text-2xl md:text-4xl text-white mb-8">
          ¡Con nosotros el tiempo se pasa VOLANDO!
        </h2>
        <h3 className="text-lg md:text-xl text-white mb-8 max-w-2xl">
          *Somos los únicos en ofrecer un Seguro de Vuelo,
        </h3>
        <a
          href="https://api.whatsapp.com/send?phone=5213310762869&text=Hola%20VolArte%20Parapente%20GDL%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20vuelos%20tandem%20%F0%9F%A6%85%20-%20%0Awww.volarteparapentegdl.com"
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
