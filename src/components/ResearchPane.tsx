import React, { useState } from 'react';
import { PUBLICATION_DATA } from '../data/portfolioData';
import { ASCII_RAG_PIPELINE } from './AsciiArt';
import { playClick } from '../utils/audio';

export const ResearchPane: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const bibtex = `@article{emmanuel2026rag,
  title={${PUBLICATION_DATA.title}},
  author={Olugbenga, Mayowa Emmanuel and WILTDA Research Team},
  year={2026},
  publisher={Zenodo},
  doi={${PUBLICATION_DATA.doi}},
  url={${PUBLICATION_DATA.doiUrl}}
}`;

  const handleCopyBibtex = () => {
    playClick();
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Open Section Header (Directly on Page, No Outer Box) */}
      <section
        style={{
          paddingBottom: '20px',
          borderBottom: '1px solid var(--color-border-strong)',
        }}
      >
        <div style={{ fontSize: '11.5px', color: 'var(--color-primary)', fontWeight: 600 }}>
          $ mayorg --research
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
          Research &amp; Open Science Publications
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px', maxWidth: '72ch' }}>
          Applied research in retrieval-augmented generation (RAG), distributed knowledge indexing, and low-latency clinical &amp; institutional NLP.
        </p>
      </section>

      {/* Main Publication Section (Direct Open Editorial-Terminal Layout, No Nested Boxes) */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          paddingBottom: '32px',
          borderBottom: '1px solid var(--color-border-strong)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '12px', color: 'var(--color-secondary)', fontWeight: 600 }}>
            DOI: {PUBLICATION_DATA.doi} · {PUBLICATION_DATA.venue}
          </span>
          <span className="term-badge accent">Open Access</span>
        </div>

        <h2
          style={{
            fontSize: 'clamp(18px, 2vw, 24px)',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            lineHeight: 1.3,
            maxWidth: '72ch',
          }}
        >
          {PUBLICATION_DATA.title}
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            fontSize: '12.5px',
            padding: '12px 0',
            borderTop: '1px solid var(--color-border)',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div>
            <span style={{ color: 'var(--color-text-dim)' }}>Authors: </span>
            <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>{PUBLICATION_DATA.authors}</span>
          </div>
          <div>
            <span style={{ color: 'var(--color-text-dim)' }}>Repository: </span>
            <span style={{ color: 'var(--color-text-secondary)' }}>{PUBLICATION_DATA.venue}</span>
          </div>
          <div>
            <span style={{ color: 'var(--color-text-dim)' }}>Identifier: </span>
            <a
              href={PUBLICATION_DATA.doiUrl}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}
            >
              {PUBLICATION_DATA.doi} ↗
            </a>
          </div>
        </div>

        <div style={{ borderLeft: '2px solid var(--color-primary)', paddingLeft: '18px' }}>
          <div style={{ fontSize: '11.5px', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '6px' }}>
            Abstract
          </div>
          <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '78ch' }}>
            {PUBLICATION_DATA.abstract}
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {PUBLICATION_DATA.tags.map((tag, tIdx) => (
            <span key={tIdx} className="term-badge">
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', paddingTop: '4px' }}>
          <a
            href={PUBLICATION_DATA.doiUrl}
            target="_blank"
            rel="noreferrer"
            className="term-btn"
          >
            Read Publication on Zenodo ↗
          </a>
          <button
            type="button"
            onClick={handleCopyBibtex}
            className="term-btn secondary"
          >
            {copied ? 'Copied BibTeX to Clipboard' : 'Copy BibTeX Citation'}
          </button>
        </div>
      </section>

      {/* Two-Column Split: ASCII RAG Architecture & BibTeX Entry */}
      <div className="grid-cols-2">
        <div className="term-window" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="term-titlebar">
            <span className="term-titlebar-path">
              <span className="term-titlebar-dot" />
              <span>HYBRID RAG PIPELINE ARCHITECTURE</span>
            </span>
            <span style={{ fontSize: '11px', color: 'var(--color-text-dim)' }}>Dense + BM25 + Rerank</span>
          </div>
          <div
            style={{
              padding: '20px',
              background: 'var(--color-bg-deep)',
              overflowX: 'auto',
              flex: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <pre
              style={{
                margin: 0,
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--color-primary)',
                lineHeight: 1.4,
              }}
            >
              {ASCII_RAG_PIPELINE}
            </pre>
          </div>
        </div>

        <div className="term-window" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="term-titlebar">
            <span className="term-titlebar-path">
              <span className="term-titlebar-dot" />
              <span>citation.bib</span>
            </span>
            <span style={{ fontSize: '11px', color: 'var(--color-text-dim)' }}>BibTeX</span>
          </div>
          <div
            style={{
              padding: '20px',
              background: 'var(--color-bg-deep)',
              overflowX: 'auto',
              flex: 1,
            }}
          >
            <pre
              style={{
                margin: 0,
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.65,
              }}
            >
              {bibtex}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
