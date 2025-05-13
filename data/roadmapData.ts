export interface SkillNode {
  id: string
  title: string
  description: string
  level: 'required' | 'recommended' | 'optional'
  type?: 'tool' | 'concept' | 'platform'
  status?: 'done' | 'in-progress' | 'todo'
  resources?: {
    title: string
    url: string
    type: 'documentation' | 'course' | 'blog' | 'video'
  }[]
  prerequisites?: string[]
}

export interface RoadmapCategory {
  id: string
  title: string
  description: string
  skills: SkillNode[]
}

export const frontendRoadmap: RoadmapCategory[] = [
  {
    id: 'basics',
    title: '前端基础',
    description: '前端开发的基础知识',
    skills: [
      {
        id: 'html',
        title: 'HTML',
        description: '学习HTML标签、语义化、表单等基础知识',
        level: 'required',
        type: 'concept',
        resources: [
          {
            title: 'MDN HTML指南',
            url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML',
            type: 'documentation',
          },
        ],
      },
      {
        id: 'css',
        title: 'CSS',
        description: '掌握选择器、布局、响应式设计等',
        level: 'required',
        type: 'concept',
        prerequisites: ['html'],
        resources: [
          {
            title: 'MDN CSS指南',
            url: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS',
            type: 'documentation',
          },
        ],
      },
      {
        id: 'javascript',
        title: 'JavaScript基础',
        description: '变量、数据类型、函数、对象等基础概念',
        level: 'required',
        type: 'concept',
        prerequisites: ['html', 'css'],
        resources: [
          {
            title: 'JavaScript教程',
            url: 'https://wangdoc.com/javascript/',
            type: 'documentation',
          },
        ],
      },
      {
        id: 'es6',
        title: 'ES6+特性',
        description: '现代JavaScript特性和语法',
        level: 'recommended',
        type: 'concept',
        prerequisites: ['javascript'],
        resources: [
          {
            title: 'ES6教程',
            url: 'https://es6.ruanyifeng.com/',
            type: 'documentation',
          },
        ],
      },
      {
        id: 'typescript',
        title: 'TypeScript',
        description: 'JavaScript的超集，添加了类型系统',
        level: 'recommended',
        type: 'tool',
        prerequisites: ['es6'],
        resources: [
          {
            title: 'TypeScript官方文档',
            url: 'https://www.typescriptlang.org/zh/',
            type: 'documentation',
          },
        ],
      },
    ],
  },
  {
    id: 'framework',
    title: '前端框架',
    description: '现代前端开发框架',
    skills: [
      {
        id: 'react-basic',
        title: 'React基础',
        description: 'React组件、JSX、Props和State',
        level: 'required',
        type: 'platform',
        prerequisites: ['javascript', 'es6'],
        resources: [
          {
            title: 'React官方文档',
            url: 'https://react.dev',
            type: 'documentation',
          },
        ],
      },
      {
        id: 'react-hooks',
        title: 'React Hooks',
        description: '使用Hooks管理状态和副作用',
        level: 'required',
        type: 'concept',
        prerequisites: ['react-basic'],
        resources: [
          {
            title: 'React Hooks文档',
            url: 'https://react.dev/reference/react',
            type: 'documentation',
          },
        ],
      },
      {
        id: 'react-router',
        title: 'React Router',
        description: 'React应用的路由管理',
        level: 'recommended',
        type: 'tool',
        prerequisites: ['react-hooks'],
        resources: [
          {
            title: 'React Router文档',
            url: 'https://reactrouter.com',
            type: 'documentation',
          },
        ],
      },
      {
        id: 'state-management',
        title: '状态管理',
        description: 'Redux、Zustand等状态管理工具',
        level: 'optional',
        type: 'tool',
        prerequisites: ['react-hooks'],
        resources: [
          {
            title: 'Redux文档',
            url: 'https://redux.js.org',
            type: 'documentation',
          },
        ],
      },
    ],
  },
]

export const backendRoadmap: RoadmapCategory[] = [
  {
    id: 'basics',
    title: '后端基础',
    description: '后端开发的基础知识',
    skills: [
      {
        id: 'programming-basic',
        title: '编程基础',
        description: '数据结构、算法、设计模式',
        level: 'beginner',
        resources: [
          {
            title: 'LeetCode',
            url: 'https://leetcode.cn',
          },
        ],
      },
      {
        id: 'nodejs',
        title: 'Node.js',
        description: '服务器端JavaScript运行时',
        level: 'intermediate',
        prerequisites: ['programming-basic'],
        resources: [
          {
            title: 'Node.js文档',
            url: 'https://nodejs.org/zh-cn/docs',
          },
        ],
      },
      {
        id: 'express',
        title: 'Express',
        description: 'Node.js Web应用框架',
        level: 'intermediate',
        prerequisites: ['nodejs'],
        resources: [
          {
            title: 'Express文档',
            url: 'https://expressjs.com',
          },
        ],
      },
      {
        id: 'database',
        title: '数据库',
        description: 'SQL和NoSQL数据库',
        level: 'intermediate',
        prerequisites: ['programming-basic'],
        resources: [
          {
            title: 'MongoDB文档',
            url: 'https://www.mongodb.com/docs/',
          },
        ],
      },
    ],
  },
]

export const devopsRoadmap: RoadmapCategory[] = [
  {
    id: 'fundamentals',
    title: 'DevOps 基础',
    description: 'DevOps 工程师的基础知识',
    skills: [
      {
        id: 'learn-programming',
        title: '编程语言基础',
        description: '掌握至少一门编程语言（Python/Go/JavaScript）',
        level: 'required',
        type: 'concept',
        resources: [
          {
            title: 'Python官方教程',
            url: 'https://docs.python.org/zh-cn/3/',
            type: 'documentation',
          },
          {
            title: 'Go语言之旅',
            url: 'https://tour.go-zh.org/',
            type: 'documentation',
          },
        ],
      },
      {
        id: 'os-concepts',
        title: '操作系统概念',
        description: '进程管理、线程、文件系统等基础知识',
        level: 'required',
        type: 'concept',
        resources: [
          {
            title: 'Linux 系统管理基础',
            url: 'https://www.linuxcool.com/',
            type: 'documentation',
          },
        ],
      },
    ],
  },
  {
    id: 'os-administration',
    title: '系统管理',
    description: '操作系统管理与配置',
    skills: [
      {
        id: 'linux',
        title: 'Linux操作系统',
        description: '掌握Linux系统管理、Shell脚本等',
        level: 'required',
        type: 'platform',
        prerequisites: ['os-concepts'],
        resources: [
          {
            title: 'Linux命令大全',
            url: 'https://www.linuxcool.com/',
            type: 'documentation',
          },
        ],
      },
      {
        id: 'terminal',
        title: '终端使用',
        description: '熟练使用命令行工具和Shell',
        level: 'required',
        type: 'tool',
        prerequisites: ['linux'],
        resources: [
          {
            title: 'Shell脚本教程',
            url: 'https://www.shellscript.sh/',
            type: 'documentation',
          },
        ],
      },
    ],
  },
  {
    id: 'networking',
    title: '网络知识',
    description: '网络协议与安全',
    skills: [
      {
        id: 'protocols',
        title: '网络协议',
        description: '理解HTTP(S)、TCP/IP、DNS等协议',
        level: 'required',
        type: 'concept',
        prerequisites: ['os-concepts'],
        resources: [
          {
            title: '网络协议教程',
            url: 'https://www.ruanyifeng.com/blog/2012/05/internet_protocol_suite_part_i.html',
            type: 'blog',
          },
        ],
      },
      {
        id: 'security',
        title: '网络安全',
        description: 'SSL/TLS、防火墙、安全策略',
        level: 'recommended',
        type: 'concept',
        prerequisites: ['protocols'],
        resources: [
          {
            title: '网络安全基础',
            url: 'https://owasp.org/',
            type: 'documentation',
          },
        ],
      },
    ],
  },
  {
    id: 'container',
    title: '容器化',
    description: '容器技术和编排',
    skills: [
      {
        id: 'docker',
        title: 'Docker',
        description: '容器基础、镜像构建、Docker Compose',
        level: 'required',
        type: 'tool',
        prerequisites: ['linux'],
        resources: [
          {
            title: 'Docker官方文档',
            url: 'https://docs.docker.com/',
            type: 'documentation',
          },
        ],
      },
      {
        id: 'kubernetes',
        title: 'Kubernetes',
        description: '容器编排、集群管理、服务发现',
        level: 'recommended',
        type: 'platform',
        prerequisites: ['docker'],
        resources: [
          {
            title: 'Kubernetes文档',
            url: 'https://kubernetes.io/zh-cn/docs/home/',
            type: 'documentation',
          },
        ],
      },
    ],
  },
]

export interface Article {
  id: string
  title: string
  description: string
  date: string
  tags: string[]
  url: string
  type: 'blog' | 'documentation' | 'video' | 'tutorial'
}

export interface KnowledgeCategory {
  id: string
  title: string
  description: string
  icon: string
  articles: Article[]
}

export const knowledgeBase: KnowledgeCategory[] = [
  {
    id: 'frontend',
    title: '前端开发',
    description: '前端技术栈相关的学习资源和实践经验',
    icon: '💻',
    articles: [
      {
        id: 'react-hooks-best-practices',
        title: 'React Hooks 最佳实践总结',
        description: '基于实际项目经验，总结了React Hooks的使用技巧和注意事项',
        date: '2024-03-15',
        tags: ['React', 'Hooks', '最佳实践'],
        url: '/blog/react-hooks-best-practices',
        type: 'blog',
      },
      {
        id: 'typescript-advanced',
        title: 'TypeScript 高级特性解析',
        description: '深入理解TypeScript的类型系统和高级用法',
        date: '2024-03-10',
        tags: ['TypeScript', '进阶教程'],
        url: '/blog/typescript-advanced',
        type: 'tutorial',
      },
    ],
  },
  {
    id: 'backend',
    title: '后端开发',
    description: '后端架构设计和实践经验分享',
    icon: '⚙️',
    articles: [
      {
        id: 'nodejs-performance',
        title: 'Node.js 性能优化实践',
        description: '如何优化Node.js应用的性能和可伸缩性',
        date: '2024-03-12',
        tags: ['Node.js', '性能优化', '最佳实践'],
        url: '/blog/nodejs-performance',
        type: 'blog',
      },
      {
        id: 'database-design',
        title: '数据库设计原则与实践',
        description: '关系型数据库设计的核心原则和最佳实践',
        date: '2024-03-08',
        tags: ['数据库', '架构设计'],
        url: '/blog/database-design',
        type: 'documentation',
      },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps实践',
    description: '自动化部署和运维经验总结',
    icon: '🛠',
    articles: [
      {
        id: 'docker-compose-guide',
        title: 'Docker Compose 实践指南',
        description: '使用Docker Compose管理多容器应用的最佳实践',
        date: '2024-03-14',
        tags: ['Docker', 'DevOps', '容器化'],
        url: '/blog/docker-compose-guide',
        type: 'tutorial',
      },
      {
        id: 'ci-cd-pipeline',
        title: 'CI/CD流水线搭建详解',
        description: '从零开始搭建完整的CI/CD流水线',
        date: '2024-03-11',
        tags: ['CI/CD', 'Jenkins', 'GitLab'],
        url: '/blog/ci-cd-pipeline',
        type: 'video',
      },
    ],
  },
]
