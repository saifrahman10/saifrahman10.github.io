'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Link } from '@/lib/content';
import { cn } from '@/lib/cn';

type HeaderProps = {
  name: string;
  nav: Link[];
};

/** Minimalist header: wordmark on the left, anchor nav on the right. */
export function Header({ name, nav }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 flex justify-between items-center mb-10 md:mb-16 animate-organic px-4">
      <a href="#top" className="text-xl font-serif text-forest tracking-wide">
        {name}
        <span className="text-sage">.</span>
      </a>

      <nav aria-label="Primary" className="hidden md:flex gap-6 text-sm font-medium text-forest/70">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hover:text-forest transition-colors duration-300"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="md:hidden w-10 h-10 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center text-forest"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <nav
        id="mobile-nav"
        aria-label="Primary"
        className={cn(
          'md:hidden absolute right-4 top-full mt-3 min-w-[12rem] flex-col gap-1 p-4 rounded-3xl bg-white/90 backdrop-blur-md shadow-soft text-sm font-medium text-forest/80',
          open ? 'flex' : 'hidden',
        )}
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded-2xl hover:bg-stone/70 hover:text-forest transition-colors duration-300"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
