import React from 'react';
import { cn } from '@/shared/utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component className={cn('max-w-7xl mx-auto px-6', className)}>
      {children}
    </Component>
  );
}