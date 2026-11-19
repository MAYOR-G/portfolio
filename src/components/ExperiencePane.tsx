import React, { useState } from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';
import type { CertificationItem } from '../types/portfolio';
import { playClick } from '../utils/audio';

export const ExperiencePane: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewCert = (cert: CertificationItem) => {
    playClick();
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
      {/* Open Section Header (Directly on Page, No Outer Box) */}
      <section
        style={{
          paddingBottom: '20px',
          borderBottom: '1px solid var(--color-border-strong)',
        }}
      >
        <div style={{ fontSize: '11.5px', color: 'var(--color-primary)', fontWeight: 600 }}>
          $ git log --experience
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
          Professional Experience, Education &amp; Certifications
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px', maxWidth: '72ch' }}>
          Engineering track record architecting enterprise RAG systems, multimodal AI applications, and production microservices.
        </p>
      </section>

      {/* Open Terminal Career Timeline (Directly on Page, Not Boxed) */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
          paddingBottom: '36px',
          borderBottom: '1px solid var(--color-border-strong)',
        }}
      >
        {EXPERIENCE_DATA.map((exp, idx) => (
          <article
            key={exp.id}
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(200px, 240px) 1fr',
              gap: '24px',
              paddingBottom: idx < EXPERIENCE_DATA.length - 1 ? '28px' : '0',
              borderBottom:
                idx < EXPERIENCE_DATA.length - 1 ? '1px solid var(--color-border)' : 'none',
            }}
            className="experience-row"
          >
            {/* Left Meta Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div
                className="tabular-nums"
                style={{ fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600 }}
              >
                {exp.period}
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                {exp.company}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--color-text-dim)' }}>
                {exp.workMode} · {exp.type}
              </div>
            </div>

            {/* Right Role & Impact Column */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                borderLeft: '2px solid var(--color-primary)',
                paddingLeft: '20px',
              }}
            >
              <h2 style={{ fontSize: '16.5px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                {exp.role}
              </h2>

              <ul
                style={{
                  paddingLeft: '18px',
                  margin: 0,
                  fontSize: '13px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.68,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                {exp.skillsUsed.map((skill, sIdx) => (
                  <span key={sIdx} className="term-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Education & Verified Certifications Split */}
      <section className="grid-cols-2">
        {/* Education Section (Direct Open Block) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            paddingRight: '12px',
          }}
        >
          <div
            style={{
              paddingBottom: '12px',
              borderBottom: '1px solid var(--color-border-strong)',
            }}
          >
            <div style={{ fontSize: '11.5px', color: 'var(--color-primary)', fontWeight: 600 }}>
              // ACADEMIC FOUNDATION
            </div>
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-text-primary)', marginTop: '4px' }}>
              Education &amp; Mathematical Rigor
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {EDUCATION_DATA.map((edu, eIdx) => (
              <div
                key={edu.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  paddingBottom: eIdx < EDUCATION_DATA.length - 1 ? '22px' : '0',
                  borderBottom:
                    eIdx < EDUCATION_DATA.length - 1 ? '1px solid var(--color-border)' : 'none',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: '15.5px', color: 'var(--color-text-primary)' }}>
                      {edu.degree}
                    </div>
                    {edu.period && (
                      <div className="tabular-nums" style={{ fontSize: '11.5px', color: 'var(--color-primary)', fontWeight: 600 }}>
                        {edu.period}
                      </div>
                    )}
                  </div>
                  <div style={{ color: 'var(--color-secondary)', fontWeight: 500, fontSize: '13px', marginTop: '2px' }}>
                    {edu.institution}
                    {edu.mode ? ` · ${edu.mode}` : ''}
                  </div>
                </div>

                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                  {edu.details}
                </p>

                <div
                  style={{
                    borderLeft: '2px solid var(--color-primary)',
                    paddingLeft: '16px',
                    marginTop: '2px',
                  }}
                >
                  <div style={{ fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '6px' }}>
                    {edu.id === 'wqu-dl-lab' ? 'Core Lab Coverage:' : 'Relevant Coursework:'}
                  </div>
                  <ul
                    style={{
                      paddingLeft: '16px',
                      margin: 0,
                      fontSize: '12.5px',
                      color: 'var(--color-text-secondary)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5px',
                      lineHeight: 1.55,
                    }}
                  >
                    {edu.courses.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Viewer Session */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              paddingBottom: '12px',
              borderBottom: '1px solid var(--color-border-strong)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <div>
              <div style={{ fontSize: '11.5px', color: 'var(--color-secondary)', fontWeight: 600 }}>
                // CREDENTIALS &amp; TRAINING
              </div>
              <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-text-primary)', marginTop: '4px' }}>
                Certifications ({CERTIFICATIONS_DATA.length})
              </h2>
            </div>
            <span style={{ fontSize: '11px', color: 'var(--color-text-dim)' }}>
              Click to open viewer
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {CERTIFICATIONS_DATA.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="term-card"
                onClick={() => handleViewCert(cert)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 16px',
                  cursor: 'pointer',
                  gap: '12px',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: 'var(--color-text-primary)' }}>
                    {cert.title}
                  </div>
                  <div style={{ fontSize: '11.5px', color: 'var(--color-text-dim)', marginTop: '2px' }}>
                    {cert.issuer}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                  <span className={`term-badge ${cert.status === 'Verified' ? 'accent' : 'amber'}`}>
                    {cert.status}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewCert(cert);
                    }}
                    className="term-btn sm ghost"
                    style={{ height: '26px', padding: '0 10px', fontSize: '11px' }}
                  >
                    Viewer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CertificateModal
        cert={selectedCert}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
