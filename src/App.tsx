import React, { useState, useEffect } from 'react';
import { TerminalNavbar } from './components/TerminalNavbar';
import { BootSequence } from './components/BootSequence';
import { HeroPane } from './components/HeroPane';
import { ProjectsPane } from './components/ProjectsPane';
import { SkillsPane } from './components/SkillsPane';
import { ExperiencePane } from './components/ExperiencePane';
import { ResearchPane } from './components/ResearchPane';
import { ContactPane } from './components/ContactPane';
import { InteractiveCliDrawer } from './components/InteractiveCliDrawer';
import { CrtOverlay } from './components/CrtOverlay';
import type { TerminalTheme } from './types/portfolio';
import { PROFILE_DATA } from './data/portfolioData';
import { playClick } from './utils/audio';

const TAB_KEYS: Record<string, string> = {
  '1': 'system',
  '2': 'projects',
  '3': 'skills',
  '4': 'experience',
  '5': 'research',
  '6': 'contact',
};

const TAB_NAMES: Record<string, string> = {
  system: 'overview',
  projects: 'projects',
  skills: 'tech-stack',
  experience: 'experience',
  research: 'research',
  contact: 'contact',
};

export const App: React.FC = () => {
  const [booting, setBooting] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('system');
  const [isCliOpen, setIsCliOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<TerminalTheme>(() => {
    const saved = localStorage.getItem('mayor_terminal_theme') as TerminalTheme;
    return saved && ['green', 'amber', 'cyan'].includes(saved) ? saved : 'green';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeChange = (newTheme: TerminalTheme) => {
    setTheme(newTheme);
    localStorage.setItem('mayor_terminal_theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (booting) return;
      const target = e.target as HTMLElement | null;
      const isInput =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable);

      if (isInput) return;

      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        playClick();
        setIsCliOpen((prev) => !prev);
      } else if (!e.metaKey && !e.ctrlKey && !e.altKey && TAB_KEYS[e.key]) {
        e.preventDefault();
        playClick();
        setActiveTab(TAB_KEYS[e.key]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [booting]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CrtOverlay enabled={true} />

      {booting ? (
        <BootSequence onComplete={() => setBooting(false)} />
      ) : (
        <>
          <TerminalNavbar
            currentTab={activeTab}
            onSelectTab={setActiveTab}
            onOpenCli={() => setIsCliOpen(true)}
            onReboot={() => setBooting(true)}
            currentTheme={theme}
            onThemeChange={handleThemeChange}
          />

          <main
            className="container animate-enter"
            style={{
              flex: 1,
              paddingTop: '28px',
              paddingBottom: '56px',
            }}
          >
            {activeTab === 'system' && (
              <HeroPane
                onNavigateTab={setActiveTab}
                onOpenCli={() => setIsCliOpen(true)}
                currentTheme={theme}
              />
            )}

            {activeTab === 'projects' && <ProjectsPane />}

            {activeTab === 'skills' && <SkillsPane />}

            {activeTab === 'experience' && <ExperiencePane />}

            {activeTab === 'research' && <ResearchPane />}

            {activeTab === 'contact' && <ContactPane />}
          </main>

          {/* Bottom Statusline Footer */}
          <footer
            style={{
              marginTop: 'auto',
              borderTop: '1px solid var(--color-border-strong)',
              backgroundColor: 'var(--color-bg-deep)',
              fontSize: '12px',
              color: 'var(--color-text-dim)',
              padding: '6px 0',
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
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    background: isCliOpen ? 'var(--color-secondary)' : 'var(--color-primary)',
                    color: 'var(--color-black)',
                    padding: '1px 8px',
                    fontWeight: 700,
                    fontSize: '10px',
                  }}
                >
                  {isCliOpen ? 'CLI SHELL' : 'PORTFOLIO'}
                </span>
                <span style={{ color: 'var(--color-text-secondary)' }}>
                  ~/mayorg/{TAB_NAMES[activeTab] || activeTab}
                </span>
                <span style={{ color: 'var(--color-border-strong)' }}>│</span>
                <span>{PROFILE_DATA.name} · Machine Learning &amp; AI Engineer</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--color-primary)', textDecoration: 'none' }}
                >
                  GitHub ↗
                </a>
                <a
                  href={PROFILE_DATA.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}
                >
                  LinkedIn ↗
                </a>
                <a
                  href={PROFILE_DATA.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}
                >
                  WhatsApp ↗
                </a>
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}
                >
                  Email
                </a>
              </div>
            </div>
          </footer>

          <InteractiveCliDrawer
            isOpen={isCliOpen}
            onClose={() => setIsCliOpen(false)}
            onNavigateTab={setActiveTab}
            onThemeChange={handleThemeChange}
            onReboot={() => setBooting(true)}
          />
        </>
      )}
    </div>
  );
};

export default App;
