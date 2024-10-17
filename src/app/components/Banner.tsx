import React from 'react';

interface BannerProps {
  image: string;
  title: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({ image, title, description }) => {
  return (
    <div
      className="w-full h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${image})`, 
        backgroundAttachment: "fixed",
        backgroundPosition: "bottom", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover" 
      }}
    >
      <div className="p-4 text-white text-center">
        <h1 className="text-6xl font-bold mb-6">{title}</h1>
        <p className="text-2xl">{description}</p>
      </div>
    </div>
  );
}

export default Banner;
