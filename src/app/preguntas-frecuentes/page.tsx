import React from 'react'
import Banner from '../components/Banner'
import FAQAccordion from '../components/FAQcomponent'
import { Form } from '../components/Form'

const Page = () => {
  return (
    <div>
      <Banner
        image="/frequentlyquestions.webp"
        title='PREGUNTAS MÁS FRECUENTES'
        description='¿Alguna duda? Envíenos un mensaje y le responderemos a la brevedad posible.'
      />
      <h1 className='text-[#3596BF] text-5xl my-16 text-center'>Preguntas frecuentes</h1>
      <FAQAccordion/>
      <Form/>
    </div>
  )
}

export default Page
