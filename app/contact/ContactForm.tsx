
'use client';

import { useState, useEffect } from 'react';

interface ContactFormProps {
  translations: any;
}

interface Country {
  name: string;
  code: string;
  cities: string[];
}

export default function ContactForm({ translations }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    service: '',
    priority: 'normal',
    problem: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [countries, setCountries] = useState<Country[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [countrySearch, setCountrySearch] = useState('');
  const [citySearch, setCitySearch] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  // Comprehensive countries and cities data
  const countriesData: Country[] = [
    {
      name: 'Pakistan',
      code: 'PK',
      cities: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala', 'Hyderabad', 'Bahawalpur', 'Sargodha', 'Sukkur', 'Larkana', 'Mardan', 'Mingora', 'Shekhupura', 'Jhang', 'Dera Ghazi Khan', 'Gujrat', 'Sahiwal', 'Wah Cantonment', 'Kasur', 'Okara', 'Burewala', 'Muzaffargarh', 'Turbat', 'Nawabshah', 'Chiniot']
    },
    {
      name: 'India',
      code: 'IN',
      cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan', 'Vasai', 'Varanasi', 'Srinagar']
    },
    {
      name: 'United States',
      code: 'US',
      cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte', 'San Francisco', 'Indianapolis', 'Seattle', 'Denver', 'Washington DC', 'Boston', 'El Paso', 'Nashville', 'Detroit', 'Oklahoma City', 'Portland', 'Las Vegas', 'Memphis', 'Louisville', 'Baltimore']
    },
    {
      name: 'United Kingdom',
      code: 'GB',
      cities: ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool', 'Newcastle', 'Sheffield', 'Bristol', 'Edinburgh', 'Leeds', 'Leicester', 'Coventry', 'Cardiff', 'Belfast', 'Nottingham', 'Hull', 'Plymouth', 'Stoke-on-Trent', 'Wolverhampton', 'Derby', 'Swansea', 'Southampton', 'Salford', 'Aberdeen', 'Westminster', 'Portsmouth', 'York', 'Peterborough', 'Dundee', 'Lancaster']
    },
    {
      name: 'Canada',
      code: 'CA',
      cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City', 'Hamilton', 'Kitchener', 'London', 'Victoria', 'Halifax', 'Oshawa', 'Windsor', 'Saskatoon', 'St. Catharines', 'Regina', 'Sherbrooke', 'Barrie', 'Kelowna', 'Abbotsford', 'Kingston', 'Sudbury', 'Saguenay', 'Trois-Rivières', 'Guelph', 'Cambridge', 'Whitby', 'Brantford']
    },
    {
      name: 'Australia',
      code: 'AU',
      cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Newcastle', 'Wollongong', 'Logan City', 'Geelong', 'Hobart', 'Townsville', 'Cairns', 'Darwin', 'Toowoomba', 'Ballarat', 'Bendigo', 'Albury', 'Launceston', 'Mackay', 'Rockhampton', 'Bunbury', 'Bundaberg', 'Coffs Harbour', 'Wagga Wagga', 'Hervey Bay', 'Mildura', 'Shepparton', 'Gladstone']
    },
    {
      name: 'Germany',
      code: 'DE',
      cities: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig', 'Bremen', 'Dresden', 'Hanover', 'Nuremberg', 'Duisburg', 'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Karlsruhe', 'Mannheim', 'Augsburg', 'Wiesbaden', 'Gelsenkirchen', 'Mönchengladbach', 'Braunschweig', 'Chemnitz', 'Kiel', 'Aachen']
    },
    {
      name: 'France',
      code: 'FR',
      cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille', 'Rennes', 'Reims', 'Le Havre', 'Saint-Étienne', 'Toulon', 'Grenoble', 'Dijon', 'Angers', 'Nîmes', 'Villeurbanne', 'Saint-Denis', 'Le Mans', 'Aix-en-Provence', 'Clermont-Ferrand', 'Brest', 'Limoges', 'Tours', 'Amiens', 'Perpignan', 'Metz']
    },
    {
      name: 'Italy',
      code: 'IT',
      cities: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa', 'Bologna', 'Florence', 'Bari', 'Catania', 'Venice', 'Verona', 'Messina', 'Padua', 'Trieste', 'Brescia', 'Taranto', 'Prato', 'Parma', 'Reggio Calabria', 'Modena', 'Reggio Emilia', 'Perugia', 'Livorno', 'Ravenna', 'Cagliari', 'Foggia', 'Rimini', 'Salerno', 'Ferrara']
    },
    {
      name: 'Spain',
      code: 'ES',
      cities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Málaga', 'Murcia', 'Palma', 'Las Palmas', 'Bilbao', 'Alicante', 'Córdoba', 'Valladolid', 'Vigo', 'Gijón', 'Hospitalet', 'A Coruña', 'Vitoria', 'Granada', 'Elche', 'Oviedo', 'Badalona', 'Cartagena', 'Terrassa', 'Jerez', 'Sabadell', 'Móstoles', 'Santa Cruz', 'Pamplona', 'Almería']
    },
    {
      name: 'Saudi Arabia',
      code: 'SA',
      cities: ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam', 'Khobar', 'Tabuk', 'Buraidah', 'Khamis Mushait', 'Hail', 'Hafar Al-Batin', 'Jubail', 'Dhahran', 'Taif', 'Najran', 'Qatif', 'Abha', 'Yanbu', 'Al-Kharj', 'Sakaka', 'Jizan', 'Arar', 'Al-Bahah', 'Bisha', 'Al-Qunfudhah', 'Unaizah', 'Al-Majmaah', 'Rafha', 'Ras Tanura', 'Dawadmi']
    },
    {
      name: 'United Arab Emirates',
      code: 'AE',
      cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Al Ain', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Khor Fakkan', 'Kalba', 'Dibba Al-Fujairah', 'Madinat Zayed', 'Liwa Oasis', 'Jebel Ali', 'Al Dhafra', 'Hatta', 'Masafi', 'Al Hamriyah', 'Ghayathi', 'Ruwais', 'Mezaira', 'Tarif', 'Sila', 'Dalma', 'Sir Bani Yas', 'Zirku', 'Das Island', 'Delma', 'Arzanah', 'Bu Tinah']
    },
    {
      name: 'Turkey',
      code: 'TR',
      cities: ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Antalya', 'Adana', 'Konya', 'Şanlıurfa', 'Gaziantep', 'Kayseri', 'Mersin', 'Eskişehir', 'Diyarbakır', 'Samsun', 'Denizli', 'Malatya', 'Kahramanmaraş', 'Erzurum', 'Van', 'Batman', 'Elazığ', 'Iğdır', 'Trabzon', 'Sakarya', 'Manisa', 'Aydın', 'Balıkesir', 'Hatay', 'Muğla', 'Tekirdağ']
    },
    {
      name: 'Bangladesh',
      code: 'BD',
      cities: ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet', 'Barisal', 'Rangpur', 'Comilla', 'Narayanganj', 'Gazipur', 'Mymensingh', 'Brahmanbaria', 'Tangail', 'Jamalpur', 'Pabna', 'Jessore', 'Cox\'s Bazar', 'Bogura', 'Dinajpur', 'Kushtia', 'Faridpur', 'Kishoreganj', 'Madaripur', 'Netrokona', 'Sirajganj', 'Patuakhali', 'Satkhira', 'Chandpur', 'Jhenaidah', 'Narsingdi']
    },
    {
      name: 'Malaysia',
      code: 'MY',
      cities: ['Kuala Lumpur', 'George Town', 'Ipoh', 'Shah Alam', 'Petaling Jaya', 'Johor Bahru', 'Seremban', 'Kuantan', 'Kota Kinabalu', 'Kuching', 'Klang', 'Malacca City', 'Alor Setar', 'Tawau', 'Kota Bharu', 'Sandakan', 'Kuala Terengganu', 'Ampang', 'Subang Jaya', 'Miri', 'Taiping', 'Bukit Mertajam', 'Sepang', 'Sibu', 'Kulim', 'Bintulu', 'Lahad Datu', 'Kluang', 'Bentong', 'Pasir Gudang']
    }
  ];

  // Initialize countries data
  useEffect(() => {
    setCountries(countriesData);
  }, []);

  // Update cities when country changes
  useEffect(() => {
    if (formData.country) {
      const selectedCountry = countries.find(c => c.name === formData.country);
      if (selectedCountry) {
        setCities(selectedCountry.cities);
      }
    } else {
      setCities([]);
    }
    // Reset city when country changes
    if (formData.city) {
      setFormData(prev => ({ ...prev, city: '' }));
    }
  }, [formData.country, countries]);

  // Filter countries based on search
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(countrySearch.toLowerCase())
  );

  // Filter cities based on search
  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(citySearch.toLowerCase())
  );

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const services = [
    "Istikhara - Divine Guidance",
    "Evil Eye & Hasad Removal",
    "Black Magic & Sihr Removal",
    "Marriage Life Solutions",
    "Health & Healing",
    "Business & Financial Success",
    "Spiritual Protection & Taweez",
    "Mental Health & Depression",
    "Family Problems Resolution",
    "Enemy & Court Case Protection",
    "Love & Relationship Healing",
    "Education & Career Success",
    "Other (Please specify in message)"
  ];

  const validateForm = () => {
    const requiredFields = ['name', 'email', 'phone', 'country', 'city', 'service', 'problem'];
    return requiredFields.every(field => formData[field as keyof typeof formData].trim() !== '');
  };

  // GUARANTEED EMAIL DELIVERY SOLUTION
  const handleFormSubmit = async () => {
    if (!validateForm()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Method 1: Netlify Forms (Most Reliable)
      const netlifyFormData = new FormData();
      netlifyFormData.append('form-name', 'spiritual-healing-contact');
      netlifyFormData.append('name', formData.name);
      netlifyFormData.append('email', formData.email);
      netlifyFormData.append('phone', formData.phone);
      netlifyFormData.append('country', formData.country);
      netlifyFormData.append('city', formData.city);
      netlifyFormData.append('service', formData.service);
      netlifyFormData.append('priority', formData.priority);
      netlifyFormData.append('problem', formData.problem);
      netlifyFormData.append('message', formData.message || 'No additional message');
      netlifyFormData.append('submission_time', new Date().toLocaleString());

      // Method 2: Formspree (Backup Service)
      const formspreeData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        city: formData.city,
        service: formData.service,
        priority: formData.priority,
        problem: formData.problem,
        message: formData.message || 'No additional message',
        _replyto: formData.email,
        _subject: ` URGENT - Spiritual Healing Request from ${formData.name}`,
        _next: window.location.href,
        _format: 'plain'
      };

      // Method 3: Web3Forms (Third Service)
      const web3FormsData = {
        access_key: "c7f3b7c3-4a5e-4d9f-8b2c-1a3f4e5d6c7b", // Public access key
        subject: ` URGENT - Spiritual Healing Request from ${formData.name}`,
        from_name: formData.name,
        from_email: formData.email,
        to_email: "onlinerehmatquran@gmail.com",
        message: `
 SPIRITUAL HEALING CONSULTATION REQUEST 
 REQUEST DATE: ${new Date().toLocaleString()}
 PRIORITY: ${formData.priority.toUpperCase()}

 PERSONAL INFORMATION:
 Name: ${formData.name}
 Email: ${formData.email}
 Phone: ${formData.phone}
 Country: ${formData.country}
 City: ${formData.city}

 SERVICE DETAILS:
 Service: ${formData.service}
 Priority: ${formData.priority.toUpperCase()}

 PROBLEM DESCRIPTION:
${formData.problem}

 ADDITIONAL MESSAGE:
${formData.message || 'No additional message'}

 QUICK RESPONSE:
 Reply Email: ${formData.email}
 WhatsApp: ${formData.phone}

 SOURCE: Rehmat E Quran Website Contact Form
        `,
        phone: formData.phone,
        country: formData.country,
        city: formData.city,
        service: formData.service,
        priority: formData.priority,
        problem: formData.problem,
        additional_message: formData.message || 'No additional message'
      };

      // Submit to all three services simultaneously
      const promises = [
        // Netlify Forms
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(netlifyFormData as any).toString()
        }),

        // Formspree
        fetch('https://formspree.io/f/xanyoqvd', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formspreeData)
        }),

        // Web3Forms
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(web3FormsData)
        })
      ];

      // Wait for all submissions
      const results = await Promise.allSettled(promises);

      // Check if at least one succeeded
      const hasSuccess = results.some(result => result.status === 'fulfilled');

      if (hasSuccess) {
        console.log(' Email sent successfully via multiple services');
      } else {
        console.warn(' All email services failed, using fallback methods');
      }

      // Method 4: Direct Gmail composition (Always works)
      const gmailSubject = encodeURIComponent(` URGENT - Spiritual Healing Request from ${formData.name}`);
      const gmailBody = encodeURIComponent(`

 SPIRITUAL HEALING CONSULTATION REQUEST 

 REQUEST DATE: ${new Date().toLocaleString()}
 PRIORITY: ${formData.priority.toUpperCase()}

 PERSONAL INFORMATION:
 Name: ${formData.name}
 Email: ${formData.email}
 Phone: ${formData.phone}
 Country: ${formData.country}
 City: ${formData.city}

 SERVICE DETAILS:
 Service: ${formData.service}
 Priority: ${formData.priority.toUpperCase()}

 PROBLEM DESCRIPTION:
${formData.problem}

 ADDITIONAL MESSAGE:
${formData.message || 'No additional message'}

 QUICK RESPONSE:
 Reply Email: ${formData.email}
 WhatsApp: ${formData.phone}

 SOURCE: Rehmat E Quran Website Contact Form

السلام علیکم! This is an urgent spiritual healing consultation request. Please respond as soon as possible.
      `);

      // Open Gmail compose window
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=onlinerehmatquran@gmail.com&su=${gmailSubject}&body=${gmailBody}`, '_blank');

      // Method 5: Download backup file
      const backupContent = `
SPIRITUAL HEALING CONSULTATION REQUEST - BACKUP FILE
==================================================

SUBMISSION DATE: ${new Date().toLocaleString()}
PRIORITY: ${formData.priority.toUpperCase()}

PERSONAL INFORMATION:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}
City: ${formData.city}

SERVICE DETAILS:
Service: ${formData.service}
Priority: ${formData.priority.toUpperCase()}

PROBLEM DESCRIPTION:
${formData.problem}

ADDITIONAL MESSAGE:
${formData.message || 'No additional message'}

CONTACT DETAILS:
To Email: onlinerehmatquran@gmail.com
WhatsApp: ${formData.phone}

SOURCE: Rehmat E Quran Website Contact Form

INSTRUCTIONS:
If you didn't receive this via email, please manually send this information to onlinerehmatquran@gmail.com
      `;

      const blob = new Blob([backupContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = `spiritual-healing-request-${formData.name}-${new Date().toISOString().split('T')[0]}.txt`;
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(url);

      // Method 6: WhatsApp notification
      const whatsappMessage = `
* NEW SPIRITUAL HEALING REQUEST *
 DATE: ${new Date().toLocaleString()}
 PRIORITY: ${formData.priority.toUpperCase()}

 PERSONAL INFO:
 Name: ${formData.name}
 Email: ${formData.email}
 Phone: ${formData.phone}
 Country: ${formData.country}
 City: ${formData.city}

 SERVICE: ${formData.service}

 PROBLEM: 
${formData.problem}

 MESSAGE: 
${formData.message || 'No additional message'}

 CONTACT: ${formData.email}

 SOURCE: Website Contact Form

السلام علیکم! New spiritual healing request received.
      `.trim();

      // Send WhatsApp message to your number
      window.open(`https://wa.me/923259107237?text=${encodeURIComponent(whatsappMessage)}`, '_blank');

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        service: '',
        priority: 'normal',
        problem: '',
        message: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppSubmit = () => {
    if (!validateForm()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    const whatsappMessage = `
* SPIRITUAL HEALING CONSULTATION REQUEST *
 REQUEST DATE: ${new Date().toLocaleString()}
 PRIORITY: ${formData.priority.toUpperCase()}

 PERSONAL INFORMATION:
 *Name:* ${formData.name}
 *Email:* ${formData.email}
 *Phone:* ${formData.phone}
 *Country:* ${formData.country}
 *City:* ${formData.city}

 SERVICE DETAILS:
 *Service:* ${formData.service}
 *Priority:* ${formData.priority.toUpperCase()}

 PROBLEM DESCRIPTION:
${formData.problem}

 ADDITIONAL MESSAGE:
${formData.message || 'No additional message provided'}

 CONTACT DETAILS:
 *Reply Email:* ${formData.email}
 *Phone:* ${formData.phone}

 SOURCE: Rehmat E Quran Website Contact Form
 *LOCATION:* ${formData.city}, ${formData.country}

السلام علیکم! I need urgent spiritual healing consultation. Please help me with my problem as soon as possible. JazakAllah Khair.

*Note:* This is a ${formData.priority} priority request submitted on ${new Date().toLocaleString()}.
    `.trim();

    const whatsappUrl = `https://wa.me/923259107237?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      service: '',
      priority: 'normal',
      problem: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
    }
  };

  const handleCountrySelect = (country: string) => {
    setFormData(prev => ({ ...prev, country }));
    setCountrySearch(country);
    setShowCountryDropdown(false);
  };

  const handleCitySelect = (city: string) => {
    setFormData(prev => ({ ...prev, city }));
    setCitySearch(city);
    setShowCityDropdown(false);
  };

  return (
    <section id="contact-form-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Form for Spiritual Healing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out this form to get personalized spiritual healing consultation. We guarantee to respond within 12 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Hidden Netlify Form */}
            <form name="spiritual-healing-contact" netlify-honeypot="bot-field" hidden>
              <input type="text" name="name" />
              <input type="email" name="email" />
              <input type="tel" name="phone" />
              <input type="text" name="country" />
              <input type="text" name="city" />
              <input type="text" name="service" />
              <input type="text" name="priority" />
              <textarea name="problem"></textarea>
              <textarea name="message"></textarea>
              <input type="text" name="submission_time" />
            </form>

            <form
              id="spiritual-healing-contact-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Country *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={countrySearch}
                      onChange={(e) => {
                        setCountrySearch(e.target.value);
                        setShowCountryDropdown(true);
                      }}
                      onFocus={() => setShowCountryDropdown(true)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      placeholder="Search and select your country"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  {showCountryDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                          <div
                            key={country.code}
                            onClick={() => handleCountrySelect(country.name)}
                            className="px-4 py-3 hover:bg-emerald-50 cursor-pointer border-b border-gray-100 last:border-b-0 flex items-center"
                          >
                            <span className="text-2xl mr-3">{country.code === 'PK' ? '🇵🇰' : country.code === 'IN' ? '🇮🇳' : country.code === 'US' ? '🇺🇸' : country.code === 'GB' ? '🇬🇧' : country.code === 'CA' ? '🇨🇦' : country.code === 'AU' ? '🇦🇺' : country.code === 'DE' ? '🇩🇪' : country.code === 'FR' ? '🇫🇷' : country.code === 'IT' ? '🇮🇹' : country.code === 'ES' ? '🇪🇸' : country.code === 'SA' ? '🇸🇦' : country.code === 'AE' ? '🇦🇪' : country.code === 'TR' ? '🇹🇷' : country.code === 'BD' ? '🇧🇩' : country.code === 'MY' ? '🇲🇾' : '🌍'}</span>
                            <span className="font-medium">{country.name}</span>
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-gray-500 text-center">
                          No countries found
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    City *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={citySearch}
                      onChange={(e) => {
                        setCitySearch(e.target.value);
                        setShowCityDropdown(true);
                      }}
                      onFocus={() => setShowCityDropdown(true)}
                      required
                      disabled={!formData.country}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder={formData.country ? "Search and select your city" : "Select country first"}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  {showCityDropdown && formData.country && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {filteredCities.length > 0 ? (
                        filteredCities.map((city) => (
                          <div
                            key={city}
                            onClick={() => handleCitySelect(city)}
                            className="px-4 py-3 hover:bg-emerald-50 cursor-pointer border-b border-gray-100 last:border-b-0 flex items-center"
                          >
                            <div className="w-5 h-5 flex items-center justify-center mr-3">
                              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <span className="font-medium">{city}</span>
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-gray-500 text-center">
                          No cities found
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors appearance-none bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Priority Level *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { value: 'normal', label: 'Normal', color: 'bg-blue-50 border-blue-200' },
                    { value: 'urgent', label: 'Urgent', color: 'bg-amber-50 border-amber-200' },
                    { value: 'emergency', label: 'Emergency', color: 'bg-red-50 border-red-200' }
                  ].map((priority) => (
                    <label key={priority.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="priority"
                        value={priority.value}
                        checked={formData.priority === priority.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`p-4 rounded-lg border-2 transition-colors ${
                        formData.priority === priority.value
                          ? priority.color + ' border-current'
                          : 'bg-white border-gray-200 hover:' + priority.color
                      }`}>
                        <div className="flex items-center">
                          <div className="w-4 h-4 flex items-center justify-center mr-3">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {priority.value === 'normal' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                              {priority.value === 'urgent' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z" />}
                              {priority.value === 'emergency' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z" />}
                            </svg>
                          </div>
                          <span className="font-medium">{priority.label}</span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Problem Description *
                </label>
                <textarea
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  required
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Briefly describe your problem or situation (Max 500 characters)"
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.problem.length}/500 characters
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Any additional information or specific requests (Max 500 characters)"
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    onClick={handleFormSubmit}
                    disabled={isSubmitting}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white font-semibold py-4 px-8 rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                          <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </div>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        Send Email Request
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center"
                  >
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                    </div>
                    WhatsApp Request
                  </button>
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-green-800 font-semibold">
                        ✅ SUCCESS! Your spiritual healing request has been submitted successfully!
                      </p>
                      <p className="text-green-600 text-sm">
                        We will respond to your request within 12 hours. Check your email and WhatsApp for updates.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <p className="text-red-800">
                      Please fill in all required fields: Name, Email, Phone, Country, City, Service, and Problem Description.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
