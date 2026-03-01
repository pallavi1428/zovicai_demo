'use client';

import { Container, Button } from '@/shared/ui';
import { useEffect } from 'react';

export default function EffectsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="py-20 text-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-white/60 mb-6">Failed to load effects</p>
      <Button onClick={reset} variant="primary">
        Try again
      </Button>
    </Container>
  );
}