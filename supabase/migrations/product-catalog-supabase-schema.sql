-- ============================================================================
-- PRODUCT CATALOG SUPABASE SCHEMA
-- Based on D:\product-catalog-schema.md
-- ============================================================================

-- ============================================================================
-- 1. CATEGORY HIERARCHY
-- ============================================================================

create table product_categories (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid references product_categories(id) on delete set null,
  name text not null,
  slug text unique not null,
  description text,
  icon text,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_product_categories_parent_id on product_categories(parent_id);
create index idx_product_categories_slug on product_categories(slug);
create index idx_product_categories_sort_order on product_categories(sort_order);

-- ============================================================================
-- 2. SIZE GUIDES
-- ============================================================================

create table size_guides (
  id uuid primary key default gen_random_uuid(),
  guide_id text unique not null, -- e.g., 'women_std', 'women_numeric', 'women_ext', 'std'
  name text not null,
  description text,
  size_range text, -- e.g., 'S – XL', '4 – 12', '2XS – XL', 'XS/S – 3XL–8XL'
  used_by text, -- e.g., 'Most tees, hoodies, sweatshirts'
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table size_guide_entries (
  id uuid primary key default gen_random_uuid(),
  size_guide_id uuid references size_guides(id) on delete cascade,
  size_label text not null, -- e.g., 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'
  numeric_size text, -- e.g., '4', '6', '8', '10', '12'
  chest_inches numeric,
  waist_inches numeric,
  hips_inches numeric,
  length_inches numeric,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_size_guide_entries_guide_id on size_guide_entries(size_guide_id);
create index idx_size_guide_entries_sort_order on size_guide_entries(sort_order);

-- ============================================================================
-- 3. PRODUCTS
-- ============================================================================

create table products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references product_categories(id) on delete set null,
  sku text unique not null,
  name text not null,
  slug text unique not null,
  description text,
  short_description text,
  base_price_cents integer not null, -- Base price in cents
  compare_at_price_cents integer, -- Original price for discounts
  cost_cents integer, -- Cost price for margin calculation
  fabric_gsm numeric, -- Fabric weight in GSM
  fabric_oz text, -- Fabric weight in oz (e.g., '3.8 oz')
  material text, -- e.g., 'Cotton', 'Tencel', 'Denim', 'Fleece', 'Modal'
  fulfillment_lead_time text, -- e.g., 'In stock', '2 days or less', '4 days or less'
  fulfillment_tier text, -- e.g., 'standard', 'premium', 'custom'
  is_active boolean not null default true,
  is_featured boolean not null default false,
  is_digital boolean not null default false,
  requires_shipping boolean not null default true,
  track_inventory boolean not null default true,
  low_stock_threshold integer default 10,
  seo_title text,
  seo_description text,
  seo_keywords text[],
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_products_category_id on products(category_id);
create index idx_products_sku on products(sku);
create index idx_products_slug on products(slug);
create index idx_products_is_active on products(is_active);
create index idx_products_is_featured on products(is_featured);
create index idx_products_fulfillment_tier on products(fulfillment_tier);

-- ============================================================================
-- 4. PRODUCT VARIANTS (SIZES, COLORS)
-- ============================================================================

create table product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete cascade,
  sku text unique not null,
  size_label text, -- e.g., 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'
  numeric_size text, -- e.g., '4', '6', '8', '10', '12'
  color_name text, -- e.g., 'Black', 'White', 'Heather Grey'
  color_hex text, -- e.g., '#000000', '#FFFFFF'
  color_code text, -- Internal color code
  price_cents integer not null, -- Variant-specific price override
  compare_at_price_cents integer,
  cost_cents integer,
  weight_grams numeric,
  inventory_quantity integer not null default 0,
  inventory_policy text not null default 'deny', -- 'deny' or 'continue'
  low_stock_threshold integer default 5,
  is_active boolean not null default true,
  image_url text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_product_variants_product_id on product_variants(product_id);
create index idx_product_variants_sku on product_variants(sku);
create index idx_product_variants_size_label on product_variants(size_label);
create index idx_product_variants_color_name on product_variants(color_name);
create index idx_product_variants_is_active on product_variants(is_active);
create index idx_product_variants_sort_order on product_variants(sort_order);

-- ============================================================================
-- 5. PRODUCT IMAGES
-- ============================================================================

create table product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete cascade,
  variant_id uuid references product_variants(id) on delete set null,
  image_url text not null,
  alt_text text,
  position integer not null default 0,
  is_primary boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_product_images_product_id on product_images(product_id);
create index idx_product_images_variant_id on product_images(variant_id);
create index idx_product_images_position on product_images(position);
create index idx_product_images_is_primary on product_images(is_primary);

-- ============================================================================
-- 6. PRODUCT ATTRIBUTES (FILTERS/FACETS)
-- ============================================================================

create table product_attributes (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete cascade,
  attribute_type text not null, -- e.g., 'color', 'fit', 'size', 'material', 'process', 'design_type', 'product_feature'
  attribute_value text not null, -- e.g., 'Black', 'Slim', 'Cotton', 'DTG', 'Eco-friendly'
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_product_attributes_product_id on product_attributes(product_id);
create index idx_product_attributes_type on product_attributes(attribute_type);
create index idx_product_attributes_value on product_attributes(attribute_value);

-- ============================================================================
-- 7. PRODUCT BADGES
-- ============================================================================

create table product_badges (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete cascade,
  badge_type text not null, -- e.g., 'NEW', 'BESTSELLER', 'TRENDING', 'SALE', 'PREMIUM', 'COMING_SOON'
  badge_text text, -- Display text
  badge_color text, -- CSS color
  badge_background text, -- CSS background color
  is_active boolean not null default true,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_product_badges_product_id on product_badges(product_id);
create index idx_product_badges_type on product_badges(badge_type);
create index idx_product_badges_is_active on product_badges(is_active);
create index idx_product_badges_expires_at on product_badges(expires_at);

-- ============================================================================
-- 8. PRODUCT COLLECTIONS
-- ============================================================================

create table product_collections (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  image_url text,
  is_active boolean not null default true,
  is_featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table product_collection_items (
  id uuid primary key default gen_random_uuid(),
  collection_id uuid references product_collections(id) on delete cascade,
  product_id uuid references products(id) on delete cascade,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_product_collection_items_collection_id on product_collection_items(collection_id);
create index idx_product_collection_items_product_id on product_collection_items(product_id);
create index idx_product_collection_items_sort_order on product_collection_items(sort_order);

-- ============================================================================
-- 9. PRODUCT REVIEWS
-- ============================================================================

create table product_reviews (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete cascade,
  user_id uuid, -- Reference to auth.users if using Supabase auth
  user_name text,
  user_email text,
  rating integer not null check (rating >= 1 and rating <= 5),
  title text,
  content text,
  is_verified_purchase boolean not null default false,
  is_approved boolean not null default false,
  helpful_count integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_product_reviews_product_id on product_reviews(product_id);
create index idx_product_reviews_user_id on product_reviews(user_id);
create index idx_product_reviews_rating on product_reviews(rating);
create index idx_product_reviews_is_approved on product_reviews(is_approved);
create index idx_product_reviews_created_at on product_reviews(created_at);

-- ============================================================================
-- 10. PRODUCT TAGS
-- ============================================================================

create table product_tags (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  slug text unique not null,
  description text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table product_tag_assignments (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete cascade,
  tag_id uuid references product_tags(id) on delete cascade,
  created_at timestamptz not null default now()
);

create index idx_product_tag_assignments_product_id on product_tag_assignments(product_id);
create index idx_product_tag_assignments_tag_id on product_tag_assignments(tag_id);
create unique index idx_product_tag_assignments_unique on product_tag_assignments(product_id, tag_id);

-- ============================================================================
-- 11. INVENTORY TRACKING
-- ============================================================================

create table inventory_transactions (
  id uuid primary key default gen_random_uuid(),
  variant_id uuid references product_variants(id) on delete cascade,
  transaction_type text not null, -- 'adjustment', 'sale', 'return', 'transfer', 'restock'
  quantity_change integer not null, -- Positive for additions, negative for removals
  quantity_before integer not null,
  quantity_after integer not null,
  reference_type text, -- 'order', 'return', 'manual', 'transfer'
  reference_id uuid,
  notes text,
  created_by uuid, -- Reference to auth.users if using Supabase auth
  created_at timestamptz not null default now()
);

create index idx_inventory_transactions_variant_id on inventory_transactions(variant_id);
create index idx_inventory_transactions_type on inventory_transactions(transaction_type);
create index idx_inventory_transactions_created_at on inventory_transactions(created_at);

-- ============================================================================
-- 12. PRICING RULES
-- ============================================================================

create table pricing_rules (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  rule_type text not null, -- 'percentage', 'fixed', 'tiered', 'bulk'
  discount_percentage numeric, -- For percentage discounts
  discount_cents integer, -- For fixed discounts
  minimum_quantity integer, -- For tiered/bulk discounts
  maximum_quantity integer,
  applies_to text not null, -- 'all', 'category', 'product', 'variant'
  category_id uuid references product_categories(id) on delete set null,
  product_id uuid references products(id) on delete set null,
  variant_id uuid references product_variants(id) on delete set null,
  is_active boolean not null default true,
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_pricing_rules_is_active on pricing_rules(is_active);
create index idx_pricing_rules_starts_at on pricing_rules(starts_at);
create index idx_pricing_rules_ends_at on pricing_rules(ends_at);

-- ============================================================================
-- 13. PRODUCT METADATA (FOR EXTENSIBLE ATTRIBUTES)
-- ============================================================================

create table product_metadata (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete cascade,
  key text not null,
  value jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_product_metadata_product_id on product_metadata(product_id);
create index idx_product_metadata_key on product_metadata(key);
create unique index idx_product_metadata_unique on product_metadata(product_id, key);

-- ============================================================================
-- 14. SEARCH INDEXING (FOR FULL-TEXT SEARCH)
-- ============================================================================

-- Enable full-text search on products
create table product_search_index (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete cascade,
  search_vector tsvector,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_product_search_index_vector on product_search_index using gin(search_vector);
create index idx_product_search_index_product_id on product_search_index(product_id);

-- Function to update search vector
create or replace function update_product_search_vector()
returns trigger as $$
begin
  insert into product_search_index (product_id, search_vector, updated_at)
  values (
    new.id,
    to_tsvector('english',
      coalesce(new.name, '') || ' ' ||
      coalesce(new.description, '') || ' ' ||
      coalesce(new.short_description, '') || ' ' ||
      coalesce(new.material, '') || ' ' ||
      coalesce(array_to_string(new.seo_keywords, ' '), '')
    ),
    now()
  )
  on conflict (product_id)
  do update set
    search_vector = excluded.search_vector,
    updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Trigger to auto-update search vector
create trigger trigger_update_product_search_vector
  after insert or update on products
  for each row
  execute function update_product_search_vector();

-- ============================================================================
-- 15. VIEWS FOR COMMON QUERIES
-- ============================================================================

-- View for products with variants and pricing
create view v_products_with_variants as
select
  p.id,
  p.category_id,
  pc.name as category_name,
  p.sku,
  p.name,
  p.slug,
  p.description,
  p.short_description,
  p.base_price_cents,
  p.compare_at_price_cents,
  p.material,
  p.fabric_gsm,
  p.fabric_oz,
  p.fulfillment_lead_time,
  p.is_active,
  p.is_featured,
  count(pv.id) as variant_count,
  min(pv.price_cents) as min_price_cents,
  max(pv.price_cents) as max_price_cents,
  sum(pv.inventory_quantity) as total_inventory,
  array_agg(distinct pv.size_label) as available_sizes,
  array_agg(distinct pv.color_name) as available_colors,
  array_agg(distinct pb.badge_type) filter (where pb.is_active = true) as badges
from products p
left join product_categories pc on p.category_id = pc.id
left join product_variants pv on p.id = pv.product_id and pv.is_active = true
left join product_badges pb on p.id = pb.product_id
where p.is_active = true
group by p.id, pc.name;

-- View for low stock alerts
create view v_low_stock_alerts as
select
  pv.id as variant_id,
  p.id as product_id,
  p.name as product_name,
  p.sku as product_sku,
  pv.sku as variant_sku,
  pv.size_label,
  pv.color_name,
  pv.inventory_quantity,
  pv.low_stock_threshold,
  p.category_id,
  pc.name as category_name
from product_variants pv
join products p on pv.product_id = p.id
left join product_categories pc on p.category_id = pc.id
where pv.is_active = true
  and p.is_active = true
  and p.track_inventory = true
  and pv.inventory_quantity <= coalesce(pv.low_stock_threshold, 5);

-- ============================================================================
-- 16. FUNCTIONS AND TRIGGERS FOR UPDATED_AT
-- ============================================================================

create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Apply updated_at triggers to all relevant tables
create trigger trigger_update_product_categories_updated_at before update on product_categories for each row execute function update_updated_at_column();
create trigger trigger_update_size_guides_updated_at before update on size_guides for each row execute function update_updated_at_column();
create trigger trigger_update_size_guide_entries_updated_at before update on size_guide_entries for each row execute function update_updated_at_column();
create trigger trigger_update_products_updated_at before update on products for each row execute function update_updated_at_column();
create trigger trigger_update_product_variants_updated_at before update on product_variants for each row execute function update_updated_at_column();
create trigger trigger_update_product_images_updated_at before update on product_images for each row execute function update_updated_at_column();
create trigger trigger_update_product_attributes_updated_at before update on product_attributes for each row execute function update_updated_at_column();
create trigger trigger_update_product_badges_updated_at before update on product_badges for each row execute function update_updated_at_column();
create trigger trigger_update_product_collections_updated_at before update on product_collections for each row execute function update_updated_at_column();
create trigger trigger_update_product_collection_items_updated_at before update on product_collection_items for each row execute function update_updated_at_column();
create trigger trigger_update_product_reviews_updated_at before update on product_reviews for each row execute function update_updated_at_column();
create trigger trigger_update_product_tags_updated_at before update on product_tags for each row execute function update_updated_at_column();
create trigger trigger_update_pricing_rules_updated_at before update on pricing_rules for each row execute function update_updated_at_column();
create trigger trigger_update_product_metadata_updated_at before update on product_metadata for each row execute function update_updated_at_column();

-- ============================================================================
-- 17. ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

-- Enable RLS on all tables
alter table product_categories enable row level security;
alter table size_guides enable row level security;
alter table size_guide_entries enable row level security;
alter table products enable row level security;
alter table product_variants enable row level security;
alter table product_images enable row level security;
alter table product_attributes enable row level security;
alter table product_badges enable row level security;
alter table product_collections enable row level security;
alter table product_collection_items enable row level security;
alter table product_reviews enable row level security;
alter table product_tags enable row level security;
alter table product_tag_assignments enable row level security;
alter table inventory_transactions enable row level security;
alter table pricing_rules enable row level security;
alter table product_metadata enable row level security;
alter table product_search_index enable row level security;

-- Public read access for most tables
create policy "Public can read product categories" on product_categories for select using (true);
create policy "Public can read size guides" on size_guides for select using (true);
create policy "Public can read size guide entries" on size_guide_entries for select using (true);
create policy "Public can read active products" on products for select using (is_active = true);
create policy "Public can read active product variants" on product_variants for select using (is_active = true);
create policy "Public can read product images" on product_images for select using (true);
create policy "Public can read product attributes" on product_attributes for select using (true);
create policy "Public can read active product badges" on product_badges for select using (is_active = true);
create policy "Public can read active collections" on product_collections for select using (is_active = true);
create policy "Public can read collection items" on product_collection_items for select using (true);
create policy "Public can read approved reviews" on product_reviews for select using (is_approved = true);
create policy "Public can read active tags" on product_tags for select using (is_active = true);
create policy "Public can read tag assignments" on product_tag_assignments for select using (true);
create policy "Public can read active pricing rules" on pricing_rules for select using (is_active = true);
create policy "Public can read product metadata" on product_metadata for select using (true);
create policy "Public can read search index" on product_search_index for select using (true);

-- Admin access policies (assuming auth.uid() for admin users)
create policy "Admins can manage product categories" on product_categories for all using (auth.uid() is not null);
create policy "Admins can manage size guides" on size_guides for all using (auth.uid() is not null);
create policy "Admins can manage size guide entries" on size_guide_entries for all using (auth.uid() is not null);
create policy "Admins can manage products" on products for all using (auth.uid() is not null);
create policy "Admins can manage product variants" on product_variants for all using (auth.uid() is not null);
create policy "Admins can manage product images" on product_images for all using (auth.uid() is not null);
create policy "Admins can manage product attributes" on product_attributes for all using (auth.uid() is not null);
create policy "Admins can manage product badges" on product_badges for all using (auth.uid() is not null);
create policy "Admins can manage collections" on product_collections for all using (auth.uid() is not null);
create policy "Admins can manage collection items" on product_collection_items for all using (auth.uid() is not null);
create policy "Admins can manage reviews" on product_reviews for all using (auth.uid() is not null);
create policy "Admins can manage tags" on product_tags for all using (auth.uid() is not null);
create policy "Admins can manage tag assignments" on product_tag_assignments for all using (auth.uid() is not null);
create policy "Admins can manage inventory" on inventory_transactions for all using (auth.uid() is not null);
create policy "Admins can manage pricing rules" on pricing_rules for all using (auth.uid() is not null);
create policy "Admins can manage product metadata" on product_metadata for all using (auth.uid() is not null);
create policy "Admins can manage search index" on product_search_index for all using (auth.uid() is not null);

-- Authenticated users can create reviews
create policy "Authenticated users can create reviews" on product_reviews for insert with check (auth.uid() is not null);
create policy "Users can update own reviews" on product_reviews for update using (auth.uid() = user_id);

-- ============================================================================
-- 18. SAMPLE DATA SEEDING (OPTIONAL)
-- ============================================================================

-- Insert main categories
insert into product_categories (name, slug, description, sort_order) values
('Women', 'women', 'Women''s clothing and apparel', 1),
('Unisex', 'unisex', 'Unisex clothing and accessories', 2),
('Accessories', 'accessories', 'Accessories and tech items', 3),
('Beauty', 'beauty', 'Beauty and personal care products', 4);

-- Insert size guides
insert into size_guides (guide_id, name, description, size_range, used_by) values
('women_std', 'Women Standard', 'Standard women''s sizing', 'S – XL', 'Most tees, hoodies, sweatshirts'),
('women_numeric', 'Women Numeric', 'Numeric women''s sizing', '4 – 12', 'Yoga tanks, sports bras, some leggings'),
('women_ext', 'Women Extended', 'Extended women''s sizing', '2XS – XL', 'Color-block/inclusive-size lines'),
('std', 'Standard', 'Standard unisex sizing', 'XS/S – 3XL–8XL', 'All print-on-demand items');

-- Insert sample size guide entries for women_std
insert into size_guide_entries (size_guide_id, size_label, chest_inches, waist_inches, hips_inches, sort_order) values
((select id from size_guides where guide_id = 'women_std'), 'XS', 32, 24, 34, 1),
((select id from size_guides where guide_id = 'women_std'), 'S', 34, 26, 36, 2),
((select id from size_guides where guide_id = 'women_std'), 'M', 36, 28, 38, 3),
((select id from size_guides where guide_id = 'women_std'), 'L', 38, 30, 40, 4),
((select id from size_guides where guide_id = 'women_std'), 'XL', 40, 32, 42, 5),
((select id from size_guides where guide_id = 'women_std'), '2XL', 42, 34, 44, 6);

-- Insert sample badges
insert into product_badges (product_id, badge_type, badge_text, is_active) values
-- These would be populated when products are added
(null, 'NEW', 'New Arrival', true),
(null, 'BESTSELLER', 'Bestseller', true),
(null, 'TRENDING', 'Trending', true),
(null, 'SALE', 'On Sale', true),
(null, 'PREMIUM', 'Premium', true),
(null, 'COMING_SOON', 'Coming Soon', true);

-- ============================================================================
-- 19. HELPER FUNCTIONS
-- ============================================================================

-- Function to get product price with discounts applied
create or replace function get_product_price(p_product_id uuid)
returns table (
  price_cents integer,
  original_price_cents integer,
  discount_cents integer,
  discount_percentage numeric,
  has_discount boolean
) as $$
declare
  v_base_price integer;
  v_compare_price integer;
  v_discount_cents integer := 0;
  v_discount_pct numeric := 0;
  v_has_discount boolean := false;
begin
  select base_price_cents, compare_at_price_cents into v_base_price, v_compare_price
  from products where id = p_product_id;

  -- Check for active pricing rules
  select
    coalesce(
      (select discount_cents from pricing_rules
       where is_active = true
       and (applies_to = 'all' or product_id = p_product_id)
       and (starts_at is null or starts_at <= now())
       and (ends_at is null or ends_at >= now())
       and rule_type = 'fixed'
       limit 1),
      0
    ),
    coalesce(
      (select discount_percentage from pricing_rules
       where is_active = true
       and (applies_to = 'all' or product_id = p_product_id)
       and (starts_at is null or starts_at <= now())
       and (ends_at is null or ends_at >= now())
       and rule_type = 'percentage'
       limit 1),
      0
    )
  into v_discount_cents, v_discount_pct;

  if v_discount_cents > 0 then
    v_has_discount := true;
  elsif v_discount_pct > 0 then
    v_discount_cents := round(v_base_price * (v_discount_pct / 100));
    v_has_discount := true;
  elsif v_compare_price is not null and v_compare_price > v_base_price then
    v_discount_cents := v_compare_price - v_base_price;
    v_has_discount := true;
  end if;

  return query select
    v_base_price - v_discount_cents as price_cents,
    v_base_price as original_price_cents,
    v_discount_cents as discount_cents,
    v_discount_pct as discount_percentage,
    v_has_discount as has_discount;
end;
$$ language plpgsql;

-- Function to check inventory availability
create or replace function check_inventory_availability(p_variant_id uuid, p_quantity integer)
returns boolean as $$
declare
  v_available_quantity integer;
  v_inventory_policy text;
begin
  select inventory_quantity, inventory_policy
  into v_available_quantity, v_inventory_policy
  from product_variants
  where id = p_variant_id and is_active = true;

  if v_inventory_policy = 'deny' then
    return v_available_quantity >= p_quantity;
  else
    return true; -- continue policy allows overselling
  end if;
end;
$$ language plpgsql;

-- Function to update inventory after sale
create or replace function update_inventory_after_sale(p_variant_id uuid, p_quantity integer)
returns void as $$
declare
  v_current_quantity integer;
  v_product_id uuid;
begin
  select inventory_quantity, product_id
  into v_current_quantity, v_product_id
  from product_variants
  where id = p_variant_id;

  -- Record the transaction
  insert into inventory_transactions (
    variant_id,
    transaction_type,
    quantity_change,
    quantity_before,
    quantity_after,
    reference_type,
    notes
  ) values (
    p_variant_id,
    'sale',
    -p_quantity,
    v_current_quantity,
    v_current_quantity - p_quantity,
    'order',
    'Inventory reduced after sale'
  );

  -- Update the variant quantity
  update product_variants
  set inventory_quantity = v_current_quantity - p_quantity,
      updated_at = now()
  where id = p_variant_id;

  -- Update product search vector to reflect inventory changes
  perform update_product_search_vector();
end;
$$ language plpgsql;

-- ============================================================================
-- END OF SCHEMA
-- ============================================================================
