
'use client';

import { useState } from 'react';
import { translations } from '../lib/languages';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import EmailPopup from '../components/EmailPopup';

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const t = translations[currentLanguage as keyof typeof translations];

  return (
    <div className="min-h-screen relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Rehmat E Quran - World's Leading Islamic Spiritual Healing Center",
            "description": " World's most trusted Islamic spiritual healing center providing expert Quranic treatment, Istikhara consultation, black magic removal, evil eye protection, marriage solutions, and comprehensive spiritual guidance based on Holy Quran and Sunnah. Serving clients worldwide in Pakistan, UAE, Saudi Arabia, Kuwait, Qatar, USA, Australia, UK, Europe, Malaysia, Turkey with 15+ years of experience and 10,000+ satisfied clients.",
            "url": "https://rehmatequran.com",
            "telephone": "+92-325-9107237",
            "email": "onlinerehmatquran@gmail.com",
            "image": "https://static.readdy.ai/image/bc294c6119f7e425505ddb9be20b2472/46703a07e2e92119d9e52ebb6ace0d08.png",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "PK",
              "addressRegion": "Pakistan",
              "addressLocality": "Pakistan"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.3753",
              "longitude": "69.3451"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "paymentAccepted": "Cash, Bank Transfer, Online Payment, Credit Card",
            "currenciesAccepted": "PKR, USD, EUR, AED, SAR, KWD, QAR, GBP, AUD, MYR, TRY",
            "priceRange": "$$",
            "serviceArea": [
              {
                "@type": "Country",
                "name": "Pakistan"
              },
              {
                "@type": "Country",
                "name": "United Arab Emirates"
              },
              {
                "@type": "Country",
                "name": "Saudi Arabia"
              },
              {
                "@type": "Country",
                "name": "Kuwait"
              },
              {
                "@type": "Country",
                "name": "Qatar"
              },
              {
                "@type": "Country",
                "name": "United States"
              },
              {
                "@type": "Country",
                "name": "Australia"
              },
              {
                "@type": "Country",
                "name": "United Kingdom"
              },
              {
                "@type": "Country",
                "name": "Germany"
              },
              {
                "@type": "Country",
                "name": "France"
              },
              {
                "@type": "Country",
                "name": "Italy"
              },
              {
                "@type": "Country",
                "name": "Spain"
              },
              {
                "@type": "Country",
                "name": "Netherlands"
              },
              {
                "@type": "Country",
                "name": "Malaysia"
              },
              {
                "@type": "Country",
                "name": "Turkey"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "World's Leading Islamic Spiritual Healing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Expert Istikhara Consultation - Divine Guidance for Life Decisions",
                    "description": "Professional Istikhara consultation for marriage, business, career, health, and life decisions. Expert Islamic spiritual guidance through authentic prayer and divine consultation based on Holy Quran and Sunnah. Available in English, Urdu, Arabic for worldwide clients.",
                    "serviceType": "Spiritual Consultation",
                    "provider": {
                      "@type": "Organization",
                      "name": "Rehmat E Quran"
                    },
                    "areaServed": ["Pakistan", "UAE", "Saudi Arabia", "Kuwait", "Qatar", "USA", "Australia", "UK", "Europe", "Malaysia", "Turkey"],
                    "availableLanguage": ["English", "Urdu", "Arabic", "Malay", "Turkish"]
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Black Magic Removal and Evil Eye Protection - Complete Spiritual Protection",
                    "description": "Expert removal of black magic, evil eye effects, negative energies, and spiritual attacks using authentic Quranic verses and prophetic traditions. Complete spiritual protection and cleansing for individuals, families, homes, and businesses worldwide.",
                    "serviceType": "Spiritual Protection",
                    "provider": {
                      "@type": "Organization",
                      "name": "Rehmat E Quran"
                    },
                    "areaServed": ["Pakistan", "UAE", "Saudi Arabia", "Kuwait", "Qatar", "USA", "Australia", "UK", "Europe", "Malaysia", "Turkey"],
                    "availableLanguage": ["English", "Urdu", "Arabic", "Malay", "Turkish"]
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Spiritual Blockage Removal - Success and Prosperity Solutions",
                    "description": "Remove spiritual blockages preventing success, happiness, and prosperity in life, business, career, and relationships. Islamic spiritual healing to unlock divine blessings and achieve goals through authentic Quranic treatment.",
                    "serviceType": "Spiritual Healing",
                    "provider": {
                      "@type": "Organization",
                      "name": "Rehmat E Quran"
                    },
                    "areaServed": ["Pakistan", "UAE", "Saudi Arabia", "Kuwait", "Qatar", "USA", "Australia", "UK", "Europe", "Malaysia", "Turkey"],
                    "availableLanguage": ["English", "Urdu", "Arabic", "Malay", "Turkish"]
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Marriage Life Solutions - Relationship Harmony and Love Restoration",
                    "description": "Restore harmony, love, and understanding in marriage relationships through Islamic spiritual guidance and Quranic healing. Expert solutions for marital problems, relationship conflicts, and family disputes based on Islamic principles.",
                    "serviceType": "Relationship Counseling",
                    "provider": {
                      "@type": "Organization",
                      "name": "Rehmat E Quran"
                    },
                    "areaServed": ["Pakistan", "UAE", "Saudi Arabia", "Kuwait", "Qatar", "USA", "Australia", "UK", "Europe", "Malaysia", "Turkey"],
                    "availableLanguage": ["English", "Urdu", "Arabic", "Malay", "Turkish"]
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Health and Wellness Spiritual Treatment - Islamic Healing for Body and Mind",
                    "description": "Comprehensive spiritual healing for physical and mental health issues using authentic Islamic methods, Quranic verses, and prophetic medicine. Treatment for chronic illnesses, pain, disabilities, and health concerns through divine healing.",
                    "serviceType": "Alternative Medicine",
                    "provider": {
                      "@type": "Organization",
                      "name": "Rehmat E Quran"
                    },
                    "areaServed": ["Pakistan", "UAE", "Saudi Arabia", "Kuwait", "Qatar", "USA", "Australia", "UK", "Europe", "Malaysia", "Turkey"],
                    "availableLanguage": ["English", "Urdu", "Arabic", "Malay", "Turkish"]
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Anxiety and Depression Islamic Treatment - Mental Health Spiritual Healing",
                    "description": "Overcome mental health challenges including anxiety, depression, negative thoughts, stress, and emotional problems through Islamic spiritual healing and Quranic therapy. Natural treatment for psychological disorders using authentic Islamic methods.",
                    "serviceType": "Mental Health Treatment",
                    "provider": {
                      "@type": "Organization",
                      "name": "Rehmat E Quran"
                    },
                    "areaServed": ["Pakistan", "UAE", "Saudi Arabia", "Kuwait", "Qatar", "USA", "Australia", "UK", "Europe", "Malaysia", "Turkey"],
                    "availableLanguage": ["English", "Urdu", "Arabic", "Malay", "Turkish"]
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Family Problem Solutions - Islamic Mediation and Conflict Resolution",
                    "description": "Resolve family disputes, conflicts, and relationship issues through Islamic mediation and spiritual guidance. Expert solutions for parent-child conflicts, sibling disputes, in-law problems, and family disharmony based on Quranic principles.",
                    "serviceType": "Family Counseling",
                    "provider": {
                      "@type": "Organization",
                      "name": "Rehmat E Quran"
                    },
                    "areaServed": ["Pakistan", "UAE", "Saudi Arabia", "Kuwait", "Qatar", "USA", "Australia", "UK", "Europe", "Malaysia", "Turkey"],
                    "availableLanguage": ["English", "Urdu", "Arabic", "Malay", "Turkish"]
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business Success Spiritual Guidance - Financial Prosperity and Career Advancement",
                    "description": "Islamic guidance for business success, financial prosperity, and career advancement through spiritual healing and divine blessings. Solutions for business failures, financial losses, career blockages, and workplace problems using authentic Islamic methods.",
                    "serviceType": "Business Consultation",
                    "provider": {
                      "@type": "Organization",
                      "name": "Rehmat E Quran"
                    },
                    "areaServed": ["Pakistan", "UAE", "Saudi Arabia", "Kuwait", "Qatar", "USA", "Australia", "UK", "Europe", "Malaysia", "Turkey"],
                    "availableLanguage": ["English", "Urdu", "Arabic", "Malay", "Turkish"]
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "10000",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Ahmad Hassan from Karachi, Pakistan"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "After years of struggling with family problems and business failures, I contacted Rehmat E Quran for spiritual healing. The expert Istikhara guidance and black magic removal treatment completely transformed my life. Now my family is at peace and my business is thriving. Highly recommended for authentic Islamic spiritual healing solutions worldwide.",
                "datePublished": "2024-01-15"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Fatima Khan from Dubai, UAE"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "I was suffering from severe anxiety, depression, and evil eye effects for years. The spiritual healing through Quranic verses and protective prayers completely cured me. The Islamic treatment for mental health issues was miraculous. I feel peaceful, blessed, and healthy now. Best Islamic spiritual healing center in the world.",
                "datePublished": "2024-01-10"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Mohammed Abdullah from Riyadh, Saudi Arabia"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "My marriage was facing serious problems and we were considering divorce. The Islamic marriage counseling and spiritual healing restored love and harmony in our relationship. The expert guidance based on Quran and Sunnah saved our marriage. Excellent authentic Islamic spiritual healing services.",
                "datePublished": "2024-01-05"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Aisha Malik from London, UK"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "I contacted from UK for my chronic health problems that doctors couldn't cure. The Islamic spiritual healing and Quranic treatment miraculously healed my conditions. The health and wellness spiritual treatment was incredibly effective. Truly blessed to find authentic Islamic healing services available worldwide.",
                "datePublished": "2024-01-01"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Omar Hassan from Kuwait City, Kuwait"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "My business was failing due to spiritual blockages and negative energies. The business success spiritual guidance and blockage removal treatment completely turned around my financial situation. Now I'm experiencing unprecedented prosperity and success. Highly recommend for business and financial problems.",
                "datePublished": "2023-12-28"
              }
            ],
            "hasMap": "https://maps.google.com/?q=30.3753,69.3451",
            "isAccessibleForFree": false,
            "keywords": "Islamic spiritual healing, Quranic treatment, Istikhara consultation, black magic removal, evil eye protection, marriage solutions, spiritual healing Pakistan UAE Saudi Arabia Kuwait Qatar USA Australia UK Europe Malaysia Turkey, anxiety depression treatment, family problems solution, business success guidance, health healing, روحانی علاج, قرآنی علاج, استخارہ, کالا جادو, بندش کا علاج",
            "slogan": "World's Most Trusted Islamic Spiritual Healing Center - Serving 15+ Countries Worldwide",
            "specialty": "Islamic Spiritual Healing, Quranic Treatment, Istikhara Consultation, Black Magic Removal, Evil Eye Protection, Marriage Solutions, Mental Health Treatment, Family Counseling, Business Guidance, Health Healing",
            "foundingDate": "2008",
            "founder": {
              "@type": "Person",
              "name": "Islamic Spiritual Healer",
              "jobTitle": "Chief Islamic Spiritual Healer and Quranic Treatment Expert"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Islamic spiritual healing and how does it work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Islamic spiritual healing is a traditional healing method based on the Holy Quran and Sunnah (prophetic traditions). It involves using Quranic verses, prophetic supplications, and authentic Islamic practices to treat spiritual, mental, and physical ailments. The healing works through divine intervention and the power of faith, addressing the root spiritual causes of problems rather than just symptoms."
                }
              },
              {
                "@type": "Question",
                "name": "Can Islamic spiritual healing help with black magic and evil eye?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Islamic spiritual healing is highly effective for removing black magic and evil eye effects. Using authentic Quranic verses and prophetic traditions, experienced Islamic healers can identify, neutralize, and remove negative energies and spiritual attacks. The treatment also includes protective measures to prevent future spiritual harm."
                }
              },
              {
                "@type": "Question",
                "name": "How can Istikhara consultation help with important life decisions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Istikhara is a prophetic prayer for seeking divine guidance in important life decisions such as marriage, business, career, and health matters. Expert Islamic spiritual healers perform authentic Istikhara consultation to receive divine guidance and provide clear direction based on Islamic principles and spiritual insights."
                }
              },
              {
                "@type": "Question",
                "name": "Is Islamic spiritual healing effective for anxiety and depression?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Islamic spiritual healing has proven highly effective for treating anxiety, depression, and other mental health issues. The treatment addresses both spiritual and psychological aspects using Quranic therapy, prophetic medicine, and spiritual counseling based on Islamic principles. Many clients experience significant improvement in their mental health and emotional well-being."
                }
              },
              {
                "@type": "Question",
                "name": "Can Islamic spiritual healing help with marriage and relationship problems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Islamic spiritual healing is very effective for resolving marriage and relationship problems. Through Islamic counseling, spiritual guidance, and Quranic healing, couples can restore love, harmony, and understanding in their relationships. The treatment addresses spiritual blockages affecting relationships and provides solutions based on Islamic principles."
                }
              },
              {
                "@type": "Question",
                "name": "How does spiritual healing help with business success and financial prosperity?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Islamic spiritual healing can remove spiritual blockages that prevent business success and financial prosperity. Through spiritual cleansing, protective prayers, and divine guidance, individuals can overcome obstacles in their career and business. The treatment focuses on attracting divine blessings and removing negative energies affecting financial growth."
                }
              },
              {
                "@type": "Question",
                "name": "Are Islamic spiritual healing services available worldwide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Rehmat E Quran provides Islamic spiritual healing services worldwide including Pakistan, UAE, Saudi Arabia, Kuwait, Qatar, USA, Australia, UK, Europe, Malaysia, and Turkey. Services are available in multiple languages including English, Urdu, Arabic, Malay, and Turkish. Online consultation and remote healing services are available for international clients."
                }
              },
              {
                "@type": "Question",
                "name": "How long does Islamic spiritual healing treatment take to show results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The effectiveness and duration of Islamic spiritual healing depends on the nature and severity of the problem. Some clients experience immediate relief, while others may need ongoing treatment. Generally, spiritual healing shows positive results within 3-40 days. The healing process is gradual and depends on individual faith, spiritual receptivity, and the complexity of the issues being addressed."
                }
              }
            ]
          })
        }}
      />

      <Header 
        currentLanguage={currentLanguage} 
        onLanguageChange={setCurrentLanguage}
        translations={t}
      />

      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-[99999] flex flex-col gap-3">
        <a
          href="https://wa.me/923259107237"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          title="WhatsApp - Islamic Spiritual Healing Consultation"
          aria-label="Contact via WhatsApp for Islamic spiritual healing consultation"
        >
          <div className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
              />
            </svg>
          </div>
          <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            WhatsApp
          </div>
        </a>

        <button
          onClick={() => setIsEmailPopupOpen(true)}
          className="group relative"
          title="Email - Islamic Spiritual Healing Services"
          aria-label="Send email for Islamic spiritual healing services"
        >
          <div className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Email
          </div>
        </button>

        <a
          href="https://www.facebook.com/profile.php?id=61578288101812"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          title="Facebook - Rehmat E Quran"
          aria-label="Follow us on Facebook for Islamic spiritual healing updates"
        >
          <div className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
          <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Facebook
          </div>
        </a>

        <a
          href="https://www.instagram.com/onlinerehmatequran/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          title="Instagram - Islamic Spiritual Healing"
          aria-label="Follow us on Instagram for Islamic spiritual healing content"
        >
          <div className="w-12 h-12 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4-1.12 0-2.19-.66-2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </div>
          <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Instagram
          </div>
        </a>

        <a
          href="https://www.tiktok.com/@rehmatequran"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          title="TikTok - Rehmat E Quran"
          aria-label="Follow us on TikTok for Islamic spiritual healing videos"
        >
          <div className="w-12 h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </div>
          <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            TikTok
          </div>
        </a>

        <a
          href="https://x.com/rehmat_e_quran"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          title="X (formerly Twitter) - Islamic Spiritual Healing Updates"
          aria-label="Follow us on X for Islamic spiritual healing updates"
        >
          <div className="w-12 h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            X
          </div>
        </a>

        <a
          href="https://www.youtube.com/@onlineRehmatQuran"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          title="YouTube - Islamic Spiritual Healing Videos"
          aria-label="Subscribe to our YouTube channel for Islamic spiritual healing videos"
        >
          <div className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
          <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            YouTube
          </div>
        </a>
      </div>

      <HeroSection translations={t} />
      <ServicesSection translations={t} />
      <TestimonialsSection translations={t} />
      <ContactSection translations={t} />

      <Footer translations={t} />

      <EmailPopup 
        isOpen={isEmailPopupOpen} 
        onClose={() => setIsEmailPopupOpen(false)} 
      />
    </div>
  );
}
