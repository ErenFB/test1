import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import ContactPage from './pages/ContactPage';
import LiveChat from './components/LiveChat';

type PageType = 'home' | 'search' | 'services' | 'how-it-works' | 'companies' | 'contact' | 'login' | 'register';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [searchParams, setSearchParams] = useState<{ origin: string; destination: string }>({
    origin: '',
    destination: '',
  });

  const handleSearch = (origin: string, destination: string) => {
    setSearchParams({ origin, destination });
    setCurrentPage('search');
  };

  const handleNavigate = (page: string) => {
    if (page === 'home' || page === 'services' || page === 'how-it-works' ||
        page === 'companies' || page === 'contact' || page === 'login' || page === 'register') {
      setCurrentPage(page as PageType);
      if (page === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const renderPlaceholderPage = (title: string, description: string) => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-lg text-gray-600 mb-8">{description}</p>
          <button
            onClick={() => handleNavigate('home')}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onSearch={handleSearch} />;
      case 'search':
        return (
          <SearchResultsPage
            origin={searchParams.origin}
            destination={searchParams.destination}
            onBack={() => handleNavigate('home')}
            onSearch={handleSearch}
          />
        );
      case 'services':
        return renderPlaceholderPage(
          'Hizmetlerimiz',
          'Ev taşıma, ofis taşıma, şehirler arası nakliyat ve daha fazlası...'
        );
      case 'how-it-works':
        return renderPlaceholderPage(
          'Nasıl Çalışır?',
          'Basit 4 adımda taşınma sürecinizi tamamlayın'
        );
      case 'companies':
        return renderPlaceholderPage(
          'Firmalar',
          'Güvenilir nakliyat firmalarımızı inceleyin'
        );
      case 'contact':
        return <ContactPage />;
      case 'login':
        return renderPlaceholderPage(
          'Oturum Aç',
          'Hesabınıza giriş yapın'
        );
      case 'register':
        return renderPlaceholderPage(
          'Kaydol',
          'Yeni hesap oluşturun ve avantajlardan yararlanın'
        );
      default:
        return <HomePage onSearch={handleSearch} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="flex-1">
        {renderContent()}
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
}

export default App;
