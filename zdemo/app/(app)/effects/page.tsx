import { EffectsGrid } from '@/features/effects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Effects Library | zDemo',
  description: 'Browse our collection of professional video effects',
};

export default function EffectsPage() {
  return <EffectsGrid />;
}