import React from 'react';
import { Menu, X, Bell, Search } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-orange-50 border-b border-orange-100 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-serif text-orange-800">Divine Bengaluru</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-orange-900 hover:text-orange-700">Home</a>
            <a href="#temples" className="text-orange-900 hover:text-orange-700">Temple Locator</a>
            <a href="#gallery" className="text-orange-900 hover:text-orange-700">Gallery</a>
            <a href="#news" className="text-orange-900 hover:text-orange-700">News</a>
            <button className="p-2 rounded-full hover:bg-orange-100">
              <Bell className="h-5 w-5 text-orange-800" />
            </button>
            <button className="p-2 rounded-full hover:bg-orange-100">
              <Search className="h-5 w-5 text-orange-800" />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-orange-800 hover:bg-orange-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-orange-50">
            <a href="#home" className="block px-3 py-2 text-orange-900 hover:bg-orange-100 rounded-md">Home</a>
            <a href="#temples" className="block px-3 py-2 text-orange-900 hover:bg-orange-100 rounded-md">Temple Locator</a>
            <a href="#gallery" className="block px-3 py-2 text-orange-900 hover:bg-orange-100 rounded-md">Gallery</a>
            <a href="#news" className="block px-3 py-2 text-orange-900 hover:bg-orange-100 rounded-md">News</a>
          </div>
        </div>
      )}
    </nav>
  );
}