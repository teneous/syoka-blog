import React from 'react'

interface CommandPromptProps {
  children: React.ReactNode
}

export const CommandPrompt: React.FC<CommandPromptProps> = ({ children }) => (
  <div className="terminal-card transform overflow-hidden rounded-xl border border-gray-200 bg-gray-50 font-mono text-sm shadow-xl transition-all duration-300 hover:scale-[1.01] dark:border-gray-700/50 dark:bg-gray-900">
    <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-100/80 p-3 dark:border-gray-700/50 dark:bg-gray-800/50">
      <div className="h-3 w-3 rounded-full bg-red-500/80 shadow-lg shadow-red-500/20"></div>
      <div className="h-3 w-3 rounded-full bg-yellow-500/80 shadow-lg shadow-yellow-500/20"></div>
      <div className="h-3 w-3 rounded-full bg-green-500/80 shadow-lg shadow-green-500/20"></div>
    </div>
    <div className="space-y-3 p-6">
      <div className="flex items-center gap-2 opacity-80">
        <span className="dark:text-primary-400 text-violet-500">$</span>
        <span className="text-gray-700 dark:text-gray-300">whoami</span>
      </div>
      <div className="dark:border-primary-500/30 border-l-2 border-violet-500/30 pl-4">
        {children}
      </div>
    </div>
  </div>
)

export default CommandPrompt
