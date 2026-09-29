import { education, experiences, languages, profile, skills } from '@/data/portfolio';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import { CountUp } from './motion';
import { Card, Container, Eyebrow, Heading, Icon, Pill } from './ui';

function Sparkle({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' className={className} style={style}>
      <path
        fill='currentColor'
        d='M12 0c.6 6.3 5.7 11.4 12 12-6.3.6-11.4 5.7-12 12-.6-6.3-5.7-11.4-12-12C6.3 11.4 11.4 6.3 12 0z'
      />
    </svg>
  );
}

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id='top' className='relative overflow-hidden'>
      <Container className='grid items-end gap-8 pt-6 lg:grid-cols-[1.1fr_1fr] lg:pt-10'>
        <div className='pb-6 lg:pb-20'>
          <p className='hero-in font-display font-semibold text-lg text-primary'>{profile.name}</p>
          <h1 className='mt-2 font-display font-extrabold text-[clamp(4rem,14vw,10rem)] text-primary uppercase leading-[0.82] tracking-tight'>
            <span className='hero-in block' style={delay(90)}>
              Port
            </span>
            <span className='hero-in block pl-[0.6em]' style={delay(180)}>
              folio
            </span>
          </h1>
          <div className='hero-in mt-6 flex flex-wrap items-center gap-3' style={delay(300)}>
            <Pill solid>{profile.year}</Pill>
            <p className='font-semibold text-foreground/80'>{profile.role}</p>
          </div>
          <div className='hero-in mt-8 flex flex-wrap gap-3' style={delay(400)}>
            <a
              href='#projects'
              className='group hover:-translate-y-0.5 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-on-primary transition-transform duration-200 active:scale-[0.97]'
            >
              View my work
              <Icon.arrowDown className='h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5' />
            </a>
            <a
              href='#contact'
              className='inline-flex h-12 items-center gap-2 rounded-full border-2 border-primary px-6 font-semibold text-primary transition-colors duration-200 hover:bg-soft/60 active:scale-[0.97]'
            >
              Contact me
            </a>
          </div>
        </div>

        <div className='relative mx-auto w-full max-w-md lg:max-w-none'>
          <div
            aria-hidden='true'
            className='arch-in absolute inset-x-6 top-[18%] bottom-0 rounded-t-[999px] bg-soft ring-2 ring-primary/15'
          />
          <div
            aria-hidden='true'
            className='spin-slow absolute top-[12%] right-0 h-24 w-24 rounded-full border-2 border-primary/30 border-dashed sm:h-32 sm:w-32'
          />
          <Image
            src={profile.heroImage}
            alt={`Portrait of ${profile.name}`}
            width={1363}
            height={1834}
            priority
            sizes='(min-width: 1024px) 40vw, 90vw'
            className='portrait-in relative h-auto w-full'
          />
          <Sparkle className='float absolute top-[20%] left-2 h-8 w-8 text-accent sm:h-10 sm:w-10' />
          <Sparkle className='float absolute top-[45%] right-3 h-6 w-6 text-primary' style={delay(1200)} />
          <Sparkle className='float absolute bottom-[18%] left-[12%] h-5 w-5 text-primary/70' style={delay(2400)} />
        </div>
      </Container>

      <div className='bg-primary'>
        <Container className='grid grid-cols-2 gap-px py-2 lg:grid-cols-4'>
          {profile.highlights.map((h) => (
            <div key={h.label} className='reveal px-2 py-5 text-on-primary sm:px-4'>
              <p className='font-display font-extrabold text-3xl leading-none sm:text-4xl'>
                <CountUp value={h.value} />
                {h.unit && <span className='ml-1 text-xl'>{h.unit}</span>}
              </p>
              <p className='mt-2 text-on-primary/80 text-sm'>{h.label}</p>
            </div>
          ))}
        </Container>
      </div>

      <div className='marquee overflow-hidden border-primary border-b-2 bg-soft py-3'>
        <p className='sr-only'>{profile.marquee.join(', ')}</p>
        <div aria-hidden='true' className='marquee-track flex w-max'>
          {[0, 1].map((copy) => (
            <ul key={copy} className='flex shrink-0 items-center'>
              {profile.marquee.map((word) => (
                <li
                  key={word}
                  className='flex items-center gap-6 whitespace-nowrap px-3 font-bold font-display text-primary text-xl'
                >
                  {word}
                  <Sparkle className='h-4 w-4 text-accent' />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id='about' className='scroll-mt-16 py-20 sm:py-28'>
      <Container className='grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]'>
        <div className='reveal'>
          <Eyebrow>Introduction</Eyebrow>
          <Heading className='mt-3'>
            Hello, I’m <span className='text-accent'>Thanh Thanh</span>
          </Heading>
          <div className='mt-8 space-y-5 text-foreground/85 text-lg leading-relaxed'>
            {profile.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className='reveal relative mx-auto w-[calc(100%-0.75rem)] max-w-sm lg:max-w-none'>
          <div aria-hidden='true' className='absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-soft' />
          <div className='relative aspect-[5/6] overflow-hidden rounded-[2rem] ring-2 ring-primary'>
            <Image
              src={profile.aboutImage}
              alt={`${profile.name} smiling`}
              fill
              sizes='(min-width: 1024px) 40vw, 90vw'
              className='object-cover object-top'
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function TimelineItem({ title, subtitle, period }: { title: string; subtitle: string; period: string }) {
  return (
    <li className='relative border-primary/20 border-l-2 pb-6 pl-6 last:pb-0'>
      <span aria-hidden='true' className='-left-[7px] absolute top-1.5 h-3 w-3 rounded-full bg-primary' />
      <p className='font-bold font-display text-lg text-primary leading-tight'>{title}</p>
      <p className='text-foreground/80'>{subtitle}</p>
      <p className='mt-1 font-semibold text-muted text-sm tabular-nums'>{period}</p>
    </li>
  );
}

export function Journey() {
  return (
    <section id='journey' className='scroll-mt-16 bg-card/60 py-20 sm:py-28'>
      <Container>
        <div className='reveal max-w-2xl'>
          <Eyebrow>What I’ve done · What I learned</Eyebrow>
          <Heading className='mt-3'>My journey</Heading>
        </div>
        <div className='mt-12 grid gap-6 lg:grid-cols-2'>
          <Card>
            <Pill>Experiences</Pill>
            <ol className='mt-6'>
              {experiences.map((e) => (
                <TimelineItem key={e.company + e.role} title={e.role} subtitle={e.company} period={e.period} />
              ))}
            </ol>
          </Card>
          <div className='grid gap-6'>
            <Card>
              <Pill>Education &amp; Course</Pill>
              <ol className='mt-6'>
                {education.map((e) => (
                  <TimelineItem key={e.school} title={e.degree} subtitle={e.school} period={e.period} />
                ))}
              </ol>
            </Card>
            <Card>
              <Pill>Languages</Pill>
              <ul className='mt-6 grid gap-4 sm:grid-cols-2'>
                {languages.map((l) => (
                  <li key={l.name} className='rounded-2xl bg-soft/50 p-4'>
                    <p className='font-bold font-display text-lg text-primary'>{l.name}</p>
                    <p className='text-foreground/80'>
                      {l.level} <span className='text-muted'>({l.note})</span>
                    </p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ChipGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <h3 className='font-bold font-display text-2xl text-primary'>{title}</h3>
      <ul className='mt-5 flex flex-wrap gap-2'>
        {items.map((s) => (
          <li key={s} className='rounded-full bg-soft/60 px-4 py-2 font-semibold text-primary text-sm'>
            {s}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function Skills() {
  return (
    <section id='skills' className='scroll-mt-16 py-20 sm:py-28'>
      <Container>
        <div className='reveal max-w-2xl'>
          <Eyebrow>Personal skills</Eyebrow>
          <Heading className='mt-3'>What I bring to the team</Heading>
        </div>
        <div className='mt-12 grid gap-6 md:grid-cols-3'>
          <ChipGroup title='Key skills' items={skills.key} />
          <ChipGroup title='Soft skills' items={skills.soft} />
          <ChipGroup title='Softwares' items={skills.software} />
        </div>
      </Container>
    </section>
  );
}
