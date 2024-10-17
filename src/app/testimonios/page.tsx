import React from 'react'
import Banner from '../components/Banner'
import Testimonies from '../components/Testimonies'

const page = () => {
  return (
    <div>
      <Banner
        image="/testimonies-clients.webp"
        title='CLIENTES FELICES'
        description='Es por esto que hacemos lo que hacemos'
      />
      <Testimonies/>
    </div>
  )
}

export default page
