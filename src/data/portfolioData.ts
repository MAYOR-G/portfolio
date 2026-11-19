import type {
  Project,
  SkillGroup,
  ExperienceItem,
  EducationItem,
  PublicationItem,
  CertificationItem,
  SystemTelemetry,
} from '../types/portfolio';

export const SYSTEM_META: SystemTelemetry = {
  kernelVersion: 'MAYOR~G // AI & ML ENGINEERING',
  uptime: 'Production Ready',
  workMode: 'Remote / Global',
  nodeStatus: 'Available for ML & AI Roles',
  experienceYears: '3+ Years',
  coreFocus: 'LLMs · RAG · MLOps',
};

export const PROFILE_DATA = {
  name: 'Olugbenga Mayowa Emmanuel',
  handle: 'MAYOR~G',
  title: 'Machine Learning Engineer · AI Engineer · Mathematician',
  tagline:
    'Building first-principles language models, hybrid RAG platforms, multimodal AI agents, and production ML pipelines',
  workMode: 'Remote / Global',
  phone: '+234 705 797 7236',
  email: 'mayowaolu16@gmail.com',
  github: 'https://github.com/MAYOR-G',
  githubUsername: 'MAYOR-G',
  linkedin: 'https://www.linkedin.com/in/mayowa-olugbenga-66a691254/',
  portfolioUrl: 'https://portfolio-amber-xi-85.vercel.app/',
  cvUrl: 'https://drive.google.com/file/d/1Xmp2BYpignZeIZVnTqrGY1fixV1YZ81a/view?usp=sharing',
  whatsappUrl: 'https://wa.me/2347057977236',
  bio: `Machine Learning Engineer, AI Engineer, and Mathematician with 3+ years of experience designing, building, and deploying practical AI systems. I combine a strong mathematical foundation with hands-on software engineering to build language models from scratch, retrieval-augmented generation (RAG) platforms, multimodal applications, and end-to-end machine learning pipelines—working across product, engineering, and design teams while mentoring engineers and coaching learners in applied AI.`,
};

export type TechCategory =
  | 'LLMS & GEN-AI'
  | 'CORE ML & DEEP LEARNING'
  | 'VECTOR DBS & RAG'
  | 'MLOPS & BACKEND'
  | 'CLOUD & DATA STORES'
  | 'LANGUAGES & DATA';

export interface TechEcosystemItem {
  id: string;
  name: string;
  category: TechCategory;
  role: string;
  badge: 'Core' | 'Production' | 'Advanced' | 'Specialist';
  highlight?: boolean;
}

export const TECH_ECOSYSTEM_DATA: TechEcosystemItem[] = [
  // Languages & Data
  { id: 'python', name: 'Python', category: 'LANGUAGES & DATA', role: 'Primary language for machine learning, deep learning, RAG systems, and async APIs', badge: 'Core', highlight: true },
  { id: 'sql', name: 'SQL', category: 'LANGUAGES & DATA', role: 'Analytical querying, relational schema design, indexing, and feature extraction', badge: 'Core', highlight: true },
  { id: 'numpy-pandas', name: 'NumPy & Pandas', category: 'LANGUAGES & DATA', role: 'Vectorized matrix computation, first-principles neural math, and tabular data pipelines', badge: 'Core', highlight: true },
  { id: 'typescript-nextjs', name: 'TypeScript, Next.js & React', category: 'LANGUAGES & DATA', role: 'Full-stack AI web applications, streaming interfaces, and interactive user workflows', badge: 'Production', highlight: true },
  { id: 'bash-linux', name: 'Bash & Linux', category: 'LANGUAGES & DATA', role: 'Automation scripting, container runtimes, and reproducible environment management', badge: 'Core' },

  // Core ML & Deep Learning
  { id: 'pytorch', name: 'PyTorch', category: 'CORE ML & DEEP LEARNING', role: 'Transformers, GPT models from scratch, CNNs, RNNs/LSTMs, custom training loops, and SFT', badge: 'Core', highlight: true },
  { id: 'tensorflow-keras', name: 'TensorFlow & Keras', category: 'CORE ML & DEEP LEARNING', role: 'Deep neural network prototyping, computer vision transfer learning, and sequence modeling', badge: 'Core', highlight: true },
  { id: 'scikit-learn', name: 'Scikit-learn', category: 'CORE ML & DEEP LEARNING', role: 'Classification, regression, anomaly detection, preprocessing pipelines, and model evaluation', badge: 'Core', highlight: true },
  { id: 'xgboost', name: 'XGBoost', category: 'CORE ML & DEEP LEARNING', role: 'Gradient-boosted decision trees for tabular classification, churn modeling, and ranking', badge: 'Core', highlight: true },
  { id: 'opencv', name: 'OpenCV', category: 'CORE ML & DEEP LEARNING', role: 'Image preprocessing, frame extraction, and computer vision pipelines', badge: 'Advanced' },
  { id: 'spacy', name: 'spaCy', category: 'CORE ML & DEEP LEARNING', role: 'Linguistic preprocessing, tokenization, and classical NLP extraction workflows', badge: 'Advanced' },

  // LLMs, Generative AI & Agentic Systems
  { id: 'langchain-langgraph', name: 'LangChain & LangGraph', category: 'LLMS & GEN-AI', role: 'Agentic workflows, cyclic state graphs, tool calling, and production RAG orchestration', badge: 'Core', highlight: true },
  { id: 'huggingface', name: 'Hugging Face', category: 'LLMS & GEN-AI', role: 'Open-weight transformers, pretrained checkpoints, tokenizers, and fine-tuning workflows', badge: 'Core', highlight: true },
  { id: 'llm-sft', name: 'LLM Pretraining & Fine-Tuning (SFT)', category: 'LLMS & GEN-AI', role: 'BPE tokenization, causal language modeling, classification fine-tuning, and instruction SFT', badge: 'Core', highlight: true },
  { id: 'gemini', name: 'Google Gemini & Embeddings', category: 'LLMS & GEN-AI', role: 'Multimodal text, vision, and audio reasoning with dense semantic embeddings', badge: 'Production', highlight: true },
  { id: 'whisper-clip', name: 'Whisper, CLIP & BLIP', category: 'LLMS & GEN-AI', role: 'Speech-to-text transcription and vision-language multimodal representations', badge: 'Specialist' },
  { id: 'prompt-eng', name: 'Prompt Engineering & Agents', category: 'LLMS & GEN-AI', role: 'Structured outputs, controlled context injection, and autonomous task automation', badge: 'Production', highlight: true },

  // Vector Databases & Retrieval (RAG)
  { id: 'chromadb', name: 'ChromaDB', category: 'VECTOR DBS & RAG', role: 'Embedding persistence, metadata filtering, and context-aware multimodal document RAG', badge: 'Core', highlight: true },
  { id: 'faiss', name: 'FAISS', category: 'VECTOR DBS & RAG', role: 'Fast dense vector similarity indexing and nearest-neighbor retrieval', badge: 'Core', highlight: true },
  { id: 'pgvector', name: 'pgvector', category: 'VECTOR DBS & RAG', role: 'Vector similarity search co-located with PostgreSQL and Supabase relational schemas', badge: 'Core', highlight: true },
  { id: 'hybrid-bm25', name: 'Hybrid Search, BM25 & Reranking', category: 'VECTOR DBS & RAG', role: 'Dense semantic search fused with BM25 lexical retrieval and cross-encoder reranking', badge: 'Core', highlight: true },

  // MLOps, Serving & Backend Engineering
  { id: 'fastapi-flask', name: 'FastAPI & Flask', category: 'MLOPS & BACKEND', role: 'REST microservices, async StreamingResponse delivery, and ML inference APIs', badge: 'Core', highlight: true },
  { id: 'docker-k8s', name: 'Docker & Kubernetes', category: 'MLOPS & BACKEND', role: 'Containerized model services, reproducible builds, and scalable runtime deployment', badge: 'Core', highlight: true },
  { id: 'mlflow', name: 'MLflow', category: 'MLOPS & BACKEND', role: 'Experiment tracking, parameter logging, model versioning, and evaluation telemetry', badge: 'Core', highlight: true },
  { id: 'github-actions', name: 'GitHub Actions & CI/CD', category: 'MLOPS & BACKEND', role: 'Automated testing, container publishing, and continuous ML deployment pipelines', badge: 'Core', highlight: true },
  { id: 'monitoring', name: 'Model Monitoring & Drift Detection', category: 'MLOPS & BACKEND', role: 'Tracking model behavior, input distribution shifts, and production service reliability', badge: 'Advanced' },
  { id: 'google-workspace', name: 'Gmail & Google Calendar APIs', category: 'MLOPS & BACKEND', role: 'Automated email monitoring agents and calendar scheduling integrations', badge: 'Production' },

  // Cloud & Data Stores
  { id: 'aws', name: 'AWS (S3, ECR, EC2)', category: 'CLOUD & DATA STORES', role: 'Artifact storage, container registries, and cloud compute for ML services', badge: 'Production', highlight: true },
  { id: 'gcp-azure', name: 'GCP & Azure ML', category: 'CLOUD & DATA STORES', role: 'Cloud ML experimentation, model hosting, and managed AI APIs', badge: 'Advanced' },
  { id: 'supabase-postgres', name: 'Supabase & PostgreSQL', category: 'CLOUD & DATA STORES', role: 'Authentication, relational storage, row-level security, and pgvector retrieval', badge: 'Core', highlight: true },
  { id: 'sqlite', name: 'SQLite', category: 'CLOUD & DATA STORES', role: 'Lightweight embedded persistence for local experimentation and service prototyping', badge: 'Core' },
  { id: 'railway-vercel', name: 'Railway & Vercel', category: 'CLOUD & DATA STORES', role: 'Production backend service hosting and full-stack frontend deployment', badge: 'Production', highlight: true },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'llm-from-scratch',
    title: 'Building a Large Language Model (LLM) from Scratch',
    subtitle: 'End-to-end GPT architecture, BPE tokenization, transformer blocks & causal pretraining in PyTorch',
    category: 'LLMS & FINE-TUNING',
    categoryLabel: 'LLMs & From Scratch',
    status: 'OPEN_SOURCE',
    featured: true,
    summary:
      'Complete first-principles PyTorch implementation of a decoder-only LLM spanning tokenization, multi-head self-attention, GPT assembly, and autoregressive pretraining.',
    description:
      'Engineered a full decoder-only Large Language Model from first principles in Python and PyTorch without high-level modeling wrappers—progressing step by step from raw text tokenization and causal self-attention through GPT model assembly and end-to-end pretraining.',
    subProjects: [
      {
        title: 'Data Preparation & Tokenizer',
        description:
          'Text preprocessing pipelines, custom word and byte-pair encoding (BPE) tokenizers, sliding-window input-target loaders, and token + positional embedding layers.',
        url: '',
      },
      {
        title: 'Transformer from Scratch',
        description:
          'Scaled dot-product self-attention, causal attention masking, multi-head attention, layer normalization, GELU feed-forward networks, and residual connections.',
        url: '',
      },
      {
        title: 'GPT Model Architecture from Scratch',
        description:
          'Complete decoder-only GPT model with configurable depth, attention heads, context length, dropout regularization, and autoregressive text generation.',
        url: '',
      },
      {
        title: 'LLM Pretraining from Scratch',
        description:
          'End-to-end causal language modeling training loops with cross-entropy loss tracking, AdamW optimization, temperature & top-k decoding, and pretrained weight loading.',
        url: '',
      },
    ],
    architectureNotes: [
      'Modular PyTorch implementation progressing through 4 core stages: tokenization, attention blocks, GPT architecture, and pretraining',
      'Sliding-window next-token dataset batching paired with learned token and positional embeddings',
      'Causal lower-triangular attention masking preventing future token leakage during parallel training',
      'Autoregressive inference supporting greedy, temperature-scaled, and top-k token sampling',
    ],
    metrics: [
      { label: 'Core Stages', value: '4 Sub-Projects' },
      { label: 'Architecture', value: 'Decoder-Only GPT' },
      { label: 'Framework', value: 'Pure PyTorch' },
    ],
    techStack: ['Python', 'PyTorch', 'BPE Tokenization', 'Multi-Head Attention', 'Transformers', 'Autoregressive Pretraining'],
    githubUrl: 'https://github.com/MAYOR-G/LLM-From-Scarch',
  },
  {
    id: 'minigpt',
    title: 'MiniGPT — Decoder-Only Transformer from First Principles',
    subtitle: 'Minimalist GPT language model written from scratch in ~170 lines of pure PyTorch',
    category: 'LLMS & FINE-TUNING',
    categoryLabel: 'LLMs & From Scratch',
    status: 'OPEN_SOURCE',
    featured: true,
    summary:
      'Transparent, minimalist decoder-only Transformer exposing causal self-attention, Pre-LayerNorm residual blocks, and multinomial generation.',
    description:
      'Built a minimalist decoder-only Transformer language model in pure PyTorch with a custom word-level tokenizer, sliding-window batching, masked multi-head attention, Pre-LayerNorm residual blocks, and multinomial text generation—accompanied by a first-principles technical write-up.',
    architectureNotes: [
      'Custom word-level tokenizer with explicit <END> boundary markers for clear sequence inspection',
      'Modular SelfAttentionHead, MultiHeadAttention, FeedForward, and Pre-LayerNorm Transformer Block',
      'Lower-triangular causal masking (torch.tril) with rolling context window inference',
      'Cross-entropy next-token training loop and probabilistic sampling via torch.multinomial',
    ],
    metrics: [
      { label: 'Attention', value: 'Causal Multi-Head' },
      { label: 'Normalization', value: 'Pre-LayerNorm' },
      { label: 'Sampling', value: 'Multinomial' },
    ],
    techStack: ['Python', 'PyTorch', 'Causal Self-Attention', 'Multi-Head Attention', 'Pre-LayerNorm', 'Autoregressive Sampling'],
    githubUrl: 'https://github.com/MAYOR-G/mini-gpt',
    articleUrl: 'https://mayowaolugbenga.substack.com/p/demystifying-llms-from-first-principles?r=lwi49&utm_campaign=post-expanded-share&utm_medium=web',
  },
  {
    id: 'medbay',
    title: 'End-to-End Medical RAG Agentic Application (MEDBAY)',
    subtitle: 'Full-stack family medical record vault, hybrid-search RAG assistant & calendar automation agent',
    category: 'RAG & MULTIMODAL',
    categoryLabel: 'RAG & Agentic AI',
    status: 'PRODUCTION',
    featured: true,
    summary:
      'Full-stack web application for managing personal and family medical records, AI document summarization, hybrid-search RAG Q&A, and automated doctor appointment booking.',
    description:
      'Built a full-stack medical document web application enabling users to sign up, manage personal and family profiles (spouses and siblings), securely store medical records, and generate structured AI summaries. Includes a personalized hybrid-search RAG assistant and an email-monitoring automation agent that detects medical emails and automatically schedules doctor appointments on Google Calendar.',
    architectureNotes: [
      'User authentication and profile-isolated family account management covering personal, spouse, and sibling health records',
      'Secure medical document upload pipeline with automated AI extraction and structured clinical summaries',
      'Hybrid-search RAG assistant combining semantic embeddings and lexical search over personal health records',
      'Autonomous email-monitoring agent integrated with Gmail and Google Calendar APIs to detect medical notifications and book doctor appointments',
    ],
    metrics: [
      { label: 'Architecture', value: 'Full-Stack Web App' },
      { label: 'Retrieval', value: 'Hybrid-Search RAG' },
      { label: 'Automation', value: 'Gmail + Calendar' },
    ],
    techStack: ['FastAPI', 'Next.js', 'React', 'LangChain', 'LangGraph', 'Hybrid Search', 'Supabase', 'PostgreSQL', 'Gmail API', 'Google Calendar API', 'Docker'],
    githubUrl: 'https://github.com/MAYOR-G/Medbay',
  },
  {
    id: 'omnisense-ai',
    title: 'OmniSense AI — Multimodal Intelligent Analysis System',
    subtitle: 'Cross-modal reasoning across text, vision, and audio streams with document RAG',
    category: 'RAG & MULTIMODAL',
    categoryLabel: 'Multimodal & Agents',
    status: 'OPEN_SOURCE',
    featured: true,
    summary:
      'Multimodal AI agent combining text, vision, and audio reasoning with ChromaDB document RAG and async FastAPI streaming.',
    description:
      'Built a multimodal agent for text, vision, and audio reasoning using Google Gemini, context-aware document RAG, ChromaDB vector embeddings, and asynchronous FastAPI StreamingResponse delivery.',
    architectureNotes: [
      'Google Gemini multimodal reasoning across text documents, visual inputs, and audio streams',
      'Context-aware document retrieval backed by ChromaDB and Google Embeddings',
      'Asynchronous token streaming via FastAPI StreamingResponse for responsive real-time UX',
      'Dockerized backend architecture packaged for portable cloud deployment',
    ],
    metrics: [
      { label: 'Modalities', value: 'Text · Vision · Audio' },
      { label: 'Delivery', value: 'Async Streaming' },
      { label: 'Vector Store', value: 'ChromaDB' },
    ],
    techStack: ['Python', 'Google Gemini', 'ChromaDB', 'Google Embeddings', 'LangChain', 'FastAPI', 'StreamingResponse', 'Docker'],
    githubUrl: 'https://github.com/MAYOR-G/omnisense_ai/tree/main',
    demoUrl: 'https://www.linkedin.com/posts/mayowa-olugbenga-66a691254_artificialintelligence-machinelearning-generativeai-activity-7413191457945313280-sCHH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6_q3IBUskfd35EtZa_ZF3HJI7aVtMGkoo',
    articleUrl: 'https://open.substack.com/pub/mayowaolugbenga/p/omnisense-building-an-end-to-end?r=lwi49&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true',
  },
  {
    id: 'enterprise-rag',
    title: 'Enterprise-Grade RAG System',
    subtitle: 'Citation-aware hybrid semantic + BM25 retrieval with cross-encoder reranking',
    category: 'RAG & MULTIMODAL',
    categoryLabel: 'RAG & Gen-AI',
    status: 'PRODUCTION',
    featured: true,
    summary:
      'Enterprise knowledge assistant combining dense semantic retrieval, BM25 lexical search, reranking, and controlled context injection.',
    description:
      'Built a citation-aware enterprise RAG assistant combining dense semantic search with BM25 lexical retrieval, cross-encoder reranking, context compression, conversational memory, and controlled context injection to reduce hallucinations.',
    architectureNotes: [
      'Hybrid retrieval fusing dense vector search with BM25 lexical scoring for strong recall on exact terms and concepts',
      'Cross-encoder reranking and context compression filtering irrelevant chunks before prompt assembly',
      'Conversational memory paired with controlled context injection and grounded inline citations',
      'Exposed as a containerized FastAPI service ready for enterprise deployment',
    ],
    metrics: [
      { label: 'Retrieval', value: 'Semantic + BM25' },
      { label: 'Precision', value: 'Cross-Encoder Rerank' },
      { label: 'Grounding', value: 'Citation-Aware' },
    ],
    techStack: ['Python', 'LLMs', 'Hybrid Search', 'BM25', 'Cross-Encoder Reranking', 'Vector Databases', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com/MAYOR-G/rag-knowledge-assistant',
    demoUrl: 'https://www.linkedin.com/posts/mayowa-olugbenga-66a691254_ai-machinelearning-rag-activity-7410031647317749761-pM1c?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6_q3IBUskfd35EtZa_ZF3HJI7aVtMGkoo',
  },
  {
    id: 'llm-classification-finetuning',
    title: 'Fine-Tuning an LLM for Text Classification',
    subtitle: 'Adapting a pretrained GPT transformer with a supervised classification head',
    category: 'LLMS & FINE-TUNING',
    categoryLabel: 'LLM Fine-Tuning',
    status: 'OPEN_SOURCE',
    summary:
      'Supervised fine-tuning pipeline adapting a pretrained GPT-style model for sequence classification tasks in PyTorch.',
    description:
      'Adapted a pretrained GPT-style language model for supervised text classification by replacing the language modeling head with a task-specific classification layer, balancing labeled datasets, and fine-tuning transformer layers for downstream evaluation.',
    architectureNotes: [
      'Loaded pretrained GPT transformer weights and swapped the output projection for a classification head',
      'Balanced labeled dataset splits with deterministic tokenization, sequence padding, and truncation',
      'Selectively unfroze final transformer blocks and normalization layers for efficient supervised adaptation',
      'Evaluated classification accuracy and cross-entropy loss across train, validation, and test splits',
    ],
    metrics: [
      { label: 'Method', value: 'Supervised Fine-Tuning' },
      { label: 'Task', value: 'Text Classification' },
      { label: 'Framework', value: 'PyTorch' },
    ],
    techStack: ['Python', 'PyTorch', 'Pretrained GPT Model', 'Supervised Fine-Tuning', 'Classification Head'],
    githubUrl: 'https://github.com/MAYOR-G/Fine-Tuning-an-LLM-for-Text-Classification',
  },
  {
    id: 'llm-instruction-finetuning',
    title: 'Instruction Fine-Tuning an LLM',
    subtitle: 'Supervised fine-tuning (SFT) for natural-language instruction following',
    category: 'LLMS & FINE-TUNING',
    categoryLabel: 'LLM Fine-Tuning',
    status: 'OPEN_SOURCE',
    summary:
      'Instruction fine-tuning workflow turning a base pretrained LLM into an instruction-following assistant using masked loss training.',
    description:
      'Fine-tuned a pretrained LLM to follow natural-language instructions using structured prompt-response datasets, dynamic batch collation with target padding masks, and systematic response evaluation.',
    architectureNotes: [
      'Formatted prompt-response instruction datasets using consistent instruction-input-response templates',
      'Implemented custom dynamic batch collation with ignore-index loss masking on padding tokens',
      'Trained with AdamW optimization and validation loss tracking to prevent overfitting',
      'Evaluated generated responses qualitatively and systematically across held-out instruction prompts',
    ],
    metrics: [
      { label: 'Method', value: 'Instruction SFT' },
      { label: 'Batching', value: 'Dynamic Collation' },
      { label: 'Loss', value: 'Masked Cross-Entropy' },
    ],
    techStack: ['Python', 'PyTorch', 'Supervised Fine-Tuning (SFT)', 'Prompt Formatting', 'Loss Masking'],
    githubUrl: 'https://github.com/MAYOR-G/Instruction-Fine-Tuning-an-LLM',
  },
  {
    id: 'customer-churn-ml-system',
    title: 'End-to-End Customer Churn Prediction ML System',
    subtitle: 'Production classification pipeline with MLflow, FastAPI, Docker & AWS',
    category: 'CORE ML & MLOPS',
    categoryLabel: 'MLOps & Classification',
    status: 'PRODUCTION',
    featured: true,
    summary:
      'End-to-end customer churn prediction pipeline covering feature engineering, experiment tracking, containerized FastAPI serving, and AWS deployment.',
    description:
      'Built an end-to-end classification pipeline predicting customer churn across data ingestion, validation, feature engineering, model training, hyperparameter tuning, and metric-driven evaluation. Integrated MLflow experiment tracking and model versioning, served predictions through a Dockerized FastAPI service, and automated deployment workflows on AWS.',
    architectureNotes: [
      'Modular training pipeline covering ingestion, schema validation, feature transformations, and hyperparameter tuning',
      'MLflow tracking for comparing classification models (Scikit-learn & XGBoost), metrics, and versioned artifacts',
      'Dockerized FastAPI inference service exposing validated real-time churn prediction endpoints',
      'Automated cloud deployment workflows integrating AWS (S3, ECR, EC2) and GitHub Actions CI/CD',
    ],
    metrics: [
      { label: 'Task', value: 'Churn Classification' },
      { label: 'Tracking', value: 'MLflow Registry' },
      { label: 'Serving', value: 'FastAPI · Docker · AWS' },
    ],
    techStack: ['Python', 'Scikit-learn', 'XGBoost', 'MLflow', 'FastAPI', 'Docker', 'AWS (S3, ECR, EC2)', 'GitHub Actions'],
    githubUrl: 'https://github.com/MAYOR-G/End-to-End-ML-Churn-model-with-FastAPI-MLFlow-Docker-AWS',
  },
  {
    id: 'neural-net-from-scratch',
    title: 'Neural Network Implemented from Scratch',
    subtitle: 'Side-by-side first-principles Python/NumPy & PyTorch neural network implementations',
    category: 'CORE ML & MLOPS',
    categoryLabel: 'First-Principles ML',
    status: 'OPEN_SOURCE',
    summary:
      'Feedforward neural networks built from first principles in Python/NumPy and mirrored in PyTorch for direct comparison.',
    description:
      'Implemented feedforward neural networks from first principles in Python and NumPy (forward propagation, loss functions, manual backpropagation, and gradient descent), and mirrored the architecture in PyTorch to benchmark custom math against autograd.',
    architectureNotes: [
      'Pure Python & NumPy implementation coding matrix forward passes, activation derivatives, and manual chain-rule backpropagation',
      'Explicit loss computation and gradient descent parameter updates without autograd abstractions',
      'Parallel PyTorch implementation validating gradient behavior, convergence speed, and accuracy',
    ],
    metrics: [
      { label: 'Engine 1', value: 'Python / NumPy' },
      { label: 'Engine 2', value: 'PyTorch Autograd' },
      { label: 'Focus', value: 'Manual Backprop' },
    ],
    techStack: ['Python', 'NumPy', 'PyTorch', 'Linear Algebra', 'Calculus', 'Backpropagation'],
    githubUrl: 'https://github.com/MAYOR-G/NEURAL-NET',
    extraLinks: [
      { label: 'Python Version', url: '' },
      { label: 'PyTorch Version', url: '' },
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Generative AI, LLMs & Retrieval (RAG)',
    tag: 'GEN-AI & RAG',
    skills: [
      {
        name: 'RAG Architectures & Hybrid Search',
        level: 96,
        badge: 'Core',
        description: 'Dense embeddings + BM25 lexical search, cross-encoder reranking, context compression, and citation grounding',
      },
      {
        name: 'LLM Architecture, Pretraining & Fine-Tuning (SFT)',
        level: 94,
        badge: 'Core',
        description: 'BPE tokenization, multi-head self-attention, GPT from scratch, classification & instruction fine-tuning',
      },
      {
        name: 'Agentic Orchestration (LangChain & LangGraph)',
        level: 95,
        badge: 'Core',
        description: 'Autonomous agents, tool calling, email-monitoring & calendar workflows, and conversational memory',
      },
      {
        name: 'Vector Databases (ChromaDB, FAISS, pgvector)',
        level: 94,
        badge: 'Core',
        description: 'High-dimensional similarity search, metadata filtering, and relational + vector co-location',
      },
      {
        name: 'Multimodal AI (Google Gemini, Whisper, CLIP, BLIP)',
        level: 92,
        badge: 'Production',
        description: 'Cross-modal text, vision, and audio reasoning paired with asynchronous streaming delivery',
      },
    ],
  },
  {
    category: 'Machine Learning, Deep Learning & Mathematics',
    tag: 'CORE ML & DL',
    skills: [
      {
        name: 'Mathematical Foundations (B.Sc. Mathematics)',
        level: 97,
        badge: 'Specialist',
        description: 'Linear algebra, multivariable calculus, probability & statistics, differential equations, numerical methods',
      },
      {
        name: 'Deep Learning (PyTorch, TensorFlow, Keras)',
        level: 95,
        badge: 'Core',
        description: 'Neural networks from scratch, Transformers, CNNs, transfer learning, RNNs/LSTMs, VAEs, and GANs',
      },
      {
        name: 'Classical ML & Tabular Systems (Scikit-learn, XGBoost)',
        level: 95,
        badge: 'Core',
        description: 'Classification, regression, time series, anomaly detection, feature engineering, and hyperparameter tuning',
      },
      {
        name: 'NLP & Computer Vision (Hugging Face, OpenCV, spaCy)',
        level: 91,
        badge: 'Advanced',
        description: 'Tokenization, document OCR/parsing, text classification, and image classification pipelines',
      },
      {
        name: 'Scientific Data Stack (Python, SQL, Pandas, NumPy)',
        level: 96,
        badge: 'Core',
        description: 'Vectorized matrix computation, data validation, exploratory analysis, and relational querying',
      },
    ],
  },
  {
    category: 'MLOps, Backend & Cloud Infrastructure',
    tag: 'MLOPS & INFRA',
    skills: [
      {
        name: 'Production APIs & Web Apps (FastAPI, Flask, Next.js, React)',
        level: 95,
        badge: 'Core',
        description: 'REST & streaming microservices, full-stack AI interfaces, and Google Workspace API integrations',
      },
      {
        name: 'Containers & CI/CD (Docker, Kubernetes, GitHub Actions)',
        level: 92,
        badge: 'Core',
        description: 'Containerized ML services, automated test/build pipelines, and reproducible deployments',
      },
      {
        name: 'Experiment Tracking & Monitoring (MLflow, Drift Detection)',
        level: 91,
        badge: 'Advanced',
        description: 'Model versioning, experiment comparison, performance monitoring, and data drift detection',
      },
      {
        name: 'Cloud Platforms (AWS, GCP, Azure ML, Railway, Vercel)',
        level: 90,
        badge: 'Production',
        description: 'AWS S3/ECR/EC2 workflows, managed cloud ML services, and full-stack production hosting',
      },
      {
        name: 'Databases & Persistence (Supabase, PostgreSQL, SQLite)',
        level: 93,
        badge: 'Core',
        description: 'Auth, row-level security, relational modeling, and vector extensions for AI apps',
      },
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'thinkup',
    company: 'Thinkup Innovation Hub',
    role: 'Machine Learning, AI Engineering & AI Automation Coach',
    type: 'Part-time',
    period: 'Sep 2026 – Present',
    workMode: 'On-site',
    bullets: [
      'Teach and coach learners in machine learning concepts, AI engineering, practical project work, and AI automation.',
      'Guide students through hands-on model implementation, debugging, and end-to-end project delivery, connecting mathematical and ML principles with real-world software engineering.',
    ],
    skillsUsed: ['Python', 'Machine Learning', 'Deep Learning', 'AI Engineering', 'AI Automation', 'Mentorship'],
  },
  {
    id: 'fekitech',
    company: 'FEKITECH LTD',
    role: 'ML/AI Engineer & Software Developer',
    type: 'Full-time',
    period: 'Jun 2026 – Present',
    workMode: 'Remote',
    bullets: [
      'Contribute to AI/ML engineering and application development, integrating AI capabilities into backend software and user-facing product features.',
      'Support software integration, API development, and deployment across engineering workstreams for product delivery.',
    ],
    skillsUsed: ['Python', 'FastAPI', 'PyTorch', 'LLMs', 'Software Engineering', 'Docker', 'REST APIs'],
  },
  {
    id: 'wiltda-group',
    company: 'WILTDA Group',
    role: 'AI/Machine Learning Engineer',
    type: 'Full-time',
    period: 'Aug 2025 – Present',
    workMode: 'Remote',
    bullets: [
      'Designed and deployed LangChain-based RAG systems for document querying, knowledge retrieval, internal reports, technical requirements documents (TRDs), and medical records using embeddings and vector databases.',
      'Built KEEP, a Medical Document Intelligence Platform for uploading, storing, summarizing, and querying personal medical records through an AI-powered chatbot.',
      'Developed FastAPI backend services and integrated AI workflows with frontend features, Supabase, PostgreSQL, Docker, AWS, Railway, and Vercel for production full-stack systems.',
      'Implemented document summarization and company-level document intelligence tools that convert uploaded medical and business documents into structured, queryable insights.',
      'Led and mentored junior engineers and interns, trained AI Engineers, Data Analysts, and Data Scientists on practical AI/ML workflows, and coordinated delivery with product, frontend, backend, and UI/UX teams.',
      'Contributed to applied AI/ML research on retrieval methods and production-grade AI architecture, and co-authored Retrieval-Augmented Generation (RAG) as a Solution to Data Fragmentation in Africa (DOI: 10.5281/zenodo.20828278).',
    ],
    skillsUsed: ['Python', 'LangChain', 'FastAPI', 'Vector Databases', 'Supabase', 'PostgreSQL', 'Docker', 'AWS', 'Railway', 'Vercel'],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'wqu-dl-lab',
    institution: 'WorldQuant University',
    degree: 'Deep Learning Fundamentals Lab',
    period: '2026 – Present (In Progress)',
    mode: 'Online',
    details:
      'Project-based PyTorch curriculum spanning 12 hands-on projects on real-world healthcare, science, and engineering datasets.',
    courses: [
      'Neural Networks & Regression Modeling in PyTorch',
      'Protein & Image Classification with CNNs and Transfer Learning',
      'RNN / LSTM Sequence Modeling & Forecasting',
      'Autoencoders, Variational Models, GANs & Responsible AI',
    ],
  },
  {
    id: 'fupre-math',
    institution: 'Federal University of Petroleum Resources Effurun (FUPRE)',
    degree: 'B.Sc. Mathematics',
    period: '2019 – 2024',
    details:
      'Rigorous training in mathematical proof, linear operators, probability spaces, and numerical optimization supporting first-principles machine learning.',
    courses: [
      'Linear Algebra & Matrix Computations',
      'Calculus & Differential Equations',
      'Probability & Mathematical Statistics',
      'Numerical Methods & Optimization',
    ],
  },
];

export const PUBLICATION_DATA: PublicationItem = {
  title: 'Retrieval-Augmented Generation (RAG) as a Solution to Data Fragmentation in Africa',
  authors: 'Olugbenga Mayowa Emmanuel, WILTDA Research Team',
  venue: 'Zenodo Open Research Repository',
  doi: '10.5281/zenodo.20828278',
  doiUrl: 'https://doi.org/10.5281/zenodo.20828278',
  abstract:
    'Presents an AI-based architectural framework addressing fragmented knowledge systems across healthcare, institutional, and technological domains by combining hybrid dense-sparse retrieval, domain embeddings, and verifiable source attribution.',
  tags: ['RAG', 'Hybrid Retrieval', 'Knowledge Systems', 'Clinical NLP', 'Vector Databases'],
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'datacamp-llm-concepts',
    title: 'Large Language Models (LLMs) Concepts',
    issuer: 'DataCamp',
    credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/9f2449fa6e797628c8418429c0d6a7389786841e',
    status: 'Verified',
    description:
      'Core foundations of large language models, transformer architectures, pretraining, fine-tuning strategies, and ethical deployment considerations.',
  },
  {
    id: 'datacamp-llmops-concepts',
    title: 'LLMOps Concepts',
    issuer: 'DataCamp',
    credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/685943c50553e0e70dbbce6687e07c4d39e8b3ea',
    status: 'Verified',
    description:
      'Operationalizing LLM applications in production: lifecycle management, evaluation pipelines, latency/cost optimization, and monitoring.',
  },
  {
    id: 'datacamp-rag-langchain',
    title: 'Retrieval Augmented Generation (RAG) with LangChain',
    issuer: 'DataCamp',
    credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/981e3e1c076f723105a9b504c685b7a3cab39cc8',
    status: 'Verified',
    description:
      'End-to-end RAG pipelines with LangChain covering document loading, splitting, embeddings, vector stores, retrieval tuning, and response evaluation.',
  },
  {
    id: 'datacamp-developing-llm-langchain',
    title: 'Developing LLM Applications with LangChain',
    issuer: 'DataCamp',
    credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/a16c94e652046ed2d199f4c398e3c0a4ab478dd8',
    status: 'Verified',
    description:
      'Building production LLM applications with LangChain chains, prompt templates, conversational memory, tool use, and structured outputs.',
  },
  {
    id: 'ai-engineer-oneroadmap',
    title: 'AI Engineer Certification',
    issuer: 'OneRoadMap',
    credentialUrl: 'https://i.ibb.co/PZKXRxLX/AI-Engineer-Certificate.jpg',
    imageUrl: 'https://i.ibb.co/PZKXRxLX/AI-Engineer-Certificate.jpg',
    status: 'Verified',
    description:
      'Comprehensive AI engineering certification covering neural networks, LLM pipelines, and production AI deployment.',
  },
  {
    id: 'ai-data-science-oneroadmap',
    title: 'AI & Data Science Certification',
    issuer: 'OneRoadMap',
    credentialUrl: 'https://ibb.co/pvMdQzmd',
    status: 'Verified',
    description:
      'Certification in statistical modeling, exploratory data analysis, feature engineering, and end-to-end machine learning pipelines.',
  },
  {
    id: 'diploma-ai-uniathena',
    title: 'Diploma in Artificial Intelligence',
    issuer: 'UniAthena',
    credentialUrl: 'https://ibb.co/gZ2rjFM3',
    status: 'Verified',
    description:
      'Diploma covering foundational and applied artificial intelligence, machine learning algorithms, and deep learning architectures.',
  },
  {
    id: 'ml-specialization-google',
    title: 'Machine Learning Specialization',
    issuer: 'Google',
    status: 'Verified',
    description:
      'Specialization in supervised learning, unsupervised learning, recommender systems, and core machine learning workflows.',
  },
  {
    id: 'ml-concepts-microsoft',
    title: 'Microsoft ML Concepts',
    issuer: 'Microsoft',
    credentialUrl: 'https://i.ibb.co/5hNjGHZC/ml-microsoft.jpg',
    imageUrl: 'https://i.ibb.co/5hNjGHZC/ml-microsoft.jpg',
    status: 'Verified',
    description:
      'Certification in machine learning system design, cloud ML workflows, model evaluation, and responsible AI practices.',
  },
  {
    id: 'kaggle-python',
    title: 'Python',
    issuer: 'Kaggle',
    credentialUrl: 'https://i.ibb.co/LDv5Qx89/Mayowa-Olugbenga-Python.png',
    imageUrl: 'https://i.ibb.co/LDv5Qx89/Mayowa-Olugbenga-Python.png',
    status: 'Verified',
    description: 'Practical Python programming certification for data science and machine learning workflows.',
  },
  {
    id: 'kaggle-advanced-sql',
    title: 'Advanced SQL',
    issuer: 'Kaggle',
    credentialUrl: 'https://i.ibb.co/0wKMjHz/Mayowa-Olugbenga-Advanced-SQL.png',
    imageUrl: 'https://i.ibb.co/0wKMjHz/Mayowa-Olugbenga-Advanced-SQL.png',
    status: 'Verified',
    description: 'Advanced relational SQL querying, analytic functions, joins, and query optimization.',
  },
  {
    id: 'kaggle-deep-learning',
    title: 'Intro to Deep Learning',
    issuer: 'Kaggle',
    credentialUrl: 'https://i.ibb.co/PZLFfvFq/Mayowa-Olugbenga-Intro-to-Deep-Learning.png',
    imageUrl: 'https://i.ibb.co/PZLFfvFq/Mayowa-Olugbenga-Intro-to-Deep-Learning.png',
    status: 'Verified',
    description: 'Foundational deep learning concepts including neural network layers, stochastic gradient descent, and regularization.',
  },
];
