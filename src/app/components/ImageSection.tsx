import Image from 'next/image';
import React from 'react';

interface ImageSectionProps {
  title: string;
  description: string | string[];
  image: string;
  reverseLayout?: boolean;
}

const ImageSection: React.FC<ImageSectionProps> = ({
  title,
  description,
  image,
  reverseLayout = false,
}) => {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row ${
        reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-stretch h-full`}
    >
      {/* Text container */}
      <div
        className={`w-full md:w-2/3 bg-transparent p-8 flex flex-col justify-center text-black ${
          reverseLayout ? 'md:pl-52 md:pr-14' : 'md:pr-52 md:pl-12'
        }`}
      >
        <h2
          className={`text-4xl font-bold text-[#28282B] ${
            reverseLayout ? 'text-right' : 'text-left'
          }`}
        >
          {title}
        </h2>
        <hr
          className={`w-1/4 my-6 border-[#333333] ${
            reverseLayout ? 'ml-auto' : 'mr-auto'
          }`}
        />
        {Array.isArray(description) ? (
          description.map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700 text-lg">
              {paragraph}
            </p>
          ))
        ) : (
          <p>{description}</p>
        )}
      </div>

      {/* Image container */}
      <div className="w-full md:w-1/3 bg-[#3399cc] flex justify-center items-center h-[500px] relative">
        <Image
          src={image}
          alt={title}
          className={`object-cover object-top h-4/5 w-full absolute md:top-1/2 md:transform md:-translate-y-1/2 ${
            reverseLayout
              ? 'md:right-[-30%] right-auto bottom-0'
              : 'md:left-[-30%] left-auto bottom-0'
          }`}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default ImageSection;
