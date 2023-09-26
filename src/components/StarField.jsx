import React, { useEffect, useRef } from 'react';

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Function to generate a random star
    const generateStar = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * (canvas.height / 3.5),
      radius: Math.random() * 2,
      opacity: Math.random(),
    });

    // Function to draw a star
    const drawStar = (star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();
    };

    // Initialize an array of stars
    const stars = Array.from({ length: 200 }, generateStar);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        drawStar(star);
        star.opacity += (Math.random() - 0.5) * 0.01; // Flicker effect
        if (star.opacity > 1) star.opacity = 1;
        if (star.opacity < 0) star.opacity = 0;
      });

      requestAnimationFrame(animate);
    };

    // Resize the canvas to match its parent container
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    // Initial setup
    resizeCanvas();
    animate();

    // Event listener to handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup when the component unmounts
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="star-field-container starfield-whitebar-fix">
      <canvas ref={canvasRef} className="star-field"></canvas>
    </div>
  );
};

export default StarField;
