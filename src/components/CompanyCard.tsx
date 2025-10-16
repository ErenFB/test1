import { Star, Truck } from 'lucide-react';
import { Company } from '../lib/supabase';

interface CompanyCardProps {
  company: Company;
  onSelect: (company: Company) => void;
  onDetails: (company: Company) => void;
}

export default function CompanyCard({ company, onSelect, onDetails }: CompanyCardProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{company.name}</h3>
            <div className="flex items-center gap-2 mb-1">
              {renderStars(Math.round(company.average_rating))}
              <span className="text-lg font-semibold text-gray-800">
                {company.average_rating.toFixed(1)}
              </span>
              <span className="text-sm text-gray-500">
                ({company.total_reviews} değerlendirme)
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg">
            <Truck className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {company.description}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
            {company.city}
          </span>
          <span className="text-xs text-gray-500">
            Fiyat: ₺{company.min_price} - ₺{company.max_price}
          </span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => onDetails(company)}
            className="flex-1 bg-gray-100 text-gray-800 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Detaylı Gör
          </button>
          <button
            onClick={() => onSelect(company)}
            className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
          >
            Seç
          </button>
        </div>
      </div>
    </div>
  );
}
