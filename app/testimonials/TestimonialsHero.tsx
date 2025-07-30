
'use client';

interface TestimonialsHeroProps {
  translations: any;
}

export default function TestimonialsHero({ translations }: TestimonialsHeroProps) {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#testimonials-grid');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Happy%20satisfied%20Islamic%20spiritual%20healing%20clients%20with%20peaceful%20smiles%2C%20success%20stories%2C%20testimonials%20background%2C%20spiritual%20healing%20success%2C%20Islamic%20healing%20testimonials%2C%20grateful%20clients%2C%20positive%20healing%20results%2C%20authentic%20testimonials%2C%20successful%20spiritual%20healing%2C%20blessed%20clients%2C%20peaceful%20faces%2C%20healing%20success%20stories&width=1920&height=1080&seq=testimonials-hero-bg&orientation=landscape')`,
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <span className="text-emerald-100 font-medium">
                {translations.successStories || 'Success Stories'}
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            {translations.testimonialsHeroTitle || 'Success Stories & Client Testimonials'}
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            {translations.testimonialsHeroSubtitle || 'Real experiences from satisfied clients worldwide'}
          </p>
          
          <p className="text-lg text-emerald-200 mb-12 leading-relaxed max-w-2xl mx-auto">
            {translations.testimonialsHeroDescription || 'Discover how our authentic Islamic spiritual healing services have transformed lives across Pakistan and around the world.'}
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
              {translations.contactNow || 'Share Your Story'}
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
              {translations.readMore || 'Read Testimonials'}
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
