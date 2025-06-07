# Supabase Setup for 88 Web Designs

This guide explains how to set up Supabase for the 88 Web Designs application.

## Prerequisites

- [Supabase account](https://supabase.com/) (free tier is sufficient for development)
- Node.js and npm installed

## Step 1: Create a Supabase Project

1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Create a new project
3. Give your project a name (e.g., "88webdesigns")
4. Set a secure database password
5. Choose a region closest to your target audience
6. Click "Create new project"

## Step 2: Set Up Database Tables

After your project is created, you'll need to set up the database tables.

### Users Table

```sql
create table public.users (
  id uuid references auth.users not null primary key,
  email text not null,
  created_at timestamp with time zone default now() not null
);

-- Set up Row Level Security (RLS)
alter table public.users enable row level security;

-- Create policies
create policy "Users can view their own profile" 
  on public.users for select 
  using (auth.uid() = id);

create policy "Users can update their own profile" 
  on public.users for update 
  using (auth.uid() = id);
```

### Websites Table

```sql
create table public.websites (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users not null,
  business_name text not null,
  business_type text not null,
  status text default 'draft' not null,
  created_at timestamp with time zone default now() not null
);

-- Set up Row Level Security (RLS)
alter table public.websites enable row level security;

-- Create policies
create policy "Users can view their own websites" 
  on public.websites for select 
  using (auth.uid() = user_id);

create policy "Users can insert their own websites" 
  on public.websites for insert 
  with check (auth.uid() = user_id);

create policy "Users can update their own websites" 
  on public.websites for update 
  using (auth.uid() = user_id);

create policy "Users can delete their own websites" 
  on public.websites for delete 
  using (auth.uid() = user_id);
```

## Step 3: Set Up Authentication

1. Go to the Authentication tab in your Supabase dashboard
2. Navigate to Providers
3. Ensure Email provider is enabled
4. Optionally, set up other providers like Google, GitHub, etc.

## Step 4: Get API Keys

1. Go to Project Settings > API
2. Copy the URL and anon key
3. Create a `.env.local` file in your project root with these values:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Step 5: Set Up Trigger for User Creation

To automatically create a user profile when a new user signs up:

```sql
-- Function to handle new user creation
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to call the function on user creation
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

## Testing Your Setup

1. Start your development server:
```
npm run dev
```

2. Navigate to `/auth/signup` to create a new user
3. Check the Supabase dashboard to ensure the user and profile were created correctly
4. Test creating a website from the dashboard

## Generating TypeScript Types

If you need to update your TypeScript types after changing the database schema:

1. Install Supabase CLI
2. Run `npx supabase gen types typescript --project-id your_project_id > lib/database.types.ts`
3. Update your types in the application as needed

## Troubleshooting

If you encounter issues:

1. Check the browser console for errors
2. Verify your environment variables are set correctly
3. Ensure RLS policies are set up correctly
4. Check the Supabase dashboard for any failed queries

# Supabase Setup Instructions

Follow these steps to set up your Supabase database to work with the squeeze page form:

## 1. Create the Tables

In the Supabase dashboard, go to the SQL Editor and run the following SQL to create all necessary tables:

```sql
-- Create clients table first (required for foreign key references)
CREATE TABLE clients (
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
CREATE TABLE website_templates (
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
CREATE TABLE websites (
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

-- Create website_requests table for the squeeze page form
CREATE TABLE website_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_name TEXT NOT NULL,
  owner_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  industry TEXT NOT NULL,
  years_in_business TEXT NOT NULL,
  current_website TEXT NOT NULL,
  employees TEXT NOT NULL,
  primary_goal TEXT NOT NULL,
  features TEXT[] NOT NULL,
  design_style TEXT NOT NULL,
  color_preferences TEXT,
  scheduled_call BOOLEAN DEFAULT FALSE,
  call_date_time TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE websites ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_requests ENABLE ROW LEVEL SECURITY;

-- Create policies for website_requests
CREATE POLICY "Allow anonymous inserts on website_requests" ON website_requests
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated reads on website_requests" ON website_requests
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated updates on website_requests" ON website_requests
  FOR UPDATE USING (auth.role() = 'authenticated');

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
```

## 2. Set Up Database Functions (Optional)

If you want to set up email notifications when a new website request is submitted, you can use Supabase Edge Functions:

```sql
-- Create a function that sends an email notification when a new website request is submitted
CREATE OR REPLACE FUNCTION notify_website_request()
RETURNS TRIGGER AS $$
BEGIN
  -- This is a placeholder - you'll need to set up an email service
  -- or use a third-party service like SendGrid, Mailgun, etc.
  PERFORM http_post(
    'https://your-notification-endpoint.com',
    jsonb_build_object(
      'type', 'new_website_request',
      'business_name', NEW.business_name,
      'email', NEW.email,
      'created_at', NEW.created_at
    ),
    'application/json'
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a trigger that calls the function when a new website request is inserted
CREATE TRIGGER website_request_notification
AFTER INSERT ON website_requests
FOR EACH ROW
EXECUTE FUNCTION notify_website_request();
```

## 3. Set Up an Admin Dashboard (Future Enhancement)

For a future enhancement, you may want to create an admin dashboard to view and manage website requests and client websites. This would require:

1. Creating an admin user in Supabase Authentication
2. Building an admin UI with authentication
3. Using the Supabase client to fetch and display website requests, clients, and websites
4. Adding functionality to update the status of requests and websites

## 4. Integration Notes

- The squeeze page form is already set up to submit data to the `website_requests` table
- Form submissions don't require authentication, allowing users to submit without logging in
- The data structure matches the form fields in the multi-step form
- Error handling is included to show users when there are submission issues
- The other tables (`clients`, `website_templates`, and `websites`) are secured to require authentication
- You may need to create a process to convert `website_requests` to `clients` and `websites` entries

## 5. Sample Data (Optional)

You can add some sample data to test your implementation:

```sql
-- Insert sample website templates
INSERT INTO website_templates (name, category, description, features)
VALUES 
  ('Modern Business', 'Business', 'A sleek, modern template for professional businesses', '{"responsive": true, "blog": true, "contact_form": true}'::jsonb),
  ('Restaurant Deluxe', 'Restaurant', 'Perfect for restaurants and cafes', '{"menu": true, "reservation": true, "gallery": true}'::jsonb),
  ('Service Pro', 'Service', 'Ideal for service-based businesses', '{"testimonials": true, "service_list": true, "booking": true}'::jsonb);

-- Insert a sample client
INSERT INTO clients (name, email, phone, company)
VALUES ('John Doe', 'john@example.com', '(555) 123-4567', 'Example Business');
``` 