import { Contact, SiteFooter } from '@/components/portfolio/content-sections';
import { projectDetails, sectionId } from '@/components/portfolio/project-details';
import { SectionTabs } from '@/components/portfolio/motion';
import { SiteHeader } from '@/components/portfolio/site-header';
import { Container, Icon } from '@/components/portfolio/ui';
import { getProject, projects } from '@/data/portfolio';
import type { Metadata } from 'next';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, images: [project.cover.src] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const { tabs, Body } = projectDetails[project.slug];
  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[index - 1];
  const next = projects[index + 1];
  const numberInChapter = project.chapter.projects.findIndex((p) => p.slug === project.slug) + 1;

  return (
    <>
      <SiteHeader />
      <main id='top' className='page-in'>
        <div className='bg-primary text-on-primary'>
          <Container className='pt-8 pb-12 sm:pb-16'>
            <nav aria-label='Breadcrumb' className='hero-in'>
              <ol className='flex flex-wrap items-center gap-2 text-on-primary/75 text-sm'>
                <li>
                  <Link href='/' className='hover:text-on-primary hover:underline'>
                    Home
                  </Link>
                </li>
                <li aria-hidden='true'>/</li>
                <li>
                  <Link href={`/#${project.chapter.id}`} className='hover:text-on-primary hover:underline'>
                    {project.chapter.title}
                  </Link>
                </li>
                <li aria-hidden='true'>/</li>
                <li aria-current='page' className='text-on-primary'>
                  {project.title}
                </li>
              </ol>
            </nav>
            <p
              className='hero-in mt-10 font-display font-semibold text-soft'
              style={{ '--d': '80ms' } as CSSProperties}
            >
              {project.chapter.no}.{numberInChapter} · {project.chapter.title}
            </p>
            <h1
              className='hero-in mt-2 max-w-5xl text-balance font-display font-extrabold text-4xl uppercase leading-none sm:text-6xl'
              style={{ '--d': '160ms' } as CSSProperties}
            >
              {project.title}
            </h1>
            <p
              className='hero-in mt-5 max-w-2xl text-lg text-on-primary/85'
              style={{ '--d': '260ms' } as CSSProperties}
            >
              {project.summary}
            </p>
          </Container>
        </div>

        {tabs.length > 0 && (
          <nav aria-label='Sections' className='sticky top-16 z-40 border-line border-b bg-background/90 backdrop-blur'>
            <Container>
              <SectionTabs tabs={tabs.map((t) => ({ id: sectionId(t), label: t }))} />
            </Container>
          </nav>
        )}

        <Container className='space-y-20 py-16 [&_[id]]:scroll-mt-36'>
          <Body />
        </Container>

        <nav aria-label='More projects' className='border-line border-t'>
          <Container className='grid gap-4 py-10 sm:grid-cols-2'>
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className='reveal group rounded-3xl bg-card p-6 ring-1 ring-line transition-colors duration-200 hover:ring-primary'
              >
                <span className='inline-flex items-center gap-2 text-muted text-sm'>
                  <Icon.arrowRight className='group-hover:-translate-x-1 h-4 w-4 rotate-180 transition-transform duration-200' />
                  Previous project
                </span>
                <span className='mt-2 block font-bold font-display text-primary text-xl'>{prev.title}</span>
              </Link>
            ) : (
              <Link
                href='/#projects'
                className='reveal group rounded-3xl bg-card p-6 ring-1 ring-line transition-colors duration-200 hover:ring-primary'
              >
                <span className='inline-flex items-center gap-2 text-muted text-sm'>
                  <Icon.arrowRight className='h-4 w-4 rotate-180' />
                  Back to
                </span>
                <span className='mt-2 block font-bold font-display text-primary text-xl'>All projects</span>
              </Link>
            )}
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className='reveal group rounded-3xl bg-primary p-6 text-right text-on-primary transition-opacity duration-200 hover:opacity-90'
              >
                <span className='inline-flex items-center gap-2 text-on-primary/80 text-sm'>
                  Next project
                  <Icon.arrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' />
                </span>
                <span className='mt-2 block font-bold font-display text-xl'>{next.title}</span>
              </Link>
            ) : (
              <Link
                href='/#projects'
                className='reveal group rounded-3xl bg-primary p-6 text-right text-on-primary transition-opacity duration-200 hover:opacity-90'
              >
                <span className='text-on-primary/80 text-sm'>That’s everything</span>
                <span className='mt-2 block font-bold font-display text-xl'>Back to all projects</span>
              </Link>
            )}
          </Container>
        </nav>

        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
