import { Truck } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'services', label: 'Hizmetlerimiz' },
    { id: 'how-it-works', label: 'Nasıl Çalışır' },
    { id: 'companies', label: 'Firmalar' },
    { id: 'contact', label: 'İletişim' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">TaşınmaKolay</h1>
              <p className="text-xs text-gray-600">Güvenli Taşımacılık</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('login')}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Oturum Aç
            </button>
            <button
              onClick={() => onNavigate('register')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all shadow-md"
            >
              Kaydol
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
