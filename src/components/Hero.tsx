import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  // State to manage the search input
  const [searchQuery, setSearchQuery] = useState('');
  // State to hold the search results
  const [results, setResults] = useState([]);

  // Updated list of temples in Bengaluru
  const temples = [
    'ISKCON Temple',
    'Bull Temple',
    'Shiva Temple',
    'Cauvery Temple',
    'Lalbagh Botanical Garden Temple',
    'Sri Chaitanya Mahaprabhu Temple',
    'Sri Kanteerava Outdoor Stadium Temple',
    'Gavi Gangadhareshwara Temple',
    'Ragigudda Anjaneya Temple',
    'Nandi Temple',
    'St. Mary’s Basilica',
    'Tippu Sultan’s Mosque',
    'Sri Dodda Ganapathi Temple',
    'Sri Chhinnamasta Temple',
    'Vidyapeeta Temple',
    // Add more Bengaluru temple names as needed
  ];

  // Handle the search action
  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setResults([]); // Clear results if input is empty
    } else {
      const filteredResults = temples.filter((temple) =>
        temple.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filteredResults);
    }
  };

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://www.pexels.com/photo/handara-gate-uner-blue-sky-2166553.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Where Divine Heritage Meets History
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Explore the spiritual and architectural wonders of Bengaluru
          </p>
          <div className="max-w-xl mx-auto">
            <div className="flex items-center bg-white rounded-lg p-2">
              <Search className="h-5 w-5 text-gray-400 ml-2" />
              <input
                type="text"
                placeholder="Search for temples in Bengaluru..."
                className="w-full px-4 py-2 focus:outline-none"
                value={searchQuery} // Bind input value to state
                onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
              />
              <button
                className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                onClick={handleSearch} // Trigger search on button click
              >
                Search
              </button>
            </div>
          </div>

          {/* Display search results if any */}
          {results.length > 0 && (
            <ul className="mt-4 bg-white rounded-lg shadow-lg p-4 max-w-xl mx-auto">
              {results.map((temple, index) => (
                <li key={index} className="py-2 border-b last:border-b-0">
                  {temple}
                </li>
              ))}
            </ul>
          )}
          
          {results.length === 0 && searchQuery && (
            <p className="mt-4 text-gray-500">No temples found for "{searchQuery}"</p>
          )}
        </div>
      </div>
    </div>
  );
}