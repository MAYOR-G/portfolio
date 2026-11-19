import React, { useEffect, useRef } from 'react';
import type { CertificationItem } from '../types/portfolio';
import { playClick, playBeep } from '../utils/audio';

interface CertificateModalProps {
  cert: CertificationItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        playClick();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !cert) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      playClick();
      onClose();
    }
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(3, 5, 4, 0.85)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        padding: '20px',
        animation: 'fadeIn 150ms var(--ease-out)',
      }}
    >
      <div
        className="term-window animate-enter"
        style={{
          maxWidth: '620px',
          width: '100%',
          maxHeight: '85vh',
          overflow: 'auto',
          border: '1px solid var(--color-primary)',
        }}
      >
        <div className="term-titlebar inverted">
          <span className="term-titlebar-path">
            <span className="term-titlebar-dot" />
            <span>CREDENTIAL VIEWER // {cert.issuer}</span>
          </span>
          <button
            type="button"
            onClick={() => {
              playClick();
              onClose();
            }}
            className="term-btn sm ghost"
            style={{ height: '24px', padding: '0 8px', fontSize: '10.5px' }}
          >
            Esc
          </button>
        </div>

        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '4px' }}>
              Credential Record
            </div>
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-text-primary)', lineHeight: 1.3 }}>
              {cert.title}
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              padding: '12px 0',
              borderTop: '1px solid var(--color-border)',
              borderBottom: '1px solid var(--color-border)',
            }}
          >
            <div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-dim)' }}>Issuing Organization</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)', marginTop: '2px' }}>
                {cert.issuer}
              </div>
            </div>

            <div style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: '16px' }}>
              <div style={{ fontSize: '11px', color: 'var(--color-text-dim)' }}>Status</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)', marginTop: '2px' }}>
                ● {cert.status}
              </div>
            </div>
          </div>

          {cert.description && (
            <div>
              <div style={{ fontSize: '11.5px', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '6px' }}>
                Technical Coverage:
              </div>
              <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                {cert.description}
              </div>
            </div>
          )}

          {cert.imageUrl && (
            <div style={{ border: '1px solid var(--color-border)', overflow: 'hidden' }}>
              <img
                src={cert.imageUrl}
                alt={`${cert.title} - ${cert.issuer}`}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          )}

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '10px',
              paddingTop: '12px',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="term-btn sm"
                onClick={() => playBeep(600, 'square', 0.08)}
              >
                Verify Credential ↗
              </a>
            )}
            <button
              type="button"
              onClick={() => {
                playClick();
                onClose();
              }}
              className="term-btn sm ghost"
            >
              Close Viewer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
