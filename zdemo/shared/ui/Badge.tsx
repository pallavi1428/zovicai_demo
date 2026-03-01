interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={`backdrop-blur-md border px-3 py-1 text-xs rounded-full inline-block ${className ?? ''}`}
    >
      {children}
    </span>
  );
}