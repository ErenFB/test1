import { Shield, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Güvenli Ödeme</h3>
                <p className="text-xs text-gray-400">SSL Sertifikalı</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 text-center md:text-left">
              Tüm ödemeleriniz 256-bit SSL şifrelemesi ile korunmaktadır. Kişisel bilgileriniz güvendedir.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-400" />
              Müşteri Desteği
            </h3>
            <div className="space-y-3 text-center">
              <div>
                <p className="text-sm text-gray-400">Telefon</p>
                <a href="tel:+908501234567" className="text-white hover:text-blue-400 transition-colors font-medium">
                  0850 123 45 67
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400 flex items-center justify-center gap-1">
                  <Mail className="w-4 h-4" /> E-posta
                </p>
                <a href="mailto:destek@tasinmakolay.com" className="text-white hover:text-blue-400 transition-colors">
                  destek@tasinmakolay.com
                </a>
              </div>
              <p className="text-xs text-gray-500">Hafta içi 09:00 - 18:00</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-bold text-lg mb-4">Bizi Takip Edin</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-sky-500 p-3 rounded-full hover:bg-sky-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-blue-800 p-3 rounded-full hover:bg-blue-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4 text-center md:text-right">
              Kampanyalar ve haberlerden haberdar olun
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 TaşınmaKolay. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
