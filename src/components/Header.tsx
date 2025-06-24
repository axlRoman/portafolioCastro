import React, { useState } from 'react';
import { Camera, Menu, X, Facebook, Instagram, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-amber-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Castro</h1>
              <p className="text-xs text-gray-600">Fotografía y Video</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-amber-600 transition-colors">Inicio</a>
            <a href="#galeria" className="text-gray-700 hover:text-amber-600 transition-colors">Galería</a>
            <a href="#servicios" className="text-gray-700 hover:text-amber-600 transition-colors">Servicios</a>
            <a href="#testimonios" className="text-gray-700 hover:text-amber-600 transition-colors">Testimonios</a>
            <a href="#contacto" className="text-gray-700 hover:text-amber-600 transition-colors">Contacto</a>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.facebook.com/s.cas.adriana/?locale=es_LA" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-blue-600 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="tel:8711923161" className="text-gray-600 hover:text-green-600 transition-colors">
              <Phone className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Inicio</a>
              <a href="#galeria" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Galería</a>
              <a href="#servicios" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Servicios</a>
              <a href="#testimonios" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Testimonios</a>
              <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Contacto</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;