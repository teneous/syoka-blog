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
  <div className="mt-12 overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-white/80 via-purple-50/20 to-fuchsia-50/20 p-8 shadow-lg backdrop-blur-sm dark:from-gray-900/80 dark:via-purple-900/20 dark:to-fuchsia-900/20">
    <h3 className="relative mb-12 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-2xl font-bold text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400">
      {title}
      <div className="absolute -bottom-4 left-0 h-px w-24 bg-gradient-to-r from-violet-500/50 to-transparent" />
    </h3>
    <div className="relative">
      <div className="absolute top-0 left-12 h-full w-[2px] bg-gradient-to-b from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 dark:from-violet-400/20 dark:via-purple-400/20 dark:to-fuchsia-400/20" />
      <div className="space-y-16">
        {companies.map((company, index) => (
          <div key={index} className="group relative">
            <div className="absolute top-8 left-[46px] h-[2px] w-8 bg-gradient-to-r from-violet-500/50 to-transparent dark:from-violet-400/50" />

            <div className="flex items-start gap-8">
              <div className="relative flex-shrink-0">
                <div className="relative h-[100px] w-[100px] transform transition-all duration-500 ease-out group-hover:scale-105 group-hover:rotate-2">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 transition-colors duration-300 group-hover:from-violet-500/20 group-hover:to-fuchsia-500/20" />
                  <div className="absolute inset-[2px] flex items-center justify-center rounded-xl border-2 border-violet-500/20 bg-white/90 p-2 backdrop-blur-sm transition-colors duration-300 group-hover:border-violet-500/40 dark:bg-gray-900/50 dark:group-hover:border-violet-400/40">
                    <span className="bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-lg font-bold text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400">
                      {company.name}
                    </span>
                  </div>
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-violet-500/0 via-purple-500/5 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="font-mono text-sm font-medium text-violet-600/70 dark:text-violet-400/70">
                    {company.period}
                  </span>
                </div>
              </div>
              <div className="flex-1 pt-4">
                <div className="transform overflow-hidden rounded-xl border-2 border-violet-500/20 bg-gradient-to-br from-white/90 to-violet-50/20 p-5 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-violet-500/40 group-hover:shadow-md dark:from-gray-900/90 dark:to-violet-900/20 dark:group-hover:border-violet-400/40">
                  <div className="relative">
                    <div className="mb-2 text-lg font-bold text-violet-900 dark:text-violet-300">
                      {company.role}
                    </div>
                    <div className="text-sm leading-relaxed text-violet-800/80 dark:text-violet-300/80">
                      {company.focus}
                    </div>
                  </div>
                  <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 blur-3xl transition-opacity duration-300 group-hover:opacity-70" />
                  <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 blur-2xl transition-opacity duration-300 group-hover:opacity-70" />
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
