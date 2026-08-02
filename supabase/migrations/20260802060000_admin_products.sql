-- Admin-managed products table
-- These are products created from the admin portal that merge into the shop page
-- alongside the 754 static products in shop-catalog.ts

CREATE TABLE IF NOT EXISTS public.admin_products (
  id             TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
  name           TEXT NOT NULL,
  slug           TEXT NOT NULL UNIQUE,
  description    TEXT,

  -- Taxonomy
  department     TEXT NOT NULL,  -- 'Women', 'Unisex', 'Accessories', 'Beauty', 'Bags'
  category       TEXT NOT NULL,
  subcategory    TEXT,

  -- Pricing
  price          DOUBLE PRECISION NOT NULL DEFAULT 0,
  original_price DOUBLE PRECISION,
  on_sale        BOOLEAN NOT NULL DEFAULT false,
  discount_pct   INTEGER,

  -- Attributes
  sku            TEXT UNIQUE,
  sizes          TEXT,            -- raw size range string e.g. "S-2XL"
  size_list      JSONB,          -- array of individual size strings
  colors         JSONB,          -- array of {name, hex} objects
  color_count    INTEGER,
  fabric         TEXT,
  material       TEXT,
  dimensions     TEXT,
  beauty_size    TEXT,

  -- Images
  images         JSONB,          -- array of image URL strings

  -- Organization
  badges         JSONB,          -- array of badge strings
  tags           JSONB,          -- array of tag strings
  is_published   BOOLEAN NOT NULL DEFAULT false,
  sort_order     INTEGER NOT NULL DEFAULT 0,

  -- Timestamps
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_admin_products_department ON public.admin_products(department);
CREATE INDEX IF NOT EXISTS idx_admin_products_category ON public.admin_products(category);
CREATE INDEX IF NOT EXISTS idx_admin_products_published ON public.admin_products(is_published);
CREATE INDEX IF NOT EXISTS idx_admin_products_slug ON public.admin_products(slug);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_admin_products_updated_at ON public.admin_products;
CREATE TRIGGER trg_admin_products_updated_at
  BEFORE UPDATE ON public.admin_products
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- RLS (optional — enable if you want row-level security)
-- ALTER TABLE public.admin_products ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Admins can do everything" ON public.admin_products FOR ALL USING (true);
