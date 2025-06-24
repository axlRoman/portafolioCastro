import React from 'react';
import { Camera, Facebook, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-amber-500" />
              <div>
                <h3 className="text-2xl font-bold">Castro</h3>
                <p className="text-sm text-gray-400">Fotografía y Video</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Especializados en capturar momentos únicos e inolvidables. Con más de 5 años 
              de experiencia en Torreón, Coahuila, nos dedicamos a crear recuerdos que durarán para toda la vida.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/s.cas.adriana/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Bodas</a></li>
              <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Quinceañeras</a></li>
              <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Eventos Sociales</a></li>
              <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Retratos</a></li>
              <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Identificación</a></li>
              <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Video Profesional</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-amber-500" />
                <span className="text-sm">San Felipe, Torreón, Coah.</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-amber-500" />
                <span className="text-sm">871 192 3161</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-amber-500" />
                <span className="text-sm">fyvcastro_adriana@hotmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© 2024 Castro Fotografía y Video. Todos los derechos reservados.</p>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>para capturar momentos especiales</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;