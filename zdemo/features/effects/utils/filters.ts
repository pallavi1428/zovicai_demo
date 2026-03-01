import { Effect } from '../types';
import { EffectCategory } from '@/config/constants';

export function filterEffects(
  effects: Effect[],
  category: EffectCategory,
  searchQuery: string
): Effect[] {
  const normalizedSearch = searchQuery.toLowerCase().trim();

  return effects.filter((effect) => {
    if (category !== 'All' && !matchesCategory(effect, category)) {
      return false;
    }

    if (normalizedSearch && !matchesSearch(effect, normalizedSearch)) {
      return false;
    }

    return true;
  });
}

function matchesCategory(effect: Effect, category: EffectCategory): boolean {
  const title = effect.title.toLowerCase();

  const matchers: Record<EffectCategory, (e: Effect) => boolean> = {
    All: () => true,

    New: (e) => e.badges?.includes('new') ?? false,

    'Top Choice': (e) => e.badges?.includes('top') ?? false,

    Mixed: (e) => e.badges?.includes('mixed') ?? false,

    Transitions: () => title.includes('transition'),

    Elements: () =>
      ['element', 'fire', 'water', 'earth', 'air'].some((word) =>
        title.includes(word)
      ),

    Explosions: () =>
      ['explosion', 'boom'].some((word) =>
        title.includes(word)
      ),
  };

  return matchers[category](effect);
}

function matchesSearch(effect: Effect, searchTerm: string): boolean {
  const titleMatch = effect.title
    .toLowerCase()
    .includes(searchTerm);

  if (titleMatch) return true;

  if (effect.mixedWith) {
    return effect.mixedWith
      .toLowerCase()
      .includes(searchTerm);
  }

  return false;
}