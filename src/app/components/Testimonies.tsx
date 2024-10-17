import React from 'react'
import InfiniteCarousel from './InfiniteCarousel'

const Testimonies = () => {
  return (
    <section className='px-14 h-[60vh] flex justify-center items-center'
        style={{ backgroundImage: "url('/testimonies/testimoniesbg.webp')", backgroundAttachment: "fixed" }}>
        <InfiniteCarousel/>
    </section>
  )
}

export default Testimonies
