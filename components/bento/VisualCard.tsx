import { BentoCard, type Delay } from './BentoCard';
import { cn } from '@/lib/cn';

type VisualCardProps = {
  src: string;
  alt: string;
  delay?: Delay;
  className?: string;
};

/** Bento item 3: full-bleed visual tile with a sage fallback background. */
export function VisualCard({ src, alt, delay = 300, className }: VisualCardProps) {
  return (
    <BentoCard delay={delay} className={cn('min-h-[18rem] md:min-h-0', className)}>
      {/* Fallback background if the image doesn't load */}
      <div className="absolute inset-0 bg-sage/40" />
      {/* Plain <img>: static export has no image optimizer, and GIF/SVG aren't optimized anyway */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
    </BentoCard>
  );
}
