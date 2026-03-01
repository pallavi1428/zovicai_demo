"use client";
import { useState, useMemo } from 'react';
import { effects } from '../data/effects';
import { filterEffects } from '../utils/filters';
import { useDebounce } from '@/shared/hooks/useDebounce';
import type { EffectCategory } from '@/config/constants';

export function useEffects(initialCategory: EffectCategory = 'All') {
  const [category, setCategory] = useState<EffectCategory>(initialCategory);
  const [searchInput, setSearchInput] = useState('');
  
  const debouncedSearch = useDebounce(searchInput, 300);

  const filteredEffects = useMemo(() => 
    filterEffects(effects, category, debouncedSearch),
    [category, debouncedSearch]
  );

  return {
    effects: filteredEffects,
    category,
    setCategory,
    searchInput,
    setSearchInput,
    totalCount: effects.length,
    filteredCount: filteredEffects.length,
  };
}