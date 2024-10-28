import React from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative group overflow-hidden"
          style={{ paddingBottom: '100%' }} // For a square aspect ratio
        >
          <img
            src={image}
            alt={`Gallery image ${index}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
