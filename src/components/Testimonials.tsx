import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      role: 'Novia',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Castro Fotografía hizo que nuestro día de boda fuera aún más especial. Las fotos capturaron perfectamente cada emoción y momento importante. ¡Altamente recomendados!'
    },
    {
      name: 'Carlos Martínez',
      role: 'Padre de Quinceañera',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Excelente servicio para los 15 años de mi hija. Muy profesionales, puntuales y las fotos quedaron hermosas. Definitivamente volveremos a contratarlos.'
    },
    {
      name: 'Ana Rodríguez',
      role: 'Empresaria',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Necesitaba fotos profesionales para mi perfil corporativo y el resultado superó mis expectativas. Muy atentos a los detalles y el servicio fue excepcional.'
    },
    {
      name: 'Roberto Silva',
      role: 'Organizador de Eventos',
      image: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'He trabajado con muchos fotógrafos y Castro Fotografía es sin duda uno de los mejores. Siempre entregan trabajos de calidad y a tiempo.'
    },
    {
      name: 'Luisa Fernández',
      role: 'Cliente Familiar',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Hicimos una sesión familiar y fue una experiencia maravillosa. Muy pacientes con los niños y lograron capturar momentos muy naturales y hermosos.'
    },
    {
      name: 'Pedro Jiménez',
      role: 'Novio',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Tanto la fotografía como el video de nuestra boda fueron espectaculares. El equipo fue muy discreto durante la ceremonia y captó todos los momentos importantes.'
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Lee lo que dicen sobre su experiencia con nosotros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <Quote className="h-8 w-8 text-amber-500" />
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-center mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para crear recuerdos inolvidables?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Únete a la familia de clientes satisfechos de Castro Fotografía.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg">
            Contáctanos Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;