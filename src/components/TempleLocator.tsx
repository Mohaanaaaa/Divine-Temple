import React from 'react';
import { MapPin, Clock, History, Star } from 'lucide-react';
import { bengaluruAreas, type Temple } from '../data/temples';

export default function TempleLocator() {
  const [selectedArea, setSelectedArea] = React.useState(bengaluruAreas[0]);
  const [selectedTemple, setSelectedTemple] = React.useState<Temple | null>(
    bengaluruAreas[0].temples[0]
  );

  return (
    <section id="temples" className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-orange-900 mb-4">Bengaluru Temple Guide</h2>
          <p className="text-gray-600">Discover divine spaces in your neighborhood</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Select Area</h3>
              <select 
                className="w-full p-2 border border-gray-300 rounded-md"
                onChange={(e) => {
                  const area = bengaluruAreas.find(a => a.id === e.target.value);
                  if (area) {
                    setSelectedArea(area);
                    setSelectedTemple(area.temples[0]);
                  }
                }}
              >
                {bengaluruAreas.map((area) => (
                  <option key={area.id} value={area.id}>{area.name}</option>
                ))}
              </select>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Temples in {selectedArea.name}</h3>
              <div className="space-y-3">
                {selectedArea.temples.map((temple) => (
                  <button
                    key={temple.id}
                    onClick={() => setSelectedTemple(temple)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedTemple?.id === temple.id
                        ? 'bg-orange-100 text-orange-900'
                        : 'bg-gray-50 hover:bg-orange-50 text-gray-700'
                    }`}
                  >
                    {temple.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            {selectedTemple && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={selectedTemple.image}
                  alt={selectedTemple.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-serif text-orange-900 mb-4">
                    {selectedTemple.name}
                  </h2>
                  
                  <div className="grid gap-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Address</h4>
                        <p className="text-gray-600">{selectedTemple.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Timings</h4>
                        <p className="text-gray-600">{selectedTemple.timings}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <History className="h-5 w-5 text-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">History</h4>
                        <p className="text-gray-600">{selectedTemple.history}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Special Pujas</h4>
                        <ul className="list-disc list-inside text-gray-600">
                          {selectedTemple.specialPujas.map((puja, index) => (
                            <li key={index}>{puja}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* New Section: Display Google Maps Link */}
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Location</h4>
                        <a
                          href={selectedTemple.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:underline"
                        >
                          View on Google Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
