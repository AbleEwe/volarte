import Banner from '@/app/components/Banner';
import { flightData } from '@/app/data/flightsData';
import Link from 'next/link';
import React from 'react';

export default async function Page({
  params,
}: {
  params: Promise<{ vuelo: string }>
}) {
  const slug = (await params).vuelo;
  const flight = flightData[slug as keyof typeof flightData];

  if (!flight) {
    return <div className="h-96 flex justify-center items-center">Vuelo no encontrado</div>;
  }

  return (
    <>
      <Banner
        image="/flights.webp"
        title={flight.name}
      />
      <div className="p-14 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 flex items-center">
          <img
            src={flight.image}
            alt={flight.name}
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4 font-open_sans">
          <h2 className="text-5xl font-semibold">{flight.name}</h2>
          <h3 className='text-3xl font-semibold text-[#3399cc]'>$ {flight.subtotal}</h3>
          <p className="text-xl font-semibold">{flight.duration}</p>
          <p className="text-lg">{flight.includesMedia ? "Incluye fotos y vídeos" : "No incluye fotos y videos"}</p>
          <p className="text-lg">*Incluye seguro en caso de accidentes</p>
          <p className="text-lg">
            {flight.description}
          </p>
          <p className="text-lg">
            <span className='font-bold'>Nota:</span> Se requiere anticipo del $500 pesos como apartado y el saldo se paga en efectivo el día del vuelo 
          </p>
          <div className="text-lg">
            <p>Subtotal: ${flight.subtotal}</p>
            <p>Anticipo: ${flight.anticipo}</p>
            <p>Restante: ${flight.restante}</p>
          </div>
          <p className="text-lg">
            El anticipo se paga via transferencia bancaria y el restante el día del vuelo lo puedes pagar en efectivo o transferencia
          </p>
          <p className="text-lg">
             Para reservar tu vuelo haz click en el botón de abajo para preguntar for fechas disponibles por whtasapp          
          </p>
          <div className="flex justify-end pt-4">
            <Link
                href={flight.whatsappLink}
                className="bg-[#3399cc] text-white py-3 px-4 rounded-2xl hover:bg-[#2e8ab8] transition duration-300 font-montserrat"
                target="_blank"
                rel="noopener noreferrer"
            >
                Reservar vuelo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}