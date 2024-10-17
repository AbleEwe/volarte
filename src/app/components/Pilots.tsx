import Image from 'next/image';
import React from 'react';
import Facebook from './Icons/Facebook';
import WhatsApp from './Icons/WhatsApp';
import Instagram from './Icons/Instagram';

interface Pilot {
  name: string;
  image: string;
  certifications: string[];
  description: string;
  socialLinks: {
    instagram?: string;
    whatsapp?: string;
    facebook?: string;
  };
}

interface PilotsProps {
  pilots: Pilot[];
}

const Pilots: React.FC<PilotsProps> = ({ pilots }) => {
  return (
    <section>
      {/* Title, HR, and Description Section */}
      <div className="text-center bg-[#3399cc] w-full py-20">
        <h1 className="text-[#FFFFFF] text-5xl">CONOCE AL EQUIPO</h1>
        <hr className="w-1/6 my-12 mx-auto border-gray-200" />
        <p className="m-0 text-[#FFFFFF] text-2xl max-w-[60%] mx-auto">
        Pilotos profesionales, especialistas y apasionados del vuelo libre, experiencia en vuelos tandem, vuelos largos, competencias y certificaciones internacionales.
        </p>
      </div>

      {/* Pilots Section with 4-Column Responsive Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-16 max-w-7xl mx-auto px-4">
        {pilots.map((pilot, index) => (
        <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md flex flex-col items-center h-full" key={index}>
            <Image src={pilot.image} alt={pilot.name} className="w-[150px] h-[150px] mb-4 rounded-full object-cover hover:scale-105 transform transition-transform duration-300" width={150} height={150}/>
            <h2 className="text-2xl font-bold text-[#28282B] mb-4 text-center">{pilot.name}</h2>
            <h3 className='text-lg text-[#343434] m-0 font-semibold'>Certificados</h3>
            <ul className="text-lg text-[#747474] my-3 list-disc list-inside text-left w-full">
                {pilot.certifications.map((cert, certIndex) => (
                    <li key={certIndex}>{cert}</li>
                ))}
                </ul>
            <p className="text-[#333333] mb-4">{pilot.description}</p>
            <div className="flex-grow"></div>            
            <div className="flex mt-4 space-x-3">
                {pilot.socialLinks.instagram && (
                <a
                    href={pilot.socialLinks.instagram}
                    className="text-[#28282B] hover:scale-110 transition-transform duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Instagram color="#333333" width="48" height="48" />
                </a>
                )}
                {pilot.socialLinks.whatsapp && (
                <a
                    href={pilot.socialLinks.whatsapp}
                    className="text-[#28282B] hover:scale-110 transition-transform duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <WhatsApp color="#333333" width="48" height="48" />
                </a>
                )}
                {pilot.socialLinks.facebook && (
                <a
                    href={pilot.socialLinks.facebook}
                    className="text-[#28282B] hover:scale-110 transition-transform duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Facebook color="#333333" width="48" height="48" />
                </a>
                )}
            </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Pilots;
