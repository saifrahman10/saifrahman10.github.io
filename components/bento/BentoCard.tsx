import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type Delay = 100 | 200 | 300 | 400 | 500 | 600;

/** Maps a list index (0-based) to a staggered entrance delay, capped at 600ms. */
export function stagger(index: number): Delay {
  return ((Math.min(index, 5) + 1) * 100) as Delay;
}

export type BentoCardProps = {
  children: ReactNode;
  /** Extra classes, typically grid spans (md:col-span-2, lg:row-span-2) and a background tone. */
  className?: string;
  /** Staggered entrance delay, in ms (see .organic-delay-* in globals.css). */
  delay?: Delay;
  id?: string;
  /** When set, the whole card becomes a link. */
  href?: string;
  /** Open the link in a new tab (adds rel="noopener noreferrer"). */
  external?: boolean;
  'aria-label'?: string;
};

/**
 * Base bento tile: rounded 2.5rem corners, soft shadow, hover lift and the
 * organic fade-in animation. Every other card composes this.
 */
export function BentoCard({
  children,
  className,
  delay,
  id,
  href,
  external,
  'aria-label': ariaLabel,
}: BentoCardProps) {
  const classes = cn(
    'bento-card animate-organic group relative overflow-hidden rounded-bento shadow-soft hover:shadow-hover-soft scroll-mt-8',
    delay && `organic-delay-${delay}`,
    className,
  );

  if (href) {
    return (
      <a
        id={id}
        href={href}
        aria-label={ariaLabel}
        className={cn(classes, 'cursor-pointer')}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <div id={id} className={classes}>
      {children}
    </div>
  );
}
