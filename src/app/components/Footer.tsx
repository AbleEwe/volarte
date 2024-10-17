// components/Footer.tsx
import React from 'react';
import SponsorsCarousel from './SponsorsCarousel';
import WhatsApp from './Icons/WhatsApp';
import Facebook from './Icons/Facebook';
import Instagram from './Icons/Instagram';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer>
      <SponsorsCarousel />

      <div className="bg-[#2e5378] text-white flex justify-between items-center p-12">
        <p className="text-[12px]">
          © VolArte Parapente GDL 2012 - 2024  |  Todos los derechos reservados  |  <Link className='hover:text-[#3399cc] transition-colors duration-300' href="/politica-privacidad"> Política de Privacidad </Link> 
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white hover:text-gray-400"
          >
            <Facebook/>
          </a>
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white hover:text-gray-400"
          >
            <WhatsApp />
          </a>
          <a
            href="https://www.paypal.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="PayPal"
            className="text-white hover:text-gray-400"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;