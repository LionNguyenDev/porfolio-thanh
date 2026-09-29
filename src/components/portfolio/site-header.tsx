'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ScrollProgress } from './motion';
import { Container, Icon } from './ui';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#journey', label: 'Journey' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-[background-color,box-shadow] duration-200',
        scrolled || open ? 'bg-background/90 shadow-[0_1px_0_rgb(var(--line))] backdrop-blur' : 'bg-transparent'
      )}
    >
      <Container className='flex h-16 items-center justify-between gap-4'>
        <Link href='/' className='font-display font-extrabold text-primary text-xl'>
          Thanh Thanh<span className='text-accent'>.</span>
        </Link>

        <nav aria-label='Primary' className='hidden items-center gap-1 md:flex'>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className='rounded-full px-4 py-2 font-semibold text-foreground/80 text-sm transition-colors duration-150 hover:bg-soft/60 hover:text-primary'
            >
              {l.label}
            </a>
          ))}
          <a
            href='#contact'
            className='hover:-translate-y-0.5 ml-2 rounded-full bg-primary px-5 py-2 font-semibold text-on-primary text-sm transition-transform duration-150'
          >
            Let’s talk
          </a>
        </nav>

        <button
          type='button'
          className='-mr-2 grid h-11 w-11 cursor-pointer place-items-center rounded-full text-primary md:hidden'
          aria-expanded={open}
          aria-controls='mobile-nav'
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Icon.close /> : <Icon.menu />}
        </button>
      </Container>

      {open && (
        <nav id='mobile-nav' aria-label='Mobile' className='border-line border-t md:hidden'>
          <Container className='flex flex-col py-3'>
            {[...links, { href: '#contact', label: 'Contact' }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className='rounded-xl px-3 py-3 font-display font-semibold text-lg text-primary hover:bg-soft/60'
              >
                {l.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
      <ScrollProgress />
    </header>
  );
}
