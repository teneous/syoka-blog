export type Project = {
  title: string
  description: string
  stack: string[]
  status: 'active' | 'completed' | 'planning'
  link?: string
  isPrivate?: boolean
}

export const projects: Project[] = [
  {
    title: 'Text2Cypher',
    description: '基于大语言模型将自然语言转换为 Cypher 查询语句的工具',
    stack: ['Python', 'Langchain', 'Neo4j', 'PolarDB'],
    status: 'active',
    link: 'https://github.com/teneous/text2cypher',
    isPrivate: true,
  },
  {
    title: 'MCP-SpringAI',
    description: '基于SpringAI工程测试MCP服务',
    stack: ['SpringAI', 'MCP'],
    status: 'active',
    link: 'https://github.com/teneous/spring-ai-tutorials',
    isPrivate: false,
  },
]
