import { type Project, chapters, profile } from '@/data/portfolio';
import Image from 'next/image';
import Link from 'next/link';
import { CountUp } from './motion';
import { Container, Heading, Icon } from './ui';

export function WhatsInside() {
  return (
    <section id='projects' className='scroll-mt-16 bg-primary py-20 text-on-primary sm:py-28'>
      <Container>
        <p className='reveal font-display font-semibold text-sm text-soft uppercase tracking-[0.18em]'>My projects</p>
        <h2 className='reveal mt-3 font-display font-extrabold text-4xl leading-[1.05] sm:text-5xl'>What’s inside</h2>
        <ol className='mt-12 grid gap-4 md:grid-cols-3'>
          {chapters.map((c) => (
            <li key={c.no} className='reveal'>
              <a
                href={`#${c.id}`}
                className='group flex h-full flex-col justify-between gap-10 rounded-3xl bg-on-primary/10 p-6 ring-1 ring-on-primary/20 transition-colors duration-200 hover:bg-on-primary hover:text-primary'
              >
                <span className='flex items-start justify-between'>
                  <span className='font-display font-extrabold text-6xl leading-none'>{c.no}.</span>
                  <span className='text-right text-sm opacity-80'>
                    {c.projects.length} project{c.projects.length > 1 ? 's' : ''}
                  </span>
                </span>
                <span className='flex items-center justify-between gap-4 font-bold font-display text-2xl leading-tight'>
                  {c.title}
                  <Icon.arrowRight className='h-6 w-6 shrink-0 transition-transform duration-200 group-hover:translate-x-1' />
                </span>
              </a>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function ProjectCard({ project, chapterNo, index }: { project: Project; chapterNo: string; index: number }) {
  return (
    <li className='reveal'>
      <Link
        href={`/projects/${project.slug}`}
        className='group hover:-translate-y-1 flex h-full flex-col overflow-hidden rounded-3xl bg-card ring-1 ring-line transition-[box-shadow,transform] duration-200 hover:shadow-[0_18px_40px_-20px_rgb(var(--primary)/0.45)]'
      >
        <div className='relative aspect-[4/3] overflow-hidden bg-soft/40'>
          <Image
            src={project.cover.src}
            alt=''
            fill
            sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
            className='object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]'
          />
        </div>
        <div className='flex flex-1 flex-col p-6'>
          <p className='font-display font-semibold text-accent text-sm'>
            {chapterNo}.{index + 1}
          </p>
          <h3 className='mt-1 text-balance font-bold font-display text-2xl text-primary leading-tight'>
            {project.title}
          </h3>
          <p className='mt-3 text-foreground/80 leading-relaxed'>{project.summary}</p>
          <div className='mt-auto flex items-end justify-between gap-4 pt-6'>
            <p>
              <CountUp
                value={project.stat.value}
                className='block font-display font-extrabold text-2xl text-primary leading-none'
              />
              <span className='text-muted text-sm'>{project.stat.label}</span>
            </p>
            <span className='inline-flex shrink-0 items-center gap-1 font-semibold text-primary text-sm'>
              View project
              <Icon.arrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' />
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export function ProjectChapters() {
  return (
    <div className='pb-20 sm:pb-28'>
      {chapters.map((c) => (
        <section key={c.id} id={c.id} aria-labelledby={`${c.id}-title`} className='scroll-mt-16 pt-20 sm:pt-28'>
          <Container>
            <div className='reveal grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end'>
              <h2
                id={`${c.id}-title`}
                className='font-display font-extrabold text-5xl text-primary leading-[0.95] sm:text-6xl'
              >
                <span className='block text-accent'>{c.no}.</span>
                {c.title}
              </h2>
              <div className='space-y-3 text-foreground/85 text-lg leading-relaxed'>
                {c.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <ul className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {c.projects.map((p, i) => (
                <ProjectCard key={p.slug} project={p} chapterNo={c.no} index={i} />
              ))}
            </ul>
          </Container>
        </section>
      ))}
    </div>
  );
}

export function Contact() {
  return (
    <section id='contact' className='scroll-mt-16 bg-primary py-20 text-on-primary sm:py-28'>
      <Container>
        <p className='font-display font-semibold text-sm text-soft uppercase tracking-[0.18em]'>Get in touch</p>
        <Heading className='reveal mt-4 text-[clamp(3rem,10vw,7.5rem)] text-on-primary uppercase leading-[0.9]'>
          Let’s work
          <br />
          together!
        </Heading>
        <div className='mt-12 grid gap-4 sm:grid-cols-2 lg:max-w-4xl'>
          <a
            href={profile.phoneHref}
            className='group flex items-center gap-4 rounded-3xl bg-on-primary/10 p-6 ring-1 ring-on-primary/20 transition-colors duration-200 hover:bg-on-primary hover:text-primary'
          >
            <span className='grid h-12 w-12 shrink-0 place-items-center rounded-full bg-on-primary text-primary'>
              <Icon.phone />
            </span>
            <span>
              <span className='block text-sm opacity-80'>Contact</span>
              <span className='font-bold font-display text-2xl tabular-nums'>{profile.phone}</span>
            </span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className='group flex items-center gap-4 rounded-3xl bg-on-primary/10 p-6 ring-1 ring-on-primary/20 transition-colors duration-200 hover:bg-on-primary hover:text-primary'
          >
            <span className='grid h-12 w-12 shrink-0 place-items-center rounded-full bg-on-primary text-primary'>
              <Icon.mail />
            </span>
            <span className='min-w-0'>
              <span className='block text-sm opacity-80'>Email</span>
              <span className='block break-all font-bold font-display text-lg sm:text-xl'>{profile.email}</span>
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className='border-on-primary/15 border-t bg-primary py-6 text-on-primary/70 text-sm'>
      <Container className='flex flex-wrap items-center justify-between gap-2'>
        <p className='text-on-primary/60 text-xs'>
          Designed &amp; built by{' '}
          <span className='font-semibold text-on-primary/80'>LionDevNguyen - Nguyen Danh Luu</span>
        </p>
        <a href='#top' className='font-semibold hover:text-on-primary'>
          Back to top ↑
        </a>
      </Container>
    </footer>
  );
}
