import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { Terminal, Brain, Database, Cpu, Code, MessageSquare, Sparkles, GitBranch, Network } from 'lucide-react'

export const metadata = genPageMetadata({ title: 'About' })

const CommandPrompt = ({ children }: { children: React.ReactNode }) => (
  <div className="terminal-card font-mono text-sm">
    <div className="flex items-center gap-2 border-b border-gray-800 p-2 bg-gray-900">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <div className="p-4 space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-primary-400">$</span>
        <span className="text-gray-300">whoami</span>
      </div>
      {children}
    </div>
  </div>
)

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="feature-card">
    <div className="feature-icon">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
  </div>
)

const TechSection = ({ title, items }: { title: string; items: string[] }) => (
  <div className="tech-section">
    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
      <GitBranch className="w-5 h-5 text-primary-500" />
      <span className="gradient-text">{title}</span>
    </h3>
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="tech-item">
          <Sparkles className="w-4 h-4" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>
)

const ContactChip = ({ type, value }: { type: string; value: string }) => (
  <div className="contact-chip">
    <MessageSquare className="w-4 h-4" />
    <span className="font-medium">{type}:</span>
    <span className="text-primary-600 dark:text-primary-400">{value}</span>
  </div>
)

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <div className="space-y-12">
          {/* 终端风格介绍 */}
          <CommandPrompt>
            <div className="space-y-2">
              <span className="text-green-400">Syoka@dev</span>
              <p className="text-gray-300">一名热衷于构建高性能系统的全栈工程师</p>
              <p className="text-gray-300">专注于将 AI 能力无缝集成到生产环境中</p>
              <div className="flex gap-2 mt-2">
                <span className="terminal-tag">中文</span>
                <span className="terminal-tag">English</span>
                <span className="terminal-tag">日本語</span>
              </div>
            </div>
          </CommandPrompt>

          {/* 核心技能网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <TechSection
                title="⚡ Backend Core"
                items={[
                  "SpringBoot / Spring Cloud 微服务架构",
                  "分布式系统设计与优化",
                  "JVM 调优 & DDD 实践",
                  "高并发系统性能优化"
                ]}
              />
              <TechSection
                title="🧠 AI Engineering"
                items={[
                  "大规模 Agent & RAG 系统实现",
                  "LLM 模型微调与部署",
                  "TTS/ASR 多模态系统集成",
                  "AI 系统工程化实践"
                ]}
              />
            </div>
            <div className="space-y-6">
              <TechSection
                title="📊 Data Platforms"
                items={[
                  "OLAP 查询引擎优化",
                  "大规模 ETL Pipeline 设计",
                  "数据平台架构与开发",
                  "企业级数据治理方案"
                ]}
              />
              <div className="system-architecture-card">
                <div className="flex items-center gap-2 mb-4">
                  <Network className="w-5 h-5 text-primary-500" />
                  <h3 className="text-lg font-bold gradient-text">系统架构亮点</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FeatureCard
                    icon={Cpu}
                    title="高性能"
                    description="构建支持百万级并发的分布式系统"
                  />
                  <FeatureCard
                    icon={Brain}
                    title="AI 驱动"
                    description="将 AI 能力无缝集成到业务系统"
                  />
                  <FeatureCard
                    icon={Database}
                    title="数据优化"
                    description="优化 PB 级数据查询性能"
                  />
                  <FeatureCard
                    icon={Code}
                    title="工程化"
                    description="打造高可用的技术基础设施"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 项目经历 */}
          {/* <div className="p-6">
            <div className="prose-custom">
              <MDXLayoutRenderer code={author.body.code} />
            </div> */}
          {/* </div> */}

          {/* 联系方式 */}
          {/* <div className="flex flex-wrap gap-4">
            <ContactChip type="Email" value={author.email || 'syoka9471@gmail.com'} />
            <ContactChip type="GitHub" value="@teneous" />
            <ContactChip type="Languages" value="zh | en | jp" />
          </div> */}
        </div>
      </AuthorLayout>
    </>
  )
}
