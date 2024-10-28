import React from 'react'
import Gallery from '../components/Gallery'
import Banner from '../components/Banner';
import VideoGallery from '../components/VideoGallery';

const imagesData: string[] = Array.from({ length: 20 }, (_, index) => `/gallery/${index + 1}.webp`);


const videoLinks = [
  'https://www.youtube.com/watch?v=JJbsCBZCg1M',
  'https://www.youtube.com/watch?v=rdqQr2zQtzM',
  'https://www.youtube.com/watch?v=BKOndReIdzA',
  'https://www.youtube.com/watch?v=-dpHAmP_HqQ',
  'https://www.youtube.com/watch?v=Oos4ojutOMM',
  'https://www.youtube.com/watch?v=L62faWn-sa8',
  'https://www.youtube.com/watch?v=SiX2eGYJ2Kc',
  'https://www.youtube.com/watch?v=CjxkXNC31Z4',
  'https://www.youtube.com/watch?v=zoi_nqpJE3Y',
];

const page = () => {
  return (
    <div>
      <Banner
        image="/testimonies/testimoniesbg.webp"
        title='EXPERIENCIAS INOLVIDABLES'
        description='¡Con nosotros el tiempo se pasa volando!'
      />
      <div className='px-6 md:px-14'>
        <h1 className="text-[#3596BF] text-5xl my-16 mb-12 px-4">Galería</h1>
        <Gallery images={imagesData}/>
        <VideoGallery videoLinks={videoLinks} />
      </div>
    </div>
  )
}

export default page
