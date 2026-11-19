import React, { useRef, useEffect } from 'react';

const FLOATING_TOKENS = [
  '∇_θ L(θ)',
  'softmax((Q·Kᵀ)/√d_k)·V',
  'd_model=512',
  'λ_reg=0.01',
  '∂L/∂W_h',
  'BPE::encode()',
  'Pre-LayerNorm',
  'CausalMask(tril)',
  'HNSW_M=16',
  'dim=1536',
  'E_x[log D(x)]',
  'W_gate · [h_{t-1}, x_t]',
  'pgvector::cosine',
  'BM25 + RRF',
  'GPT::generate()',
  'SFT::loss_mask',
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  alpha: number;
  size: number;
}

export const AmbientTerminalFlow: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Initialize particles
    const particleCount = Math.min(24, Math.floor(width / 60));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -0.15 - Math.random() * 0.25, // gentle upward drift
        text: FLOATING_TOKENS[i % FLOATING_TOKENS.length],
        alpha: 0.04 + Math.random() * 0.08,
        size: 10 + Math.random() * 3,
      });
    }

    let animationId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle tokens and subtle connection filaments
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.y < -30) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -40) p.x = width + 30;
        if (p.x > width + 40) p.x = -30;

        // Draw text
        ctx.font = `${p.size}px monospace`;
        ctx.fillStyle = `rgba(51, 255, 0, ${p.alpha})`;
        ctx.fillText(p.text, p.x, p.y);

        // Faint connecting lines between close particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 140) {
            ctx.strokeStyle = `rgba(51, 255, 0, ${(1 - dist / 140) * 0.035})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.8,
      }}
    />
  );
};
