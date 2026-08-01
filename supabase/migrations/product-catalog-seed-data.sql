-- ============================================================================
-- PRODUCT CATALOG SEED DATA
-- Based on D:\product-catalog-schema.md
-- Run this after creating the schema
-- ============================================================================

-- ============================================================================
-- 1. INSERT SUBCATEGORIES
-- ============================================================================

-- Women's subcategories
insert into product_categories (parent_id, name, slug, description, sort_order) values
((select id from product_categories where slug = 'women'), 'Women''s Tops', 'womens-tops', 'T-shirts, tanks, hoodies, sweatshirts, coats', 1),
((select id from product_categories where slug = 'women'), 'Women''s Bottoms', 'womens-bottoms', 'Trousers, shorts', 2),
((select id from product_categories where slug = 'women'), 'Women''s Dresses', 'womens-dresses', 'Sleeveless, short sleeve, long sleeve dresses', 3),
((select id from product_categories where slug = 'women'), 'Women''s Bodysuits & Jumpsuits', 'womens-bodysuits-jumpsuits', 'Bodysuits, jumpsuits, rompers', 4),
((select id from product_categories where slug = 'women'), 'Women''s Activewear', 'womens-activewear', 'Sports bras, yoga pants, athletic wear', 5),
((select id from product_categories where slug = 'women'), 'Women''s Swimwear', 'womens-swimwear', 'Bikinis, tankinis, one-pieces', 6),
((select id from product_categories where slug = 'women'), 'Women''s Lingerie & Sleep', 'womens-lingerie-sleep', 'Underwear, lingerie, loungewear, sleepwear', 7),
((select id from product_categories where slug = 'women'), 'Women''s Outerwear', 'womens-outerwear', 'Coats & jackets', 8);

-- Accessories subcategories
insert into product_categories (parent_id, name, slug, description, sort_order) values
((select id from product_categories where slug = 'accessories'), '3C & Tech', 'accessories-3c-tech', 'Phone cases, tablet cases, gaming accessories', 1),
((select id from product_categories where slug = 'accessories'), 'Caps & Hats', 'accessories-caps-hats', 'Baseball caps, bucket hats, beanies', 2),
((select id from product_categories where slug = 'accessories'), 'Face & Neck', 'accessories-face-neck', 'Face covers, scarves, ties', 3),
((select id from product_categories where slug = 'accessories'), 'Jewelry & Ornaments', 'accessories-jewelry', 'Badges, necklaces, keychains', 4),
((select id from product_categories where slug = 'accessories'), 'Eyewear', 'accessories-eyewear', 'Eyewear accessories', 5),
((select id from product_categories where slug = 'accessories'), 'Hand & Arm', 'accessories-hand-arm', 'Arm coolers & warmers', 6),
((select id from product_categories where slug = 'accessories'), 'Footwear', 'accessories-footwear', 'Sports shoes, slippers, boots, socks', 7),
((select id from product_categories where slug = 'accessories'), 'Bags', 'accessories-bags', 'Backpacks, totes, crossbody bags, travel bags', 8);

-- ============================================================================
-- 2. INSERT ALL PRODUCTS (ALL 400+ SKUs)
-- ============================================================================

insert into products (category_id, sku, name, slug, description, base_price_cents, fabric_gsm, fabric_oz, material, fulfillment_lead_time, is_active) values
-- A1. T-SHIRTS (74 SKUs)
((select id from product_categories where slug = 'womens-tops'), 'WT0216', 'Women''s Regular Fit Crewneck T-Shirt', 'womens-regular-fit-crewneck-t-shirt', 'Classic regular fit crewneck t-shirt', 699, 130, '3.8 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0218', 'Women''s Leopard Print Crop T-Shirt', 'womens-leopard-print-crop-t-shirt', 'Leopard print crop t-shirt', 999, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0200', 'Women''s Boatneck Raglan T-Shirt', 'womens-boatneck-raglan-t-shirt', 'Boatneck raglan t-shirt', 599, 230, '6.8 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0225', 'Women''s Crop Short Sleeve Shirt', 'womens-crop-short-sleeve-shirt', 'Crop short sleeve shirt', 1699, 270, '8.0 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WO0019', 'Women''s Turtleneck Batwing T-Shirt', 'womens-turtleneck-batwing-t-shirt', 'Turtleneck batwing t-shirt', 1299, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0183', 'Women''s Slim Half-Button T-Shirt', 'womens-slim-half-button-t-shirt', 'Slim half-button t-shirt', 1499, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0197', 'Women''s Raglan Color Block Baby T-Shirt', 'womens-raglan-color-block-baby-t-shirt', 'Raglan color block baby t-shirt', 599, 230, '6.8 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0198', 'Women''s Slim Raglan T-Shirt', 'womens-slim-raglan-t-shirt', 'Slim raglan t-shirt', 599, 230, '6.8 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0050', 'Essential Bodycon Crewneck T-Shirt', 'essential-bodycon-crewneck-t-shirt', 'Essential bodycon crewneck t-shirt', 699, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0055', 'Women''s Cropped T-Shirt', 'womens-cropped-t-shirt', 'Cropped t-shirt', 999, 265, '7.8 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'RU0007', 'Baby Tee Seamless T-Shirt – 200 GSM', 'baby-tee-seamless-t-shirt', 'Baby tee seamless t-shirt', 399, 200, '5.9 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0033-4S', 'Fitted Crop Cotton T-Shirt', 'fitted-crop-cotton-t-shirt', 'Fitted crop cotton t-shirt', 759, 180, '5.3 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0137', 'Women''s Mineral Wash Cotton Crop T-Shirt', 'womens-mineral-wash-cotton-crop-t-shirt', 'Mineral wash cotton crop t-shirt', 1099, 275, '8.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WB0015', 'Women''s Cropped Dolman T-Shirt', 'womens-cropped-dolman-t-shirt', 'Cropped dolman t-shirt', 899, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0040', 'Essential Standard Shoulder T-Shirt', 'essential-standard-shoulder-t-shirt', 'Essential standard shoulder t-shirt', 699, 250, '7.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0151', 'Women''s Crewneck Crop T-Shirt', 'womens-crewneck-crop-t-shirt', 'Crewneck crop t-shirt', 999, 220, '6.5 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0018', 'Vintage Wash Slim Fit T-shirt', 'vintage-wash-slim-fit-tshirt', 'Vintage wash slim fit t-shirt', 699, 240, '7.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0112', 'Women''s Off-the-Shoulder Bell Sleeve Crop T-Shirt', 'womens-off-shoulder-bell-sleeve-crop-t-shirt', 'Off-the-shoulder bell sleeve crop t-shirt', 899, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0029', 'Contrast Stripes Bodycon Raglan Sleeve T-Shirt', 'contrast-stripes-bodycon-raglan-sleeve-t-shirt', 'Contrast stripes bodycon raglan sleeve t-shirt', 999, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0080', 'Women''s Solid Color Slim Crop T-Shirt', 'womens-solid-color-slim-crop-t-shirt', 'Solid color slim crop t-shirt', 599, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0032', 'Essential Drawstring T-Shirt', 'essential-drawstring-t-shirt', 'Essential drawstring t-shirt', 899, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0030', 'Vintage Wash Drop Shoulder T-shirt', 'vintage-wash-drop-shoulder-tshirt', 'Vintage wash drop shoulder t-shirt', 999, 275, '8.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0108', 'Women''s Mineral Wash Raglan Crop T-Shirt', 'womens-mineral-wash-raglan-crop-t-shirt', 'Mineral wash raglan crop t-shirt', 1099, 315, '9.3 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0010', 'Essential Bodycon Crewneck T-Shirt', 'essential-bodycon-crewneck-t-shirt-xs', 'Essential bodycon crewneck t-shirt', 699, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0107', 'Women''s Boxy Batwing Sleeve T-Shirt', 'womens-boxy-batwing-sleeve-t-shirt', 'Boxy batwing sleeve t-shirt', 1299, 190, '5.6 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0056', 'Women''s Slim-Fit Cropped T-Shirt', 'womens-slim-fit-cropped-t-shirt', 'Slim-fit cropped t-shirt', 899, 220, '6.5 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0094', 'Women''s Regular Fit T-Shirt', 'womens-regular-fit-t-shirt', 'Regular fit t-shirt', 699, 185, '5.5 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0062', 'Women''s Slim Ribbed Crop T-Shirt', 'womens-slim-ribbed-crop-t-shirt', 'Slim ribbed crop t-shirt', 699, 250, '7.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0089', 'Women''s Retro Binding V-Neck Crop T-Shirt', 'womens-retro-binding-v-neck-crop-t-shirt', 'Retro binding v-neck crop t-shirt', 899, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0111', 'Women''s Cropped Full Zip Short Sleeve T-Shirt', 'womens-cropped-full-zip-short-sleeve-t-shirt', 'Cropped full zip short sleeve t-shirt', 1299, 220, '6.5 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0002', 'Vintage Washed Bodycon Cotton T-Shirt', 'vintage-washed-bodycon-cotton-t-shirt', 'Vintage washed bodycon cotton t-shirt', 1299, 280, '8.3 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0084', 'Women''s Color Block V-Neck Crop T-Shirt', 'womens-color-block-v-neck-crop-t-shirt', 'Color block v-neck crop t-shirt', 999, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0053', 'Women''s Slim Fit Crewneck T-Shirt', 'womens-slim-fit-crewneck-t-shirt', 'Slim fit crewneck t-shirt', 899, 250, '7.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0041', 'Essential Wide Neck Baby T-shirt', 'essential-wide-neck-baby-tshirt', 'Essential wide neck baby t-shirt', 999, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0128', 'Women''s Quick-Dry Baby T-Shirt', 'womens-quick-dry-baby-t-shirt', 'Quick-dry baby t-shirt', 699, 240, '7.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'AWT002', 'Off-Shoulder Rolled Hem Cotton T-Shirt', 'off-shoulder-rolled-hem-cotton-t-shirt', 'Off-shoulder rolled hem cotton t-shirt', 899, 190, '5.6 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0158', 'Women''s Slim Color Block T-Shirt', 'womens-slim-color-block-t-shirt', 'Slim color block t-shirt', 999, 180, '5.3 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0077', 'Women''s Square Neck Crop T-Shirt', 'womens-square-neck-crop-t-shirt', 'Square neck crop t-shirt', 699, 220, '6.5 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0052', 'Contrast Collar Striped Cropped Jersey', 'contrast-collar-striped-cropped-jersey', 'Contrast collar striped cropped jersey', 1299, 165, '4.9 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0068', 'Women''s Slim Fit Boatneck T-Shirt', 'womens-slim-fit-boatneck-t-shirt', 'Slim fit boatneck t-shirt', 999, 250, '7.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0122', 'Women''s Vintage Wash Boxy Cropped Shirt', 'womens-vintage-wash-boxy-cropped-shirt', 'Vintage wash boxy cropped shirt', 2699, 310, '9.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'AWT001', 'Asymmetric Shoulder Oversized Cotton T-Shirt', 'asymmetric-shoulder-oversized-cotton-t-shirt', 'Asymmetric shoulder oversized cotton t-shirt', 1099, 230, '6.8 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0085', 'Women''s Contrast Stitch Raglan T-Shirt', 'womens-contrast-stitch-raglan-t-shirt', 'Contrast stitch raglan t-shirt', 699, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0167', 'Women''s Raglan Crop T-Shirt', 'womens-raglan-crop-t-shirt', 'Raglan crop t-shirt', 999, 200, '5.9 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0110', 'Women''s Color Block Raglan Baby T-Shirt', 'womens-color-block-raglan-baby-t-shirt', 'Color block raglan baby t-shirt', 899, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0066', 'Women''s Varsity Stripe T-Shirt', 'womens-varsity-stripe-t-shirt', 'Varsity stripe t-shirt', 1099, 220, '6.5 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0042', 'Essential Slim Fit Mock Neck T-Shirt', 'essential-slim-fit-mock-neck-t-shirt', 'Essential slim fit mock neck t-shirt', 699, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0060', 'Women''s Ruched Long Sleeve Crop T-Shirt', 'womens-ruched-long-sleeve-crop-t-shirt', 'Ruched long sleeve crop t-shirt', 999, 250, '7.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0138', 'Women''s Cropped Paneled V-Neck Jersey', 'womens-cropped-paneled-v-neck-jersey', 'Cropped paneled v-neck jersey', 899, 180, '5.3 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0081', 'Women''s Slim Cap Sleeve Crop T-Shirt', 'womens-slim-cap-sleeve-crop-t-shirt', 'Slim cap sleeve crop t-shirt', 699, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0140', 'Women''s Camo Raglan Crop T-Shirt', 'womens-camo-raglan-crop-t-shirt', 'Camo raglan crop t-shirt', 899, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0173', 'Women''s Paneling Full Zip T-Shirt', 'womens-paneling-full-zip-t-shirt', 'Paneling full zip t-shirt', 1699, 220, '6.5 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0075', 'Women''s Longline Slim-Fit T-Shirt', 'womens-longline-slim-fit-t-shirt', 'Longline slim-fit t-shirt', 999, 220, '6.5 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0104', 'Women''s Off-the-Shoulder Crop T-Shirt', 'womens-off-shoulder-crop-t-shirt', 'Off-the-shoulder crop t-shirt', 999, 310, '9.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0155', 'Women''s Striped Boxy Cropped Shirt', 'womens-striped-boxy-cropped-shirt', 'Striped boxy cropped shirt', 1699, 108, '3.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0095', 'Women''s Contrast Stitch Raglan Crop T-Shirt', 'womens-contrast-stitch-raglan-crop-t-shirt', 'Contrast stitch raglan crop t-shirt', 999, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0054', 'Tencel Slim Fit V-Neck T-Shirt', 'tencel-slim-fit-v-neck-t-shirt', 'Tencel slim fit v-neck t-shirt', 699, 220, '6.5 oz', 'Tencel', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0097', 'Women''s Mineral Wash Crop T-Shirt', 'womens-mineral-wash-crop-t-shirt-alt', 'Mineral wash crop t-shirt', 999, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0005', 'Essential V-Neck Bodycon T-Shirt', 'essential-v-neck-bodycon-t-shirt', 'Essential v-neck bodycon t-shirt', 1099, 215, '6.3 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0051', 'Contrast Trim V-Neck Crop T-Shirt', 'contrast-trim-v-neck-crop-t-shirt', 'Contrast trim v-neck crop t-shirt', 1299, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0124', 'Women''s Tencel Baby T-Shirt', 'womens-tencel-baby-t-shirt', 'Tencel baby t-shirt', 699, 220, '6.5 oz', 'Tencel', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0103', 'Women''s Raw Hem Long Sleeve T-Shirt', 'womens-raw-hem-long-sleeve-t-shirt', 'Raw hem long sleeve t-shirt', 1299, 310, '9.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0004', 'Essential Bodycon T-Shirt', 'essential-bodycon-t-shirt', 'Essential bodycon t-shirt', 1099, 250, '7.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0165', 'Women''s Sunfade Washed T-Shirt', 'womens-sunfade-washed-t-shirt', 'Sunfade washed t-shirt', 1099, 270, '8.0 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0008', 'Lightweight Cocoon Shape Short Sleeve Top', 'lightweight-cocoon-shape-short-sleeve-top', 'Lightweight cocoon shape short sleeve top', 699, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0166', 'Women''s Slim Fit Color Block T-Shirt', 'womens-slim-fit-color-block-t-shirt', 'Slim fit color block t-shirt', 999, 200, '5.9 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0139', 'Women''s Piping Baseball Jersey', 'womens-piping-baseball-jersey', 'Piping baseball jersey', 1299, 250, '7.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0177', 'Women''s Slim Fit Paneling T-Shirt', 'womens-slim-fit-paneling-t-shirt', 'Slim fit paneling t-shirt', 899, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0160', 'Women''s Crop Bubble Hem T-Shirt', 'womens-crop-bubble-hem-t-shirt', 'Crop bubble hem t-shirt', 1299, 200, '5.9 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0159', 'Women''s Raglan Ribbed T-Shirt', 'womens-raglan-ribbed-t-shirt', 'Raglan ribbed t-shirt', 999, 210, '6.2 oz', 'Cotton', 'In stock', true),
-- A2. TANK TOPS & CAMIS (20 SKUs)
((select id from product_categories where slug = 'womens-tops'), 'WT0082', 'Women''s Tight Crewneck Crop Tank Top', 'womens-tight-crewneck-crop-tank-top', 'Tight crewneck crop tank top', 499, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0115', 'Women''s Slim Tank Top', 'womens-slim-tank-top', 'Slim tank top', 699, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0196', 'Women''s Crewneck Tank Top', 'womens-crewneck-tank-top', 'Crewneck tank top', 599, 230, '6.8 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0185', 'Women''s Leopard print Tank Top', 'womens-leopard-print-tank-top', 'Leopard print tank top', 899, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0171', 'Women''s Drawstring Tank Top', 'womens-drawstring-tank-top', 'Drawstring tank top', 999, 180, '5.3 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'RU0092', 'Snow Washed Tank Top', 'snow-washed-tank-top', 'Snow washed tank top', 999, 235, '6.9 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'RU0094', 'Snow Washed Crop Top', 'snow-washed-crop-top', 'Snow washed crop top', 999, 235, '6.9 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'R00141', 'Snow Washed Crop Top', 'snow-washed-crop-top-alt', 'Snow washed crop top', 804, 220, '6.5 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0079', 'Women''s One-Shoulder Crop Tank Top', 'womens-one-shoulder-crop-tank-top', 'One-shoulder crop tank top', 599, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0083', 'Women''s Color Block Halter Crop Tank Top', 'womens-color-block-halter-crop-tank-top', 'Color block halter crop tank top', 699, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0001', 'Snow Washed Raw Edge Crop Top', 'snow-washed-raw-edge-crop-top', 'Snow washed raw edge crop top', 1499, 280, '8.3 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0009', 'Solid Color Raglan Sleeve Crop Top', 'solid-color-raglan-sleeve-crop-top', 'Solid color raglan sleeve crop top', 699, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0116', 'Women''s Color Block Cropped Tank Top', 'womens-color-block-cropped-tank-top', 'Color block cropped tank top', 699, 220, '6.5 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'RB0017', 'Slim Fit Ribbed Racerback Tank Top', 'slim-fit-ribbed-racerback-tank-top', 'Slim fit ribbed racerback tank top', 999, 280, '8.3 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WB0002', 'Women''s Cropped Tube Top', 'womens-cropped-tube-top', 'Cropped tube top', 699, 250, '7.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WB0001', 'Contrast Binding Halter Tank Top', 'contrast-binding-halter-tank-top', 'Contrast binding halter tank top', 699, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0013', 'Ruched Bodycon Crop Top', 'ruched-bodycon-crop-top', 'Ruched bodycon crop top', 699, 170, '5.0 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0076', 'Women''s Ribbed Henley Tank Top', 'womens-ribbed-henley-tank-top', 'Ribbed henley tank top', 899, 250, '7.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0011', 'V-Neck Lapel Crop Top', 'v-neck-lapel-crop-top', 'V-neck lapel crop top', 1099, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0006', 'Color-Blocked Raglan Sleeve Crop Top', 'color-blocked-raglan-sleeve-crop-top', 'Color-blocked raglan sleeve crop top', 699, 210, '6.2 oz', 'Cotton', 'In stock', true),
-- A3. HOODIES (15 SKUs)
((select id from product_categories where slug = 'womens-tops'), 'WT0192', 'Women''s Mineral Washed Crop Hoodie', 'womens-mineral-washed-crop-hoodie', 'Mineral washed crop hoodie', 2499, 400, '11.8 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WW0003', 'Essential Cropped Hoodie', 'essential-cropped-hoodie', 'Essential cropped hoodie', 1899, 350, '10.3 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WW0021', 'Essential Cropped Hoodie', 'essential-cropped-hoodie-alt', 'Essential cropped hoodie', 1299, 310, '9.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WW0005', 'Vintage Washed Raw Edge Hoodie', 'vintage-washed-raw-edge-hoodie', 'Vintage washed raw edge hoodie', 2299, 320, '9.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'RU0117', 'Fleeced Zip-Up Cropped Hoodie', 'fleeced-zip-up-cropped-hoodie', 'Fleeced zip-up cropped hoodie', 2399, 350, '10.3 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'RU0075', 'Snow Washed Cropped Hoodie', 'snow-washed-cropped-hoodie', 'Snow washed cropped hoodie', 1999, 355, '10.5 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WQ0002', 'Essential Cropped Zip-Up Hoodie', 'essential-cropped-zip-up-hoodie', 'Essential cropped zip-up hoodie', 2499, 350, '10.3 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WW0006', 'Vintage Washed Cropped Fleece Hoodie', 'vintage-washed-cropped-fleece-hoodie', 'Vintage washed cropped fleece hoodie', 2999, 400, '11.8 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WQ0005', 'Essential Cropped Zip-Up Hoodie', 'essential-cropped-zip-up-hoodie-alt', 'Essential cropped zip-up hoodie', 1499, 310, '9.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'RP0006', 'Cropped Half-Zip Hoodie', 'cropped-half-zip-hoodie', 'Cropped half-zip hoodie', 2199, 320, '9.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0102', 'Women''s Slim Cropped Full Zip Hoodie', 'womens-slim-cropped-full-zip-hoodie', 'Slim cropped full zip hoodie', 1499, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0114', 'Women''s Slim Crop Full Zip Hoodie', 'womens-slim-crop-full-zip-hoodie', 'Slim crop full zip hoodie', 1999, 310, '9.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0113', 'Women''s Boxy Quarter-Zip Hoodie', 'womens-boxy-quarter-zip-hoodie', 'Boxy quarter-zip hoodie', 1999, 310, '9.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WW0012', 'Contrast Side Stripe Cropped Hoodie', 'contrast-side-stripe-cropped-hoodie', 'Contrast side stripe cropped hoodie', 1899, 340, '10.0 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'RP0008', 'Cropped Zip-Through Hoodie', 'cropped-zip-through-hoodie', 'Cropped zip-through hoodie', 2299, 320, '9.4 oz', 'Cotton', 'In stock', true),
-- A4. SWEATSHIRTS (13 SKUs)
((select id from product_categories where slug = 'womens-tops'), 'WT0211', 'Women''s Mock Neck Crewneck Sweatshirt', 'womens-mock-neck-crewneck-sweatshirt', 'Mock neck crewneck sweatshirt', 1999, 350, '10.3 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0203', 'Women''s Collared Pullover Knit Sweater', 'womens-collared-pullover-knit-sweater', 'Collared pullover knit sweater', 1699, 420, '12.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0187', 'Women''s Mock-Neck Quarter-Zip Sweatshirt', 'womens-mock-neck-quarter-zip-sweatshirt', 'Mock-neck quarter-zip sweatshirt', 2299, 420, '12.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WB0067', 'Women''s Crop V-Neck Sweatshirt', 'womens-crop-v-neck-sweatshirt', 'Crop v-neck sweatshirt', 1699, 280, '8.3 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0212', 'Women''s Crop Collared Sweatshirt', 'womens-crop-collared-sweatshirt', 'Crop collared sweatshirt', 2299, 410, '12.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0058', 'Women''s Off-Shoulder Sweatshirt', 'womens-off-shoulder-sweatshirt', 'Off-shoulder sweatshirt', 1299, 250, '7.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WW0001', 'Raw-Hem Color-Block Raglan Crop Sweatshirt', 'raw-hem-color-block-raglan-crop-sweatshirt', 'Raw-hem color-block raglan crop sweatshirt', 1699, 420, '12.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'RW0004', 'Snow Washed Raw Edge Cropped Sweatshirt', 'snow-washed-raw-edge-cropped-sweatshirt', 'Snow washed raw edge cropped sweatshirt', 1999, 380, '11.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WW0016', 'Vintage Washed Cropped Sweatshirt', 'vintage-washed-cropped-sweatshirt', 'Vintage washed cropped sweatshirt', 1699, 410, '12.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'RP0007', 'Cropped Half-Zip Sweatshirt', 'cropped-half-zip-sweatshirt', 'Cropped half-zip sweatshirt', 2099, 320, '9.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0123', 'Women''s Boxy Cropped Crewneck Sweatshirt', 'womens-boxy-cropped-crewneck-sweatshirt', 'Boxy cropped crewneck sweatshirt', 1299, 310, '9.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WW0004', 'Essential Fleece Mock-Neck Crew Sweatshirt', 'essential-fleece-mock-neck-crew-sweatshirt', 'Essential fleece mock-neck crew sweatshirt', 1699, 350, '10.3 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WM0001', 'Mineral Wash Balloon Sleeve Cropped Sweater', 'mineral-wash-balloon-sleeve-cropped-sweater', 'Mineral wash balloon sleeve cropped sweater', 1999, 285, '8.4 oz', 'Cotton', 'In stock', true);

-- A5. ACTIVWEAR (89 SKUs)
((select id from product_categories where slug = 'womens-activewear'), 'WT0205', 'Women''s Tight Yoga Sports Bra', 'womens-tight-yoga-sports-bra', 'Tight yoga sports bra', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0195', 'Women''s Yoga Cropped Tube Top', 'womens-yoga-cropped-tube-top', 'Yoga cropped tube top', 999, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0206', 'Women''s Ruched Halter Neck Yoga Tank Top', 'womens-ruched-halter-neck-yoga-tank-top', 'Ruched halter neck yoga tank top', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0189', 'Women''s Halter Yoga Sports Bra', 'womens-halter-yoga-sports-bra', 'Halter yoga sports bra', 1299, 270, '8.0 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0193', 'Women''s Yoga Sports Bra', 'womens-yoga-sports-bra', 'Yoga sports bra', 999, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0072', 'Women''s High Rise Ankle Length Yoga Leggings', 'womens-high-rise-ankle-length-yoga-leggings', 'High rise ankle length yoga leggings', 1499, 270, '8.0 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0191', 'Women''s Cropped Yoga Tank Top', 'womens-cropped-yoga-tank-top', 'Cropped yoga tank top', 1299, 240, '7.1 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0194', 'Women''s Halter V-Neck Yoga Tank Top', 'womens-halter-v-neck-yoga-tank-top', 'Halter v-neck yoga tank top', 999, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0219', 'Women''s Color Block Yoga Tank Top', 'womens-color-block-yoga-tank-top', 'Color block yoga tank top', 1499, 225, '6.6 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0076', 'Women''s Quarter-Zip Yoga Romper', 'womens-quarter-zip-yoga-romper', 'Quarter-zip yoga romper', 1699, 230, '6.8 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0074', 'Women''s Flared Drawstring Yoga Pants', 'womens-flared-drawstring-yoga-pants', 'Flared drawstring yoga pants', 1499, 240, '7.1 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0179', 'Women''s Topstitching Yoga Sports Bra', 'womens-topstitching-yoga-sports-bra', 'Topstitching yoga sports bra', 1499, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0180', 'Women''s Topstitching Yoga Tank Top', 'womens-topstitching-yoga-tank-top', 'Topstitching yoga tank top', 1499, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0181', 'Women''s Performance Crop T-Shirt', 'womens-performance-crop-t-shirt', 'Performance crop t-shirt', 699, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0077', 'Women''s High Rise Yoga Pants', 'womens-high-rise-yoga-pants', 'High rise yoga pants', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0182', 'Women''s Halter Yoga Tank Top', 'womens-halter-yoga-tank-top', 'Halter yoga tank top', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0188', 'Women''s Polo Yoga Tank Top', 'womens-polo-yoga-tank-top', 'Polo yoga tank top', 1499, 320, '9.4 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0040', 'Women''s High Rise Topstitching Leggings', 'womens-high-rise-topstitching-leggings', 'High rise topstitching leggings', 1499, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0041', 'Women''s High Rise Flared Yoga Pants', 'womens-high-rise-flared-yoga-pants', 'High rise flared yoga pants', 1999, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0178', 'Women''s Color Block Yoga Sports Bra', 'womens-color-block-yoga-sports-bra', 'Color block yoga sports bra', 1499, 250, '7.4 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'UT0167', 'Women''s Color Block Performance T-Shirt', 'womens-color-block-performance-t-shirt', 'Color block performance t-shirt', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0068', 'Women''s High Rise Color Block Yoga Shorts', 'womens-high-rise-color-block-yoga-shorts', 'High rise color block yoga shorts', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0149', 'Women''s Hollow-Out Yoga Tank Top', 'womens-hollow-out-yoga-tank-top', 'Hollow-out yoga tank top', 1299, 260, '7.7 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0062', 'Women''s High Rise Color Block Yoga Shorts', 'womens-high-rise-color-block-yoga-shorts-alt', 'High rise color block yoga shorts', 1299, 250, '7.4 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0065', 'Women''s Color Block Yoga Leggings', 'womens-color-block-yoga-leggings', 'Color block yoga leggings', 1699, 250, '7.4 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0164', 'Women''s Yoga Tank Top', 'womens-yoga-tank-top', 'Yoga tank top', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0013', 'High-Waisted Yoga Leggings', 'high-waisted-yoga-leggings', 'High-waisted yoga leggings', 1299, 210, '6.2 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0143', 'Women''s Slim Fit Performance T-Shirt', 'womens-slim-fit-performance-t-shirt', 'Slim fit performance t-shirt', 699, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0073', 'Spaghetti Strap Yoga Sports Bra', 'spaghetti-strap-yoga-sports-bra', 'Spaghetti strap yoga sports bra', 999, 300, '8.8 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0134', 'Women''s Color Block Yoga Sports Bra', 'womens-color-block-yoga-sports-bra-alt', 'Color block yoga sports bra', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0026', 'Women''s High-Waisted Biker Shorts', 'womens-high-waisted-biker-shorts', 'High-waisted biker shorts', 999, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0042', 'Women''s High-Waist Tapered Leggings', 'womens-high-waist-tapered-leggings', 'High-waist tapered leggings', 1699, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0092', 'Women''s Quarter-Zip Yoga Pullover', 'womens-quarter-zip-yoga-pullover', 'Quarter-zip yoga pullover', 899, 165, '4.9 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0038', 'Women''s High Rise Yoga Shorts', 'womens-high-rise-yoga-shorts', 'High rise yoga shorts', 999, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0014', 'Women''s Contrast Stripe Track Shorts', 'womens-contrast-stripe-track-shorts', 'Contrast stripe track shorts', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0025', 'Women''s Solid High Rise Leggings', 'womens-solid-high-rise-leggings', 'Solid high rise leggings', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0136', 'Women''s Halter Neck Yoga Sports Bra', 'womens-halter-neck-yoga-sports-bra', 'Halter neck yoga sports bra', 1499, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0020', 'Women''s High-Waisted Ankle Length Yoga Leggings', 'womens-high-waisted-ankle-length-yoga-leggings', 'High-waisted ankle length yoga leggings', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0074', 'Strappy Criss-Cross Sports Bra', 'strappy-criss-cross-sports-bra', 'Strappy criss-cross sports bra', 999, 210, '6.2 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0109', 'Women''s Solid Color Sports Bra', 'womens-solid-color-sports-bra', 'Solid color sports bra', 999, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0065', 'Women''s Crossover V-Neck Sports Bra', 'womens-crossover-v-neck-sports-bra', 'Crossover v-neck sports bra', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0012', 'High-Waisted Blend Biker Shorts', 'high-waisted-blend-biker-shorts', 'High-waisted blend biker shorts', 999, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0118', 'Women''s Slim Fit Full-Zip Yoga Jacket', 'womens-slim-fit-full-zip-yoga-jacket', 'Slim fit full-zip yoga jacket', 1699, 230, '6.8 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0125', 'Women''s V-Neck Yoga Sports Bra', 'womens-v-neck-yoga-sports-bra', 'V-neck yoga sports bra', 1299, 210, '6.2 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0035', 'Women''s High Waisted Ankle Leggings', 'womens-high-waisted-ankle-leggings', 'High waisted ankle leggings', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0024', 'Women''s High-Rise Ankle-Length Leggings', 'womens-high-rise-ankle-length-leggings', 'High-rise ankle-length leggings', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0152', 'Women''s Tight Color Block Yoga Tank Top', 'womens-tight-color-block-yoga-tank-top', 'Tight color block yoga tank top', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0055', 'Women''s High Rise Pocket Yoga Shorts', 'womens-high-rise-pocket-yoga-shorts', 'High rise pocket yoga shorts', 1299, 230, '6.8 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0157', 'Women''s Cutout Long Sleeve Yoga Shrug', 'womens-cutout-long-sleeve-yoga-shrug', 'Cutout long sleeve yoga shrug', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0003', 'Women''s High-Waisted Flare Leggings', 'womens-high-waisted-flare-leggings', 'High-waisted flare leggings', 1499, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0099', 'Women''s Halter Crop Sports Bra', 'womens-halter-crop-sports-bra', 'Halter crop sports bra', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0006', 'Women''s High-Waisted Pocket Biker Shorts', 'womens-high-waisted-pocket-biker-shorts', 'High-waisted pocket biker shorts', 999, 210, '6.2 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0146', 'Women''s Tight Fit Yoga Tank Top', 'womens-tight-fit-yoga-tank-top', 'Tight fit yoga tank top', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0031', 'Women''s High-Waisted Yoga Leggings', 'womens-high-waisted-yoga-leggings', 'High-waisted yoga leggings', 1299, 230, '6.8 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0147', 'Women''s Yoga Tank Top', 'womens-yoga-tank-top-alt', 'Yoga tank top', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0131', 'Women''s Solid U-Neck Sports Bra', 'womens-solid-u-neck-sports-bra', 'Solid u-neck sports bra', 999, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0132', 'Women''s Solid Color Yoga Sports Bra', 'womens-solid-color-yoga-sports-bra', 'Solid color yoga sports bra', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0130', 'Women''s Cropped Sports Bra', 'womens-cropped-sports-bra', 'Cropped sports bra', 999, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0064', 'Strappy Criss Cross Yoga Sports Bra', 'strappy-criss-cross-yoga-sports-bra', 'Strappy criss cross yoga sports bra', 999, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'RT0035', 'Taped Cooling Performance Crop Top', 'taped-cooling-performance-crop-top', 'Taped cooling performance crop top', 1099, 230, '6.8 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0017', 'Women''s High Rise Ankle Length Leggings', 'womens-high-rise-ankle-length-leggings-alt', 'High rise ankle length leggings', 999, 230, '6.8 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0129', 'Women''s Twist Front V-Neck Sports Bra', 'womens-twist-front-v-neck-sports-bra', 'Twist front v-neck sports bra', 999, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0117', 'Women''s Slim Fit Performance T-Shirt', 'womens-slim-fit-performance-t-shirt-alt', 'Slim fit performance t-shirt', 699, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0121', 'Women''s Color Block Ruched V-Neck Sports Bra', 'womens-color-block-ruched-v-neck-sports-bra', 'Color block ruched v-neck sports bra', 1299, 230, '6.8 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0051', 'Women''s High-Waist Yoga Shorts', 'womens-high-waist-yoga-shorts', 'High-waist yoga shorts', 1299, 215, '6.3 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0150', 'Women''s Tight Halter Yoga Tank Top', 'womens-tight-halter-yoga-tank-top', 'Tight halter yoga tank top', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0144', 'Women''s Cropped V-Neck Sports Bra', 'womens-cropped-v-neck-sports-bra', 'Cropped v-neck sports bra', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0054', 'Women''s High Rise Flared Leggings', 'womens-high-rise-flared-leggings-alt', 'High rise flared leggings', 1499, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0168', 'Women''s U-Neck Yoga Sports Bra', 'womens-u-neck-yoga-sports-bra', 'U-neck yoga sports bra', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0154', 'Women''s Tight Paneling Yoga Tank Top', 'womens-tight-paneling-yoga-tank-top', 'Tight paneling yoga tank top', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0096', 'Women''s Faux Denim Sports Bra', 'womens-faux-denim-sports-bra', 'Faux denim sports bra', 1299, 200, '5.9 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0127', 'Women''s Criss-Cross Band Sports Bra', 'womens-criss-cross-band-sports-bra', 'Criss-cross band sports bra', 1699, 250, '7.4 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0133', 'Women''s Ruched Halter-Neck Sports Bra', 'womens-ruched-halter-neck-sports-bra', 'Ruched halter-neck sports bra', 999, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0046', 'Women''s High-Waist Color Block Yoga Shorts', 'womens-high-waist-color-block-yoga-shorts-alt', 'High-waist color block yoga shorts', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0019', 'Women''s Faux Denim Zip-Fly Leggings', 'womens-faux-denim-zip-fly-leggings', 'Faux denim zip-fly leggings', 1499, 200, '5.9 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0053', 'Women''s High Rise Tight Yoga Shorts', 'womens-high-rise-tight-yoga-shorts', 'High rise tight yoga shorts', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0153', 'Women''s Crewneck Yoga Tank Top', 'womens-crewneck-yoga-tank-top', 'Crewneck yoga tank top', 1299, 220, '6.5 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WB0052', 'Women''s High Rise Straight Leg Yoga Pants', 'womens-high-rise-straight-leg-yoga-pants', 'High rise straight leg yoga pants', 1699, 230, '6.8 oz', 'Spandex', 'In stock', true),
((select id from product_categories where slug = 'womens-activewear'), 'WT0141', 'Women''s Ruched Cropped Yoga Tube Top', 'womens-ruched-cropped-yoga-tube-top', 'Ruched cropped yoga tube top', 1299, 240, '7.1 oz', 'Spandex', 'In stock', true),
-- A6. SHORTS (7 SKUs)
((select id from product_categories where slug = 'womens-bottoms'), 'WB0073', 'Women''s Drawstring Bermuda Shorts', 'womens-drawstring-bermuda-shorts', 'Drawstring bermuda shorts', 1299, 140, '4.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0066', 'Women''s Drawstring Shorts', 'womens-drawstring-shorts', 'Drawstring shorts', 1299, 420, '12.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WK0014', 'Women''s Drawstring Shorts', 'womens-drawstring-shorts-alt', 'Drawstring shorts', 1299, 430, '12.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0034', 'Women''s Vintage Wash Raw Hem Denim Shorts', 'womens-vintage-wash-raw-hem-denim-shorts', 'Vintage wash raw hem denim shorts', 1699, 430, '12.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0030', 'Women''s Retro Contrast Binding Shorts', 'womens-retro-contrast-binding-shorts', 'Retro contrast binding shorts', 999, 220, '6.5 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0058', 'Women''s Vintage Wash High Rise Denim Shorts', 'womens-vintage-wash-high-rise-denim-shorts', 'Vintage wash high rise denim shorts', 1999, 280, '8.3 oz', 'Cotton', 'In stock', true),
-- A7. SWEATPANTS (10 SKUs)
((select id from product_categories where slug = 'womens-bottoms'), 'WB0075', 'Women''s Mineral Wash Flared Leg Sweatpants', 'womens-mineral-wash-flared-leg-sweatpants', 'Mineral wash flared leg sweatpants', 2499, 400, '11.8 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WK0004', 'Essential Fleece Drawstring Sweatshorts', 'essential-fleece-drawstring-sweatshorts', 'Essential fleece drawstring sweatshorts', 1299, 350, '10.3 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WK0009', 'Essential Straight-Leg Sweatpants', 'essential-straight-leg-sweatpants', 'Essential straight-leg sweatpants', 1299, 310, '9.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WK0006', 'Vintage Washed Waist Pants', 'vintage-washed-waist-pants', 'Vintage washed waist pants', 2499, 370, '10.9 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WK0010', 'Essential Jogged Sweatpants', 'essential-jogged-sweatpants', 'Essential jogged sweatpants', 1299, 310, '9.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WK0003', 'Essential Drawstring Straight-Leg Sweatpants', 'essential-drawstring-straight-leg-sweatpants', 'Essential drawstring straight-leg sweatpants', 1999, 350, '10.3 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WK0005', 'Vintage Washed Flared Fleece Pants', 'vintage-washed-flared-fleece-pants', 'Vintage washed flared fleece pants', 2499, 400, '11.8 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0016', 'Women''s Slim-Fit Flared Sweatpants', 'womens-slim-fit-flared-sweatpants', 'Slim-fit flared sweatpants', 1499, 250, '7.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0023', 'Women''s Wide Leg Sweatpants', 'womens-wide-leg-sweatpants', 'Wide leg sweatpants', 1699, 310, '9.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WK0016', 'Vintage Washed Drawstring Sweatpants', 'vintage-washed-drawstring-sweatpants', 'Vintage washed drawstring sweatpants', 1999, 410, '12.1 oz', 'Cotton', 'In stock', true),
-- A8. SKIRTS (15 SKUs)
((select id from product_categories where slug = 'womens-bottoms'), 'WB0081', 'Women''s High Rise A-Line Skirt', 'womens-high-rise-a-line-skirt', 'High rise a-line skirt', 1699, 220, '6.5 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0086', 'Women''s Pleated A-Line Skirt', 'womens-pleated-a-line-skirt', 'Pleated a-line skirt', 1299, 220, '6.5 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0071', 'Women''s Pleated A-Line Tennis Skirt', 'womens-pleated-a-line-tennis-skirt', 'Pleated a-line tennis skirt', 1299, 320, '9.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WS0004', 'High-Waist Pocketed A-Line Skirt', 'high-waist-pocketed-a-line-skirt', 'High-waist pocketed a-line skirt', 1499, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WS0013', 'Essential Drawstring Skirt', 'essential-drawstring-skirt', 'Essential drawstring skirt', 799, 310, '9.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0027', 'Women''s Solid Color Knit Maxi Skirt', 'womens-solid-color-knit-maxi-skirt', 'Solid color knit maxi skirt', 899, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0037', 'Women''s Pleated Mini Skirt', 'womens-pleated-mini-skirt', 'Pleated mini skirt', 1699, 125, '3.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'RS0035', 'Taped Cooling Performance Short Skirt', 'taped-cooling-performance-short-skirt', 'Taped cooling performance short skirt', 1299, 230, '6.8 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0060', 'Women''s A-Line Mini Skirt', 'womens-a-line-mini-skirt', 'A-line mini skirt', 899, 310, '9.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WS0009', 'Dyed Washed Drawstring Maxi Skirt', 'dyed-washed-drawstring-maxi-skirt', 'Dyed washed drawstring maxi skirt', 1699, 275, '8.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WS0012', 'Contrast Side Stripe Slit Skirt', 'contrast-side-stripe-slit-skirt', 'Contrast side stripe slit skirt', 999, 340, '10.0 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0033', 'Women''s Mineral Wash Mini Skirt', 'womens-mineral-wash-mini-skirt', 'Mineral wash mini skirt', 1699, 380, '11.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0047', 'Women''s A-Line Contrast Panel Slit Skirt', 'womens-a-line-contrast-panel-slit-skirt', 'A-line contrast panel slit skirt', 1499, 225, '6.6 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0049', 'Women''s Vintage Wash Denim Skirt', 'womens-vintage-wash-denim-skirt', 'Vintage wash denim skirt', 2699, 450, '13.3 oz', 'Cotton', 'In stock', true),
-- A9. BOTTOMS - JEANS/DENIM (16 SKUs)
((select id from product_categories where slug = 'womens-bottoms'), 'WB0082', 'Women''s Tencel Wide Leg Pants', 'womens-tencel-wide-leg-pants', 'Tencel wide leg pants', 2499, 300, '8.8 oz', 'Tencel', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0089', 'Women''s Wide Leg Denim Jeans', 'womens-wide-leg-denim-jeans', 'Wide leg denim jeans', 2499, 430, '12.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0078', 'Women''s Splatter Barrel Leg Jeans', 'womens-splatter-barrel-leg-jeans', 'Splatter barrel leg jeans', 2499, 615, '18.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0069', 'Women''s High Rise Wide Leg Pants', 'womens-high-rise-wide-leg-pants', 'High rise wide leg pants', 2299, 140, '4.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0011', 'Women''s High-Rise Flared Jeans', 'womens-high-rise-flared-jeans', 'High-rise flared jeans', 2499, 385, '11.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0010', 'Women''s High-Rise Skinny Jeans', 'womens-high-rise-skinny-jeans', 'High-rise skinny jeans', 2499, 385, '11.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0021', 'Women''s Vintage Wash Flared Leg Jeans', 'womens-vintage-wash-flared-leg-jeans', 'Vintage wash flared leg jeans', 2499, 370, '10.9 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0032', 'Women''s Vintage Wash Distressed Wide Leg Jeans', 'womens-vintage-wash-distressed-wide-leg-jeans', 'Vintage wash distressed wide leg jeans', 2299, 400, '11.8 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'RK0003', 'Belted Barrel-leg Chino Pants', 'belted-barrel-leg-chino-pants', 'Belted barrel-leg chino pants', 1999, 360, '10.6 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0036', 'Women''s Vintage Wash Wide Leg Jeans', 'womens-vintage-wash-wide-leg-jeans', 'Vintage wash wide leg jeans', 2299, 400, '11.8 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0018', 'Women''s Flared Leg Jeans', 'womens-flared-leg-jeans', 'Flared leg jeans', 2299, 430, '12.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0059', 'Women''s Vintage Wash Wide Leg Jeans', 'womens-vintage-wash-wide-leg-jeans-alt', 'Vintage wash wide leg jeans', 2499, 123, '3.6 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0029', 'Women''s Drawstring Flared Leg Pants', 'womens-drawstring-flared-leg-pants', 'Drawstring flared leg pants', 1699, 310, '9.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0057', 'Women''s Vintage Wash High Rise Wide Leg Jeans', 'womens-vintage-wash-high-rise-wide-leg-jeans', 'Vintage wash high rise wide leg jeans', 2499, 426, '12.6 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0056', 'Women''s Vintage Wash Wide Leg Jeans', 'womens-vintage-wash-wide-leg-jeans-alt2', 'Vintage wash wide leg jeans', 2499, 123, '3.6 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-bottoms'), 'WB0050', 'Women''s Vintage Wash Wide Leg Jeans', 'womens-vintage-wash-wide-leg-jeans-alt3', 'Vintage wash wide leg jeans', 2499, 425, '12.5 oz', 'Cotton', 'In stock', true),
-- A10. ONE-PIECES (17 SKUs)
((select id from product_categories where slug = 'womens-dresses'), 'WO0018', 'Women''s U-Neck Yoga Romper', 'womens-u-neck-yoga-romper', 'U-neck yoga romper', 1999, 220, '6.5 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-dresses'), 'WT0209', 'Women''s Striped Color Block Polo Dress', 'womens-striped-color-block-polo-dress', 'Striped color block polo dress', 1699, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-dresses'), 'WO0014', 'Women''s A-Line Sleeveless Dress', 'womens-a-line-sleeveless-dress', 'A-line sleeveless dress', 2299, 220, '6.5 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-dresses'), 'WO0002', 'Women''s Solid Tight Sleeveless Dress', 'womens-solid-tight-sleeveless-dress', 'Solid tight sleeveless dress', 899, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-dresses'), 'WT0091', 'Women''s Mineral Wash Crewneck Bodysuit', 'womens-mineral-wash-crewneck-bodysuit', 'Mineral wash crewneck bodysuit', 1299, 275, '8.1 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-dresses'), 'WO0009', 'Women''s Tight Flared Leg Quarter-Zip Jumpsuit', 'womens-tight-flared-leg-quarter-zip-jumpsuit', 'Tight flared leg quarter-zip jumpsuit', 1999, 230, '6.8 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-dresses'), 'WO0013', 'Women''s Halter Flared Jumpsuit', 'womens-halter-flared-jumpsuit', 'Halter flared jumpsuit', 1699, 220, '6.5 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-dresses'), 'WO0004', 'Women''s Color Block Mini Dress', 'womens-color-block-mini-dress', 'Color block mini dress', 999, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-dresses'), 'WO0012', 'Women''s Quarter-Zip Short Sleeve Romper', 'womens-quarter-zip-short-sleeve-romper', 'Quarter-zip short sleeve romper', 1499, 230, '6.8 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-dresses'), 'WO0008', 'Women''s Collared Halter A-Line Tennis Dress', 'womens-collared-halter-a-line-tennis-dress', 'Collared halter a-line tennis dress', 1299, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-dresses'), 'WO0001', 'Women''s V-Neck Short Sleeve Maxi Dress', 'womens-v-neck-short-sleeve-maxi-dress', 'V-neck short sleeve maxi dress', 1299, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-dresses'), 'WO0005', 'Women''s Binding Tight Halter Dress', 'womens-binding-tight-halter-dress', 'Binding tight halter dress', 999, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-dresses'), 'WO0010', 'Women''s Paneled A-Line Dress', 'womens-paneled-a-line-dress', 'Paneled a-line dress', 1699, 210, '6.2 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-dresses'), 'WO0006', 'Women''s Dual-Function Cape Tie-Waist Romper', 'womens-dual-function-cape-tie-waist-romper', 'Dual-function cape tie-waist romper', 1699, 250, '7.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-dresses'), 'WO0011', 'Women''s Color Block A-Line Sleeveless Dress', 'womens-color-block-a-line-sleeveless-dress', 'Color block a-line sleeveless dress', 1699, 220, '6.5 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-dresses'), 'WT0176', 'Women''s Full-Zip Ruched Bodysuit', 'womens-full-zip-ruched-bodysuit', 'Full-zip ruched bodysuit', 1499, 315, '9.3 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-dresses'), 'WO0015', 'Women''s Ruched Sleeveless Full-Zip Dress', 'womens-ruched-sleeveless-full-zip-dress', 'Ruched sleeveless full-zip dress', 2699, 220, '6.5 oz', 'Cotton', 'In stock', true),
-- A11. COATS & JACKETS (4 SKUs)
((select id from product_categories where slug = 'womens-outerwear'), 'WT0186', 'Women''s Crop Denim Jacket', 'womens-crop-denim-jacket', 'Crop denim jacket', 2999, 420, '12.4 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-outerwear'), 'WT0162', 'Women''s Full-Zip Sports Jacket', 'womens-full-zip-sports-jacket', 'Full-zip sports jacket', 1699, 230, '6.8 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-outerwear'), 'WQ0004', 'Contrast Side Stripe Fleece Cropped Track Jacket', 'contrast-side-stripe-fleece-cropped-track-jacket', 'Contrast side stripe fleece cropped track jacket', 2699, 420, '12.4 oz', 'Cotton', 'In stock', true),
-- A12. POLO SHIRTS (4 SKUs)
((select id from product_categories where slug = 'womens-tops'), 'WT0163', 'Women''s Slim Fit Quarter-Zip Polo Shirt', 'womens-slim-fit-quarter-zip-polo-shirt', 'Slim fit quarter-zip polo shirt', 1299, 160, '4.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'PL0007', 'Essential Cropped Polo Shirt', 'essential-cropped-polo-shirt', 'Essential cropped polo shirt', 999, 200, '5.9 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'PL0008', 'Bodycon Short Sleeve Polo Shirt', 'bodycon-short-sleeve-polo-shirt', 'Bodycon short sleeve polo shirt', 999, 260, '7.7 oz', 'Cotton', 'In stock', true),
((select id from product_categories where slug = 'womens-tops'), 'WT0172', 'Women''s Knit Cotton Polo Shirt', 'womens-knit-cotton-polo-shirt', 'Knit cotton polo shirt', 1499, 180, '5.3 oz', 'Cotton', 'In stock', true),
-- PART B - CUSTOM PRINT-ON-DEMAND ITEMS (200+ SKUs)
-- B1. CUSTOM T-SHIRTS & TOPS
((select id from product_categories where slug = 'womens-tops'), 'CP001', 'Custom Printed Women''s Shirts All-Over Printing', 'custom-printed-womens-shirts-all-over-printing', 'Custom printed women''s shirts all-over printing', 928, 280, '8.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP002', '180gsm Custom Women Top T-Shirts All-Over Printing', '180gsm-custom-women-top-t-shirts-all-over-printing', '180gsm custom women top t-shirts all-over printing', 574, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP003', 'DTG 150gsm Custom Personalized T-Shirts Dual-Sided Printing', 'dtg-150gsm-custom-personalized-t-shirts-dual-sided-printing', 'DTG 150gsm custom personalized t-shirts dual-sided printing', 591, 150, '4.4 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP004', 'Custom Crewneck T-Shirts All-Over Printing', 'custom-crewneck-t-shirts-all-over-printing', 'Custom crewneck t-shirts all-over printing', 576, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP005', 'Custom Printed Mom Shirts All-Over Printing', 'custom-printed-mom-shirts-all-over-printing', 'Custom printed mom shirts all-over printing', 639, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP006', 'DTF 190gsm Designer T-Shirts for Women Front Prints', 'dtf-190gsm-designer-t-shirts-for-women-front-prints', 'DTF 190gsm designer t-shirts for women front prints', 698, 190, '5.6 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP007', 'DTG 150gsm T-Shirts for Women Printed Tees Front Printing', 'dtg-150gsm-t-shirts-for-women-printed-tees-front-printing', 'DTG 150gsm t-shirts for women printed tees front printing', 491, 150, '4.4 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP008', 'DTF 190gsm Custom Designed Women''s T-Shirts Dual-Sided Printing', 'dtf-190gsm-custom-designed-womens-t-shirts-dual-sided-printing', 'DTF 190gsm custom designed women''s t-shirts dual-sided printing', 814, 190, '5.6 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP009', '180gsm Women''s Tank Top All-Over Printing', '180gsm-womens-tank-top-all-over-printing', '180gsm women''s tank top all-over printing', 510, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP010', 'Custom Women''s Long Sleeve U-Neck T-Shirts All-Over Printing', 'custom-womens-long-sleeve-u-neck-t-shirts-all-over-printing', 'Custom women''s long sleeve u-neck t-shirts all-over printing', 634, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP011', 'Sleeveless Dress', 'sleeveless-dress', 'Sleeveless dress', 639, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP012', '280gsm Custom Sweatshirt Designs Raglan Style', '280gsm-custom-sweatshirt-designs-raglan-style', '280gsm custom sweatshirt designs raglan style', 784, 280, '8.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP013', 'DTG 190gsm Customized Dual-Sided Printed T-Shirts for Women', 'dtg-190gsm-customized-dual-sided-printed-t-shirts-for-women', 'DTG 190gsm customized dual-sided printed t-shirts for women', 943, 190, '5.6 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP014', 'DTF 150gsm Print Crew Neck T-Shirts for Women Front Printing', 'dtf-150gsm-print-crew-neck-t-shirts-for-women-front-printing', 'DTF 150gsm print crew neck t-shirts for women front printing', 431, 150, '4.4 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP015', 'DTG 150gsm St Patricks Day Shirts Short Sleeve Raglan Tees', 'dtg-150gsm-st-patricks-day-shirts-short-sleeve-raglan-tees', 'DTG 150gsm st patricks day shirts short sleeve raglan tees', 660, 150, '4.4 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP016', '180gsm Custom Long Sleeve T-Shirts with Pocket', '180gsm-custom-long-sleeve-t-shirts-with-pocket', '180gsm custom long sleeve t-shirts with pocket', 724, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP017', 'DTG 190gsm Custom Printed Women''s T-Shirts Front Prints', 'dtg-190gsm-custom-printed-womens-t-shirts-front-prints', 'DTG 190gsm custom printed women''s t-shirts front prints', 750, 190, '5.6 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP018', 'DTG 255gsm Women''s Pocket Hoodie Back Printed', 'dtg-255gsm-womens-pocket-hoodie-back-printed', 'DTG 255gsm women''s pocket hoodie back printed', 1024, 255, '7.5 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP019', 'Ruffle V-Neck T-Shirt All-Over Printing', 'ruffle-v-neck-t-shirt-all-over-printing', 'Ruffle v-neck t-shirt all-over printing', 591, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP020', 'DTG 150gsm Raglan Women''s 3/4 Sleeve T-shirt', 'dtg-150gsm-raglan-womens-3-4-sleeve-t-shirt', 'DTG 150gsm raglan women''s 3/4 sleeve t-shirt', 681, 150, '4.4 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP021', 'DTG 150gsm Raglan Women''s Long Sleeve T-shirt', 'dtg-150gsm-raglan-womens-long-sleeve-t-shirt', 'DTG 150gsm raglan women''s long sleeve t-shirt', 724, 150, '4.4 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP022', 'DTG 260gsm Women''s Printed Sweatshirt Front Printing', 'dtg-260gsm-womens-printed-sweatshirt-front-printing', 'DTG 260gsm women''s printed sweatshirt front printing', 896, 260, '7.7 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP023', 'DTG 255gsm Cotton Women''s Back Print Hoodie', 'dtg-255gsm-cotton-womens-back-print-hoodie', 'DTG 255gsm cotton women''s back print hoodie', 1003, 255, '7.5 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP024', 'Printed V-neck Cami Top All-Over Printing', 'printed-v-neck-cami-top-all-over-printing', 'Printed v-neck cami top all-over printing', 761, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP025', 'Short Tank Top All-Over Printing', 'short-tank-top-all-over-printing', 'Short tank top all-over printing', 596, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP026', 'Floral Camisole', 'floral-camisole', 'Floral camisole', 489, 140, '4.1 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP027', 'Sleeveless Crop Top All-Over Printing', 'sleeveless-crop-top-all-over-printing', 'Sleeveless crop top all-over printing', 619, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP028', 'Women''s Flower Blouse Long Sleeve All-Over Printing', 'womens-flower-blouse-long-sleeve-all-over-printing', 'Women''s flower blouse long sleeve all-over printing', 874, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP029', 'Short Sleeve Navel Shirt Baby Tee All-Over Printing', 'short-sleeve-navel-shirt-baby-tee-all-over-printing', 'Short sleeve navel shirt baby tee all-over printing', 257, 150, '4.4 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP030', 'Women''s Irregular Shirt All-Over Printing', 'womens-irregular-shirt-all-over-printing', 'Women''s irregular shirt all-over printing', 1041, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP031', 'Drop Shoulder Women''s Open Shirt Irregular Hem', 'drop-shoulder-womens-open-shirt-irregular-hem', 'Drop shoulder women''s open shirt irregular hem', 1170, 230, '6.8 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP032', 'Casual Long Sleeve Vintage Tour Shirt All-Over Printing', 'casual-long-sleeve-vintage-tour-shirt-all-over-printing', 'Casual long sleeve vintage tour shirt all-over printing', 810, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP033', 'Women''s Straight POLO Shirt All-Over Printing', 'womens-straight-polo-shirt-all-over-printing', 'Women''s straight polo shirt all-over printing', 874, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP034', 'DTG 150gsm Women Custom Tees Dual-sided Printing', 'dtg-150gsm-women-custom-tees-dual-sided-printing', 'DTG 150gsm women custom tees dual-sided printing', 705, 150, '4.4 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP035', 'V-neck Women Top with Quarter Sleeve All-Over Printing', 'v-neck-women-top-with-quarter-sleeve-all-over-printing', 'V-neck women top with quarter sleeve all-over printing', 853, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP036', 'Custom Zipper T-Shirts', 'custom-zipper-t-shirts', 'Custom zipper t-shirts', 761, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP037', 'DTG 255gsm Cotton Women''s Customize Hoodie with Pocket', 'dtg-255gsm-cotton-womens-customize-hoodie-with-pocket', 'DTG 255gsm cotton women''s customize hoodie with pocket', 1024, 255, '7.5 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP038', 'DTG 255gsm Cotton Women''s Hoodie with Pocket Dual-sided', 'dtg-255gsm-cotton-womens-hoodie-with-pocket-dual-sided', 'DTG 255gsm cotton women''s hoodie with pocket dual-sided', 1217, 255, '7.5 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP039', '160gsm Lightweight Women''s Hoodie All-Over Printing', '160gsm-lightweight-womens-hoodie-all-over-printing', '160gsm lightweight women''s hoodie all-over printing', 484, 160, '4.7 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP040', 'DTG 150gsm Women''s T-shirt with Short Sleeves', 'dtg-150gsm-womens-t-shirt-with-short-sleeves', 'DTG 150gsm women''s t-shirt with short sleeves', 420, 150, '4.4 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP041', 'DTF 190gsm Women Washed Vintage T-Shirt Front Printing', 'dtf-190gsm-women-washed-vintage-t-shirt-front-printing', 'DTF 190gsm women washed vintage t-shirt front printing', 653, 190, '5.6 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP042', 'DTG 190gsm Women Washed Vintage T-Shirt Front Printing', 'dtg-190gsm-women-washed-vintage-t-shirt-front-printing', 'DTG 190gsm women washed vintage t-shirt front printing', 833, 190, '5.6 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP043', 'Sleeveless Vest Dual-sided Printing', 'sleeveless-vest-dual-sided-printing', 'Sleeveless vest dual-sided printing', 1112, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP044', '180gsm Faux Cotton Custom Short Sleeve T-Shirt', '180gsm-faux-cotton-custom-short-sleeve-t-shirt', '180gsm faux cotton custom short sleeve t-shirt', 523, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP045', 'Women''s Long Sleeve Sun Protection Shirt UPF 40 UV Rash Guard', 'womens-long-sleeve-sun-protection-shirt-upf-40-uv-rash-guard', 'Women''s long sleeve sun protection shirt upf 40 uv rash guard', 699, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP046', 'UPF50+ 180gsm Cooling Polyester Ruffle V-Neck T-Shirt', 'upf50-180gsm-cooling-polyester-ruffle-v-neck-t-shirt', 'UPF50+ 180gsm cooling polyester ruffle v-neck t-shirt', 624, 180, '5.3 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP047', '160gsm Ice Silk V Neck Short-Sleeve Women Shirt', '160gsm-ice-silk-v-neck-short-sleeve-women-shirt', '160gsm ice silk v neck short-sleeve women shirt', 510, 160, '4.7 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP048', 'Strapless Women Tube Top Y2K Bandeau', 'strapless-women-tube-top-y2k-bandeau', 'Strapless women tube top y2k bandeau', 403, 140, '4.1 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP049', '180gsm Plus Size Round-neck Short Sleeve Dress', '180gsm-plus-size-round-neck-short-sleeve-dress', '180gsm plus size round-neck short sleeve dress', 827, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP050', 'Asymmetrical Hem Shirt All-Over Printing', 'asymmetrical-hem-shirt-all-over-printing', 'Asymmetrical hem shirt all-over printing', 1127, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP051', 'Polar Fleece Double-Zip Jacket All-Over Printing', 'polar-fleece-double-zip-jacket-all-over-printing', 'Polar fleece double-zip jacket all-over printing', 2267, 350, '10.3 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP052', 'Long-Sleeve Raglan T-Shirt for Women', 'long-sleeve-raglan-t-shirt-for-women', 'Long-sleeve raglan t-shirt for women', 984, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP053', 'Loose-Fit 3/4 Sleeve Boat Neck T-Shirt', 'loose-fit-3-4-sleeve-boat-neck-t-shirt', 'Loose-fit 3/4 sleeve boat neck t-shirt', 767, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP054', 'Sleeveless Ankle-length Dress', 'sleeveless-ankle-length-dress', 'Sleeveless ankle-length dress', 1067, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP055', 'Short Sleeve V Neck Lovely Dress', 'short-sleeve-v-neck-lovely-dress', 'Short sleeve v neck lovely dress', 1078, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP056', 'Slim Fit Spaghetti Strap Dress for Women', 'slim-fit-spaghetti-strap-dress-for-women', 'Slim fit spaghetti strap dress for women', 531, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP057', '180gsm Sleeveless Dress for Women', '180gsm-sleeveless-dress-for-women', '180gsm sleeveless dress for women', 510, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP058', 'Women Baseball Jersey', 'women-baseball-jersey', 'Women baseball jersey', 767, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP059', 'DTG 190gsm Cotton Summer Short Sleeve T-Shirts for Women', 'dtg-190gsm-cotton-summer-short-sleeve-t-shirts-for-women', 'DTG 190gsm cotton summer short sleeve t-shirts for women', 999, 190, '5.6 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP060', '233gsm Button-Down Polo Shirt for Women', '233gsm-button-down-polo-shirt-for-women', '233gsm button-down polo shirt for women', 671, 233, '6.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP061', '180gsm Slit Fitted Camisole Cheongsam', '180gsm-slit-fitted-camisole-cheongsam', '180gsm slit fitted camisole cheongsam', 778, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP062', '180gsm Women''s Raglan T-shirt', '180gsm-womens-raglan-t-shirt', '180gsm women''s raglan t-shirt', 527, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP063', '180gsm Women''s Baseball Jacket', '180gsm-womens-baseball-jacket', '180gsm women''s baseball jacket', 934, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP064', '180gsm Women''s Ice Silk Top with Half-Sleeve', '180gsm-womens-ice-silk-top-with-half-sleeve', '180gsm women''s ice silk top with half-sleeve', 617, 180, '5.3 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP065', '180gsm Women''s Cool Touch Fitted Quick Dry Top', '180gsm-womens-cool-touch-fitted-quick-dry-top', '180gsm women''s cool touch fitted quick dry top', 1089, 180, '5.3 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP066', '180gsm Women''s Long Sleeve Quick Dry Top', '180gsm-womens-long-sleeve-quick-dry-top', '180gsm women''s long sleeve quick dry top', 831, 180, '5.3 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP067', '180gsm V-neck Dress for Women', '180gsm-v-neck-dress-for-women', '180gsm v-neck dress for women', 741, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP068', '140gsm Women''s Sleeveless Polo Shirt', '140gsm-womens-sleeveless-polo-shirt', '140gsm women''s sleeveless polo shirt', 553, 140, '4.1 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP069', 'Women''s Stand-Up Collar Fleece Jacket', 'womens-stand-up-collar-fleece-jacket', 'Women''s stand-up collar fleece jacket', 956, 300, '8.8 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP070', 'Stand-up Collar Fleece Casual Jacket', 'stand-up-collar-fleece-casual-jacket', 'Stand-up collar fleece casual jacket', 2739, 350, '10.3 oz', 'Polyester', '2-3 days', true),
-- B2. CUSTOM HOODIES & SWEATSHIRTS
((select id from product_categories where slug = 'womens-tops'), 'CP071', '280gsm Custom Best Hoodies Double-Layer Cap Women''s Hoodies', '280gsm-custom-best-hoodies-double-layer-cap-womens-hoodies', '280gsm custom best hoodies double-layer cap women''s hoodies', 992, 280, '8.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP072', 'DTF 255gsm Custom Designed Women''s Hoodies Front Prints', 'dtf-255gsm-custom-designed-womens-hoodies-front-prints', 'DTF 255gsm custom designed women''s hoodies front prints', 1003, 255, '7.5 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP073', 'DTF 255gsm Custom Hoodies for Women Dual-Sided Prints', 'dtf-255gsm-custom-hoodies-for-women-dual-sided-prints', 'DTF 255gsm custom hoodies for women dual-sided prints', 1217, 255, '7.5 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP074', '230gsm Drop shoulder Hoodie All-Over Printing', '230gsm-drop-shoulder-hoodie-all-over-printing', '230gsm drop shoulder hoodie all-over printing', 724, 230, '6.8 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP075', 'DTG 255gsm Cotton Printed Hoodie for Women Front Printing', 'dtg-255gsm-cotton-printed-hoodie-for-women-front-printing', 'DTG 255gsm cotton printed hoodie for women front printing', 1003, 255, '7.5 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP076', '230gsm Women''s Graphic Hoodie All-Over Printing', '230gsm-womens-graphic-hoodie-all-over-printing', '230gsm women''s graphic hoodie all-over printing', 684, 230, '6.8 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP077', '230gsm Full Zipper Long Sleeve Hoodie All-Over Printing', '230gsm-full-zipper-long-sleeve-hoodie-all-over-printing', '230gsm full zipper long sleeve hoodie all-over printing', 1363, 230, '6.8 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP078', '230gsm Hooded Pullover All-Over Printing', '230gsm-hooded-pullover-all-over-printing', '230gsm hooded pullover all-over printing', 1110, 230, '6.8 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP079', '230gsm Poncho-style Long Sleeve Hoodie Irregular Hem', '230gsm-poncho-style-long-sleeve-hoodie-irregular-hem', '230gsm poncho-style long sleeve hoodie irregular hem', 1277, 230, '6.8 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP080', '230gsm Lady Hoodie with Double-layer Cap', '230gsm-lady-hoodie-with-double-layer-cap', '230gsm lady hoodie with double-layer cap', 705, 230, '6.8 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP081', '230gsm Hoodie for Women with Double-layer Cap', '230gsm-hoodie-for-women-with-double-layer-cap', '230gsm hoodie for women with double-layer cap', 763, 230, '6.8 oz', 'Cotton', '2-3 days', true),
-- B3. CUSTOM BOTTOMS
((select id from product_categories where slug = 'womens-bottoms'), 'CP082', 'Loose High Waisted Shorts All-Over Printing', 'loose-high-waisted-shorts-all-over-printing', 'Loose high waisted shorts all-over printing', 746, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP083', 'Custom Printed Honeycomb Textured Yoga Pants for Women', 'custom-printed-honeycomb-textured-yoga-pants-for-women', 'Custom printed honeycomb textured yoga pants for women', 1014, 220, '6.5 oz', 'Spandex', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP084', 'Baggy Pants for Women All-Over Printing', 'baggy-pants-for-women-all-over-printing', 'Baggy pants for women all-over printing', 703, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP085', 'Custom Printed Yoga Pants with 2 Pockets All-Over Printing', 'custom-printed-yoga-pants-with-2-pockets-all-over-printing', 'Custom printed yoga pants with 2 pockets all-over printing', 1131, 220, '6.5 oz', 'Spandex', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP086', 'Custom Print Patterned Yoga Pants with 2 Pockets', 'custom-print-patterned-yoga-pants-with-2-pockets', 'Custom print patterned yoga pants with 2 pockets', 870, 220, '6.5 oz', 'Spandex', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP087', 'Personalized Drawstring Yoga Pants Straight Baggy', 'personalized-drawstring-yoga-pants-straight-baggy', 'Personalized drawstring yoga pants straight baggy', 634, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP088', 'Women''s Jogger Sweatpants All-Over Printing', 'womens-jogger-sweatpants-all-over-printing', 'Women''s jogger sweatpants all-over printing', 726, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP089', 'Hot Yoga Pants for Women All-Over Printing', 'hot-yoga-pants-for-women-all-over-printing', 'Hot yoga pants for women all-over printing', 1003, 220, '6.5 oz', 'Spandex', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP090', 'Women Yoga Shorts All-Over Printing', 'women-yoga-shorts-all-over-printing', 'Women yoga shorts all-over printing', 660, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP091', 'Bell Bottoms All-Over Printing', 'bell-bottoms-all-over-printing', 'Bell bottoms all-over printing', 512, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP092', '110gsm Yoga Knickerbockers All-Over Printing', '110gsm-yoga-knickerbockers-all-over-printing', '110gsm yoga knickerbockers all-over printing', 735, 110, '3.2 oz', 'Spandex', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP093', 'Women Workout Yoga Pants with Lines', 'women-workout-yoga-pants-with-lines', 'Women workout yoga pants with lines', 874, 220, '6.5 oz', 'Spandex', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP094', '250gsm Knee-Length Yoga Shorts All-over Printing', '250gsm-knee-length-yoga-shorts-all-over-printing', '250gsm knee-length yoga shorts all-over printing', 917, 250, '7.4 oz', 'Spandex', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP095', 'Anti-peep Skort with Pocket', 'anti-peep-skort-with-pocket', 'Anti-peep skort with pocket', 549, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP096', '170gsm Faux Cotton Drawstring Wide Leg Pajama Pants', '170gsm-faux-cotton-drawstring-wide-leg-pajama-pants', '170gsm faux cotton drawstring wide leg pajama pants', 699, 170, '5.0 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP097', 'DTG 190gsm Cotton Pajama Pants for Women', 'dtg-190gsm-cotton-pajama-pants-for-women', 'DTG 190gsm cotton pajama pants for women', 1127, 190, '5.6 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP098', 'Women''s Home Pajamas Pants All-Over Printing', 'womens-home-pajamas-pants-all-over-printing', 'Women''s home pajamas pants all-over printing', 756, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP099', '180gsm Women''s Boxer Briefs', '180gsm-womens-boxer-briefs', '180gsm women''s boxer briefs', 420, 180, '5.3 oz', 'Cotton', '2-3 days', true),
-- B4. CUSTOM DRESSES
((select id from product_categories where slug = 'womens-dresses'), 'CP100', 'Sleeveless Ankle-length Dress All-Over Printing', 'sleeveless-ankle-length-dress-all-over-printing', 'Sleeveless ankle-length dress all-over printing', 1024, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP101', 'V-Neck Baggy Dress with Pocket', 'v-neck-baggy-dress-with-pocket', 'V-neck baggy dress with pocket', 831, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP102', 'Summer Sweet Bowknot Dress All-Over Printing', 'summer-sweet-bowknot-dress-all-over-printing', 'Summer sweet bowknot dress all-over printing', 1277, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP103', 'Round Neck Sleeveless Dress Styles', 'round-neck-sleeveless-dress-styles', 'Round neck sleeveless dress styles', 703, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP104', 'Ankle-length Slip Dress All-Over Printing', 'ankle-length-slip-dress-all-over-printing', 'Ankle-length slip dress all-over printing', 1024, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP105', 'V-neck 3/4 Sleeve Dress with Pockets', 'v-neck-3-4-sleeve-dress-with-pockets', 'V-neck 3/4 sleeve dress with pockets', 806, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP106', 'One Shoulder Split Dress All-Over Printing', 'one-shoulder-split-dress-all-over-printing', 'One shoulder split dress all-over printing', 896, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP107', '230gsm Long Sleeve Hoodie Dress All-Over Printing', '230gsm-long-sleeve-hoodie-dress-all-over-printing', '230gsm long sleeve hoodie dress all-over printing', 1131, 230, '6.8 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP108', 'Short Sleeve V Neck Lovely Dress All-Over Printing', 'short-sleeve-v-neck-lovely-dress-all-over-printing', 'Short sleeve v neck lovely dress all-over printing', 1003, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP109', 'Round Neck Short Sleeve Dress All-Over Printing', 'round-neck-short-sleeve-dress-all-over-printing', 'Round neck short sleeve dress all-over printing', 1106, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP110', 'Cutout Bodycon Slim Fit Dress All-Over Printing', 'cutout-bodycon-slim-fit-dress-all-over-printing', 'Cutout bodycon slim fit dress all-over printing', 1003, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP111', 'Sleeveless Ladies Tank Dress All-Over Printing', 'sleeveless-ladies-tank-dress-all-over-printing', 'Sleeveless ladies tank dress all-over printing', 808, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP112', 'V Neck Sleeveless Dress All-Over Printing', 'v-neck-sleeveless-dress-all-over-printing', 'V neck sleeveless dress all-over printing', 806, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP113', 'V-neck Short Sleeve T-Shirt All-Over Printing', 'v-neck-short-sleeve-t-shirt-all-over-printing', 'V-neck short sleeve t-shirt all-over printing', 591, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP114', 'V-neck Loose Long Sleeve T-shirt All-Over Printing', 'v-neck-loose-long-sleeve-t-shirt-all-over-printing', 'V-neck loose long sleeve t-shirt all-over printing', 806, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP115', 'Plus Size V-neck Long Sleeve Dress All-Over Printing', 'plus-size-v-neck-long-sleeve-dress-all-over-printing', 'Plus size v-neck long sleeve dress all-over printing', 849, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP116', 'Spaghetti Strap Dress for Women All-Over Printing', 'spaghetti-strap-dress-for-women-all-over-printing', 'Spaghetti strap dress for women all-over printing', 1106, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP117', 'Turtle Neck Long Dress for Women All-Over Printing', 'turtle-neck-long-dress-for-women-all-over-printing', 'Turtle neck long dress for women all-over printing', 1191, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP118', 'Loose Long-sleeve Dress with Pockets', 'loose-long-sleeve-dress-with-pockets', 'Loose long-sleeve dress with pockets', 806, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP119', 'Sleeveless High Waist Dress All-Over Printing', 'sleeveless-high-waist-dress-all-over-printing', 'Sleeveless high waist dress all-over printing', 1380, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP120', 'Long Dress Set All-Over Printing', 'long-dress-set-all-over-printing', 'Long dress set all-over printing', 981, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP121', 'Women Slim Fit Slip Dress', 'women-slim-fit-slip-dress', 'Women slim fit slip dress', 767, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP122', 'Round Neck Long Sleeve Dress with Pocket', 'round-neck-long-sleeve-dress-with-pocket', 'Round neck long sleeve dress with pocket', 981, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP123', 'Long Sleeve Dress All-Over Printing', 'long-sleeve-dress-all-over-printing', 'Long sleeve dress all-over printing', 741, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP124', 'Spaghetti Strap Dress All-Over Printing', 'spaghetti-strap-dress-all-over-printing-alt', 'Spaghetti strap dress all-over printing', 1245, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP125', 'Round Neck 3/4 Sleeve Long Dress', 'round-neck-3-4-sleeve-long-dress', 'Round neck 3/4 sleeve long dress', 1046, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP126', '230gsm Wide Round Neck 3/4 Sleeve Long Dress', '230gsm-wide-round-neck-3-4-sleeve-long-dress', '230gsm wide round neck 3/4 sleeve long dress', 1346, 230, '6.8 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP127', '250gsm Tank Top Pocket Dress', '250gsm-tank-top-pocket-dress', '250gsm tank top pocket dress', 677, 250, '7.4 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP128', 'Cheerleader Dress for Women', 'cheerleader-dress-for-women', 'Cheerleader dress for women', 574, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP129', '300gsm Women''s Long Sleeve Sweater Dress', '300gsm-womens-long-sleeve-sweater-dress', '300gsm women''s long sleeve sweater dress', 891, 300, '8.8 oz', 'Cotton', '2-3 days', true),
-- B5. CUSTOM ACTIVWEAR
((select id from product_categories where slug = 'womens-activewear'), 'CP130', 'Custom Printed Patterned Ribbed Yoga Sets All-Over Printing', 'custom-printed-patterned-ribbed-yoga-sets-all-over-printing', 'Custom printed patterned ribbed yoga sets all-over printing', 853, 220, '6.5 oz', 'Spandex', '2-3 days', true),
((select id from product_categories where slug = 'womens-activewear'), 'CP131', 'Custom Printed Yoga Tank Tops All-Over Printing', 'custom-printed-yoga-tank-tops-all-over-printing', 'Custom printed yoga tank tops all-over printing', 724, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-activewear'), 'CP132', 'Custom Printed Yoga Workout Outfits All-Over Printing', 'custom-printed-yoga-workout-outfits-all-over-printing', 'Custom printed yoga workout outfits all-over printing', 1069, 220, '6.5 oz', 'Spandex', '2-3 days', true),
((select id from product_categories where slug = 'womens-activewear'), 'CP133', 'Custom Sports Bra Designs Yoga Support Bras', 'custom-sports-bra-designs-yoga-support-bras', 'Custom sports bra designs yoga support bras', 714, 180, '5.3 oz', 'Spandex', '2-3 days', true),
((select id from product_categories where slug = 'womens-activewear'), 'CP134', 'Custom Printed Patterned Yoga Sports Bra', 'custom-printed-patterned-yoga-sports-bra', 'Custom printed patterned yoga sports bra', 714, 180, '5.3 oz', 'Spandex', '2-3 days', true),
((select id from product_categories where slug = 'womens-activewear'), 'CP135', '1/4 Zipper Long Sleeve Zip Gym Top All-Over Printing', '1-4-zipper-long-sleeve-zip-gym-top-all-over-printing', '1/4 zipper long sleeve zip gym top all-over printing', 992, 230, '6.8 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-activewear'), 'CP136', 'Sports Yoga Bra All-Over Printing', 'sports-yoga-bra-all-over-printing', 'Sports yoga bra all-over printing', 669, 180, '5.3 oz', 'Spandex', '2-3 days', true),
((select id from product_categories where slug = 'womens-activewear'), 'CP137', 'Workout Yoga Set', 'workout-yoga-set', 'Workout yoga set', 870, 220, '6.5 oz', 'Spandex', '2-3 days', true),
((select id from product_categories where slug = 'womens-activewear'), 'CP138', 'Workout Yoga Set All-over Printing', 'workout-yoga-set-all-over-printing', 'Workout yoga set all-over printing', 1131, 220, '6.5 oz', 'Spandex', '2-3 days', true),
((select id from product_categories where slug = 'womens-activewear'), 'CP139', 'Workout Sports Bra for Women', 'workout-sports-bra-for-women', 'Workout sports bra for women', 497, 180, '5.3 oz', 'Spandex', '2-3 days', true),
((select id from product_categories where slug = 'womens-activewear'), 'CP140', 'Workout Crop Yoga Tank Top', 'workout-crop-yoga-tank-top', 'Workout crop yoga tank top', 853, 180, '5.3 oz', 'Cotton', '2-3 days', true),
-- B6. CUSTOM SWIMWEAR
((select id from product_categories where slug = 'womens-swimwear'), 'CP141', 'Swimsuit Cover-up All-Over Printing', 'swimsuit-cover-up-all-over-printing', 'Swimsuit cover-up all-over printing', 1363, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP142', 'Cover-up Dress for Swimwear All-Over Printing', 'cover-up-dress-for-swimwear-all-over-printing', 'Cover-up dress for swimwear all-over printing', 1245, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP143', 'Women''s Halter One-Piece Swimsuits All-Over Printing', 'womens-halter-one-piece-swimsuits-all-over-printing', 'Women''s halter one-piece swimsuits all-over printing', 1131, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP144', 'Beach Wrap Skirt All-Over Printing', 'beach-wrap-skirt-all-over-printing', 'Beach wrap skirt all-over printing', 403, 140, '4.1 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP145', 'Halter Tie Front Bikini Top All-Over Printing', 'halter-tie-front-bikini-top-all-over-printing', 'Halter tie front bikini top all-over printing', 576, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP146', 'Halter Tie Front Bikini Set All-Over Printing', 'halter-tie-front-bikini-set-all-over-printing', 'Halter tie front bikini set all-over printing', 853, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP147', 'Two Piece Halter Swimsuit All-Over Printing', 'two-piece-halter-swimsuit-all-over-printing', 'Two piece halter swimsuit all-over printing', 853, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP148', 'Halter Triangle Bikini All-Over Printing', 'halter-triangle-bikini-all-over-printing', 'Halter triangle bikini all-over printing', 939, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP149', '2-Piece Women''s Halter Tankini All-Over Printing', '2-piece-womens-halter-tankini-all-over-printing', '2-piece women''s halter tankini all-over printing', 1196, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP150', 'Tankini Two Piece Swimsuit Top Printed', 'tankini-two-piece-swimsuit-top-printed', 'Tankini two piece swimsuit top printed', 1260, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP151', 'Women''s Two Piece Swimsuit High Neck Halter Top', 'womens-two-piece-swimsuit-high-neck-halter-top', 'Women''s two piece swimsuit high neck halter top', 962, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP152', '2-Piece Ruffle Tankini Swimsuit All-Over Printing', '2-piece-ruffle-tankini-swimsuit-all-over-printing', '2-piece ruffle tankini swimsuit all-over printing', 1256, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP153', 'Women''s Bikini Bottom All-Over Printing', 'womens-bikini-bottom-all-over-printing', 'Women''s bikini bottom all-over printing', 512, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP154', 'Ladies Swim Shorts', 'ladies-swim-shorts', 'Ladies swim shorts', 491, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP155', 'One-Piece Swimsuit All-Over Printing', 'one-piece-swimsuit-all-over-printing', 'One-piece swimsuit all-over printing', 1046, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP156', '2-Piece Women''s Tankini Swimsuit Top Printed', '2-piece-womens-tankini-swimsuit-top-printed', '2-piece women''s tankini swimsuit top printed', 1346, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP157', '2-Piece Women''s Tankini Set High Neck Halter Top', '2-piece-womens-tankini-set-high-neck-halter-top', '2-piece women''s tankini set high neck halter top', 981, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP158', 'Plus Size Halter Tie Front Bikini Set', 'plus-size-halter-tie-front-bikini-set', 'Plus size halter tie front bikini set', 917, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP159', 'Plus Size Two Piece Swimsuit High Neck Halter Top', 'plus-size-two-piece-swimsuit-high-neck-halter-top', 'Plus size two piece swimsuit high neck halter top', 1026, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP160', 'Women''s One Piece Tummy Control V Neck Swimwear', 'womens-one-piece-tummy-control-v-neck-swimwear', 'Women''s one piece tummy control v neck swimwear', 1069, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP161', 'Plus Size Women Tankini 2-Piece Swimsuit Top Printed', 'plus-size-women-tankini-2-piece-swimsuit-top-printed', 'Plus size women tankini 2-piece swimsuit top printed', 1260, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP162', '2-Piece Bikini Swimwear All-Over Printing', '2-piece-bikini-swimwear-all-over-printing', '2-piece bikini swimwear all-over printing', 639, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP163', '2-Piece Thong Triangle Bikini Set', '2-piece-thong-triangle-bikini-set', '2-piece thong triangle bikini set', 746, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP164', 'Swimming Cap for Women and Men', 'swimming-cap-for-women-and-men', 'Swimming cap for women and men', 317, 100, '2.9 oz', 'Silicone', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP165', 'Plus Size Two Piece Swimsuit with Tankini', 'plus-size-two-piece-swimsuit-with-tankini', 'Plus size two piece swimsuit with tankini', 1560, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP166', 'Plus Size Women''s Halter Bikini Set', 'plus-size-womens-halter-bikini-set', 'Plus size women''s halter bikini set', 917, 180, '5.3 oz', 'Cotton', '2-3 days', true),
-- B7. CUSTOM JUMPSUITS & ROMPERS
((select id from product_categories where slug = 'womens-bodysuits-jumpsuits'), 'CP167', 'Spaghetti Strap Jumpsuit All-Over Printing', 'spaghetti-strap-jumpsuit-all-over-printing', 'Spaghetti strap jumpsuit all-over printing', 1149, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bodysuits-jumpsuits'), 'CP168', 'Tank Top Bodysuit All-Over Printing', 'tank-top-bodysuit-all-over-printing', 'Tank top bodysuit all-over printing', 808, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bodysuits-jumpsuits'), 'CP169', 'Suspender Jumpsuit All-Over Printing', 'suspender-jumpsuit-all-over-printing', 'Suspender jumpsuit all-over printing', 1110, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bodysuits-jumpsuits'), 'CP170', 'High-collar Long-sleeve Bodysuit All-Over Printing', 'high-collar-long-sleeve-bodysuit-all-over-printing', 'High-collar long-sleeve bodysuit all-over printing', 1020, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bodysuits-jumpsuits'), 'CP171', 'Diagonal Shoulder Two Piece Set All-Over Printing', 'diagonal-shoulder-two-piece-set-all-over-printing', 'Diagonal shoulder two piece set all-over printing', 1003, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bodysuits-jumpsuits'), 'CP172', '170gsm Faux Cotton Women Zip up Jumpsuit Pajama', '170gsm-faux-cotton-women-zip-up-jumpsuit-pajama', '170gsm faux cotton women zip up jumpsuit pajama', 1367, 170, '5.0 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bodysuits-jumpsuits'), 'CP173', '250gsm Women Flannel Zip up Jumpsuit Pajama', '250gsm-women-flannel-zip-up-jumpsuit-pajama', '250gsm women flannel zip up jumpsuit pajama', 1431, 250, '7.4 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bodysuits-jumpsuits'), 'CP174', 'Cheerleader Set for Women', 'cheerleader-set-for-women', 'Cheerleader set for women', 827, 180, '5.3 oz', 'Cotton', '2-3 days', true),
-- B8. CUSTOM LOUNGEWEAR & PAJAMAS
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP175', 'Women''s 2-Piece Pajama Set All-Over Printing', 'womens-2-piece-pajama-set-all-over-printing', 'Women''s 2-piece pajama set all-over printing', 1174, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP176', 'Women Long Sleeve Turtleneck Sweater All-Over Printing', 'women-long-sleeve-turtleneck-sweater-all-over-printing', 'Women long sleeve turtleneck sweater all-over printing', 1191, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP177', 'V-Neck Women Night Wear Suit All-Over Printing', 'v-neck-women-night-wear-suit-all-over-printing', 'V-neck women night wear suit all-over printing', 1320, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP178', '310gsm Wearable Sweater et Oversize', '310gsm-wearable-sweater-et-oversize', '310gsm wearable sweater et oversize', 1281, 310, '9.1 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP179', 'Long Sleeve Nightdress All-Over Printing', 'long-sleeve-nightdress-all-over-printing', 'Long sleeve nightdress all-over printing', 741, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP180', 'Long Sleeve Drop Shoulder Open Shirt All-Over Printing', 'long-sleeve-drop-shoulder-open-shirt-all-over-printing', 'Long sleeve drop shoulder open shirt all-over printing', 975, 230, '6.8 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP181', 'Short Sleeve Loungewear Set All-Over Printing', 'short-sleeve-loungewear-set-all-over-printing', 'Short sleeve loungewear set all-over printing', 977, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP182', 'UPF50+ 180gsm Cooling Short Sleeve Loungewear Set', 'upf50-180gsm-cooling-short-sleeve-loungewear-set', 'UPF50+ 180gsm cooling short sleeve loungewear set', 1084, 180, '5.3 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP183', '120gsm Worn-effect Fabric Women Satin Pajama Set', '120gsm-worn-effect-fabric-women-satin-pajama-set', '120gsm worn-effect fabric women satin pajama set', 1196, 120, '3.5 oz', 'Satin', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP184', '160gsm One Size Ice Silk Nightdress', '160gsm-one-size-ice-silk-nightdress', '160gsm one size ice silk nightdress', 639, 160, '4.7 oz', 'Silk', '2-3 days', true),
-- B9. CUSTOM LINGERIE
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP185', 'Tanga for Women All-Over Printing', 'tanga-for-women-all-over-printing', 'Tanga for women all-over printing', 377, 140, '4.1 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP186', 'Multi-Strap Lace Briefs All-Over Printing', 'multi-strap-lace-briefs-all-over-printing', 'Multi-strap lace briefs all-over printing', 531, 180, '5.3 oz', 'Lace', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP187', 'Sexy One Piece Women Lingerie Bodysuit Deep V Teddy', 'sexy-one-piece-women-lingerie-bodysuit-deep-v-teddy', 'Sexy one piece women lingerie bodysuit deep v teddy', 634, 180, '5.3 oz', 'Lace', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP188', '160gsm Sexy G String Thong for Women', '160gsm-sexy-g-string-thong-for-women', '160gsm sexy g string thong for women', 463, 160, '4.7 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP189', 'Sexy G String Thong for Women', 'sexy-g-string-thong-for-women', 'Sexy g string thong for women', 639, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP190', 'Thong Panties All-Over Printing', 'thong-panties-all-over-printing', 'Thong panties all-over printing', 441, 140, '4.1 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP191', 'Ice Silk Women Underwear Thongs', 'ice-silk-women-underwear-thongs', 'Ice silk women underwear thongs', 403, 140, '4.1 oz', 'Silk', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP192', 'DTG 190gsm Cotton Thong Underwear for Women', 'dtg-190gsm-cotton-thong-underwear-for-women', 'DTG 190gsm cotton thong underwear for women', 549, 190, '5.6 oz', 'Cotton', '2-3 days', true),
-- B10. CUSTOM JACKETS & OUTERWEAR
((select id from product_categories where slug = 'womens-outerwear'), 'CP193', 'Women''s Zipper Jacket All-Over Printing', 'womens-zipper-jacket-all-over-printing', 'Women''s zipper jacket all-over printing', 831, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-outerwear'), 'CP194', '300gsm Women''s Drop Shoulder Cardigan', '300gsm-womens-drop-shoulder-cardigan', '300gsm women''s drop shoulder cardigan', 896, 300, '8.8 oz', 'Cotton', '2-3 days', true),
-- B11. ADDITIONAL CUSTOM PRINT-ON-DEMAND ITEMS (227 SKUs)
-- Premium items
((select id from product_categories where slug = 'womens-tops'), 'CP195', 'Asymmetrical Hem Shirt All-Over Printing', 'asymmetrical-hem-shirt-all-over-printing', 'Asymmetrical hem shirt all-over printing', 1127, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-outerwear'), 'CP196', 'Polar Fleece Double-Zip Jacket All-Over Printing', 'polar-fleece-double-zip-jacket-all-over-printing', 'Polar fleece double-zip jacket all-over printing', 2267, null, null, 'Fleece', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP197', 'Long-Sleeve Raglan T-Shirt for Women', 'long-sleeve-raglan-t-shirt-for-women', 'Long-sleeve raglan t-shirt for women', 984, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP198', 'Loose-Fit 3/4 Sleeve Boat Neck T-Shirt', 'loose-fit-3-4-sleeve-boat-neck-t-shirt', 'Loose-fit 3/4 sleeve boat neck t-shirt', 767, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP199', 'Round Neck 3/4 Sleeve Long Dress', 'round-neck-3-4-sleeve-long-dress', 'Round neck 3/4 sleeve long dress', 1046, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP200', '230gsm Wide Round Neck 3/4 Sleeve Long Dress', '230gsm-wide-round-neck-3-4-sleeve-long-dress', '230gsm wide round neck 3/4 sleeve long dress', 1346, 230, '6.8 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP201', 'Sleeveless Ankle-length Dress', 'sleeveless-ankle-length-dress', 'Sleeveless ankle-length dress', 1067, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP202', 'Short Sleeve V Neck Lovely Dress', 'short-sleeve-v-neck-lovely-dress', 'Short sleeve v neck lovely dress', 1078, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP203', '180gsm Women''s Raglan T-shirt', '180gsm-womens-raglan-t-shirt', '180gsm women''s raglan t-shirt', 527, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP204', '180gsm Women''s Ice Silk Top with Half-Sleeve', '180gsm-womens-ice-silk-top-half-sleeve', '180gsm women''s ice silk top with half-sleeve', 617, 180, '5.3 oz', 'Silk', '2-3 days', true),
((select id from product_categories where slug = 'womens-activewear'), 'CP205', '180gsm Women''s Cool Touch Fitted Quick Dry Top', '180gsm-womens-cool-touch-fitted-quick-dry-top', '180gsm women''s cool touch fitted quick dry top', 1089, 180, '5.3 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP206', '180gsm Women''s Long Sleeve Quick Dry Top', '180gsm-womens-long-sleeve-quick-dry-top', '180gsm women''s long sleeve quick dry top', 831, 180, '5.3 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-outerwear'), 'CP207', 'Stand-up Collar Fleece Casual Jacket', 'stand-up-collar-fleece-casual-jacket', 'Stand-up collar fleece casual jacket', 2739, null, null, 'Fleece', '2-3 days', true),
((select id from product_categories where slug = 'womens-outerwear'), 'CP208', 'Winter Quilted Long-Sleeve Hooded Outerwear', 'winter-quilted-long-sleeve-hooded-outerwear', 'Winter quilted long-sleeve hooded outerwear', 3724, null, null, 'Quilted', '2-3 days', true),
((select id from product_categories where slug = 'womens-outerwear'), 'CP209', 'Fleece Sweatshirt Short Jacket for Women', 'fleece-sweatshirt-short-jacket-for-women', 'Fleece sweatshirt short jacket for women', 1346, null, null, 'Fleece', '2-3 days', true),
((select id from product_categories where slug = 'womens-outerwear'), 'CP210', 'Double-Layer Hooded Top', 'double-layer-hooded-top', 'Double-layer hooded top', 2331, null, null, 'Fleece', '2-3 days', true),
((select id from product_categories where slug = 'womens-outerwear'), 'CP211', 'Full-Edge Binding Slim-Fit Jacket', 'full-edge-binding-slim-fit-jacket', 'Full-edge binding slim-fit jacket', 1646, null, null, 'Fleece', '2-3 days', true),
((select id from product_categories where slug = 'womens-hoodies'), 'CP212', 'Double-Layered Hoodie with Pockets', 'double-layered-hoodie-with-pockets', 'Double-layered hoodie with pockets', 1699, null, null, 'Fleece', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP213', '180gsm Cropped T-Shirt', '180gsm-cropped-t-shirt', '180gsm cropped t-shirt', 570, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP214', 'Men''s POLO Shirt', 'mens-polo-shirt', 'Men''s polo shirt', 1003, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP215', 'Women''s POLO Shirt', 'womens-polo-shirt', 'Women''s polo shirt', 1003, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP216', '200gsm Double Layer V-Neck Top', '200gsm-double-layer-v-neck-top', '200gsm double layer v-neck top', 827, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-activewear'), 'CP217', '250gsm Women''s Yoga Sports Tank', '250gsm-womens-yoga-sports-tank', '250gsm women''s yoga sports tank', 960, 250, '7.4 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-activewear'), 'CP218', '180gsm Yoga Jogger Pants', '180gsm-yoga-jogger-pants', '180gsm yoga jogger pants', 913, 180, '5.3 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP219', 'Women''s POLO Tank Top', 'womens-polo-tank-top', 'Women''s polo tank top', 729, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-activewear'), 'CP220', 'High Waisted Quick Drying Shorts', 'high-waisted-quick-drying-shorts', 'High waisted quick drying shorts', 864, null, null, 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP221', 'High Neck Tank Top', 'high-neck-tank-top', 'High neck tank top', 673, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP222', '200gsm V Neck Sleeveless Dress', '200gsm-v-neck-sleeveless-dress', '200gsm v neck sleeveless dress', 810, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP223', '200gsm Women''s Square Neckline Ruffle Dress', '200gsm-womens-square-neckline-ruffle-dress', '200gsm women''s square neckline ruffle dress', 898, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP224', '135gsm Button Down Collar Dress', '135gsm-button-down-collar-dress', '135gsm button down collar dress', 1241, 135, '4.0 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP225', '250gsm Women''s 2-Button POLO Shirt', '250gsm-womens-2-button-polo-shirt', '250gsm women''s 2-button polo shirt', 896, 250, '7.4 oz', 'Cotton', '2-3 days', true),
-- Non-premium items
((select id from product_categories where slug = 'womens-dresses'), 'CP226', '250gsm Tank Top Pocket Dress', '250gsm-tank-top-pocket-dress', '250gsm tank top pocket dress', 677, 250, '7.4 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP227', 'Slim Fit Spaghetti Strap Dress for Women', 'slim-fit-spaghetti-strap-dress-for-women', 'Slim fit spaghetti strap dress for women', 531, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP228', '180gsm Sleeveless Dress for Women', '180gsm-sleeveless-dress-for-women', '180gsm sleeveless dress for women', 510, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-activewear'), 'CP229', 'Cheerleader Set for Women', 'cheerleader-set-for-women', 'Cheerleader set for women', 827, null, null, 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP230', 'Cheerleader Dress for Women', 'cheerleader-dress-for-women', 'Cheerleader dress for women', 574, null, null, 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP231', 'Women Baseball Jersey', 'women-baseball-jersey', 'Women baseball jersey', 767, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP232', 'DTG 190gsm Cotton Summer Short Sleeve T-Shirts for Women', 'dtg-190gsm-cotton-summer-short-sleeve-t-shirts-for-women', 'DTG 190gsm cotton summer short sleeve t-shirts for women', 999, 190, '5.6 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP233', 'DTG 190gsm Cotton Pajama Pants for Women', 'dtg-190gsm-cotton-pajama-pants-for-women', 'DTG 190gsm cotton pajama pants for women', 1127, 190, '5.6 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP234', 'DTG 190gsm Cotton Thong Underwear for Women', 'dtg-190gsm-cotton-thong-underwear-for-women', 'DTG 190gsm cotton thong underwear for women', 549, 190, '5.6 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP235', '233gsm Button-Down Polo Shirt for Women', '233gsm-button-down-polo-shirt-for-women', '233gsm button-down polo shirt for women', 671, 233, '6.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-activewear'), 'CP236', 'Workout Crop Yoga Tank Top', 'workout-crop-yoga-tank-top', 'Workout crop yoga tank top', 853, null, null, 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP237', '180gsm Slit Fitted Camisole Cheongsam', '180gsm-slit-fitted-camisole-cheongsam', '180gsm slit fitted camisole cheongsam', 778, 180, '5.3 oz', 'Silk', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP238', '160gsm One Size Ice Silk Nightdress', '160gsm-one-size-ice-silk-nightdress', '160gsm one size ice silk nightdress', 639, 160, '4.7 oz', 'Silk', '2-3 days', true),
((select id from product_categories where slug = 'womens-outerwear'), 'CP239', '180gsm Women''s Baseball Jacket', '180gsm-womens-baseball-jacket', '180gsm women''s baseball jacket', 934, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP240', '300gsm Women''s Long Sleeve Sweater Dress', '300gsm-womens-long-sleeve-sweater-dress', '300gsm women''s long sleeve sweater dress', 891, 300, '8.8 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP241', '180gsm V-neck Dress for Women', '180gsm-v-neck-dress-for-women', '180gsm v-neck dress for women', 741, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP242', '140gsm Women''s Sleeveless Polo Shirt', '140gsm-womens-sleeveless-polo-shirt', '140gsm women''s sleeveless polo shirt', 553, 140, '4.1 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-outerwear'), 'CP243', '300gsm Women''s Drop Shoulder Cardigan', '300gsm-womens-drop-shoulder-cardigan-alt', '300gsm women''s drop shoulder cardigan', 896, 300, '8.8 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-outerwear'), 'CP244', 'Women''s Stand-Up Collar Fleece Jacket', 'womens-stand-up-collar-fleece-jacket', 'Women''s stand-up collar fleece jacket', 956, null, null, 'Fleece', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP245', '180gsm Women''s Boxer Briefs', '180gsm-womens-boxer-briefs', '180gsm women''s boxer briefs', 420, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-hoodies'), 'CP246', '310gsm Adult Hooded Sweatshirt', '310gsm-adult-hooded-sweatshirt', '310gsm adult hooded sweatshirt', 1153, 310, '9.2 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-sweatshirts'), 'CP247', 'DTG 260gsm Women''s Cute Sweatshirt Back Printing', 'dtg-260gsm-womens-cute-sweatshirt-back-printing', 'DTG 260gsm women''s cute sweatshirt back printing', 896, 260, '7.7 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP248', '180gsm Collarless Dress', '180gsm-collarless-dress', '180gsm collarless dress', 784, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP249', '180gsm Women''s V Neck Long Sleeved Top', '180gsm-womens-v-neck-long-sleeved-top', '180gsm women''s v neck long sleeved top', 660, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP250', 'Bikini Swimsuit All-Over Printing', 'bikini-swimsuit-all-over-printing', 'Bikini swimsuit all-over printing', 864, null, null, 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP251', '180gsm Women''s High-Rise Panties', '180gsm-womens-high-rise-panties', '180gsm women''s high-rise panties', 360, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-activewear'), 'CP252', '180gsm Straight-Leg Drawstring Yoga Pants', '180gsm-straight-leg-drawstring-yoga-pants', '180gsm straight-leg drawstring yoga pants', 720, 180, '5.3 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-sweatshirts'), 'CP253', '170gsm Women''s Ruffled Sweatshirt', '170gsm-womens-ruffled-sweatshirt', '170gsm women''s ruffled sweatshirt', 634, 170, '5.0 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP254', '180gsm Women''s Low-Rise Panties', '180gsm-womens-low-rise-panties', '180gsm women''s low-rise panties', 324, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP255', '180gsm Women''s Wide Leg Pant', '180gsm-womens-wide-leg-pant', '180gsm women''s wide leg pant', 720, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP256', '180gsm Women''s Drop Shoulder Shirt', '180gsm-womens-drop-shoulder-shirt', '180gsm women''s drop shoulder shirt', 806, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP257', '180gsm Women''s V Neck Ruffled Sleeve Top', '180gsm-womens-v-neck-ruffled-sleeve-top', '180gsm women''s v neck ruffled sleeve top', 634, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP258', '180gsm Lace Thong', '180gsm-lace-thong', '180gsm lace thong', 381, 180, '5.3 oz', 'Lace', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP259', '120gsm Mediterranean Style V Neck Mid-Sleeve Robe', '120gsm-mediterranean-style-v-neck-mid-sleeve-robe', '120gsm mediterranean style v neck mid-sleeve robe', 1020, 120, '3.5 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP260', '120gsm Mediterranean Style V-Neck Suit', '120gsm-mediterranean-style-v-neck-suit', '120gsm mediterranean style v-neck suit', 1110, 120, '3.5 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP261', '120gsm Women''s Mediterranean Style Set', '120gsm-womens-mediterranean-style-set', '120gsm women''s mediterranean style set', 1513, 120, '3.5 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP262', '180gsm Midi Spaghetti Strap Dress', '180gsm-midi-spaghetti-strap-dress', '180gsm midi spaghetti strap dress', 660, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP263', '180gsm Lace-Trimmed Camisole Nightgown', '180gsm-lace-trimmed-camisole-nightgown', '180gsm lace-trimmed camisole nightgown', 628, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP264', '160gsm Ice Silk Camisole Pajama Set', '160gsm-ice-silk-camisole-pajama-set', '160gsm ice silk camisole pajama set', 1089, 160, '4.7 oz', 'Silk', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP265', '180gsm Ruffled Short-Sleeve Pajama Set', '180gsm-ruffled-short-sleeve-pajama-set', '180gsm ruffled short-sleeve pajama set', 960, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP266', '180gsm Women''s V-Neck Pajama Set', '180gsm-womens-v-neck-pajama-set', '180gsm women''s v-neck pajama set', 1196, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP267', '180gsm V-Neck Short Sleeve Pajama Set', '180gsm-v-neck-short-sleeve-pajama-set', '180gsm v-neck short sleeve pajama set', 999, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP268', '200gsm Women''s 3/4 Sleeve Top', '200gsm-womens-3-4-sleeve-top', '200gsm women''s 3/4 sleeve top', 767, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP269', '200gsm Side Slit Dress', '200gsm-side-slit-dress', '200gsm side slit dress', 939, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP270', '180gsm V-Neck Short Sleeve Top', '180gsm-v-neck-short-sleeve-top', '180gsm v-neck short sleeve top', 531, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP271', 'Short Sleeve Collared Shirt Dress', 'short-sleeve-collared-shirt-dress', 'Short sleeve collared shirt dress', 977, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP272', 'One Piece Swimsuit for Women', 'one-piece-swimsuit-for-women', 'One piece swimsuit for women', 1089, null, null, 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP273', 'Women''s Loose Fit Casual Pants', 'womens-loose-fit-casual-pants', 'Women''s loose fit casual pants', 891, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP274', 'Off the Shoulder Top', 'off-the-shoulder-top', 'Off the shoulder top', 463, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-lingerie-sleep'), 'CP275', '180gsm Women''s Lace Panties', '180gsm-womens-lace-panties', '180gsm women''s lace panties', 381, 180, '5.3 oz', 'Lace', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP276', '180gsm Women''s V Neck Short Sleeve T-Shirt', '180gsm-womens-v-neck-short-sleeve-t-shirt', '180gsm women''s v neck short sleeve t-shirt', 441, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP277', '180gsm Women''s Backless Top', '180gsm-womens-backless-top', '180gsm women''s backless top', 467, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP278', '200gsm Women''s Loungewear Pajama Set', '200gsm-womens-loungewear-pajama-set', '200gsm women''s loungewear pajama set', 1277, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-outerwear'), 'CP279', '300gsm Button-Up Cardigan', '300gsm-button-up-cardigan', '300gsm button-up cardigan', 1196, 300, '8.8 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP280', '100gsm Long Sleeve Mesh T-Shirt', '100gsm-long-sleeve-mesh-t-shirt', '100gsm long sleeve mesh t-shirt', 542, 100, '2.9 oz', 'Mesh', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP281', '200gsm Lace Trim V-Neck 3/4 Sleeve T-Shirt', '200gsm-lace-trim-v-neck-3-4-sleeve-t-shirt', '200gsm lace trim v-neck 3/4 sleeve t-shirt', 748, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP282', 'Chic Strapless Bandana Style Bikini', 'chic-strapless-bandana-style-bikini', 'Chic strapless bandana style bikini', 810, null, null, 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-hoodies'), 'CP283', '170gsm Women''s V Neck Long Sleeve Hoodie', '170gsm-womens-v-neck-long-sleeve-hoodie', '170gsm women''s v neck long sleeve hoodie', 720, 170, '5.0 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-outerwear'), 'CP284', '300gsm Sleeveless Cardigan Vest', '300gsm-sleeveless-cardigan-vest', '300gsm sleeveless cardigan vest', 763, 300, '8.8 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-outerwear'), 'CP285', '170gsm Women''s Casual Blazer', '170gsm-womens-casual-blazer', '170gsm women''s casual blazer', 977, 170, '5.0 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP286', '250gsm Flannel Women''s Sleep Pants', '250gsm-flannel-womens-sleep-pants', '250gsm flannel women''s sleep pants', 789, 250, '7.4 oz', 'Flannel', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP287', 'Sheer Mesh One-Piece Swimsuit', 'sheer-mesh-one-piece-swimsuit', 'Sheer mesh one-piece swimsuit', 1131, null, null, 'Mesh', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP288', '210gsm One Size Flannel Nightdress', '210gsm-one-size-flannel-nightdress', '210gsm one size flannel nightdress', 763, 210, '6.2 oz', 'Flannel', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP289', '210gsm V Neck Tank Top', '210gsm-v-neck-tank-top', '210gsm v neck tank top', 506, 210, '6.2 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP290', '180gsm Puff Short Sleeve Top', '180gsm-puff-short-sleeve-top', '180gsm puff short sleeve top', 699, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-outerwear'), 'CP291', '170gsm Women''s Lightweight Cardigan', '170gsm-womens-lightweight-cardigan', '170gsm women''s lightweight cardigan', 842, 170, '5.0 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP292', 'Women''s Ruffle T-shirt', 'womens-ruffle-t-shirt', 'Women''s ruffle t-shirt', 699, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP293', '180gsm Short Sleeve Nightdress', '180gsm-short-sleeve-nightdress', '180gsm short sleeve nightdress', 553, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-outerwear'), 'CP294', '300gsm Sleeveless Knit Sweater', '300gsm-sleeveless-knit-sweater', '300gsm sleeveless knit sweater', 510, 300, '8.8 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP295', '200gsm Ruffle Sleeve Dress', '200gsm-ruffle-sleeve-dress', '200gsm ruffle sleeve dress', 741, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP296', '180gsm Short Cami Dress', '180gsm-short-cami-dress', '180gsm short cami dress', 617, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP297', '200gsm Women''s Lace Trim Pajama Shorts', '200gsm-womens-lace-trim-pajama-shorts', '200gsm women''s lace trim pajama shorts', 720, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP298', '180gsm Women''s Flare Sleeve Tee', '180gsm-womens-flare-sleeve-tee', '180gsm women''s flare sleeve tee', 510, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP299', '180gsm Lace Trimmed Short Sleeve Nightgown', '180gsm-lace-trimmed-short-sleeve-nightgown', '180gsm lace trimmed short sleeve nightgown', 981, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP300', '200gsm Women''s Ruffled Sleep Pants', '200gsm-womens-ruffled-sleep-pants', '200gsm women''s ruffled sleep pants', 806, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP301', 'Women''s Ruffled Cover Up Dress', 'womens-ruffled-cover-up-dress', 'Women''s ruffled cover up dress', 649, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP302', '180gsm Women''s V Neck Rugby Jersey', '180gsm-womens-v-neck-rugby-jersey', '180gsm women''s v neck rugby jersey', 489, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-activewear'), 'CP303', '180gsm Ruffled Yoga Skort with Pockets', '180gsm-ruffled-yoga-skort-with-pockets', '180gsm ruffled yoga skort with pockets', 613, 180, '5.3 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP304', '195gsm Square Neck One Piece Swimsuit', '195gsm-square-neck-one-piece-swimsuit', '195gsm square neck one piece swimsuit', 896, 195, '5.8 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP305', 'Women''s Ruffled Sleeve One Piece Swimsuit', 'womens-ruffled-sleeve-one-piece-swimsuit', 'Women''s ruffled sleeve one piece swimsuit', 917, null, null, 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP306', '180gsm Women''s Halter Tie Vest', '180gsm-womens-halter-tie-vest', '180gsm women''s halter tie vest', 349, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP307', '100gsm Mesh High Stretch Dress Cover Up', '100gsm-mesh-high-stretch-dress-cover-up', '100gsm mesh high stretch dress cover up', 774, 100, '2.9 oz', 'Mesh', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP308', 'Button Down Shirts for Women', 'button-down-shirts-for-women', 'Button down shirts for women', 789, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP309', '200gsm Square Neck Tank Top', '200gsm-square-neck-tank-top', '200gsm square neck tank top', 649, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP310', '180gsm Ruffled V Neck Dress', '180gsm-ruffled-v-neck-dress', '180gsm ruffled v neck dress', 956, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP311', 'Mesh One-Piece Swimsuit', 'mesh-one-piece-swimsuit', 'Mesh one-piece swimsuit', 913, null, null, 'Mesh', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP312', '200gsm V Neck Camisole', '200gsm-v-neck-camisole', '200gsm v neck camisole', 510, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP313', '200gsm Flared Sleeve T-shirt', '200gsm-flared-sleeve-t-shirt', '200gsm flared sleeve t-shirt', 591, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP314', 'Two-Piece Swimsuit Set', 'two-piece-swimsuit-set', 'Two-piece swimsuit set', 1131, null, null, 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP315', '170gsm Women''s Cuban Collar Pajama Set', '170gsm-womens-cuban-collar-pajama-set', '170gsm women''s cuban collar pajama set', 1320, 170, '5.0 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP316', '180gsm Women''s Short Sleeve Pajama Set', '180gsm-womens-short-sleeve-pajama-set', '180gsm women''s short sleeve pajama set', 1041, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP317', '200gsm Women''s Casual V Neck Dress', '200gsm-womens-casual-v-neck-dress', '200gsm women''s casual v neck dress', 681, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP318', '180gsm Flared Slit Dress', '180gsm-flared-slit-dress', '180gsm flared slit dress', 810, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP319', '120gsm Women''s Ruffle Long Sleeve Robe', '120gsm-womens-ruffle-long-sleeve-robe', '120gsm women''s ruffle long sleeve robe', 934, 120, '3.5 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP320', '150gsm Short Sleeved Wide Leg Pants Set', '150gsm-short-sleeved-wide-leg-pants-set', '150gsm short sleeved wide leg pants set', 874, 150, '4.4 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP321', '120gsm Sleeveless Top and Wide Leg Pants Set', '120gsm-sleeveless-top-and-wide-leg-pants-set', '120gsm sleeveless top and wide leg pants set', 971, 120, '3.5 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP322', '150gsm Strap Top Wide Leg Pants Set', '150gsm-strap-top-wide-leg-pants-set', '150gsm strap top wide leg pants set', 874, 150, '4.4 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP323', '200gsm Lace Trim Pajama Set', '200gsm-lace-trim-pajama-set', '200gsm lace trim pajama set', 741, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP324', '200gsm Ruffled Pajama Set', '200gsm-ruffled-pajama-set', '200gsm ruffled pajama set', 1084, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP325', '200gsm Women''s Button Up Vest', '200gsm-womens-button-up-vest', '200gsm women''s button up vest', 489, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP326', '100gsm High Neck Mesh Top For Women', '100gsm-high-neck-mesh-top-for-women', '100gsm high neck mesh top for women', 553, 100, '2.9 oz', 'Mesh', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP327', '200gsm Casual V Neck Dress For Women', '200gsm-casual-v-neck-dress-for-women', '200gsm casual v neck dress for women', 999, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP328', '180gsm Irregular Hemmed Skirt', '180gsm-irregular-hemmed-skirt', '180gsm irregular hemmed skirt', 613, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP329', '200gsm Women''s High Waisted Pants', '200gsm-womens-high-waisted-pants', '200gsm women''s high waisted pants', 956, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP330', '200gsm Flared Sleeve Dress For Women', '200gsm-flared-sleeve-dress-for-women', '200gsm flared sleeve dress for women', 699, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP331', '190gsm Mesh One Piece Swimsuit For Women', '190gsm-mesh-one-piece-swimsuit-for-women', '190gsm mesh one piece swimsuit for women', 1281, 190, '5.6 oz', 'Mesh', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP332', '190gsm Strap One Piece Swimsuit For Women', '190gsm-strap-one-piece-swimsuit-for-women', '190gsm strap one piece swimsuit for women', 1281, 190, '5.6 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP333', '190gsm Women''s V Neck One Piece Swimsuit', '190gsm-womens-v-neck-one-piece-swimsuit', '190gsm women''s v neck one piece swimsuit', 1281, 190, '5.6 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP334', '180gsm Bat Sleeve Dress For Women', '180gsm-bat-sleeve-dress-for-women', '180gsm bat sleeve dress for women', 699, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP335', '180gsm Women''s Bubble Sleeve T-Shirt', '180gsm-womens-bubble-sleeve-t-shirt', '180gsm women''s bubble sleeve t-shirt', 634, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP336', 'Women''s Square Neck Long Sleeved Shirt', 'womens-square-neck-long-sleeved-shirt', 'Women''s square neck long sleeved shirt', 634, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-hoodies'), 'CP337', '230gsm Off Shoulder Hoodie', '230gsm-off-shoulder-hoodie', '230gsm off shoulder hoodie', 639, 230, '6.8 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bodysuits-jumpsuits'), 'CP338', 'Square Collar Long Sleeved Jumpsuit', 'square-collar-long-sleeved-jumpsuit', 'Square collar long sleeved jumpsuit', 699, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-hoodies'), 'CP339', '170gsm Women''s Button Up Hoodie', '170gsm-womens-button-up-hoodie', '170gsm women''s button up hoodie', 746, 170, '5.0 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP340', '200gsm V-Neck Pajama Set', '200gsm-v-neck-pajama-set', '200gsm v-neck pajama set', 934, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP341', '190gsm Netted Swimsuit Set For Women', '190gsm-netted-swimsuit-set-for-women', '190gsm netted swimsuit set for women', 1367, 190, '5.6 oz', 'Mesh', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP342', '190gsm Sporty Bikini Swimwear Set', '190gsm-sporty-bikini-swimwear-set', '190gsm sporty bikini swimwear set', 939, 190, '5.6 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP343', '190gsm Mesh Splicing One-Piece Swimsuit', '190gsm-mesh-splicing-one-piece-swimsuit', '190gsm mesh splicing one-piece swimsuit', 1003, 190, '5.6 oz', 'Mesh', '2-3 days', true),
((select id from product_categories where slug = 'womens-swimwear'), 'CP344', '190gsm Backless One-Piece Swimsuit', '190gsm-backless-one-piece-swimsuit', '190gsm backless one-piece swimsuit', 1196, 190, '5.6 oz', 'Polyester', '2-3 days', true),
((select id from product_categories where slug = 'womens-sweatshirts'), 'CP345', '170gsm Casual Long Sleeve V-Neck Sweatshirt', '170gsm-casual-long-sleeve-v-neck-sweatshirt', '170gsm casual long sleeve v-neck sweatshirt', 681, 170, '5.0 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-outerwear'), 'CP346', 'Women''s Suit Vest', 'womens-suit-vest', 'Women''s suit vest', 596, null, null, 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP347', 'DTG 100gsm Cotton Women''s Short Sleeved Shirt', 'dtg-100gsm-cotton-womens-short-sleeved-shirt', 'DTG 100gsm cotton women''s short sleeved shirt', 1110, 100, '2.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP348', '100gsm Irregular Shirt For Women', '100gsm-irregular-shirt-for-women', '100gsm irregular shirt for women', 1346, 100, '2.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP349', 'DTG 110gsm Button Down Shirt For Men', 'dtg-110gsm-button-down-shirt-for-men', 'DTG 110gsm button down shirt for men', 1131, 110, '3.2 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-bottoms'), 'CP350', '200gsm Women''s Straight Wide Leg Pants', '200gsm-womens-straight-wide-leg-pants', '200gsm women''s straight wide leg pants', 891, 200, '5.9 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-tops'), 'CP351', '120gsm Lantern Long Sleeve Shirt', '120gsm-lantern-long-sleeve-shirt', '120gsm lantern long sleeve shirt', 896, 120, '3.5 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-outerwear'), 'CP352', '180gsm Women''s Long Sleeve Cardigan With Pockets', '180gsm-womens-long-sleeve-cardigan-with-pockets', '180gsm women''s long sleeve cardigan with pockets', 784, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-dresses'), 'CP353', '180gsm Ankle-length Slip Dress With Straps', '180gsm-ankle-length-slip-dress-with-straps', '180gsm ankle-length slip dress with straps', 891, 180, '5.3 oz', 'Cotton', '2-3 days', true),
((select id from product_categories where slug = 'womens-loungewear'), 'CP354', '180gsm Short Sleeved Pajama Set', '180gsm-short-sleeved-pajama-set', '180gsm short sleeved pajama set', 891, 180, '5.3 oz', 'Cotton', '2-3 days', true);
-- PART C - BEAUTY / SKINCARE / HAIRCARE / MAKEUP (143 SKUs)
-- C1. SKINCARE - EYE PRODUCTS
((select id from product_categories where slug = 'accessories'), 'BE001', 'Anti-Age Hydrogel Eye Patches', 'anti-age-hydrogel-eye-patches', 'Anti-age hydrogel eye patches with niacinamide', 1635, null, null, 'Gel', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE002', 'Caffeine + Vitamin C Energizing Hydrogel Eye Patches', 'caffeine-vitamin-c-energizing-hydrogel-eye-patches', 'Caffeine + vitamin c energizing hydrogel eye patches', 1635, null, null, 'Gel', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE003', 'Anti-Fatigue Hydrogel Eye Patches', 'anti-fatigue-hydrogel-eye-patches', 'Anti-fatigue hydrogel eye patches with panthenol', 1635, null, null, 'Gel', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE004', 'Hyaluronic Hydrogel Lip Mask', 'hyaluronic-hydrogel-lip-mask', 'Hyaluronic hydrogel lip mask for dehydrated skin', 2070, null, null, 'Gel', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE005', 'Peptide Age-Defying Eye Cream', 'peptide-age-defying-eye-cream', 'Peptide age-defying eye cream with vitamin c', 910, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE006', 'Retinol Alternative Eye Serum', 'retinol-alternative-eye-serum', 'Retinol alternative eye serum with vitamin c', 1330, null, null, 'Serum', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE007', 'Calming Eye Cream', 'calming-eye-cream', 'Calming eye cream with CBD', 1370, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE008', 'Brightening Eye Cream', 'brightening-eye-cream', 'Brightening eye cream with shea butter', 1270, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE009', 'Smoothing Eye Cream', 'smoothing-eye-cream', 'Smoothing eye cream with hyaluronic acid', 1360, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE010', '3-in-1 Eye Cream for Men', '3-in-1-eye-cream-for-men', '3-in-1 eye cream for men with hyaluronic acid', 816, null, null, 'Cream', 'In stock', true),
-- C2. SKINCARE - SERUMS & BOOSTERS
((select id from product_categories where slug = 'accessories'), 'BE011', 'Exosome & Niacinamide Serum', 'exosome-niacinamide-serum', 'Exosome & niacinamide serum with lactic acid', 1420, null, null, 'Serum', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE012', 'Scalp Care Exfoliating Serum', 'scalp-care-exfoliating-serum', 'Scalp care exfoliating serum with sodium hyaluronate', 1330, null, null, 'Serum', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE013', 'Retinol Alternative Serum', 'retinol-alternative-serum', 'Retinol alternative serum with vitamin c', 1460, null, null, 'Serum', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE014', 'Targeted Dark Spot Care 1% Kojic Acid', 'targeted-dark-spot-care-1-percent-kojic-acid', 'Targeted dark spot care with 1% kojic acid', 1210, null, null, 'Serum', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE015', 'Microbiome Prebiotics Face Mist', 'microbiome-prebiotics-face-mist', 'Microbiome prebiotics face mist', 1270, null, null, 'Mist', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE016', 'Bioactive Prebiotics Jelly Serum', 'bioactive-prebiotics-jelly-serum', 'Bioactive prebiotics jelly serum', 1380, null, null, 'Serum', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE017', 'Caffeine Gel Booster', 'caffeine-gel-booster', 'Caffeine gel booster 30ml', 1260, null, null, 'Gel', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE018', 'Antioxidant Ginkgo Gel Booster', 'antioxidant-ginkgo-gel-booster', 'Antioxidant ginkgo gel booster 30ml', 1020, null, null, 'Gel', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE019', 'Pigment Perfecting Serum', 'pigment-perfecting-serum', 'Pigment perfecting serum with vitamin e', 1520, null, null, 'Serum', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE020', 'Youthful Glow Serum', 'youthful-glow-serum', 'Youthful glow serum with hyaluronic acid', 810, null, null, 'Serum', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE021', 'Natural Retinol Alternative Oil Serum', 'natural-retinol-alternative-oil-serum', 'Natural retinol alternative oil serum', 1620, null, null, 'Oil', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE022', 'Peptide Anti-Aging Serum', 'peptide-anti-aging-serum', 'Peptide anti-aging serum', 1570, null, null, 'Serum', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE023', 'Double Hydration Boost Gel + HA', 'double-hydration-boost-gel-ha', 'Double hydration boost gel + hyaluronic acid', 1270, null, null, 'Gel', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE024', 'Vitamin C Serum', 'vitamin-c-serum', 'Vitamin c serum', 1540, null, null, 'Serum', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE025', 'AHA Peeling Concentrate', 'aha-peeling-concentrate', 'AHA peeling concentrate', 1410, null, null, 'Serum', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE026', 'Hydrating Serum', 'hydrating-serum', 'Hydrating serum with hyaluronic acid', 1530, null, null, 'Serum', 'In stock', true),
-- C3. SKINCARE - MOISTURIZERS & CREAMS
((select id from product_categories where slug = 'accessories'), 'BE027', 'Peptide Ageless AM/PM Cream', 'peptide-ageless-am-pm-cream', 'Peptide ageless AM/PM cream with vitamin c', 1250, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE028', 'Blemish Care Moisturiser', 'blemish-care-moisturiser', 'Blemish care moisturiser with argan oil', 1330, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE029', 'Sensitive Skin Overnight Cream Fragrance-Free', 'sensitive-skin-overnight-cream-fragrance-free', 'Sensitive skin overnight cream fragrance-free', 1490, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE030', 'Retinol Alternative Moisturiser', 'retinol-alternative-moisturiser', 'Retinol alternative moisturiser with vitamin c', 1270, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE031', 'Dark Spot Face Cream with Kojic Acid', 'dark-spot-face-cream-with-kojic-acid', 'Dark spot face cream with kojic acid', 1300, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE032', 'Sensitive Skin Moisturiser Fragrance Free', 'sensitive-skin-moisturiser-fragrance-free', 'Sensitive skin moisturiser fragrance free', 1410, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE033', 'Anti-Age Day Cream', 'anti-age-day-cream', 'Anti-age day cream 15ml', 1210, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE034', 'Sensitive Skin Body Cream', 'sensitive-skin-body-cream', 'Sensitive skin body cream with cocoa butter', 1490, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE035', '5% Urea + 2% Panthenol Body Cream', '5-percent-urea-2-percent-panthenol-body-cream', '5% urea + 2% panthenol body cream', 1640, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE036', 'Anti-Age Night Cream', 'anti-age-night-cream', 'Anti-age night cream with cocoa butter', 1730, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE037', 'Ceramide Barrier Night Cream', 'ceramide-barrier-night-cream', 'Ceramide barrier night cream', 1730, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE038', 'Nourishing Facial Oil', 'nourishing-facial-oil', 'Nourishing facial oil with argan oil 30ml', 1520, null, null, 'Oil', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE039', 'Nourishing Rich Cream Fragrance Free', 'nourishing-rich-cream-fragrance-free', 'Nourishing rich cream fragrance free', 1580, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE040', 'Light Moisturising Day Cream', 'light-moisturising-day-cream', 'Light moisturising day cream with argan oil', 1520, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE041', 'Moisturising Day Cream', 'moisturising-day-cream', 'Moisturising day cream with hyaluronic acid 15ml', 1160, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE042', 'Niacinamide Gel Moisturiser', 'niacinamide-gel-moisturiser', 'Niacinamide gel moisturiser', 1350, null, null, 'Gel', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE043', 'Calming Facial Oil', 'calming-facial-oil', 'Calming facial oil with CBD', 1900, null, null, 'Oil', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE044', 'Oil-Free Hydrating Gel', 'oil-free-hydrating-gel', 'Oil-free hydrating gel', 1570, null, null, 'Gel', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE045', 'Antioxidant Ginkgo Gel Booster', 'antioxidant-ginkgo-gel-booster-20ml', 'Antioxidant ginkgo gel booster 20ml', 1140, null, null, 'Gel', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE046', 'Moisturising Day Cream', 'moisturising-day-cream-50ml', 'Moisturising day cream with hyaluronic acid 50ml', 640, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE047', 'Nourishing Facial Oil', 'nourishing-facial-oil-15ml', 'Nourishing facial oil with argan oil 15ml', 1360, null, null, 'Oil', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE048', 'Moisturising Day Cream', 'moisturising-day-cream-alt', 'Moisturising day cream with hyaluronic acid 50ml alt', 1600, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE049', 'Anti-Age Day Cream', 'anti-age-day-cream-50ml', 'Anti-age day cream 50ml', 1620, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE050', 'Gentle Cleansing Milk', 'gentle-cleansing-milk', 'Gentle cleansing milk with argan oil', 1170, null, null, 'Milk', 'In stock', true),
-- C4. SKINCARE - CLEANSERS & TONERS
((select id from product_categories where slug = 'accessories'), 'BE051', 'Blemish Purifying Face Wash', 'blemish-purifying-face-wash', 'Blemish purifying face wash with sodium PCA', 1370, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE052', 'Radiant Glow Facial Wash', 'radiant-glow-facial-wash', 'Radiant glow facial wash with aloe juice', 1370, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE053', 'Sensitive Skin Face & Body Cleanser', 'sensitive-skin-face-body-cleanser', 'Sensitive skin face & body cleanser', 875, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE054', 'Brightening Face & Body Exfoliator with Kojic Acid', 'brightening-face-body-exfoliator-with-kojic-acid', 'Brightening face & body exfoliator with kojic acid', 1210, null, null, 'Scrub', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE055', 'Sensitive Skin Oil-To-Milk Cleanser', 'sensitive-skin-oil-to-milk-cleanser', 'Sensitive skin oil-to-milk cleanser', 1660, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE056', 'BiPhasic Make-up Remover Fragrance Free', 'biphasic-make-up-remover-fragrance-free', 'BiPhasic make-up remover fragrance free', 1540, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE057', 'Glycolic Acid Exfoliating Toner', 'glycolic-acid-exfoliating-toner', 'Glycolic acid exfoliating toner', 705, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE058', 'Cleansing Foam', 'cleansing-foam', 'Cleansing foam', 1170, null, null, 'Foam', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE059', 'Purifying Toner', 'purifying-toner', 'Purifying toner with salicylic acid', 1090, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE060', 'Hydrating Toner', 'hydrating-toner', 'Hydrating toner with hyaluronic acid', 1090, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE061', 'Micellar Cleansing Water', 'micellar-cleansing-water', 'Micellar cleansing water', 980, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE062', 'Purifying Mousse', 'purifying-mousse', 'Purifying mousse with aloe juice', 1320, null, null, 'Mousse', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE063', 'Clarifying Gel', 'clarifying-gel', 'Clarifying gel with aloe juice', 725, null, null, 'Gel', 'In stock', true),
-- C5. SKINCARE - MASKS & TREATMENTS
((select id from product_categories where slug = 'accessories'), 'BE064', 'Clay Mask for Pores and Blackheads', 'clay-mask-for-pores-and-blackheads', 'Clay mask for pores and blackheads', 1580, null, null, 'Mask', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE065', 'Icelandic Volcano Face & Body Scrub', 'icelandic-volcano-face-body-scrub', 'Icelandic volcano face & body scrub', 1520, null, null, 'Scrub', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE066', 'Deep Cleanse Scalp Scrub Rosemary & Mint', 'deep-cleanse-scalp-scrub-rosemary-mint', 'Deep cleanse scalp scrub rosemary & mint', 1550, null, null, 'Scrub', 'In stock', true),
-- C6. HAIRCARE - SHAMPOOS & CONDITIONERS
((select id from product_categories where slug = 'accessories'), 'BE067', 'Quick Refresh Dry Shampoo Spray', 'quick-refresh-dry-shampoo-spray', 'Quick refresh dry shampoo spray', 1160, null, null, 'Spray', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE068', 'Keratin Volume Boost Shampoo', 'keratin-volume-boost-shampoo', 'Keratin volume boost shampoo with rosemary oil', 1330, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE069', 'Keratin Volume Boost Conditioner', 'keratin-volume-boost-conditioner', 'Keratin volume boost conditioner', 1250, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE070', 'Sensitive Scalp Shampoo', 'sensitive-scalp-shampoo', 'Sensitive scalp shampoo with betaine', 1370, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE071', 'Gloss Shampoo Smoky Green Vetiver', 'gloss-shampoo-smoky-green-vetiver', 'Gloss shampoo smoky green vetiver', 847, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE072', 'Gloss Conditioner Smoky Green Vetiver', 'gloss-conditioner-smoky-green-vetiver', 'Gloss conditioner smoky green vetiver', 847, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE073', 'Fresh Conditioner Citrus Cocktail', 'fresh-conditioner-citrus-cocktail', 'Fresh conditioner citrus cocktail', 1290, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE074', 'Colour Care Shampoo Peachy Grapefruit Zest', 'colour-care-shampoo-peachy-grapefruit-zest', 'Colour care shampoo peachy grapefruit zest', 847, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE075', 'Moisturising Shampoo', 'moisturising-shampoo', 'Moisturising shampoo with aloe juice', 1150, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE076', '2-in-1 Hair & Body Wash for Men', '2-in-1-hair-body-wash-for-men', '2-in-1 hair & body wash for men', 1190, null, null, 'Liquid', 'In stock', true),
-- C7. HAIRCARE - TREATMENTS & OILS
((select id from product_categories where slug = 'accessories'), 'BE077', 'Rosemary Hair & Scalp Strengthening Oil', 'rosemary-hair-scalp-strengthening-oil', 'Rosemary hair & scalp strengthening oil', 1190, null, null, 'Oil', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE078', 'Keratin Intensive Rescue Hair Mask', 'keratin-intensive-rescue-hair-mask', 'Keratin intensive rescue hair mask', 1590, null, null, 'Mask', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE079', 'Keratin Shine Leave-In Hair Mist', 'keratin-shine-leave-in-hair-mist', 'Keratin shine leave-in hair mist', 1270, null, null, 'Mist', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE080', 'Softening Beard Oil', 'softening-beard-oil', 'Softening beard oil', 1360, null, null, 'Oil', 'In stock', true),
-- C8. MAKEUP - FOUNDATION & CONCEALER
((select id from product_categories where slug = 'accessories'), 'BE081', 'Foundation with Peptides 05 Fair Neutral', 'foundation-with-peptides-05-fair-neutral', 'Foundation with peptides 05 fair neutral', 1640, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE082', 'Color Correcting Ceramide Stick 25 Medium', 'color-correcting-ceramide-stick-25-medium', 'Color correcting ceramide stick 25 medium', 1370, null, null, 'Stick', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE083', 'Color Correcting Ceramide Stick 35 Deep', 'color-correcting-ceramide-stick-35-deep', 'Color correcting ceramide stick 35 deep', 1370, null, null, 'Stick', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE084', 'Correcting Concealer 10 Light Warm', 'correcting-concealer-10-light-warm', 'Correcting concealer 10 light warm', 1350, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE085', 'Correcting Concealer 20 Medium Warm', 'correcting-concealer-20-medium-warm', 'Correcting concealer 20 medium warm', 1350, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE086', 'Color Correcting Ceramide Stick 20 Light', 'color-correcting-ceramide-stick-20-light', 'Color correcting ceramide stick 20 light', 1370, null, null, 'Stick', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE087', 'Color Correcting Ceramide Stick 30 Tan', 'color-correcting-ceramide-stick-30-tan', 'Color correcting ceramide stick 30 tan', 1370, null, null, 'Stick', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE088', 'Correcting Concealer 30 Tan Neutral', 'correcting-concealer-30-tan-neutral', 'Correcting concealer 30 tan neutral', 1350, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE089', 'Correcting Concealer 35 Deep Neutral', 'correcting-concealer-35-deep-neutral', 'Correcting concealer 35 deep neutral', 1350, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE090', 'Foundation with Peptides 10 Light Warm', 'foundation-with-peptides-10-light-warm', 'Foundation with peptides 10 light warm', 1640, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE091', 'Foundation with Peptides 15 Light Cool', 'foundation-with-peptides-15-light-cool', 'Foundation with peptides 15 light cool', 1640, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE092', 'Foundation with Peptides 20 Medium Neutral', 'foundation-with-peptides-20-medium-neutral', 'Foundation with peptides 20 medium neutral', 1640, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE093', 'Foundation with Peptides 25 Medium Warm', 'foundation-with-peptides-25-medium-warm', 'Foundation with peptides 25 medium warm', 1640, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE094', 'Foundation with Peptides 30 Tan Neutral', 'foundation-with-peptides-30-tan-neutral', 'Foundation with peptides 30 tan neutral', 1640, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE095', 'Foundation with Peptides 35 Tan Warm', 'foundation-with-peptides-35-tan-warm', 'Foundation with peptides 35 tan warm', 1640, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE096', 'Foundation with Peptides 45 Deep Warm', 'foundation-with-peptides-45-deep-warm', 'Foundation with peptides 45 deep warm', 1640, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE097', 'Foundation with Peptides 50 Deep Cool', 'foundation-with-peptides-50-deep-cool', 'Foundation with peptides 50 deep cool', 1640, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE098', 'Correcting Concealer 25 Medium Neutral', 'correcting-concealer-25-medium-neutral', 'Correcting concealer 25 medium neutral', 1350, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE099', 'Correcting Concealer 05 Light Cool', 'correcting-concealer-05-light-cool', 'Correcting concealer 05 light cool', 1350, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE100', 'Correcting Concealer 15 Medium Cool', 'correcting-concealer-15-medium-cool', 'Correcting concealer 15 medium cool', 1350, null, null, 'Liquid', 'In stock', true),
-- C9. MAKEUP - LIPS & MASCARA
((select id from product_categories where slug = 'accessories'), 'BE101', 'Matte Lipstick Dusty Rose', 'matte-lipstick-dusty-rose', 'Matte lipstick dusty rose with shea butter', 1620, null, null, 'Lipstick', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE102', 'Matte Lipstick Terracotta Nude', 'matte-lipstick-terracotta-nude', 'Matte lipstick terracotta nude with shea butter', 1620, null, null, 'Lipstick', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE103', 'Lengthening & Volumising Mascara', 'lengthening-volumising-mascara', 'Lengthening & volumising mascara with peptides', 1330, null, null, 'Mascara', 'In stock', true),
-- C10. BODY CARE
((select id from product_categories where slug = 'accessories'), 'BE104', 'Omega 6-9 Glowing Skin Body Oil', 'omega-6-9-glowing-skin-body-oil', 'Omega 6-9 glowing skin body oil with vitamin e', 1820, null, null, 'Oil', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE105', 'Silk Skin Body Serum Woody Amber & Leather', 'silk-skin-body-serum-woody-amber-leather', 'Silk skin body serum woody amber & leather', 819, null, null, 'Serum', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE106', 'Silk Skin Body Serum Spices & Sandalwood', 'silk-skin-body-serum-spices-sandalwood', 'Silk skin body serum spices & sandalwood', 847, null, null, 'Serum', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE107', 'Silk Skin Hand Cream Spices & Sandalwood', 'silk-skin-hand-cream-spices-sandalwood', 'Silk skin hand cream spices & sandalwood', 889, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE108', 'Silk Skin Hand Cream Woody Amber & Leather', 'silk-skin-hand-cream-woody-amber-leather', 'Silk skin hand cream woody amber & leather', 889, null, null, 'Cream', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE109', 'All-In-One Facial Oil', 'all-in-one-facial-oil', 'All-in-one facial oil with vitamin e', 1520, null, null, 'Oil', 'In stock', true),
-- C11. MEN'S GROOMING
((select id from product_categories where slug = 'accessories'), 'BE110', 'Oil-Free Zinc Face Gel for Men', 'oil-free-zinc-face-gel-for-men', 'Oil-free zinc face gel for men', 1570, null, null, 'Gel', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE111', 'Hyaluronic Acid Face Cream for Men', 'hyaluronic-acid-face-cream-for-men', 'Hyaluronic acid face cream for men', 1600, null, null, 'Cream', 'In stock', true),
-- C12. BABY CARE
((select id from product_categories where slug = 'accessories'), 'BE112', 'Baby Body Lotion', 'baby-body-lotion', 'Baby body lotion with vitamin c', 1260, null, null, 'Lotion', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE113', 'Baby Foaming Wash', 'baby-foaming-wash', 'Baby foaming wash with aloe juice', 1240, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE114', 'Baby Body Wash', 'baby-body-wash', 'Baby body wash with aloe juice', 1290, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE115', 'Gentle Baby Shampoo', 'gentle-baby-shampoo', 'Gentle baby shampoo with prebiotics', 1330, null, null, 'Liquid', 'In stock', true),
-- C13. HOME FRAGRANCE
((select id from product_categories where slug = 'accessories'), 'BE116', 'Soy Wax Candle Wild Flower', 'soy-wax-candle-wild-flower', 'Soy wax candle wild flower', 1080, null, null, 'Candle', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE117', 'Soy Wax Candle Moss', 'soy-wax-candle-moss', 'Soy wax candle moss', 1080, null, null, 'Candle', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE118', 'Soy Wax Candle Lavender', 'soy-wax-candle-lavender', 'Soy wax candle lavender', 1080, null, null, 'Candle', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE119', 'Soy Wax Candle Heather', 'soy-wax-candle-heather', 'Soy wax candle heather', 1080, null, null, 'Candle', 'In stock', true),
-- C14. BODY WASH
((select id from product_categories where slug = 'accessories'), 'BE120', 'Hand & Body Wash Grapefruit', 'hand-body-wash-grapefruit', 'Hand & body wash grapefruit', 1020, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE121', 'Hand & Body Wash Peppermint & Dark Cedar', 'hand-body-wash-peppermint-dark-cedar', 'Hand & body wash peppermint & dark cedar', 800, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE122', 'Hand & Body Wash Ginger & Smoky Cardamom', 'hand-body-wash-ginger-smoky-cardamom', 'Hand & body wash ginger & smoky cardamom', 750, null, null, 'Liquid', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE123', 'Hand & Body Wash Patchouli & Amber Vanilla', 'hand-body-wash-patchouli-amber-vanilla', 'Hand & body wash patchouli & amber vanilla', 850, null, null, 'Liquid', 'In stock', true),
-- C15. DEODORANT
((select id from product_categories where slug = 'accessories'), 'BE124', 'Aluminum-free Roll-on Deodorant', 'aluminum-free-roll-on-deodorant', 'Aluminum-free roll-on deodorant with panthenol', 1260, null, null, 'Roll-on', 'In stock', true),
-- C16. COLLECTION BOXES
((select id from product_categories where slug = 'accessories'), 'BE125', 'Anti-Age Peptide Collection', 'anti-age-peptide-collection', 'Anti-age peptide collection box', 4830, null, null, 'Box', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE126', 'Anti-Aging Performance Duo', 'anti-aging-performance-duo', 'Anti-aging performance duo collection box', 2720, null, null, 'Box', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE127', 'Dark Spot Routine Duo', 'dark-spot-routine-duo', 'Dark spot routine duo collection box', 2720, null, null, 'Box', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE128', 'The Ultimate Hydration Duo', 'the-ultimate-hydration-duo', 'The ultimate hydration duo collection box', 2720, null, null, 'Box', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE129', 'Clear Complexion Collection Box', 'clear-complexion-collection-box', 'Clear complexion collection box', 3800, null, null, 'Box', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE130', 'Timeless Radiance Collection Box', 'timeless-radiance-collection-box', 'Timeless radiance collection box', 4280, null, null, 'Box', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE131', 'Rejuvenating Glow Collection Box', 'rejuvenating-glow-collection-box', 'Rejuvenating glow collection box', 4280, null, null, 'Box', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE132', 'The Age-Defying Trio Collection Box', 'the-age-defying-trio-collection-box', 'The age-defying trio collection box', 5140, null, null, 'Box', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE133', 'Glowy Skin Trio Collection Box', 'glowy-skin-trio-collection-box', 'Glowy skin trio collection box', 4280, null, null, 'Box', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE134', 'Deep Moisture Collection Box', 'deep-moisture-collection-box', 'Deep moisture collection box', 4530, null, null, 'Box', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE135', 'The Ultimate Renewal Collection Box', 'the-ultimate-renewal-collection-box', 'The ultimate renewal collection box', 4530, null, null, 'Box', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE136', 'Daily Radiance Collection Box', 'daily-radiance-collection-box', 'Daily radiance collection box', 4280, null, null, 'Box', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE137', 'Hydration Ritual Collection Box', 'hydration-ritual-collection-box', 'Hydration ritual collection box', 4530, null, null, 'Box', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BE138', 'Anti-Aging Collection Box', 'anti-aging-collection-box', 'Anti-aging collection box', 4770, null, null, 'Box', 'In stock', true),
-- PART D - BAGS (8 SKUs)
((select id from product_categories where slug = 'accessories'), 'BG001', 'Classic Quilted Shoulder Bag', 'classic-quilted-shoulder-bag', 'Classic quilted shoulder bag in PU leather', null, null, null, 'PU Leather', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BG002', 'Minimalist Leather Hobo', 'minimalist-leather-hobo', 'Minimalist leather hobo bag', null, null, null, 'Genuine Leather', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BG003', 'Chain Strap Shoulder Bag', 'chain-strap-shoulder-bag', 'Chain strap shoulder bag in PU leather', null, null, null, 'PU Leather', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BG004', 'Structured Top Handle Bag', 'structured-top-handle-bag', 'Structured top handle bag in vegan leather', null, null, null, 'Vegan Leather', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BG005', 'Soft Pebbled Shoulder Bag', 'soft-pebbled-shoulder-bag', 'Soft pebbled shoulder bag in PU leather', null, null, null, 'PU Leather', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BG006', 'Wide Strap Boho Bag', 'wide-strap-boho-bag', 'Wide strap boho bag in canvas and PU', null, null, null, 'Canvas + PU', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BG007', 'Croc-Embossed Shoulder Bag', 'croc-embossed-shoulder-bag', 'Croc-embossed shoulder bag in PU leather', null, null, null, 'PU Leather', 'In stock', true),
((select id from product_categories where slug = 'accessories'), 'BG008', 'Convertible Backpack Shoulder', 'convertible-backpack-shoulder', 'Convertible backpack shoulder bag in genuine leather', null, null, null, 'Genuine Leather', 'In stock', true);

-- Add badges for all products based on markdown
insert into product_badges (product_id, badge_type, badge_text, is_active)
select id, 'NEW', 'New Arrival', true from products where sku in (
  'WT0216', 'WT0218', 'WT0200', 'WT0225', 'WO0019', 'WT0183', 'WT0197', 'WT0198', 'WT0151', 'WT0111', 'WT0128', 'WT0158', 'WT0122', 'WT0167', 'WT0138', 'WT0140', 'WT0173', 'WT0155', 'WT0165', 'WT0166', 'WT0139', 'WT0177', 'WT0160', 'WT0159',
  'WT0185', 'WT0171', 'WT0116', 'WB0002', 'WT0192', 'WW0021', 'WQ0005',
  'WT0211', 'WT0203', 'WT0187', 'WB0067', 'WT0212', 'WW0004',
  'WT0205', 'WT0195', 'WT0206', 'WT0189', 'WT0193', 'WB0072', 'WT0191', 'WT0194', 'WT0219', 'WB0076', 'WB0074', 'WT0179', 'WT0180', 'WT0181', 'WB0077', 'WT0182', 'WT0188', 'WB0040', 'WB0041', 'WT0178', 'UT0167', 'WB0068', 'WT0149', 'WB0062', 'WB0065', 'WT0164', 'WT0143', 'WT0134', 'WB0042', 'WT0136', 'WB0038', 'WB0014', 'WB0025', 'WT0065', 'WT0125', 'WB0035', 'WT0152', 'WB0055', 'WT0157', 'WT0099', 'WT0146', 'WB0031', 'WT0147', 'WT0131', 'WT0132', 'WT0130', 'WT0129', 'WT0121', 'WB0051', 'WT0150', 'WT0144', 'WB0054', 'WT0168', 'WT0154', 'WT0127', 'WT0133', 'WB0046', 'WB0053', 'WT0153', 'WB0052', 'WT0141',
  'WB0073', 'WB0066', 'WB0034', 'WB0030', 'WB0058', 'WB0075', 'WB0016', 'WB0023',
  'WB0081', 'WB0086', 'WB0071', 'WB0037', 'WB0060', 'WB0047', 'WB0049',
  'WB0082', 'WB0089', 'WB0078', 'WB0069', 'WB0036', 'WB0057', 'WB0056', 'WB0050',
  'WO0018', 'WT0209', 'WO0014', 'WO0009', 'WO0013', 'WO0010', 'WO0011', 'WT0176', 'WO0015',
  'WT0186', 'WT0162', 'WT0163', 'WT0172'
);

insert into product_badges (product_id, badge_type, badge_text, is_active)
select id, 'BESTSELLER', 'Bestseller', true from products where sku in (
  'WT0197', 'WT0050', 'WT0055', 'RU0007', 'WT0137', 'WB0015', 'WT0040', 'WT0018', 'WT0029', 'WT0108', 'WT0010', 'WT0056', 'WT0052', 'WT0042', 'WT0138', 'WT0041',
  'WT0082', 'RU0092', 'RU0094', 'R00141', 'WT0083', 'RB0017',
  'WW0021', 'WQ0005',
  'WB0067', 'WW0004',
  'WB0013', 'WT0143', 'WT0073', 'WB0012', 'WT0134', 'WB0026', 'WB0014', 'WB0025', 'WT0074', 'WB0012',
  'WK0014', 'WK0004', 'WK0009',
  'WS0013',
  'WO0012', 'WO0008'
);

insert into product_badges (product_id, badge_type, badge_text, is_active)
select id, 'PREMIUM', 'Premium', true from products where sku in (
  'CP042', 'CP046', 'CP182', 'CP050', 'CP051', 'CP052', 'CP053', 'CP125', 'CP126', 'CP054', 'CP055', 'CP062', 'CP064', 'CP065', 'CP066', 'CP070',
  'CP195', 'CP196', 'CP197', 'CP198', 'CP199', 'CP200', 'CP201', 'CP202', 'CP203', 'CP204', 'CP205', 'CP206', 'CP207', 'CP208', 'CP209', 'CP210', 'CP211', 'CP212', 'CP213', 'CP214', 'CP215', 'CP216', 'CP217', 'CP218', 'CP219', 'CP220', 'CP221', 'CP222', 'CP223', 'CP224', 'CP225'
);

-- Add badges for beauty products
insert into product_badges (product_id, badge_type, badge_text, is_active)
select id, 'NEW', 'New Arrival', true from products where sku in (
  'BE001', 'BE002', 'BE003', 'BE004', 'BE005', 'BE006', 'BE007', 'BE008', 'BE009', 'BE010', 'BE011', 'BE012', 'BE013', 'BE014', 'BE015', 'BE016', 'BE017', 'BE018', 'BE019', 'BE020', 'BE021', 'BE022', 'BE023', 'BE024', 'BE025', 'BE026', 'BE027', 'BE028', 'BE029', 'BE030', 'BE031', 'BE032', 'BE033', 'BE034', 'BE035', 'BE036', 'BE037', 'BE038', 'BE039', 'BE040', 'BE041', 'BE042', 'BE043', 'BE044', 'BE045', 'BE046', 'BE047', 'BE048', 'BE049', 'BE050', 'BE051', 'BE052', 'BE053', 'BE054', 'BE055', 'BE056', 'BE057', 'BE058', 'BE059', 'BE060', 'BE061', 'BE062', 'BE063', 'BE064', 'BE065', 'BE066', 'BE067', 'BE068', 'BE069', 'BE070', 'BE071', 'BE072', 'BE073', 'BE074', 'BE075', 'BE076', 'BE077', 'BE078', 'BE079', 'BE080', 'BE081', 'BE082', 'BE083', 'BE084', 'BE085', 'BE086', 'BE087', 'BE088', 'BE089', 'BE090', 'BE091', 'BE092', 'BE093', 'BE094', 'BE095', 'BE096', 'BE097', 'BE098', 'BE099', 'BE100', 'BE101', 'BE102', 'BE103', 'BE104', 'BE105', 'BE106', 'BE107', 'BE108', 'BE109', 'BE110', 'BE111', 'BE112', 'BE113', 'BE114', 'BE115', 'BE116', 'BE117', 'BE118', 'BE119', 'BE120', 'BE121', 'BE122', 'BE123', 'BE124', 'BE125', 'BE126', 'BE127', 'BE128', 'BE129', 'BE130', 'BE131', 'BE132', 'BE133', 'BE134', 'BE135', 'BE136', 'BE137', 'BE138'
);

insert into product_badges (product_id, badge_type, badge_text, is_active)
select id, 'TRENDING', 'Trending', true from products where sku in (
  'BE079', 'BE065', 'BE071', 'BE072', 'BE074', 'BE122', 'BE021', 'BE022', 'BE023', 'BE024', 'BE048', 'BE138'
);

-- Add badges for bags
insert into product_badges (product_id, badge_type, badge_text, is_active)
select id, 'BESTSELLER', 'Best Seller', true from products where sku in ('BG001');

insert into product_badges (product_id, badge_type, badge_text, is_active)
select id, 'NEW', 'New Arrival', true from products where sku in ('BG006');

-- ============================================================================
-- 7. INSERT SAMPLE PRODUCT VARIANTS
-- ============================================================================

-- Sample variants for first T-shirt
insert into product_variants (product_id, sku, size_label, color_name, price_cents, inventory_quantity, sort_order)
select 
  p.id, 
  p.sku || '-S-BLK', 
  'S', 
  'Black', 
  p.base_price_cents, 
  50, 
  1 
from products p where p.sku = 'WT0216'
union all
select 
  p.id, 
  p.sku || '-M-BLK', 
  'M', 
  'Black', 
  p.base_price_cents, 
  50, 
  2 
from products p where p.sku = 'WT0216'
union all
select 
  p.id, 
  p.sku || '-L-BLK', 
  'L', 
  'Black', 
  p.base_price_cents, 
  50, 
  3 
from products p where p.sku = 'WT0216'
union all
select 
  p.id, 
  p.sku || '-XL-BLK', 
  'XL', 
  'Black', 
  p.base_price_cents, 
  50, 
  4 
from products p where p.sku = 'WT0216'
union all
select 
  p.id, 
  p.sku || '-2XL-BLK', 
  '2XL', 
  'Black', 
  p.base_price_cents, 
  50, 
  5 
from products p where p.sku = 'WT0216';

-- ============================================================================
-- 8. INSERT SAMPLE PRODUCT ATTRIBUTES (FILTERS)
-- ============================================================================

-- Add color attributes
insert into product_attributes (product_id, attribute_type, attribute_value, sort_order)
select p.id, 'color', 'Black', 1 from products p where p.sku in ('WT0216', 'WT0218', 'WT0200')
union all
select p.id, 'color', 'White', 2 from products p where p.sku in ('WT0216', 'WT0200')
union all
select p.id, 'color', 'Heather Grey', 3 from products p where p.sku = 'WT0216';

-- Add fit attributes
insert into product_attributes (product_id, attribute_type, attribute_value, sort_order)
select p.id, 'fit', 'Slim', 1 from products p where p.sku in ('WT0216', 'WT0183', 'WT0198')
union all
select p.id, 'fit', 'Regular', 2 from products p where p.sku in ('WT0216', 'WT0040')
union all
select p.id, 'fit', 'Loose', 3 from products p where p.sku = 'WT0107';

-- Add material attributes
insert into product_attributes (product_id, attribute_type, attribute_value, sort_order)
select p.id, 'material', 'Cotton', 1 from products p where material = 'Cotton'
union all
select p.id, 'material', 'Tencel', 2 from products p where material = 'Tencel'
union all
select p.id, 'material', 'Spandex', 3 from products p where material = 'Spandex';

-- Add process attributes
insert into product_attributes (product_id, attribute_type, attribute_value, sort_order)
select p.id, 'process', 'DTG', 1 from products p where fulfillment_tier = 'standard'
union all
select p.id, 'process', 'All-Over Printing', 2 from products p where fulfillment_tier = 'custom';

-- Add product features
insert into product_attributes (product_id, attribute_type, attribute_value, sort_order)
select p.id, 'product_feature', 'Eco-friendly', 1 from products p where material = 'Tencel'
union all
select p.id, 'product_feature', 'Premium', 2 from products p where base_price_cents > 2000
union all
select p.id, 'product_feature', 'Plus Sizes', 3 from products p where sku like '%2XL%' or sku like '%3XL%';

-- ============================================================================
-- 9. INSERT SAMPLE COLLECTIONS
-- ============================================================================

insert into product_collections (name, slug, description, is_featured, sort_order) values
('New Arrivals', 'new-arrivals', 'Latest products added to our catalog', true, 1),
('Bestsellers', 'bestsellers', 'Most popular products', true, 2),
('Summer Collection', 'summer-collection', 'Perfect for warm weather', false, 3),
('Activewear', 'activewear-collection', 'Yoga and fitness essentials', false, 4);

-- Add products to collections
insert into product_collection_items (collection_id, product_id, sort_order)
select 
  (select id from product_collections where slug = 'new-arrivals'),
  p.id,
  1
from products p 
where p.id in (
  select product_id from product_badges where badge_type = 'NEW'
)
union all
select 
  (select id from product_collections where slug = 'bestsellers'),
  p.id,
  1
from products p 
where p.id in (
  select product_id from product_badges where badge_type = 'BESTSELLER'
);

-- ============================================================================
-- 10. INSERT SAMPLE TAGS
-- ============================================================================

insert into product_tags (name, slug, description, is_active) values
('Summer', 'summer', 'Great for summer weather', true),
('Comfortable', 'comfortable', 'Comfortable to wear', true),
('Trendy', 'trendy', 'Fashion-forward styles', true),
('Essential', 'essential', 'Wardrobe essentials', true),
('Workout', 'workout', 'Perfect for workouts', true);

-- Assign tags to products
insert into product_tag_assignments (product_id, tag_id)
select p.id, t.id from products p, product_tags t
where p.material = 'Cotton' and t.slug = 'comfortable'
union all
select p.id, t.id from products p, product_tags t
where p.category_id = (select id from product_categories where slug = 'womens-activewear') and t.slug = 'workout';

-- ============================================================================
-- END OF SEED DATA
-- ============================================================================
