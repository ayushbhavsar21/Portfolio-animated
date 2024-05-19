
import React, { useState, useEffect } from 'react';

const TextCarousel = ({ texts, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className="w-full flex justify-center items-center ">
      <h2 className=" ">{texts[currentIndex]}</h2>
    </div>
  );
};

export default TextCarousel;