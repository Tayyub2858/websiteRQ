
'use client';

interface AboutHeroProps {
  translations: any;
}

export default function AboutHero({ translations }: AboutHeroProps) {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#our-story-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20Islamic%20geometric%20patterns%20with%20intricate%20arabesque%20designs%2C%20golden%20calligraphy%20flourishes%2C%20sacred%20Islamic%20art%20with%20delicate%20mandala-like%20patterns%2C%20ornate%20mihrab%20architecture%20with%20flowing%20geometric%20lines%2C%20peaceful%20Islamic%20garden%20with%20fountains%20and%20geometric%20tiles%2C%20sophisticated%20Islamic%20manuscript%20illumination%20style%2C%20royal%20blue%20and%20gold%20Islamic%20decorative%20elements%2C%20divine%20light%20streaming%20through%20ornate%20Islamic%20window%20lattice%20work%2C%20celestial%20Islamic%20art%20with%20stars%20and%20crescents%20in%20elegant%20arrangement&width=1200&height=800&seq=about-hero-elegant&orientation=landscape')`
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {translations.aboutHeroTitle}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {translations.aboutHeroSubtitle}
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              {translations.aboutHeroDescription}
            </p>
          </div>
        </div>
      </div>
      
      {/* Properly positioned and functional scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center justify-center text-emerald-600 hover:text-emerald-800 transition-all duration-300 cursor-pointer group"
          aria-label="Scroll to next section"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200 hover:bg-emerald-50 transition-all duration-300 group-hover:scale-110 animate-bounce shadow-lg">
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
