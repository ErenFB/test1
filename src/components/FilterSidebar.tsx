import { Star } from 'lucide-react';

interface FilterSidebarProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
  selectedRating: number;
  onRatingChange: (rating: number) => void;
  selectedCity: string;
  onCityChange: (city: string) => void;
  cities: string[];
}

export default function FilterSidebar({
  minPrice,
  maxPrice,
  onPriceChange,
  selectedRating,
  onRatingChange,
  selectedCity,
  onCityChange,
  cities,
}: FilterSidebarProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
      <h3 className="text-lg font-bold text-gray-800 mb-6">Filtrele</h3>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Fiyat Aralığı</h4>
        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-600 mb-1 block">Min: ₺{minPrice}</label>
            <input
              type="range"
              min="0"
              max="10000"
              step="500"
              value={minPrice}
              onChange={(e) => onPriceChange(Number(e.target.value), maxPrice)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
          <div>
            <label className="text-xs text-gray-600 mb-1 block">Max: ₺{maxPrice}</label>
            <input
              type="range"
              min="0"
              max="10000"
              step="500"
              value={maxPrice}
              onChange={(e) => onPriceChange(minPrice, Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        </div>
      </div>

      <div className="mb-6 border-t pt-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Değerlendirme Puanı</h4>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => onRatingChange(rating)}
              className={`w-full flex items-center gap-2 p-2 rounded-lg transition-colors ${
                selectedRating === rating
                  ? 'bg-blue-50 border-2 border-blue-500'
                  : 'hover:bg-gray-50 border-2 border-transparent'
              }`}
            >
              <div className="flex items-center gap-1">
                {[...Array(rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-700">ve üzeri</span>
            </button>
          ))}
          <button
            onClick={() => onRatingChange(0)}
            className={`w-full text-left p-2 rounded-lg transition-colors text-sm ${
              selectedRating === 0
                ? 'bg-blue-50 border-2 border-blue-500 text-blue-700 font-medium'
                : 'hover:bg-gray-50 border-2 border-transparent text-gray-700'
            }`}
          >
            Tümü
          </button>
        </div>
      </div>

      <div className="border-t pt-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Şehir</h4>
        <select
          value={selectedCity}
          onChange={(e) => onCityChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
        >
          <option value="">Tüm Şehirler</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
