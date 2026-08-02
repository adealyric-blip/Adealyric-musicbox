'use client';

import { useState, useEffect, useCallback } from 'react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/Badge';
import { ProductFormModal } from '@/components/admin/ProductFormModal';
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  Package,
  ShoppingBag,
  Tag,
  FileText,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  Loader2,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  department: string;
  category: string;
  subcategory?: string;
  price: number;
  originalPrice?: number;
  onSale: boolean;
  discountPct?: number;
  sku?: string;
  isPublished: boolean;
  sortOrder: number;
  images?: string;
  badges?: string;
  tags?: string;
  createdAt: string;
  updatedAt: string;
}

interface Stats {
  total: number;
  published: number;
  onSale: number;
  draft: number;
}

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

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function tryParseJSON<T>(raw: string | null | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function formatPrice(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function getFirstImage(imagesRaw: string | undefined | null): string | null {
  const arr = tryParseJSON<string[]>(imagesRaw, []);
  return arr.length > 0 ? arr[0] : null;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ShopCatalogPage() {
  /* ---- state --------------------------------------------------- */
  const [products, setProducts] = useState<Product[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  // Filters
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [department, setDepartment] = useState('');
  const [category, setCategory] = useState('');
  const [published, setPublished] = useState('');
  const [page, setPage] = useState(1);
  const limit = 20;

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  const categories = department ? CATEGORY_MAP[department] || [] : [];

  /* ---- fetch products ------------------------------------------- */
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.set('search', search);
      if (department) params.set('department', department);
      if (category) params.set('category', category);
      if (published) params.set('published', published);
      params.set('page', String(page));
      params.set('limit', String(limit));

      const res = await fetch(`/api/admin/products?${params.toString()}`);
      const json = await res.json();
      if (json.success) {
        setProducts(json.data || []);
        setTotalPages(json.pagination?.totalPages || 1);
      }
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }, [search, department, category, published, page]);

  /* ---- fetch stats ---------------------------------------------- */
  const fetchStats = useCallback(async () => {
    try {
      // Fetch all products without pagination to calculate stats
      const res = await fetch('/api/admin/products?limit=1');
      const json = await res.json();
      if (json.success) {
        const total = json.pagination?.total || 0;
        // We need to compute published/onSale/draft from a separate query
        // For efficiency, fetch with limit=0 and read total, then make 2 more calls
        const [pubRes, saleRes] = await Promise.all([
          fetch('/api/admin/products?published=true&limit=1'),
          fetch('/api/admin/products?onSale=true&limit=1'),
        ]);
        const [pubJson, saleJson] = await Promise.all([
          pubRes.json(),
          saleRes.json(),
        ]);
        const publishedCount = pubJson.success ? pubJson.pagination?.total || 0 : 0;
        const onSaleCount = saleJson.success ? saleJson.pagination?.total || 0 : 0;

        setStats({
          total,
          published: publishedCount,
          onSale: onSaleCount,
          draft: total - publishedCount,
        });
      }
    } catch {
      // silent
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  /* ---- handlers ------------------------------------------------ */

  const handleSearch = () => {
    setSearch(searchInput);
    setPage(1);
  };

  const handleDepartmentChange = (val: string) => {
    setDepartment(val);
    setCategory('');
    setPage(1);
  };

  const handleCategoryChange = (val: string) => {
    setCategory(val);
    setPage(1);
  };

  const handlePublishedChange = (val: string) => {
    setPublished(val);
    setPage(1);
  };

  const handleOpenCreate = () => {
    setEditingId(null);
    setModalOpen(true);
  };

  const handleOpenEdit = (id: string) => {
    setEditingId(id);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setEditingId(null);
  };

  const handleModalSuccess = () => {
    fetchProducts();
    fetchStats();
  };

  const handleTogglePublish = async (id: string, currentPublished: boolean) => {
    try {
      const res = await fetch(`/api/admin/products/${id}/publish`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: !currentPublished }),
      });
      const json = await res.json();
      if (json.success) {
        fetchProducts();
        fetchStats();
      }
    } catch {
      // silent
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    setDeleting(id);
    try {
      const res = await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
      const json = await res.json();
      if (json.success) {
        fetchProducts();
        fetchStats();
      }
    } catch {
      // silent
    } finally {
      setDeleting(null);
    }
  };

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
  };

  /* ---- render --------------------------------------------------- */

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Shop All</h1>
          <p className="text-sm text-neutral-500 mt-1">
            Full product catalog management
          </p>
        </div>

        {/* Stats Bar */}
        {stats === null ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-20 rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl border border-neutral-200 p-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center">
                  <Package size={18} className="text-neutral-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">
                    {stats.total}
                  </p>
                  <p className="text-xs text-neutral-500">Total Products</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center">
                  <Eye size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">
                    {stats.published}
                  </p>
                  <p className="text-xs text-neutral-500">Published</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center">
                  <Tag size={18} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">
                    {stats.onSale}
                  </p>
                  <p className="text-xs text-neutral-500">On Sale</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center">
                  <FileText size={18} className="text-neutral-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">
                    {stats.draft}
                  </p>
                  <p className="text-xs text-neutral-500">Draft</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Toolbar */}
        <div className="bg-white rounded-xl border border-neutral-200 p-4">
          <div className="flex flex-col gap-3">
            {/* Search + Filters row */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative flex-1">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
                />
                <Input
                  placeholder="Search products..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearch();
                  }}
                  className="pl-9"
                />
              </div>

              {/* Department */}
              <Select
                value={department}
                onValueChange={handleDepartmentChange}
              >
                <SelectTrigger className="w-full sm:w-[160px]">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="__all">All Departments</SelectItem>
                  {DEPARTMENTS.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Category */}
              <Select
                value={category}
                onValueChange={handleCategoryChange}
                disabled={!department}
              >
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue
                    placeholder={
                      department ? 'Category' : 'Pick dept. first'
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

              {/* Published */}
              <Select
                value={published}
                onValueChange={handlePublishedChange}
              >
                <SelectTrigger className="w-full sm:w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="__all">All</SelectItem>
                  <SelectItem value="true">Published</SelectItem>
                  <SelectItem value="false">Draft</SelectItem>
                </SelectContent>
              </Select>

              {/* Add button */}
              <Button variant="primary" onClick={handleOpenCreate} className="w-full sm:w-auto">
                <Plus size={16} /> Add Product
              </Button>
            </div>

            {/* Clear filters indicator */}
            {(search || department || category || published) && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-neutral-400">Active filters:</span>
                {search && (
                  <Badge color="blue" size="sm">
                    Search: {search}
                    <button
                      onClick={() => {
                        setSearch('');
                        setSearchInput('');
                        setPage(1);
                      }}
                      className="ml-1.5 text-blue-400 hover:text-blue-700"
                    >
                      &times;
                    </button>
                  </Badge>
                )}
                {department && department !== '__all' && (
                  <Badge color="blue" size="sm">
                    {department}
                    <button
                      onClick={() => {
                        handleDepartmentChange('');
                      }}
                      className="ml-1.5 text-blue-400 hover:text-blue-700"
                    >
                      &times;
                    </button>
                  </Badge>
                )}
                {category && (
                  <Badge color="blue" size="sm">
                    {category}
                    <button
                      onClick={() => {
                        setCategory('');
                        setPage(1);
                      }}
                      className="ml-1.5 text-blue-400 hover:text-blue-700"
                    >
                      &times;
                    </button>
                  </Badge>
                )}
                {published && published !== '__all' && (
                  <Badge color="blue" size="sm">
                    {published === 'true' ? 'Published' : 'Draft'}
                    <button
                      onClick={() => {
                        setPublished('');
                        setPage(1);
                      }}
                      className="ml-1.5 text-blue-400 hover:text-blue-700"
                    >
                      &times;
                    </button>
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Product Table / Grid */}
        <div className="bg-white rounded-xl border border-neutral-200">
          {loading ? (
            <div className="p-6 space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-lg flex-shrink-0" />
                  <Skeleton className="h-4 flex-1 max-w-[200px]" />
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-8 w-8" />
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                <ShoppingBag size={28} className="text-neutral-400" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                No products yet
              </h3>
              <p className="text-sm text-neutral-500 mb-4">
                Get started by adding your first product to the catalog.
              </p>
              <Button variant="primary" onClick={handleOpenCreate}>
                <Plus size={16} /> Add Product
              </Button>
            </div>
          ) : (
            <>
              {/* Desktop table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200 text-left">
                      <th className="px-4 py-3 font-medium text-neutral-500 w-16">
                        Image
                      </th>
                      <th className="px-4 py-3 font-medium text-neutral-500">
                        Name
                      </th>
                      <th className="px-4 py-3 font-medium text-neutral-500">
                        Department
                      </th>
                      <th className="px-4 py-3 font-medium text-neutral-500">
                        Category
                      </th>
                      <th className="px-4 py-3 font-medium text-neutral-500 text-right">
                        Price
                      </th>
                      <th className="px-4 py-3 font-medium text-neutral-500 text-right">
                        Sale Price
                      </th>
                      <th className="px-4 py-3 font-medium text-neutral-500">
                        Status
                      </th>
                      <th className="px-4 py-3 font-medium text-neutral-500 text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p) => {
                      const img = getFirstImage(p.images);
                      return (
                        <tr
                          key={p.id}
                          className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors"
                        >
                          <td className="px-4 py-3">
                            {img ? (
                              <div className="w-10 h-10 rounded-lg border border-neutral-200 overflow-hidden bg-neutral-50">
                                <img
                                  src={img}
                                  alt={p.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : (
                              <div className="w-10 h-10 rounded-lg border border-neutral-200 bg-neutral-50 flex items-center justify-center">
                                <ImageIcon
                                  size={16}
                                  className="text-neutral-300"
                                />
                              </div>
                            )}
                          </td>
                          <td className="px-4 py-3">
                            <p className="font-medium text-neutral-900 truncate max-w-[200px]">
                              {p.name}
                            </p>
                            {p.sku && (
                              <p className="text-xs text-neutral-400 mt-0.5">
                                {p.sku}
                              </p>
                            )}
                          </td>
                          <td className="px-4 py-3 text-neutral-600">
                            {p.department}
                          </td>
                          <td className="px-4 py-3 text-neutral-600">
                            {p.category}
                          </td>
                          <td className="px-4 py-3 text-right font-medium text-neutral-900">
                            {formatPrice(p.price)}
                          </td>
                          <td className="px-4 py-3 text-right">
                            {p.onSale && p.price < (p.originalPrice || 0) ? (
                              <span className="text-red-600 font-medium">
                                {formatPrice(p.price)}
                              </span>
                            ) : (
                              <span className="text-neutral-300">—</span>
                            )}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1.5">
                              {p.isPublished ? (
                                <Badge color="green" size="sm">
                                  Published
                                </Badge>
                              ) : (
                                <Badge color="gray" size="sm">
                                  Draft
                                </Badge>
                              )}
                              {p.onSale && (
                                <Badge color="amber" size="sm">
                                  Sale
                                </Badge>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center justify-end gap-1">
                              <button
                                onClick={() => handleOpenEdit(p.id)}
                                className="p-1.5 rounded-md text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
                                title="Edit"
                              >
                                <Pencil size={15} />
                              </button>
                              <button
                                onClick={() =>
                                  handleTogglePublish(p.id, p.isPublished)
                                }
                                className="p-1.5 rounded-md text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
                                title={
                                  p.isPublished ? 'Unpublish' : 'Publish'
                                }
                              >
                                {p.isPublished ? (
                                  <EyeOff size={15} />
                                ) : (
                                  <Eye size={15} />
                                )}
                              </button>
                              <button
                                onClick={() => handleDelete(p.id)}
                                disabled={deleting === p.id}
                                className="p-1.5 rounded-md text-neutral-400 hover:text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
                                title="Delete"
                              >
                                {deleting === p.id ? (
                                  <Loader2
                                    size={15}
                                    className="animate-spin"
                                  />
                                ) : (
                                  <Trash2 size={15} />
                                )}
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile card layout */}
              <div className="md:hidden divide-y divide-neutral-100">
                {products.map((p) => {
                  const img = getFirstImage(p.images);
                  return (
                    <div key={p.id} className="p-4 space-y-3">
                      <div className="flex gap-3">
                        {img ? (
                          <div className="w-16 h-16 rounded-lg border border-neutral-200 overflow-hidden bg-neutral-50 flex-shrink-0">
                            <img
                              src={img}
                              alt={p.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-16 h-16 rounded-lg border border-neutral-200 bg-neutral-50 flex items-center justify-center flex-shrink-0">
                            <ImageIcon
                              size={20}
                              className="text-neutral-300"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-neutral-900 truncate">
                            {p.name}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {p.department} &middot; {p.category}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-medium text-neutral-900">
                              {formatPrice(p.price)}
                            </span>
                            {p.isPublished ? (
                              <Badge color="green" size="sm">
                                Published
                              </Badge>
                            ) : (
                              <Badge color="gray" size="sm">
                                Draft
                              </Badge>
                            )}
                            {p.onSale && (
                              <Badge color="amber" size="sm">
                                Sale
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => handleOpenEdit(p.id)}
                          className="p-2 rounded-md text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => handleTogglePublish(p.id, p.isPublished)}
                          className="p-2 rounded-md text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
                        >
                          {p.isPublished ? (
                            <EyeOff size={16} />
                          ) : (
                            <Eye size={16} />
                          )}
                        </button>
                        <button
                          onClick={() => handleDelete(p.id)}
                          disabled={deleting === p.id}
                          className="p-2 rounded-md text-neutral-400 hover:text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
                        >
                          {deleting === p.id ? (
                            <Loader2 size={16} className="animate-spin" />
                          ) : (
                            <Trash2 size={16} />
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between px-4 py-3 border-t border-neutral-200">
                  <p className="text-sm text-neutral-500">
                    Page {page} of {totalPages}
                  </p>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => goToPage(page - 1)}
                      disabled={page <= 1}
                      className="p-1.5 rounded-md text-neutral-500 hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    {/* Show page numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter((p) => {
                        // Show first, last, and nearby pages
                        if (p === 1 || p === totalPages) return true;
                        if (Math.abs(p - page) <= 1) return true;
                        return false;
                      })
                      .reduce<(number | '...')[]>((acc, p, i, arr) => {
                        if (i > 0 && p - (arr[i - 1] as number) > 1) {
                          acc.push('...');
                        }
                        acc.push(p);
                        return acc;
                      }, [])
                      .map((item, idx) =>
                        item === '...' ? (
                          <span
                            key={`dots-${idx}`}
                            className="px-2 text-neutral-400 text-sm"
                          >
                            ...
                          </span>
                        ) : (
                          <button
                            key={item}
                            onClick={() => goToPage(item)}
                            className={`min-w-[32px] h-8 rounded-md text-sm font-medium transition-colors ${
                              item === page
                                ? 'bg-neutral-900 text-white'
                                : 'text-neutral-600 hover:bg-neutral-100'
                            }`}
                          >
                            {item}
                          </button>
                        ),
                      )}

                    <button
                      onClick={() => goToPage(page + 1)}
                      disabled={page >= totalPages}
                      className="p-1.5 rounded-md text-neutral-500 hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Product Form Modal */}
      <ProductFormModal
        open={modalOpen}
        onClose={handleModalClose}
        productId={editingId}
        onSuccess={handleModalSuccess}
      />
    </AdminLayout>
  );
}
