import React, { useState } from 'react';
import { TECH_ECOSYSTEM_DATA } from '../data/portfolioData';
import type { TechEcosystemItem, TechCategory } from '../data/portfolioData';
import { playClick } from '../utils/audio';

type CategoryFilter = 'ALL' | TechCategory;

const CATEGORIES: { id: CategoryFilter; label: string }[] = [
  { id: 'ALL', label: 'All Stack' },
  { id: 'LLMS & GEN-AI', label: 'LLMs & Gen-AI' },
  { id: 'CORE ML & DEEP LEARNING', label: 'ML & Deep Learning' },
  { id: 'VECTOR DBS & RAG', label: 'Vector DBs & RAG' },
  { id: 'MLOPS & BACKEND', label: 'MLOps & Serving' },
  { id: 'CLOUD & DATA STORES', label: 'Cloud & Data' },
  { id: 'LANGUAGES & DATA', label: 'Languages & Data' },
];

export const TechEcosystem: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = TECH_ECOSYSTEM_DATA.filter((item: TechEcosystemItem) => {
    const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Direct Open Section Header (Not wrapped in a redundant box) */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '16px',
          paddingBottom: '16px',
          borderBottom: '1px solid var(--color-border-strong)',
        }}
      >
        <div>
          <div style={{ fontSize: '11.5px', color: 'var(--color-primary)', fontWeight: 600 }}>
            $mayorg --stack
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-text-primary)', marginTop: '4px' }}>
            AI, Machine Learning &amp; MLOps Tech Stack
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
            Core languages, deep learning frameworks, LLM orchestration, vector databases, and cloud infrastructure.
          </p>
        </div>

        {/* Live Search Filter */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid var(--color-border-strong)',
            padding: '6px 12px',
            background: 'var(--color-bg-deep)',
            minWidth: '250px',
          }}
        >
          <span style={{ color: 'var(--color-primary)', fontSize: '12px', fontWeight: 600 }}>
            grep:
          </span>
          <input
            type="text"
            placeholder="Filter tools (e.g. PyTorch, RAG, AWS)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              width: '100%',
            }}
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count =
            cat.id === 'ALL'
              ? TECH_ECOSYSTEM_DATA.length
              : TECH_ECOSYSTEM_DATA.filter((item) => item.category === cat.id).length;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                playClick();
                setActiveCategory(cat.id);
              }}
              className={`term-btn sm ${isActive ? '' : 'ghost'}`}
              style={{
                backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
                color: isActive ? 'var(--color-black)' : 'var(--color-text-secondary)',
                borderColor: isActive ? 'var(--color-primary)' : 'var(--color-border-strong)',
                fontWeight: isActive ? 600 : 500,
              }}
            >
              <span>{cat.label}</span>
              <span className="tabular-nums" style={{ opacity: isActive ? 0.85 : 0.6 }}>
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Clean Hairline Tech Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: '12px',
        }}
      >
        {filteredItems.map((tech) => (
          <div
            key={tech.id}
            className="term-card"
            style={{
              padding: '16px',
              borderLeft: tech.highlight
                ? '2px solid var(--color-primary)'
                : '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '8px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
              <span
                style={{
                  fontSize: '13.5px',
                  fontWeight: 600,
                  color: 'var(--color-text-primary)',
                }}
              >
                {tech.name}
              </span>
              <span
                className={`term-badge ${
                  tech.badge === 'Core'
                    ? 'accent'
                    : tech.badge === 'Production'
                    ? 'cyan'
                    : 'amber'
                }`}
                style={{ height: '20px', fontSize: '10px', padding: '0 6px' }}
              >
                {tech.badge}
              </span>
            </div>

            <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
              {tech.role}
            </div>

            <div
              style={{
                fontSize: '10.5px',
                color: 'var(--color-text-dim)',
                paddingTop: '6px',
                marginTop: 'auto',
              }}
            >
              {tech.category}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
