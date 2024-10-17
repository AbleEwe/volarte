"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// Sample sponsor data - replace with your actual data
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
  const [isMounted, setIsMounted] = useState(false) // To handle hydration issues

  useEffect(() => {
    setIsMounted(true) 
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  if(!isMounted) return null;

  const displaySponsors = [...sponsors, ...sponsors, ...sponsors]

  return (
    <div 
      className="w-full overflow-hidden bg-gray-100 h-[70vh] flex  flex-col justify-center items-center"
      style={{ 
        backgroundImage: "url('/footer/footer.webp')", 
        backgroundAttachment: "fixed",
        backgroundPosition: "bottom", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover" 
      }}
    >
      <h1 className="text-[#FFFFFF] text-2xl md:text-5xl">NUESTROS PATROCINADORES</h1>
      <hr className="w-1/6 my-12 mx-auto border-[#FFFFFF]"/>
      <p className="m-0 text-[#FFFFFF] text-center text-xl md:text-2xl w-4/5 md:max-w-[60%]">Con nosotros el tiempo se pasa volando</p>
      <div className="w-full relative mt-16">
        <motion.div
          className="flex"
          animate={{
            x: `calc(-${100 * currentIndex}% / 5)`,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {displaySponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.id}-${index}`}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
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