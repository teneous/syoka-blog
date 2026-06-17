export type LocalizedString = {
  en: string
  zh: string
}

export type Project = {
  title: LocalizedString
  domain: LocalizedString
  description: LocalizedString
  role: LocalizedString
  impact: LocalizedString
  stack: string[]
  status: 'active' | 'completed' | 'planning'
  link?: string
  isPrivate?: boolean
}

export const projects: Project[] = [
  {
    title: {
      en: 'AIGC Comic Drama Platform',
      zh: 'AIGC 漫剧平台',
    },
    domain: {
      en: 'AIGC / Creative Workflow',
      zh: 'AIGC / 创意工作流',
    },
    description: {
      en: 'A canvas-based creation workflow for comic drama production, lowering the barrier for planning, asset organization, review, and organization-level use.',
      zh: '以画布方式组织漫剧创作流程，降低策划、素材组织、审核与协作门槛，支持组织级别使用。',
    },
    role: {
      en: 'Shaped the canvas workflow, asset structure, role boundaries, and production process from draft to review.',
      zh: '梳理画布式创作流程、素材结构、角色边界，以及从草稿到审核的生产链路。',
    },
    impact: {
      en: 'Turns AIGC creation from scattered prompts into a manageable production process for teams and repeated content work.',
      zh: '把零散提示词式创作转成可管理、可复用的生产流程，更适合团队与持续内容生产。',
    },
    stack: ['AIGC', 'Canvas', 'Workflow', 'Review'],
    status: 'active',
    isPrivate: true,
  },
  {
    title: {
      en: 'GEO Monitoring Tool',
      zh: 'GEO 监控工具',
    },
    domain: {
      en: 'GEO / Signal Monitoring',
      zh: 'GEO / 舆情监控',
    },
    description: {
      en: 'A monitoring tool for observing keyword exposure, answer tendencies, sentiment signals, and brand perception in AI search and generated-answer scenarios.',
      zh: '面向 AI 搜索与生成式回答场景，监控关键词曝光、回答倾向、舆情信号和品牌感知变化。',
    },
    role: {
      en: 'Designed the monitoring dimensions, collection path, analysis views, and alert-oriented interpretation flow.',
      zh: '设计监控维度、采集路径、分析视图，以及面向预警和复盘的解读流程。',
    },
    impact: {
      en: 'Helps turn fragmented external signals into trackable trend judgment and response material.',
      zh: '把分散的外部信号转成可跟踪的趋势判断与响应材料。',
    },
    stack: ['GEO', 'Crawler', 'NLP', 'Dashboard'],
    status: 'planning',
    isPrivate: true,
  },
  {
    title: {
      en: 'Data Platform',
      zh: '数据平台',
    },
    domain: {
      en: 'Data Infrastructure',
      zh: '数据基础设施',
    },
    description: {
      en: 'A data platform covering collection, processing, modeling, offline scheduling, and BI-oriented analysis workflows.',
      zh: '覆盖数据采集、加工、建模、离线调度与 BI 分析链路的数据平台。',
    },
    role: {
      en: 'Worked through data ingestion, metric modeling, task scheduling, analysis layer design, and operational visibility.',
      zh: '围绕采集接入、指标建模、任务调度、分析层设计与运行可观测性展开建设。',
    },
    impact: {
      en: 'Builds a reusable data foundation for reporting, business analysis, and later AI-driven decision workflows.',
      zh: '为报表分析、业务洞察和后续 AI 决策链路提供可复用的数据底座。',
    },
    stack: ['ETL/ELT', 'OLAP', 'Scheduler', 'BI'],
    status: 'completed',
    isPrivate: true,
  },
  {
    title: {
      en: 'Enterprise Agent',
      zh: '企业级 Agent',
    },
    domain: {
      en: 'AI Agent / Enterprise Workflow',
      zh: 'AI Agent / 企业流程',
    },
    description: {
      en: 'An enterprise-oriented agent direction for connecting knowledge, tools, permissions, workflow orchestration, and evaluation loops.',
      zh: '面向企业场景的 Agent 方向，连接知识、工具、权限、流程编排与评估闭环。',
    },
    role: {
      en: 'Explored agent boundaries, tool integration, retrieval paths, guardrails, and workflow execution patterns.',
      zh: '探索 Agent 边界、工具集成、检索路径、安全约束和流程执行模式。',
    },
    impact: {
      en: 'Provides a practical path for embedding agents into existing enterprise systems without breaking governance boundaries.',
      zh: '为 Agent 嵌入既有企业系统提供更稳妥的工程路径，不破坏权限和治理边界。',
    },
    stack: ['Agent', 'RAG', 'Tools', 'Evaluation'],
    status: 'active',
    isPrivate: true,
  },
  {
    title: {
      en: 'B2B AI Infrastructure Ecosystem',
      zh: 'B 端 AI 基建生态',
    },
    domain: {
      en: 'AI Infrastructure / Platform',
      zh: 'AI 基建 / 平台生态',
    },
    description: {
      en: 'A B2B AI infrastructure direction around model access, tool orchestration, workflow components, evaluation, and platform reuse.',
      zh: '围绕模型接入、工具编排、工作流组件、评估体系与平台复用的 B 端 AI 基建方向。',
    },
    role: {
      en: 'Mapped the infrastructure layers, reusable modules, integration boundaries, and platform-oriented capability model.',
      zh: '梳理基础设施分层、可复用模块、集成边界，以及平台化能力模型。',
    },
    impact: {
      en: 'Moves AI capability from isolated demos toward reusable infrastructure that can support multiple product scenarios.',
      zh: '把 AI 能力从单点 demo 推向可复用基础设施，支撑多个产品场景持续接入。',
    },
    stack: ['LLM Gateway', 'MCP', 'Workflow', 'Platform'],
    status: 'active',
    isPrivate: true,
  },
  {
    title: {
      en: 'CPR Exam Monitoring & Scoring',
      zh: '医疗 CPR 考试自动监控评分',
    },
    domain: {
      en: 'Computer Vision / Assessment',
      zh: '视觉监控 / 考试评分',
    },
    description: {
      en: 'An automated monitoring and scoring direction for CPR exam training scenarios, observing procedural actions and assessment signals.',
      zh: '面向 CPR 考试训练场景的自动监控与评分方向，观察操作流程、动作规范和评估信号。',
    },
    role: {
      en: 'Designed the scoring dimensions, monitoring flow, event capture, and review-oriented assessment output.',
      zh: '设计评分维度、监控流程、事件采集，以及面向复盘的评分输出。',
    },
    impact: {
      en: 'Helps make practical assessment more structured, traceable, and easier to review after training.',
      zh: '让实操考试评估更结构化、可追溯，也更便于训练后的复盘。',
    },
    stack: ['Vision', 'Event Detection', 'Scoring', 'Review'],
    status: 'completed',
    isPrivate: true,
  },
]
