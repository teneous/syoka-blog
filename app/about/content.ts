import type { ContentType } from '@/components/about/types'

export const content: Record<'zh' | 'en', ContentType> = {
  zh: {
    intro: '我是一名热衷于构建高性能系统的全栈工程师，专注于将 AI 能力无缝集成到生产环境中。',
    backendCore: {
      title: '后端核心',
      items: [
        'SpringBoot / Spring Cloud 微服务架构',
        '分布式系统设计与优化',
        'JVM 调优 & DDD 实践',
        '高并发系统性能优化',
      ],
    },
    aiEngineering: {
      title: 'AI 工程',
      items: [
        '企业级 Agent & RAG 系统实现',
        'LLM 模型微调与部署',
        'TTS/ASR 多模态系统集成',
        'AI 系统工程化实践',
      ],
    },
    dataPlatforms: {
      title: '数据平台',
      items: ['OLAP 查询引擎优化', '数据平台架构与开发', '企业级数据治理方案'],
    },
    systemArchitecture: {
      title: '系统架构亮点',
      items: [
        '构建支持百万级并发的分布式系统',
        '将 AI 能力无缝集成到业务系统',
        '打造高可用的技术基础设施',
      ],
    },
    career: {
      title: '🚀 职业旅程',
      companies: [
        {
          name: '腾云',
          period: '2024 - 至今',
          role: '技术专家',
          focus: 'AI 产品研发',
        },
        {
          name: '创业',
          period: '2023 - 2024',
          role: '技术总监',
          focus: 'AI 产品架构与研发',
        },
        {
          name: '蚂蚁集团',
          period: '2022 - 2023',
          role: '大数据工程师',
          focus: '数据平台 & 离线计算',
        },
        {
          name: '派拉软件',
          period: '2020 - 2022',
          role: '基础架构工程师',
          focus: '微服务 & 高可用架构',
        },
      ],
    },
  },
  en: {
    intro:
      "I'm a full-stack engineer passionate about building high-performance systems and seamlessly integrating AI capabilities into production environments.",
    backendCore: {
      title: 'Backend Core',
      items: [
        'SpringBoot / Spring Cloud Microservices',
        'Distributed System Design & Optimization',
        'JVM Tuning & DDD Practice',
        'High-concurrency Performance Optimization',
      ],
    },
    aiEngineering: {
      title: 'AI Engineering',
      items: [
        'Enterprise-level Agent & RAG System Implementation',
        'LLM Model Fine-tuning & Deployment',
        'TTS/ASR Multimodal System Integration',
        'AI System Engineering Practices',
      ],
    },
    dataPlatforms: {
      title: 'Data Platforms',
      items: [
        'OLAP Query Engine Optimization',
        'Data Platform Architecture & Development',
        'Enterprise Data Governance Solutions',
      ],
    },
    systemArchitecture: {
      title: 'System Architecture',
      items: [
        'Million-level Concurrent System Development',
        'Seamless AI Capability Integration',
        'High-availability Infrastructure',
      ],
    },
    career: {
      title: '🚀 Career Journey',
      companies: [
        {
          name: 'Tengyun',
          period: '2024 - Present',
          role: 'Technical Expert',
          focus: 'AI Product R&D',
        },
        {
          name: 'Startup',
          period: '2023 - 2024',
          role: 'Technical Director',
          focus: 'AI Product Architecture & R&D',
        },
        {
          name: 'AntGroup',
          period: '2022 - 2023',
          role: 'Big Data Engineer',
          focus: 'Data Platform & Offline Computing',
        },
        {
          name: 'Paraview',
          period: '2020 - 2022',
          role: 'Infrastructure Engineer',
          focus: 'Microservices & High Availability',
        },
      ],
    },
  },
}
