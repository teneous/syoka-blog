'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiNodedotjs,
  SiPython, SiOpenjdk, SiDocker, SiKubernetes, 
  SiMongodb, SiPostgresql, SiRedis, SiGithub, SiLinux,
  SiSpringboot, SiJetbrains, SiOpenai, SiMysql, SiGrafana,
  SiGit, SiPostman, SiAnaconda, SiHuggingface,
  SiApachekafka, SiPrometheus, SiElasticsearch,
  SiNeo4J, SiApache, SiKibana, SiAuth0,
  SiAlibabadotcom,
  SiOllama
} from 'react-icons/si'
import { TbApi, TbBrandVscode } from 'react-icons/tb'
import { BiLogoVisualStudio } from 'react-icons/bi'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { FaSearch, FaDatabase } from 'react-icons/fa'
import { IconType } from 'react-icons'

interface TechItem {
  name: string
  icon: IconType
}

interface TechCategory {
  name: string
  items: TechItem[]
}

export const techStacks: TechCategory[] = [
  {
    name: 'Most Used',
    items: [
      { name: 'Spring', icon: SiSpringboot },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'JetBrains', icon: SiJetbrains },
      { name: 'Docker', icon: SiDocker },
      { name: 'OpenAI', icon: SiOpenai },
    ]
  },
  {
    name: 'Languages',
    items: [
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python', icon: SiPython },
      { name: 'Java', icon: SiOpenjdk },
    ]
  },
  {
    name: 'Databases',
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Redis', icon: SiRedis },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Neo4j', icon: SiNeo4J },
    ]
  },
  {
    name: 'Middleware',
    items: [
      { name: 'Kafka', icon: SiApachekafka },
      { name: 'MaxCompute', icon: SiAlibabadotcom },
      { name: 'ElasticSearch', icon: SiElasticsearch },
      { name: 'Prometheus', icon: SiPrometheus },
      { name: 'Skywalking', icon: FaSearch },
      { name: 'OAuth', icon: SiAuth0 },
      { name: 'Ollama', icon: SiOllama },
      { name: 'RestAPI', icon: TbApi },
      { name: 'Kong', icon: FaDatabase },
      { name: 'Milvus', icon: GiArtificialIntelligence },
      { name: 'Langchain', icon: GiArtificialIntelligence },
      { name: 'Kibana', icon: SiKibana },
    ]
  },
  {
    name: 'DevOps & Tools',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Grafana', icon: SiGrafana },
      { name: 'Insomnia', icon: SiPostman },
      { name: 'Conda', icon: SiAnaconda },
      { name: 'Hugging Face', icon: SiHuggingface },
    ]
  }
]

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>(techStacks[0].name)

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          Tech Stack
        </h2>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {techStacks.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 text-sm rounded-lg transition-colors
                ${activeCategory === category.name
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tech Items Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {techStacks
            .find(c => c.name === activeCategory)
            ?.items.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.name}
                  className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-8 h-8 mb-2 text-gray-600 dark:text-gray-300" />
                  <span className="text-sm text-center text-gray-700 dark:text-gray-300">
                    {item.name}
                  </span>
                </motion.div>
              )
            })}
        </div>
      </div>
    </div>
  )
} 