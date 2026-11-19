import React from 'react';

export const ASCII_BANNER = `
 ███╗   ███╗ █████╗ ██╗   ██╗ ██████╗ ██████╗          ██████╗ 
 ████╗ ████║██╔══██╗╚██╗ ██╔╝██╔═══██╗██╔══██╗ ███╗   ██╔════╝ 
 ██╔████╔██║███████║ ╚████╔╝ ██║   ██║██████╔╝██╔██╗██╗██║  ███╗
 ██║╚██╔╝██║██╔══██║  ╚██╔╝  ██║   ██║██╔══██╗╚═╝╚███╔╝██║   ██║
 ██║ ╚═╝ ██║██║  ██║   ██║   ╚██████╔╝██║  ██║    ╚══╝ ╚██████╔╝
 ╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝          ╚═════╝ 
 >> SYSTEM ROLE: MACHINE LEARNING & AI ENGINEER | GENERATIVE AI & MLOPS <<
`;

export const ASCII_SYSTEM_BOX = `
+----------------------------------------------------------------------------+
| [HOST]: MAYOR~G | [STATUS]: ONLINE | [KERNEL]: MAYOR~G v2.4.0-STABLE       |
| [CORE]: RETRIEVAL-AUGMENTED GENERATION, MULTIMODAL AGENTS, END-TO-END MLOPS|
+----------------------------------------------------------------------------+
`;

export const ASCII_RAG_PIPELINE = `
  [ RAW UNSTRUCTURED DOCS ]
            │
            ▼
  [ CHUNK & NORMALIZATION ] ───► [ BIOMED / DOMAIN EMBEDDINGS ]
                                            │
                                            ▼
  [ HYBRID RETRIEVAL ] ◄───────────────── [ CHROMADB / FAISS / BM25 ]
            │
            ▼
  [ CROSS-ENCODER RERANKING ] ───► [ TOP-K RELEVANCE CONTEXT ]
                                            │
                                            ▼
                               [ GEMINI / LLM REASONING ]
                                            │
                                            ▼
                           [ VERIFIED CITATION STREAM (SSE) ]
`;

/**
 * Generates an authentic monospaced ASCII progress bar
 * Example: [||||||||||||||....] 85%
 */
export function renderAsciiBar(percent: number, totalChars = 20): string {
  const clamped = Math.max(0, Math.min(100, percent));
  const filledCount = Math.round((clamped / 100) * totalChars);
  const emptyCount = totalChars - filledCount;
  const bar = '|'.repeat(filledCount) + '.'.repeat(emptyCount);
  return `[${bar}] ${clamped.toString().padStart(3, ' ')}%`;
}

interface AsciiBannerProps {
  className?: string;
}

export const AsciiBanner: React.FC<AsciiBannerProps> = ({ className = '' }) => {
  return (
    <pre className={`ascii-banner ${className}`} aria-label="MAYOR~G ASCII Banner">
      {ASCII_BANNER}
    </pre>
  );
};
