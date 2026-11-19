import React from 'react';
import { PROFILE_DATA, PUBLICATION_DATA, PROJECTS_DATA } from '../data/portfolioData';
import type { TerminalTheme } from '../types/portfolio';
import { AsciiBanner } from './AsciiArt';
import { NeuralCanvas } from './NeuralCanvas';
import { TechEcosystem } from './TechEcosystem';
import ShapeWaves from './ShapeWaves';
import { playClick } from '../utils/audio';

interface HeroPaneProps {
  onNavigateTab: (tabId: string) => void;
  onOpenCli: () => void;
  currentTheme?: TerminalTheme;
}

const THEME_WAVE_COLORS: Record<
  TerminalTheme,
  { color: string; hoverColor: string; bg: string }
> = {
  green: { color: '#34d399', hoverColor: '#edf5f0', bg: '#030504' },
  amber: { color: '#fbbf24', hoverColor: '#faf3e8', bg: '#040302' },
  cyan: { color: '#22d3ee', hoverColor: '#eaf6fa', bg: '#030507' },
};

export const HeroPane: React.FC<HeroPaneProps> = ({
  onNavigateTab,
  onOpenCli,
  currentTheme = 'green',
}) => {
  const wavePalette = THEME_WAVE_COLORS[currentTheme] || THEME_WAVE_COLORS.green;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
      {/* ═══════════════════════════════════════════════════════════════════
          1. UNIFIED HERO SPLIT: DIRECT IDENTITY + GPU WAVE FIELD
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="hero-split"
        style={{
          paddingBottom: '36px',
          borderBottom: '1px solid var(--color-border-strong)',
        }}
      >
        {/* Left Column: Direct on Page (No Unnecessary Outer Box) */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ overflowX: 'auto', paddingBottom: '4px' }}>
              <AsciiBanner />
            </div>

            <h1
              style={{
                fontSize: 'clamp(26px, 3vw, 38px)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              {PROFILE_DATA.name}
            </h1>

            <div
              style={{
                fontSize: '15px',
                color: 'var(--color-secondary)',
                fontWeight: 500,
                lineHeight: 1.4,
              }}
            >
              {PROFILE_DATA.title}
              <span className="cursor-blink" />
            </div>

            <p
              style={{
                fontSize: '14px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                maxWidth: '68ch',
                marginTop: '2px',
              }}
            >
              {PROFILE_DATA.bio}
            </p>
          </div>

          {/* Key Engineering Highlights Strip (Direct Hairline Grid) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))',
              borderTop: '1px solid var(--color-border-strong)',
              borderBottom: '1px solid var(--color-border-strong)',
              padding: '14px 0',
              gap: '14px',
            }}
          >
            <div>
              <div className="tabular-nums" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-primary)' }}>
                3+ Years
              </div>
              <div style={{ fontSize: '11.5px', color: 'var(--color-text-dim)', marginTop: '2px' }}>
                ML &amp; AI Engineering
              </div>
            </div>
            <div style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: '14px' }}>
              <div className="tabular-nums" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-primary)' }}>
                B.Sc. Math
              </div>
              <div style={{ fontSize: '11.5px', color: 'var(--color-text-dim)', marginTop: '2px' }}>
                First-Principles Rigor
              </div>
            </div>
            <div style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: '14px' }}>
              <div className="tabular-nums" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-primary)' }}>
                {PROJECTS_DATA.length} Systems
              </div>
              <div style={{ fontSize: '11.5px', color: 'var(--color-text-dim)', marginTop: '2px' }}>
                LLMs · RAG · MLOps
              </div>
            </div>
            <div style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: '14px' }}>
              <div className="tabular-nums" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-primary)' }}>
                Published
              </div>
              <div style={{ fontSize: '11.5px', color: 'var(--color-text-dim)', marginTop: '2px' }}>
                Zenodo RAG Paper
              </div>
            </div>
          </div>

          {/* Direct Contact & Credential Metadata */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '8px 24px',
              fontSize: '13px',
            }}
          >
            <div>
              <span style={{ color: 'var(--color-text-dim)' }}>Education: </span>
              <span style={{ color: 'var(--color-text-primary)' }}>B.Sc. Mathematics · WQU Deep Learning Lab</span>
            </div>
            <div>
              <span style={{ color: 'var(--color-text-dim)' }}>Availability: </span>
              <span style={{ color: 'var(--color-text-primary)' }}>{PROFILE_DATA.workMode}</span>
            </div>
            <div>
              <span style={{ color: 'var(--color-text-dim)' }}>Email: </span>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                style={{ color: 'var(--color-primary)', textDecoration: 'none' }}
              >
                {PROFILE_DATA.email}
              </a>
            </div>
            <div>
              <span style={{ color: 'var(--color-text-dim)' }}>GitHub: </span>
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--color-primary)', textDecoration: 'none' }}
              >
                github.com/MAYOR-G ↗
              </a>
            </div>
          </div>

          {/* Primary Actions */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '4px' }}>
            <button
              type="button"
              onClick={() => {
                playClick();
                onNavigateTab('projects');
              }}
              className="term-btn lg"
            >
              <span>EXPLORE PROJECTS ({PROJECTS_DATA.length})</span>
              <span className="term-keycap" style={{ background: 'var(--color-black)', color: 'var(--color-primary)' }}>
                2
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                playClick();
                onOpenCli();
              }}
              className="term-btn lg secondary"
              title="Open Interactive Shell (Shortcut: ` or ~)"
            >
              <span>&gt;_ INTERACTIVE CLI</span>
              <span className="term-keycap" style={{ color: 'var(--color-secondary)' }}>
                ~
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                playClick();
                onNavigateTab('contact');
              }}
              className="term-btn lg ghost"
            >
              <span>GET IN TOUCH</span>
              <span className="term-keycap">6</span>
            </button>
          </div>
        </div>

        {/* Right Column: ShapeWaves GPU Visual — Matched to Theme & Column Height */}
        <div
          className="term-window"
          style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            minHeight: '380px',
            background: wavePalette.bg,
          }}
        >
          <div className="term-titlebar">
            <span className="term-titlebar-path">
              <span className="term-titlebar-dot" />
              <span>SHADER_FIELD // INTERACTIVE COMPUTE CANVAS</span>
            </span>
            <span style={{ fontSize: '11px', color: 'var(--color-primary)' }}>● INTERACTIVE</span>
          </div>
          <div style={{ flex: 1, width: '100%', minHeight: '344px', position: 'relative' }}>
            <ShapeWaves
              text="</>"
              fontFamily='Geist, "JetBrains Mono", system-ui, sans-serif'
              fontWeight={600}
              textSize={0.58}
              shapes="mixed"
              cellSize={10}
              dotSize={0.75}
              color={wavePalette.color}
              hoverColor={wavePalette.hoverColor}
              backgroundColor={wavePalette.bg}
              speed={1}
              scale={1}
              contrast={1}
              brightness={0.42}
              flow={0}
              direction={0}
              fade={0.22}
              interactive
              splashRadius={42}
              splashStrength={0.45}
              glow={0.3}
              intro
              introDuration={1.4}
              paused={false}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          2. ENGINEERING FOUNDATION & RESEARCH (OPEN TWO-COLUMN LAYOUT, NO BOXES)
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="grid-cols-2"
        style={{
          paddingBottom: '36px',
          borderBottom: '1px solid var(--color-border-strong)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            paddingRight: '12px',
          }}
        >
          <div style={{ fontSize: '11.5px', color: 'var(--color-primary)', fontWeight: 600 }}>
            // MATHEMATICAL RIGOR &amp; FIRST-PRINCIPLES ML
          </div>
          <h2 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
            From Analytical Equations to Production MLOps
          </h2>
          <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            Grounded in a <strong style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>B.Sc. in Mathematics</strong> and hands-on deep learning training through the <strong style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>WorldQuant University Deep Learning Fundamentals Lab</strong>. I build neural networks, Transformer blocks, and GPT models from scratch alongside reliable production AI services.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            borderLeft: '1px solid var(--color-border-strong)',
            paddingLeft: '24px',
          }}
        >
          <div style={{ fontSize: '11.5px', color: 'var(--color-secondary)', fontWeight: 600 }}>
            // PUBLISHED RESEARCH &amp; TECHNICAL LEADERSHIP
          </div>
          <h2 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
            Production RAG Systems &amp; Engineering Mentorship
          </h2>
          <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            Co-authored <strong style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>&ldquo;{PUBLICATION_DATA.title}&rdquo;</strong> (DOI:{' '}
            <a
              href={PUBLICATION_DATA.doiUrl}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}
            >
              {PUBLICATION_DATA.doi}
            </a>
            ). AI/ML Engineer at WILTDA Group and FEKITECH LTD, and ML, AI Engineering &amp; Automation Coach at Thinkup Innovation Hub.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          3. LIVE NEURAL NETWORK VISUALIZER (KEPT & POLISHED)
          ═══════════════════════════════════════════════════════════════════ */}
      <NeuralCanvas />

      {/* ═══════════════════════════════════════════════════════════════════
          4. COMPREHENSIVE ML & AI TECH STACK
          ═══════════════════════════════════════════════════════════════════ */}
      <TechEcosystem />
    </div>
  );
};
