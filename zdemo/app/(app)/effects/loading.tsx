import { Container, LoadingSpinner } from '@/shared/ui';

export default function EffectsLoading() {
  return (
    <Container className="py-10">
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {[...Array(12)].map((_, i) => (
          <LoadingSpinner key={i} className="aspect-[3/4]" />
        ))}
      </div>
    </Container>
  );
}