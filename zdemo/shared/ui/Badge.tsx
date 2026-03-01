import { cn } from '@/shared/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'lime' | 'purple' | 'blue';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const baseClasses = 'backdrop-blur-md border px-3 py-1 text-xs rounded-full inline-block';
  
  const variantClass = {
    default: 'bg-white/10 border-white/20 text-white',
    lime: 'bg-lime-400/20 border-lime-400/30 text-lime-400',
    purple: 'bg-purple-400/20 border-purple-400/30 text-purple-400',
    blue: 'bg-blue-400/20 border-blue-400/30 text-blue-400',
  }[variant];

  return (
    <span className={cn(baseClasses, variantClass, className)}>
      {children}
    </span>
  );
}