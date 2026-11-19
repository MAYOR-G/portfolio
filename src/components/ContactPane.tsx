import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { playClick, playBeep, playErrorSound } from '../utils/audio';

export const ContactPane: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [transmitting, setTransmitting] = useState(false);
  const [transmissionLog, setTransmissionLog] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !senderMessage.trim()) {
      playErrorSound();
      return;
    }

    playClick();
    setTransmitting(true);

    setTimeout(() => {
      playBeep(820, 'square', 0.12, 0.06);
      const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);

      setTransmissionLog(
        `[${timestamp}] MESSAGE PREPARED\n` +
          `Recipient: ${PROFILE_DATA.email}\n` +
          `Status: Opening email client with pre-filled inquiry...`
      );
      setTransmitting(false);

      const mailtoLink = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
        `AI/ML Engineering Inquiry from ${senderName}`
      )}&body=${encodeURIComponent(
        `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${senderMessage}`
      )}`;
      window.open(mailtoLink, '_blank');
    }, 450);
  };

  const handleReset = () => {
    playClick();
    setSenderName('');
    setSenderEmail('');
    setSenderMessage('');
    setTransmissionLog(null);
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
          $ mayorg --contact
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
          Get in Touch
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px', maxWidth: '72ch' }}>
          Available for Machine Learning &amp; AI Engineering roles, generative AI system architecture, MLOps consulting, and technical collaboration.
        </p>
      </section>

      <div className="grid-cols-2" style={{ alignItems: 'start' }}>
        {/* Left: Direct Channels (Open on Page with Clean Hairlines, No Box-Inside-Box) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingRight: '12px' }}>
          <div>
            <div style={{ fontSize: '11.5px', color: 'var(--color-primary)', fontWeight: 600 }}>
              // DIRECT CHANNELS
            </div>
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-text-primary)', marginTop: '4px' }}>
              Connect Directly
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
                padding: '16px 0',
                borderTop: '1px solid var(--color-border-strong)',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-dim)' }}>Email</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)', marginTop: '2px' }}>
                  {PROFILE_DATA.email}
                </div>
              </div>
              <a href={`mailto:${PROFILE_DATA.email}`} className="term-btn sm">
                Send Email ↗
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
                padding: '16px 0',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-dim)' }}>WhatsApp / Phone</div>
                <div
                  className="tabular-nums"
                  style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)', marginTop: '2px' }}
                >
                  {PROFILE_DATA.phone}
                </div>
              </div>
              <a
                href={PROFILE_DATA.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="term-btn sm secondary"
              >
                WhatsApp ↗
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
                padding: '16px 0',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-dim)' }}>GitHub</div>
                <div style={{ fontSize: '13.5px', fontWeight: 500, color: 'var(--color-text-primary)', marginTop: '2px' }}>
                  github.com/MAYOR-G
                </div>
              </div>
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noreferrer"
                className="term-btn sm ghost"
              >
                GitHub Profile ↗
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
                padding: '16px 0',
                borderBottom: '1px solid var(--color-border-strong)',
              }}
            >
              <div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-dim)' }}>LinkedIn</div>
                <div style={{ fontSize: '13.5px', fontWeight: 500, color: 'var(--color-text-primary)', marginTop: '2px' }}>
                  linkedin.com/in/mayowa-olugbenga-66a691254
                </div>
              </div>
              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="term-btn sm ghost"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right: Clean Terminal Message Console */}
        <div className="term-window">
          <div className="term-titlebar">
            <span className="term-titlebar-path">
              <span className="term-titlebar-dot" />
              <span>DIRECT MESSAGE CONSOLE</span>
            </span>
            <span style={{ fontSize: '11px', color: 'var(--color-text-dim)' }}>mailto</span>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <div>
              <label
                htmlFor="contact-name"
                style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '6px' }}
              >
                Name or Organization
              </label>
              <div className="term-input-line">
                <span className="term-prompt-label">&gt;</span>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your name or company"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="term-input"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-email"
                style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '6px' }}
              >
                Email Address
              </label>
              <div className="term-input-line">
                <span className="term-prompt-label">&gt;</span>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="term-input"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '6px' }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder="Describe the role, project architecture, or engineering inquiry..."
                value={senderMessage}
                onChange={(e) => setSenderMessage(e.target.value)}
                className="term-textarea"
              />
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '4px', flexWrap: 'wrap' }}>
              <button
                type="submit"
                disabled={transmitting}
                className="term-btn"
                style={{ flex: 1 }}
              >
                {transmitting ? 'Preparing Message...' : 'Send Message ↗'}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="term-btn ghost"
              >
                Reset
              </button>
            </div>

            {transmissionLog && (
              <div
                style={{
                  background: 'var(--color-bg-deep)',
                  border: '1px solid var(--color-primary)',
                  padding: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--color-primary)',
                  whiteSpace: 'pre-wrap',
                  lineHeight: 1.5,
                }}
              >
                {transmissionLog}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
