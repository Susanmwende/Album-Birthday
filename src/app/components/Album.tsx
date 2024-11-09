import { useEffect, useState } from "react";

const images = [
  { src: "/images/image1.jpg", caption: "Yeeeeeeeeeeeeey you have grown old" },
  { src: "/images/image2.jpeg", caption: "This world is so damn lucky to have you" },
  { src: "/images/image3.jpeg", caption: "See how cute you have grown" },
  { src: "/images/image4.jpeg", caption: "Image 4 Caption" },
  { src: "/images/image5.jpeg", caption: "Image 5 Caption" },
  { src: "/images/image6.jpg", caption: "Image 6 Caption" },
  { src: "/images/image7.jpg", caption: "Image 7 Caption" },
  { src: "/images/image8.jpg", caption: "Image 8 Caption" },
  { src: "/images/image9.jpg", caption: "Image 9 Caption" },
  { src: "/images/image10.jpg", caption: "Image 10 Caption" }
];

const Album = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Transition every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="album-container flex flex-col items-center justify-center h-screen">
      <div className="image-card-container show block text-center"> {/* Use block for stacking */}
        <div className="image-card mb-4"> {/* Added margin-bottom for spacing */}
          <img
            src={images[currentImageIndex].src}
            alt={`Image ${currentImageIndex + 1}`}
            className="w-full h-auto object-cover rounded-lg" // Ensures image is responsive
          />
        </div>

        <div className="image-card-text">
          <div className="text-frame">
            <h3 className="text-lg sm:text-lg md:text-2xl lg:text-2xl font-bold text-gray-800"> {/* Ensures caption is block-level */}
              {images[currentImageIndex].caption}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
