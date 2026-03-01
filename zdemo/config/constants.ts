export const EFFECT_CATEGORIES = [
  "All",
  "New",
  "Top Choice",
  "Transitions",
  "Elements",
  "Explosions",
  "Mixed",
] as const;

export type EffectCategory = typeof EFFECT_CATEGORIES[number];

export const SITE_CONFIG = {
  name: 'zDemo',
  description: 'Professional video effects for creators',
  url: 'https://zdemo.com',
} as const;