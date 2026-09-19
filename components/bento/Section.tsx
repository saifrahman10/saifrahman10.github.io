import type { ReactNode } from 'react';
import { BentoGrid } from './BentoGrid';
import { cn } from '@/lib/cn';

type SectionProps = {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

/** A titled bento block below the hero grid. */
export function Section({ id, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('mt-16 md:mt-24 scroll-mt-8', className)}>
      <div className="px-4 mb-6 md:mb-8 animate-organic">
        <h2 className="font-serif text-3xl md:text-4xl text-forest">
          {title}
          <span className="text-sage">.</span>
        </h2>
        {intro && (
          <p className="mt-3 text-lg text-forest/70 font-light leading-relaxed max-w-2xl">
            {intro}
          </p>
        )}
      </div>
      <BentoGrid>{children}</BentoGrid>
    </section>
  );
}
