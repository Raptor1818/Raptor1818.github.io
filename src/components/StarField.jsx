import React, { useEffect, useRef } from 'react';

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lifetime = 0;
  }
}

const StarField = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;

    const generateStar = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * (canvas.height / 1.5),
      radius: Math.random() * 2,
      opacity: Math.random(),
      flickerSpeed: (Math.random() - 0.5) * 0.01,
      flickerThreshold: Math.random() * 0.2 + 0.8,
    });

    const drawStar = (star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();
    };

    const calculateStarCount = () => {
      if (window.innerWidth <= 600) {
        return 100;
      } else {
        return 200;
      }
    };

    let stars = Array.from({ length: calculateStarCount() }, generateStar);
    const points = [];

    const addPoint = (x, y) => {
      const point = new Point(x, y);
      points.push(point);
    };

    window.addEventListener('mousemove', (event) => {
      addPoint(event.pageX - container.offsetLeft, event.pageY - container.offsetTop);
    }, false);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render stars
      stars.forEach((star) => {
        drawStar(star);
        star.opacity += star.flickerSpeed;
        if (star.opacity > star.flickerThreshold || star.opacity < 0) {
          star.flickerSpeed = -star.flickerSpeed;
        }
      });

      // Render cursor trail
      const duration = (0.7 * (1 * 1000)) / 60;
      for (let i = 0; i < points.length; ++i) {
        const point = points[i];
        let lastPoint;

        if (points[i - 1] !== undefined) {
          lastPoint = points[i - 1];
        } else lastPoint = point;

        point.lifetime += 1;

        if (point.lifetime > duration) {
          points.shift();
        } else {
          const lifePercent = point.lifetime / duration;
          const spreadRate = 3 * (1 - lifePercent);

          ctx.lineJoin = 'round';
          ctx.lineWidth = spreadRate;
          ctx.strokeStyle = 'white';

          ctx.beginPath();

          ctx.moveTo(lastPoint.x, lastPoint.y);
          ctx.lineTo(point.x, point.y);

          ctx.stroke();
          ctx.closePath();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      stars = Array.from({ length: calculateStarCount() }, generateStar);
    };

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="star-field-container starfield-whitebar-fix" ref={containerRef}>
      <canvas ref={canvasRef} className="star-field"></canvas>
    </div>
  );
};

export default StarField;
