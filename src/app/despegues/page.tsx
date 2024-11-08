import React from 'react'
import Banner from '../components/Banner'
import { CountUp } from '../components/CountUp'

const Page = () => {
  return (
    <div>
      <Banner
        image="/gallery/7.webp"
        title='¿DÓNDE VOLAMOS?'
      />
      <div className="flex flex-col px-14 mt-16">
        {/* Map Container */}
        <h1 className="text-[#3596BF] text-6xl text-center">Tapalpa</h1>
        <p className='text-center text-[#747474] my-6'>Tapalpa es maravilloso; un pueblo mágico con una energía única. Se encuentra aproximadamente a 130 km al suroeste de Guadalajara.</p>
        <div className="w-full h-96">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps?ll=19.942322,-103.654617&z=13&t=h&hl=en&gl=MX&mapclient=embed&cid=781045385041263261"
            allowFullScreen
            loading="lazy"
            title="Paragliding Takeoff Location"
          ></iframe>
        </div>

        <section className="w-full flex flex-col md:flex-row mt-8 items-center md:items-start gap-8 md:gap-0">
          <div className="w-1/2 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-[#3399cc]">Información sobre el despegue</h2>
            <ul className="list-disc space-y-2">
              <li><span className="font-semibold">Tipo de despegue:</span> Ladera</li>
              <li><span className="font-semibold">Altura:</span> 2,200 msnm</li>
              <li><span className="font-semibold">Altura sobre el aterrizaje:</span> 850 m</li>
              <li><span className="font-semibold">Viento recomendado para despegue:</span> Noreste, Este, Sureste</li>
              <li><span className="font-semibold">Distancia al piano oficial:</span> 4.3 km</li>
              <li><span className="font-semibold">Coordenadas Despegue:</span> N 19° 56′ 31.76” O 103° 39′ 14.16″</li>
              <li><span className="font-semibold">Temporada recomendada:</span> Octubre – Junio</li>
              <li><span className="font-semibold">Nivel Parapente:</span> Principiantes</li>
              <li><span className="font-semibold">Nivel Ala Delta:</span> Principiantes</li>
              <li><span className="font-semibold">Cuota de despegue:</span> $150 pesos</li>
            </ul>
          </div>

          <div className="w-1/2 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-[#3399cc]">Aterrizaje Oficial</h2>
            <ul className="list-disc space-y-2">
              <li><span className="font-semibold">Nombre:</span> El Arbolito</li>
              <li><span className="font-semibold">Altura sobre el nivel del mar:</span> 1,350 m</li>
              <li><span className="font-semibold">Coordenadas Aterrizaje:</span> N 19° 57′ 21.18″ – O 103° 36′ 53.42″</li>
            </ul>
          </div>
        </section>

        <section className="flex py-24 bg-[#3399cc] mt-20 space-y-4 justify-between text-white -mx-14 px-14">
          <div className="flex flex-col items-center justify-center gap-2">
            <CountUp endValue={97134} duration={1} />
            <span className='text-2xl font-open_sans'>Horas de vuelo</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <CountUp endValue={687} duration={1} />
            <span className='text-2xl font-open_sans'>Pájaros vistos</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <CountUp endValue={24902} duration={1} />
            <span className='text-2xl font-open_sans'>Kilometros recorridos</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <CountUp endValue={172356} duration={1} />
            <span className='text-2xl font-open_sans'>Sonrisas</span>
          </div>
        </section>

        <section className='flex flex-col items-center my-20'>
          <h1 className="text-[#3596BF] text-6xl">Ligas de interés</h1>
          <hr className="w-1/6 my-12 mx-auto border-[#333333]"/>

          <div className="w-full flex flex-col md:flex-row mt-8 items-center md:items-start gap-8 md:gap-0">
            <div className="w-1/2 flex flex-col items-center">
              <h2 className="text-xl font-bold mb-4">Tapalpa</h2>
              <a className='text-[#3399cc] font-open_sans' target='_blank' href='www.jalisco.gob.mx/es/jalisco/municipios/tapalpa'>www.jalisco.gob.mx/es/jalisco/municipios/tapalpa</a>
              <a className='text-[#3399cc] font-open_sans' target='_blank' href='www.mexicodesconocido.com.mx/cosas-que-hacer-en-tapalpa.html'>www.mexicodesconocido.com.mx/cosas-que-hacer-en-tapalpa.html</a>
            </div>

            <div className="w-1/2 flex flex-col items-center">
              <h2 className="text-xl font-bold mb-4">Vuelo Libre Jalisco</h2>
              <a className='text-[#3399cc] font-open_sans' target='_blank' href='www.vuelolibrejalisco.com'>www.vuelolibrejalisco.com</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Page
