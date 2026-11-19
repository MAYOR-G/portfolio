import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { renderAsciiBar } from './AsciiArt';
import { TechEcosystem } from './TechEcosystem';

export const SkillsPane: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
      {/* Open Section Header (Directly on Page, No Outer Box) */}
      <section
        style={{
          paddingBottom: '20px',
          borderBottom: '1px solid var(--color-border-strong)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div>
          <div style={{ fontSize: '11.5px', color: 'var(--color-primary)', fontWeight: 600 }}>
            $ mayorg --skills
          </div>
          <h1
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginTop: '4px',
              letterSpacing: '-0.02em',
            }}
          >
            Technical Skills &amp; AI/ML Engineering Stack
          </h1>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px', maxWidth: '72ch' }}>
            First-principles mathematical foundations, deep learning architectures, hybrid RAG &amp; multi-agent orchestration, and production MLOps infrastructure.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <span className="term-badge accent">B.Sc. Mathematics</span>
          <span className="term-badge cyan">First-Principles LLMs</span>
          <span className="term-badge amber">Production RAG &amp; MLOps</span>
        </div>
      </section>

      {/* Core Capability Domains */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '20px',
          paddingBottom: '36px',
          borderBottom: '1px solid var(--color-border-strong)',
        }}
      >
        {SKILL_GROUPS.map((group, gIdx) => (
          <div key={gIdx} className="term-window">
            <div className="term-titlebar">
              <span className="term-titlebar-path">
                <span className="term-titlebar-dot" />
                <span>{group.category}</span>
              </span>
              <span className="term-badge cyan">{group.tag}</span>
            </div>

            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {group.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    borderBottom:
                      sIdx < group.skills.length - 1 ? '1px solid var(--color-border)' : 'none',
                    paddingBottom: sIdx < group.skills.length - 1 ? '14px' : '0',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '6px',
                    }}
                  >
                    <span style={{ fontWeight: 600, fontSize: '13px', color: 'var(--color-text-primary)' }}>
                      {skill.name}
                    </span>
                    <span
                      className={`term-badge ${
                        skill.badge === 'Core'
                          ? 'accent'
                          : skill.badge === 'Production'
                          ? 'cyan'
                          : 'amber'
                      }`}
                    >
                      {skill.badge}
                    </span>
                  </div>

                  {/* ASCII Progress Bar */}
                  <div
                    className="tabular-nums"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11.5px',
                      color: 'var(--color-primary)',
                      letterSpacing: '0.03em',
                      marginBottom: '6px',
                    }}
                  >
                    {renderAsciiBar(skill.level, 22)}
                  </div>

                  {skill.description && (
                    <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {skill.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Complete Interactive Ecosystem & Tooling Filter */}
      <TechEcosystem />
    </div>
  );
};
