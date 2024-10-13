import React, { useState } from 'react';

const TiltCard = ({ children }) => {
  const [rotateStyle, setRotateStyle] = useState('');
  

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 25;
    const rotateY = ((centerX - x) / centerX) * 25;
    const scale = 1.05;

    setRotateStyle(`scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setRotateStyle('scale(1) rotateX(0) rotateY(0)');
  };

  return (
    <div
      className="transition-transform duration-300"
      style={{ transform: rotateStyle }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default TiltCard;
