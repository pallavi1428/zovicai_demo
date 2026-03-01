export type EffectBadge = "new" | "top" | "mixed";

export interface Effect {
  id: number;
  title: string;
  posterImage: string;
  videoSrc: string;
  badges?: EffectBadge[];
  mixedWith?: string;
  aspectRatio?: string;
}