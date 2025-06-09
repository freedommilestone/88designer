# Supabase Schema for Template Management

This document outlines the database schema for managing template data that can be easily updated through Supabase.

## Tables

### 1. `templates` table
```sql
CREATE TABLE templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  price VARCHAR(50) DEFAULT 'Free',
  description TEXT,
  developer VARCHAR(255) DEFAULT 'LocalSite Themes',
  rating DECIMAL(2,1) DEFAULT 4.8,
  review_count INTEGER DEFAULT 0,
  positive_percentage INTEGER DEFAULT 95,
  last_updated DATE DEFAULT CURRENT_DATE,
  version VARCHAR(50) DEFAULT '1.0.0',
  demo_url VARCHAR(500),
  category VARCHAR(100),
  is_featured BOOLEAN DEFAULT false,
  is_new BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 2. `template_styles` table
```sql
CREATE TABLE template_styles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id UUID REFERENCES templates(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  desktop_image VARCHAR(500),
  mobile_image VARCHAR(500),
  color VARCHAR(7), -- hex color code
  is_default BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 3. `template_highlights` table
```sql
CREATE TABLE template_highlights (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id UUID REFERENCES templates(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(500),
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 4. `template_features` table
```sql
CREATE TABLE template_features (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id UUID REFERENCES templates(id) ON DELETE CASCADE,
  category VARCHAR(255) NOT NULL,
  feature_list TEXT[], -- Array of features
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 5. `template_reviews` table
```sql
CREATE TABLE template_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id UUID REFERENCES templates(id) ON DELETE CASCADE,
  author VARCHAR(255) NOT NULL,
  store_name VARCHAR(255),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  content TEXT NOT NULL,
  review_date DATE DEFAULT CURRENT_DATE,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 6. `template_release_notes` table
```sql
CREATE TABLE template_release_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id UUID REFERENCES templates(id) ON DELETE CASCADE,
  version VARCHAR(50) NOT NULL,
  release_date DATE NOT NULL,
  changes TEXT[], -- Array of changes
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Sample Data

### Insert sample template
```sql
INSERT INTO templates (name, slug, description, category) 
VALUES (
  'Maya', 
  'maya', 
  'Exceptional design and powerful features to elevate your brand',
  'Fashion'
);
```

### Insert template styles
```sql
INSERT INTO template_styles (template_id, name, desktop_image, mobile_image, color, is_default)
VALUES 
  ((SELECT id FROM templates WHERE slug = 'maya'), 'Modern', '/templates/maya/modern-desktop.jpg', '/templates/maya/modern-mobile.jpg', '#000000', true),
  ((SELECT id FROM templates WHERE slug = 'maya'), 'Elegant', '/templates/maya/elegant-desktop.jpg', '/templates/maya/elegant-mobile.jpg', '#2563EB', false),
  ((SELECT id FROM templates WHERE slug = 'maya'), 'Minimal', '/templates/maya/minimal-desktop.jpg', '/templates/maya/minimal-mobile.jpg', '#059669', false);
```

## API Functions

You can create these functions to easily fetch template data:

### Get all templates
```sql
CREATE OR REPLACE FUNCTION get_templates()
RETURNS TABLE (
  id UUID,
  name VARCHAR,
  slug VARCHAR,
  price VARCHAR,
  category VARCHAR,
  default_style_image VARCHAR
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    t.id,
    t.name,
    t.slug,
    t.price,
    t.category,
    ts.desktop_image
  FROM templates t
  LEFT JOIN template_styles ts ON t.id = ts.template_id AND ts.is_default = true
  ORDER BY t.created_at DESC;
END;
$$ LANGUAGE plpgsql;
```

### Get template detail
```sql
CREATE OR REPLACE FUNCTION get_template_detail(template_slug VARCHAR)
RETURNS JSON AS $$
DECLARE
  result JSON;
BEGIN
  SELECT json_build_object(
    'template', row_to_json(t),
    'styles', (
      SELECT json_agg(row_to_json(ts))
      FROM template_styles ts
      WHERE ts.template_id = t.id
    ),
    'highlights', (
      SELECT json_agg(row_to_json(th))
      FROM template_highlights th
      WHERE th.template_id = t.id
      ORDER BY th.sort_order
    ),
    'features', (
      SELECT json_agg(row_to_json(tf))
      FROM template_features tf
      WHERE tf.template_id = t.id
      ORDER BY tf.sort_order
    ),
    'reviews', (
      SELECT json_agg(row_to_json(tr))
      FROM template_reviews tr
      WHERE tr.template_id = t.id
      ORDER BY tr.created_at DESC
      LIMIT 10
    ),
    'release_notes', (
      SELECT json_agg(row_to_json(trn))
      FROM template_release_notes trn
      WHERE trn.template_id = t.id
      ORDER BY trn.release_date DESC
    )
  )
  INTO result
  FROM templates t
  WHERE t.slug = template_slug;
  
  RETURN result;
END;
$$ LANGUAGE plpgsql;
```

## Usage in Next.js

To use this in your Next.js app with Supabase:

```typescript
// lib/supabase.ts
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const supabase = createClientComponentClient()

// Get all templates
export async function getTemplates() {
  const { data, error } = await supabase.rpc('get_templates')
  if (error) throw error
  return data
}

// Get template detail
export async function getTemplateDetail(slug: string) {
  const { data, error } = await supabase.rpc('get_template_detail', { template_slug: slug })
  if (error) throw error
  return data
}
```

This structure allows you to easily manage all template content through Supabase's admin interface or build a custom admin panel for content management. 