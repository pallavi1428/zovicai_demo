export function cn(
  ...classes: (string | boolean | undefined | null | Record<string, boolean>)[]
) {
  return classes
    .map((cls) => {
      if (!cls) return '';
      if (typeof cls === 'string') return cls;
      if (typeof cls === 'object') {
        return Object.entries(cls)
          .filter(([_, value]) => value)
          .map(([key]) => key)
          .join(' ');
      }
      return '';
    })
    .filter(Boolean)
    .join(' ');
}