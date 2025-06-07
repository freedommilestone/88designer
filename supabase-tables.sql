-- First, create the clients table (required for foreign key references)
CREATE TABLE IF NOT EXISTS clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  company TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'pending')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create website templates table (required for foreign key references)
CREATE TABLE IF NOT EXISTS website_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  preview_image_url TEXT,
  features JSONB,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create websites table with foreign key references
CREATE TABLE IF NOT EXISTS websites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  domain TEXT,
  subdomain TEXT UNIQUE,
  template_id UUID REFERENCES website_templates(id),
  color_scheme JSONB,
  features JSONB,
  design_preferences JSONB,
  content_status TEXT DEFAULT 'pending' CHECK (content_status IN ('pending', 'collecting', 'complete')),
  development_status TEXT DEFAULT 'queued' CHECK (development_status IN ('queued', 'in_progress', 'review', 'published', 'maintenance')),
  published_url TEXT,
  staging_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE websites ENABLE ROW LEVEL SECURITY;

-- Create policies for clients
CREATE POLICY "Allow authenticated reads on clients" ON clients
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated inserts on clients" ON clients
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated updates on clients" ON clients
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Create policies for website_templates
CREATE POLICY "Allow authenticated reads on website_templates" ON website_templates
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated inserts on website_templates" ON website_templates
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated updates on website_templates" ON website_templates
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Create policies for websites
CREATE POLICY "Allow authenticated reads on websites" ON websites
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated inserts on websites" ON websites
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated updates on websites" ON websites
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Insert sample data (optional - you can remove this if you don't need sample data)
INSERT INTO website_templates (name, category, description, features)
VALUES 
  ('Modern Business', 'Business', 'A sleek, modern template for professional businesses', '{"responsive": true, "blog": true, "contact_form": true}'::jsonb),
  ('Restaurant Deluxe', 'Restaurant', 'Perfect for restaurants and cafes', '{"menu": true, "reservation": true, "gallery": true}'::jsonb),
  ('Service Pro', 'Service', 'Ideal for service-based businesses', '{"testimonials": true, "service_list": true, "booking": true}'::jsonb)
ON CONFLICT (id) DO NOTHING;

-- Insert a sample client
INSERT INTO clients (name, email, phone, company)
VALUES ('John Doe', 'john@example.com', '(555) 123-4567', 'Example Business')
ON CONFLICT (email) DO NOTHING; 