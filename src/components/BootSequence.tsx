import React, { useState, useEffect, useCallback } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { AsciiBanner } from './AsciiArt';
import { playClick, playBootSound } from '../utils/audio';

interface BootSequenceProps {
  onComplete: () => void;
}

const EXECUTION_STEPS = [
  {
    cmd: 'import torch, numpy as np, fastapi',
    status: 'LOADED',
    detail: 'PyTorch · CUDA · NumPy · FastAPI Async Runtime',
    delay: 180,
  },
  {
    cmd: 'from mayorg.rag import HybridRetriever, CrossEncoderReranker',
    status: 'READY',
    detail: 'ChromaDB · FAISS · pgvector · BM25 · LangChain · LangGraph',
    delay: 200,
  },
  {
    cmd: 'from mayorg.llm import GPTFromScratch, MiniGPT, InstructionSFT',
    status: 'VERIFIED',
    detail: 'BPE Tokenization · Causal Multi-Head Attention · Pretraining · Fine-Tuning',
    delay: 200,
  },
  {
    cmd: 'from mayorg.mlops import ChurnPipeline, ModelRegistry',
    status: 'READY',
    detail: 'Scikit-learn · XGBoost · MLflow · Docker · AWS · GitHub Actions',
    delay: 220,
  },
  {
    cmd: 'mayorg.mount_portfolio(host="workstation", mode="interactive")',
    status: 'ONLINE',
    detail: 'Launching Olugbenga Mayowa Emmanuel (MAYOR~G) Portfolio...',
    delay: 260,
  },
];

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [exiting, setExiting] = useState<boolean>(false);

  const handleFinish = useCallback(() => {
    if (exiting) return;
    setExiting(true);
    playBootSound();
    setTimeout(() => {
      onComplete();
    }, 220);
  }, [exiting, onComplete]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        e.preventDefault();
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFinish]);

  useEffect(() => {
    if (stepIndex < EXECUTION_STEPS.length) {
      const timer = setTimeout(() => {
        playClick();
        setStepIndex((prev) => prev + 1);
      }, EXECUTION_STEPS[stepIndex].delay);
      return () => clearTimeout(timer);
    } else {
      const doneTimer = setTimeout(() => {
        handleFinish();
      }, 550);
      return () => clearTimeout(doneTimer);
    }
  }, [stepIndex, handleFinish]);

  const progressPercent = Math.min(
    100,
    Math.round((stepIndex / EXECUTION_STEPS.length) * 100)
  );
  const totalTicks = 28;
  const filledTicks = Math.round((progressPercent / 100) * totalTicks);
  const asciiBar = `[${'█'.repeat(filledTicks)}${'░'.repeat(
    Math.max(0, totalTicks - filledTicks)
  )}] ${String(progressPercent).padStart(3, ' ')}%`;

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '24px 16px',
        maxWidth: '880px',
        margin: '0 auto',
        width: '100%',
        opacity: exiting ? 0 : 1,
        transform: exiting ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'opacity 200ms var(--ease-out), transform 200ms var(--ease-out)',
      }}
    >
      {/* Top Identity Header directly on the canvas */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          gap: '12px',
          paddingBottom: '16px',
          marginBottom: '20px',
          borderBottom: '1px solid var(--color-border-strong)',
        }}
      >
        <div>
          <div style={{ fontSize: '11px', color: 'var(--color-primary)', fontWeight: 600 }}>
            $ python -m mayorg.portfolio --init
          </div>
          <div
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginTop: '4px',
            }}
          >
            {PROFILE_DATA.name} <span style={{ color: 'var(--color-primary)' }}>({PROFILE_DATA.handle})</span>
          </div>
          <div style={{ fontSize: '12.5px', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
            {PROFILE_DATA.title}
          </div>
        </div>

        <button
          type="button"
          onClick={handleFinish}
          className="term-btn sm"
        >
          <span>ENTER PORTFOLIO</span>
          <span className="term-keycap">↵</span>
        </button>
      </div>

      {/* Main Terminal Programming Preview Frame */}
      <div className="term-window">
        <div className="term-titlebar inverted">
          <span className="term-titlebar-path">
            <span className="term-titlebar-dot" />
            <span>~/mayorg/runtime/init.py</span>
          </span>
          <span className="tabular-nums" style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>
            {progressPercent < 100 ? 'INITIALIZING ENVIRONMENT...' : 'RUNTIME READY'}
          </span>
        </div>

        <div
          style={{
            padding: '20px 24px',
            background: 'var(--color-bg-deep)',
            borderBottom: '1px solid var(--color-border)',
            overflowX: 'auto',
          }}
        >
          <AsciiBanner />
        </div>

        {/* Code & Module Execution Stream */}
        <div
          style={{
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            minHeight: '240px',
            background: 'var(--color-surface)',
          }}
        >
          {EXECUTION_STEPS.slice(0, Math.min(stepIndex + 1, EXECUTION_STEPS.length)).map(
            (item, idx) => {
              const isDone = idx < stepIndex;
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    paddingLeft: '12px',
                    borderLeft: `2px solid ${
                      isDone ? 'var(--color-primary)' : 'var(--color-secondary)'
                    }`,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '12px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <code
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12.5px',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      <span style={{ color: 'var(--color-primary)' }}>&gt;&gt;&gt;</span> {item.cmd}
                      {!isDone && <span className="cursor-blink" />}
                    </code>
                    <span
                      className={`term-badge ${isDone ? 'accent' : 'amber'}`}
                      style={{ height: '18px', fontSize: '10px' }}
                    >
                      {isDone ? item.status : 'RUNNING'}
                    </span>
                  </div>
                  <div style={{ fontSize: '11.5px', color: 'var(--color-text-dim)' }}>
                    # {item.detail}
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* Progress Bar Footer */}
        <div
          style={{
            padding: '12px 24px',
            borderTop: '1px solid var(--color-border)',
            background: 'var(--color-bg-deep)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div className="tabular-nums" style={{ fontSize: '12px', color: 'var(--color-primary)' }}>
            {asciiBar}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--color-text-dim)' }}>
            Press <span style={{ color: 'var(--color-text-secondary)' }}>Enter</span> or{' '}
            <span style={{ color: 'var(--color-text-secondary)' }}>Esc</span> to skip preview
          </div>
        </div>
      </div>
    </div>
  );
};
