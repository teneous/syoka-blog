# 给 Claude 的文章翻译提示词

将下面整段交给能访问本地项目的 Claude Code。三个目标文件目前是短篇选读草稿，需要用完整译文替换；O4 由另一个任务处理。

```text
请在 /Users/syoka/code/growth/products/syoka-blog 中，重新处理下面三篇 Anthropic 文章。

先读取 /Users/syoka/.claude/skills/article-distill/SKILL.md，以及项目中的文章配置和 MDX 示例。本次的核心要求是：完整、忠实的中文翻译作为正文，在相关段落旁少量添加高亮和批注。不要改成摘要、阅读笔记，或围绕主题另写一篇自己的文章。

文章与目标文件：

1. A4 — Patterns and problems in emerging multiagent systems
   https://www.anthropic.com/research/multiagent-systems
   data/blog/26/multiagent-coordination-cost.mdx

2. A3 — Automated researchers can reliably mitigate alignment failures
   https://www.anthropic.com/research/automated-researchers-mitigate-alignment-failures
   data/blog/26/ai-alignment-research-and-evaluation.mdx

3. A1 — An alignment assessment of recent cybersecurity incidents
   https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents
   data/blog/26/agent-boundaries-and-stopping.mdx

当前这三个文件是内容过少的旧稿，不能拿它们当作原文，也不要沿用其中假设性的第一人称观点。请重新核对来源的标题、作者、日期和正文完整性。若无法取得或不能完整处理原文，说明需要我补充哪些正文或材料，不得擅自降级成交付摘要。

翻译要求：
- 按原文的章节与论证顺序展开，保留案例、数据、实验设置、比较口径、反例、局限、脚注和重要引用链接。
- 中文可以调整语序、拆长句，让懂技术的同事顺畅读懂；不要因为“说人话”就省掉技术细节。
- 原文中的“可能”“尚未验证”“只在这些实验中”等限定必须保留。不同实验、模型和评估条件不能混为一谈。
- 原作者的“我／我们”指原作者或其团队，不要写成我的亲身经历。
- 图表若承载论据，保留合法可用的图表及来源或提供准确的文字说明；不得悄悄略过，也不要编造图中读不清的数值。

标注要求：
- 原文核心判断：少量红色加粗。
- 影响理解的前提、限制或比较条件：按需加下划线。
- 段落后的补充理解、疑问或点评：黄色背景，与翻译正文明确区分。
- 批注必须有信息增量，不设最低数量，不要求每段都加。读者去掉批注后，仍应得到完整、连贯的译文。
- 没有我提供的个人经历，不要编出“我在项目里试过”。你补充的判断只作为待我审阅的批注，不冒充我已经表达的观点。
- 外部事实与旁证应查证并提供直接来源；推断要保留推断语气。

项目交付：
- 使用原生 MDX，三个目标文件保留 draft: true，更新合适的标题、摘要和标签，头部保留原题、作者、原始发表日期和原文链接。
- 沿用项目的 Tailwind 样式，为红字、黄色批注和下划线兼顾浅色与深色模式。优先使用文章内的 className，不为文章改造整个站点。
- 核对段落覆盖情况，检查 MDX 编译和实际阅读排版。长文可以分篇处理，但不能以篇幅长为由缩成摘要。
- 修改范围仅限这三篇文章及其必要附件；保留项目其他任务的改动，O4 文件不要改动。不要合并主分支或发布生产站点。
- 最后给出三个文件位置、检查结果，以及仍需我补充或确认的具体内容。
```
