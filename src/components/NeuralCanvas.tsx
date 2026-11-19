import React, { useRef, useEffect, useState } from 'react';
import { playClick } from '../utils/audio';

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  layer: number;
  label: string;
  activation: number;
  size: number;
}

interface Synapse {
  source: number;
  target: number;
  weight: number;
  pulseProgress: number;
  pulseSpeed: number;
}

export const NeuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pulseCount, setPulseCount] = useState(0);
  const [mode, setMode] = useState<'DENSE' | 'ATTENTION'>('ATTENTION');
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = 220);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 700;
      height = canvas.height = 220;
    };
    window.addEventListener('resize', handleResize);

    const layerDefs = [
      { count: 4, labelPrefix: 'x', name: 'INPUT' },
      { count: 5, labelPrefix: 'h1', name: 'EMBED' },
      { count: 6, labelPrefix: 'a', name: 'ATTN' },
      { count: 4, labelPrefix: 'h2', name: 'LATENT' },
      { count: 3, labelPrefix: 'y', name: 'OUTPUT' },
    ];

    const nodes: Node[] = [];
    const synapses: Synapse[] = [];

    const layerSpacing = width / (layerDefs.length + 1);

    layerDefs.forEach((ld, lIdx) => {
      const x = (lIdx + 1) * layerSpacing;
      const nodeSpacing = height / (ld.count + 1);

      for (let i = 0; i < ld.count; i++) {
        const y = (i + 1) * nodeSpacing;
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          layer: lIdx,
          label: `${ld.labelPrefix}_${i + 1}`,
          activation: 0.3 + Math.random() * 0.7,
          size: 4,
        });
      }
    });

    nodes.forEach((n1, idx1) => {
      nodes.forEach((n2, idx2) => {
        if (n2.layer === n1.layer + 1) {
          if (Math.random() > 0.25) {
            synapses.push({
              source: idx1,
              target: idx2,
              weight: 0.3 + Math.random() * 0.7,
              pulseProgress: Math.random(),
              pulseSpeed: 0.006 + Math.random() * 0.009,
            });
          }
        } else if (mode === 'ATTENTION' && Math.abs(n2.layer - n1.layer) === 2) {
          if (Math.random() > 0.78) {
            synapses.push({
              source: idx1,
              target: idx2,
              weight: 0.6,
              pulseProgress: Math.random(),
              pulseSpeed: 0.012,
            });
          }
        }
      });
    });

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const styles = getComputedStyle(document.documentElement);
      const primaryColor = styles.getPropertyValue('--color-primary').trim() || '#34d399';
      const secondaryColor = styles.getPropertyValue('--color-secondary').trim() || '#e5a00d';
      const accentRgb = styles.getPropertyValue('--color-accent-rgb').trim() || '52, 211, 153';

      // Subtle coordinate grid
      ctx.strokeStyle = `rgba(${accentRgb}, 0.05)`;
      ctx.lineWidth = 1;
      const gridSize = 24;
      for (let gx = 0; gx < width; gx += gridSize) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, height);
        ctx.stroke();
      }
      for (let gy = 0; gy < height; gy += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(width, gy);
        ctx.stroke();
      }

      nodes.forEach((node) => {
        const floatOffset = Math.sin(frame * 0.02 + node.layer + node.baseY * 0.04) * 2;
        node.y = node.baseY + floatOffset;

        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 72 && dist > 0) {
          const force = (72 - dist) / 72;
          node.x = node.baseX - (dx / dist) * force * 10;
          node.y = node.baseY - (dy / dist) * force * 10;
        } else {
          node.x += (node.baseX - node.x) * 0.1;
        }
      });

      synapses.forEach((syn) => {
        const s = nodes[syn.source];
        const t = nodes[syn.target];

        ctx.strokeStyle = `rgba(${accentRgb}, ${0.08 + syn.weight * 0.22})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(t.x, t.y);
        ctx.stroke();

        syn.pulseProgress += syn.pulseSpeed;
        if (syn.pulseProgress > 1) syn.pulseProgress = 0;

        const px = s.x + (t.x - s.x) * syn.pulseProgress;
        const py = s.y + (t.y - s.y) * syn.pulseProgress;

        ctx.fillStyle = syn.weight > 0.78 ? secondaryColor : primaryColor;
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fill();
      });

      nodes.forEach((node) => {
        const isHovered = Math.hypot(mouseX - node.x, mouseY - node.y) < 22;
        const color = isHovered ? secondaryColor : primaryColor;

        ctx.strokeStyle = color;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size + (isHovered ? 2 : 0), 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillStyle = isHovered ? secondaryColor : `rgba(${accentRgb}, 0.75)`;
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y - node.size - 5);
      });

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [pulseCount, mode]);

  return (
    <section
      style={{
        paddingBottom: '36px',
        borderBottom: '1px solid var(--color-border-strong)',
      }}
    >
      <div className="term-window" style={{ overflow: 'hidden' }}>
        <div className="term-titlebar">
          <span className="term-titlebar-path">
            <span className="term-titlebar-dot" />
            <span>NEURAL NETWORK TOPOLOGY // {mode} GRAPH</span>
          </span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              type="button"
              onClick={() => {
                playClick();
                setMode((prev) => (prev === 'DENSE' ? 'ATTENTION' : 'DENSE'));
              }}
              className="term-btn sm secondary"
              style={{ height: '24px', padding: '0 10px', fontSize: '10.5px' }}
            >
              Topology: {mode === 'ATTENTION' ? 'Skip-Attention' : 'Dense'}
            </button>
            <button
              type="button"
              onClick={() => {
                playClick();
                setPulseCount((prev) => prev + 1);
              }}
              className="term-btn sm"
              style={{ height: '24px', padding: '0 10px', fontSize: '10.5px' }}
            >
              Pulse Forward Pass
            </button>
          </div>
        </div>

        <div style={{ position: 'relative', width: '100%', height: '220px', background: 'var(--color-bg-deep)' }}>
          <canvas
            ref={canvasRef}
            style={{
              display: 'block',
              width: '100%',
              height: '220px',
              cursor: 'crosshair',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              left: '16px',
              fontSize: '11px',
              color: 'var(--color-text-dim)',
              pointerEvents: 'none',
            }}
          >
            Forward Propagation: Input (x) → Embedding (h₁) → Attention (a) → Latent (h₂) → Output (y)
          </div>
        </div>
      </div>
    </section>
  );
};
