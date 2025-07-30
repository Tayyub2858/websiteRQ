
'use client';

import { useState, useEffect, useRef } from 'react';

interface LanguageToggleProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export default function LanguageToggle({ currentLanguage, onLanguageChange }: LanguageToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <div className="relative z-[200]" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-2 sm:px-3 py-1 sm:py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors cursor-pointer border border-emerald-200 hover:border-emerald-300"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-sm sm:text-base">{currentLang.flag}</span>
        <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
          <i className="ri-global-line text-emerald-600 text-sm sm:text-base"></i>
        </div>
        <span className="text-emerald-700 font-medium text-sm sm:text-base hidden sm:inline">
          {currentLang.name}
        </span>
        <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
          <i className={`ri-arrow-down-s-line text-emerald-600 transition-transform duration-300 text-sm sm:text-base ${isOpen ? 'rotate-180' : ''}`}></i>
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-[300] min-w-[180px] sm:min-w-[200px] animate-scale-up">
          <div className="py-1" role="listbox">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-left hover:bg-emerald-50 transition-colors cursor-pointer text-sm sm:text-base flex items-center space-x-3 ${
                  currentLanguage === lang.code ? 'bg-emerald-50 text-emerald-700 border-l-4 border-emerald-500' : 'text-gray-700'
                }`}
                role="option"
                aria-selected={currentLanguage === lang.code}
              >
                <span className="text-base sm:text-lg">{lang.flag}</span>
                <span className="flex-1 font-medium">{lang.name}</span>
                {currentLanguage === lang.code && (
                  <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                    <i className="ri-check-line text-emerald-600 text-sm sm:text-base"></i>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
