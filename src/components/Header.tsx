import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative bg-gradient-to-br from-green-50 to-green-100 py-6">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden border-4 border-white shadow-lg">
            <img
              src="vairagya-logo.png"
              alt="Vairagya Events"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Ishan Shah
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-6">
              सभी अनुष्ठानो को अरिहंत प्रभु की आज्ञा मुजब हम करने के लिए तत्पर हैं
            </h2>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <a
                href="contacts.vcf"
                download="contacts.vcf"
                className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
              >
                Save Contact
              </a>
              <div className="flex gap-4">
                <a href="tel:+919328942203" className="w-6 h-6 text-gray-600">
                  <Phone className="w-6 h-6" />
                </a>
                <a
                  href="mailto:vairagyaevents@gmail.com"
                  className="w-6 h-6 text-gray-600"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/vairagyaevents/"
                  className="w-6 h-6 text-gray-600"
                >
                  <Instagram className="w-6 h-6" />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
