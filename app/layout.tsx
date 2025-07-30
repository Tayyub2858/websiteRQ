
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico, Montserrat, Quicksand } from "next/font/google";
import "./globals.css";

// Font optimizations with display swap for better performance
const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
  preload: true,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
});

const quicksand = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
  preload: true,
});

// Comprehensive SEO-optimized metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://rehmatequran.com'),
  title: {
    default: "🌟 Rehmat E Quran - World's #1 Islamic Spiritual Healing Center | Expert Quranic Treatment | Online Istikhara | Black Magic Removal | Evil Eye Protection | Marriage Solutions | Anxiety Depression Treatment | Family Dispute Resolution | Business Success Guidance | Health Healing | Spiritual Blockage Removal | روحانی علاج | قرآنی علاج | کالا جادو | بندش کا علاج | استخارہ | شادی کے مسائل | کاروبار کی کامیابی | صحت کا علاج | ذہنی پریشانی | خاندانی مسائل | Serving Pakistan, UAE, Saudi Arabia, Kuwait, Qatar, USA, Australia, UK, Europe, Malaysia, Turkey",
    template: "%s | Rehmat E Quran - World's Leading Islamic Spiritual Healing Center | Expert Quranic Treatment | Online Istikhara | Black Magic Removal | Evil Eye Protection | روحانی علاج | قرآنی علاج"
  },
  description: "🌟 World's Most Trusted Islamic Spiritual Healing Center | Expert Quranic Treatment, Online Istikhara Consultation, Black Magic Removal, Evil Eye Protection, Marriage Problem Solutions, Anxiety Depression Treatment, Family Dispute Resolution, Business Success Guidance, Health Healing, Spiritual Blockage Removal | Serving Pakistan, UAE, Saudi Arabia, Kuwait, Qatar, USA, Australia, UK, Europe, Malaysia, Turkey | 15+ Years Experience | 10,000+ Satisfied Clients | 98% Success Rate | 24/7 Available | روحانی علاج قرآنی | استخارہ آن لائن | کالا جادو کا علاج | بندش کا علاج | شادی کے مسائل | کاروبار کی کامیابی | صحت کا علاج | ذہنی پریشانی | خاندانی مسائل | Call +92 325 9107237 | Email: onlinerehmatquran@gmail.com | Based on Holy Quran & Sunnah | Authentic Islamic Methods | Guaranteed Results | Worldwide Service | Expert Islamic Spiritual Healer | Professional Quranic Treatment Specialist | Certified Islamic Practitioner | Experienced Spiritual Counselor | Halal Healing Methods | Prophetic Medicine | Divine Healing | Sacred Healing | Blessed Healing | Spiritual Protection | Energy Healing | Islamic Psychology | Religious Healing | Spiritual Wellness | Islamic Therapy | Alternative Healing | Natural Healing | Traditional Islamic Healing | Holistic Healing | Faith Healing | Islamic Meditation | Spiritual Consultation | Religious Counseling | Islamic Life Coaching | Spiritual Development | Inner Peace | Soul Healing | Heart Healing | Mind Healing | Body Healing | Spiritual Cleansing | Islamic Exorcism | Ruqyah Treatment | Protective Prayers | Islamic Amulets | Taweez Solutions | Spiritual Guidance | Islamic Counseling | Muslim Healer | Islamic Healer | Quran Therapy | Sunnah Treatment | Prophetic Treatment | Dua for Healing | Islamic Mysticism | Sufi Healing | Islamic Spirituality | Religious Guidance | Spiritual Healing Online | Islamic Consultation Online | Remote Spiritual Healing | Distance Healing | Online Islamic Services | Virtual Spiritual Consultation | Digital Islamic Healing | Internet-based Spiritual Treatment | Web-based Islamic Guidance | Online Quranic Therapy | Virtual Istikhara Consultation | Digital Spiritual Counseling | Online Religious Healing | Internet Islamic Psychology | Web-based Spiritual Wellness | Digital Islamic Therapy | Online Alternative Healing | Virtual Natural Healing | Internet Traditional Islamic Healing | Web-based Holistic Healing | Online Faith Healing | Digital Islamic Meditation | Virtual Spiritual Consultation | Internet Religious Counseling | Web-based Islamic Life Coaching | Online Spiritual Development | Digital Inner Peace | Virtual Soul Healing | Internet Heart Healing | Web-based Mind Healing | Online Body Healing | Digital Spiritual Cleansing | Virtual Islamic Exorcism | Internet Ruqyah Treatment | Web-based Protective Prayers | Online Islamic Amulets | Digital Taweez Solutions | Virtual Spiritual Guidance | Internet Islamic Counseling | Web-based Muslim Healer | Online Islamic Healer | Digital Quran Therapy | Virtual Sunnah Treatment | Internet Prophetic Treatment | Web-based Dua for Healing | Online Islamic Mysticism | Digital Sufi Healing | Virtual Islamic Spirituality | Internet Religious Guidance",
  keywords: [
    // High-Volume English Keywords
    "Islamic spiritual healing", "Quranic treatment", "Online Istikhara", "black magic removal", "evil eye protection", "spiritual healing Pakistan", "spiritual healing UAE", "spiritual healing Saudi Arabia", "spiritual healing Kuwait", "spiritual healing Qatar", "spiritual healing USA", "spiritual healing Australia", "spiritual healing UK", "spiritual healing Europe", "spiritual healing Malaysia", "spiritual healing Turkey", "Islamic healer", "Muslim healer", "Quran therapy", "Islamic counseling", "spiritual blockage removal", "anxiety depression Islamic treatment", "marriage problems solution Islam", "family problem solution Islam", "business success Islamic way", "health healing Quran", "protective prayers", "Islamic amulets", "taweez", "spiritual guidance", "Islamic meditation", "spiritual consultation", "halal healing methods", "Sunnah treatment", "prophetic medicine", "dua for healing", "Islamic exorcism", "ruqyah treatment", "spiritual cleansing Islam", "faith healing Muslim", "Islamic psychology", "religious healing", "spiritual wellness Islam", "Islamic therapy", "divine healing Quran", "blessed healing", "sacred healing Islam", "Islamic metaphysics", "spiritual protection Islam", "energy healing Islamic", "chakra balancing Islam", "Islamic mysticism", "Sufi healing", "Islamic spirituality", "religious counseling", "Islamic life coaching", "spiritual development Islam", "inner peace Islam", "soul healing Quran", "heart healing Islam", "mind healing Islamic", "body healing Quran", "holistic healing Islam", "alternative healing Islamic", "natural healing Islam", "traditional Islamic healing", "authentic Islamic treatment", "certified Islamic healer", "professional spiritual healer", "experienced Islamic practitioner", "Islamic healing center", "spiritual healing clinic", "online Islamic consultation", "Islamic healing services", "spiritual healing online", "Islamic spiritual healer", "Quranic healing specialist", "Istikhara expert", "black magic specialist", "evil eye specialist", "marriage counselor Islamic", "family counselor Islamic", "business consultant Islamic", "health healer Islamic", "anxiety healer Islamic", "depression healer Islamic", "spiritual healing treatment", "Islamic healing therapy", "Quranic healing therapy", "spiritual healing session", "Islamic healing session", "online spiritual healing", "remote spiritual healing", "distance spiritual healing", "spiritual healing consultation", "Islamic healing consultation", "Quranic healing consultation", "spiritual healing advice", "Islamic healing advice", "spiritual healing guidance", "Islamic healing guidance", "spiritual healing help", "Islamic healing help", "spiritual healing support", "Islamic healing support",
    // High-Volume Urdu Keywords
    "روحانی علاج", "قرآنی علاج", "آن لائن استخارہ", "کالا جادو کا علاج", "بندش کا علاج", "اسلامی روحانی علاج", "مسلم عالم", "قرآن تھراپی", "اسلامی مشاورت", "روحانی رکاوٹ کا علاج", "اضطراب ڈپریشن اسلامی علاج", "خاندانی مسائل کا حل اسلام", "کاروبار کی کامیابی اسلامی طریقہ", "صحت کی شفا قرآن", "حفاظتی دعائیں", "اسلامی مراقبہ", "روحانی مشاورت", "حلال شفائی طریقے", "سنت کا علاج", "نبوی طب", "شفا کے لیے دعا", "اسلامی جن بھگانا", "رقیہ کا علاج", "اسلام میں روحانی صفائی", "مسلم شفا یابی", "اسلامی نفسیات", "مذہبی شفا", "اسلام میں روحانی تندرستی", "اسلامی تھراپی", "قرآن سے الہی شفا", "برکت والی شفا", "اسلام میں مقدس شفا", "اسلامی مابعد الطبیعیات", "اسلام میں روحانی تحفظ", "اسلامی توانائی کی شفا", "اسلام میں چکرا بیلنسنگ", "اسلامی تصوف", "صوفی شفا", "اسلامی روحانیت", "مذہبی مشاورت", "اسلامی لائف کوچنگ", "اسلام میں روحانی ترقی", "اسلام میں اندرونی امن", "قرآن سے روح کی شفا", "اسلام میں دل کی شفا", "اسلامی ذہنی شفا", "قرآن سے جسم کی شفا", "اسلام میں مکمل شفا", "اسلامی متبادل شفا", "اسلام میں قدرتی شفا", "روایتی اسلامی شفا", "مستند اسلامی علاج", "تصدیق شدہ اسلامی شفا یاب", "پیشہ ور روحانی شفا یاب", "تجربہ کار اسلامی پریکٹیشنر", "اسلامی شفا یابی مرکز", "روحانی شفا یابی کلینک", "آن لائن اسلامی مشاورت", "اسلامی شفا یابی کی خدمات", "روحانی علاج آن لائن", "اسلامی روحانی شفا یاب", "قرآنی علاج کے ماہر", "استخارہ کے ماہر", "کالا جادو کے ماہر", "بندش کے ماہر", "شادی کے مسائل کے مشیر", "خاندانی مسائل کے مشیر", "کاروبار کے مشیر", "صحت کے شفا یاب", "پریشانی کے شفا یاب", "ڈپریشن کے شفا یاب", "شادی کے مسائل", "خاندانی جھگڑے", "کاروبار کی ناکامی", "صحت کے مسائل", "ذہنی پریشانی", "جذباتی مسائل", "رشتے کے مسائل", "محبت کے مسائل", "پیسے کے مسائل", "نوکری کے مسائل", "پڑھائی کے مسائل", "بچوں کے مسائل", "والدین کے مسائل", "ساس بہو کے مسائل", "بھائی بہن کے مسائل", "دوستوں کے مسائل", "پڑوسیوں کے مسائل", "دشمنوں کے مسائل", "حسد کا علاج", "نظر بد کا علاج", "جادو ٹونے کا علاج", "بھوت پریت کا علاج", "جن کا علاج", "شیطان کا علاج", "برائی کا علاج", "منفی توانائی کا علاج", "روحانی حملے کا علاج", "آسیب کا علاج", "سحر کا علاج", "سیاہ جادو کا علاج", "سفید جادو کا علاج", "محبت کا جادو", "نفرت کا جادو", "دولت کا جادو", "کامیابی کا جادو", "صحت کا جادو", "خوشی کا جادو", "امن کا جادو", "سکون کا جادو", "برکت کا جادو", "رحمت کا جادو",
    // Location-specific Keywords for SEO
    "Pakistan spiritual healer", "UAE Islamic healing", "Saudi Arabia Quranic treatment", "Kuwait spiritual consultation", "Qatar Islamic healer", "USA Muslim spiritual healing", "Australia Islamic therapy", "UK Quranic healing", "Europe Islamic spiritual services", "Malaysia Muslim healer", "Turkey Islamic treatment", "Karachi Islamic healer", "Lahore spiritual healing", "Islamabad Islamic treatment", "Rawalpindi spiritual healer", "Faisalabad Islamic healing", "Multan spiritual treatment", "Peshawar Islamic healer", "Quetta spiritual healing", "Sialkot Islamic treatment", "Gujranwala spiritual healer", "Hyderabad Islamic healing", "Sukkur spiritual treatment", "Bahawalpur Islamic healer", "Sargodha spiritual healing", "Dubai Islamic healer", "Abu Dhabi spiritual treatment", "Sharjah Islamic healing", "Ajman spiritual healer", "Riyadh Islamic treatment", "Jeddah spiritual healing", "Mecca Islamic healer", "Medina spiritual treatment", "Dammam Islamic healing", "Kuwait City spiritual healer", "Doha Islamic treatment", "Manama spiritual healing", "Muscat Islamic healer", "London spiritual treatment", "Birmingham Islamic healing", "Manchester spiritual healer", "Glasgow Islamic treatment", "Edinburgh spiritual healing", "Leeds Islamic healer", "Liverpool spiritual treatment", "New York Islamic healing", "Los Angeles spiritual healer", "Chicago Islamic treatment", "Houston spiritual healing", "Philadelphia Islamic healer", "Phoenix spiritual treatment", "San Antonio Islamic healing", "San Diego spiritual healer", "Dallas Islamic treatment", "San Jose spiritual healing", "Austin Islamic healer", "Jacksonville spiritual treatment", "Fort Worth Islamic healing", "Columbus spiritual healer", "San Francisco Islamic treatment", "Charlotte spiritual healing", "Indianapolis Islamic healer", "Seattle spiritual treatment", "Denver Islamic healing", "Washington DC spiritual healer", "Boston Islamic treatment", "El Paso spiritual healing", "Detroit Islamic healer", "Nashville spiritual treatment", "Portland Islamic healing", "Memphis spiritual healer", "Oklahoma City Islamic treatment", "Las Vegas spiritual healing", "Louisville Islamic healer", "Baltimore spiritual treatment", "Milwaukee Islamic healing", "Albuquerque spiritual healer", "Tucson Islamic treatment", "Fresno spiritual healing", "Sacramento Islamic healer", "Sydney spiritual treatment", "Melbourne Islamic healing", "Brisbane spiritual healer", "Perth Islamic treatment", "Adelaide spiritual healing", "Gold Coast Islamic healer", "Newcastle spiritual treatment", "Canberra Islamic healing", "Wollongong spiritual healer", "Toronto Islamic treatment", "Montreal spiritual healing", "Vancouver Islamic healer", "Calgary spiritual treatment", "Edmonton Islamic healing", "Ottawa spiritual healer", "Winnipeg Islamic treatment", "Quebec City spiritual healing", "Hamilton Islamic healer", "Kitchener spiritual treatment", "Kuala Lumpur Islamic healing", "George Town spiritual healer", "Ipoh Islamic treatment", "Johor Bahru spiritual healing", "Kota Kinabalu Islamic healer", "Kuching spiritual treatment", "Shah Alam Islamic healing", "Petaling Jaya spiritual healer", "Klang Islamic treatment", "Seremban spiritual healing", "Malacca Islamic healer", "Alor Setar spiritual treatment", "Istanbul Islamic healing", "Ankara spiritual healer", "Izmir Islamic treatment", "Bursa spiritual healing", "Adana Islamic healer", "Gaziantep spiritual treatment", "Konya Islamic healing", "Antalya spiritual healer", "Kayseri Islamic treatment", "Mersin spiritual healing", "Eskisehir Islamic healer", "Diyarbakir spiritual treatment", "Samsun Islamic healing", "Denizli spiritual healer", "Malatya Islamic treatment", "Kahramanmaras spiritual healing", "Erzurum Islamic healer", "Van spiritual treatment", "Batman Islamic healing", "Elazig spiritual healer", "Erzincan Islamic treatment", "Tokat spiritual healing", "Sivas Islamic healer", "Rize spiritual treatment", "Trabzon Islamic healing", "Ordu spiritual healer", "Giresun Islamic treatment", "Artvin spiritual healing", "Gumushane Islamic healer", "Bayburt spiritual treatment"
  ],
  authors: [{ name: "Rehmat E Quran - World's Leading Islamic Spiritual Healing Center", url: "https://rehmatequran.com" }],
  creator: "Rehmat E Quran - Expert Islamic Spiritual Healer",
  publisher: "Rehmat E Quran - Professional Islamic Healing Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "🌟 Rehmat E Quran - World's #1 Islamic Spiritual Healing Center | Expert Quranic Treatment | Online Istikhara | Black Magic Removal | Evil Eye Protection | روحانی علاج | قرآنی علاج",
    description: "🌟 World's Most Trusted Islamic Spiritual Healing Center | Expert Quranic Treatment, Online Istikhara Consultation, Black Magic Removal, Evil Eye Protection, Marriage Problem Solutions, Anxiety Depression Treatment, Family Dispute Resolution, Business Success Guidance, Health Healing, Spiritual Blockage Removal | Serving 15+ Countries | 15+ Years Experience | 10,000+ Satisfied Clients | 98% Success Rate | 24/7 Available | روحانی علاج قرآنی | استخارہ آن لائن | کالا جادو کا علاج | بندش کا علاج | شادی کے مسائل | کاروبار کی کامیابی | صحت کا علاج | ذہنی پریشانی | خاندانی مسائل | Call +92 325 9107237 | Email: onlinerehmatquran@gmail.com",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ur_PK", "ar_SA", "ms_MY", "tr_TR"],
    url: "https://rehmatequran.com",
    siteName: "Rehmat E Quran - World's Leading Islamic Spiritual Healing Center",
    images: [
      {
        url: "https://static.readdy.ai/image/bc294c6119f7e425505ddb9be20b2472/46703a07e2e92119d9e52ebb6ace0d08.png",
        width: 1200,
        height: 630,
        alt: "Rehmat E Quran - World's Leading Islamic Spiritual Healing Center - Expert Quranic Treatment, Online Istikhara, Black Magic Removal, Evil Eye Protection, Marriage Problem Solutions, Anxiety Depression Treatment, Family Dispute Resolution, Business Success Guidance, Health Healing, Spiritual Blockage Removal",
        type: "image/png",
      },
      {
        url: "https://static.readdy.ai/image/bc294c6119f7e425505ddb9be20b2472/46703a07e2e92119d9e52ebb6ace0d08.png",
        width: 800,
        height: 600,
        alt: "Islamic Spiritual Healing Center - Rehmat E Quran - Expert Quranic Treatment and Online Istikhara",
        type: "image/png",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@rehmat_e_quran",
    creator: "@rehmat_e_quran",
    title: "🌟 Rehmat E Quran - World's #1 Islamic Spiritual Healing Center | Expert Quranic Treatment | Online Istikhara | Black Magic Removal | Evil Eye Protection",
    description: "🌟 World's Most Trusted Islamic Spiritual Healing Center | Expert Quranic Treatment, Online Istikhara Consultation, Black Magic Removal, Evil Eye Protection, Marriage Problem Solutions, Anxiety Depression Treatment, Family Dispute Resolution, Business Success Guidance, Health Healing, Spiritual Blockage Removal | Serving 15+ Countries | 15+ Years Experience | 10,000+ Satisfied Clients | 98% Success Rate | 24/7 Available | Call +92 325 9107237 | Email: onlinerehmatquran@gmail.com",
    images: {
      url: "https://static.readdy.ai/image/bc294c6119f7e425505ddb9be20b2472/46703a07e2e92119d9e52ebb6ace0d08.png",
      alt: "Rehmat E Quran - World's Leading Islamic Spiritual Healing Center - Expert Quranic Treatment and Online Istikhara",
    },
  },
  alternates: {
    canonical: "https://rehmatequran.com",
    languages: {
      'en-US': 'https://rehmatequran.com',
      'ur-PK': 'https://rehmatequran.com/ur',
      'ar-SA': 'https://rehmatequran.com/ar',
      'ms-MY': 'https://rehmatequran.com/ms',
      'tr-TR': 'https://rehmatequran.com/tr'
    }
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      'bing': 'your-bing-verification-code',
      'facebook-domain-verification': 'your-facebook-domain-verification',
      'pinterest-site-verification': 'your-pinterest-verification'
    }
  },
  category: 'Islamic Spiritual Healing Services',
  classification: 'Religious Services, Healthcare Alternative, Spiritual Healing',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'normal',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#059669' },
    { media: '(prefers-color-scheme: dark)', color: '#10b981' }
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Rehmat E Quran - Islamic Spiritual Healing',
    startupImage: '/apple-touch-icon.png',
  },
  applicationName: 'Rehmat E Quran Islamic Spiritual Healing Center',
  generator: 'Next.js',
  abstract: 'World\'s most trusted Islamic spiritual healing center providing expert Quranic treatment, online Istikhara consultation, black magic removal, evil eye protection, marriage problem solutions, anxiety depression treatment, family dispute resolution, business success guidance, health healing, spiritual blockage removal, and comprehensive spiritual guidance based on Holy Quran and Sunnah. Serving clients worldwide with 15+ years of experience, 10,000+ satisfied clients, and 98% success rate.',
  bookmarks: ['https://rehmatequran.com/services', 'https://rehmatequran.com/about', 'https://rehmatequran.com/contact', 'https://rehmatequran.com/testimonials'],
  other: {
    'google-site-verification': 'your-google-verification-code',
    'bing-site-verification': 'your-bing-verification-code',
    'yandex-verification': 'your-yandex-verification-code',
    'facebook-domain-verification': 'your-facebook-domain-verification',
    'pinterest-site-verification': 'your-pinterest-verification',
    'geo.region': 'PK-IS',
    'geo.placename': 'Pakistan',
    'geo.position': '30.3753;69.3451',
    'ICBM': '30.3753, 69.3451',
    'DC.coverage': 'Pakistan, UAE, Saudi Arabia, Kuwait, Qatar, USA, Australia, UK, Europe, Malaysia, Turkey',
    'language': 'en, ur, ar, ms, tr',
    'audience': 'Muslims, Islamic Community, Spiritual Healing Seekers, People with Spiritual Problems, Marriage Issues, Health Concerns, Business Difficulties, Family Disputes, Anxiety Depression Patients, Black Magic Victims, Evil Eye Affected Individuals',
    'distribution': 'global',
    'rating': 'general',
    'revisit-after': '1 day',
    'classification': 'Islamic Spiritual Healing, Religious Services, Healthcare Alternative, Mental Health Support, Marriage Counseling, Family Therapy, Business Consultation, Health Healing',
    'category': 'Islamic Spiritual Healing Services',
    'coverage': 'Worldwide',
    'identifier-URL': 'https://rehmatequran.com',
    'directory': 'submission',
    'pagename': 'Rehmat E Quran - World\'s Leading Islamic Spiritual Healing Center',
    'page-topic': 'Islamic Spiritual Healing, Quranic Treatment, Online Istikhara, Black Magic Removal, Evil Eye Protection, Marriage Problem Solutions, Anxiety Depression Treatment, Family Dispute Resolution, Business Success Guidance, Health Healing, Spiritual Blockage Removal',
    'page-type': 'Islamic Spiritual Healing Services',
    'subject': 'Islamic Spiritual Healing and Quranic Treatment Services',
    'abstract': 'World\'s most trusted Islamic spiritual healing center providing expert Quranic treatment, online Istikhara consultation, black magic removal, evil eye protection, marriage problem solutions, anxiety depression treatment, family dispute resolution, business success guidance, health healing, spiritual blockage removal, and comprehensive spiritual guidance based on Holy Quran and Sunnah. Serving clients worldwide with 15+ years of experience, 10,000+ satisfied clients, and 98% success rate.',
    'topic': 'Islamic Spiritual Healing, Quranic Treatment, Religious Services, Mental Health Support, Marriage Counseling, Family Therapy, Business Consultation, Health Healing',
    'summary': 'Professional Islamic spiritual healing services including expert Quranic treatment, online Istikhara consultation, black magic removal, evil eye protection, marriage problem solutions, anxiety depression treatment, family dispute resolution, business success guidance, health healing, spiritual blockage removal, protective prayers, and comprehensive spiritual consultation based on authentic Islamic methods with 15+ years of experience and 98% success rate.',
    'target': 'Muslims seeking spiritual healing, Islamic community, people with spiritual problems, marriage issues, health concerns, business difficulties, family disputes, anxiety depression patients, black magic victims, evil eye affected individuals, students with study problems, parents with children issues, couples with relationship problems, entrepreneurs with business challenges, individuals with career obstacles, people seeking divine guidance, those needing emotional support, individuals with financial problems, people facing legal issues, those seeking inner peace and spiritual growth',
    'medium': 'website, online consultation, spiritual services, religious guidance, therapeutic services',
    'format-detection': 'telephone=yes',
    'mobile-web-app-capable': 'yes',
    'mobile-web-app-status-bar-style': 'default',
    'contact': 'onlinerehmatquran@gmail.com',
    'phone': '+92-325-9107237',
    'address': 'Pakistan',
    'country': 'Pakistan',
    'region': 'South Asia, Middle East, Europe, North America, Australia, Southeast Asia',
    'city': 'Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta, Sialkot, Gujranwala, Hyderabad, Sukkur, Bahawalpur, Sargodha, Dubai, Abu Dhabi, Sharjah, Ajman, Riyadh, Jeddah, Mecca, Medina, Dammam, Kuwait City, Doha, Manama, Muscat, London, Birmingham, Manchester, Glasgow, Edinburgh, Leeds, Liverpool, New York, Los Angeles, Chicago, Houston, Philadelphia, Phoenix, San Antonio, San Diego, Dallas, San Jose, Austin, Jacksonville, Fort Worth, Columbus, San Francisco, Charlotte, Indianapolis, Seattle, Denver, Washington DC, Boston, El Paso, Detroit, Nashville, Portland, Memphis, Oklahoma City, Las Vegas, Louisville, Baltimore, Milwaukee, Albuquerque, Tucson, Fresno, Sacramento, Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast, Newcastle, Canberra, Wollongong, Toronto, Montreal, Vancouver, Calgary, Edmonton, Ottawa, Winnipeg, Quebec City, Hamilton, Kitchener, Kuala Lumpur, George Town, Ipoh, Johor Bahru, Kota Kinabalu, Kuching, Shah Alam, Petaling Jaya, Klang, Seremban, Malacca, Alor Setar, Istanbul, Ankara, Izmir, Bursa, Adana, Gaziantep, Konya, Antalya, Kayseri, Mersin, Eskisehir, Diyarbakir, Samsun, Denizli, Malatya, Kahramanmaras, Erzurum, Van, Batman, Elazig, Erzincan, Tokat, Sivas, Rize, Trabzon, Ordu, Giresun, Artvin, Gumushane, Bayburt',
    'fb:app_id': 'your-facebook-app-id',
    'fb:admins': 'your-facebook-admin-id',
    'og:email': 'onlinerehmatquran@gmail.com',
    'og:phone_number': '+92-325-9107237',
    'og:latitude': '30.3753',
    'og:longitude': '69.3451',
    'og:street-address': 'Pakistan',
    'og:locality': 'Pakistan',
    'og:region': 'South Asia',
    'og:postal-code': '00000',
    'og:country-name': 'Pakistan',
    'content-language': 'en, ur, ar, ms, tr',
    'expires': 'never',
    'cache-control': 'public, max-age=31536000, immutable',
    'pragma': 'no-cache',
    'refresh': '86400',
    'security': 'strict-transport-security: max-age=31536000; includeSubDomains; preload',
    'x-frame-options': 'DENY',
    'x-content-type-options': 'nosniff',
    'x-xss-protection': '1; mode=block',
    'referrer-policy': 'strict-origin-when-cross-origin',
    'permissions-policy': 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
    'content-security-policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://maps.googleapis.com https://www.gstatic.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net; img-src 'self' data: https: http:; connect-src 'self' https:; frame-src 'self' https://www.google.com https://maps.google.com; media-src 'self' https:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Performance optimized meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#059669" />
        <meta name="msapplication-TileColor" content="#059669" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Rehmat E Quran - Islamic Spiritual Healing" />
        <meta name="application-name" content="Rehmat E Quran - Islamic Spiritual Healing" />
        <meta name="msapplication-tooltip" content="Islamic Spiritual Healing Center" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-status-bar-style" content="default" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" as="style" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" as="style" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" as="style" />
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" as="style" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="//static.readdy.ai" />
        <link rel="dns-prefetch" href="//readdy.ai" />
        <link rel="dns-prefetch" href="//formspree.io" />
        <link rel="dns-prefetch" href="//api.web3forms.com" />
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//mail.google.com" />
        
        {/* Preconnect for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="" />
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link rel="preconnect" href="https://static.readdy.ai" crossOrigin="" />
        <link rel="preconnect" href="https://readdy.ai" crossOrigin="" />
        <link rel="preconnect" href="https://formspree.io" crossOrigin="" />
        <link rel="preconnect" href="https://api.web3forms.com" crossOrigin="" />
        
        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Pakistan" />
        <meta name="geo.position" content="30.3753;69.3451" />
        <meta name="ICBM" content="30.3753, 69.3451" />
        <meta name="DC.coverage" content="Pakistan, UAE, Saudi Arabia, Kuwait, Qatar, USA, Australia, UK, Europe, Malaysia, Turkey" />
        <meta name="language" content="en, ur, ar, ms, tr" />
        <meta name="audience" content="Muslims, Islamic Community, Spiritual Healing Seekers, People with Spiritual Problems, Marriage Issues, Health Concerns, Business Difficulties, Family Disputes, Anxiety Depression Patients, Black Magic Victims, Evil Eye Affected Individuals" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 day" />
        <meta name="classification" content="Islamic Spiritual Healing, Religious Services, Healthcare Alternative, Mental Health Support, Marriage Counseling, Family Therapy, Business Consultation, Health Healing" />
        <meta name="category" content="Islamic Spiritual Healing Services" />
        <meta name="coverage" content="Worldwide" />
        <meta name="identifier-URL" content="https://rehmatequran.com" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Rehmat E Quran - World's Leading Islamic Spiritual Healing Center" />
        <meta name="page-topic" content="Islamic Spiritual Healing, Quranic Treatment, Online Istikhara, Black Magic Removal, Evil Eye Protection, Marriage Problem Solutions, Anxiety Depression Treatment, Family Dispute Resolution, Business Success Guidance, Health Healing, Spiritual Blockage Removal" />
        <meta name="page-type" content="Islamic Spiritual Healing Services" />
        <meta name="subject" content="Islamic Spiritual Healing and Quranic Treatment Services" />
        <meta name="abstract" content="World's most trusted Islamic spiritual healing center providing expert Quranic treatment, online Istikhara consultation, black magic removal, evil eye protection, marriage problem solutions, anxiety depression treatment, family dispute resolution, business success guidance, health healing, spiritual blockage removal, and comprehensive spiritual guidance based on Holy Quran and Sunnah. Serving clients worldwide with 15+ years of experience, 10,000+ satisfied clients, and 98% success rate." />
        <meta name="topic" content="Islamic Spiritual Healing, Quranic Treatment, Religious Services, Mental Health Support, Marriage Counseling, Family Therapy, Business Consultation, Health Healing" />
        <meta name="summary" content="Professional Islamic spiritual healing services including expert Quranic treatment, online Istikhara consultation, black magic removal, evil eye protection, marriage problem solutions, anxiety depression treatment, family dispute resolution, business success guidance, health healing, spiritual blockage removal, protective prayers, and comprehensive spiritual consultation based on authentic Islamic methods with 15+ years of experience and 98% success rate." />
        <meta name="target" content="Muslims seeking spiritual healing, Islamic community, people with spiritual problems, marriage issues, health concerns, business difficulties, family disputes, anxiety depression patients, black magic victims, evil eye affected individuals, students with study problems, parents with children issues, couples with relationship problems, entrepreneurs with business challenges, individuals with career obstacles, people seeking divine guidance, those needing emotional support, individuals with financial problems, people facing legal issues, those seeking inner peace and spiritual growth" />
        <meta name="medium" content="website, online consultation, spiritual services, religious guidance, therapeutic services" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-status-bar-style" content="default" />
        <meta name="contact" content="onlinerehmatquran@gmail.com" />
        <meta name="phone" content="+92-325-9107237" />
        <meta name="address" content="Pakistan" />
        <meta name="country" content="Pakistan" />
        <meta name="region" content="South Asia, Middle East, Europe, North America, Australia, Southeast Asia" />
        <meta name="city" content="Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta, Sialkot, Gujranwala, Hyderabad, Sukkur, Bahawalpur, Sargodha, Dubai, Abu Dhabi, Sharjah, Ajman, Riyadh, Jeddah, Mecca, Medina, Dammam, Kuwait City, Doha, Manama, Muscat, London, Birmingham, Manchester, Glasgow, Edinburgh, Leeds, Liverpool, New York, Los Angeles, Chicago, Houston, Philadelphia, Phoenix, San Antonio, San Diego, Dallas, San Jose, Austin, Jacksonville, Fort Worth, Columbus, San Francisco, Charlotte, Indianapolis, Seattle, Denver, Washington DC, Boston, El Paso, Detroit, Nashville, Portland, Memphis, Oklahoma City, Las Vegas, Louisville, Baltimore, Milwaukee, Albuquerque, Tucson, Fresno, Sacramento, Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast, Newcastle, Canberra, Wollongong, Toronto, Montreal, Vancouver, Calgary, Edmonton, Ottawa, Winnipeg, Quebec City, Hamilton, Kitchener, Kuala Lumpur, George Town, Ipoh, Johor Bahru, Kota Kinabalu, Kuching, Shah Alam, Petaling Jaya, Klang, Seremban, Malacca, Alor Setar, Istanbul, Ankara, Izmir, Bursa, Adana, Gaziantep, Konya, Antalya, Kayseri, Mersin, Eskisehir, Diyarbakir, Samsun, Denizli, Malatya, Kahramanmaras, Erzurum, Van, Batman, Elazig, Erzincan, Tokat, Sivas, Rize, Trabzon, Ordu, Giresun, Artvin, Gumushane, Bayburt" />
        <meta property="fb:app_id" content="your-facebook-app-id" />
        <meta property="fb:admins" content="your-facebook-admin-id" />
        <meta property="og:email" content="onlinerehmatquran@gmail.com" />
        <meta property="og:phone_number" content="+92-325-9107237" />
        <meta property="og:latitude" content="30.3753" />
        <meta property="og:longitude" content="69.3451" />
        <meta property="og:street-address" content="Pakistan" />
        <meta property="og:locality" content="Pakistan" />
        <meta property="og:region" content="South Asia" />
        <meta property="og:postal-code" content="00000" />
        <meta property="og:country-name" content="Pakistan" />
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
        <meta httpEquiv="Expires" content="never" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta name="refresh" content="86400" />
        
        {/* Comprehensive JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rehmat E Quran - World's Leading Islamic Spiritual Healing Center",
              "legalName": "Rehmat E Quran",
              "description": "World's most trusted Islamic spiritual healing center providing expert Quranic treatment, online Istikhara consultation, black magic removal, evil eye protection, marriage problem solutions, anxiety depression treatment, family dispute resolution, business success guidance, health healing, spiritual blockage removal, and comprehensive spiritual guidance based on Holy Quran and Sunnah.",
              "url": "https://rehmatequran.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://static.readdy.ai/image/bc294c6119f7e425505ddb9be20b2472/46703a07e2e92119d9e52ebb6ace0d08.png",
                "width": 400,
                "height": 400
              },
              "image": [
                {
                  "@type": "ImageObject",
                  "url": "https://static.readdy.ai/image/bc294c6119f7e425505ddb9be20b2472/46703a07e2e92119d9e52ebb6ace0d08.png",
                  "width": 1200,
                  "height": 630
                }
              ],
              "foundingDate": "2008",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Islamic Spiritual Healer",
                  "jobTitle": "Chief Islamic Spiritual Healer and Quranic Treatment Expert"
                }
              ],
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "minValue": 10,
                "maxValue": 50
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+92-325-9107237",
                  "contactType": "Customer Service",
                  "availableLanguage": ["English", "Urdu", "Arabic", "Malay", "Turkish"],
                  "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    "opens": "00:00",
                    "closes": "23:59"
                  },
                  "areaServed": ["Pakistan", "UAE", "Saudi Arabia", "Kuwait", "Qatar", "USA", "Australia", "UK", "Europe", "Malaysia", "Turkey"]
                }
              ],
              "email": "onlinerehmatquran@gmail.com",
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
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61578288101812",
                "https://www.instagram.com/onlinerehmatequran/",
                "https://www.tiktok.com/@rehmatequran",
                "https://x.com/rehmat_e_quran",
                "https://www.youtube.com/@onlineRehmatQuran"
              ],
              "areaServed": [
                { "@type": "Country", "name": "Pakistan" },
                { "@type": "Country", "name": "United Arab Emirates" },
                { "@type": "Country", "name": "Saudi Arabia" },
                { "@type": "Country", "name": "Kuwait" },
                { "@type": "Country", "name": "Qatar" },
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "Australia" },
                { "@type": "Country", "name": "United Kingdom" },
                { "@type": "Country", "name": "Germany" },
                { "@type": "Country", "name": "France" },
                { "@type": "Country", "name": "Malaysia" },
                { "@type": "Country", "name": "Turkey" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "World's Leading Islamic Spiritual Healing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Expert Online Istikhara Consultation - Divine Guidance for Life Decisions",
                      "description": "Professional online Istikhara consultation for marriage, business, career, health, and important life decisions. Expert Islamic spiritual guidance through authentic prayer and divine consultation based on Holy Quran and Sunnah. Available 24/7 in multiple languages for worldwide clients with 98% accuracy rate."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Black Magic and Evil Eye Removal - Complete Spiritual Protection",
                      "description": "Expert removal of black magic, evil eye effects, negative energies, and spiritual attacks using authentic Quranic verses and prophetic traditions. Complete spiritual protection and cleansing for individuals, families, homes, and businesses worldwide with guaranteed results."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Spiritual Blockage Removal - Success and Prosperity Solutions",
                      "description": "Remove spiritual blockages preventing success, happiness, and prosperity in life, business, career, and relationships. Islamic spiritual healing to unlock divine blessings and achieve goals through authentic Quranic treatment with proven results."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Marriage Life Solutions - Relationship Harmony and Love Restoration",
                      "description": "Restore harmony, love, and understanding in marriage relationships through Islamic spiritual guidance and Quranic healing. Expert solutions for marital problems, relationship conflicts, and family disputes based on Islamic principles with high success rate."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Health and Wellness Spiritual Treatment - Islamic Healing for Body and Mind",
                      "description": "Comprehensive spiritual healing for physical and mental health issues using authentic Islamic methods, Quranic verses, and prophetic medicine. Treatment for chronic illnesses, pain, disabilities, and health concerns through divine healing with miraculous results."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Anxiety and Depression Islamic Treatment - Mental Health Spiritual Healing",
                      "description": "Overcome mental health challenges including anxiety, depression, negative thoughts, stress, and emotional problems through Islamic spiritual healing and Quranic therapy. Natural treatment for psychological disorders using authentic Islamic methods with excellent outcomes."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Family Problem Solutions - Islamic Mediation and Conflict Resolution",
                      "description": "Resolve family disputes, conflicts, and relationship issues through Islamic mediation and spiritual guidance. Expert solutions for parent-child conflicts, sibling disputes, in-law problems, and family disharmony based on Quranic principles."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Business Success Spiritual Guidance - Financial Prosperity and Career Advancement",
                      "description": "Islamic guidance for business success, financial prosperity, and career advancement through spiritual healing and divine blessings. Solutions for business failures, financial losses, career blockages, and workplace problems using authentic Islamic methods."
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
              "slogan": "World's Most Trusted Islamic Spiritual Healing Center",
              "knowsAbout": [
                "Islamic Spiritual Healing", "Quranic Treatment", "Online Istikhara", "Black Magic Removal", "Evil Eye Protection", "Marriage Problem Solutions", "Anxiety Depression Treatment", "Family Dispute Resolution", "Business Success Guidance", "Health Healing", "Spiritual Blockage Removal", "Protective Prayers", "Islamic Amulets", "Taweez Solutions", "Spiritual Counseling", "Religious Guidance", "Ruqyah Treatment", "Islamic Exorcism", "Prophetic Medicine", "Sufi Healing", "Islamic Psychology", "Divine Healing", "Sacred Healing", "Blessed Healing", "Holistic Islamic Healing", "Alternative Islamic Medicine", "Traditional Islamic Healing", "Authentic Islamic Treatment"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "30.3753",
                  "longitude": "69.3451"
                },
                "geoRadius": "20000000"
              }
            })
          }}
        />
        
        {/* Additional structured data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Rehmat E Quran - World's Leading Islamic Spiritual Healing Center",
              "description": "World's most trusted Islamic spiritual healing center providing expert Quranic treatment, online Istikhara consultation, black magic removal, evil eye protection, marriage problem solutions, anxiety depression treatment, family dispute resolution, business success guidance, health healing, spiritual blockage removal, and comprehensive spiritual guidance.",
              "url": "https://rehmatequran.com",
              "telephone": "+92-325-9107237",
              "email": "onlinerehmatquran@gmail.com",
              "image": {
                "@type": "ImageObject",
                "url": "https://static.readdy.ai/image/bc294c6119f7e425505ddb9be20b2472/46703a07e2e92119d9e52ebb6ace0d08.png",
                "width": 400,
                "height": 400
              },
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
              "paymentAccepted": "Cash, Bank Transfer, Online Payment",
              "currenciesAccepted": "PKR, USD, EUR, AED, SAR, KWD, QAR, GBP, AUD, MYR, TRY",
              "priceRange": "$$",
              "serviceArea": [
                "Pakistan", "UAE", "Saudi Arabia", "Kuwait", "Qatar", "USA", "Australia", "UK", "Germany", "France", "Malaysia", "Turkey"
              ],
              "hasMap": "https://maps.google.com/?q=30.3753,69.3451",
              "isAccessibleForFree": false,
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "10000",
                "bestRating": "5"
              }
            })
          }}
        />
        
        {/* Website structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Rehmat E Quran - World's Leading Islamic Spiritual Healing Center",
              "alternateName": "Rehmat E Quran",
              "url": "https://rehmatequran.com",
              "description": "World's most trusted Islamic spiritual healing center providing expert Quranic treatment, online Istikhara consultation, black magic removal, evil eye protection, marriage problem solutions, anxiety depression treatment, family dispute resolution, business success guidance, health healing, spiritual blockage removal, and comprehensive spiritual guidance.",
              "inLanguage": ["en", "ur", "ar", "ms", "tr"],
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://rehmatequran.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Rehmat E Quran",
                "url": "https://rehmatequran.com"
              },
              "copyrightHolder": {
                "@type": "Organization",
                "name": "Rehmat E Quran"
              },
              "copyrightYear": "2008",
              "author": {
                "@type": "Organization",
                "name": "Rehmat E Quran"
              }
            })
          }}
        />
        
        {/* Breadcrumb structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://rehmatequran.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://rehmatequran.com/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "About",
                  "item": "https://rehmatequran.com/about"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Contact",
                  "item": "https://rehmatequran.com/contact"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Testimonials",
                  "item": "https://rehmatequran.com/testimonials"
                }
              ]
            })
          }}
        />
        
        {/* FAQ structured data */}
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
                    "text": "Islamic spiritual healing is a traditional healing method based on the Holy Quran and Sunnah (prophetic traditions). It involves using Quranic verses, prophetic supplications, and authentic Islamic practices to treat spiritual, mental, and physical ailments. The healing works through divine intervention and the power of faith, addressing the root spiritual causes of problems rather than just symptoms. Our experts have 15+ years of experience and 98% success rate in providing authentic Islamic spiritual healing services."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I get online Istikhara consultation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can get online Istikhara consultation by contacting us via WhatsApp at +92 325 9107237 or email at onlinerehmatquran@gmail.com. Our expert Islamic spiritual healers perform authentic Istikhara consultation for important life decisions such as marriage, business, career, health, and other matters. We provide detailed guidance based on divine consultation and spiritual insights, available 24/7 for worldwide clients with 98% accuracy rate."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Islamic spiritual healing help with black magic and evil eye removal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Islamic spiritual healing is highly effective for removing black magic and evil eye effects. Using authentic Quranic verses and prophetic traditions, our experienced Islamic healers can identify, neutralize, and remove negative energies and spiritual attacks. The treatment also includes protective measures to prevent future spiritual harm. We have successfully treated thousands of clients worldwide with guaranteed results and complete spiritual protection."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Islamic spiritual healing effective for anxiety and depression?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Islamic spiritual healing has proven highly effective for treating anxiety, depression, and other mental health issues. The treatment addresses both spiritual and psychological aspects using Quranic therapy, prophetic medicine, and spiritual counseling based on Islamic principles. Many clients experience significant improvement in their mental health and emotional well-being through our authentic Islamic healing methods with excellent outcomes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Islamic spiritual healing help with marriage and relationship problems?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Islamic spiritual healing is very effective for resolving marriage and relationship problems. Through Islamic counseling, spiritual guidance, and Quranic healing, couples can restore love, harmony, and understanding in their relationships. The treatment addresses spiritual blockages affecting relationships and provides solutions based on Islamic principles with high success rate in saving marriages and improving family relationships."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does spiritual healing help with business success and financial prosperity?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Islamic spiritual healing can remove spiritual blockages that prevent business success and financial prosperity. Through spiritual cleansing, protective prayers, and divine guidance, individuals can overcome obstacles in their career and business. The treatment focuses on attracting divine blessings and removing negative energies affecting financial growth, resulting in improved business performance and financial stability."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are Islamic spiritual healing services available worldwide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Rehmat E Quran provides Islamic spiritual healing services worldwide including Pakistan, UAE, Saudi Arabia, Kuwait, Qatar, USA, Australia, UK, Europe, Malaysia, and Turkey. Services are available in multiple languages including English, Urdu, Arabic, Malay, and Turkish. Online consultation and remote healing services are available 24/7 for international clients with the same effectiveness as in-person treatment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does Islamic spiritual healing treatment take to show results?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The effectiveness and duration of Islamic spiritual healing depends on the nature and severity of the problem. Some clients experience immediate relief, while others may need ongoing treatment. Generally, spiritual healing shows positive results within 3-40 days with 98% success rate. The healing process is gradual and depends on individual faith, spiritual receptivity, and the complexity of the issues being addressed."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes Rehmat E Quran different from other Islamic healers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rehmat E Quran stands out as the world's leading Islamic spiritual healing center with 15+ years of experience, 10,000+ satisfied clients, and 98% success rate. We provide authentic Islamic treatment based on Holy Quran and Sunnah, available 24/7 in multiple languages for worldwide clients. Our expert healers use only halal methods, provide guaranteed results, and offer complete spiritual protection and guidance for all types of spiritual, mental, and physical problems."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${montserrat.variable} ${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
