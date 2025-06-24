import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('todas');

  const categories = [
    { id: 'todas', name: 'Todas' },
    { id: 'bodas', name: 'Bodas' },
    { id: 'quinceaneras', name: 'Quinceañeras' },
    { id: 'retratos', name: 'Retratos' },
    { id: 'eventos', name: 'Eventos' },
    { id: 'familia', name: 'Familia' }
  ];

  const photos = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'bodas',
      title: 'Boda Romántica',
      description: 'Ceremonia al aire libre con vista al mar'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'quinceaneras',
      title: 'Quinceañera Elegante',
      description: 'Celebración de 15 años en salón de eventos'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'retratos',
      title: 'Retrato Profesional',
      description: 'Sesión de fotos para perfil corporativo'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1464228/pexels-photo-1464228.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'eventos',
      title: 'Evento Corporativo',
      description: 'Cobertura de evento empresarial'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'familia',
      title: 'Sesión Familiar',
      description: 'Retrato familiar en estudio'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'bodas',
      title: 'Boda Clásica',
      description: 'Ceremonia tradicional en iglesia'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'retratos',
      title: 'Retrato Artístico',
      description: 'Sesión creativa con iluminación especial'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'quinceaneras',
      title: 'XV Años Temática',
      description: 'Celebración con decoración personalizada'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'eventos',
      title: 'Fiesta de Graduación',
      description: 'Celebración de graduación universitaria'
    }
  ];

  const filteredPhotos = activeCategory === 'todas' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  const openLightbox = (photo) => {
    setSelectedImage(photo);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestra Galería
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora nuestro portafolio de trabajos realizados. Cada fotografía representa 
            un momento único capturado con dedicación y profesionalismo.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-600 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => openLightbox(photo)}
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                    <p className="text-sm">{photo.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;