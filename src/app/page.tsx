import { Contact, ProjectChapters, SiteFooter, WhatsInside } from '@/components/portfolio/content-sections';
import { About, Hero, Journey, Skills } from '@/components/portfolio/intro-sections';
import { SiteHeader } from '@/components/portfolio/site-header';

export default function Home() {
  return (
    <>
      <a
        href='#main'
        className='sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary'
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id='main'>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <WhatsInside />
        <ProjectChapters />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
