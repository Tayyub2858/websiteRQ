
'use client';

interface TestimonialsGridProps {
  translations: any;
}

export default function TestimonialsGrid({ translations }: TestimonialsGridProps) {
  const testimonials = [
    {
      name: "Ahmad Hassan",
      location: "Karachi, Pakistan",
      text: "After years of struggling with family problems, I contacted for spiritual healing. The Istikhara guidance helped me make the right decisions and now my family is at peace. Highly recommended for authentic Islamic solutions.",
      rating: 5,
      service: "Istikhara & Family Solutions",
      image: "https://readdy.ai/api/search-image?query=Professional%20Pakistani%20Muslim%20man%20in%20his%2030s%20with%20peaceful%20expression%2C%20traditional%20Islamic%20attire%2C%20satisfied%20client%20testimonial%2C%20spiritual%20healing%20success%20story%2C%20authentic%20Islamic%20healing%20client%2C%20blessed%20and%20peaceful%20face&width=150&height=150&seq=client-ahmad&orientation=squarish"
    },
    {
      name: "Fatima Khan",
      location: "Lahore, Pakistan",
      text: "I was suffering from severe anxiety and depression. The spiritual healing through Quranic verses and protective prayers completely transformed my life. I feel peaceful and blessed now.",
      rating: 5,
      service: "Anxiety & Depression Solution",
      image: "https://readdy.ai/api/search-image?query=Professional%20Pakistani%20Muslim%20woman%20in%20her%2020s%20with%20peaceful%20hijab%2C%20satisfied%20client%20testimonial%2C%20spiritual%20healing%20success%20story%2C%20authentic%20Islamic%20healing%20client%2C%20blessed%20and%20peaceful%20face&width=150&height=150&seq=client-fatima&orientation=squarish"
    },
    {
      name: "Muhammad Ali",
      location: "Islamabad, Pakistan",
      text: "My business was facing continuous losses and blockages. After the Bandish removal treatment, everything changed positively. My business is now thriving. Thank you for authentic Islamic healing.",
      rating: 5,
      service: "Bandish & Blockage Removal",
      image: "https://readdy.ai/api/search-image?query=Professional%20Pakistani%20Muslim%20businessman%20in%20his%2040s%20with%20confident%20expression%2C%20traditional%20Islamic%20attire%2C%20satisfied%20client%20testimonial%2C%20spiritual%20healing%20success%20story%2C%20authentic%20Islamic%20healing%20client&width=150&height=150&seq=client-ali&orientation=squarish"
    },
    {
      name: "Aisha Malik",
      location: "Faisalabad, Pakistan",
      text: "Marriage problems were destroying my life. The spiritual healing and protective amulets brought love and harmony back into my relationship. Grateful for this blessed service.",
      rating: 5,
      service: "Marriage Life Solutions",
      image: "https://readdy.ai/api/search-image?query=Professional%20Pakistani%20Muslim%20woman%20in%20her%2030s%20with%20peaceful%20hijab%2C%20satisfied%20client%20testimonial%2C%20spiritual%20healing%20success%20story%2C%20authentic%20Islamic%20healing%20client%2C%20blessed%20and%20peaceful%20face&width=150&height=150&seq=client-aisha&orientation=squarish"
    },
    {
      name: "Omar Sheikh",
      location: "Rawalpindi, Pakistan",
      text: "I was affected by black magic and evil eye. The complete removal treatment and spiritual protection have given me a new life. Professional and effective Islamic healing.",
      rating: 5,
      service: "Black Magic & Evil Eye Removal",
      image: "https://readdy.ai/api/search-image?query=Professional%20Pakistani%20Muslim%20man%20in%20his%2035s%20with%20peaceful%20expression%2C%20traditional%20Islamic%20attire%2C%20satisfied%20client%20testimonial%2C%20spiritual%20healing%20success%20story%2C%20authentic%20Islamic%20healing%20client&width=150&height=150&seq=client-omar&orientation=squarish"
    },
    {
      name: "Zainab Ahmed",
      location: "Multan, Pakistan",
      text: "Health issues that doctors couldn't cure were resolved through spiritual healing. The combination of Quranic treatment and protective prayers worked miracles for me.",
      rating: 5,
      service: "Health & Well-being",
      image: "https://readdy.ai/api/search-image?query=Professional%20Pakistani%20Muslim%20woman%20in%20her%2040s%20with%20peaceful%20hijab%2C%20satisfied%20client%20testimonial%2C%20spiritual%20healing%20success%20story%2C%20authentic%20Islamic%20healing%20client%2C%20blessed%20and%20peaceful%20face&width=150&height=150&seq=client-zainab&orientation=squarish"
    },
    {
      name: "Hassan Raza",
      location: "Peshawar, Pakistan",
      text: "My son was having behavioral issues and nightmares. After the spiritual healing and protective prayers, he is now calm and happy. Thank you for helping our family.",
      rating: 5,
      service: "Child Protection & Healing",
      image: "https://readdy.ai/api/search-image?query=Professional%20Pakistani%20Muslim%20man%20in%20his%2045s%20with%20grateful%20expression%2C%20traditional%20Islamic%20attire%2C%20satisfied%20client%20testimonial%2C%20spiritual%20healing%20success%20story%2C%20authentic%20Islamic%20healing%20client&width=150&height=150&seq=client-hassan&orientation=squarish"
    },
    {
      name: "Khadija Bibi",
      location: "Quetta, Pakistan",
      text: "I was unable to conceive for 8 years. After the spiritual healing and Islamic treatment, Allah blessed me with a healthy baby. Forever grateful for this miracle.",
      rating: 5,
      service: "Fertility & Conception",
      image: "https://readdy.ai/api/search-image?query=Professional%20Pakistani%20Muslim%20woman%20in%20her%2030s%20with%20grateful%20hijab%2C%20satisfied%20client%20testimonial%2C%20spiritual%20healing%20success%20story%2C%20authentic%20Islamic%20healing%20client%2C%20blessed%20and%20peaceful%20face&width=150&height=150&seq=client-khadija&orientation=squarish"
    },
    {
      name: "Abdullah Khan",
      location: "Hyderabad, Pakistan",
      text: "Court case was going against me for 3 years. After the spiritual healing and protective prayers, the case was dismissed and I got justice. Alhamdulillah!",
      rating: 5,
      service: "Legal Protection & Justice",
      image: "https://readdy.ai/api/search-image?query=Professional%20Pakistani%20Muslim%20man%20in%20his%2050s%20with%20peaceful%20expression%2C%20traditional%20Islamic%20attire%2C%20satisfied%20client%20testimonial%2C%20spiritual%20healing%20success%20story%2C%20authentic%20Islamic%20healing%20client&width=150&height=150&seq=client-abdullah&orientation=squarish"
    }
  ];

  return (
    <section id="testimonials-grid" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {translations.clientTestimonials || 'Client Testimonials'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {translations.clientTestimonialsSubtitle || 'Authentic success stories from our satisfied clients'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 shadow-md">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="inline-flex items-center bg-emerald-100 text-emerald-700 font-semibold px-4 py-2 rounded-full text-sm">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {testimonial.service}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://wa.me/923259107237"
            className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <div className="w-6 h-6 flex items-center justify-center mr-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
            </div>
            {translations.contactNow || 'Share Your Success Story'}
          </a>
        </div>
      </div>
    </section>
  );
}
