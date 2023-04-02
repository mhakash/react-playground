import React, { useEffect, useState } from "react";

const images = [
  "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const ImageCrossFade = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide, images.length]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <img
          key={index}
          className={`slide ${currentSlide === index ? "active" : ""}`}
          src={image}
          alt={`Image ${index + 1}`}
        />
      ))}
      <style jsx>{`
        .slideshow-container {
          position: relative;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transition: opacity 2s ease-in-out;
        }

        .slide.active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default function ImageCrossfadePage() {
  return (
    <div>
      ImageCrossfade
      <div className=" max-w-4xl">
        <ImageCrossFade images={images} />
      </div>
    </div>
  );
}
