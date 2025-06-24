import React from 'react';
import { Camera, Video, Users, Heart, Briefcase, Clock, Star, Gift } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Bodas',
      description: 'Cobertura completa de tu día especial, desde la preparación hasta la fiesta.',
      features: ['Ceremonia religiosa/civil', 'Sesión de fotos', 'Video profesional', 'Álbum digital'],
      price: 'Desde $800',
      popular: true
    },
    {
      icon: Gift,
      title: 'Quinceañeras',
      description: 'Celebra tus 15 años con un registro fotográfico único e inolvidable.',
      features: ['Sesión pre-quinceañera', 'Cobertura del evento', 'Video highlights', 'Álbum personalizado'],
      price: 'Desde $600',
      popular: false
    },
    {
      icon: Users,
      title: 'Eventos Sociales',
      description: 'Fiestas, graduaciones, cumpleaños y cualquier celebración especial.',
      features: ['Cobertura del evento', 'Fotos grupales', 'Momentos espontáneos', 'Entrega rápida'],
      price: 'Desde $300',
      popular: false
    },
    {
      icon: Camera,
      title: 'Retratos Profesionales',
      description: 'Sesiones fotográficas para perfiles corporativos, artísticos o personales.',
      features: ['Sesión en estudio', 'Múltiples looks', 'Retoque profesional', 'Entrega digital'],
      price: 'Desde $150',
      popular: false
    },
    {
      icon: Briefcase,
      title: 'Fotografía de Identificación',
      description: 'Fotos para documentos oficiales, pasaportes, cédulas y más.',
      features: ['Estándares oficiales', 'Retoque básico', 'Entrega inmediata', 'Múltiples copias'],
      price: 'Desde $20',
      popular: false
    },
    {
      icon: Video,
      title: 'Video Profesional',
      description: 'Producción de videos para eventos, promocionales o documentales.',
      features: ['Grabación 4K', 'Edición profesional', 'Música personalizada', 'Múltiples formatos'],
      price: 'Desde $400',
      popular: false
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios fotográficos y de video para 
            satisfacer todas tus necesidades. Calidad profesional garantizada.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border-2 ${
                  service.popular 
                    ? 'border-amber-400 ring-4 ring-amber-100' 
                    : 'border-gray-100 hover:border-amber-200'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600 mb-4">{service.price}</div>
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
                    Solicitar Cotización
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">¿Necesitas algo personalizado?</h3>
          <p className="text-xl mb-6 opacity-90">
            Contáctanos para crear un paquete especial adaptado a tus necesidades específicas.
          </p>
          <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300">
            Hablar con un Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;