import { ArrowRight } from 'lucide-react';
import { BentoCard, type Delay } from './BentoCard';
import { cn } from '@/lib/cn';

type HeroCardProps = {
  badge: string;
  headline: string;
  /** Word(s) rendered in italic sage at the end of the headline. */
  emphasis: string;
  intro: string;
  cta?: { label: string; href: string };
  delay?: Delay;
  className?: string;
};

/** Bento item 1: main hero / intro tile (spans 2 cols, 2 rows on desktop). */
export function HeroCard({
  badge,
  headline,
  emphasis,
  intro,
  cta,
  delay = 100,
  className,
}: HeroCardProps) {
  return (
    <BentoCard
      delay={delay}
      className={cn('bg-stone/50 p-8 md:p-12 flex flex-col justify-between gap-10', className)}
    >
      {/* Soft sage glow in the corner */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-sage/20 rounded-full blur-3xl group-hover:bg-sage/30 transition-colors duration-700" />

      <div className="relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full text-sm font-medium text-forest mb-8">
          <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
          {badge}
        </div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest leading-[1.1]">
          {headline} <span className="italic text-sage">{emphasis}</span>
        </h1>
      </div>

      <div className="relative">
        <p className="text-forest/80 text-lg max-w-md font-light leading-relaxed">{intro}</p>
        {cta && (
          <a
            href={cta.href}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest text-oat text-sm font-medium hover:bg-forest/90 transition-colors duration-300"
          >
            {cta.label}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </BentoCard>
  );
}
