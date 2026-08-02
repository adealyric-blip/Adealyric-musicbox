"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  getPublishedProducts,
  getActiveCategories,
  getSubcategories,
  FAN_CATEGORY_MAP,
  CATEGORY_DISPLAY,
  type FanCategory,
} from "@/lib/product-catalog";
import { formatCents } from "@/lib/format";
import { ShoppingBag, ChevronDown } from "lucide-react";

type SortOption = "newest" | "price-asc" | "price-desc" | "name";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name", label: "Name A-Z" },
];

export function ShopAllView() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<FanCategory | null>(null);
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("newest");

  const categories = useMemo(() => getActiveCategories(), []);
  const subcategories = useMemo(
    () => (activeCategory ? getSubcategories(activeCategory) : []),
    [activeCategory]
  );

  const products = useMemo(() => {
    let items = getPublishedProducts();

    if (activeCategory) {
      const catList = FAN_CATEGORY_MAP[activeCategory];
      items = items.filter((p) => catList.includes(p.category));
    }

    if (activeSub) {
      items = items.filter((p) => p.category === activeSub);
    }

    switch (sort) {
      case "price-asc":
        items = [...items].sort((a, b) => a.retailPriceCents - b.retailPriceCents);
        break;
      case "price-desc":
        items = [...items].sort((a, b) => b.retailPriceCents - a.retailPriceCents);
        break;
      case "name":
        items = [...items].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        items = [...items].sort((a, b) => a.sortOrder - b.sortOrder);
    }

    return items;
  }, [activeCategory, activeSub, sort]);

  return (
    <div>
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <button
          onClick={() => { setActiveCategory(null); setActiveSub(null); }}
          className={`px-5 py-2 text-[11px] uppercase tracking-[0.15em] border transition-all cursor-pointer ${
            !activeCategory
              ? "border-black bg-black text-white"
              : "border-black/15 text-black/60 hover:border-black/40"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.fanCat}
            onClick={() => { setActiveCategory(activeCategory === c.fanCat ? null : c.fanCat); setActiveSub(null); }}
            className={`px-5 py-2 text-[11px] uppercase tracking-[0.15em] border transition-all cursor-pointer ${
              activeCategory === c.fanCat
                ? "border-black bg-black text-white"
                : "border-black/15 text-black/60 hover:border-black/40"
            }`}
          >
            {c.label} ({c.count})
          </button>
        ))}

        {/* Sort */}
        <div className="ml-auto relative">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="appearance-none bg-transparent border border-black/15 px-4 py-2 pr-8 text-[11px] uppercase tracking-[0.1em] text-black/70 cursor-pointer focus:outline-none"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 pointer-events-none text-black/40" />
        </div>
      </div>

      {/* Subcategory Pills */}
      {activeCategory && subcategories.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {subcategories.map((sub) => (
            <button
              key={sub}
              onClick={() => setActiveSub(activeSub === sub ? null : sub)}
              className={`px-4 py-1.5 text-[10px] uppercase tracking-[0.15em] border transition-all cursor-pointer ${
                activeSub === sub
                  ? "border-black bg-black text-white"
                  : "border-black/10 text-black/50 hover:border-black/30"
              }`}
            >
              {CATEGORY_DISPLAY[sub] || sub}
            </button>
          ))}
        </div>
      )}

      {/* Results count */}
      <div className="mb-6 text-[10px] uppercase tracking-[0.2em] text-black/40">
        {products.length} {products.length === 1 ? "item" : "items"}
        {activeCategory && ` in ${categories.find((c) => c.fanCat === activeCategory)?.label}`}
        {activeSub && ` / ${CATEGORY_DISPLAY[activeSub] || activeSub}`}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:gap-x-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="group cursor-pointer"
            onClick={() => router.push(`/shop/${p.id}`)}
          >
            <div className="relative aspect-square overflow-hidden bg-[#f0f0f0]">
              {p.images.length > 0 ? (
                <img
                  src={p.images[0]}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <ShoppingBag className="h-8 w-8 text-black/10" />
                </div>
              )}
              {p.badges.length > 0 && (
                <div className="absolute left-3 top-3 flex flex-col gap-1">
                  {p.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider bg-black text-white"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-3">
              <p className="text-[12px] font-medium uppercase tracking-wide text-black/80 leading-tight line-clamp-1">
                {p.name}
              </p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm text-black">
                  {formatCents(p.retailPriceCents)}
                </span>
                {p.sku && (
                  <span className="text-[9px] text-neutral-400 font-mono tracking-wider">
                    {p.sku}
                  </span>
                )}
              </div>
              {p.availableColors.length > 0 && (
                <div className="mt-2 flex gap-1">
                  {p.availableColors.slice(0, 4).map((c) => (
                    <span
                      key={c.name}
                      className="block h-3 w-3 rounded-full border border-black/10"
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24">
          <ShoppingBag className="h-12 w-12 text-black/10 mb-4" />
          <p className="text-sm text-black/40">No products found in this selection.</p>
        </div>
      )}
    </div>
  );
}
