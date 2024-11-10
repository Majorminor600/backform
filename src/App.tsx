import React from 'react';
import Form from './components/Form';
import { MapPin, Phone, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div 
        className="h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=2048")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h1 className="text-5xl font-bold mb-4">Добро пожаловать</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Откройте для себя красоту и величие России через наш уникальный опыт
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Свяжитесь с нами</h2>
            <Form />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Контактная информация</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Адрес</h3>
                    <p className="text-gray-600">ул. Тверская, 1<br />Москва, 125009</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">info@example.ru</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Часы работы</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Понедельник - Пятница:</span>
                  <span>9:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Суббота:</span>
                  <span>10:00 - 16:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Воскресенье:</span>
                  <span>Выходной</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}

export default App;