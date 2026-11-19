import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS_DATA, PROFILE_DATA, SKILL_GROUPS, EXPERIENCE_DATA, PUBLICATION_DATA } from '../data/portfolioData';
import { renderAsciiBar } from './AsciiArt';
import { playClick, playBeep, playErrorSound, toggleAudio } from '../utils/audio';
import type { TerminalTheme } from '../types/portfolio';

interface InteractiveCliDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tabId: string) => void;
  onThemeChange: (theme: TerminalTheme) => void;
  onReboot: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

const QUICK_COMMANDS = [
  'help',
  'whoami',
  'projects',
  'skills',
  'research',
  'cv',
  'theme amber',
  'theme cyan',
  'theme green',
  'sudo hire',
  'clear',
];

export const InteractiveCliDrawer: React.FC<InteractiveCliDrawerProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
  onThemeChange,
  onReboot,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'sys.init --interactive',
      output: (
        <div>
          <div style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
            MAYOR~G // INTERACTIVE COMMAND LINE SHELL [v2.4.0-STABLE]
          </div>
          <div style={{ color: 'var(--color-text-secondary)', fontSize: '12px', marginTop: '4px' }}>
            Type <span style={{ color: 'var(--color-secondary)' }}>help</span> or click any command chip below. Press{' '}
            <span style={{ color: 'var(--color-primary)' }}>Tab</span> to autocomplete or{' '}
            <span style={{ color: 'var(--color-primary)' }}>Esc</span> to minimize.
          </div>
        </div>
      ),
    },
  ]);
  const [cmdIndex, setCmdIndex] = useState<number>(-1);
  const [pastCommands, setPastCommands] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const executeCommandString = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    playClick();
    const parts = trimmed.split(' ');
    const root = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').trim();

    setPastCommands((prev) => [...prev, trimmed]);
    setCmdIndex(-1);
    setInputVal('');

    let output: React.ReactNode = null;

    switch (root) {
      case 'help':
      case 'man':
        playBeep(660, 'square', 0.06);
        output = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px' }}>
            <div style={{ color: 'var(--color-secondary)', fontWeight: 700, marginBottom: '2px' }}>
              AVAILABLE SHELL COMMANDS:
            </div>
            <div><span style={{ color: 'var(--color-primary)' }}>help</span> — Display this manual</div>
            <div><span style={{ color: 'var(--color-primary)' }}>whoami / bio</span> — Display operator profile &amp; summary</div>
            <div><span style={{ color: 'var(--color-primary)' }}>projects</span> — List all {PROJECTS_DATA.length} machine learning &amp; AI projects</div>
            <div><span style={{ color: 'var(--color-primary)' }}>project &lt;id&gt;</span> — Inspect project architecture (e.g. project omnisense-ai)</div>
            <div><span style={{ color: 'var(--color-primary)' }}>skills</span> — Render ASCII capability telemetry</div>
            <div><span style={{ color: 'var(--color-primary)' }}>experience</span> — Display career log</div>
            <div><span style={{ color: 'var(--color-primary)' }}>research</span> — View Zenodo RAG publication</div>
            <div><span style={{ color: 'var(--color-primary)' }}>cv / resume</span> — Open &amp; download latest CV (Google Drive)</div>
            <div><span style={{ color: 'var(--color-primary)' }}>contact</span> — Show direct comms channels</div>
            <div><span style={{ color: 'var(--color-primary)' }}>theme &lt;green|amber|cyan&gt;</span> — Switch CRT phosphor palette</div>
            <div><span style={{ color: 'var(--color-primary)' }}>sound &lt;on|off&gt;</span> — Toggle audio synthesizer</div>
            <div><span style={{ color: 'var(--color-primary)' }}>sudo hire</span> — Direct contract execution protocol</div>
            <div><span style={{ color: 'var(--color-primary)' }}>reboot</span> — Restart kernel bootloader</div>
            <div><span style={{ color: 'var(--color-primary)' }}>clear</span> — Clear console history</div>
            <div><span style={{ color: 'var(--color-primary)' }}>exit</span> — Close CLI drawer</div>
          </div>
        );
        break;

      case 'bio':
      case 'whoami':
        playBeep(520, 'square', 0.06);
        output = (
          <div style={{ fontSize: '12.5px', lineHeight: '19px', color: 'var(--color-text-secondary)' }}>
            <div style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
              {PROFILE_DATA.name} ({PROFILE_DATA.handle}) // {PROFILE_DATA.title}
            </div>
            <div style={{ color: 'var(--color-secondary)', fontSize: '11.5px' }}>
              Education: B.Sc. Mathematics · WorldQuant University Deep Learning Fundamentals Lab
            </div>
            <p style={{ marginTop: '6px' }}>{PROFILE_DATA.bio}</p>
          </div>
        );
        break;

      case 'projects':
        playBeep(580, 'square', 0.06);
        output = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px' }}>
            <div style={{ color: 'var(--color-secondary)', fontWeight: 700 }}>
              DEPLOYED ARCHITECTURES ({PROJECTS_DATA.length}):
            </div>
            {PROJECTS_DATA.map((p, idx) => (
              <div key={p.id} style={{ paddingBottom: '4px', borderBottom: '1px solid var(--color-border)' }}>
                <span className="tabular-nums" style={{ color: 'var(--color-secondary)' }}>
                  [{String(idx + 1).padStart(2, '0')}]
                </span>{' '}
                <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{p.title}</span>{' '}
                <span style={{ color: 'var(--color-text-dim)' }}>(id: {p.id})</span>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '11.5px' }}>{p.subtitle}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'project':
        if (!arg) {
          playErrorSound();
          output = (
            <div style={{ color: 'var(--color-error)' }}>
              [ERR: USAGE] Specify project ID, e.g. project omnisense-ai
            </div>
          );
        } else {
          const found = PROJECTS_DATA.find(
            (p) =>
              p.id.toLowerCase() === arg.toLowerCase() ||
              p.title.toLowerCase().includes(arg.toLowerCase())
          );
          if (!found) {
            playErrorSound();
            output = (
              <div style={{ color: 'var(--color-error)' }}>
                [ERR: 404] No project matching &ldquo;{arg}&rdquo;. Type projects to list IDs.
              </div>
            );
          } else {
            playBeep(640, 'square', 0.06);
            output = (
              <div className="term-card" style={{ marginTop: '4px', borderLeft: '3px solid var(--color-primary)' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 700 }}>{found.title}</div>
                <div style={{ color: 'var(--color-secondary)', fontSize: '11.5px' }}>{found.subtitle}</div>
                <div style={{ marginTop: '6px', fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                  {found.description}
                </div>
                {found.githubUrl && (
                  <div style={{ marginTop: '8px' }}>
                    <a
                      href={found.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--color-primary)', fontSize: '12px' }}
                    >
                      &gt; Open Repository: {found.githubUrl} ↗
                    </a>
                  </div>
                )}
              </div>
            );
          }
        }
        break;

      case 'skills':
        playBeep(520, 'square', 0.06);
        output = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
            {SKILL_GROUPS.map((g, gIdx) => (
              <div key={gIdx} style={{ marginBottom: '4px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 700, marginBottom: '4px' }}>
                  + {g.category.toUpperCase()}
                </div>
                {g.skills.map((s, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      maxWidth: '540px',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    <span>{s.name}</span>
                    <span className="tabular-nums" style={{ color: 'var(--color-secondary)' }}>
                      {renderAsciiBar(s.level, 14)}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        );
        break;

      case 'exp':
      case 'experience':
        playBeep(520, 'square', 0.06);
        output = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
            {EXPERIENCE_DATA.map((exp) => (
              <div key={exp.id} style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '6px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
                  {exp.role} // {exp.company}
                </div>
                <div style={{ color: 'var(--color-secondary)', fontSize: '11px' }}>
                  {exp.period} · {exp.workMode} · {exp.type}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'research':
      case 'doi':
      case 'publication':
        playBeep(560, 'square', 0.06);
        output = (
          <div style={{ fontSize: '12px', lineHeight: '18px', color: 'var(--color-text-secondary)' }}>
            <div style={{ color: 'var(--color-primary)', fontWeight: 700 }}>{PUBLICATION_DATA.title}</div>
            <div style={{ color: 'var(--color-secondary)' }}>
              DOI: {PUBLICATION_DATA.doi} · {PUBLICATION_DATA.venue}
            </div>
            <p style={{ marginTop: '4px' }}>{PUBLICATION_DATA.abstract}</p>
          </div>
        );
        break;

      case 'cv':
      case 'resume':
        playBeep(620, 'square', 0.06);
        output = (
          <div style={{ fontSize: '12px', lineHeight: '20px', color: 'var(--color-text-secondary)' }}>
            <div style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
              Olugbenga Mayowa Emmanuel — ML &amp; AI Engineer CV
            </div>
            <div>
              <a href={PROFILE_DATA.cvUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--color-secondary)' }}>
                &gt; Download / View CV on Google Drive ↗
              </a>
            </div>
          </div>
        );
        break;

      case 'contact':
        playBeep(600, 'square', 0.06);
        output = (
          <div style={{ fontSize: '12px', lineHeight: '20px', color: 'var(--color-text-secondary)' }}>
            <div>EMAIL: <a href={`mailto:${PROFILE_DATA.email}`} style={{ color: 'var(--color-primary)' }}>{PROFILE_DATA.email}</a></div>
            <div>WHATSAPP: <a href={PROFILE_DATA.whatsappUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)' }}>{PROFILE_DATA.phone}</a></div>
            <div>GITHUB: <a href={PROFILE_DATA.github} target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)' }}>{PROFILE_DATA.github}</a></div>
          </div>
        );
        break;

      case 'theme':
        if (arg === 'green' || arg === 'amber' || arg === 'cyan') {
          playBeep(720, 'square', 0.06);
          onThemeChange(arg as TerminalTheme);
          output = (
            <div style={{ color: 'var(--color-primary)' }}>
              [OK] Active CRT phosphor switched to: {arg.toUpperCase()}
            </div>
          );
        } else {
          playErrorSound();
          output = (
            <div style={{ color: 'var(--color-error)' }}>
              [ERR: USAGE] Specify theme: theme green | theme amber | theme cyan
            </div>
          );
        }
        break;

      case 'sound':
        if (arg === 'on') {
          toggleAudio(true);
          output = <div style={{ color: 'var(--color-primary)' }}>[OK] Audio synthesizer enabled</div>;
        } else if (arg === 'off') {
          toggleAudio(false);
          output = <div style={{ color: 'var(--color-text-secondary)' }}>[OK] Audio synthesizer muted</div>;
        } else {
          const current = toggleAudio();
          output = (
            <div style={{ color: 'var(--color-primary)' }}>
              [OK] Audio synthesizer: {current ? 'ON' : 'OFF'}
            </div>
          );
        }
        break;

      case 'sudo':
        if (arg.includes('hire')) {
          playBeep(880, 'square', 0.12);
          onNavigateTab('contact');
          output = (
            <div style={{ color: 'var(--color-secondary)', fontWeight: 700 }}>
              [ACCESS GRANTED] Routing directly to COMMS_UPLINK port...
            </div>
          );
        } else {
          output = (
            <div style={{ color: 'var(--color-text-dim)' }}>
              Try: sudo hire
            </div>
          );
        }
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        return;

      case 'reboot':
        onReboot();
        onClose();
        return;

      case 'exit':
      case 'close':
      case 'quit':
        onClose();
        return;

      default:
        playErrorSound();
        output = (
          <div style={{ color: 'var(--color-error)' }}>
            [ERR: 127] Command not found: &ldquo;{root}&rdquo;. Type <span style={{ color: 'var(--color-secondary)' }}>help</span> for available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommandString(inputVal);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const partial = inputVal.trim().toLowerCase();
      if (!partial) return;
      const match = QUICK_COMMANDS.find((cmd) => cmd.startsWith(partial));
      if (match) {
        setInputVal(match);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastCommands.length > 0) {
        const nextIndex = cmdIndex === -1 ? pastCommands.length - 1 : Math.max(0, cmdIndex - 1);
        setCmdIndex(nextIndex);
        setInputVal(pastCommands[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex !== -1) {
        const nextIndex = cmdIndex + 1;
        if (nextIndex < pastCommands.length) {
          setCmdIndex(nextIndex);
          setInputVal(pastCommands[nextIndex]);
        } else {
          setCmdIndex(-1);
          setInputVal('');
        }
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 'clamp(340px, 50vh, 520px)',
        background: 'var(--color-surface)',
        borderTop: '2px solid var(--color-primary)',
        boxShadow: '0 -20px 50px rgba(0, 0, 0, 0.85)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Titlebar */}
      <div className="term-titlebar inverted">
        <span className="term-titlebar-path">
          <span className="term-titlebar-dot" />
          <span>&gt;_ MAYOR~G // INTERACTIVE ZSH SHELL EMULATOR</span>
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '10px', color: 'var(--color-text-dim)' }}>Tab: Autocomplete · Esc: Close</span>
          <button
            type="button"
            onClick={onClose}
            className="term-btn sm ghost"
            style={{ height: '22px', padding: '0 8px', fontSize: '10px' }}
          >
            Close
          </button>
        </div>
      </div>

      {/* Quick Command Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexWrap: 'wrap',
          padding: '6px 16px',
          background: 'var(--color-surface-raised)',
          borderBottom: '1px solid var(--color-border)',
          fontSize: '11px',
        }}
      >
        <span style={{ color: 'var(--color-text-dim)', marginRight: '4px' }}>QUICK_EXEC:</span>
        {QUICK_COMMANDS.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => executeCommandString(cmd)}
            className="term-btn sm ghost"
            style={{ height: '20px', padding: '0 6px', fontSize: '10px' }}
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Stream */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px 20px',
          fontFamily: 'var(--font-mono)',
          fontSize: '12.5px',
          lineHeight: '19px',
          background: 'var(--color-bg-deep)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {history.map((item, idx) => (
          <div key={idx}>
            <div style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>
              MAYOR~G@workstation:~$ <span style={{ color: 'var(--color-text-primary)' }}>{item.command}</span>
            </div>
            <div style={{ marginTop: '4px', paddingLeft: '12px', borderLeft: '1px solid var(--color-border-strong)' }}>
              {item.output}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Command Input Bar */}
      <form
        onSubmit={handleCommandSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '44px',
          padding: '0 20px',
          background: 'var(--color-surface)',
          borderTop: '1px solid var(--color-border)',
          gap: '8px',
        }}
      >
        <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '12.5px', whiteSpace: 'nowrap' }}>
          MAYOR~G@workstation:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter command (help, projects, skills, theme amber, sudo hire)..."
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'var(--color-text-primary)',
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
          }}
        />
        <button type="submit" className="term-btn sm secondary" style={{ height: '26px' }}>
          Run ↵
        </button>
      </form>
    </div>
  );
};
