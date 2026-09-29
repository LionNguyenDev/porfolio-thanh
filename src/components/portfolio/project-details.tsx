import {
  type ProjectSlug,
  glorieLaunch,
  glorieMonthly,
  lamThaoTour,
  seoContent,
  socialContent,
} from '@/data/portfolio';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { BulletList, Card, Icon, Shot, Stat, SubHeading } from './ui';

export const sectionId = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

function Section({ tab, label, children }: { tab: string; label?: string; children: ReactNode }) {
  return (
    <section>
      <SubHeading id={sectionId(tab)}>{label ?? tab}</SubHeading>
      {children}
    </section>
  );
}

function GlorieLaunch() {
  const c = glorieLaunch;
  return (
    <>
      <section className='grid items-center gap-10 lg:grid-cols-2'>
        <div className='reveal'>
          <SubHeading id={sectionId('Overview')}>Overview</SubHeading>
          <div className='space-y-4 text-lg leading-relaxed'>
            {c.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <Shot {...c.cover} ratio='1.18' sizes='(min-width: 1024px) 45vw, 100vw' priority />
      </section>

      <Section tab='Big Idea'>
        <div className='grid gap-6 lg:grid-cols-[1.2fr_1fr]'>
          <blockquote className='reveal rounded-3xl bg-soft/60 p-6 text-lg text-primary leading-relaxed sm:p-8'>
            {c.bigIdea}
          </blockquote>
          <Card>
            <h3 className='font-bold font-display text-primary text-xl'>What did I do?</h3>
            <p className='mt-2 text-foreground/80'>{c.whatIDid.lead}</p>
            <BulletList items={c.whatIDid.items} className='mt-4' />
          </Card>
        </div>
        <div className='mt-6 grid gap-6 sm:grid-cols-[1fr_1.4fr]'>
          <Shot {...c.bigIdeaImages[0]} ratio='1.46' sizes='(min-width: 640px) 40vw, 100vw' />
          <Shot {...c.bigIdeaImages[1]} ratio='2.18' sizes='(min-width: 640px) 60vw, 100vw' />
        </div>
      </Section>

      <Section tab='Detail'>
        <p className='reveal max-w-4xl text-lg leading-relaxed'>{c.detailIntro}</p>
        <dl className='mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5'>
          {c.facts.map((f) => (
            <div key={f.label} className='reveal rounded-2xl bg-card p-4 ring-1 ring-line'>
              <dt className='font-display font-semibold text-accent text-sm'>{f.label}</dt>
              <dd className='mt-1 font-semibold text-primary'>{f.value}</dd>
            </div>
          ))}
        </dl>

        <h3 className='mt-14 font-bold font-display text-2xl text-primary'>Influencer handling workflow</h3>
        <ol className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6'>
          {c.workflow.map((s, i) => (
            <li key={s.title} className='reveal relative rounded-2xl bg-card p-5 ring-1 ring-line'>
              <span className='grid h-9 w-9 place-items-center rounded-full bg-primary font-bold font-display text-on-primary'>
                {i + 1}
              </span>
              <p className='mt-3 font-bold font-display text-primary leading-tight'>{s.title}</p>
              <p className='mt-2 text-foreground/80 text-sm leading-relaxed'>{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tab='Results'>
        <div className='grid gap-6 lg:grid-cols-[1fr_1.2fr]'>
          <div className='space-y-4'>
            {c.results.map((r) => (
              <div key={r.title} className='reveal rounded-2xl bg-card p-5 ring-1 ring-line'>
                <p className='font-bold font-display text-lg text-primary'>{r.title}</p>
                <p className='mt-1 text-foreground/80 leading-relaxed'>{r.text}</p>
              </div>
            ))}
            <Stat tone='solid' value={c.headline.value} label={c.headline.text} />
          </div>
          <div className='grid grid-cols-2 gap-4 self-start'>
            {c.videos.map((v) => (
              <Shot key={v.src} {...v} ratio='9 / 16' sizes='(min-width: 1024px) 25vw, 50vw' />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

function GlorieMonthly() {
  const c = glorieMonthly;
  return (
    <>
      <section className='grid gap-10 lg:grid-cols-[1fr_1fr]'>
        <div className='reveal'>
          <SubHeading id={sectionId('Overview')}>My contribution</SubHeading>
          <p className='mb-5 font-semibold text-lg text-primary'>{c.goal}</p>
          <BulletList items={c.contribution} />
          <div className='mt-8'>
            <Stat tone='solid' value={c.headline.value} label={c.headline.text} />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 self-start'>
          <Shot
            {...c.dashboards[0]}
            ratio='1.38'
            fit='contain'
            sizes='(min-width: 1024px) 45vw, 100vw'
            className='col-span-2'
            priority
          />
          <Shot {...c.dashboards[1]} ratio='1.37' fit='contain' sizes='(min-width: 1024px) 22vw, 50vw' />
          <Shot {...c.dashboards[2]} ratio='1.06' fit='contain' sizes='(min-width: 1024px) 22vw, 50vw' />
        </div>
      </section>

      <Section tab='Highlighted Videos' label='Highlighted influencer videos'>
        <p className='reveal max-w-4xl text-lg leading-relaxed'>{c.audience}</p>
        <ul className='mt-8 grid gap-6 md:grid-cols-3'>
          {c.highlighted.map((h) => (
            <li key={h.name} className='reveal rounded-3xl bg-card p-4 ring-1 ring-line'>
              <Shot
                src={h.src}
                alt={`${h.name} video analytics`}
                ratio='0.78'
                fit='contain'
                sizes='(min-width: 768px) 30vw, 100vw'
              />
              <p className='mt-4 font-bold font-display text-lg text-primary'>{h.name}</p>
              <dl className='mt-2 grid grid-cols-2 gap-2 text-sm'>
                <div className='rounded-xl bg-soft/60 p-3'>
                  <dt className='text-foreground/75'>Total views</dt>
                  <dd className='font-bold font-display text-primary text-xl'>{h.views}</dd>
                </div>
                <div className='rounded-xl bg-soft/60 p-3'>
                  <dt className='text-foreground/75'>Products sold</dt>
                  <dd className='font-bold font-display text-primary text-xl'>{h.sales}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </Section>

      <Section tab='Results'>
        <div className='grid gap-6 lg:grid-cols-2'>
          {c.gmv.map((g) => (
            <Card key={g.period}>
              <p className='font-bold font-display text-accent'>{g.period}</p>
              <div className='mt-4 grid grid-cols-3 gap-3'>
                <div>
                  <p className='font-display font-extrabold text-2xl text-primary sm:text-3xl'>{g.total}</p>
                  <p className='text-foreground/75 text-sm'>Total GMV</p>
                </div>
                <div>
                  <p className='font-display font-extrabold text-2xl text-primary sm:text-3xl'>{g.share}</p>
                  <p className='text-foreground/75 text-sm'>from video links</p>
                </div>
                <div>
                  <p className='font-display font-extrabold text-2xl text-primary sm:text-3xl'>{g.linkSales}</p>
                  <p className='text-foreground/75 text-sm'>video link sales</p>
                </div>
              </div>
              <p className='mt-5 flex gap-2 font-semibold text-primary'>
                <Icon.arrowRight className='mt-0.5 h-5 w-5 shrink-0' />
                {g.takeaway}
              </p>
              <Shot {...g.shot} ratio='1.2' fit='contain' sizes='(min-width: 1024px) 45vw, 100vw' className='mt-6' />
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

function LamThaoTour() {
  const c = lamThaoTour;
  return (
    <>
      <Section tab='Concept Story' label='Concept story'>
        <Shot {...c.cover} ratio='3.08' sizes='100vw' priority />
        <div className='mt-8 grid gap-6 text-lg leading-relaxed md:grid-cols-2'>
          {c.concept.map((p) => (
            <p key={p} className='reveal'>
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section tab='Detail'>
        <div className='grid gap-6 lg:grid-cols-2'>
          <div className='space-y-6'>
            <Card>
              <h3 className='font-bold font-display text-primary text-xl'>What did I do?</h3>
              <div className='mt-3 space-y-3 leading-relaxed'>
                {c.strategy.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Card>
            <Shot {...c.storePhoto} ratio='1.22' sizes='(min-width: 1024px) 45vw, 100vw' />
          </div>
          <div className='space-y-6'>
            <dl className='grid gap-3'>
              {c.facts.map((f) => (
                <div key={f.label} className='reveal rounded-2xl bg-soft/60 p-4'>
                  <dt className='font-display font-semibold text-accent text-sm'>{f.label}</dt>
                  <dd className='mt-1 font-semibold text-primary'>{f.value}</dd>
                </div>
              ))}
            </dl>
            <Card>
              <BulletList items={c.tasks} />
            </Card>
          </div>
        </div>

        <h3 className='mt-14 font-bold font-display text-2xl text-primary'>Lam Thảo in-store campaign plan</h3>
        <div className='mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]'>
          <div className='grid grid-cols-3 gap-3'>
            {c.clips.map((s) => (
              <Shot key={s.src} {...s} ratio='0.68' sizes='(min-width: 1024px) 18vw, 33vw' />
            ))}
          </div>
          <div className='space-y-4'>
            <p className='font-bold font-display text-primary'>Total in 1 month</p>
            <div className='grid grid-cols-2 gap-3'>
              {c.output.map((o) => (
                <Stat key={o.label} value={o.value} label={o.label} />
              ))}
            </div>
            <Shot {...c.plan} ratio='1.17' fit='contain' sizes='(min-width: 1024px) 35vw, 100vw' />
          </div>
        </div>
      </Section>

      <Section tab='Results'>
        <div className='reveal rounded-3xl bg-primary p-6 text-on-primary sm:p-8'>
          <ul className='space-y-3 text-lg leading-relaxed'>
            {c.results.map((r) => (
              <li key={r} className='flex gap-3'>
                <Icon.check className='mt-1.5 h-5 w-5 shrink-0' strokeWidth={3} />
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5'>
          {c.kols.map((k) => (
            <Shot key={k.src} {...k} ratio='0.74' sizes='(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw' />
          ))}
        </div>
      </Section>
    </>
  );
}

function LamThaoFanpage() {
  const c = socialContent.lamThao;
  return (
    <>
      <Section tab='Overview' label='My contribution'>
        <div className='reveal max-w-4xl space-y-4 text-lg leading-relaxed'>
          {c.contribution.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className='mt-8 flex snap-x gap-4 overflow-x-auto pb-4'>
          {c.posts.map((p, i) => (
            <Shot
              key={p.src}
              {...p}
              ratio='0.62'
              sizes='260px'
              priority={i < 3}
              className='w-56 shrink-0 snap-start sm:w-64'
            />
          ))}
        </div>
      </Section>

      <Section tab='Results' label='Achievement'>
        <div className='grid gap-6 lg:grid-cols-[1fr_1.1fr]'>
          <div>
            <p className='text-muted'>{c.metricsNote}</p>
            <div className='mt-4 grid grid-cols-2 gap-3'>
              {c.stats.map((s, i) => (
                <div key={s.label} className={i === 0 ? 'col-span-2' : undefined}>
                  <Stat value={s.value} label={s.label} tone={i === 0 ? 'solid' : 'soft'} />
                </div>
              ))}
            </div>
          </div>
          <Shot {...c.metricsImage} ratio='1.09' fit='contain' sizes='(min-width: 1024px) 50vw, 100vw' />
        </div>
      </Section>
    </>
  );
}

function TikTokChannel({ index }: { index: number }) {
  const ch = socialContent.tiktok[index];
  return (
    <>
      <Section tab='Overview'>
        <div className='grid gap-8 lg:grid-cols-[0.8fr_2fr]'>
          <div className='reveal flex items-center gap-4 lg:flex-col lg:items-start'>
            <div className='relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-2 ring-primary lg:h-40 lg:w-40'>
              <Image {...ch.profile} fill sizes='160px' className='object-cover' priority />
            </div>
            <div>
              <p className='font-bold font-display text-primary text-xl'>{ch.name}</p>
              <p className='text-muted'>{ch.handle}</p>
            </div>
          </div>
          <div>
            <div className='reveal space-y-3 text-lg leading-relaxed'>
              {ch.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className='mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4'>
              {ch.videos.map((v) => (
                <Shot key={v.src} {...v} ratio='9 / 20' sizes='(min-width: 640px) 18vw, 50vw' />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tab='Results'>
        <div className='grid gap-6 lg:grid-cols-2'>
          <Card>
            <BulletList items={ch.results} />
          </Card>
          <Shot {...ch.stats} ratio='1.62' fit='contain' sizes='(min-width: 1024px) 45vw, 100vw' />
        </div>
      </Section>
    </>
  );
}

function SeoContent() {
  const c = seoContent;
  return (
    <Section tab='Overview' label='What did I do?'>
      <div className='grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]'>
        <Card>
          <p className='font-semibold text-primary'>
            {c.company} · {c.timeline}
          </p>
          <BulletList items={c.items} className='mt-4' />
        </Card>
        <Shot
          {...c.image}
          caption={`Example blogs for brand ${c.brand}`}
          ratio='1.07'
          fit='contain'
          sizes='(min-width: 1024px) 50vw, 100vw'
          priority
        />
      </div>
    </Section>
  );
}

// Section tabs shown under each project's banner; ids come from sectionId(tab).
export const projectDetails: Record<ProjectSlug, { tabs: string[]; Body: () => ReactNode }> = {
  'glorie-launch': { tabs: ['Overview', 'Big Idea', 'Detail', 'Results'], Body: GlorieLaunch },
  'glorie-monthly': { tabs: ['Overview', 'Highlighted Videos', 'Results'], Body: GlorieMonthly },
  'lam-thao-tour': { tabs: ['Concept Story', 'Detail', 'Results'], Body: LamThaoTour },
  'lam-thao-fanpage': { tabs: ['Overview', 'Results'], Body: LamThaoFanpage },
  'glorie-tiktok': { tabs: ['Overview', 'Results'], Body: () => <TikTokChannel index={0} /> },
  'befou-tiktok': { tabs: ['Overview', 'Results'], Body: () => <TikTokChannel index={1} /> },
  'seo-content': { tabs: [], Body: SeoContent },
};
