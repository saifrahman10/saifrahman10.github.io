import type { Link } from '@/lib/content';

type FooterProps = {
  copyright: string;
  line: string;
  links: Link[];
};

export function Footer({ copyright, line, links }: FooterProps) {
  return (
    <footer className="mt-16 md:mt-24 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-forest/50 text-sm animate-organic organic-delay-600 px-4">
      <div className="text-center md:text-left">
        <p>{copyright}</p>
        <p className="mt-1 text-forest/40 text-xs">{line}</p>
      </div>
      <div className="flex gap-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-forest transition-colors"
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
