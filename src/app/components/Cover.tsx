"use client";
import { useEffect, useState } from 'react';

const Cover = ({ onCoverEnd }: { onCoverEnd: () => void }) => {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImages(true);
      onCoverEnd(); // Trigger album transition after cover animation
    }, 3000); // Adjust the duration for the cover animation

    return () => clearTimeout(timer);
  }, [onCoverEnd]);

  return (
    <div className="cover-container flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      <div className="stars absolute top-0 left-0 right-0 bottom-0 bg-cover opacity-60 z-0"></div>
      <h1 className="cover-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center animate-bounceInDown">
        Happy Birthday!
      </h1>
      <div className="birthday-icon text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-bounceIn">🎉</div>

      {/* Bubble images arranged in a grid with 3 columns */}
      <div className={`bubble-images ${showImages ? 'show' : ''} absolute top-1/3 sm:top-1/4 md:top-1/5 lg:top-1/6 flex flex-wrap justify-center gap-8 z-10`}>
        {['/images/image1.jpg', '/images/image2.jpeg', '/images/image3.jpeg', '/images/image4.jpeg', '/images/image5.jpeg', '/images/image6.jpg', '/images/image7.jpg', '/images/image8.jpg', '/images/image9.jpg', '/images/image10.jpg'].map((image, index) => (
          <div key={index} className="bubble-image w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex justify-center items-center rounded-full overflow-hidden opacity-0 animate-bubblePop">
            <img src={image} alt={`image${index}`} className="w-full h-full object-cover rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cover;
