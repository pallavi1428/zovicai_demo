import { Badge } from '@/shared/ui';
import type { EffectBadge } from '../types';

interface EffectBadgeProps {
  badges: EffectBadge[];
  mixedWith?: string;
}

export function EffectBadge({ badges, mixedWith }: EffectBadgeProps) {
  if (!badges.length) return null;

  if (badges.includes('new')) {
    return <Badge variant="lime">New</Badge>;
  }
  
  if (badges.includes('top')) {
    return <Badge variant="purple">Top Choice</Badge>;
  }
  
  if (badges.includes('mixed')) {
    return <Badge variant="default">Mixed {mixedWith && `× ${mixedWith}`}</Badge>;
  }
  
  return null;
}