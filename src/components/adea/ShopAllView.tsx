"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  getAllProducts,
  getDepartments,
  getCategoriesForDepartment,
  getProductsByDepartment,
  getProductBySlug,
  type Department,
  type ShopCatalogProduct,
} from "@/lib/shop-catalog";
import { ShoppingBag, ChevronDown, SlidersHorizontal, X } from "lucide-react";

type SortOption = "newest" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "name-asc", label: "Name A → Z" },
  { value: "name-desc", label: "Name Z → A" },
];

/* ═══════════════════════════════════════════════════
   CATEGORY BANNER
   ═══════════════════════════════════════════════════ */

function CategoryBanner({
  department,
  category,
  subcategory,
  count,
}: {
  department?: Department | null;
  category?: string | null;
  subcategory?: string | null;
  count: number;
}) {
  const label = subcategory || category || department || "Shop All";
  const subtitle = subcategory
    ? `${category} — ${subcategory}`
    : category
    ? `${department} — ${category}`
    : department
    ? department
    : "All Products";

  return (
    <div className="relative overflow-hidden bg-black text-white px-6 py-10 md:px-12 md:py-14 mb-10">
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
          {subtitle}
        </p>
        <h2 className="text-display text-[clamp(1.8rem,4vw,3.5rem)] leading-[0.9] uppercase">
          {label}
        </h2>
        <p className="mt-3 text-[12px] text-white/50">
          {count} {count === 1 ? "item" : "items"}
        </p>
      </div>
      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   FILTER PILL
   ═══════════════════════════════════════════════════ */

function FilterPill({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count?: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-2 text-[11px] uppercase tracking-[0.15em] border transition-all cursor-pointer whitespace-nowrap ${
        active
          ? "border-black bg-black text-white"
          : "border-black/15 text-black/60 hover:border-black/40 hover:text-black"
      }`}
    >
      {label}
      {count !== undefined && (
        <span className={`text-[9px] ${active ? "text-white/50" : "text-black/30"}`}>
          {count}
        </span>
      )}
    </button>
  );
}

/* ═══════════════════════════════════════════════════
   SORT SELECT
   ═══════════════════════════════════════════════════ */

function SortSelect({
  value,
  onChange,
}: {
  value: SortOption;
  onChange: (v: SortOption) => void;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="appearance-none bg-transparent border border-black/15 px-4 py-2 pr-8 text-[11px] uppercase tracking-[0.1em] text-black/70 cursor-pointer focus:outline-none focus:border-black/40"
      >
        {SORT_OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3 w-3 pointer-events-none text-black/40" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   PRODUCT CARD
   ═══════════════════════════════════════════════════ */

function ProductCard({ product }: { product: ShopCatalogProduct }) {
  const router = useRouter();
  const hasPrice = product.price > 0;
  const displayPrice = hasPrice ? `$${product.price.toFixed(2)}` : null;
  const displayOriginal = product.originalPrice
    ? `$${product.originalPrice.toFixed(2)}`
    : null;

  return (
    <div
      className="group cursor-pointer"
      onClick={() => router.push(`/shop/${product.slug}`)}
    >
      <div className="relative aspect-square overflow-hidden bg-[#f0f0f0]">
        <div className="flex h-full w-full items-center justify-center">
          <ShoppingBag className="h-8 w-8 text-black/8" />
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        {/* Badges */}
        {product.badges.length > 0 && (
          <div className="absolute left-2 top-2 flex flex-col gap-1">
            {product.badges.map((badge) => (
              <span
                key={badge}
                className={`px-2 py-0.5 text-[8px] font-medium uppercase tracking-wider ${
                  badge === "NEW"
                    ? "bg-black text-white"
                    : badge === "BESTSELLER"
                    ? "bg-black text-white"
                    : badge === "TRENDING"
                    ? "bg-black text-white"
                    : badge.includes("%")
                    ? "bg-red-600 text-white"
                    : "bg-black/70 text-white"
                }`}
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        {/* Color count indicator */}
        {product.colorCount && product.colorCount > 1 && (
          <div className="absolute right-2 top-2 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm">
            <span className="text-[9px] text-black/50">
              {product.colorCount} colors
            </span>
          </div>
        )}
      </div>
      <div className="mt-3">
        <p className="text-[11px] font-medium uppercase tracking-wide text-black/80 leading-tight line-clamp-2">
          {product.name}
        </p>
        <div className="mt-1.5 flex items-center gap-2">
          {displayPrice && (
            <span className="text-[13px] text-black">{displayPrice}</span>
          )}
          {displayOriginal && (
            <span className="text-[11px] text-black/30 line-through">
              {displayOriginal}
            </span>
          )}
          {!hasPrice && (
            <span className="text-[11px] text-black/30">Inquire</span>
          )}
        </div>
        {product.sku && (
          <p className="mt-0.5 text-[9px] text-neutral-300 font-mono tracking-wider">
            {product.sku}
          </p>
        )}
        {product.beautySize && (
          <p className="mt-0.5 text-[10px] text-black/40">{product.beautySize}</p>
        )}
        {product.fabric && (
          <p className="mt-0.5 text-[9px] text-black/30">{product.fabric}</p>
        )}
        {product.material && (
          <p className="mt-0.5 text-[9px] text-black/30">{product.material}</p>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   ACTIVE FILTERS CHIPS
   ═══════════════════════════════════════════════════ */

function ActiveFilters({
  department,
  category,
  subcategory,
  badge,
  onClear,
}: {
  department: Department | null;
  category: string | null;
  subcategory: string | null;
  badge: string | null;
  onClear: (filter: "department" | "category" | "subcategory" | "badge") => void;
}) {
  const filters: { key: "department" | "category" | "subcategory" | "badge"; label: string }[] = [];
  if (department) filters.push({ key: "department", label: department });
  if (category) filters.push({ key: "category", label: category });
  if (subcategory) filters.push({ key: "subcategory", label: subcategory });
  if (badge) filters.push({ key: "badge", label: badge });

  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() => onClear(f.key)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-black/5 text-[10px] uppercase tracking-wider text-black/70 hover:bg-black/10 transition-colors cursor-pointer"
        >
          {f.label}
          <X className="h-2.5 w-2.5" />
        </button>
      ))}
      <button
        onClick={() => {
          onClear("department");
          onClear("category");
          onClear("subcategory");
          onClear("badge");
        }}
        className="text-[10px] uppercase tracking-wider text-black/40 hover:text-black underline cursor-pointer ml-2"
      >
        Clear all
      </button>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   SHOP ALL VIEW
   ═══════════════════════════════════════════════════ */

export function ShopAllView() {
  const [activeDept, setActiveDept] = useState<Department | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [activeBadge, setActiveBadge] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("newest");
  const [showFilters, setShowFilters] = useState(false);

  const departments = useMemo(() => getDepartments(), []);
  const categories = useMemo(
    () => (activeDept ? getCategoriesForDepartment(activeDept) : []),
    [activeDept]
  );

  const availableBadges = useMemo(() => {
    let items = activeDept
      ? getProductsByDepartment(activeDept)
      : getAllProducts();
    if (activeCategory)
      items = items.filter((p) => p.category === activeCategory);
    if (activeSub)
      items = items.filter((p) => p.subcategory === activeSub);
    const set = new Set<string>();
    for (const p of items) for (const b of p.badges) set.add(b);
    return Array.from(set).sort();
  }, [activeDept, activeCategory, activeSub]);

  const products = useMemo(() => {
    let items = activeDept
      ? getProductsByDepartment(activeDept)
      : getAllProducts();

    if (activeCategory)
      items = items.filter((p) => p.category === activeCategory);
    if (activeSub)
      items = items.filter((p) => p.subcategory === activeSub);
    if (activeBadge)
      items = items.filter((p) => p.badges.includes(activeBadge));

    switch (sort) {
      case "price-asc":
        items = [...items].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        items = [...items].sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        items = [...items].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        items = [...items].sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        items = [...items].sort((a, b) => a.sortOrder - b.sortOrder);
    }

    return items;
  }, [activeDept, activeCategory, activeSub, activeBadge, sort]);

  const handleDeptChange = (dept: Department) => {
    if (activeDept === dept) {
      setActiveDept(null);
    } else {
      setActiveDept(dept);
    }
    setActiveCategory(null);
    setActiveSub(null);
  };

  const handleCategoryChange = (cat: string) => {
    if (activeCategory === cat) {
      setActiveCategory(null);
    } else {
      setActiveCategory(cat);
    }
    setActiveSub(null);
  };

  const handleClear = (filter: "department" | "category" | "subcategory" | "badge") => {
    switch (filter) {
      case "department":
        setActiveDept(null);
        setActiveCategory(null);
        setActiveSub(null);
        break;
      case "category":
        setActiveCategory(null);
        setActiveSub(null);
        break;
      case "subcategory":
        setActiveSub(null);
        break;
      case "badge":
        setActiveBadge(null);
        break;
    }
  };

  const currentCategoryData = categories.find(
    (c) => c.category === activeCategory
  );

  return (
    <div className="mt-8">
      {/* ── Category Banner ── */}
      {(activeDept || activeCategory || activeSub) && (
        <CategoryBanner
          department={activeDept}
          category={activeCategory}
          subcategory={activeSub}
          count={products.length}
        />
      )}

      {/* ── Department Pills ── */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <FilterPill
          label="All"
          count={getAllProducts().length}
          active={!activeDept}
          onClick={() => {
            setActiveDept(null);
            setActiveCategory(null);
            setActiveSub(null);
          }}
        />
        {departments.map((d) => (
          <FilterPill
            key={d.dept}
            label={d.label}
            count={d.count}
            active={activeDept === d.dept}
            onClick={() => handleDeptChange(d.dept)}
          />
        ))}

        {/* Mobile filter toggle */}
        <button
          className="md:hidden flex items-center gap-1.5 px-3 py-2 text-[11px] uppercase tracking-[0.1em] border border-black/15 text-black/60 hover:border-black/40 transition-colors cursor-pointer ml-auto"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="h-3 w-3" />
          Filters
        </button>

        {/* Sort */}
        <div className="ml-auto hidden md:block">
          <SortSelect value={sort} onChange={setSort} />
        </div>
      </div>

      {/* ── Expanded Filters (always on desktop, toggle on mobile) ── */}
      <div className={`${showFilters ? "block" : "hidden"} md:block`}>
        {/* Category Pills */}
        {categories.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {categories.map((c) => (
              <FilterPill
                key={c.category}
                label={c.category}
                count={c.count}
                active={activeCategory === c.category}
                onClick={() => handleCategoryChange(c.category)}
              />
            ))}
          </div>
        )}

        {/* Subcategory Pills */}
        {currentCategoryData && currentCategoryData.subcategories.length > 1 && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <FilterPill
              label="All"
              count={products.filter((p) => p.category === activeCategory).length}
              active={!activeSub}
              onClick={() => setActiveSub(null)}
            />
            {currentCategoryData.subcategories.map((sub) => {
              const subCount = products.filter(
                (p) => p.subcategory === sub
              ).length;
              return (
                <FilterPill
                  key={sub}
                  label={sub}
                  count={subCount}
                  active={activeSub === sub}
                  onClick={() =>
                    setActiveSub(activeSub === sub ? null : sub)
                  }
                />
              );
            })}
          </div>
        )}

        {/* Badge Filters */}
        {availableBadges.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-black/30 pr-2">
              Tags:
            </span>
            {availableBadges.slice(0, 8).map((badge) => (
              <FilterPill
                key={badge}
                label={badge}
                active={activeBadge === badge}
                onClick={() =>
                  setActiveBadge(activeBadge === badge ? null : badge)
                }
              />
            ))}
          </div>
        )}

        {/* Mobile sort */}
        <div className="mb-4 md:hidden">
          <SortSelect value={sort} onChange={setSort} />
        </div>
      </div>

      {/* ── Active Filter Chips ── */}
      <ActiveFilters
        department={activeDept}
        category={activeCategory}
        subcategory={activeSub}
        badge={activeBadge}
        onClear={handleClear}
      />

      {/* ── Results Count ── */}
      <div className="mb-6 text-[10px] uppercase tracking-[0.2em] text-black/40">
        {products.length} {products.length === 1 ? "item" : "items"}
        {activeDept && ` in ${activeDept}`}
        {activeCategory && ` / ${activeCategory}`}
        {activeSub && ` / ${activeSub}`}
        {activeBadge && ` — ${activeBadge}`}
      </div>

      {/* ── Product Grid ── */}
      {products.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-5">
          {products.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24">
          <ShoppingBag className="h-12 w-12 text-black/10 mb-4" />
          <p className="text-sm text-black/40">
            No products match your filters.
          </p>
          <button
            onClick={() => {
              setActiveDept(null);
              setActiveCategory(null);
              setActiveSub(null);
              setActiveBadge(null);
            }}
            className="mt-4 text-[11px] uppercase tracking-[0.15em] text-black/60 hover:text-black underline cursor-pointer"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
