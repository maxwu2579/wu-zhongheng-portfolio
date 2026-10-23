export const ragCapabilities = [
  "PDF / TXT / Markdown 解析与切分",
  "本地 Embedding + ChromaDB",
  "BM25 / Keyword + Vector Hybrid Retrieval",
  "RRF Fusion 与 Cross-Encoder Reranking",
  "Query Rewrite 与 Grounded Answer",
  "文件名、页码 Citation",
  "证据不足时拒绝编造",
  "Langfuse Trace 与 Bad Case Analysis",
  "离线 Evaluation / Benchmark",
  "ONNX INT8 推理实验与自动化测试",
];

export const jarvisCapabilities = [
  "Natural Language → Structured Task",
  "Human-in-the-loop Confirmation",
  "Persistent Task Execution",
  "Queue / Worker 与 Retry / Recovery",
  "Idempotency 与 Audit",
  "Persistent Memory",
  "Microsoft Graph integration",
  "Document RAG 与 Environment Isolation",
];

export const skills = [
  {
    title: "AI / LLM",
    description: "围绕检索质量、可验证回答与 Agent 工程化构建应用。",
    items: ["RAG", "Embedding", "Vector Search", "Reranking", "Agent", "Tool / Function Calling", "Structured Output", "Langfuse", "ONNX"],
  },
  {
    title: "Backend",
    description: "从 API、异步任务到数据库迁移与可靠执行。",
    items: ["Python", "FastAPI", "Flask", "REST API", "SSE", "asyncio", "SQLAlchemy", "Alembic"],
  },
  {
    title: "Frontend",
    description: "为 AI 系统构建清晰、可操作的产品界面。",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Vue 3"],
  },
  {
    title: "Data / Engineering",
    description: "覆盖数据存储、服务网关、容器化与外部集成。",
    items: ["PostgreSQL", "MySQL", "SQLite", "ChromaDB", "Docker", "APISIX", "Git", "GitHub", "Microsoft Graph"],
  },
  {
    title: "Programming",
    description: "以 Python 与 TypeScript 为主的多语言开发能力。",
    items: ["Python", "TypeScript", "JavaScript", "C#", "SQL", "Java", "C++"],
  },
  {
    title: "证书 / 语言",
    description: "能够在中英文环境中学习、协作与交付。",
    items: ["AWS Cloud Practitioner (2024)", "中文：母语", "英语：流利"],
  },
];

export const navigation = [
  { id: "projects", label: "项目" },
  { id: "enterprise", label: "企业工程" },
  { id: "experience", label: "实习经历" },
  { id: "skills", label: "技能" },
  { id: "education", label: "教育背景" },
  { id: "contact", label: "联系方式" },
];
