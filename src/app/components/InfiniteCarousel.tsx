'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { slides } from '../data/testimoniesData'

export default function InfiniteCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [fade, setFade] = useState(true) 

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false) 
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
        setFade(true) 
      }, 500) 
    }, 10000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setFade(false) 
    setTimeout(() => {
      setCurrentSlide(index)
      setFade(true)
    }, 500)
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden">
        <div className="flex flex-col justify-center items-center relative h-full">
          <div
            className={`flex flex-col justify-center items-center transition-opacity duration-500 ${
              fade ? 'opacity-100' : 'opacity-0'
            }`} 
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="h-[150px] w-[150px] rounded-full object-cover"
              width={150}
              height={150}
            />
            <div className="flex flex-col justify-end p-4 text-white max-w-[100%]">
              <p className="text-[18px] italic text-center">{slides[currentSlide].description}</p>
              <h2 className="text-[18px] text-center font-bold mb-2 mt-8">{slides[currentSlide].title}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full focus:outline-none transition-colors duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
