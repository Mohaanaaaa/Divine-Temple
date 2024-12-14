import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TempleLocator from './components/TempleLocator';
import Gallery from './components/Gallery';
import News from './components/News';

function App() {
  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />
      <main>
        <Hero />
        <TempleLocator />
        <Gallery />
        <News />
      </main>
      
      <footer className="bg-orange-900 text-orange-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4">Sacred Spaces</h3>
              <p className="text-orange-200">
                Connecting people with divine heritage and cultural wisdom.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-orange-300">Home</a></li>
                <li><a href="#temples" className="hover:text-orange-300">Temple Locator</a></li>
                <li><a href="#gallery" className="hover:text-orange-300">Gallery</a></li>
                <li><a href="#news" className="hover:text-orange-300">News</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-orange-200">
                Email: info@sacredspaces.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-orange-800 text-center">
            <p>&copy; {new Date().getFullYear()} Sacred Spaces. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;