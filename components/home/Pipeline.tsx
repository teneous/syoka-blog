'use client'

import type { ReactNode } from 'react'
import { ArrowDown, Bot, Braces, Cpu, Database, Lightbulb, Package, Smartphone } from 'lucide-react'
import { useLanguage } from '@/components/common/useLanguage'
import { useReveal } from '@/components/common/useReveal'
import GlareField from '@/components/common/GlareField'

const copy = {
  en: {
    inputKicker: 'Input · Business Signal',
    inputTitle: 'Business Pain Points',
    inputDetail: 'User pain points, market signals, and product assumptions',
    systemTitle: 'Engineering System',
    archTag: 'System Architecture · boundaries & rules',
    layerApp: 'Applications',
    agentTitle: 'Agent',
    agentDetail: 'Orchestration · RAG · Tools',
    miniTitle: 'Mini Programs & Multi-end',
    miniDetail: 'Mini programs · Web · Backend',
    layerPlatform: 'Platform · AI Infra',
    infraTitle: 'AI Infrastructure',
    infraDetail: 'Skill · MCP · CLI',
    infraHint: '↑ Supports the apps above',
    layerData: 'Data Foundation',
    dataTitle: 'Data Engineering',
    dataDetail: 'Ingestion · Modeling · Metrics · Scheduling',
    dataHint: '↑ Feeds the whole chain',
    outputKicker: 'Output · Result',
    outputTitle: 'Deliverable Solution',
    outputDetail: 'Solution design, product delivery, and continuous iteration',
  },
  zh: {
    inputKicker: '输入 · 业务信号',
    inputTitle: '业务痛点',
    inputDetail: '用户痛点、市场信号与产品假设',
    systemTitle: '工程能力体系',
    archTag: '系统架构 · 定边界，立规则',
    layerApp: '应用层 · Applications',
    agentTitle: 'Agent',
    agentDetail: '编排 · RAG · 工具接入',
    miniTitle: '小程序与多端',
    miniDetail: '小程序 · Web · 后端集成',
    layerPlatform: '平台层 · AI Infra',
    infraTitle: 'AI 基建',
    infraDetail: 'Skill · MCP · CLI',
    infraHint: '↑ 支撑上层应用',
    layerData: '数据底座 · Data',
    dataTitle: '数据工程',
    dataDetail: '采集 · 建模 · 指标 · 调度',
    dataHint: '↑ 为全链路供数',
    outputKicker: '输出 · 结果',
    outputTitle: '可交付方案',
    outputDetail: '方案设计、产品落地与持续迭代',
  },
}

export default function Pipeline() {
  const { language } = useLanguage()
  const t = copy[language]
  const reveal = useReveal<HTMLDivElement>()

  return (
    <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
      <GlareField />
      <div
        ref={reveal.ref}
        className={`${reveal.className} reveal-scale relative`}
        style={reveal.style}
      >
        <div className="relative z-10 rounded-2xl border border-gray-200 bg-gray-50 bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:28px_28px] p-5 shadow-[0_1px_2px_rgba(11,15,25,0.04),0_20px_48px_-32px_rgba(11,15,25,0.25)] dark:border-white/[0.09] dark:bg-gray-950 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.012)),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] dark:bg-[size:auto,28px_28px,28px_28px] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_-20px_120px_-30px_rgba(99,102,241,0.25)]">
          <div className="relative grid gap-5 lg:grid-cols-[190px_minmax(0,1fr)_206px] lg:items-stretch">
            <FlowLines />

            <EndpointCard
              icon={<Lightbulb className="h-[19px] w-[19px]" />}
              kicker={t.inputKicker}
              title={t.inputTitle}
              detail={t.inputDetail}
            />

            <div className="flex justify-center text-gray-400 lg:hidden">
              <ArrowDown className="h-4 w-4" />
            </div>

            <section className="pipeline-panel relative z-10 rounded-lg border border-gray-200 p-4 dark:border-white/[0.09]">
              <div className="mb-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-3 dark:border-gray-800/60">
                <h3 className="text-sm font-semibold text-gray-950 dark:text-white">
                  {t.systemTitle}
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
                  <Braces className="h-3.5 w-3.5 text-violet-600 dark:text-indigo-400" />
                  {t.archTag}
                </span>
              </div>

              <div className="relative flex flex-col gap-2.5 overflow-hidden rounded-lg border-[1.5px] border-dashed border-gray-300 p-3 dark:border-gray-700">
                <span className="pipeline-scan pointer-events-none absolute inset-y-0 left-0 hidden w-[90px] bg-[linear-gradient(90deg,transparent,rgb(124_58_237/0.14),transparent)] lg:block dark:bg-[linear-gradient(90deg,transparent,rgb(129_140_248/0.13),transparent)]" />

                <Layer label={t.layerApp}>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    <Node
                      accent="violet"
                      icon={<Bot className="h-[15px] w-[15px]" />}
                      title={t.agentTitle}
                      detail={t.agentDetail}
                    />
                    <Node
                      accent="cyan"
                      icon={<Smartphone className="h-[15px] w-[15px]" />}
                      title={t.miniTitle}
                      detail={t.miniDetail}
                    />
                  </div>
                </Layer>

                <Layer label={t.layerPlatform}>
                  <Bar
                    accent="violet"
                    icon={<Cpu className="h-[15px] w-[15px]" />}
                    title={t.infraTitle}
                    detail={t.infraDetail}
                    hint={t.infraHint}
                  />
                </Layer>

                <Layer label={t.layerData}>
                  <Bar
                    accent="emerald"
                    icon={<Database className="h-[15px] w-[15px]" />}
                    title={t.dataTitle}
                    detail={t.dataDetail}
                    hint={t.dataHint}
                  />
                </Layer>
              </div>
            </section>

            <div className="flex justify-center text-gray-400 lg:hidden">
              <ArrowDown className="h-4 w-4" />
            </div>

            <EndpointCard
              icon={<Package className="h-[19px] w-[19px]" />}
              kicker={t.outputKicker}
              title={t.outputTitle}
              detail={t.outputDetail}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function EndpointCard({
  icon,
  kicker,
  title,
  detail,
}: {
  icon: ReactNode
  kicker: string
  title: string
  detail: string
}) {
  return (
    <article className="glare pipeline-panel relative z-10 flex flex-col justify-center gap-2 rounded-lg border border-gray-200 p-5 transition-colors duration-300 hover:border-gray-300 dark:border-white/[0.09] dark:hover:border-white/20">
      <span className="absolute top-0 left-5 h-0.5 w-8.5 bg-violet-600/70 dark:bg-indigo-400/70" />
      <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-violet-600 dark:border-gray-700 dark:bg-gray-900 dark:text-indigo-400">
        {icon}
      </div>
      <span className="text-[0.64rem] font-semibold tracking-[0.18em] text-gray-400 uppercase dark:text-gray-500">
        {kicker}
      </span>
      <h3 className="text-base font-semibold tracking-tight text-gray-950 dark:text-white">
        {title}
      </h3>
      <p className="text-xs leading-[1.65] text-gray-600 dark:text-gray-400">{detail}</p>
    </article>
  )
}

function Layer({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-1.5 flex items-center gap-2 text-[0.62rem] font-semibold tracking-[0.2em] text-gray-400 uppercase dark:text-gray-500">
        {label}
        <span className="h-px flex-1 bg-gray-100 dark:bg-gray-800/60" />
      </p>
      {children}
    </div>
  )
}

function Node({
  accent,
  icon,
  title,
  detail,
}: {
  accent: 'violet' | 'cyan'
  icon: ReactNode
  title: string
  detail: string
}) {
  const iconColor =
    accent === 'violet'
      ? 'text-violet-600 dark:text-indigo-400'
      : 'text-cyan-600 dark:text-cyan-400'

  return (
    <div className="glare pipeline-panel flex items-center gap-2.5 rounded-lg border border-gray-200 p-3 transition hover:-translate-y-0.5 hover:border-violet-300 motion-reduce:hover:translate-y-0 dark:border-white/[0.09] dark:hover:border-indigo-400/40">
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900 ${iconColor}`}
      >
        {icon}
      </span>
      <div>
        <h4 className="text-sm font-semibold text-gray-950 dark:text-white">{title}</h4>
        <p className="mt-0.5 text-xs leading-[1.5] text-gray-400 dark:text-gray-500">{detail}</p>
      </div>
    </div>
  )
}

function Bar({
  accent,
  icon,
  title,
  detail,
  hint,
}: {
  accent: 'violet' | 'emerald'
  icon: ReactNode
  title: string
  detail: string
  hint: string
}) {
  const styles =
    accent === 'violet'
      ? 'border-violet-600/[0.22] bg-violet-600/[0.05] dark:border-indigo-400/[0.24] dark:bg-indigo-400/[0.06]'
      : 'border-emerald-600/[0.26] bg-emerald-600/[0.06] dark:border-emerald-400/[0.28] dark:bg-emerald-400/[0.08]'
  const iconColor =
    accent === 'violet'
      ? 'text-violet-600 dark:text-indigo-400'
      : 'text-emerald-600 dark:text-emerald-400'
  const hintColor =
    accent === 'violet'
      ? 'text-violet-600 dark:text-indigo-400'
      : 'text-emerald-600 dark:text-emerald-400'

  return (
    <div className={`glare flex flex-wrap items-center gap-2.5 rounded-lg border p-3 ${styles}`}>
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white dark:border-gray-700 dark:bg-[#0a101d] ${iconColor}`}
      >
        {icon}
      </span>
      <h4 className="text-sm font-semibold text-gray-950 dark:text-white">{title}</h4>
      <p className="min-w-40 flex-1 text-xs text-gray-500 dark:text-gray-400">{detail}</p>
      <span className={`text-[0.67rem] font-medium whitespace-nowrap ${hintColor}`}>{hint}</span>
    </div>
  )
}

function FlowLines() {
  const inputPaths = [
    'M104 148 C146 92 174 72 214 86',
    'M104 150 C148 150 172 150 214 150',
    'M104 152 C146 208 176 230 214 216',
  ]
  const outputPaths = [
    'M786 106 C834 108 858 134 896 148',
    'M786 150 C836 150 858 150 896 150',
    'M786 194 C834 192 858 166 896 152',
  ]
  const allPaths = [...inputPaths, ...outputPaths]

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-20 hidden h-full w-full [--flow-end:#06b6d4] [--flow-mid:#8b5cf6] [--flow-start:#6366f1] lg:block dark:[--flow-end:#22d3ee] dark:[--flow-mid:#818cf8] dark:[--flow-start:#4f56c8]"
      viewBox="0 0 1000 300"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pipelineLineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="var(--flow-start)" stopOpacity="0.3" />
          <stop offset="0.5" stopColor="var(--flow-mid)" stopOpacity="0.85" />
          <stop offset="1" stopColor="var(--flow-end)" stopOpacity="0.6" />
        </linearGradient>
        <marker id="pipelineArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="var(--flow-mid)" opacity="0.85" />
        </marker>
      </defs>

      <g
        className="text-gray-300 dark:text-gray-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.5"
      >
        {inputPaths.map((d) => (
          <path key={`rail-in-${d}`} d={d} />
        ))}
        {outputPaths.map((d) => (
          <path key={`rail-out-${d}`} d={d} markerEnd="url(#pipelineArrow)" />
        ))}
      </g>

      <g fill="none" stroke="url(#pipelineLineGrad)" strokeWidth="1.8" strokeLinecap="round">
        {allPaths.map((d, index) => (
          <path
            key={`flow-${d}`}
            className="pipeline-flowline"
            d={d}
            markerEnd={outputPaths.includes(d) ? 'url(#pipelineArrow)' : undefined}
            style={{ animationDelay: `${index * 0.5}s` }}
          />
        ))}
      </g>
    </svg>
  )
}
