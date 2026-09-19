import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type BentoGridProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/**
 * The bento layout: 1 column on phones, 2 on tablets, 4 on desktop.
 * Rows share equal height from `md` up, and dense flow lets small tiles
 * backfill any gaps left by wide/tall tiles.
 */
export function BentoGrid({ children, className, id }: BentoGridProps) {
  return (
    <div
      id={id}
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 md:auto-rows-fr grid-flow-dense',
        className,
      )}
    >
      {children}
    </div>
  );
}
