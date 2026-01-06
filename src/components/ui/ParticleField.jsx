import React, { useEffect, useRef } from 'react';

const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Reduced particle count for better performance
      const particleCount = Math.min(
        Math.floor((canvas.width * canvas.height) / 25000),
        60
      );

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          hue: Math.random() * 60 + 200 // Blue to purple range
        });
      }
    };

    const drawParticle = (particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`;
      ctx.fill();

      // Add glow
      ctx.shadowBlur = 10;
      ctx.shadowColor = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`;
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const updateParticles = () => {
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Slight opacity pulse
        particle.opacity += (Math.random() - 0.5) * 0.02;
        particle.opacity = Math.max(0.2, Math.min(0.8, particle.opacity));
      });
    };

    const animate = () => {
      // Use requestAnimationFrame throttling for smooth 60fps
      ctx.fillStyle = 'rgba(10, 15, 28, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(drawParticle);
      updateParticles();

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0.4
      }}
    />
  );
};

export default ParticleField;
