# MAYOR~G // TERMINAL PORTFOLIO

> **Olugbenga Mayowa Emmanuel (MAYOR~G)**  
> **Machine Learning Engineer · AI Engineer · Generative AI & MLOps**  
> [GitHub](https://github.com/MAYOR-G) · [LinkedIn](https://www.linkedin.com/in/mayowa-olugbenga-66a691254/) · [Portfolio](https://mayor-g.github.io/)

A precision **Terminal CLI / TUI** web portfolio built with React, TypeScript, Vite, and WebGPU/Canvas visualizers. Engineered to showcase first-principles neural architectures, hybrid retrieval-augmented generation (RAG) systems, multimodal AI agents, and production MLOps pipelines.

---

## Key Features & Visual Architecture

- **Terminal Programming Preview (`BootSequence.tsx`)**: An introductory terminal runtime preview that loads Python/ML modules, verifies production benchmarks (`92.0%` RAG precision, `500+ req/s` concurrency, `<200ms` latency, `R² = 0.94`), and smoothly transitions into the main portfolio workstation.
- **Open Editorial-Terminal Layout**: Sections, summaries, career timelines, and headers sit directly on the canvas separated by crisp `1px` hairlines without unnecessary nested boxes.
- **Interactive GPU & Neural Visuals**:
  - **ShapeWaves Compute Shader (`ShapeWaves.tsx`)**: Interactive WebGPU wave-field matched dynamically to the active terminal theme (`Emerald`, `Amber`, `Cyan`).
  - **Live Neural Network Topology (`NeuralCanvas.tsx`)**: Interactive 5-layer neural graph with skip-attention and dense forward-pass pulse simulation.
- **Credential Viewer Session (`CertificateModal.tsx`)**: Interactive modal inspector for verified AI, ML, and Deep Learning certifications.
- **Interactive CLI Shell (`InteractiveCliDrawer.tsx`)**: Slide-up terminal shell accessible via `~` or `` ` `` with tab autocomplete, command history, and direct commands (`help`, `whoami`, `projects`, `project <id>`, `skills`, `experience`, `research`, `contact`, `theme <green|amber|cyan>`, `sudo hire`, `reboot`).

---

## Project Structure

```text
portfolio/
├── index.html                        # Metadata, JetBrains Mono font & terminal icon
├── package.json                      # Dependencies & build scripts
├── src/
│   ├── main.tsx                      # React entry point
│   ├── App.tsx                       # Root state, preview sequence, navigation & footer
│   ├── types/
│   │   └── portfolio.ts              # TypeScript interfaces
│   ├── data/
│   │   └── portfolioData.ts          # Projects, comprehensive AI/ML tech stack, CV data
│   ├── styles/
│   │   └── terminal.css              # Theme tokens, hairline grid & TUI components
│   ├── utils/
│   │   └── audio.ts                  # Web Audio API tactile sound synthesizer
│   └── components/
│       ├── BootSequence.tsx          # Terminal programming preview screen
│       ├── TerminalNavbar.tsx        # Status strip, theme switcher & keyboard tabs
│       ├── HeroPane.tsx              # Open identity layout, telemetry & GPU visuals
│       ├── NeuralCanvas.tsx          # Interactive neural network graph
│       ├── ShapeWaves.tsx            # WebGPU interactive shader field
│       ├── TechEcosystem.tsx         # Filterable AI, ML, RAG & MLOps tech stack
│       ├── ProjectsPane.tsx          # Project showcase with expandable architecture specs
│       ├── SkillsPane.tsx            # Core capability meters & full stack index
│       ├── ExperiencePane.tsx        # Open career log, B.Sc. Math & credential viewer
│       ├── CertificateModal.tsx      # Credential viewer modal
│       ├── ResearchPane.tsx          # Zenodo RAG publication, ASCII pipeline & BibTeX
│       ├── ContactPane.tsx           # Direct contact links & message console
│       ├── InteractiveCliDrawer.tsx  # Interactive ZSH-style command shell
│       ├── AsciiArt.tsx              # ASCII wordmark & RAG topology diagram
│       └── CrtOverlay.tsx            # Subtle scanline & vignette overlay
```

---

## Getting Started

```bash
cd portfolio
npm install
npm run dev
```

Build for production:

```bash
npm run build
```
