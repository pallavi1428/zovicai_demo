'use client';

import { Button } from '@/shared/ui';

interface NavbarProps {
  variant?: 'marketing' | 'app';
  showAuth?: boolean;
}

export default function Navbar({ variant = 'marketing', showAuth = true }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-lime-400 flex items-center justify-center font-bold text-black">
            Z
          </div>
          <span className="text-lg font-semibold tracking-tight">
            zDemo
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          {variant === 'marketing' ? (
            // Marketing nav
            <>
              <a href="/features" className="hover:text-white transition">Features</a>
              <a href="/pricing" className="hover:text-white transition">Pricing</a>
              <a href="/about" className="hover:text-white transition">About</a>
            </>
          ) : (
            // App nav
            <>
              <a href="/effects" className="hover:text-white transition">Effects</a>
              <a href="/dashboard" className="hover:text-white transition">Dashboard</a>
              <a href="/settings" className="hover:text-white transition">Settings</a>
            </>
          )}
        </nav>

        {/* Auth Buttons */}
        {showAuth && (
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">Login</Button>
            <Button variant="primary" size="sm">Sign Up</Button>
          </div>
        )}
      </div>
    </header>
  );
}