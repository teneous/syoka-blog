# 首页质感升级设计稿(2026-07-06,v3.2 定稿)

在 `2026-07-05-homepage-redesign-design.md` 基础上的视觉与结构升级。**视觉唯一基准**:`docs/superpowers/specs/2026-07-06-homepage-dark-premium-mockup.html`(浏览器打开即所见,底部灰色"设计说明"区块不属于页面内容;所有颜色 token、字号、间距、动画参数以该文件顶部 CSS 为准)。

## 结构变更(相对 07-05 版)

- **FocusAreas(长期深耕的四个方向)区块整体删除**,`components/home/FocusAreas.tsx` 删除。方向信息由 Hero 右栏"Index / 方向"档案栏与 Pipeline 分层图承载。
- 页面结构定稿:**Hero → Pipeline → 最新文章 → 交流 CTA**。
- 联系邮箱定稿:**syoka9471@gmail.com**(`siteMetadata.email` 同步修改)。

## 设计语言(v3 编辑部式排版)

1. **全线左对齐、不对称栅格**;禁止居中式 hero、满铺网格背景、等宽卡片阵列。
2. **三层字面**:中文大标题用宋体(`'Songti SC', 'Noto Serif SC', 'STSong', 'SimSun', Georgia, serif`,weight 700);正文系统黑体;kicker / 日期 / 标签用等宽字体(`ui-monospace` 栈)+ 0.2~0.3em 字距。
3. **统一 easing**:`cubic-bezier(0.16, 1, 0.3, 1)`。
4. **性能纪律**:原生滚动(不做 wheel 劫持、不加 Lenis);光效一律径向渐变,不用 `filter: blur()` 实时滤镜;动画只碰 transform / opacity;`backdrop-filter` 仅 Header 一处。
5. 全部动效尊重 `prefers-reduced-motion`;触屏设备关闭 glare。

## 各区块

### Header(全站)

- 左上角 wordmark 前加**光子环绕 logo mark**(inline SVG,约 30px):双椭圆轨道(旋转 -26° / 46°)+ 中心光核圆点 + 两条渐变光子沿轨道跑动(`stroke-dasharray: 16 84` + `stroke-dashoffset` 100→0 动画 + `feGaussianBlur` 辉光;一条 2.6s cubic-bezier、一条 3.8s linear reverse)。渐变 = 主题色靛蓝→青(CSS 变量控制 stop-color)。reduced-motion 下光子静止为淡轨道。
- 其余(语言切换、主题切换)不动。

### Hero(不对称两栏,min-height 92vh)

- 左栏(7.2 份):eyebrow(等宽 + 呼吸圆点)→ H1 两行(第一行"从业务痛点，"小号黑体灰字;第二行"到可交付的解决方案"宋体大字 clamp(2.7rem→5rem) + 白→灰渐变填充)→ 副标题 → 双按钮(主按钮白/黑 + hover 高光扫过,次按钮描边)。
- 右栏(2.8 份,与左栏底对齐):"Index / 方向"档案栏,纯排版无框:标题行 + 四行 key-value(App/Agent、Arch/系统架构、Infra/基建、Data/数据工程),key 等宽小字、value 右对齐。
- 右缘竖排侧签(writing-mode: vertical-rl):`工程师生涯 10 年 · Since 2016` / en `10 Years in Engineering · Since 2016`,1280px 以下隐藏。
- 背景氛围:两团径向渐变光斑(靛蓝主,左上;青辅,右侧)26s/32s 超慢漂移;左上象限制图定位符"+"(SVG data-URI 平铺 72px)径向遮罩渐隐;暗色再叠全屏胶片颗粒(fixed,opacity 0.4 × 0.05)。
- 载入五拍:eyebrow → H1 上行 → H1 下行 → 副标题 → 按钮+档案栏,依次 translateY(22px) 浮现,间隔约 150ms。
- 左下角 SCROLL 提示(等宽 + 横线擦出动画)。

### Pipeline(承 07-05 版,画布升级)

- 内容、文案、SVG 流光、三层结构全部不变(AI 基建关键词 = Skill · MCP · CLI)。
- 画布升级:圆角 16px;暗色下画布/卡片背景改半透明白渐变(玻璃感)+ 顶缘 1px 内高光(`inset 0 1px 0 rgba(255,255,255,0.06)`)+ 画布底部靛蓝辉光;浅色下纯白面板 + 大半径柔和投影。移除 v1 的错位描边(canvas-shadow 已不在 mockup 中——以 mockup 为准)。
- 进场:translateY(36px) + scale(0.985) 浮现。
- 端点卡与节点保留鼠标跟随 glare(radial-gradient 260px,JS 只写 --mx/--my)。

### 最新文章(左右分栏)

- 左栏(3.4 份):kicker `Writing` → 宋体标题「最新文章」/ en "Latest Posts" → 副题「工程实践里沉淀下来的思考与方法。」/ en "Notes distilled from engineering practice." → 「全部文章 →」/ "All posts →" 链 `/blog`。
- 右栏(6.6 份):文章行(等宽日期 + 标题 + 等宽标签),hover 标题右移 4px 变主题色、行尾箭头滑入。数据仍取最新 3 篇(过滤 draft)。

### 交流 CTA(左对齐)

- kicker `Contact` → 宋体大字两行「对这些方向感兴趣？/ 随时来聊。」/ en "Interested in these directions? / Let's talk." → 正文(同 07-05 定稿)→ **巨型等宽邮箱链接**:小号"写封邮件"/ "Write me" 提示 + `syoka9471@gmail.com` + ↗ 图标,底部双层下划线(灰线常驻,hover 主题色线从左扫过),`mailto:` 取 `siteMetadata.email`。
- 区块顶部渐变发丝线(左亮右消),底部"地平线光"偏左 24%。

## 颜色 token(与 mockup CSS 变量一一对应)

| token                  | 浅色                              | 暗色                              |
| ---------------------- | --------------------------------- | --------------------------------- |
| bg                     | `#f3f4f8`(冷调米灰)               | `#0a0a0e`(中性近黑)               |
| text / text-2 / text-3 | `#0b0f19` / `#4b5563` / `#878e9c` | `#f5f5f7` / `#a5a8b4` / `#6e717d` |
| 主点缀 violet          | `#6d5ae0`                         | `#818cf8`(守"暗色降紫"规则)       |
| cyan / emerald         | `#0891b2` / `#059669`             | `#22d3ee` / `#34d399`             |
| 面板                   | `#ffffff` + 柔和投影              | 半透明白渐变 0.055→0.02 + 内高光  |
| H1 渐变                | `#0b0f19 → #3c4250`               | `#ffffff → #a7aab6`               |

其余(hairline、glare、光斑透明度、flow 渐变等)以 mockup 为准。

## 双语文案

Hero / Pipeline / CTA 正文沿用 07-05 spec 的中英定稿;本次新增:

| 项           | zh                                 | en                                                     |
| ------------ | ---------------------------------- | ------------------------------------------------------ |
| 侧签         | 工程师生涯 10 年 · Since 2016      | 10 Years in Engineering · Since 2016                   |
| 档案栏标题   | Index / 方向                       | Index / Focus                                          |
| 档案栏 value | Agent / 系统架构 / 基建 / 数据工程 | Agent / System Architecture / Infra / Data Engineering |
| 文章副题     | 工程实践里沉淀下来的思考与方法。   | Notes distilled from engineering practice.             |
| CTA 邮箱提示 | 写封邮件                           | Write me                                               |

中文全角标点,中英文间半角空格。

## 实现要点

- CSS 变量 + keyframes 放 `css/tailwind.css`(浅色 `:root`、暗色 `.dark` 作用域,与 next-themes class 模式对齐);组件内用 Tailwind utility + 少量 `[var()]` 任意值。
- 滚动渐显:新建小型客户端组件(IntersectionObserver,threshold 0.08 / rootMargin -8%,进入加 class,80ms 错峰),复用于各区块。
- glare:单个 document pointermove 委托监听,只写 `--mx/--my`。
- 删除:`components/home/FocusAreas.tsx`;`SectionHeading.tsx` 若无其他引用一并删除。

## 不在本次范围

About / Projects 页、导航链接调整、文章页样式。

## 验证

`pnpm lint && pnpm typecheck` 通过;`pnpm dev` 下核对:中英双语切换、明暗主题、移动端(hero 单栏、档案栏收窄、侧签隐藏)、reduced-motion 降级。
