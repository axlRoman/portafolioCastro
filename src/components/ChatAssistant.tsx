import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Calendar, Camera } from 'lucide-react';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '¡Hola! Soy el asistente virtual de Castro Fotografía. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickResponses = [
    { text: 'Ver precios', icon: '💰' },
    { text: 'Agendar cita', icon: '📅' },
    { text: 'Servicios disponibles', icon: '📸' },
    { text: 'Contacto', icon: '📞' }
  ];

  const handleSendMessage = async (messageText = null) => {
    const text = messageText || inputMessage.trim();
    if (!text) return;

    const newMessage = {
      id: messages.length + 1,
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate API call to n8n endpoint
    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('precio') || message.includes('costo') || message.includes('💰')) {
      return 'Nuestros precios varían según el servicio:\n\n📸 Fotos de identificación: Desde $20\n👤 Retratos profesionales: Desde $150\n🎉 Eventos sociales: Desde $300\n🎂 Quinceañeras: Desde $600\n💒 Bodas: Desde $800\n\n¿Te interesa algún servicio en particular?';
    }
    
    if (message.includes('agendar') || message.includes('cita') || message.includes('📅')) {
      return 'Perfecto! Puedo ayudarte a agendar una cita. Tenemos disponibilidad para:\n\n🆔 Fotos de identificación (sin cita previa)\n📷 Sesiones de retratos\n🎊 Eventos especiales\n\nNuestros horarios son:\n• Lunes a Viernes: 10:00 AM - 7:00 PM\n• Sábados: Solo con cita previa\n• Domingos: Eventos programados\n\n¿Qué tipo de servicio necesitas? También puedes llamarnos al 871 192 3161';
    }
    
    if (message.includes('servicio') || message.includes('📸')) {
      return 'Ofrecemos estos servicios:\n\n💒 Bodas completas\n🎂 Quinceañeras\n🎉 Eventos sociales\n👤 Retratos profesionales\n🆔 Fotografía de identificación\n🎥 Video profesional\n\n¿Sobre cuál te gustaría saber más?';
    }
    
    if (message.includes('contacto') || message.includes('📞') || message.includes('ubicacion') || message.includes('direccion')) {
      return 'Puedes contactarnos por:\n\n📞 Teléfono: 871 192 3161\n📧 Email: fyvcastro_adriana@hotmail.com\n📍 Dirección: C. Punta de Canoas 1193, entre Tijuana y Calle 60, San Felipe, Torreón, Coah.\n🕒 Horarios: \n• Lun-Vie: 10:00 AM - 7:00 PM\n• Sáb: Solo con cita previa\n• Dom: Eventos programados\n\n¡También puedes visitarnos en nuestro estudio!';
    }
    
    if (message.includes('hola') || message.includes('buenos días') || message.includes('buenas tardes')) {
      return '¡Hola! Bienvenido a Castro Fotografía y Video, ubicados en Torreón, Coahuila. Estamos aquí para capturar tus momentos más especiales. ¿En qué puedo ayudarte hoy?';
    }
    
    if (message.includes('horario') || message.includes('hora')) {
      return 'Nuestros horarios de atención son:\n\n🕙 Lunes a Viernes: 10:00 AM - 7:00 PM\n🕙 Sábados: Solo con cita previa\n🕙 Domingos: Eventos programados\n\nPara fotos de identificación no necesitas cita previa durante nuestros horarios regulares. Para otros servicios, te recomendamos agendar con anticipación llamando al 871 192 3161.';
    }
    
    return 'Gracias por tu consulta. Nuestro equipo en Torreón, Coahuila se especializa en capturar momentos únicos. ¿Te gustaría conocer más sobre nuestros servicios o agendar una cita? También puedes llamarnos al 871 192 3161 para atención personalizada.';
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-amber-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <Bot className="h-5 w-5 mr-2" />
              <div>
                <h3 className="font-semibold">Asistente Castro</h3>
                <p className="text-xs opacity-90">En línea</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' ? 'bg-amber-100' : 'bg-gray-100'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4 text-amber-600" />
                    ) : (
                      <Bot className="h-4 w-4 text-gray-600" />
                    )}
                  </div>
                  <div className={`px-3 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 px-3 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Responses */}
          <div className="px-4 py-2 border-t bg-gray-50">
            <div className="flex flex-wrap gap-2">
              {quickResponses.map((response, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(response.text)}
                  className="text-xs bg-white hover:bg-amber-50 text-gray-700 px-3 py-1 rounded-full border transition-colors"
                >
                  {response.icon} {response.text}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim()}
                className="bg-amber-600 hover:bg-amber-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;