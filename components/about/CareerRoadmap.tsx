import React from 'react'

interface Company {
  name: string
  period: string
  role: string
  focus: string
}

interface CareerRoadmapProps {
  title: string
  companies: Company[]
}

export const CareerRoadmap: React.FC<CareerRoadmapProps> = ({ title, companies }) => (
  <div className="mt-12 rounded-xl border border-violet-500/20 bg-white/80 p-8 backdrop-blur-sm dark:bg-gray-900/50">
    <h3 className="mb-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-2xl font-bold text-transparent dark:from-violet-400 dark:to-fuchsia-400">
      {title}
    </h3>
    <div className="relative">
      <div className="absolute left-12 top-0 h-full w-1 bg-gradient-to-b from-violet-500/20 via-fuchsia-500/20 to-violet-500/20" />

      <div className="space-y-16">
        {companies.map((company, index) => (
          <div key={index} className="group relative">
            <div className="absolute left-12 top-8 h-[2px] w-8 bg-gradient-to-r from-violet-500/50 to-transparent" />

            <div className="flex items-start gap-8">
              <div className="relative flex-shrink-0">
                <div className="relative h-[100px] w-[100px] transition-transform duration-500 group-hover:scale-105">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 transition-colors duration-300 group-hover:from-violet-500/20 group-hover:to-fuchsia-500/20" />
                  <div className="absolute inset-2 flex items-center justify-center rounded-full border border-violet-500/20 bg-white/90 backdrop-blur-sm transition-colors duration-300 group-hover:border-violet-500/40 dark:bg-gray-900/50">
                    <span className="bg-gradient-to-br from-violet-500 to-fuchsia-500 bg-clip-text text-base font-bold text-transparent dark:from-violet-400 dark:to-fuchsia-400">
                      {company.name}
                    </span>
                  </div>
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-violet-500/0 via-violet-500/10 to-fuchsia-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="font-mono text-sm text-gray-500 dark:text-gray-400">{company.period}</span>
                </div>
              </div>

              <div className="flex-1 pt-4">
                <div className="transform rounded-xl border border-violet-500/20 bg-white/90 p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-violet-500/40 dark:bg-gray-900/50">
                  <div className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">{company.role}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{company.focus}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default CareerRoadmap 