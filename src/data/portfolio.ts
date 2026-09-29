// All portfolio copy lives here, transcribed from "Thanh Thanh - Portfolio.pdf".
// Images under /public/images are screenshots cropped from that PDF — replace each
// file with the real asset under the same name and the page picks it up unchanged.

export type Shot = { src: string; alt: string; caption?: string; href?: string };

const img = (name: string) => `/images/${name}`;

export const profile = {
  name: 'Hắc Thị Thanh Thanh',
  shortName: 'Thanh Thanh',
  role: 'Influencer Marketing · Social Content · SEO Writing',
  year: '2025',
  heroImage: img('hero-portrait.png'),
  aboutImage: img('about-portrait.jpg'),
  phone: '0917 193 820',
  phoneHref: 'tel:+84917193820',
  email: 'thanhthanhhac.work@gmail.com',
  intro: [
    'A Marketer with nearly two and a half years of experience in the cosmetics industry. I started my journey as a social media content creator, building engaging content for brand fanpages that strengthened brand image and customer connection.',
    'During that time, I became fascinated by how influencers and KOCs could shape consumer decisions and drive real purchasing behavior.',
    'That insight led me to focus more on influencer marketing strategies — especially leveraging KOC reviews and authentic content to boost brand awareness and sales through TikTok.',
    'I believe my experience and passion for influencer marketing make me a great fit for a dynamic company that values authenticity, innovation, and meaningful engagement.',
  ],
  marquee: [
    'Influencer Marketing',
    'KOL & KOC',
    'TikTok',
    'Glorie',
    'Befou',
    'Lam Thảo Cosmetics',
    'Social Content',
    'Affiliate Sales',
    'SEO Writing',
  ],
  highlights: [
    { value: '2.5', unit: 'yrs', label: 'in cosmetics marketing' },
    { value: '10K+', unit: '', label: 'products sold in a 2‑month launch' },
    { value: '3M+', unit: '', label: 'views on a top KOL video' },
    { value: '~50%', unit: '', label: 'of product GMV from influencers' },
  ],
};

export const experiences = [
  { company: 'Glorie Việt Nam & Befou Việt Nam', role: 'Influencer Marketing', period: '08/2024 – Present' },
  { company: 'Lam Thảo Cosmetics', role: 'Influencer Marketing', period: '02/2024 – Present' },
  { company: 'Lam Thảo Cosmetics', role: 'Social Content Writer', period: '06/2024 – 05/2025' },
  { company: 'American Fashion', role: 'SEO Content Collaborator', period: '10/2023 – 03/2024' },
];

export const education = [{ school: 'UEH University', degree: 'Bachelor of Marketing', period: '08/2021 – 03/2025' }];

export const languages = [
  { name: 'English', level: 'Intermediate', note: 'TOEIC 900/990' },
  { name: 'Chinese', level: 'Elementary', note: 'HSK 2' },
];

export const skills = {
  key: [
    'Influencer Marketing',
    'KOL Management',
    'Social Media Management',
    'SEO Copywriting',
    'Branding',
    'Video Editing',
  ],
  soft: [
    'Teamwork',
    'Creativity',
    'Problem Solving',
    'Communication',
    'Planning & Time Management',
    'Research & Analysis',
  ],
  software: ['Canva', 'CapCut', 'Google Sheets', 'PowerPoint', 'Word', 'ChatGPT'],
};

export const influencerIntro =
  'Working with KOCs and KOLs on TikTok sparked my fascination with how authentic voices can shape consumer choices. I’ve since focused on developing influencer marketing strategies that turn genuine content and KOC reviews into real brand impact. I’m passionate about creating stories that connect brands and audiences in ways that feel honest, relatable, and memorable.';

export const glorieLaunch = {
  id: 'glorie-launch',
  no: '01',
  title: 'Glorie Launching Campaign',
  cover: { src: img('glorie-launch-cover.jpg'), alt: 'Glorie Brush Soap launch key visuals' },
  overview: [
    'Glorie is a newly launched beauty brand focusing on gentle, convenient products for modern women. Debuting its first product — the Glorie Brush Soap — during Lunar New Year 2025, the brand tapped into a peak season for beauty and shopping demand.',
    'To quickly build awareness and drive conversions, Glorie chose TikTok and influencer marketing as the core of its campaign, leveraging authentic KOL and KOC content to inspire real purchase intent.',
  ],
  bigIdea:
    'Every girl loves makeup, but not everyone loves cleaning their brushes. That’s where Glorie Brush Soap comes in — the “savior for those too lazy to wash their brushes.” The campaign centers around educating audiences on the importance of proper brush cleaning while highlighting Glorie’s quick, effortless, and time-saving formula. With this message, Glorie positions itself as the smart, easy beauty solution for modern women who value both convenience and care.',
  bigIdeaImages: [
    { src: img('glorie-product.jpg'), alt: 'Glorie Brush Soap product shot' },
    { src: img('glorie-visuals.jpg'), alt: 'Glorie campaign social visuals' },
  ],
  whatIDid: {
    lead: 'For this campaign I managed 4 out of 10 KOLs from start to finish:',
    items: [
      'Collaborating with the internal team to define campaign direction and finalizing briefs.',
      'Selecting KOLs aligned with Glorie’s brand image and target audience.',
      'Leading negotiations, coordination, and content supervision.',
      'Ensuring all deliverables met brand standards and were published on schedule to maintain a consistent campaign flow.',
    ],
  },
  detailIntro:
    'To promote the Glorie Brush Soap, the campaign teamed up with top makeup KOLs whose followers love beauty and use makeup often, helping the brand build strong product awareness. At the same time, Glorie worked with many micro and nano influencers to add authenticity and boost social media reach, making the product more trusted and visible across platforms.',
  facts: [
    { label: 'Type', value: 'Micro & Macro Influencer' },
    { label: 'Scope of works', value: '1 TikTok video' },
    { label: 'Location', value: 'Ho Chi Minh City' },
    { label: 'Niche', value: 'Makeup, Beauty, Lifestyle' },
    { label: 'Timeline', value: 'January 15 – March 30, 2025' },
  ],
  workflow: [
    {
      title: 'Received brief',
      text: 'Receive campaign brief, fully understand the objectives, key messages, and target audience.',
    },
    {
      title: 'Influencer scouting',
      text: 'Research, evaluate, and shortlist the most suitable KOLs and KOCs that fit the campaign strategy.',
    },
    {
      title: 'Outreach & Negotiation',
      text: 'Contact selected influencers to discuss details — creative direction, deliverables, timeline, pricing.',
    },
    {
      title: 'Contract & Agreement',
      text: 'Prepare and finalize collaboration agreements. Manage product delivery.',
    },
    {
      title: 'Content Production',
      text: 'Coordinate content production and ensure all materials meet brand guidelines and receive official approval before publication.',
    },
    {
      title: 'Execution & Review',
      text: 'Monitor content posting and campaign performance, tracking both awareness results and conversion outcomes to measure overall impact.',
    },
  ],
  results: [
    {
      title: 'Task Completion',
      text: 'Successfully completed 100% of the assigned KOL management scope. Each deliverable was executed on time and met both brand and campaign expectations.',
    },
    {
      title: 'Content Delivery',
      text: 'Delivered over 5 high-quality, on-brief video reviews that clearly communicated the product’s key benefits and campaign message.',
    },
    {
      title: 'Performance',
      text: 'The KOLs under my management achieved impressive engagement results, with one video surpassing 1 million views organically.',
    },
    {
      title: 'Impact',
      text: 'The campaign drove a strong conversion rate, resulting in a notable increase in product sales within just two months.',
    },
  ],
  headline: { value: '10,000+', text: 'products sold across multiple sales channels in just two months.' },
  videos: [
    {
      src: img('glorie-kol-thang-1.jpg'),
      alt: 'Thắng makeup x Glorie Soap TikTok video 1',
      caption: 'Thắng makeup x Glorie Soap — Video 1',
    },
    {
      src: img('glorie-kol-thang-2.jpg'),
      alt: 'Thắng makeup x Glorie Soap TikTok video 2',
      caption: 'Thắng makeup x Glorie Soap — Video 2',
    },
    { src: img('glorie-kol-trang-kien.jpg'), alt: 'Trang Kiến x Glorie TikTok video', caption: 'Trang Kiến x Glorie' },
    { src: img('glorie-kol-peckii.jpg'), alt: 'Peckiimakeup x Glorie TikTok video', caption: 'Peckiimakeup x Glorie' },
  ] satisfies Shot[],
};

export const glorieMonthly = {
  id: 'glorie-monthly',
  no: '02',
  title: 'Glorie Monthly Booking Campaign',
  contribution: [
    'Researched and curated monthly influencer lists based on reach, virality, and alignment with the brand’s monthly campaign focus.',
    'Handled A-to-Z communication, negotiation, and agreement on scope of work, deliverables, and production costs.',
    'Coordinated sample delivery, drafted collaboration contracts, and ensured timely execution.',
    'Supervised content quality — including visuals, messaging, and video editing — to ensure brand approval and alignment.',
    'Monitored video performance post-launch, tracked conversions, and collaborated with the ads team to boost campaign effectiveness through paid support.',
  ],
  goal: 'Maintained consistent monthly influencer bookings to drive sales through the brand’s affiliate channel.',
  headline: {
    value: '~50%',
    text: 'Revenue generated from influencer collaborations continued to grow steadily, accounting for nearly 50% of the total GMV of the Glorie Brush Cleansing Soap product.',
  },
  dashboards: [
    { src: img('glorie-monthly-dashboard-1.jpg'), alt: 'Affiliate performance dashboard overview' },
    { src: img('glorie-monthly-dashboard-2.jpg'), alt: 'Affiliate GMV trend dashboard' },
    { src: img('glorie-monthly-dashboard-3.jpg'), alt: 'Creator performance breakdown dashboard' },
  ] satisfies Shot[],
  audience:
    'All selected Macro Influencers maintained an engagement rate above 8% and demonstrated strong viral influence. Their audience consisted mainly of female viewers aged 18–24, with content focused on makeup and skincare, perfectly aligning with the brand’s target market.',
  highlighted: [
    { name: 'Glorie x Nguyễn Ngọc Xuân Nhi', views: '1.6M', sales: '1,018', src: img('glorie-monthly-xuan-nhi.jpg') },
    { name: 'Glorie x Nông Thị Thu Uyên', views: '896.2K', sales: '1,008', src: img('glorie-monthly-thu-uyen.jpg') },
    { name: 'Glorie x Vickee.bae', views: '896.6K', sales: '534', src: img('glorie-monthly-vickee.jpg') },
  ],
  gmv: [
    {
      period: 'June – August 2025',
      total: 'VND 2.7B',
      share: '89.26%',
      linkSales: '≈ VND 2.5B',
      takeaway: 'Revenue through affiliate channels via influencers contributed the majority of the brand’s net sales.',
      shot: { src: img('glorie-gmv-jun-aug.jpg'), alt: 'GMV report June to August 2025' },
    },
    {
      period: 'September – October 2025',
      total: 'VND 975M',
      share: '88.51%',
      linkSales: '≈ VND 863M',
      takeaway:
        'Although overall product revenue decreased compared to the previous quarter, influencer marketing continued to play a critical role in driving brand sales and engagement.',
      shot: { src: img('glorie-gmv-sep-oct.jpg'), alt: 'GMV report September to October 2025' },
    },
  ],
};

export const lamThaoTour = {
  id: 'lam-thao-tour',
  no: '03',
  title: 'Lam Thảo’s Reviewing Tour In Store',
  cover: { src: img('lamthao-store-cover.jpg'), alt: 'Lam Thảo Cosmetics store interior' },
  concept: [
    'To celebrate the grand opening of Lam Thảo Cosmetics Cần Thơ, the campaign centers on authentic in-store experiences shared by local KOLs and KOCs. Their genuine reviews and beauty try-ons build trust and excitement, spreading awareness of the brand’s first provincial branch.',
    'At the same time, the campaign amplifies visibility for Lam Thảo’s Ho Chi Minh City stores, encouraging customers to visit and experience the products firsthand — turning influencer stories into real-life engagement across both cities.',
  ],
  strategy: [
    'To amplify awareness of Lam Thảo’s first provincial store launch, I initiated a strategy centered on micro influencers to generate local buzz and coverage for the grand opening.',
    'Meanwhile, for the existing Ho Chi Minh City stores, I collaborated with macro and mega influencers to drive deeper discussions and highlight the brand’s signature in-store services, enhancing both credibility and customer engagement.',
  ],
  storePhoto: { src: img('lamthao-store-photo.jpg'), alt: 'Lam Thảo Cosmetics Cần Thơ store opening' },
  facts: [
    { label: 'Type', value: 'Micro (Cần Thơ store): 10 influencers · Macro & Mega (HCM stores): 20 influencers' },
    { label: 'Niche', value: 'Makeup, Beauty, Lifestyle' },
    { label: 'Timeline', value: 'Oct 01 – Oct 30, 2025' },
  ],
  tasks: [
    'Selected KOLs that matched Lam Thảo’s brand image and target audience.',
    'Acted as the main contact for influencers, handling coordination and issue resolution.',
    'Led negotiations, managed timelines, and ensured all content met brand standards.',
    'Created clear content guidelines and oversaw quality control throughout production.',
    'Monitored performance metrics and delivered monthly campaign reports to the brand.',
  ],
  output: [
    { value: '20', label: 'clips — Micro Influencers' },
    { value: '5', label: 'clips — Macro Influencers' },
  ],
  plan: { src: img('lamthao-plan.jpg'), alt: 'Lam Thảo in-store campaign plan spreadsheet' },
  clips: [1, 2, 3, 4, 5, 6].map((n) => ({
    src: img(`lamthao-clip-${n}.jpg`),
    alt: `Lam Thảo in-store review clip ${n}`,
  })) satisfies Shot[],
  results: [
    'All Macro Influencer videos achieved over 800K views, with the top video surpassing 3 million views.',
    'The campaign significantly boosted Lam Thảo Cosmetics’ brand visibility, helping it become one of the most-searched beauty stores during the launch period.',
  ],
  // TODO: add each video URL to `href` — the PDF only shows "Link" labels.
  kols: [
    { src: img('lamthao-kol-pun-pun.jpg'), alt: 'Pun Pun Cute in-store review', caption: 'Pun Pun Cute' },
    { src: img('lamthao-kol-cu-hanh-tay.jpg'), alt: 'Củ Hành Tây in-store review', caption: 'Củ Hành Tây' },
    { src: img('lamthao-kol-tun-cui-bap.jpg'), alt: 'Tủn Cùi Bắp in-store review', caption: 'Tủn Cùi Bắp' },
    { src: img('lamthao-kol-mai-tri-thuc.jpg'), alt: 'Mai Trí Thức in-store review', caption: 'Mai Trí Thức' },
    { src: img('lamthao-kol-duy-best.jpg'), alt: 'Duy Best in-store review', caption: 'Duy Best' },
  ] as Shot[],
};

export const socialContent = {
  overview: [
    {
      title: 'Social Media Content',
      text: 'Produced and managed content for the official Facebook and Instagram accounts of Lam Thảo Cosmetics during my internship, ensuring that all visuals and copy aligned with the brand’s aesthetic and tone of voice. Created strategic posts to promote new product launches and seasonal campaigns, effectively enhancing brand presence and engagement.',
    },
    {
      title: 'Content Leadership',
      text: 'Led the content direction for the creative team managing Glorie Vietnam and Befou Vietnam TikTok channels. Supervised content production to maintain brand consistency, visual quality, and storytelling standards, while driving high engagement and viral reach across key video campaigns.',
    },
  ],
  lamThao: {
    title: 'Lam Thảo Cosmetics Fanpage',
    contribution: [
      'From July 2024 to May 2025, I was responsible for overseeing both content strategy and visual direction for Lam Thảo’s official Facebook fanpage. I developed diverse and engaging content aimed at boosting customer interaction and expanding brand reach.',
      'The content covered a wide range of topics — from product showcases and trending beauty themes to seasonal sales promotions and gift set campaigns — ensuring Lam Thảo’s social presence stayed vibrant, relevant, and customer-focused.',
    ],
    posts: [1, 2, 3, 4, 5].map((n) => ({
      src: img(`lamthao-post-${n}.jpg`),
      alt: `Lam Thảo Cosmetics Facebook post ${n}`,
    })) satisfies Shot[],
    metricsNote: 'Fanpage engagement metrics, February 2025 – May 2025',
    metricsImage: { src: img('lamthao-fanpage-metrics.jpg'), alt: 'Lam Thảo fanpage engagement metrics report' },
    stats: [
      { value: '5M+', label: 'total views per month, 70%+ organic' },
      { value: '10K', label: 'average monthly page visits' },
      { value: '2,000+', label: 'customer inquiries / month, 1,200+ new leads' },
      { value: '250+', label: 'orders created via the fanpage monthly' },
      { value: '+9.1K', label: 'follower growth over four months' },
    ],
  },
  tiktok: [
    {
      id: 'glorie-tiktok',
      name: 'Glorie Việt Nam',
      handle: '@glorievietnam',
      profile: { src: img('glorie-tiktok-profile.jpg'), alt: 'Glorie Việt Nam TikTok profile' },
      overview: [
        'Served as the content team leader for Glorie, overseeing key content categories including product features, benefit storytelling, user education, and promotional campaigns.',
        'Planned and managed a monthly content timeline to ensure the consistent production and publishing of 21 videos per month. Supervised and reviewed all video content to maintain brand consistency, visual quality, and message alignment across Glorie’s social media platforms.',
      ],
      videos: [1, 2, 3, 4].map((n) => ({
        src: img(`glorie-tiktok-${n}.jpg`),
        alt: `Glorie Việt Nam TikTok video ${n}`,
      })) satisfies Shot[],
      results: [
        'Successfully produced at least 20 TikTok videos per month, evenly distributed across the planned content categories.',
        'Achieved a minimum of 5 high-performing videos each month, supported by paid ad amplification to maximize reach and visibility.',
        'The videos achieved consistently high Add-to-Cart click-through rates, indicating strong audience curiosity and interest in the product content.',
        'The channel gained 170 new followers over the last two months, reflecting steady growth and rising audience interest.',
      ],
      stats: { src: img('glorie-tiktok-stats.jpg'), alt: 'Glorie Việt Nam TikTok analytics' },
    },
    {
      id: 'befou-tiktok',
      name: 'Befou Việt Nam',
      handle: '@befouvietnam',
      profile: { src: img('befou-tiktok-profile.jpg'), alt: 'Befou Việt Nam TikTok profile' },
      overview: [
        'Ensured all content aligned with BEFOU’s brand image — a personal care brand focused on educating consumers and addressing real user concerns. Core content pillars included product education, UGC-style product showcases, monthly sales updates, and problem-solving storytelling.',
        'Supervised and reviewed all video content and visuals before publication, developed monthly TikTok content plans and assigned production tasks to the content creator team, ensuring timely and cohesive execution.',
      ],
      videos: [1, 2, 3, 4].map((n) => ({
        src: img(`befou-tiktok-${n}.jpg`),
        alt: `Befou Việt Nam TikTok video ${n}`,
      })) satisfies Shot[],
      results: [
        'Successfully produced at least 20 TikTok videos per month, evenly distributed across the planned content categories.',
        'Users showed strong interest in cotton-pad content and problem-solving topics that highlighted how BEFOU products address real consumer concerns.',
        'Add-to-Cart click-through rates were consistently strong — the highest-performing video generated 1.17K Add-to-Cart clicks.',
        'Achieved 887 follower growth within two months, indicating strong audience engagement and brand visibility.',
      ],
      stats: { src: img('befou-tiktok-stats.jpg'), alt: 'Befou Việt Nam TikTok analytics' },
    },
  ],
};

export const seoContent = {
  company: 'American Fashion Company',
  timeline: '10/2023 – 04/2024',
  brand: 'iBasic',
  image: { src: img('seo-blogs.jpg'), alt: 'Example blog posts written for the iBasic brand' },
  items: [
    'Created 10 blog posts per month on topics such as lingerie, swimwear, sleepwear, and nightgowns, increasing website traffic by 15% within one month.',
    'Optimized articles for SEO using high-ranking keywords to achieve top 1–2 positions on Google.',
    'Integrated high-quality visuals to enhance aesthetics and reader engagement.',
  ],
};

export type ProjectSlug =
  | 'glorie-launch'
  | 'glorie-monthly'
  | 'lam-thao-tour'
  | 'lam-thao-fanpage'
  | 'glorie-tiktok'
  | 'befou-tiktok'
  | 'seo-content';

export type Project = {
  slug: ProjectSlug;
  title: string;
  summary: string;
  cover: Shot;
  stat: { value: string; label: string };
};

export type Chapter = { no: string; id: string; title: string; intro: string[]; projects: Project[] };

export const chapters: Chapter[] = [
  {
    no: '01',
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    intro: [influencerIntro],
    projects: [
      {
        slug: 'glorie-launch',
        title: glorieLaunch.title,
        summary:
          'Launching Glorie Brush Soap on TikTok over Lunar New Year 2025 — managed 4 of 10 KOLs from brief to publish.',
        cover: glorieLaunch.cover,
        stat: { value: '10,000+', label: 'products sold in 2 months' },
      },
      {
        slug: 'glorie-monthly',
        title: glorieMonthly.title,
        summary: 'Monthly KOL/KOC bookings that drive sales through Glorie’s TikTok affiliate channel.',
        cover: { src: img('glorie-monthly-xuan-nhi.jpg'), alt: 'Glorie x Nguyễn Ngọc Xuân Nhi video analytics' },
        stat: { value: '~50%', label: 'of product GMV from influencers' },
      },
      {
        slug: 'lam-thao-tour',
        title: lamThaoTour.title,
        summary:
          'In-store review tour with 30 influencers for Lam Thảo’s first provincial store in Cần Thơ and its HCM stores.',
        cover: lamThaoTour.cover,
        stat: { value: '3M+', label: 'views on the top video' },
      },
    ],
  },
  {
    no: '02',
    id: 'social-content',
    title: 'Social Content Creator',
    intro: socialContent.overview.map((o) => o.text),
    projects: [
      {
        slug: 'lam-thao-fanpage',
        title: socialContent.lamThao.title,
        summary: 'Content strategy and visual direction for Lam Thảo Cosmetics’ official Facebook fanpage.',
        cover: socialContent.lamThao.posts[3],
        stat: { value: '5M+', label: 'total views per month' },
      },
      {
        slug: 'glorie-tiktok',
        title: 'Glorie Việt Nam TikTok',
        summary: 'Led the content team behind Glorie’s TikTok channel — 21 videos planned and published every month.',
        cover: socialContent.tiktok[0].videos[1],
        stat: { value: '5+', label: 'high-performing videos / month' },
      },
      {
        slug: 'befou-tiktok',
        title: 'Befou Việt Nam TikTok',
        summary: 'Content direction for Befou: product education, UGC-style showcases and problem-solving stories.',
        cover: socialContent.tiktok[1].videos[1],
        stat: { value: '1.17K', label: 'Add-to-Cart clicks on the top video' },
      },
    ],
  },
  {
    no: '03',
    id: 'seo-content',
    title: 'SEO Content Writer',
    intro: [`Blog content for the ${seoContent.brand} brand at ${seoContent.company}, ${seoContent.timeline}.`],
    projects: [
      {
        slug: 'seo-content',
        title: `SEO Blogs for ${seoContent.brand}`,
        summary:
          '10 SEO-optimised blog posts a month on lingerie, swimwear and sleepwear, ranking in Google’s top 1–2.',
        cover: seoContent.image,
        stat: { value: '+15%', label: 'website traffic within one month' },
      },
    ],
  },
];

export const projects = chapters.flatMap((c) => c.projects.map((p) => ({ ...p, chapter: c })));

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
