import React, { useState, useEffect } from 'react';

const logos = [
  { url: 'logo1.png', link: 'https://www.logo1.com' },
  { url: 'logo2.png', link: 'https://www.logo2.com' },
  { url: 'logo3.png', link: 'https://www.logo3.com' },
  { url: 'logo4.png', link: 'https://www.logo4.com' }
];

const LogoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % logos.length);
    }, 3000);
    setIntervalId(interval);
    return () => clearInterval(intervalId);
  }, [currentIndex, intervalId]);

  return (
    <div className="logo-slider" style={{ overflow: 'hidden', width: '200px', height: '200px', position:'relative' }}>
      {logos.map((logo, index) => (
        <a
          key={index}
          href={logo.link}
          className={`logo ${index === currentIndex ? 'visible' : 'hidden'}`}
          style={{
            width: '200px',
            height: '200px',
            position: 'absolute',
            top: '0',
            left: `${index * -200}px`,
            transform: `translateX(${currentIndex * 200}px)`,
            transition: 'transform 1s ease-in-out',
          }}
        >
          <img src={logo.url} alt={logo.link} width="200" height="200" />
        </a>
      ))}
    </div>
  );
};

export default LogoSlider;

