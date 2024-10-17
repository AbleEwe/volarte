"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!hasMounted) {
    return null; 
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        navBackground ? 'bg-black bg-opacity-50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Image
            src="/Logo_Volarte.webp" 
            alt="Logo"
            width={60}
            height={60}
          />
        </div>

        <ul className="flex space-x-8 text-white no-underline text-lg">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/testimonios" className="hover:text-gray-300">
              Testimonios
            </Link>
          </li>
          <li>
            <Link href="/galeria" className="hover:text-gray-300">
              Galería
            </Link>
          </li>
          <li>
            <Link href="/preguntas-frecuentes" className="hover:text-gray-300">
              Preguntas frecuentes
            </Link>
          </li>
          <li>
            <Link href="/nosotros" className="hover:text-gray-300">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/despegues" className="hover:text-gray-300">
              Despegues
            </Link>
          </li>
          <li>
            <Link href="/reservaciones" className="hover:text-gray-300">
              Reservaciones
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;