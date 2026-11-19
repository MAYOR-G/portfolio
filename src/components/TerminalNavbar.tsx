import React, { useState } from 'react';
import type { TerminalTheme } from '../types/portfolio';
import { PROFILE_DATA } from '../data/portfolioData';
import { isAudioEnabled, toggleAudio, playClick } from '../utils/audio';

interface TerminalNavbarProps {
  currentTab: string;
  onSelectTab: (tabId: string) => void;
  onOpenCli: () => void;
  onReboot: () => void;
  currentTheme: TerminalTheme;
  onThemeChange: (theme: TerminalTheme) => void;
}

const NAV_ITEMS = [
  { id: 'system', key: '1', label: 'Overview' },
  { id: 'projects', key: '2', label: 'Projects' },
  { id: 'skills', key: '3', label: 'Tech Stack' },
  { id: 'experience', key: '4', label: 'Experience' },
  { id: 'research', key: '5', label: 'Research' },
  { id: 'contact', key: '6', label: 'Contact' },
];

export const TerminalNavbar: React.FC<TerminalNavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenCli,
  onReboot,
  currentTheme,
  onThemeChange,
}) => {
  const [audioActive, setAudioActive] = useState<boolean>(isAudioEnabled());

  const handleAudioToggle = () => {
    const newState = toggleAudio();
    setAudioActive(newState);
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border-strong)',
      }}
    >
      {/* Top Status Strip */}
      <div
        style={{
          backgroundColor: 'var(--color-bg-deep)',
          borderBottom: '1px solid var(--color-border)',
          fontSize: '11px',
          color: 'var(--color-text-dim)',
        }}
      >
        <div
          className="container"
          style={{
            minHeight: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          {/* Left Identity & Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--color-primary)',
                color: 'var(--color-black)',
                padding: '1px 8px',
                fontWeight: 700,
                fontSize: '10.5px',
              }}
            >
              {PROFILE_DATA.handle}
            </span>

            <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>
              {PROFILE_DATA.name}
            </span>

            <span style={{ color: 'var(--color-border-strong)' }}>│</span>

            <span style={{ color: 'var(--color-text-secondary)' }}>
              <span style={{ color: 'var(--color-primary)' }}>●</span> Available for AI &amp; ML Engineering Roles
            </span>
          </div>

          {/* Right Theme & Preview Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '10px', color: 'var(--color-text-dim)', marginRight: '2px' }}>
              THEME:
            </span>
            <button
              type="button"
              onClick={() => {
                playClick();
                onThemeChange('green');
              }}
              className={`term-btn sm ${currentTheme === 'green' ? '' : 'ghost'}`}
              style={{ height: '22px', padding: '0 8px', fontSize: '10px' }}
            >
              EMERALD
            </button>
            <button
              type="button"
              onClick={() => {
                playClick();
                onThemeChange('amber');
              }}
              className={`term-btn sm ${currentTheme === 'amber' ? '' : 'ghost'}`}
              style={{ height: '22px', padding: '0 8px', fontSize: '10px' }}
            >
              AMBER
            </button>
            <button
              type="button"
              onClick={() => {
                playClick();
                onThemeChange('cyan');
              }}
              className={`term-btn sm ${currentTheme === 'cyan' ? '' : 'ghost'}`}
              style={{ height: '22px', padding: '0 8px', fontSize: '10px' }}
            >
              CYAN
            </button>

            <span style={{ color: 'var(--color-border-strong)' }}>│</span>

            <button
              type="button"
              onClick={handleAudioToggle}
              className="term-btn sm ghost"
              style={{ height: '22px', padding: '0 8px', fontSize: '10px' }}
              title="Toggle terminal sound effects"
            >
              SFX: {audioActive ? 'ON' : 'OFF'}
            </button>

            <button
              type="button"
              onClick={() => {
                playClick();
                onReboot();
              }}
              className="term-btn sm ghost"
              style={{ height: '22px', padding: '0 8px', fontSize: '10px' }}
              title="Replay terminal initialization preview"
            >
              PREVIEW
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className="container"
        style={{
          minHeight: '48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          paddingTop: '6px',
          paddingBottom: '6px',
        }}
      >
        <nav style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {NAV_ITEMS.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  playClick();
                  onSelectTab(item.id);
                }}
                className={`term-btn sm ${isActive ? '' : 'ghost'}`}
                style={{
                  height: '32px',
                  padding: '0 14px',
                  backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
                  color: isActive ? 'var(--color-black)' : 'var(--color-text-secondary)',
                  borderColor: isActive ? 'var(--color-primary)' : 'var(--color-border-strong)',
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                <span
                  className="tabular-nums"
                  style={{
                    fontSize: '10px',
                    opacity: isActive ? 0.85 : 0.6,
                    borderRight: isActive
                      ? '1px solid rgba(0,0,0,0.25)'
                      : '1px solid var(--color-border-strong)',
                    paddingRight: '6px',
                  }}
                >
                  {item.key}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => {
            playClick();
            onOpenCli();
          }}
          className="term-btn sm secondary"
          title="Open interactive CLI shell (shortcut: ~ or `)"
          style={{
            height: '32px',
            padding: '0 12px',
          }}
        >
          <span>&gt;_ TERMINAL</span>
          <span
            className="term-keycap"
            style={{
              color: 'var(--color-secondary)',
              borderColor: 'rgba(229, 160, 13, 0.45)',
            }}
          >
            ~
          </span>
        </button>
      </div>
    </header>
  );
};
