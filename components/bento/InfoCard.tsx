import type { ReactNode } from 'react';
import { BentoCard, type Delay } from './BentoCard';
import { cn } from '@/lib/cn';

export type Tone = 'sand' | 'white' | 'stone' | 'sage' | 'forest';

const tones: Record<Tone, string> = {
  sand: 'bg-sand/30',
  white: 'bg-white/70',
  stone: 'bg-stone/50',
  sage: 'bg-sage/15',
  forest: 'bg-forest',
};

type InfoCardProps = {
  /** Icon (Lucide element or <img>) shown above the title. */
  icon?: ReactNode;
  /** Small muted label above the title. */
  eyebrow?: string;
  title?: string;
  /** Main line of body copy. */
  body?: ReactNode;
  /** Anything else (extra paragraphs, links, lists). */
  children?: ReactNode;
  /** Divider + label/value block at the bottom (e.g. "Local Time"). */
  footer?: { label: string; value: ReactNode };
  align?: 'center' | 'start';
  tone?: Tone;
  delay?: Delay;
  className?: string;
  id?: string;
  href?: string;
  external?: boolean;
};

/**
 * General-purpose bento tile: icon, title, copy and an optional footer.
 * Used for location, status, education, pillars and contact channels.
 */
export function InfoCard({
  icon,
  eyebrow,
  title,
  body,
  children,
  footer,
  align = 'center',
  tone = 'sand',
  delay,
  className,
  id,
  href,
  external,
}: InfoCardProps) {
  const dark = tone === 'forest';
  const text = dark ? 'text-oat' : 'text-forest';
  const muted = dark ? 'text-oat/70' : 'text-forest/70';

  return (
    <BentoCard
      id={id}
      delay={delay}
      href={href}
      external={external}
      className={cn(
        tones[tone],
        'p-8 flex flex-col',
        align === 'center'
          ? 'justify-center items-center text-center'
          : 'justify-start items-start text-left',
        className,
      )}
    >
      {icon && (
        <div className={cn('mb-4', dark ? 'text-sage' : 'text-clay')} aria-hidden="true">
          {icon}
        </div>
      )}
      {eyebrow && (
        <p className={cn('text-sm font-medium mb-1', dark ? 'text-oat/50' : 'text-forest/50')}>
          {eyebrow}
        </p>
      )}
      {title && <h3 className={cn('font-serif text-2xl mb-2', text)}>{title}</h3>}
      {body && <p className={cn('font-light leading-relaxed', muted)}>{body}</p>}
      {children}
      {footer && (
        <div
          className={cn(
            'mt-6 pt-6 border-t w-full',
            dark ? 'border-oat/10' : 'border-forest/10',
          )}
        >
          <p
            className={cn(
              'text-sm font-medium uppercase tracking-widest',
              dark ? 'text-oat/60' : 'text-forest/60',
            )}
          >
            {footer.label}
          </p>
          <div className={cn('text-xl font-light mt-1', text)}>{footer.value}</div>
        </div>
      )}
    </BentoCard>
  );
}
