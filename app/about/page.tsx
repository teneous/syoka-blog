'use client'

import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { Terminal, Brain, Database, Cpu, Code, MessageSquare, Sparkles, GitBranch, Network, Zap } from 'lucide-react'
import { useState } from 'react'

const content = {
  zh: {
    intro: "我是一名热衷于构建高性能系统的全栈工程师，专注于将 AI 能力无缝集成到生产环境中。",
    backendCore: {
      title: "⚡ 后端核心",
      items: [
        "SpringBoot / Spring Cloud 微服务架构",
        "分布式系统设计与优化",
        "JVM 调优 & DDD 实践",
        "高并发系统性能优化"
      ]
    },
    aiEngineering: {
      title: "🧠 AI 工程",
      items: [
        "大规模 Agent & RAG 系统实现",
        "LLM 模型微调与部署",
        "TTS/ASR 多模态系统集成",
        "AI 系统工程化实践"
      ]
    },
    dataPlatforms: {
      title: "📊 数据平台",
      items: [
        "OLAP 查询引擎优化",
        "大规模 ETL Pipeline 设计",
        "数据平台架构与开发",
        "企业级数据治理方案"
      ]
    },
    systemArchitecture: {
      title: "🔧 系统架构亮点",
      items: [
        "构建支持百万级并发的分布式系统",
        "将 AI 能力无缝集成到业务系统",
        "优化 PB 级数据查询性能",
        "打造高可用的技术基础设施"
      ]
    },
    career: {
      title: "🚀 职业旅程",
      companies: [
        {
          name: "腾云",
          period: "2024 - 至今",
          role: "技术专家",
          focus: "AI 产品研发"
        },
        {
          name: "创业",
          period: "2023 - 2024",
          role: "技术总监",
          focus: "AI 产品架构与研发"
        },
        {
          name: "阿里巴巴",
          period: "2022 - 2023",
          role: "大数据工程师",
          focus: "数据平台 & 离线计算"
        },
        {
          name: "派拉科技",
          period: "2020 - 2022",
          role: "基础架构工程师",
          focus: "微服务 & 高可用架构"
        }
      ]
    }
  },
  en: {
    intro: "I'm a full-stack engineer passionate about building high-performance systems and seamlessly integrating AI capabilities into production environments.",
    backendCore: {
      title: "⚡ Backend Core",
      items: [
        "SpringBoot / Spring Cloud Microservices",
        "Distributed System Design & Optimization",
        "JVM Tuning & DDD Practice",
        "High-concurrency Performance Optimization"
      ]
    },
    aiEngineering: {
      title: "🧠 AI Engineering",
      items: [
        "Large-scale Agent & RAG System Implementation",
        "LLM Model Fine-tuning & Deployment",
        "TTS/ASR Multimodal System Integration",
        "AI System Engineering Practices"
      ]
    },
    dataPlatforms: {
      title: "📊 Data Platforms",
      items: [
        "OLAP Query Engine Optimization",
        "Large-scale ETL Pipeline Design",
        "Data Platform Architecture & Development",
        "Enterprise Data Governance Solutions"
      ]
    },
    systemArchitecture: {
      title: "🔧 System Architecture",
      items: [
        "Million-level Concurrent System Development",
        "Seamless AI Capability Integration",
        "PB-level Data Query Optimization",
        "High-availability Infrastructure"
      ]
    },
    career: {
      title: "🚀 Career Journey",
      companies: [
        {
          name: "Tengyun",
          period: "2024 - Present",
          role: "Technical Expert",
          focus: "AI Product R&D"
        },
        {
          name: "Startup",
          period: "2023 - 2024",
          role: "Technical Director",
          focus: "AI Product Architecture & R&D"
        },
        {
          name: "Alibaba",
          period: "2022 - 2023",
          role: "Big Data Engineer",
          focus: "Data Platform & Offline Computing"
        },
        {
          name: "Pala Tech",
          period: "2020 - 2022",
          role: "Infrastructure Engineer",
          focus: "Microservices & High Availability"
        }
      ]
    }
  }
}

const LanguageSwitch = ({ language, setLanguage }: { language: 'zh' | 'en', setLanguage: (lang: 'zh' | 'en') => void }) => (
  <div className="flex gap-2 mb-8">
    <button
      onClick={() => setLanguage('zh')}
      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
        language === 'zh'
          ? 'bg-primary-500 text-white'
          : 'bg-primary-500/20 text-primary-500 hover:bg-primary-500/30'
      }`}
    >
      中文
    </button>
    <button
      onClick={() => setLanguage('en')}
      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
        language === 'en'
          ? 'bg-purple-500 text-white'
          : 'bg-purple-500/20 text-purple-500 hover:bg-purple-500/30'
      }`}
    >
      English
    </button>
  </div>
)

const CommandPrompt = ({ children }: { children: React.ReactNode }) => (
  <div className="terminal-card font-mono text-sm transform hover:scale-[1.01] transition-all duration-300 bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700/50">
    <div className="flex items-center gap-2 border-b border-gray-700/50 p-3 bg-gray-800/50">
      <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-lg shadow-red-500/20"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-lg shadow-yellow-500/20"></div>
      <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-lg shadow-green-500/20"></div>
    </div>
    <div className="p-6 space-y-3">
      <div className="flex items-center gap-2 opacity-80">
        <span className="text-primary-400">$</span>
        <span className="text-gray-300">whoami</span>
      </div>
      <div className="pl-4 border-l-2 border-primary-500/30">
        {children}
      </div>
    </div>
  </div>
)

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="tech-item flex items-center gap-3 p-2 rounded-lg hover:bg-primary-500/5 transition-colors duration-200">
    <div className="flex-shrink-0 p-1.5 rounded-md bg-primary-500/10">
      <Icon className="w-4 h-4 text-primary-500" />
    </div>
    <div>
      <h3 className="text-base font-medium text-gray-700 dark:text-gray-300">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
)

const TechSection = ({ title, items }: { title: string; items: string[] }) => (
  <div className="tech-section bg-white/5 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl p-6 border border-gray-200/10 dark:border-gray-700/30 h-[340px] transform hover:scale-[1.01] transition-all duration-300 shadow-lg hover:shadow-xl">
    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
      <GitBranch className="w-5 h-5 text-primary-500" />
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-500">{title}</span>
    </h3>
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="tech-item flex items-center gap-3 p-2 rounded-lg hover:bg-primary-500/5 transition-colors duration-200">
          <div className="flex-shrink-0 p-1.5 rounded-md bg-primary-500/10">
            <Zap className="w-4 h-4 text-primary-500" />
          </div>
          <span className="text-gray-700 dark:text-gray-300">{item}</span>
        </div>
      ))}
    </div>
  </div>
)

const ContactChip = ({ type, value }: { type: string; value: string }) => (
  <div className="contact-chip inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 dark:bg-gray-800/30 border border-gray-200/10 dark:border-gray-700/30 hover:border-primary-500/50 transition-all duration-300">
    <MessageSquare className="w-4 h-4 text-primary-500" />
    <span className="font-medium text-gray-700 dark:text-gray-300">{type}:</span>
    <span className="text-primary-600 dark:text-primary-400">{value}</span>
  </div>
)

const CareerRoadmap = ({ title, companies }: { 
  title: string, 
  companies: Array<{ name: string; period: string; role: string; focus: string }> 
}) => (
  <div className="mt-12 p-8 bg-white/5 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-200/10 dark:border-gray-700/30">
    <h3 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-500">
      {title}
    </h3>
    <div className="relative">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-12 w-1 h-full bg-gradient-to-b from-primary-500/20 via-purple-500/20 to-primary-500/20" />
      
      <div className="space-y-16">
        {companies.map((company, index) => (
          <div key={index} className="relative group">
            {/* 连接线装饰 */}
            <div className="absolute top-8 left-12 w-8 h-[2px] bg-gradient-to-r from-primary-500/50 to-transparent" />
            
            <div className="flex gap-8 items-start">
              {/* 时间节点 */}
              <div className="relative flex-shrink-0">
                <div className="w-[100px] h-[100px] relative group-hover:scale-105 transition-transform duration-500">
                  {/* 背景圆环 */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/10 to-purple-500/10 group-hover:from-primary-500/20 group-hover:to-purple-500/20 transition-colors duration-300" />
                  {/* 公司名称 */}
                  <div className="absolute inset-2 rounded-full bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm flex items-center justify-center border border-gray-200/10 dark:border-gray-700/30 group-hover:border-primary-500/30 transition-colors duration-300">
                    <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary-500 to-purple-500">
                      {company.name}
                    </span>
                  </div>
                  {/* 发光效果 */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-purple-500/0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* 时间标签 */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">{company.period}</span>
                </div>
              </div>

              {/* 内容卡片 */}
              <div className="flex-1 pt-4">
                <div className="bg-white/5 dark:bg-gray-800/40 rounded-xl p-4 transform group-hover:-translate-y-1 transition-all duration-300 border border-gray-200/10 dark:border-gray-700/30 group-hover:border-primary-500/30">
                  <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    {company.role}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {company.focus}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default function Page() {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh')
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)
  const t = content[language]

  return (
    <>
      <AuthorLayout content={mainContent}>
        <div className="space-y-12">
          <LanguageSwitch language={language} setLanguage={setLanguage} />
          
          {/* 终端风格介绍 */}
          <CommandPrompt>
            <div className="space-y-3">
              <span className="text-green-400 font-semibold">Syoka@dev</span>
              <p className="text-gray-300">{t.intro}</p>
              <div className="flex gap-2 mt-3">
                <span className="terminal-tag px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-500">中文</span>
                <span className="terminal-tag px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-500">English</span>
                <span className="terminal-tag px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-500">日本語</span>
              </div>
            </div>
          </CommandPrompt>

          {/* 核心技能网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8 flex flex-col">
              <div className="flex-1">
                <TechSection
                  title={t.backendCore.title}
                  items={t.backendCore.items}
                />
              </div>
              <div className="flex-1">
                <TechSection
                  title={t.aiEngineering.title}
                  items={t.aiEngineering.items}
                />
              </div>
            </div>
            <div className="space-y-8 flex flex-col">
              <div className="flex-1">
                <TechSection
                  title={t.dataPlatforms.title}
                  items={t.dataPlatforms.items}
                />
              </div>
              <div className="flex-1">
                <TechSection
                  title={t.systemArchitecture.title}
                  items={t.systemArchitecture.items}
                />
              </div>
            </div>
          </div>

          {/* 职业旅程 */}
          <CareerRoadmap
            title={t.career.title}
            companies={t.career.companies}
          />
        </div>
      </AuthorLayout>
    </>
  )
}
