import React from 'react';
import { Camera, Award, Users, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <Camera className="h-16 w-16 text-amber-500 mx-auto mb-4 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Castro
            <span className="block text-3xl md:text-4xl font-light text-amber-400 mt-2">
              Fotografía y Video
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Capturamos tus momentos más preciados con arte, pasión y profesionalismo. 
            Cada imagen cuenta una historia única.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Ver Galería
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Agendar Cita
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2">
              <Award className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-sm text-gray-300">Años de Experiencia</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2">
              <Users className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-300">Clientes Felices</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2">
              <Heart className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-sm text-gray-300">Momentos Capturados</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2">
              <Camera className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-300">Disponibilidad</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;