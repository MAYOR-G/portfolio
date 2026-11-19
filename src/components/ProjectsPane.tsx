import React, { useState } from 'react';
import type { ProjectCategory } from '../types/portfolio';
import { PROJECTS_DATA } from '../data/portfolioData';
import { playClick } from '../utils/audio';

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'ALL', label: 'All Projects' },
  { id: 'LLMS & FINE-TUNING', label: 'LLMs & Fine-Tuning' },
  { id: 'RAG & MULTIMODAL', label: 'RAG & Multimodal AI' },
  { id: 'CORE ML & MLOPS', label: 'Core ML & MLOps' },
];

export const ProjectsPane: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchesCat = activeCategory === 'ALL' || p.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.techStack.some((t) => t.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    playClick();
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Open Page Section Header & Filter Controls (Directly on Page, No Outer Box) */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          paddingBottom: '20px',
          borderBottom: '1px solid var(--color-border-strong)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div style={{ fontSize: '11.5px', color: 'var(--color-primary)', fontWeight: 600 }}>
              $ ls ~/projects --verified
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
              AI, Machine Learning &amp; MLOps Projects
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
              LLMs built and fine-tuned from scratch, production RAG &amp; agentic web applications, multimodal systems, and end-to-end MLOps pipelines.
            </p>
          </div>

          {/* Live grep filter */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid var(--color-border-strong)',
              padding: '6px 12px',
              background: 'var(--color-bg-deep)',
              minWidth: '260px',
            }}
          >
            <span style={{ color: 'var(--color-primary)', fontSize: '12px', fontWeight: 600 }}>
              grep:
            </span>
            <input
              type="text"
              placeholder="Search by tech or title (e.g. PyTorch, RAG)..."
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

        {/* Category Filter Buttons */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count =
              cat.id === 'ALL'
                ? PROJECTS_DATA.length
                : PROJECTS_DATA.filter((p) => p.category === cat.id).length;

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
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
          gap: '20px',
        }}
      >
        {filteredProjects.map((project) => {
          const isExpanded = expandedProjectId === project.id;
          return (
            <article
              key={project.id}
              className="term-window"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {/* Clean Terminal Card Header */}
              <div className="term-titlebar">
                <span
                  style={{ color: 'var(--color-primary)', fontSize: '11.5px', fontWeight: 600 }}
                >
                  {project.categoryLabel}
                </span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {project.featured && <span className="term-badge accent">Featured</span>}
                  <span
                    className={`term-badge ${
                      project.status === 'PRODUCTION' ? 'cyan' : 'amber'
                    }`}
                  >
                    {project.status === 'PRODUCTION' ? 'Production' : 'Open Source'}
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div
                style={{
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  gap: '16px',
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: '16.5px',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      marginBottom: '4px',
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </h2>
                  <div
                    style={{
                      fontSize: '12.5px',
                      color: 'var(--color-secondary)',
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}
                  >
                    {project.subtitle}
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.65,
                  }}
                >
                  {project.description}
                </p>

                {/* Structured Sub-Projects Breakdown (e.g., Building an LLM from Scratch) */}
                {project.subProjects && project.subProjects.length > 0 && (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      paddingLeft: '12px',
                      borderLeft: '2px solid var(--color-border-strong)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '11px',
                        color: 'var(--color-primary)',
                        fontWeight: 600,
                        letterSpacing: '0.02em',
                      }}
                    >
                      INCLUDED SUB-PROJECTS ({project.subProjects.length})
                    </div>
                    {project.subProjects.map((sub, sIdx) => (
                      <div key={sIdx} style={{ fontSize: '12px', lineHeight: 1.55 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>
                            {sIdx + 1}. {sub.title}
                          </span>
                          {sub.url && (
                            <a
                              href={sub.url}
                              target="_blank"
                              rel="noreferrer"
                              style={{ color: 'var(--color-primary)', fontSize: '11px', textDecoration: 'none' }}
                            >
                              Code ↗
                            </a>
                          )}
                        </div>
                        <div style={{ color: 'var(--color-text-dim)', fontSize: '11.5px', marginTop: '1px' }}>
                          {sub.description}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Clean Inline Hairline Metrics Strip (No Heavy Nested Box) */}
                {project.metrics && project.metrics.length > 0 && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: `repeat(${Math.min(project.metrics.length, 4)}, minmax(0, 1fr))`,
                      gap: '12px',
                      padding: '10px 0',
                      borderTop: '1px solid var(--color-border)',
                      borderBottom: '1px solid var(--color-border)',
                    }}
                  >
                    {project.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        style={{
                          borderLeft: mIdx > 0 ? '1px solid var(--color-border)' : 'none',
                          paddingLeft: mIdx > 0 ? '10px' : '0',
                        }}
                      >
                        <div style={{ fontSize: '10.5px', color: 'var(--color-text-dim)' }}>
                          {metric.label}
                        </div>
                        <div
                          className="tabular-nums"
                          style={{
                            fontSize: '12.5px',
                            fontWeight: 600,
                            color: 'var(--color-primary)',
                            marginTop: '2px',
                          }}
                        >
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Expanded Architecture Specifications */}
                {isExpanded && project.architectureNotes && (
                  <div
                    style={{
                      paddingLeft: '14px',
                      borderLeft: '2px solid var(--color-primary)',
                      fontSize: '12px',
                      lineHeight: 1.6,
                    }}
                  >
                    <div
                      style={{
                        color: 'var(--color-primary)',
                        fontWeight: 600,
                        marginBottom: '6px',
                        fontSize: '11.5px',
                      }}
                    >
                      Architecture &amp; Pipeline Notes:
                    </div>
                    <ul
                      style={{
                        paddingLeft: '16px',
                        margin: 0,
                        color: 'var(--color-text-secondary)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                      }}
                    >
                      {project.architectureNotes.map((note, nIdx) => (
                        <li key={nIdx}>{note}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="term-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions — Clean Borders, No Redundant Brackets */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '8px',
                    paddingTop: '12px',
                    borderTop: '1px solid var(--color-border)',
                  }}
                >
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="term-btn sm"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.extraLinks?.map(
                      (link, lIdx) =>
                        link.url && (
                          <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="term-btn sm"
                          >
                            {link.label} ↗
                          </a>
                        )
                    )}
                    {project.articleUrl && (
                      <a
                        href={project.articleUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="term-btn sm secondary"
                      >
                        Blog ↗
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="term-btn sm secondary"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>

                  {project.architectureNotes && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      className="term-btn sm ghost"
                    >
                      {isExpanded ? 'Hide Specs −' : 'Architecture Specs +'}
                    </button>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
