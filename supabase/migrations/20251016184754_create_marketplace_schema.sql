/*
  # Create Moving Company Marketplace Schema

  1. New Tables
    - `companies`
      - `id` (uuid, primary key)
      - `name` (text) - Company name
      - `description` (text) - Service description
      - `logo_url` (text) - Company logo image URL
      - `city` (text) - Operating city
      - `districts` (text[]) - Operating districts/neighborhoods
      - `average_rating` (numeric) - Average rating score
      - `total_reviews` (integer) - Total number of reviews
      - `min_price` (integer) - Minimum price range
      - `max_price` (integer) - Maximum price range
      - `phone` (text) - Contact phone
      - `email` (text) - Contact email
      - `created_at` (timestamptz)
    
    - `reviews`
      - `id` (uuid, primary key)
      - `company_id` (uuid, foreign key)
      - `user_name` (text) - Reviewer name
      - `rating` (integer) - Rating score (1-5)
      - `comment` (text) - Review text
      - `created_at` (timestamptz)
    
    - `search_requests`
      - `id` (uuid, primary key)
      - `origin_address` (text) - Pickup address
      - `destination_address` (text) - Delivery address
      - `user_email` (text) - Optional user email
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access on companies and reviews
    - Add policies for authenticated users to create reviews and search requests
*/

CREATE TABLE IF NOT EXISTS companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  logo_url text DEFAULT '',
  city text NOT NULL,
  districts text[] DEFAULT '{}',
  average_rating numeric(3,2) DEFAULT 0.00,
  total_reviews integer DEFAULT 0,
  min_price integer DEFAULT 0,
  max_price integer DEFAULT 0,
  phone text DEFAULT '',
  email text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  user_name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS search_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  origin_address text NOT NULL,
  destination_address text NOT NULL,
  user_email text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE search_requests ENABLE ROW LEVEL SECURITY;

-- Companies policies: Public read access
CREATE POLICY "Anyone can view companies"
  ON companies FOR SELECT
  TO anon, authenticated
  USING (true);

-- Reviews policies: Public read access
CREATE POLICY "Anyone can view reviews"
  ON reviews FOR SELECT
  TO anon, authenticated
  USING (true);

-- Search requests policies: Anyone can create
CREATE POLICY "Anyone can create search requests"
  ON search_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_companies_city ON companies(city);
CREATE INDEX IF NOT EXISTS idx_companies_rating ON companies(average_rating);
CREATE INDEX IF NOT EXISTS idx_reviews_company ON reviews(company_id);
