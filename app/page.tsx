import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ArchitectureViewer } from "@/components/ArchitectureViewer";
import { Navbar } from "@/components/Navbar";
import { RevealObserver } from "@/components/RevealObserver";
import { ScreenshotFigure } from "@/components/ScreenshotFigure";
import { SectionHeading } from "@/components/SectionHeading";
import { jarvisCapabilities, ragCapabilities, skills } from "./data";

const externalProps = { target: "_blank", rel: "noopener noreferrer" } as const;

function GithubMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5 .1 3.8.5 3.8.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
      <path d="M8 19c-3 .9-3-1.5-4-2" />
    </svg>
  );
}

function Tag({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "teal" | "violet" | "neutral" }) {
  return <span className={`tag tag-${tone}`}>{children}</span>;
}

function CapabilityList({ items }: { items: string[] }) {
  return (
    <ul className="capability-list">
      {items.map((item) => (
        <li key={item}><CheckCircle2 size={17} aria-hidden="true" />{item}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <RevealObserver />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy reveal is-visible">
            <div className="availability"><span />2027 届 · AI 应用研发</div>
            <p className="hero-kicker">WU ZHONGHENG / 吴忠衡</p>
            <h1>
              把大模型能力，
              <span>做成可验证的系统。</span>
            </h1>
            <p className="hero-role">AI 应用研发 / Agent / AI Backend</p>
            <p className="hero-summary">
              信息科技本科生，主要方向为 AI 应用开发、RAG、Agent 与后端工程。关注大模型能力在真实业务中的落地，以及检索、评测、可观测性与 Agent 工程化。
            </p>
            <div className="hero-meta">
              <span>Taylor&apos;s University</span>
              <i aria-hidden="true" />
              <span>信息科技学士</span>
              <i aria-hidden="true" />
              <span>预计 2027.04 毕业</span>
            </div>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">查看项目 <ArrowDown size={17} aria-hidden="true" /></a>
              <a className="secondary-button" href="https://github.com/maxwu2579" {...externalProps}><GithubMark size={17} />GitHub</a>
              <a className="text-button" href="/resume/wu-zhongheng-resume.pdf" download><Download size={17} aria-hidden="true" />下载简历</a>
            </div>
            <div className="hero-contact">
              <a href="mailto:2579561724@qq.com"><Mail size={16} aria-hidden="true" />2579561724@qq.com</a>
              <a href="https://github.com/maxwu2579" {...externalProps}><GithubMark size={16} />github.com/maxwu2579</a>
            </div>
          </div>

          <div className="hero-system reveal is-visible" aria-label="技术方向概览">
            <div className="system-topbar"><span /><span /><span /><em>AI APPLICATION SYSTEM</em></div>
            <div className="system-body">
              <div className="signal-card signal-input">
                <span>01 / INPUT</span>
                <strong>Documents & Intent</strong>
                <p>真实文档、用户问题与业务约束</p>
              </div>
              <div className="system-line"><span>retrieve</span><i /></div>
              <div className="signal-card signal-core">
                <span>02 / CORE</span>
                <strong>RAG + Agent</strong>
                <p>Hybrid Retrieval · Rerank · Tools</p>
                <div className="core-metrics"><b>Recall@5</b><strong>21/21</strong><em>BEST OFFLINE</em></div>
              </div>
              <div className="system-line"><span>ground</span><i /></div>
              <div className="signal-card signal-output">
                <span>03 / OUTPUT</span>
                <strong>Verified Action</strong>
                <p>Citation · Trace · Human Approval</p>
              </div>
            </div>
            <div className="system-footer"><span><i />Evaluation ready</span><span>Python · FastAPI · TypeScript</span></div>
          </div>
        </div>
      </header>

      <Navbar />

      <main>
        <section className="section projects-section" id="projects">
          <div className="container">
            <SectionHeading eyebrow="01 / SELECTED WORK" title="项目经历" description="从检索质量到可靠执行：用完整工程链路回答 AI 应用如何落地。" />

            <article className="project project-rag">
              <div className="project-header reveal">
                <div>
                  <div className="tag-row"><Tag>核心项目</Tag><Tag tone="teal">RAG</Tag><Tag tone="neutral">AI Application</Tag><Tag tone="neutral">Backend</Tag></div>
                  <p className="project-number">PROJECT 01</p>
                  <h3>AI Knowledge Server <span>/ MAX</span></h3>
                  <p className="project-lead">面向真实文档问答场景构建的 RAG 系统，覆盖混合检索、Reranking、引用追踪、无依据拒答、Langfuse 全链路观测与离线评测。</p>
                </div>
                <a className="project-link" href="https://github.com/maxwu2579/ai-knowledge-server" aria-label="查看 AI Knowledge Server GitHub 仓库" {...externalProps}><GithubMark size={19} />查看源码<ArrowUpRight size={16} /></a>
              </div>

              <div className="project-stats reveal">
                <div><span>Evidence Recall@5</span><strong>21/21</strong><p>最佳离线实验</p></div>
                <div><span>Backend tests</span><strong>183</strong><p>核心后端测试通过</p></div>
                <div><span>Evaluation set</span><strong>25</strong><p>题离线验收集</p></div>
                <div><span>Design stance</span><strong>Production-oriented</strong><p>面向生产思路设计</p></div>
              </div>

              <div className="stack-line reveal" aria-label="AI Knowledge Server 技术栈">
                {['Python', 'FastAPI', 'Next.js', 'React', 'TypeScript', 'ChromaDB', 'Cross-Encoder', 'Langfuse', 'APISIX', 'ONNX'].map((item) => <span key={item}>{item}</span>)}
              </div>

              <div className="rag-feature-grid">
                <div className="feature-copy reveal">
                  <span className="mini-label">CAPABILITIES</span>
                  <h4>让回答有依据，让结果可复查</h4>
                  <p>系统不只生成答案，还保留检索证据、引用位置与完整链路，使每一步都能被检查和改进。</p>
                  <CapabilityList items={ragCapabilities} />
                </div>
                <ScreenshotFigure
                  src="/images/rag-chat.png"
                  alt="MAX Knowledge Assistant 文档问答界面，展示无依据拒答、带页码引用的回答和来源数量"
                  title="Grounded Document QA"
                  description="在真实文档上回答问题；证据不足时明确拒答，答案附带文件与页码引用。"
                  priority
                  className="main-screenshot"
                />
              </div>

              <div className="screenshot-grid">
                <ScreenshotFigure src="/images/rag-sources.png" alt="MAX 展开的检索来源面板，展示 passage、来源文件、页码和距离信息" title="检索证据与引用追踪" description="展开检索结果即可查看实际 passages、来源文件、页码及检索信息，让回答结果可验证。" />
                <ScreenshotFigure src="/images/rag-langfuse.png" alt="Langfuse Trace 页面，展示 Query Rewrite、Retrieval、Rerank 与 Answer Generation 链路" title="可观测性与链路追踪" description="使用 Langfuse 追踪 Query Rewrite → Retrieval → Rerank → Answer Generation，并观察 latency、span 与输出。" />
              </div>

              <ArchitectureViewer />
            </article>

            <article className="project project-jarvis">
              <div className="project-header reveal">
                <div>
                  <div className="tag-row"><Tag tone="violet">持续开发中</Tag><Tag>Agent</Tag><Tag tone="neutral">AI Backend</Tag><Tag tone="teal">Human-in-the-loop</Tag></div>
                  <p className="project-number">PROJECT 02</p>
                  <h3>JARVIS <span>/ Agentic AI Personal Assistant</span></h3>
                  <p className="project-lead">面向个人任务与知识管理构建的 Agent AI 助手，探索自然语言任务规划、Human-in-the-loop、持久化执行、Tool Calling、Memory 与外部服务集成。</p>
                </div>
                <a className="project-link" href="https://github.com/maxwu2579/jarvis-personal-assistant" aria-label="查看 JARVIS GitHub 仓库" {...externalProps}><GithubMark size={19} />查看源码<ArrowUpRight size={16} /></a>
              </div>

              <div className="active-development reveal"><span className="pulse" /><div><strong>Active Development</strong><p>当前仍在持续开发与验证中，不作为已完成商业产品展示。</p></div></div>

              <div className="stack-line reveal" aria-label="JARVIS 技术栈">
                {['Python', 'FastAPI', 'React', 'TypeScript', 'SQLAlchemy', 'Alembic', 'Microsoft Graph'].map((item) => <span key={item}>{item}</span>)}
              </div>

              <div className="jarvis-hero-grid">
                <ScreenshotFigure src="/images/jarvis-task.png" alt="JARVIS 任务管理界面，自然语言请求被创建为等待用户确认的任务草稿" title="自然语言任务规划" description="请求先形成结构化任务草稿，经用户确认后才进入执行流程；Human-in-the-loop 是默认安全边界。" className="jarvis-main" />
                <div className="feature-copy compact reveal"><span className="mini-label">AGENT WORKFLOW</span><h4>从提案到执行，每一步可追踪</h4><CapabilityList items={jarvisCapabilities} /></div>
              </div>

              <div className="jarvis-gallery">
                <ScreenshotFigure src="/images/jarvis-execution.png" alt="JARVIS 执行列表与 Execution 详情，显示队列状态和 Correlation ID" title="持久化执行流程" description="任务进入 Execution Queue 后由状态管理与 Worker 处理，并保留 Correlation ID、执行状态与详情。" />
                <ScreenshotFigure src="/images/jarvis-memory.png" alt="JARVIS 个人记忆管理页面，用于保存偏好、背景与固定限制" title="个人长期记忆" description="保存相对稳定的个人偏好、背景与固定限制，为后续 Agent 上下文设计提供基础。" />
              </div>

              <div className="testing-module reveal">
                <div className="testing-copy">
                  <span className="mini-label">ENGINEERING DESIGN / TESTING</span>
                  <h4>隔离测试环境</h4>
                  <p>使用 Mock LLM 验证对话、任务、Memory 与 Workflow 逻辑，避免消耗真实模型 API 配额或修改正式环境数据。</p>
                  <div className="test-note"><ShieldCheck size={19} aria-hidden="true" /><span>截图中的 <b>fake-model</b> 与 <b>This is a fake reply.</b> 是 intentionally isolated test environment 的预期行为，不代表真实模型尚未接入。</span></div>
                </div>
                <div className="testing-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/jarvis-test-env.png" alt="JARVIS 隔离测试环境，界面明确显示 fake-model 和 This is a fake reply" />
                </div>
              </div>
            </article>

            <div className="other-projects">
              <div className="subsection-title reveal"><span>ALSO BUILT</span><h3>其他项目</h3></div>
              <article className="small-project reveal">
                <div className="small-project-icon"><BookOpenCheck /></div>
                <div><h4>AI 代码差异审查服务</h4><p>构建异步代码审查 HTTP 服务，接收 unified diff 后按文件边界分块扫描并生成结构化结果；支持轮询与 SSE，并实现幂等键、内容缓存、限流及并发控制。</p><div className="mini-stack"><span>Python</span><span>FastAPI</span><span>asyncio</span><span>SSE</span><span>DeepSeek API</span></div></div>
                <a href="https://github.com/maxwu2579/diff-review-service" aria-label="查看 AI 代码差异审查服务 GitHub 仓库" {...externalProps}><GithubMark /> <ArrowUpRight /></a>
              </article>
              <article className="small-project reveal">
                <div className="small-project-icon"><Sparkles /></div>
                <div><h4>游戏自动化机器人</h4><p>基于 OpenCV 模板匹配与 PyAutoGUI 开发桌面自动化工具，通过阈值控制降低视觉相似场景误识别，并提供 GUI 控制面板和多种自动化模式。</p><div className="mini-stack"><span>Python</span><span>PyAutoGUI</span><span>OpenCV</span><span>Tkinter</span></div></div>
                <a href="https://github.com/maxwu2579/bot-server" aria-label="查看游戏自动化机器人 GitHub 仓库" {...externalProps}><GithubMark /> <ArrowUpRight /></a>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <SectionHeading eyebrow="02 / EXPERIENCE" title="实习经历" description="以评测和技术验证为核心，逐步进入真实 AI Server 工程场景。" />
            <article className="experience-card reveal">
              <div className="experience-mark"><BriefcaseBusiness /></div>
              <div className="experience-main">
                <span className="mini-label">2026.09 — 至今</span>
                <h3>Auraplex Sdn. Bhd.</h3>
                <p className="experience-role">AI / 软件开发实习生</p>
                <p className="experience-location"><MapPin size={16} />Selangor, Malaysia</p>
              </div>
              <ul>
                <li>围绕公司 AI Server / RAG 需求参与企业文档检索方案的技术验证。</li>
                <li>进行 Embedding、Reranker 与本地推理方案的模型选型、对比和效果评测。</li>
                <li>记录检索质量、推理延迟、内存占用与本地部署资源需求。</li>
                <li>持续定位 Retrieval / Reranking Pipeline 的质量问题，形成可复用评测记录和技术建议。</li>
                <li>持续学习 Web 与 AI Server 工程技术，为后续系统开发与集成做准备。</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <SectionHeading eyebrow="03 / TOOLKIT" title="技术技能" description="不以熟练度百分比包装能力，用项目中实际使用过的技术呈现工程范围。" />
            <div className="skills-grid">
              {skills.map((group, index) => (
                <article className="skill-card reveal" key={group.title}>
                  <span>0{index + 1}</span><h3>{group.title}</h3><p>{group.description}</p>
                  <div>{group.items.map((item) => <em key={item}>{item}</em>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="container">
            <SectionHeading eyebrow="04 / EDUCATION" title="教育背景" />
            <article className="education-card reveal">
              <div className="education-year"><span>预计毕业</span><strong>2027.04</strong></div>
              <div><span className="mini-label">TAYLOR&apos;S UNIVERSITY</span><h3>泰莱大学</h3><p>信息科技学士</p></div>
              <div className="education-location"><MapPin size={18} /><span>马来西亚<br /><b>梳邦再也</b></span></div>
            </article>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="container footer-grid reveal">
          <div><span className="mini-label">LET&apos;S CONNECT</span><h2>一起把 AI 能力<br />落到真实系统里。</h2></div>
          <div className="footer-info">
            <strong>吴忠衡</strong><p>AI 应用研发 / Agent / AI Backend</p>
            <a href="mailto:2579561724@qq.com"><Mail size={17} />2579561724@qq.com</a>
            <a href="https://github.com/maxwu2579" {...externalProps}><GithubMark size={17} />github.com/maxwu2579<ArrowUpRight size={15} /></a>
            <a className="primary-button" href="/resume/wu-zhongheng-resume.pdf" download><Download size={17} />下载简历</a>
          </div>
        </div>
        <div className="container footer-bottom"><span>© 2026 吴忠衡</span><Link href="#top">返回顶部 ↑</Link></div>
      </footer>
    </>
  );
}
