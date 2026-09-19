import { ArrowUpRight } from 'lucide-react';
import { BentoCard, type Delay } from './BentoCard';
import type { Project } from '@/lib/content';
import { cn } from '@/lib/cn';

type ProjectCardProps = {
  project: Project;
  /**
   * `compact` is the template's featured tile (icon + title only).
   * `full` adds the description, note, tags and call to action.
   */
  variant?: 'compact' | 'full';
  /** Small muted label above the title (compact variant). */
  eyebrow?: string;
  delay?: Delay;
  className?: string;
};

export function ProjectCard({
  project,
  variant = 'full',
  eyebrow,
  delay,
  className,
}: ProjectCardProps) {
  const { title, description, image, href, note, tags, ctaLabel } = project;
  const linkProps = href ? { href, external: true } : {};

  if (variant === 'compact') {
    return (
      <BentoCard
        {...linkProps}
        delay={delay}
        aria-label={href ? `${title} — ${ctaLabel}` : undefined}
        className={cn('bg-white/70 p-8 flex flex-col justify-between', className)}
      >
        <div className="flex justify-between items-start mb-8">
          <Thumb src={image.src} alt={image.alt} size="sm" />
          <ArrowUpRight
            className="text-forest/30 group-hover:text-forest transition-colors duration-300"
            aria-hidden="true"
          />
        </div>
        <div>
          {eyebrow && <p className="text-sm text-forest/50 font-medium mb-1">{eyebrow}</p>}
          <h3 className="font-serif text-2xl text-forest">{title}</h3>
        </div>
      </BentoCard>
    );
  }

  return (
    <BentoCard
      {...linkProps}
      delay={delay}
      aria-label={href ? `${title} — ${ctaLabel}` : undefined}
      className={cn('bg-white/70 p-8 flex flex-col', className)}
    >
      <div className="flex justify-between items-start mb-6">
        <Thumb src={image.src} alt={image.alt} size="lg" />
        {href ? (
          <ArrowUpRight
            className="text-forest/30 group-hover:text-forest transition-colors duration-300"
            aria-hidden="true"
          />
        ) : null}
      </div>

      <div className="flex-1">
        <h3 className="font-serif text-2xl text-forest mb-3">{title}</h3>
        <p className="text-forest/70 font-light leading-relaxed">{description}</p>
        {note && <p className="mt-3 text-xs italic text-forest/50">{note}</p>}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-stone text-forest/70 text-xs font-medium"
          >
            {tag}
          </span>
        ))}
        <span
          className={cn(
            'ml-auto text-sm font-medium transition-colors duration-300',
            href ? 'text-forest/60 group-hover:text-forest' : 'text-forest/40',
          )}
        >
          {ctaLabel}
        </span>
      </div>
    </BentoCard>
  );
}

function Thumb({ src, alt, size }: { src: string; alt: string; size: 'sm' | 'lg' }) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-stone flex items-center justify-center group-hover:bg-sage/60 transition-colors duration-500',
        size === 'sm' ? 'w-12 h-12 p-2' : 'w-16 h-16 p-3',
      )}
    >
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </div>
  );
}
