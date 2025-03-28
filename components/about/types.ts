export type Language = 'zh' | 'en'

export interface Company {
  name: string
  period: string
  role: string
  focus: string
}

export interface TechItem {
  title: string
  items: string[]
}

export interface ContentType {
  intro: string
  backendCore: TechItem
  aiEngineering: TechItem
  dataPlatforms: TechItem
  systemArchitecture: TechItem
  career: {
    title: string
    companies: Company[]
  }
} 