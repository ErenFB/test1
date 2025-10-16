import { Truck, Shield, Clock, ThumbsUp } from 'lucide-react';
import SearchForm from '../components/SearchForm';

interface HomePageProps {
  onSearch: (origin: string, destination: string) => void;
}

export default function HomePage({ onSearch }: HomePageProps) {
  return (
    <div>
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hayalinizdeki Taşınma<br />
              Sadece Bir Tık Uzağınızda
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Güvenilir nakliyat firmalarını karşılaştırın, en iyi teklifi alın
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <SearchForm onSearch={onSearch} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Geniş Firma Ağı</h3>
            <p className="text-sm text-gray-600">
              Yüzlerce güvenilir nakliyat firması arasından seçim yapın
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Güvenli İşlem</h3>
            <p className="text-sm text-gray-600">
              SSL sertifikalı güvenli ödeme ve veri koruma sistemi
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Hızlı Süreç</h3>
            <p className="text-sm text-gray-600">
              Dakikalar içinde tekliflerinizi karşılaştırın ve seçim yapın
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Müşteri Memnuniyeti</h3>
            <p className="text-sm text-gray-600">
              Gerçek müşteri yorumları ile bilinçli karar verin
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nasıl Çalışır?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Arama Yap', desc: 'Çıkış ve varış adresinizi girin' },
              { step: '2', title: 'Filtrele', desc: 'Fiyat, puan ve şehre göre filtreleyin' },
              { step: '3', title: 'Karşılaştır', desc: 'Firmaları ve teklifleri inceleyin' },
              { step: '4', title: 'Seç', desc: 'En uygun firmayı seçin ve anlaşma yapın' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
