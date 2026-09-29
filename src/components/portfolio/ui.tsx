import { cn } from '@/lib/utils';
import Image from 'next/image';
import type { ReactNode, SVGProps } from 'react';
import { CountUp } from './motion';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const;

export const Icon = {
  phone: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z' />
    </svg>
  ),
  mail: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x='2' y='4' width='20' height='16' rx='2' />
      <path d='m22 7-10 6L2 7' />
    </svg>
  ),
  arrowRight: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d='M5 12h14M13 5l7 7-7 7' />
    </svg>
  ),
  arrowDown: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d='M12 5v14M5 13l7 7 7-7' />
    </svg>
  ),
  check: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d='M20 6 9 17l-5-5' />
    </svg>
  ),
  menu: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d='M4 7h16M4 12h16M4 17h16' />
    </svg>
  ),
  close: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d='M18 6 6 18M6 6l12 12' />
    </svg>
  ),
  folder: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d='M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
    </svg>
  ),
};

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-page px-4 sm:px-6 lg:px-8', className)}>{children}</div>;
}

export function Pill({ children, solid, className }: { children: ReactNode; solid?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center whitespace-nowrap rounded-full border-2 border-primary px-4 py-1 font-display font-semibold text-sm leading-6',
        solid ? 'bg-primary text-on-primary' : 'bg-soft/60 text-primary',
        className
      )}
    >
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className='font-display font-semibold text-accent text-sm uppercase tracking-[0.18em]'>{children}</p>;
}

export function Heading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        'text-balance font-display font-extrabold text-4xl text-primary leading-[1.05] sm:text-5xl',
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SubHeading({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h4 id={id} className='mb-4 scroll-mt-24'>
      <Pill solid>{children}</Pill>
    </h4>
  );
}

export function BulletList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn('space-y-3', className)}>
      {items.map((item) => (
        <li key={item} className='flex gap-3 leading-relaxed'>
          <Icon.check className='mt-1 h-4 w-4 shrink-0 text-primary' strokeWidth={3} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

type ShotProps = {
  src: string;
  alt: string;
  ratio: string;
  sizes: string;
  caption?: string;
  href?: string;
  fit?: 'cover' | 'contain';
  priority?: boolean;
  className?: string;
};

// Fixed aspect-ratio frame so replacement images of any size keep the layout stable.
export function Shot({ src, alt, ratio, sizes, caption, href, fit = 'cover', priority, className }: ShotProps) {
  return (
    <figure className={cn('reveal', className)}>
      <div
        className='relative overflow-hidden rounded-2xl bg-card shadow-[0_1px_0_rgb(var(--line))] ring-1 ring-line'
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={fit === 'cover' ? 'object-cover object-top' : 'object-contain p-2'}
        />
      </div>
      {caption && (
        <figcaption className='mt-3 text-center font-semibold text-primary text-sm'>
          {href ? (
            <a href={href} target='_blank' rel='noopener noreferrer' className='underline underline-offset-4'>
              {caption}
            </a>
          ) : (
            caption
          )}
        </figcaption>
      )}
    </figure>
  );
}

export function Stat({ value, label, tone = 'soft' }: { value: string; label: string; tone?: 'soft' | 'solid' }) {
  return (
    <div
      className={cn(
        'reveal rounded-2xl p-5',
        tone === 'solid' ? 'bg-primary text-on-primary' : 'bg-soft/60 text-primary ring-1 ring-primary/10'
      )}
    >
      <p className='font-display font-extrabold text-3xl leading-none sm:text-4xl'>
        <CountUp value={value} />
      </p>
      <p className={cn('mt-2 text-sm leading-snug', tone === 'solid' ? 'text-on-primary/85' : 'text-foreground/80')}>
        {label}
      </p>
    </div>
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('reveal rounded-3xl bg-card p-6 ring-1 ring-line sm:p-8', className)}>{children}</div>;
}
