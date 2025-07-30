
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
  translations: any;
}

export default function Header({ currentLanguage, onLanguageChange, translations }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className={`bg-white shadow-lg sticky top-0 z-[100] border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'shadow-xl' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 truncate" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Rehmat E Quran
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer font-medium text-sm xl:text-base">
              {translations.home}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer font-medium text-sm xl:text-base">
              {translations.about}
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer font-medium text-sm xl:text-base">
              {translations.services}
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer font-medium text-sm xl:text-base">
              {translations.testimonials}
            </Link>
            <Link href="/contact" className="inline-flex items-center px-4 xl:px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm xl:text-base">
              {translations.contact}
            </Link>
          </nav>

          {/* Mobile/Tablet Controls */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden sm:block relative z-[101]">
              <LanguageToggle currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-emerald-600 cursor-pointer rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-white z-[99] overflow-y-auto">
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Language Toggle */}
              <div className="sm:hidden">
                <LanguageToggle currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
              </div>
              
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer font-medium px-4 py-3 rounded-lg hover:bg-gray-50 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translations.home}
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer font-medium px-4 py-3 rounded-lg hover:bg-gray-50 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translations.about}
                </Link>
                <Link 
                  href="/services" 
                  className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer font-medium px-4 py-3 rounded-lg hover:bg-gray-50 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translations.services}
                </Link>
                <Link 
                  href="/testimonials" 
                  className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer font-medium px-4 py-3 rounded-lg hover:bg-gray-50 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translations.testimonials}
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap mt-4 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translations.contact}
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
