import React from 'react'
import Banner from '../components/Banner'
import Pilots from '../components/Pilots'
import { pilotsData } from "../data/PilotsData";

const page = () => {
  return (
    <div>
      <Banner
        image="/testimonies/testimoniesbg.webp"
        title='PILOTOS PROFESIONALES'
        description='Nuestro compromiso es brindar un Servicio de Calidad, Seguro y Divertido.'
      />
      <Pilots
        pilots={pilotsData}
      />
    </div>
  )
}

export default page
