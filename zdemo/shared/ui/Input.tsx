import React, { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import { cn } from '@/shared/utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: 'search' | 'none';
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon = 'none', fullWidth, ...props }, ref) => {
    return (
      <div className={cn('relative', fullWidth && 'w-full')}>
        {icon === 'search' && (
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        )}

        <input
          ref={ref}
          className={cn(
            'bg-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lime-400 transition',
            icon === 'search' ? 'pl-10 pr-4' : 'px-4',
            'py-2.5',
            fullWidth && 'w-full',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';