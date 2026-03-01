import { cn } from '@/shared/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'lime' | 'purple' | 'blue';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span className={cn(
      'backdrop-blur-md border px-3 py-1 text-xs rounded-full inline-block',
      {
        'bg-white/10 border-white/20 text-white': variant === 'default',
        'bg-lime-400/20 border-lime-400/30 text-lime-400': variant === 'lime',
        'bg-purple-400/20 border-purple-400/30 text-purple-400': variant === 'purple',
        'bg-blue-400/20 border-blue-400/30 text-blue-400': variant === 'blue',
      },
      className
    )}>
      {children}
    </span>
  );
}