import { cn } from '@/shared/utils/cn';

interface LoadingSpinnerProps {
  className?: string;
}

export function LoadingSpinner({ className }: LoadingSpinnerProps) {
  return (
    <div className={cn('animate-pulse bg-gray-800 rounded-2xl', className)} />
  );
}