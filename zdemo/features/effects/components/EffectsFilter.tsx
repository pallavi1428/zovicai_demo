'use client';

import { useRef } from 'react';
import { EFFECT_CATEGORIES, type EffectCategory } from '@/config/constants';
import { Input } from '@/shared/ui';

interface EffectsFilterProps {
  selectedCategory: EffectCategory;
  onCategoryChange: (category: EffectCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function EffectsFilter({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: EffectsFilterProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -200 : 200,
      behavior: 'smooth',
    });
  };

  return (
    <div className="sticky top-16 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5">
        
        {/* Search */}
        <div className="mb-5">
          <Input
            type="text"
            placeholder="Search effects..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            icon="search"
            fullWidth
          />
        </div>

        {/* Categories */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 rounded-full px-2 py-1 hidden md:block"
            aria-label="Scroll left"
          >
            ‹
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide md:px-8"
          >
            {EFFECT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  selectedCategory === category
                    ? 'bg-lime-400 text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 rounded-full px-2 py-1 hidden md:block"
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}