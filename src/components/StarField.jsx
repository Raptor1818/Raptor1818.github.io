import React, { useEffect, useRef } from 'react';

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const generateStar = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * (canvas.height / 1.5),
      radius: Math.random() * 2,
      opacity: Math.random(),
      flickerSpeed: (Math.random() - 0.5) * 0.01, // Vary the flicker speed
      flickerThreshold: Math.random() * 0.2 + 0.8, // Vary the flicker threshold
    });

    const drawStar = (star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();
    };

    const calculateStarCount = () => {
      // Adjust star density based on screen width
      if (window.innerWidth <= 600) {
        return 100;
      } else {
        return 200;
      }
    };

    let stars = Array.from({ length: calculateStarCount() }, generateStar);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        drawStar(star);

        // Apply the flicker effect
        star.opacity += star.flickerSpeed;
        if (star.opacity > star.flickerThreshold || star.opacity < 0) {
          star.flickerSpeed = -star.flickerSpeed;
        }
      });

      requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
      stars = Array.from({ length: calculateStarCount() }, generateStar);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

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
