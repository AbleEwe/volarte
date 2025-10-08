import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Package {
  image: string;
  title: string;
  price: string;
  description: string;
  time: string;
  includesMedia: boolean;
  whatsappLink: string;
  slug: string;
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
      <h1 className="text-[#3596BF] text-5xl">¿Te atreves a volar?</h1>
      <hr className="w-1/6 my-12 mx-auto border-[#333333]"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-12 w-full">
        {packages.map((pkg, index) => (
          <Link 
            key={index} 
            href={`/reservaciones/${pkg.slug}`} 
            passHref
          >
            <div className="p-4 border text-center shadow-md flex flex-col justify-between relative bg-white rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-300 cursor-pointer">
              <div
                className="absolute top-0 left-0 w-full shadow-md"
                style={{
                  backgroundColor: getTitleColor(pkg.title),
                  transform: 'translateY(0)', 
                  height: '40px',
                  zIndex: 1,
                }}
              >
                <h2 className="text-2xl font-semibold text-white m-0 py-2">{pkg.title}</h2>
              </div>
              <div className="pt-10">
                <Image src={pkg.image} alt={pkg.title} className="w-full h-40 object-cover mb-4 rounded-lg" width={200} height={150}/>
                <p className="text-lg text-gray-700 mb-2">{pkg.price}</p>
                <p className="text-sm text-gray-500 mb-4">{pkg.description}</p>
                <p className="text-sm text-gray-600 mb-2">Duración: {pkg.time}</p>
                <p className="text-sm text-gray-600 mb-4">
                  {pkg.includesMedia ? 'Incluye fotos y video' : '*NO incluye fotos ni video'}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  *Seguro en caso de accidentes
                </p>
                <button className="bg-[#3399cc] text-white py-2 px-4 rounded-2xl hover:bg-[#2e8ab8] transition duration-300 font-montserrat">
                  Agendar vuelo
                </button>
              </div>
            </div>
          </Link>
        ))}
        <span className='text-sm text-[#747474] mb-10 mt-7'>*Fotos & video por separado: $300 pesos</span>
      </div>
    </section>
  );
};

export default FlightsPrices;
