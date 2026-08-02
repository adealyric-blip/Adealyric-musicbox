'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/Button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import {
  Plus,
  X,
  Upload,
  ImageIcon,
  Loader2,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Taxonomy                                                           */
/* ------------------------------------------------------------------ */

const DEPARTMENTS = [
  'Women',
  'Beauty',
  'Bags',
  'Unisex',
  'Accessories',
] as const;

const CATEGORY_MAP: Record<string, string[]> = {
  Women: [
    'T-Shirts',
    'Activewear',
    'Hoodies & Sweatshirts',
    'Pants & Leggings',
    'Shorts',
    'Dresses & Skirts',
    'Sets',
    'Jackets & Outerwear',
    'Swimwear',
    'Intimates',
    'Loungewear',
    'Jeans',
  ],
  Beauty: [
    'Skincare',
    'Makeup',
    'Haircare',
    'Body Care',
    'Fragrance',
    'Nail Care',
    'Bath & Body',
    'Tools & Accessories',
  ],
  Bags: ['Tote Bags', 'Backpacks', 'Crossbody Bags'],
  Unisex: ['T-Shirts', 'Hoodies & Sweatshirts'],
  Accessories: ['Jewelry', 'Hats', 'Belts'],
};

const COMMON_BADGES = [
  'NEW',
  'BESTSELLER',
  'PREMIUM',
  'TRENDING',
  'LIMITED EDITION',
  'ORGANIC',
  'VEGAN',
  'CRUELTY-FREE',
];

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface ColorEntry {
  name: string;
  hex: string;
}

export interface ProductFormModalProps {
  open: boolean;
  onClose: () => void;
  productId?: string | null;
  onSuccess: () => void;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function tryParseJSON<T>(raw: string | null | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function ProductFormModal({
  open,
  onClose,
  productId,
  onSuccess,
}: ProductFormModalProps) {
  const isEdit = !!productId;

  /* ---- state --------------------------------------------------- */
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [loadingProduct, setLoadingProduct] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');

  // Basic
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [sku, setSku] = useState('');

  // Taxonomy
  const [department, setDepartment] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

  // Pricing
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [onSale, setOnSale] = useState(false);
  const [discountPct, setDiscountPct] = useState('');

  // Attributes
  const [sizesText, setSizesText] = useState('');
  const [colors, setColors] = useState<ColorEntry[]>([]);
  const [colorCount, setColorCount] = useState('');
  const [fabric, setFabric] = useState('');
  const [material, setMaterial] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [beautySize, setBeautySize] = useState('');

  // Images
  const [images, setImages] = useState<string[]>([]);
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Organization
  const [badges, setBadges] = useState<string[]>([]);
  const [tagsText, setTagsText] = useState('');
  const [sortOrder, setSortOrder] = useState('0');
  const [isPublished, setIsPublished] = useState(false);

  /* ---- derived ------------------------------------------------- */

  const categories = department ? CATEGORY_MAP[department] || [] : [];

  /* ---- load product for editing -------------------------------- */

  const loadProduct = useCallback(async () => {
    if (!productId) return;
    setLoadingProduct(true);
    setError('');
    try {
      const res = await fetch(`/api/admin/products/${productId}`);
      const json = await res.json();
      if (!json.success) {
        setError(json.error || 'Failed to load product');
        return;
      }
      const p = json.data;
      setName(p.name || '');
      setSlug(p.slug || '');
      setDescription(p.description || '');
      setSku(p.sku || '');
      setDepartment(p.department || '');
      setCategory(p.category || '');
      setSubcategory(p.subcategory || '');
      setPrice(p.price != null ? String(p.price) : '');
      setOriginalPrice(p.originalPrice != null ? String(p.originalPrice) : '');
      setOnSale(!!p.onSale);
      setDiscountPct(p.discountPct != null ? String(p.discountPct) : '');
      // sizes: the `sizes` field is a comma string, sizeList is JSON array
      setSizesText(p.sizeList ? tryParseJSON<string[]>(p.sizeList, []).join(', ') : (p.sizes || ''));
      setColors(tryParseJSON<ColorEntry[]>(p.colors, []));
      setColorCount(p.colorCount != null ? String(p.colorCount) : '');
      setFabric(p.fabric || '');
      setMaterial(p.material || '');
      setDimensions(p.dimensions || '');
      setBeautySize(p.beautySize || '');
      setImages(tryParseJSON<string[]>(p.images, []));
      setBadges(tryParseJSON<string[]>(p.badges, []));
      setTagsText(tryParseJSON<string[]>(p.tags, []).join(', '));
      setSortOrder(p.sortOrder != null ? String(p.sortOrder) : '0');
      setIsPublished(!!p.isPublished);
    } catch {
      setError('Network error loading product');
    } finally {
      setLoadingProduct(false);
    }
  }, [productId]);

  useEffect(() => {
    if (open && productId) loadProduct();
    if (open && !productId) resetForm();
  }, [open, productId]);

  /* ---- reset --------------------------------------------------- */

  const resetForm = () => {
    setName('');
    setSlug('');
    setDescription('');
    setSku('');
    setDepartment('');
    setCategory('');
    setSubcategory('');
    setPrice('');
    setOriginalPrice('');
    setOnSale(false);
    setDiscountPct('');
    setSizesText('');
    setColors([]);
    setColorCount('');
    setFabric('');
    setMaterial('');
    setDimensions('');
    setBeautySize('');
    setImages([]);
    setBadges([]);
    setTagsText('');
    setSortOrder('0');
    setIsPublished(false);
    setError('');
    setActiveTab('basic');
  };

  /* ---- auto-slug ------------------------------------------------ */

  useEffect(() => {
    // Only auto-generate slug in create mode or when slug matches previous auto
    if (!isEdit || !slug) {
      setSlug(slugify(name));
    }
  }, [name]);

  /* ---- pricing helpers ------------------------------------------ */

  useEffect(() => {
    const p = parseFloat(price);
    const o = parseFloat(originalPrice);
    if (p > 0 && o > p) {
      setOnSale(true);
      setDiscountPct(String(Math.round(((o - p) / o) * 100)));
    } else if (p > 0 && o > 0 && o <= p) {
      setOnSale(false);
      setDiscountPct('');
    }
  }, [price, originalPrice]);

  /* ---- color helpers -------------------------------------------- */

  const addColor = () => {
    setColors((prev) => [...prev, { name: '', hex: '#000000' }]);
  };

  const removeColor = (idx: number) => {
    setColors((prev) => prev.filter((_, i) => i !== idx));
  };

  const updateColor = (idx: number, field: 'name' | 'hex', value: string) => {
    setColors((prev) =>
      prev.map((c, i) => (i === idx ? { ...c, [field]: value } : c)),
    );
  };

  useEffect(() => {
    const validColors = colors.filter((c) => c.name.trim());
    setColorCount(String(validColors.length));
  }, [colors]);

  /* ---- image helpers -------------------------------------------- */

  const addImageUrl = () => {
    const url = imageUrlInput.trim();
    if (!url) return;
    setImages((prev) => [...prev, url]);
    setImageUrlInput('');
  };

  const removeImage = (idx: number) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });
      const json = await res.json();
      if (json.success && json.url) {
        setImages((prev) => [...prev, json.url]);
      } else {
        setError(json.error || 'Upload failed');
      }
    } catch {
      setError('Upload failed');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  /* ---- badge helpers -------------------------------------------- */

  const toggleBadge = (badge: string) => {
    setBadges((prev) =>
      prev.includes(badge) ? prev.filter((b) => b !== badge) : [...prev, badge],
    );
  };

  /* ---- save ----------------------------------------------------- */

  const handleSave = async () => {
    setError('');

    // Validate
    if (!name.trim()) {
      setError('Product name is required');
      setActiveTab('basic');
      return;
    }
    if (!department) {
      setError('Department is required');
      setActiveTab('taxonomy');
      return;
    }
    if (!category) {
      setError('Category is required');
      setActiveTab('taxonomy');
      return;
    }
    if (!price || parseFloat(price) < 0) {
      setError('Valid price is required');
      setActiveTab('pricing');
      return;
    }

    const sizeList = sizesText
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const body: Record<string, unknown> = {
      name: name.trim(),
      slug: slug.trim() || slugify(name),
      description: description.trim() || undefined,
      department,
      category,
      subcategory: subcategory.trim() || undefined,
      price: parseFloat(price),
      originalPrice: originalPrice ? parseFloat(originalPrice) : undefined,
      onSale,
      discountPct: discountPct ? parseInt(discountPct, 10) : undefined,
      sku: sku.trim() || undefined,
      sizes: sizesText.trim() || undefined,
      sizeList: sizeList.length ? JSON.stringify(sizeList) : undefined,
      colors: colors.some((c) => c.name.trim()) ? JSON.stringify(colors.filter((c) => c.name.trim())) : undefined,
      colorCount: colorCount ? parseInt(colorCount, 10) : undefined,
      fabric: fabric.trim() || undefined,
      material: material.trim() || undefined,
      dimensions: dimensions.trim() || undefined,
      beautySize: beautySize.trim() || undefined,
      images: images.length ? JSON.stringify(images) : undefined,
      badges: badges.length ? JSON.stringify(badges) : undefined,
      tags: tagsText.trim()
        ? JSON.stringify(
            tagsText
              .split(',')
              .map((t) => t.trim())
              .filter(Boolean),
          )
        : undefined,
      sortOrder: sortOrder ? parseInt(sortOrder, 10) : 0,
      isPublished,
    };

    setSaving(true);
    try {
      const url = isEdit
        ? `/api/admin/products/${productId}`
        : '/api/admin/products';
      const method = isEdit ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const json = await res.json();
      if (!json.success) {
        setError(json.error || 'Save failed');
        return;
      }
      onSuccess();
      onClose();
    } catch {
      setError('Network error saving product');
    } finally {
      setSaving(false);
    }
  };

  /* ---- render --------------------------------------------------- */

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-4xl w-full h-[90vh] sm:h-[85vh] flex flex-col p-0 gap-0">
        <DialogHeader className="px-6 pt-6 pb-0 flex-shrink-0">
          <DialogTitle className="text-xl">
            {isEdit ? 'Edit Product' : 'Add New Product'}
          </DialogTitle>
        </DialogHeader>

        {loadingProduct ? (
          <div className="flex-1 flex items-center justify-center">
            <Loader2 className="size-6 animate-spin text-neutral-400" />
          </div>
        ) : (
          <>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="flex-1 flex flex-col min-h-0 px-6"
            >
              <TabsList className="flex-shrink-0 w-full justify-start overflow-x-auto mb-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="taxonomy">Taxonomy</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="attributes">Attributes</TabsTrigger>
                <TabsTrigger value="images">Images</TabsTrigger>
                <TabsTrigger value="organization">Organization</TabsTrigger>
              </TabsList>

              <div className="flex-1 min-h-0 overflow-y-auto">
                {/* ---- Basic Info ---- */}
                <TabsContent value="basic" className="space-y-4 pb-6">
                  <div className="space-y-2">
                    <Label htmlFor="p-name">
                      Product Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="p-name"
                      placeholder="e.g. Classic Cotton Hoodie"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="p-slug">Slug</Label>
                    <Input
                      id="p-slug"
                      placeholder="auto-generated-from-name"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="p-desc">Description</Label>
                    <Textarea
                      id="p-desc"
                      placeholder="Product description..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="min-h-24"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="p-sku">SKU</Label>
                    <Input
                      id="p-sku"
                      placeholder="Optional unique SKU"
                      value={sku}
                      onChange={(e) => setSku(e.target.value)}
                    />
                  </div>
                </TabsContent>

                {/* ---- Taxonomy ---- */}
                <TabsContent value="taxonomy" className="space-y-4 pb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>
                        Department <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={department}
                        onValueChange={(v) => {
                          setDepartment(v);
                          setCategory(''); // Reset category when department changes
                        }}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          {DEPARTMENTS.map((d) => (
                            <SelectItem key={d} value={d}>
                              {d}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>
                        Category <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={category}
                        onValueChange={setCategory}
                        disabled={!department}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue
                            placeholder={
                              department ? 'Select category' : 'Select department first'
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="p-subcat">Subcategory</Label>
                    <Input
                      id="p-subcat"
                      placeholder="Optional subcategory"
                      value={subcategory}
                      onChange={(e) => setSubcategory(e.target.value)}
                    />
                  </div>
                </TabsContent>

                {/* ---- Pricing ---- */}
                <TabsContent value="pricing" className="space-y-4 pb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="p-price">
                        Price ($) <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="p-price"
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="29.99"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="p-orig-price">Original Price ($)</Label>
                      <Input
                        id="p-orig-price"
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="49.99 (optional)"
                        value={originalPrice}
                        onChange={(e) => setOriginalPrice(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <Switch
                        checked={onSale}
                        onCheckedChange={setOnSale}
                        id="p-onsale"
                      />
                      <Label htmlFor="p-onsale" className="cursor-pointer">
                        On Sale
                      </Label>
                    </div>

                    {onSale && (
                      <div className="space-y-2 flex-1 max-w-40">
                        <Label htmlFor="p-discount">Discount %</Label>
                        <Input
                          id="p-discount"
                          type="number"
                          min="0"
                          max="100"
                          placeholder="e.g. 40"
                          value={discountPct}
                          onChange={(e) => setDiscountPct(e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* ---- Attributes ---- */}
                <TabsContent value="attributes" className="space-y-5 pb-6">
                  <div className="space-y-2">
                    <Label htmlFor="p-sizes">
                      Sizes{' '}
                      <span className="text-neutral-400 font-normal">
                        (comma-separated)
                      </span>
                    </Label>
                    <Input
                      id="p-sizes"
                      placeholder="S, M, L, XL, 2XL"
                      value={sizesText}
                      onChange={(e) => setSizesText(e.target.value)}
                    />
                  </div>

                  {/* Colors */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Colors</Label>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={addColor}
                      >
                        <Plus size={14} /> Add Color
                      </Button>
                    </div>

                    {colors.length > 0 && (
                      <div className="space-y-2">
                        {colors.map((c, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <input
                              type="color"
                              value={c.hex}
                              onChange={(e) =>
                                updateColor(i, 'hex', e.target.value)
                              }
                              className="h-9 w-10 cursor-pointer rounded border border-neutral-200 p-0.5"
                            />
                            <Input
                              placeholder="Color name"
                              value={c.name}
                              onChange={(e) =>
                                updateColor(i, 'name', e.target.value)
                              }
                              className="flex-1"
                            />
                            <button
                              type="button"
                              onClick={() => removeColor(i)}
                              className="p-1.5 text-neutral-400 hover:text-red-500 transition-colors"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="p-color-count">Color Count</Label>
                    <Input
                      id="p-color-count"
                      type="number"
                      min="0"
                      placeholder="Auto-calculated"
                      value={colorCount}
                      onChange={(e) => setColorCount(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="p-fabric">Fabric</Label>
                      <Input
                        id="p-fabric"
                        placeholder="e.g. 100% Cotton"
                        value={fabric}
                        onChange={(e) => setFabric(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="p-material">Material</Label>
                      <Input
                        id="p-material"
                        placeholder="e.g. Cotton Blend"
                        value={material}
                        onChange={(e) => setMaterial(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="p-dimensions">Dimensions</Label>
                    <Input
                      id="p-dimensions"
                      placeholder="e.g. 10 x 5 x 3 in"
                      value={dimensions}
                      onChange={(e) => setDimensions(e.target.value)}
                    />
                  </div>

                  {department === 'Beauty' && (
                    <div className="space-y-2">
                      <Label htmlFor="p-beauty-size">Beauty Size</Label>
                      <Input
                        id="p-beauty-size"
                        placeholder="e.g. 30ml, 50g"
                        value={beautySize}
                        onChange={(e) => setBeautySize(e.target.value)}
                      />
                    </div>
                  )}
                </TabsContent>

                {/* ---- Images ---- */}
                <TabsContent value="images" className="space-y-5 pb-6">
                  {/* URL input */}
                  <div className="space-y-2">
                    <Label>Add Image URL</Label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="https://example.com/image.jpg"
                        value={imageUrlInput}
                        onChange={(e) => setImageUrlInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            addImageUrl();
                          }
                        }}
                      />
                      <Button variant="secondary" onClick={addImageUrl}>
                        <Plus size={14} /> Add
                      </Button>
                    </div>
                  </div>

                  {/* Upload zone */}
                  <div className="space-y-2">
                    <Label>Upload Image</Label>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => fileInputRef.current?.click()}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ')
                          fileInputRef.current?.click();
                      }}
                      className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center hover:border-neutral-400 transition-colors cursor-pointer"
                    >
                      {uploading ? (
                        <div className="flex flex-col items-center gap-2">
                          <Loader2 className="size-6 animate-spin text-neutral-400" />
                          <p className="text-sm text-neutral-500">Uploading...</p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <Upload className="size-8 text-neutral-400" />
                          <p className="text-sm text-neutral-500">
                            Click to upload or drag & drop
                          </p>
                          <p className="text-xs text-neutral-400">
                            PNG, JPG, GIF, WebP up to 5MB
                          </p>
                        </div>
                      )}
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>

                  {/* Image grid */}
                  {images.length > 0 && (
                    <div className="space-y-2">
                      <Label>Current Images ({images.length})</Label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {images.map((url, i) => (
                          <div
                            key={i}
                            className="relative group aspect-square rounded-lg border border-neutral-200 overflow-hidden bg-neutral-50"
                          >
                            <img
                              src={url}
                              alt={`Product image ${i + 1}`}
                              className="object-cover w-full h-full"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(i)}
                              className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X size={12} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </TabsContent>

                {/* ---- Organization ---- */}
                <TabsContent value="organization" className="space-y-5 pb-6">
                  {/* Badges chips */}
                  <div className="space-y-3">
                    <Label>Badges</Label>
                    <div className="flex flex-wrap gap-2">
                      {COMMON_BADGES.map((badge) => (
                        <button
                          key={badge}
                          type="button"
                          onClick={() => toggleBadge(badge)}
                          className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
                            badges.includes(badge)
                              ? 'bg-neutral-900 text-white border-neutral-900'
                              : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400'
                          }`}
                        >
                          {badge}
                        </button>
                      ))}
                    </div>
                    {badges.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {badges.map((b) => (
                          <span
                            key={b}
                            className="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-neutral-100 text-neutral-700 rounded-full"
                          >
                            {b}
                            <button
                              type="button"
                              onClick={() => toggleBadge(b)}
                              className="text-neutral-400 hover:text-red-500"
                            >
                              <X size={10} />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="space-y-2">
                    <Label htmlFor="p-tags">
                      Tags{' '}
                      <span className="text-neutral-400 font-normal">
                        (comma-separated)
                      </span>
                    </Label>
                    <Input
                      id="p-tags"
                      placeholder="e.g. summer, casual, cotton"
                      value={tagsText}
                      onChange={(e) => setTagsText(e.target.value)}
                    />
                  </div>

                  {/* Sort Order */}
                  <div className="space-y-2">
                    <Label htmlFor="p-sort">Sort Order</Label>
                    <Input
                      id="p-sort"
                      type="number"
                      min="0"
                      placeholder="0"
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                    />
                  </div>

                  {/* Published toggle */}
                  <div className="flex items-center gap-3">
                    <Switch
                      checked={isPublished}
                      onCheckedChange={setIsPublished}
                      id="p-published"
                    />
                    <Label htmlFor="p-published" className="cursor-pointer">
                      Published
                    </Label>
                  </div>
                </TabsContent>
              </div>
            </Tabs>

            {/* ---- Error & Footer ---- */}
            {error && (
              <div className="px-6 flex-shrink-0">
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  {error}
                </p>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-neutral-200 flex-shrink-0">
              <Button variant="secondary" onClick={onClose} disabled={saving}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSave} disabled={saving}>
                {saving && <Loader2 size={14} className="animate-spin" />}
                {isEdit ? 'Save Changes' : 'Create Product'}
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
