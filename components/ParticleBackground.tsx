import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    const particleCount = 60; 

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3, 
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5, 
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        // Bright Gold: 255, 215, 0
        const opacity = p.alpha + Math.sin(time + i) * 0.2; 
        ctx.fillStyle = `rgba(255, 215, 0, ${Math.max(0, Math.min(1, opacity))})`; 
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            // Gradient line for luxury feel
            const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            gradient.addColorStop(0, `rgba(255, 215, 0, 0)`);
            gradient.addColorStop(0.5, `rgba(255, 215, 0, ${0.2 * (1 - distance / 120)})`);
            gradient.addColorStop(1, `rgba(255, 215, 0, 0)`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;