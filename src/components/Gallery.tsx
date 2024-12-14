import React from 'react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80',
    title: 'Ancient Temple Architecture'
  },
  {
    url: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&q=80',
    title: 'Sacred Rituals'
  },
  {
    url: 'https://images.unsplash.com/photo-1627894006066-b45796ade022?auto=format&fit=crop&q=80',
    title: 'Temple Festivals'
  },
  {
    url: 'https://images.unsplash.com/photo-1625125083143-2d2b85026926?auto=format&fit=crop&q=80',
    title: 'Cultural Heritage'
  },
  {
    url: 'https://images.unsplash.com/photo-1624461016140-5e88ddc92913?auto=format&fit=crop&q=80',
    title: 'Spiritual Journey'
  },
  {
    url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80',
    title: 'Divine Architecture'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-orange-900 mb-4">Blessed  Gallery</h2>
          <p className="text-gray-600">Experience the divine through visual storytelling</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}