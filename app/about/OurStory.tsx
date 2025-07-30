
'use client';

interface OurStoryProps {
  translations: any;
}

export default function OurStory({ translations }: OurStoryProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {translations.ourSacredJourney}
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {translations.aboutText}
                </p>
                
                <div className="bg-emerald-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{translations.ourMission}</h3>
                  <p className="text-gray-700">
                    {translations.ourMissionText}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Beautiful%20Islamic%20spiritual%20scene%20with%20open%20Holy%20Quran%20book%20glowing%20with%20divine%20light%2C%20peaceful%20mosque%20interior%20with%20Islamic%20calligraphy%2C%20prayer%20beads%20and%20traditional%20Islamic%20elements%2C%20golden%20light%20emanating%20from%20sacred%20text%2C%20spiritual%20atmosphere%20with%20Islamic%20geometric%20patterns%2C%20crescent%20moon%20and%20stars%2C%20peaceful%20meditation%20space%20with%20Islamic%20d%C3%A9cor%2C%20divine%20guidance%20and%20enlightenment%20scene&width=600&height=500&seq=our-story&orientation=landscape"
                alt="Our Story"
                className="w-full h-96 object-cover object-top rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
