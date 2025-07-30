
'use client';

import Link from 'next/link';

interface TestimonialsSectionProps {
  translations: any;
}

export default function TestimonialsSection({ translations }: TestimonialsSectionProps) {
  const testimonials = [
    {
      name: "Ahmad Hassan",
      location: "Karachi, Pakistan",
      text: "After years of struggling with family problems, I contacted for spiritual healing. The Istikhara guidance helped me make the right decisions and now my family is at peace. Highly recommended for authentic Islamic solutions.",
      rating: 5,
      service: "Istikhara & Family Solutions"
    },
    {
      name: "Fatima Khan",
      location: "Lahore, Pakistan",
      text: "I was suffering from severe anxiety and depression. The spiritual healing through Quranic verses and protective prayers completely transformed my life. I feel peaceful and blessed now.",
      rating: 5,
      service: "Anxiety & Depression Solution"
    },
    {
      name: "Muhammad Ali",
      location: "Islamabad, Pakistan",
      text: "My business was facing continuous losses and blockages. After the Bandish removal treatment, everything changed positively. My business is now thriving. Thank you for authentic Islamic healing.",
      rating: 5,
      service: "Bandish & Blockage Removal"
    },
    {
      name: "Aisha Malik",
      location: "Faisalabad, Pakistan",
      text: "Marriage problems were destroying my life. The spiritual healing and protective amulets brought love and harmony back into my relationship. Grateful for this blessed service.",
      rating: 5,
      service: "Marriage Life Solutions"
    },
    {
      name: "Omar Sheikh",
      location: "Rawalpindi, Pakistan",
      text: "I was affected by black magic and evil eye. The complete removal treatment and spiritual protection have given me a new life. Professional and effective Islamic healing.",
      rating: 5,
      service: "Black Magic & Evil Eye Removal"
    },
    {
      name: "Zainab Ahmed",
      location: "Multan, Pakistan",
      text: "Health issues that doctors couldn't cure were resolved through spiritual healing. The combination of Quranic treatment and protective prayers worked miracles for me.",
      rating: 5,
      service: "Health & Well-being"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-2">
            {translations.testimonialsTitle}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            {translations.testimonialsSubtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              {/* User Info */}
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-md">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-base sm:text-lg">{testimonial.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base">
                "{testimonial.text}"
              </p>

              {/* Service Badge */}
              <div className="inline-flex items-center bg-emerald-100 text-emerald-700 font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm">
                <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center mr-1 sm:mr-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {testimonial.service}
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            href="/testimonials"
            className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 text-base sm:text-lg"
          >
            View All Testimonials
            <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center ml-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
