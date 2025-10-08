"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const sponsors = [
  { id: 1, logo: "/footer/advance.webp" },
  { id: 2, logo: "/footer/appi.webp" },
  { id: 3, logo: "/footer/gin.webp" },
  { id: 4, logo: "/footer/nova.webp" },
  { id: 5, logo: "/footer/ozone.webp" },
  { id: 6, logo: "/footer/ushpa.webp" },
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [visibleItems, setVisibleItems] = useState(1)

  useEffect(() => {
    setIsMounted(true) 
  }, [])

  // Handle responsive visible items count
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1280) setVisibleItems(5)
      else if (width >= 1024) setVisibleItems(4)
      else if (width >= 768) setVisibleItems(3)
      else if (width >= 640) setVisibleItems(2)
      else setVisibleItems(1)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  if(!isMounted) return null;

  // Create extended array for seamless looping
  const displaySponsors = [...sponsors, ...sponsors]

  // Get width class based on visible items
  const getWidthClass = () => {
    switch(visibleItems) {
      case 1: return 'w-full'
      case 2: return 'w-1/2'
      case 3: return 'w-1/3'
      case 4: return 'w-1/4'
      case 5: return 'w-1/5'
      default: return 'w-full'
    }
  }

  return (
    <div 
      className="w-full overflow-hidden bg-gray-100 h-[70vh] flex flex-col justify-center items-center"
      style={{ 
        backgroundImage: "url('/footer/footer.webp')", 
        backgroundAttachment: "fixed",
        backgroundPosition: "bottom", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover" 
      }}
    >
      <h1 className="text-[#FFFFFF] text-3xl md:text-5xl text-center mt-12">NUESTROS PATROCINADORES</h1>
      <hr className="w-1/6 my-12 mx-auto border-[#FFFFFF]"/>
      <p className="m-0 text-[#FFFFFF] text-center text-xl md:text-2xl w-4/5 md:max-w-[60%]">Con nosotros el tiempo se pasa volando</p>
      <div className="w-full relative mt-16 overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: `-${(currentIndex * 100) / visibleItems}%`,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {displaySponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.id}-${index}`}
              className={`flex-shrink-0 ${getWidthClass()} p-4`}
            >
              <div className="p-6 h-full flex flex-col items-center justify-center">
                <img
                  src={sponsor.logo}
                  alt={`Sponsor ${sponsor.id} logo`}
                  className="w-2/3 md:w-full h-auto object-contain mb-4"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}