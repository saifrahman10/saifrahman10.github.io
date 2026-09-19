import { ArrowRight } from 'lucide-react';
import { BentoCard, type Delay } from './BentoCard';
import { cn } from '@/lib/cn';

type ContactCardProps = {
  title: string;
  subtitle: string;
  href: string;
  delay?: Delay;
  className?: string;
};

/** Bento item 6: terracotta call-to-action tile. */
export function ContactCard({ title, subtitle, href, delay = 600, className }: ContactCardProps) {
  return (
    <BentoCard
      href={href}
      delay={delay}
      className={cn('bg-clay hover:bg-clay-dark p-8 flex flex-col justify-between', className)}
    >
      <div className="w-full flex justify-end">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:-rotate-45 transition-transform duration-500">
          <ArrowRight className="text-white" aria-hidden="true" />
        </div>
      </div>
      <div className="mt-12">
        <h3 className="font-serif text-3xl text-white mb-2">{title}</h3>
        <p className="text-white/80 font-light text-sm break-all">{subtitle}</p>
      </div>
    </BentoCard>
  );
}
