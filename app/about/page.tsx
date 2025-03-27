import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { Terminal, Brain, Database, Cpu, Code, MessageSquare, Sparkles, GitBranch, Network, Zap } from 'lucide-react'

export const metadata = genPageMetadata({ title: 'About' })

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

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <div className="space-y-12">
          {/* 终端风格介绍 */}
          <CommandPrompt>
            <div className="space-y-3">
              <span className="text-green-400 font-semibold">Syoka</span>
              <p className="text-gray-300">I’m a full stacker who loves building high-performance systems and seamlessly bringing AI capabilities into production environments.</p>
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
                  title="⚡ Backend Core"
                  items={[
                    "SpringBoot / Spring Cloud 微服务架构",
                    "分布式系统设计与优化",
                    "JVM 调优 & DDD 实践",
                    "高并发系统性能优化"
                  ]}
                />
              </div>
              <div className="flex-1">
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
            </div>
            <div className="space-y-8 flex flex-col">
              <div className="flex-1">
                <TechSection
                  title="📊 Data Platforms"
                  items={[
                    "OLAP 查询引擎优化",
                    "大规模 ETL Pipeline 设计",
                    "数据平台架构与开发",
                    "企业级数据治理方案"
                  ]}
                />
              </div>
              <div className="flex-1">
                <TechSection
                  title="🔧 系统架构亮点"
                  items={[
                    "构建支持百万级并发的分布式系统",
                    "将 AI 能力无缝集成到业务系统",
                    "优化 PB 级数据查询性能",
                    "打造高可用的技术基础设施"
                  ]}
                />
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
