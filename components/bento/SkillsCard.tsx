import type { ReactNode } from 'react';
import { BentoCard, type Delay } from './BentoCard';
import { cn } from '@/lib/cn';

type SkillsCardProps = {
  title: string;
  items: string[];
  icon?: ReactNode;
  /** `sage` is the template's light tile; `forest` is a dark primary tile. */
  tone?: 'sage' | 'forest';
  delay?: Delay;
  className?: string;
};

/** Bento item 5: "tools I tend to" chip list. */
export function SkillsCard({
  title,
  items,
  icon,
  tone = 'sage',
  delay,
  className,
}: SkillsCardProps) {
  const dark = tone === 'forest';

  return (
    <BentoCard
      delay={delay}
      className={cn(
        dark ? 'bg-forest' : 'bg-sage/15',
        'p-8 md:p-10 flex flex-col justify-center',
        className,
      )}
    >
      {icon && (
        <div className="mb-4" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className={cn('font-serif text-2xl mb-6', dark ? 'text-oat' : 'text-forest')}>
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium',
              dark ? 'bg-white/10 text-oat/90' : 'bg-white/50 text-forest/80',
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}
