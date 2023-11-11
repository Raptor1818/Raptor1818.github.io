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

    // Set canvas dimensions
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    const generateStar = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
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

    let stars = Array.from({ length: 250 }, generateStar);
    const points = [];

    const addPoint = (x, y) => {
      const point = new Point(x, y);
      points.push(point);
    };

    const mouseMoveHandler = (event) => {
      addPoint(event.pageX - container.offsetLeft, event.pageY - container.offsetTop);
    };
    window.addEventListener('mousemove', mouseMoveHandler, false);

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
        let lastPoint = points[i - 1] || point;

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

    const resizeCanvas = () => {
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;

      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;

      stars.forEach(star => {
        star.x *= canvas.width / oldWidth;
        star.y *= canvas.height / oldHeight;
      });
    };

    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <div ref={containerRef} className="star-field-container starfield-whitebar-fix">
      <canvas ref={canvasRef} className="star-field"></canvas>
    </div>
  );
};

export default StarField;