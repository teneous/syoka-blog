import React from 'react'

type Language = 'zh' | 'en'

interface LanguageSwitchProps {
  language: Language
  setLanguage: (lang: Language) => void
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ language, setLanguage }) => (
  <div className="mb-8 flex gap-2">
    <button
      onClick={() => setLanguage('en')}
      className={`rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 ${language === 'en'
          ? 'bg-fuchsia-500 text-white'
          : 'bg-fuchsia-500/20 text-fuchsia-400 hover:bg-fuchsia-500/30'
        }`}
    >
      English
    </button>
    <button
      onClick={() => setLanguage('zh')}
      className={`rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 ${language === 'zh'
          ? 'bg-violet-500 text-white'
          : 'bg-violet-500/20 text-violet-400 hover:bg-violet-500/30'
        }`}
    >
      中文
    </button>
  </div>
)

export default LanguageSwitch
