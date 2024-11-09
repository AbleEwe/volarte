"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppBar } from './WhatsappBar';
import { usePathname } from 'next/navigation';

const NavBar: React.FC = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!hasMounted) {
    return null;
  }

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { href: "/", name: "Inicio" },
    { href: "/testimonios", name: "Testimonios" },
    { href: "/galeria", name: "Galería" },
    { href: "/preguntas-frecuentes", name: "Preguntas frecuentes" },
    { href: "/nosotros", name: "Nosotros" },
    { href: "/despegues", name: "Despegues" },
    { href: "/reservaciones", name: "Reservaciones" },
  ];

  const getLinkClass = (href: string) =>
    `h-full px-2 py-4 md:px-4 md:py-6 transition-colors duration-300 ${
      pathname === href ? 'bg-[#3399cc]' : 'hover:bg-[#3399cc]'
    } flex items-center justify-center cursor-pointer`;

  return (
    <nav className="fixed top-0 left-0 z-50 w-full font-open_sans">
      <WhatsAppBar />
      <div
        className={`w-full z-50 transition-colors duration-300 ${
          navBackground ? 'bg-black bg-opacity-60' : 'md:bg-transparent bg-black'
        }`}
      >
        <div
          className={`container mx-auto ${
            navBackground ? 'flex-row' : 'md:flex-col'
          } flex items-center justify-between px-6 transition-all duration-300 h-28 md:h-full`}
        >
          <div className={`${navBackground ? '' : 'w-full'}`}>
            <Link href="/">
              <Image
                src="/Logo_Volarte.webp"
                alt="Logo"
                width={60}
                height={60}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Hamburger Menu Icon */}
          <div
            className="md:hidden flex flex-col justify-center items-center cursor-pointer space-y-1 relative z-60"
            onClick={toggleMenu}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                menuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex text-white no-underline text-lg flex-wrap">
            {navLinks.map(({ href, name }) => (
              <li key={href} className="h-full">
                <Link href={href} className={getLinkClass(href)}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <ul
            className={`${
              menuOpen ? 'flex' : 'hidden'
            } md:hidden absolute top-[113px] left-0 w-full bg-black bg-opacity-80 text-white text-lg flex-col space-y-6 p-6 z-50`}
          >
            {navLinks.map(({ href, name }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={getLinkClass(href)}
                  onClick={toggleMenu}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
