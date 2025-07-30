
'use client';

interface ServicesHeroProps {
  translations: any;
}

export default function ServicesHero({ translations }: ServicesHeroProps) {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#services-list');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Beautiful%20Islamic%20spiritual%20healing%20center%20with%20peaceful%20mosque%20architecture%2C%20holy%20Quran%2C%20prayer%20beads%2C%20Islamic%20calligraphy%2C%20warm%20golden%20lighting%2C%20serene%20atmosphere%2C%20spiritual%20healing%20elements%2C%20professional%20consultation%20room%2C%20authentic%20Islamic%20environment%2C%20peaceful%20meditation%20space%2C%20divine%20light%20rays%2C%20sacred%20Islamic%20symbols%2C%20healing%20sanctuary&width=1920&height=1080&seq=services-hero-bg&orientation=landscape')`,
        }}
      >
        <div className="absolute inset-0 bg-emerald-900/70"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <div className="w-6 h-6 flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-emerald-100 font-medium">
                {translations.servicesTitle || 'Professional Islamic Spiritual Healing Services'}
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            {translations.servicesHeroTitle || 'Professional Islamic Spiritual Healing Services'}
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            {translations.servicesHeroSubtitle || 'Comprehensive Islamic spiritual healing solutions based on Quran and Sunnah'}
          </p>
          
          <p className="text-lg text-emerald-200 mb-12 leading-relaxed max-w-2xl mx-auto">
            {translations.servicesHeroDescription || 'Expert Islamic spiritual healing services for all life problems including Istikhara consultation, black magic removal, evil eye protection, marriage solutions, anxiety treatment, and spiritual guidance.'}
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
              {translations.contactNow || 'Contact Now for Consultation'}
            </a>
            
            <button
              onClick={scrollToNextSection}
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap border-2 border-white/20 hover:border-white/40"
            >
              <div className="w-6 h-6 flex items-center justify-center mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              {translations.learnMore || 'View All Services'}
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
  );
}
