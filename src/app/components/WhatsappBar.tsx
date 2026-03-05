import Image from 'next/image';
import Link from 'next/link';

export const WhatsAppBar: React.FC = () => {
  return (
    <div
      className="w-full bg-[#3399cc] text-white text-center py-2 z-50 transition-opacity duration-300 justify-center md:justify-normal flex"
    >
      <Link className="md:pl-16 flex items-center justify-center space-x-2" href="https://api.whatsapp.com/send?phone=5213310762869&text=Hola%20VolArte%20Parapente%20GDL%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20vuelos%20tandem%20%F0%9F%A6%85%20-%20%0Awww.volarteparapentegdl.com" target='_blank'>
        <Image src="/WhatsappLogo.webp" alt="WhatsApp" width={40} height={40} />
        <span>33-1076-2869</span>
      </Link>
    </div>
  );
};
