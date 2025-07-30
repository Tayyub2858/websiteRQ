
'use client';

import { useState } from 'react';

interface ContactHeroProps {
  translations: any;
}

export default function ContactHero({ translations }: ContactHeroProps) {
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#contact-form-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyToClipboard = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText("onlinerehmatquran@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = "onlinerehmatquran@gmail.com";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy email:', err);
      // Fallback method
      const textArea = document.createElement('textarea');
      textArea.value = "onlinerehmatquran@gmail.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20Islamic%20spiritual%20healing%20consultation%20office%20with%20peaceful%20atmosphere%2C%20consultation%20desk%2C%20Islamic%20healer%20welcoming%20clients%2C%20spiritual%20guidance%20session%2C%20authentic%20Islamic%20environment%2C%20consultation%20room%2C%20prayer%20area%2C%20professional%20healing%20center%2C%20warm%20lighting%2C%20spiritual%20consultation&width=1920&height=1080&seq=contact-hero-bg&orientation=landscape')`,
          }}
        >
          <div className="absolute inset-0 bg-emerald-900/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                <div className="w-6 h-6 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="text-emerald-100 font-medium">
                  {translations.getInTouch || 'Get in Touch'}
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {translations.contactHeroTitle || 'Get Professional Islamic Spiritual Healing Consultation'}
            </h1>
            
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              {translations.contactHeroSubtitle || 'Contact us for authentic Islamic spiritual healing services'}
            </p>
            
            <p className="text-lg text-emerald-200 mb-12 leading-relaxed max-w-2xl mx-auto">
              {translations.contactHeroDescription || 'Available 24/7 for spiritual consultation and guidance. Get help with all life problems through authentic Islamic methods.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/923259107237"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <div className="w-6 h-6 flex items-center justify-center mr-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </div>
                {translations.whatsapp || 'WhatsApp Now'}
              </a>
              
              <button
                onClick={() => setIsEmailPopupOpen(true)}
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap border-2 border-white/20 hover:border-white/40"
              >
                <div className="w-6 h-6 flex items-center justify-center mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                {translations.email || 'Send Email'}
              </button>
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
      </section>

      {/* Email Popup */}
      {isEmailPopupOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-sm sm:max-w-md w-full mx-4 animate-scale-up">
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Contact Us</h2>
                </div>
                <button
                  onClick={() => setIsEmailPopupOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="text-center mb-6 sm:mb-8">
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Ready to connect with us? Here's our email address:
                </p>
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border-2 border-dashed border-gray-200 mb-4 sm:mb-6">
                  <p className="text-base sm:text-lg font-semibold text-gray-800 break-all">
                    onlinerehmatquran@gmail.com
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <button
                  onClick={copyToClipboard}
                  className="w-full flex items-center justify-center px-4 sm:px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center mr-2 sm:mr-3">
                    {copied ? (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>
                  {copied ? 'Email Copied!' : 'Copy Email Address'}
                </button>

                <button
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open("mailto:onlinerehmatquran@gmail.com", "_blank");
                    }
                  }}
                  className="w-full flex items-center justify-center px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center mr-2 sm:mr-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  Open Email Client
                </button>

                <button
                  onClick={() => setIsEmailPopupOpen(false)}
                  className="w-full flex items-center justify-center px-4 sm:px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap text-sm sm:text-base"
                >
                  Close
                </button>
              </div>

              {/* Footer */}
              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-xs sm:text-sm text-gray-500">
                  Available 24/7 for spiritual guidance and consultation
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
