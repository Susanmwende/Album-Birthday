import { useEffect, useState, useRef } from "react";

const images = [
  { src: "/images/image1.jpg", caption: "Yeeey! You’ve grown old! 😂 But somehow, you’re still just as cute as ever. Happy Birthday, my forever-young love! Here’s to more years of being adorable and charming (and, okay, a little older) with me! 🥂💕" },
  { src: "/images/image2.jpeg", caption: "So, you’re officially older now… but let’s be honest, I’m still with the same goofy kid I fell for. Here’s to one more year of pretending to be grown-ups while really just being a pair of goofballs together. 🥳💕" },
  { src: "/images/image3.jpeg", caption: "Another trip around the sun, and you’re still one of the most creative and innovative people I know! Keep chasing your dreams, making things happen, and showing the world what you’re capable of. You’ve only just scratched the surface of what’s possible! 🌟🔥" },
  { src: "/images/image4.jpeg", caption: "We’ve shared so many good times together and I can’t wait to see what’s next! Happy birthday!" },
  { src: "/images/image5.jpeg", caption: "Few things in this world age really well: wine, cheese, whiskey… and quality antiques. (What did you think I was going to say? Happy birthday!)" },
  { src: "/images/image6.jpg", caption: "Another year older, but somehow you still have that same adorable babyface. I don’t know how you do it, but I’m glad you’re still my cute, ageless wonder. Here’s to you, to laughs, and to every reason you make me fall more in love with you each year. 💖" },
  { src: "/images/image7.jpg", caption: "Today is all about you—the wonderful person who fills my life with joy, love, and endless laughter. I feel so lucky to be by your side, celebrating not only today but every moment we create together. You inspire me with your kindness, strength, and warmth, and I can’t wait to make more memories with you. Here’s to you, my love—today and always. ❤️ " },
  { src: "/images/image8.jpg", caption: "Happy Birthday to my partner in crime, my goofball, and my best friend! 🎉 We’ve had more silly moments than I can count, and I wouldn’t trade them for anything. Here’s to many more years of ridiculous laughs, weird inside jokes, and adventures only we understand. Love you, you dork! 😂❤️" },
  { src: "/images/image9.jpg", caption: "Here’s to another year of breaking boundaries and making life your own adventure! You’ve got so many big ideas and dreams, and I can’t wait to see how you continue to reinvent yourself. Keep being you—innovative, inspiring, and totally amazing! 🌍💡" },
  { src: "/images/image10.jpeg", caption: "Every year, you become more incredible, but always remember that you have everything inside you to achieve greatness. Believe in yourself like I do, and keep striving for more. I'll always be here to support, love, and cheer you on. You’ve got this, and I’ve got you. Here’s to growth, love, and all the amazing things ahead! 💖🌱" }
];

const Album = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const audioRef = useRef(null); // Reference to the audio element

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Transition every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play(); // Automatically play the audio when the component is loaded
    }
  }, []); // Empty dependency array to only run this on mount

  return (
    <div className="album-container flex flex-col items-center justify-center h-screen max-h-screen overflow-y-visible relative">
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/audio/kygo.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      <div className="image-card-container show block text-center">
        <div className="image-card mb-4">
          <img
            src={images[currentImageIndex].src}
            alt={`Image ${currentImageIndex + 1}`}
            className="w-[300px] h-[300px] object-cover rounded-lg" // Fixed size for images
          />
        </div>

        <div className="image-card-text">
          <div className="text-frame">
            <h4 className="text-2xl sm:text-xl md:text-xl lg:text-2xl font-serif text-black font-bold">
              {images[currentImageIndex].caption}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
