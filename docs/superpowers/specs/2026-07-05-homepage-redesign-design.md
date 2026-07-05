# 首页改版设计稿(2026-07-05)

设计稿 HTML:`docs/superpowers/specs/2026-07-05-homepage-mockup.html`(用浏览器打开即为最终视觉基准,底部灰色"设计说明"区块不属于页面内容)。

## 定位

个人技术博客为主体。**不出现任何"团队"字样**(作者在职,不能显得在经营副业),用"一套完整的工程能力"暗示可独立交付整套方案。无案例区、无信任数字、无销售话术。

## 页面结构

Hero → Pipeline 主视觉 → 长期深耕的四个方向 → 最新文章 → 交流 CTA。

## 组件拆分

- `app/page.tsx`(server):从 contentlayer `allBlogs` 取最新 3 篇(按 date 降序、过滤 draft),把 `{ slug, date, title, tags }` 传给 LatestPosts;组合下列 section。
- `components/home/Hero.tsx`(client,useLanguage)
- `components/home/Pipeline.tsx`(client)— 替代并删除 `components/common/StudioPipeline.tsx`
- `components/home/FocusAreas.tsx`(client)
- `components/home/LatestPosts.tsx`(client,posts 由 props 传入)
- `components/home/ContactCTA.tsx`(client,邮箱用 `siteMetadata.email`,不写死)
- `components/common/Hero.tsx` 由新 Hero 取代后删除;`css/tailwind.css` 里旧的 `engineering-*` keyframes/类清理,新动画按设计稿补充。
- Header 不动(wordmark 来自 `siteMetadata.headerTitle` = "Syoka Studio")。
- 图标沿用 `lucide-react`:Lightbulb(输入)、Package(输出)、Bot(Agent)、Braces(系统架构)、Cpu(基建)、Database(数据工程)、Smartphone(小程序)、ArrowRight。

## 文案(最终稿,中英双语)

**标点规则(重要)**:中文文案一律使用全角标点(，。、?——),中文与英文/数字之间保留一个半角空格(如"我是 Syoka，长期深耕 Agent、系统架构");英文文案用半角标点。

### Hero

| 项      | zh                                                                                                                               | en                                                                                                                                                                                                                   |
| ------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| eyebrow | `Agent · Architecture · Infra · Data`(两语言相同,紫短横线前缀,uppercase,letter-spacing 0.2em)                                    | 同左                                                                                                                                                                                                                 |
| H1      | 从业务痛点，到可交付的解决方案("可交付"三字加淡紫荧光笔衬底)                                                                     | From business pain points to shippable solutions.(highlight "shippable")                                                                                                                                             |
| 副标题  | 我是 Syoka，长期深耕 Agent、系统架构、基建、数据工程。擅长把模糊的业务问题拆解成清晰的技术方案，再做成真正上线、持续生长的产品。 | I'm Syoka, focused long-term on agents, system architecture, AI infrastructure, and data engineering. I turn ambiguous business problems into clear technical designs, then ship them as products that keep growing. |
| 按钮 1  | 查看项目 → `/projects`                                                                                                           | View Works                                                                                                                                                                                                           |
| 按钮 2  | 了解方向 → `/about`(描边样式)                                                                                                    | About Focus                                                                                                                                                                                                          |

### Pipeline(主视觉)

三列布局:输入卡 → 工程能力体系 → 输出卡;桌面端有弧形流光线(SVG),移动端纵向堆叠、节点间向下箭头,不隐藏内容。

| 项          | zh                                                         | en                                                                                       |
| ----------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 输入 kicker | 输入 · 业务信号                                            | Input · Business Signal                                                                  |
| 输入标题    | 业务痛点                                                   | Business Pain Points                                                                     |
| 输入说明    | 用户痛点、市场信号与产品假设                               | User pain points, market signals, and product assumptions                                |
| 中央标题    | 工程能力体系                                               | Engineering System                                                                       |
| 架构标签    | 系统架构 · 定边界，立规则                                  | System Architecture · boundaries & rules                                                 |
| 层 1 标签   | 应用层 · Applications                                      | Applications                                                                             |
| 节点 Agent  | Agent / 编排 · RAG · 工具接入                              | Agent / Orchestration · RAG · Tools                                                      |
| 节点小程序  | 小程序与多端 / 小程序 · Web · 后端集成                     | Mini Programs & Multi-end / Mini programs · Web · Backend                                |
| 层 2 标签   | 平台层 · AI Infra                                          | Platform · AI Infra                                                                      |
| 基建横杆    | AI 基建 / 模型接入 · 网关 · 评估 · 工作流 / ↑ 支撑上层应用 | AI Infrastructure / Model access · Gateway · Eval · Workflow / ↑ Supports the apps above |
| 层 3 标签   | 数据底座 · Data                                            | Data Foundation                                                                          |
| 数据横杆    | 数据工程 / 采集 · 建模 · 指标 · 调度 / ↑ 为全链路供数      | Data Engineering / Ingestion · Modeling · Metrics · Scheduling / ↑ Feeds the whole chain |
| 输出 kicker | 输出 · 结果                                                | Output · Result                                                                          |
| 输出标题    | 可交付方案                                                 | Deliverable Solution                                                                     |
| 输出说明    | 方案设计、产品落地与持续迭代                               | Solution design, product delivery, and continuous iteration                              |

说明:小程序仅作为应用层的一种交付形态出现在图里,不属于"四个方向"。

### 长期深耕的四个方向

kicker:`Focus`。标题 zh「长期深耕的四个方向」/ en "Four Long-term Directions";副标题 zh「从数据底座到应用层，构成一套完整的工程能力」/ en "From data foundation to application layer — a complete engineering capability."

| 卡片(顺序固定)        | zh 描述                                                | zh 关键词                                 | en 描述                                                                         | en 关键词                                           |
| --------------------- | ------------------------------------------------------ | ----------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------- |
| Agent(Bot,紫)         | 把 Agent 嵌进真实业务流程和权限边界，而不是停在 demo。 | 编排 · RAG · 工具接入 · 评估闭环          | Embed agents into real business flows and permission boundaries — beyond demos. | Orchestration · RAG · Tools · Evaluation            |
| 系统架构(Braces,青)   | 为系统定边界、立规则，让架构支撑业务的长期演进。       | 边界划分 · 服务治理 · 可观测性 · 演进规则 | Set boundaries and rules so architecture supports long-term evolution.          | Boundaries · Governance · Observability · Evolution |
| 基建(Cpu,紫)          | 把 AI 能力平台化，让多个业务场景持续、低成本地接入。   | LLM 网关 · MCP · 评估 · 工作流            | Turn AI capability into a platform many scenarios can plug into.                | LLM Gateway · MCP · Eval · Workflow                 |
| 数据工程(Database,翠) | 从采集到指标，把散落的数据变成可复用的资产与决策底座。 | ETL / ELT · OLAP · 指标体系 · 调度        | From ingestion to metrics, turn scattered data into reusable assets.            | ETL / ELT · OLAP · Metrics · Scheduling             |

英文标题:Agent / System Architecture / Infra / Data Engineering。

### 最新文章

kicker:`Writing`。标题 zh「最新文章」/ en "Latest Posts";右侧链接 zh「全部文章 →」/ en "All posts →" 指向 `/blog`。列表行:日期(tabular-nums)+ 标题 + 标签;hover 标题变紫。

### 交流 CTA

kicker:`Contact`。标题 zh「对这些方向感兴趣?随时来聊」/ en "Interested in these directions? Let's talk."。正文 zh「有任何产品想法，或者商业痛点，欢迎写信给我，一起交流。」/ en "Any product idea or business pain point — write me an email and let's talk."。按钮(描边样式)zh「写封邮件」/ en "Write an Email",`mailto:` + `siteMetadata.email`。

## 视觉规范(以设计稿 HTML 为准)

- **画布**:网格纸背景(28px 网格线),圆角 12px,右下偏移 14px 的紫色错位描边(`violet-soft`)。
- **弧形流光线**:SVG `viewBox="0 0 1000 300"` + `preserveAspectRatio="none"`,灰色 rail + 渐变 dash 流光(`stroke-dasharray: 14 260` 循环),输出侧带箭头 marker,仅 `lg`+ 显示。
- **架构框**:1.5px 虚线圆角框,内部三层自上而下堆叠,每层左侧小号 uppercase 层级标签(后接细横线);扫描光带缓慢横扫(移动端隐藏)。
- **端点卡**:白底描边卡,顶部一条 34px 紫色短线;icon 方块 + kicker + 标题 + 一行说明。
- **区块节奏**:每个 section 标题上方统一 kicker(紫色短横线 + 小号 uppercase);方向卡为"顶部细线 + 纯排版"无盒子样式,hover 顶线变紫;节点 hover 轻微上浮 + 紫描边。
- **配色**:浅色模式紫 `#7c3aed` / 青 `#0891b2` / 翠 `#059669`;**暗色模式主色改用靛蓝 `#818cf8`**(降紫),紫色底/光晕透明度低(soft ≈ 0.13、bg ≈ 0.06、border ≈ 0.24),流光渐变暗色为 `#4f56c8 → #818cf8 → #22d3ee`,浅色为 `#6366f1 → #8b5cf6 → #06b6d4`。具体 token 值以设计稿 HTML 顶部 CSS 变量为准。
- **动效**:全部尊重 `prefers-reduced-motion`。
- 实现优先用 Tailwind utility;keyframes 等少量自定义 CSS 放 `css/tailwind.css`。

## 不在本次范围

精选案例区、About 页、Projects 页、导航调整。

## 验证

`pnpm lint && pnpm typecheck` 通过;`pnpm dev` 下人工核对中英双语、明暗主题、移动端布局。
