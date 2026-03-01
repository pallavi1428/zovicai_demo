'use client';

import { useEffects } from '../hooks/useEffects';
import { EffectsFilter } from './EffectsFilter';
import EffectCard from './EffectCard';
import { Container } from '@/shared/ui';

export default function EffectsGrid() {
  const {
    effects,
    category,
    setCategory,
    searchInput,
    setSearchInput,
    filteredCount,
  } = useEffects();

  return (
    <div>
      <EffectsFilter
        selectedCategory={category}
        onCategoryChange={setCategory}
        searchQuery={searchInput}
        onSearchChange={setSearchInput}
      />

      <Container className="py-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight">
            Explore Effects
          </h2>
          <span className="text-white/60 text-sm">
            {filteredCount} effects
          </span>
        </div>

        {effects.length > 0 ? (
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {effects.map((effect) => (
              <EffectCard key={effect.id} {...effect} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-white/50">
            No effects found
          </div>
        )}
      </Container>
    </div>
  );
}