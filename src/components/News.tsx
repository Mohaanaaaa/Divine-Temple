import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { latestNews } from '../data/temples';

export default function News() {
  return (
    <section id="news" className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-orange-900 mb-4">Temple Updates</h2>
          <p className="text-gray-600">Latest news and events from Bengaluru temples</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestNews.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}