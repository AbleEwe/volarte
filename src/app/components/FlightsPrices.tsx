import Image from 'next/image';
import React from 'react';

interface Package {
  image: string;
  title: string;
  price: string;
  description: string;
  time: string;
  includesMedia: boolean;
  whatsappLink: string;
}

interface FlightsPricesProps {
  packages: Package[];
}

const getTitleColor = (title: string) => {
  switch (title) {
    case 'Vuelo Premium':
      return '#3399cc'; 
    case 'Vuelo Clásico':
      return '#ff3333'; 
    case 'Vuelo Parvada':
      return '#FFA500'; 
    case 'Vuelo Cross':
      return '#009966'; 
    default:
      return '#000000'; 
  }
};

const FlightsPrices: React.FC<FlightsPricesProps> = ({ packages }) => {
  return (
    <section className="flex flex-col justify-center items-center mt-20 text-center px-14">
      <h1 className="text-[#3596BF] text-5xl">VUELOS & COSTOS</h1>
      <hr className="w-1/6 my-12 mx-auto border-[#333333]"/>
      <p className="m-0 text-[#333333] text-2xl max-w-[60%]">Dependiendo de las condiciones metereológicas, podemos volar desde 15 hasta 45 minutos.</p>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-12 w-full`}>
        {packages.map((pkg, index) => (
          <div key={index} className="p-4 border text-center shadow-md flex flex-col justify-between">
            <Image src={pkg.image} alt={pkg.title} className="w-full h-40 object-cover mb-4 rounded-lg" width={200} height={150}/>
            <h2
              className="text-2xl font-semibold mb-2"
              style={{ color: getTitleColor(pkg.title) }}
            >
              {pkg.title}
            </h2>
            <p className="text-lg text-gray-700 mb-2">{pkg.price}</p>
            <p className="text-sm text-gray-500 mb-4">{pkg.description}</p>
            <p className="text-sm text-gray-600 mb-2">Duration: {pkg.time}</p>
            <p className="text-sm text-gray-600 mb-4">
              {pkg.includesMedia ? 'Incluye fotos y video' : '*NO incluye fotos ni video'}
            </p>
            <a
              href={pkg.whatsappLink}
              className="bg-[#3399cc] text-white py-2 px-4 rounded-2xl hover:bg-[#2e8ab8] transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserva ahora
            </a>
          </div>
        ))}
        <span className='text-sm text-[#747474] mb-10 mt-7'>*Fotos & video por separado: $300 pesos</span>
      </div>
    </section>
  );
};

export default FlightsPrices;