'use client';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Reveals `.reveal` elements as they enter the viewport, staggering items that enter together. */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('motion-ready');
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-in)'));
    if (!root.classList.contains('motion')) {
      for (const el of els) el.classList.add('is-in');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        let i = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.style.setProperty('--reveal-delay', `${Math.min(i++ * 60, 360)}ms`);
          el.classList.add('is-in');
          io.unobserve(el);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    for (const el of els) io.observe(el);
    return () => io.disconnect();
  }, [pathname]);

  return null;
}

/** Scroll progress bar; transform-only updates, no React re-render per scroll. */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.current?.style.setProperty('transform', `scaleX(${max > 0 ? window.scrollY / max : 0})`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div aria-hidden='true' className='absolute inset-x-0 bottom-0 h-[3px]'>
      <div ref={bar} className='h-full origin-left scale-x-0 bg-accent' />
    </div>
  );
}

/** Counts a stat like "10K+", "~50%" or "2.5" up from zero; SSR renders the final value. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
    const el = ref.current;
    if (!match || !el || reducedMotion()) return;
    const [, prefix, raw, suffix] = match;
    const target = Number.parseFloat(raw.replace(/,/g, ''));
    const decimals = raw.includes('.') ? raw.split('.')[1].length : 0;
    const grouped = raw.includes(',');
    const format = (n: number) =>
      prefix + (grouped ? Math.round(n).toLocaleString('en-US') : n.toFixed(decimals)) + suffix;

    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          setText(format(target * (1 - (1 - t) ** 4)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        setText(format(0));
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {text}
    </span>
  );
}

/** Sticky section tabs that highlight the section currently in view. */
export function SectionTabs({ tabs }: { tabs: { id: string; label: string }[] }) {
  const [active, setActive] = useState(tabs[0]?.id);

  useEffect(() => {
    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting ? e.boundingClientRect.top : Number.NaN);
        const current = tabs.find((t) => !Number.isNaN(visible.get(t.id) ?? Number.NaN));
        if (current) setActive(current.id);
      },
      { rootMargin: '-140px 0px -55% 0px' }
    );
    for (const t of tabs) {
      const el = document.getElementById(t.id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, [tabs]);

  return (
    <div className='flex gap-2 overflow-x-auto py-3'>
      {tabs.map((t) => (
        <a
          key={t.id}
          href={`#${t.id}`}
          aria-current={active === t.id ? 'location' : undefined}
          className={cn(
            'shrink-0 rounded-full border-2 border-primary px-4 py-1.5 font-display font-semibold text-sm transition-colors duration-200 active:scale-[0.97]',
            active === t.id
              ? 'bg-primary text-on-primary'
              : 'bg-soft/60 text-primary hover:bg-primary hover:text-on-primary'
          )}
        >
          {t.label}
        </a>
      ))}
    </div>
  );
}
