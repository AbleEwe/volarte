import Image from 'next/image';
import Link from 'next/link';

export const WhatsAppBar: React.FC = () => {
  return (
    <div
      className="w-full bg-[#3399cc] text-white text-center py-2 z-50 transition-opacity duration-300 justify-center md:justify-normal flex"
    >
      <Link className="md:pl-16 flex items-center justify-center space-x-2" href="https://wa.link/1cq86c" target='_blank'>
        <Image src="/WhatsappLogo.webp" alt="WhatsApp" width={40} height={40} />
        <span>33-1076-2869</span>
      </Link>
    </div>
  );
};
