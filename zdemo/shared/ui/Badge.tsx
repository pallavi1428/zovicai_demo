interface BadgeProps {
  children: React.ReactNode;
  variant?: "lime" | "blue" | "pink" | "purple" | "default";
  className?: string;
}

export function Badge({
  children,
  variant = "lime",
  className,
}: BadgeProps) {
  const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
    lime: "bg-lime-400/20 text-lime-300 border-lime-400/30",
    blue: "bg-blue-400/20 text-blue-300 border-blue-400/30",
    pink: "bg-pink-400/20 text-pink-300 border-pink-400/30",
    purple: "bg-purple-400/20 text-purple-300 border-purple-400/30",
    default: "bg-white/10 text-white border-white/20",
  };

  return (
    <span
      className={`backdrop-blur-md border px-3 py-1 text-xs rounded-full inline-block ${variants[variant]} ${className ?? ""}`}
    >
      {children}
    </span>
  );
}