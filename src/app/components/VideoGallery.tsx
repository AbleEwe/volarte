import React from 'react';

interface VideoGalleryProps {
  videoLinks: string[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videoLinks }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4 mb-12">
      {videoLinks.map((link, index) => {
        const videoId = link.split('v=')[1];
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;

        return (
          <div key={index} className="aspect-w-16 aspect-h-9">
            <iframe
              src={embedUrl}
              title={`YouTube video ${index + 1}`}
              allowFullScreen
              className="w-full min-h-[300px]"
            />
          </div>
        );
      })}
    </div>
  );
};

export default VideoGallery;
