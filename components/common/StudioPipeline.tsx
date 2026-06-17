'use client'

import type { ReactNode } from 'react'
import {
  ArrowRight,
  Bot,
  Boxes,
  Braces,
  Database,
  Lightbulb,
  MonitorSmartphone,
} from 'lucide-react'
import { useLanguage } from './useLanguage'

const systemCopy = {
  en: {
    inputKicker: 'Business signal',
    inputTitle: 'Business problem',
    inputDetail: 'User pain points, market signals, and product assumptions',
    systemTitle: 'Engineering System',
    frameTitle: 'System Architecture',
    frameDetail: 'Boundaries, services, APIs, observability, and evolution rules',
    agentTitle: 'AI Agent Ecosystem',
    agentDetail: 'Agents, RAG, tools, evaluation, and workflow orchestration',
    multiTitle: 'Multi-end Engineering',
    multiDetail: 'Web, backend, mini programs, integrations, and product delivery',
    dataTitle: 'Data Foundation',
    dataDetail: 'Models, metrics, pipelines, analysis, and reusable data assets',
    outputKicker: 'Result',
    outputTitle: 'Solution',
    outputDetail: 'Solution design, product implementation, and continuous iteration',
    note: 'Architecture sets the frame, data builds the foundation, and upper-layer engineering turns problems into usable solutions.',
  },
  zh: {
    inputKicker: '商业信号',
    inputTitle: '商业机会 / 用户痛点',
    inputDetail: '业务问题、用户反馈、市场信号与产品假设',
    systemTitle: '工程体系',
    frameTitle: '系统架构',
    frameDetail: '边界、服务、API、可观测性与演进规则',
    agentTitle: 'AI Agent 生态',
    agentDetail: 'Agent、RAG、工具接入、评估与工作流编排',
    multiTitle: '全栈多端',
    multiDetail: 'Web、后端、小程序、集成与产品交付',
    dataTitle: '数据建设壁垒',
    dataDetail: '模型、指标、管道、分析底座与可复用数据资产',
    outputKicker: '结果',
    outputTitle: '解决方案',
    outputDetail: '方案设计、产品实现与持续迭代',
    note: '系统架构提供骨架，数据形成底座，Agent 与多端工程把问题推进到可用方案。',
  },
}

export default function StudioPipeline() {
  const { language } = useLanguage()
  const copy = systemCopy[language]

  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-5 dark:border-gray-800 dark:bg-gray-900/80">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="relative grid gap-4 lg:grid-cols-[190px_minmax(0,1fr)_220px] lg:items-stretch">
        <FlowLines />

        <EndpointPanel
          icon="input"
          kicker={copy.inputKicker}
          title={copy.inputTitle}
          detail={copy.inputDetail}
        />

        <section className="relative z-10 overflow-hidden rounded-lg border border-gray-300 bg-white/92 p-4 dark:border-gray-700 dark:bg-gray-950/88">
          <div className="flex flex-col gap-3 border-b border-gray-200 pb-3 sm:flex-row sm:items-start sm:justify-between dark:border-gray-800">
            <div>
              <p className="text-sm font-semibold text-gray-950 dark:text-white">
                {copy.systemTitle}
              </p>
              <p className="mt-1 max-w-xl text-xs leading-5 text-gray-500 dark:text-gray-400">
                {copy.note}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 self-start rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
              <Braces className="h-3.5 w-3.5 text-violet-500" />
              {copy.frameTitle}
            </div>
          </div>

          <div className="engineering-frame-pulse relative mt-4 overflow-hidden rounded-lg border border-dashed border-gray-300 p-3 sm:p-4 dark:border-gray-700">
            <span className="engineering-scan-line pointer-events-none absolute inset-y-0 left-0 w-28" />
            <span className="engineering-bus-line engineering-bus-line-top pointer-events-none" />
            <span className="engineering-bus-line engineering-bus-line-bottom pointer-events-none" />
            <span className="engineering-data-lift pointer-events-none" />
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 bg-white text-violet-500 dark:border-gray-700 dark:bg-gray-950">
                <Braces className="h-3.5 w-3.5" />
              </span>
              <span>{copy.frameDetail}</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <CapabilityNode
                accent="violet"
                icon={<Bot className="h-4 w-4" />}
                title={copy.agentTitle}
                detail={copy.agentDetail}
              />
              <CapabilityNode
                accent="cyan"
                icon={<MonitorSmartphone className="h-4 w-4" />}
                title={copy.multiTitle}
                detail={copy.multiDetail}
              />
            </div>

            <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50/70 p-3 dark:border-emerald-900/70 dark:bg-emerald-950/30">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-emerald-200 bg-white text-emerald-600 dark:border-emerald-800 dark:bg-gray-950 dark:text-emerald-400">
                  <Database className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="text-sm font-semibold text-gray-950 dark:text-white">
                    {copy.dataTitle}
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-400">
                    {copy.dataDetail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EndpointPanel
          icon="output"
          kicker={copy.outputKicker}
          title={copy.outputTitle}
          detail={copy.outputDetail}
        />
      </div>
    </div>
  )
}

function FlowLines() {
  const paths = [
    { d: 'M112 158 C170 96 210 74 258 92', delay: '0s', variant: 'primary' },
    { d: 'M112 160 C174 160 206 160 258 160', delay: '0.45s', variant: 'primary' },
    { d: 'M112 162 C170 224 212 246 258 228', delay: '0.9s', variant: 'primary' },
    { d: 'M500 232 C456 206 430 178 420 136', delay: '1.25s', variant: 'secondary' },
    { d: 'M500 232 C552 206 574 178 590 136', delay: '1.65s', variant: 'secondary' },
    { d: 'M742 116 C798 118 834 144 884 158', delay: '2.1s', variant: 'primary' },
    { d: 'M742 160 C802 160 834 160 884 160', delay: '2.45s', variant: 'primary' },
    { d: 'M742 206 C798 204 834 176 884 162', delay: '2.8s', variant: 'primary' },
  ]

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-20 hidden h-full w-full lg:block dark:mix-blend-screen"
      viewBox="0 0 1000 320"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="engineeringLine" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="rgb(99 102 241)" stopOpacity="0.24" />
          <stop offset="0.5" stopColor="rgb(139 92 246)" stopOpacity="0.78" />
          <stop offset="1" stopColor="rgb(6 182 212)" stopOpacity="0.58" />
        </linearGradient>
        <marker
          id="engineeringArrow"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path d="M0 0 L8 4 L0 8 Z" fill="rgb(124 58 237)" opacity="0.85" />
        </marker>
      </defs>

      <g fill="none" strokeLinecap="round">
        {paths.map((path) => (
          <path
            key={`rail-${path.d}`}
            className="engineering-rail"
            d={path.d}
            markerEnd={path.d.includes('884') ? 'url(#engineeringArrow)' : undefined}
          />
        ))}
      </g>

      <g fill="none" stroke="url(#engineeringLine)" strokeLinecap="round">
        {paths.map((path) => (
          <path
            key={`flow-${path.d}`}
            className={`engineering-flow ${
              path.variant === 'secondary' ? 'engineering-flow-secondary' : ''
            }`}
            d={path.d}
            markerEnd={path.d.includes('884') ? 'url(#engineeringArrow)' : undefined}
            style={{ animationDelay: path.delay }}
          />
        ))}
      </g>
    </svg>
  )
}

function EndpointPanel({
  icon,
  kicker,
  title,
  detail,
}: {
  icon: 'input' | 'output'
  kicker: string
  title: string
  detail: string
}) {
  const Icon = icon === 'input' ? Lightbulb : Boxes

  return (
    <article className="relative z-10 flex min-h-[180px] flex-col justify-center rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 text-violet-500 dark:border-gray-700">
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-xs font-medium tracking-[0.16em] text-gray-500 uppercase">{kicker}</p>
      <h2 className="mt-2 text-base leading-6 font-semibold text-gray-950 dark:text-white">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{detail}</p>
      {icon === 'input' ? <ArrowRight className="mt-4 h-4 w-4 text-gray-400 lg:hidden" /> : null}
    </article>
  )
}

function CapabilityNode({
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
  const styles =
    accent === 'violet'
      ? 'border-violet-200 bg-violet-50/70 text-violet-600 dark:border-violet-900/70 dark:bg-violet-950/30 dark:text-violet-300'
      : 'border-cyan-200 bg-cyan-50/70 text-cyan-600 dark:border-cyan-900/70 dark:bg-cyan-950/30 dark:text-cyan-300'

  return (
    <div className={`relative overflow-hidden rounded-lg border p-3 ${styles}`}>
      <span className="engineering-node-sheen pointer-events-none absolute inset-y-0 -left-24 w-24" />
      <div className="relative flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-current/20 bg-white/75 dark:bg-gray-950/70">
          {icon}
        </span>
        <div>
          <h2 className="text-sm font-semibold text-gray-950 dark:text-white">{title}</h2>
          <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-400">{detail}</p>
        </div>
      </div>
    </div>
  )
}
