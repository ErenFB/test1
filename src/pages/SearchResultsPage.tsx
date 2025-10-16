import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { supabase, Company } from '../lib/supabase';
import CompanyCard from '../components/CompanyCard';
import FilterSidebar from '../components/FilterSidebar';
import SearchForm from '../components/SearchForm';

interface SearchResultsPageProps {
  origin: string;
  destination: string;
  onBack: () => void;
  onSearch: (origin: string, destination: string) => void;
}

export default function SearchResultsPage({
  origin,
  destination,
  onBack,
  onSearch,
}: SearchResultsPageProps) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  useEffect(() => {
    filterCompanies();
  }, [companies, minPrice, maxPrice, selectedRating, selectedCity]);

  const fetchCompanies = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('companies')
      .select('*')
      .order('average_rating', { ascending: false });

    if (error) {
      console.error('Error fetching companies:', error);
    } else {
      setCompanies(data || []);
      const uniqueCities = [...new Set(data?.map((c) => c.city) || [])];
      setCities(uniqueCities);
    }
    setLoading(false);
  };

  const filterCompanies = () => {
    let filtered = [...companies];

    filtered = filtered.filter(
      (c) => c.min_price >= minPrice && c.max_price <= maxPrice
    );

    if (selectedRating > 0) {
      filtered = filtered.filter((c) => c.average_rating >= selectedRating);
    }

    if (selectedCity) {
      filtered = filtered.filter((c) => c.city === selectedCity);
    }

    setFilteredCompanies(filtered);
  };

  const handleSelect = (company: Company) => {
    alert(`${company.name} firmasını seçtiniz! Teklif alma sayfasına yönlendiriliyorsunuz...`);
  };

  const handleDetails = (company: Company) => {
    alert(`${company.name} detay sayfası açılacak...`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8">
        <div className="container mx-auto px-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Ana Sayfaya Dön
          </button>
          <h2 className="text-2xl font-bold mb-4">Arama Sonuçları</h2>
          <p className="text-blue-100 mb-4">
            {origin} → {destination}
          </p>
          <div className="max-w-2xl">
            <SearchForm
              onSearch={onSearch}
              initialOrigin={origin}
              initialDestination={destination}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <FilterSidebar
              minPrice={minPrice}
              maxPrice={maxPrice}
              onPriceChange={setMinPrice}
              selectedRating={selectedRating}
              onRatingChange={setSelectedRating}
              selectedCity={selectedCity}
              onCityChange={setSelectedCity}
              cities={cities}
            />
          </aside>

          <main className="flex-1">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800">
                {filteredCompanies.length} Firma Bulundu
              </h3>
              <p className="text-sm text-gray-600">
                En uygun nakliyat firmasını seçin
              </p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-gray-600 mt-4">Firmalar yükleniyor...</p>
              </div>
            ) : filteredCompanies.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <p className="text-gray-600 text-lg">
                  Arama kriterlerinize uygun firma bulunamadı.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Lütfen filtreleri değiştirerek tekrar deneyin.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {filteredCompanies.map((company) => (
                  <CompanyCard
                    key={company.id}
                    company={company}
                    onSelect={handleSelect}
                    onDetails={handleDetails}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
