"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const WhatsAppBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full bg-[#3399cc] text-white text-center py-2 z-50 transition-opacity duration-300 justify-center md:justify-normal ${
        isVisible ? 'flex' : 'hidden'
      }`}
    >
      <Link className="md:pl-16 flex items-center justify-center space-x-2" href="https://wa.link/1cq86c" target='_blank'>
        <Image src="/WhatsappLogo.webp" alt="WhatsApp" width={40} height={40} />
        <span>33-3870-3525</span>
      </Link>
    </div>
  );
};