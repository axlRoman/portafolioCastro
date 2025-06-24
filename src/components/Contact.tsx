import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Send, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    date: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend/n8n endpoint
    console.log('Form submitted:', formData);
    alert('¡Gracias! Nos pondremos en contacto contigo pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      date: ''
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contacto
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Listo para capturar tus momentos especiales? Contáctanos y 
            permítenos ser parte de tu historia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-amber-400">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dirección</h4>
                    <p className="text-gray-300">C. Punta de Canoas 1193</p>
                    <p className="text-gray-300">Entre Tijuana y Calle 60</p>
                    <p className="text-gray-300">San Felipe, 27085 Torreón, Coah.</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <p className="text-gray-300">871 192 3161</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-300">fyvcastro_adriana@hotmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Horarios</h4>
                    <p className="text-gray-300">Lunes - Viernes: 10:00 AM - 7:00 PM</p>
                    <p className="text-gray-300">Sábados: Solo con cita previa</p>
                    <p className="text-gray-300">Domingos: Eventos programados</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-amber-400">
                Síguenos
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/s.cas.adriana/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>

            {/* Map Link */}
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <MapPin className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Visita Nuestro Estudio</h4>
              <p className="text-gray-300 text-sm mb-4">
                Ubicados en San Felipe, Torreón, Coahuila. Ven a conocer nuestras instalaciones.
              </p>
              <a
                href="https://maps.app.goo.gl/6D2T7Rbn6oPFSiyUA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors inline-block"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-amber-400">
              Solicita tu Cotización
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Servicio de Interés *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="boda">Boda</option>
                    <option value="quinceanera">Quinceañera</option>
                    <option value="evento">Evento Social</option>
                    <option value="retrato">Retrato Profesional</option>
                    <option value="identificacion">Fotografía de Identificación</option>
                    <option value="video">Video Profesional</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-2">
                  Fecha Preferida del Evento
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white resize-none"
                  placeholder="Cuéntanos más detalles sobre tu evento o necesidades..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Solicitud
              </button>
            </form>

            <div className="mt-6 p-4 bg-amber-600/10 border border-amber-600/20 rounded-lg">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-amber-400 mr-2" />
                <span className="text-sm text-amber-300">
                  ¿Necesitas una cita urgente? Llámanos al 871 192 3161
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;