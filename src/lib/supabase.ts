import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Company {
  id: string;
  name: string;
  description: string;
  logo_url: string;
  city: string;
  districts: string[];
  average_rating: number;
  total_reviews: number;
  min_price: number;
  max_price: number;
  phone: string;
  email: string;
  created_at: string;
}

export interface Review {
  id: string;
  company_id: string;
  user_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

export interface SearchRequest {
  origin_address: string;
  destination_address: string;
  user_email?: string;
}
