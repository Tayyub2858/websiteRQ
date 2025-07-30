
'use client';

import Link from 'next/link';
import { useState } from 'react';
import EmailPopup from './EmailPopup';

interface HeroSectionProps {
  translations: any;
}

export default function HeroSection({ translations }: HeroSectionProps) {
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#services-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Beautiful%20Islamic%20mosque%20with%20golden%20domes%20and%20minarets%20at%20sunset%2C%20ornate%20Islamic%20lanterns%20and%20lamps%20glowing%20warmly%2C%20intricate%20Islamic%20geometric%20patterns%20and%20arabesque%20textures%20on%20marble%20walls%2C%20peaceful%20mosque%20courtyard%20with%20traditional%20Islamic%20architecture%2C%20decorative%20Islamic%20calligraphy%20on%20ancient%20stone%20walls%2C%20golden%20Islamic%20oil%20lamps%20and%20hanging%20lanterns%20creating%20mystical%20atmosphere%2C%20traditional%20Islamic%20prayer%20rugs%20with%20geometric%20patterns%2C%20crescent%20moon%20and%20stars%20in%20twilight%20sky%20above%20mosque%2C%20warm%20golden%20lighting%20illuminating%20Islamic%20architectural%20details%2C%20sacred%20Islamic%20environment%20with%20spiritual%20ambiance%20and%20divine%20light&width=1920&height=1080&seq=hero-mosque-lamps&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Logo Section */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <img 
                src="https://static.readdy.ai/image/bc294c6119f7e425505ddb9be20b2472/46703a07e2e92119d9e52ebb6ace0d08.png" 
                alt="Rehmat E Quran - Islamic Spiritual Healing Center Logo" 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain drop-shadow-2xl"
                loading="eager"
                width="224"
                height="224"
              />
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight drop-shadow-lg px-2">
            {translations.heroTitle}
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-emerald-100 drop-shadow-md max-w-4xl mx-auto px-2">
            {translations.heroSubtitle}
          </p>
          
          {/* Description Card */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-6 px-2">
              {translations.heroDescription}
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-300 mb-1 sm:mb-2">15+</div>
                <div className="text-xs sm:text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-300 mb-1 sm:mb-2">10,000+</div>
                <div className="text-xs sm:text-sm text-gray-300">Satisfied Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-300 mb-1 sm:mb-2">98%</div>
                <div className="text-xs sm:text-sm text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons - Fixed positioning */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-2 mb-16">
            <a
              href="https://wa.me/923259107237"
              className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-sm sm:text-base lg:text-lg rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap shadow-xl border-2 border-emerald-500/30 backdrop-blur-sm hover:shadow-2xl transform hover:scale-105"
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex items-center justify-center mr-2 sm:mr-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </div>
              {translations.contactNow}
            </a>
            
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-white/20 hover:bg-white/30 text-white font-bold text-sm sm:text-base lg:text-lg rounded-full transition-all duration-300 cursor-pointer backdrop-blur-sm whitespace-nowrap shadow-xl border-2 border-white/30 hover:shadow-2xl transform hover:scale-105"
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex items-center justify-center mr-2 sm:mr-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              {translations.learnMore}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Properly positioned and functional scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center justify-center text-white/80 hover:text-white transition-all duration-300 cursor-pointer group"
          aria-label="Scroll to next section"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-110 animate-bounce">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <span className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll Down
          </span>
        </button>
      </div>

      <EmailPopup 
        isOpen={isEmailPopupOpen} 
        onClose={() => setIsEmailPopupOpen(false)} 
      />
    </section>
  );
}
