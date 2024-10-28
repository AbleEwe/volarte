import React from 'react'
import Banner from '../components/Banner'

const page = () => {
  return (
    <div>
      <Banner
        image="/gallery/7.webp"
        title='¿DÓNDE VOLAMOS?'
        description='Volamos en Tapalpa'
      />
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 px-14 my-16">
        {/* Map Container */}
        <div className="w-full lg:w-1/2 h-96">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps?ll=19.942322,-103.654617&z=13&t=h&hl=en&gl=MX&mapclient=embed&cid=781045385041263261"
            allowFullScreen
            loading="lazy"
            title="Paragliding Takeoff Location"
          ></iframe>
        </div>

        {/* Place Information */}
        <div className="w-full lg:w-1/2 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Información sobre el despegue</h2>
          <p><span className="font-semibold">Tipo de despegue:</span> Ladera</p>
          <p><span className="font-semibold">Altura:</span> 2,200 msnm</p>
          <p><span className="font-semibold">Altura sobre el aterrizaje:</span> 850 m</p>
          <p><span className="font-semibold">Viento recomendado para despegue:</span> Noreste, Este, Sureste</p>
          <p><span className="font-semibold">Distancia al piano oficial:</span> 4.3 km</p>
          <p><span className="font-semibold">Coordenadas Despegue:</span> N 19° 56′ 31.76” O 103° 39′ 14.16″</p>
          <p><span className="font-semibold">Temporada recomendada:</span> Octubre – Junio</p>
          <p><span className="font-semibold">Nivel Parapente:</span> Principiantes</p>
          <p><span className="font-semibold">Nivel Ala Delta:</span> Principiantes</p>
          <p><span className="font-semibold">Cuota de despegue:</span> $150 pesos</p>

          <h3 className="text-xl font-bold mt-6">Aterrizaje Oficial</h3>
          <p><span className="font-semibold">Nombre:</span> El Arbolito</p>
          <p><span className="font-semibold">Altura sobre el nivel del mar:</span> 1,350 m</p>
          <p><span className="font-semibold">Coordenadas Aterrizaje:</span> N 19° 57′ 21.18″ – O 103° 36′ 53.42″</p>
        </div>
      </div>
    </div>
  )
}

export default page
