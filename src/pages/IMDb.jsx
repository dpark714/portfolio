import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const PANEL = '#F7F6F3';
const LINE = 'rgba(20,20,20,0.08)';
const ACCENT = '#CA9A00';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'research', label: 'Research' },
  { id: 'problem', label: 'Problem' },
  { id: 'analysis', label: 'Analysis' },
  { id: 'solution', label: 'Solution' },
  { id: 'reflection', label: 'Reflection' },
];

const meta = [
  { label: 'Role', value: 'UXUI Designer' },
  { label: 'Type', value: 'Mobile App Redesign' },
  { label: 'Disciplines', value: 'UX Research · UI Design · Competitive Analysis' },
  { label: 'Tools', value: 'Figma' },
  { label: 'Platform', value: 'Mobile' },
];

const voiceOfCustomer = [
  {
    theme: 'Excessive Ads &\nlong loading time',
    quotes: [
      'There are way too many ads. I just want to check something quickly',
      'Ads more than contents. It\'s really frustrating',
      'Content loads up and freezes the app',
    ],
  },
  {
    theme: 'Inefficient filters &\nexploration flow',
    quotes: [
      'I just scroll endlessly',
      'Useless search filters. Why can\'t I search by ratings such as G, PG, etc?',
      'I have to scroll back and forth between sections. There\'s just too much going on',
      'It contains so much information, and layout is not helping',
    ],
  },
  {
    theme: 'Low review\ncredibility',
    quotes: [
      'This app let anybody rate a movie and none of their ratings ever help',
      'Why are already reviews on movies that haven\'t even been released?',
      'I can\'t tell if the reviewers actually watched the content',
    ],
  },
  {
    theme: 'Outdated UI &\nlow-context interaction',
    quotes: [
      'UI is cringe and outdated. It\'s not helping to navigate what goes where',
      'Button is too small. I keep clicking wrong things',
      'I wish I could add to my list of what I watched intuitively like watchlist',
    ],
  },
];

const hypotheses = [
  { number: '01', text: 'Users use IMDb primarily to validate known content, not to discover due to their task oriented intent.' },
  { number: '02', text: 'Unintuitive and untrustworthy personal features reduce user retention.' },
  { number: '03', text: 'Excessive content and poor layout cause cognitive overload.' },
];

const validations = [
  { hypothesis: 'H1', result: 'Confirmed', text: 'Most users open IMDb with a specific title in mind, often after a recommendation. Discovery is rarely the intent.' },
  { hypothesis: 'H2', result: 'Confirmed', text: 'Features like watched lists exist but are not intuitive. Users switch to Letterboxd or other apps for logging, sharing, or trend following.' },
  { hypothesis: 'H3', result: 'Refined', text: 'Cognitive overload is caused more by layout structure (small UI, Ads overload, cluttered hierarchy) than by the volume of information itself.' },
];

const swot = [
  { label: 'Strengths', labelColor: 'text-green-600', items: ['Most reliable database for movies and TV', 'Extensive cast, crew, and production details'] },
  { label: 'Weaknesses', labelColor: 'text-red-500', items: ['Lack of community interaction', 'Linear, passive content exploration'] },
  { label: 'Opportunities', labelColor: 'text-blue-500', items: ['Personalized content based on behavior', 'Enhance core user actions and logging'] },
  { label: 'Threats', labelColor: 'text-orange-500', items: ['Shift toward social, community based consumption', 'Interface gap vs. modern competitors'] },
];

const screens = [
  {
    name: 'Home',
    beforeSrc: '/imdb/home_before.png',
    video: '/imdb/imdb_home.mov',
    asBefore: 'Cluttered with frequent ads, with top banners and in between content that disrupt browsing. The search bar is duplicated: it appears on the Home screen and again as a dedicated tab in the bottom nav. Both lead to the same interface, creating redundancy and unnecessary confusion.',
    asAfter: 'Home now prioritizes relevant content. Users can tailor their layout by rearranging or hiding sections, getting quick access to trending titles and recommendations from people with similar tastes. The duplicate search bar is removed.',
  },
  {
    name: 'Search Result & Review',
    beforeSrc: '/imdb/search_before.png',
    video: '/imdb/imdb_searchReview.mov',
    asBefore: 'Only the Watchlist option is available for quick saving, limiting how users track content. The tab menu (Cast, Reviews, Trivia) disappears when scrolling, requiring users to scroll back to the top to switch sections.',
    asAfter: 'Users can save to multiple lists: Watchlist, Watched, or Like, directly from the page. The tab menu is now fixed and customizable, keeping Cast, Reviews, and Trivia accessible at all times while scrolling. Rating and reviewing are combined into a single interface. Ratings apply instantly on selection.',
  },
  {
    name: 'Personalized & Community Discovery',
    beforeSrc: '/imdb/profile_before.png',
    video: '/imdb/imdb_profile.mov',
    asBefore: 'Switching between tabs triggers a full page reload, making navigation feel slow. No community features exist. Creating lists beyond the default Watchlist requires manual setup, and the Check-ins feature, which functions like a Watched list, is nearly impossible to find.',
    asAfter: 'Smooth tab navigation without full reloads. Users can create shareable collections and set them public or private. Public collections surface in community sections on the Home page. Watched, Likes, and Watchlist each have distinct icons for quick identification.',
  },
];

function Eyebrow({ children }) {
  return (
    <span className="type-label text-gray-400 mb-6 block">
      {children}
    </span>
  );
}

function Heading({ children, className = '' }) {
  return (
    <h2 className={`font-sans font-semibold text-lg md:text-xl leading-snug mb-5 text-primary ${className}`}>
      {children}
    </h2>
  );
}

function SectionNav({ sections }) {
  const [active, setActive] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-10% 0px -50% 0px' }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="hidden lg:flex flex-col gap-2.5 sticky top-32 self-start">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="flex items-center gap-2 text-left"
        >
          <span
            className="shrink-0 w-1 h-1 rounded-full border transition-colors duration-200"
            style={{ backgroundColor: active === id ? '#141414' : 'transparent', borderColor: active === id ? '#141414' : '#D4D4D4' }}
          />
          <span
            className={`font-sans text-[10px] uppercase tracking-widest transition-colors duration-200 ${active === id ? 'text-primary font-semibold' : 'text-gray-400 font-normal'}`}
          >
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
}

export default function IMDb() {
  return (
    <div className="min-h-screen bg-white text-primary">
      <Navbar sticky={false} solid />

      {/* ── Cover ── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-14 xl:px-20 pt-40 sm:pt-48 pb-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="type-label text-gray-400 mb-5 inline-block">Case Study — IMDb</span>
          <h1 className="font-sans font-semibold text-2xl sm:text-3xl md:text-4xl leading-[1.2] text-primary mb-6">
            Modernizing the world's most trusted movie database
          </h1>
          <p className="type-body-sm text-gray-400 max-w-xl mx-auto">
            Improving discoverability, personalization, and community for the world's most comprehensive entertainment database.
          </p>
        </div>

        <div className="flex flex-nowrap justify-center gap-x-6 pt-10 mt-10 border-t mx-auto overflow-x-auto" style={{ borderColor: LINE }}>
          {meta.map(m => (
            <div key={m.label} className="flex flex-col items-center gap-1 text-center shrink-0">
              <span className="type-label text-gray-400 whitespace-nowrap">{m.label}</span>
              <span className="type-body-sm text-primary whitespace-nowrap">{m.value}</span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden w-full max-w-2xl mx-auto aspect-[16/10] mt-14" style={{ backgroundColor: PANEL }}>
          <img src="/imdb/imdb_cover.png" alt="IMDb Redesign cover" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-14 xl:px-20 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-x-16">
          <SectionNav sections={sections} />

          <div>
            {/* ── Overview ── */}
            <div id="overview" className="mb-20">
              <Heading>Overview</Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <Eyebrow>The Product</Eyebrow>
                  <p className="type-body text-base text-gray-500 mb-4">
                    IMDb is the world's most comprehensive entertainment database, covering cast, reviews, where to watch, behind the scenes details, and production insights for millions of titles.
                  </p>
                  <p className="type-body text-base text-gray-500">
                    It holds a 4.7 on the App Store and 4.8 on Google Play. The data looks fine, but underneath the ratings, recurring complaints kept surfacing across community discussions.
                  </p>
                </div>
                <div>
                  <Eyebrow>The Opportunity</Eyebrow>
                  <p className="type-body text-base text-gray-500">
                    Meanwhile, Letterboxd and Rotten Tomatoes are reshaping how users engage with entertainment through community, personalization, and a more modern interface. This redesign focuses on closing that gap without losing what makes IMDb irreplaceable.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Research ── */}
            <div id="research" className="mb-20">
              <Heading>What the research surfaced</Heading>

              <div className="mb-16">
                <Eyebrow>Voice of Customer</Eyebrow>
                <div className="flex flex-wrap gap-2 mb-8">
                  {voiceOfCustomer.map(g => (
                    <span key={g.theme} className="px-4 py-2 rounded-full bg-yellow-400/15 text-yellow-700 font-sans font-medium text-sm leading-snug">
                      {g.theme.replace('\n', ' ')}
                    </span>
                  ))}
                </div>
                <div className="columns-1 sm:columns-2 md:columns-3 gap-x-10">
                  {voiceOfCustomer.flatMap(g => g.quotes).map((quote, index) => (
                    <p key={quote} className={`font-sans italic text-gray-400 text-sm mb-5 break-inside-avoid ${index >= 5 ? 'hidden sm:block' : ''}`}>
                      &ldquo;{quote}&rdquo;
                    </p>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <Eyebrow>Hypothesis</Eyebrow>
                <div className="flex flex-col gap-3">
                  {hypotheses.map((h, i) => (
                    <div key={h.number} className="rounded-2xl p-6 md:p-8 flex items-start gap-6" style={{ backgroundColor: PANEL }}>
                      <span className="type-label shrink-0 mt-0.5" style={{ color: ACCENT }}>H{i + 1}</span>
                      <p className="type-body text-base text-gray-500">{h.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <Eyebrow>User Interview</Eyebrow>
                <p className="type-body text-base text-gray-500">
                  I interviewed three active IMDb users, each with over a year of usage.{' '}
                  <span className="font-medium text-primary">Their most frequently used features were Cast &amp; Crew Search, Trivia, and Quick Ratings Check — all quick lookups.</span>{' '}
                  Search results were considered accurate, but users found the experience cluttered with{' '}
                  <span className="font-medium text-primary">messy layout</span>,{' '}
                  <span className="font-medium text-primary">long scroll</span>,{' '}
                  <span className="font-medium text-primary">outdated UI</span>, and{' '}
                  <span className="font-medium text-primary">hidden features</span>. Users consistently turned to other apps for social sharing, watch logging, and review comparison.
                </p>
              </div>

              <div>
                <Eyebrow>Hypothesis Validation</Eyebrow>
                <div className="flex flex-col gap-3">
                  {validations.map(v => (
                    <div key={v.hypothesis} className="rounded-2xl p-6 md:p-8 flex items-start gap-6" style={{ backgroundColor: PANEL }}>
                      <div className="flex flex-col items-center gap-1 shrink-0">
                        <span className="type-label" style={{ color: ACCENT }}>{v.hypothesis}</span>
                        <span className={`type-label px-2 py-0.5 rounded-full ${v.result === 'Confirmed' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-500'}`}>
                          {v.result}
                        </span>
                      </div>
                      <p className="type-body text-base text-gray-500">{v.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Problem ── */}
            <div id="problem" className="mb-20 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-10">
              <p className="font-sans font-semibold text-lg text-primary">Problem</p>
              <p className="type-body text-base text-gray-600">
                Users struggle to discover and engage with IMDb's personalized features, leaving their experience passive and surface-level.
              </p>
            </div>

            {/* ── Analysis ── */}
            <div id="analysis" className="mb-20">
              <Heading>Analysis</Heading>
              <Eyebrow>SWOT Analysis</Eyebrow>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {swot.map(s => (
                  <div key={s.label} className="rounded-2xl p-6 flex flex-col gap-3" style={{ backgroundColor: PANEL }}>
                    <p className={`type-label font-medium ${s.labelColor}`}>{s.label}</p>
                    <ul className="flex flex-col gap-2 list-disc list-inside">
                      {s.items.map(item => (
                        <li key={item} className="type-body-sm text-gray-500">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Solution ── */}
            <div id="solution" className="mb-20">
              <Heading>Solution</Heading>

              <div className="mb-16 flex flex-col gap-4">
                <p className="font-sans font-semibold text-lg md:text-xl text-primary leading-snug">
                  From passive lookup to active engagement
                </p>
                <p className="type-body text-base text-gray-500">
                  Improve goal oriented search behavior and enhance personalization through community driven recommendations, without disrupting the core use case IMDb already does well.
                </p>
              </div>

              <div className="flex flex-col gap-20">
                {screens.map((s) => (
                  <div key={s.name}>
                    <p className="font-sans font-semibold text-base text-primary mb-8">{s.name}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-start">
                      <div className="flex flex-col gap-3 h-full">
                        <span className="type-label text-gray-400">As Is</span>
                        <div className="rounded-2xl p-6 flex justify-center" style={{ backgroundColor: '#FFFFFF' }}>
                          <div className="w-[240px] aspect-[9/16] shrink-0 flex items-start justify-center">
                            <img src={s.beforeSrc} alt={`${s.name} before`} className="w-full h-full object-contain" />
                          </div>
                        </div>
                        <p className="type-body-sm text-gray-500">{s.asBefore}</p>
                      </div>
                      <div className="flex flex-col gap-3 h-full">
                        <span className="type-label" style={{ color: ACCENT }}>To Be</span>
                        <div className="flex justify-center p-6">
                          <div className="w-[240px] aspect-[9/16] rounded-xl overflow-hidden shrink-0">
                            <video src={s.video} className="w-full h-full object-cover" autoPlay loop muted playsInline />
                          </div>
                        </div>
                        <p className="type-body-sm text-gray-500">{s.asAfter}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Reflection ── */}
            <div id="reflection">
              <Heading>Reflection</Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <Eyebrow>What I learned</Eyebrow>
                  <p className="type-body text-base text-gray-500">
                    High ratings don't mean users are satisfied; they mean users haven't found a better alternative yet. The gap between surface metrics and actual behavior is where the most important design opportunities live.
                  </p>
                </div>
                <div>
                  <Eyebrow>What I'd do differently</Eyebrow>
                  <p className="type-body text-base text-gray-500">
                    I'd run usability tests on the existing app before forming hypotheses, not after. The validation phase revealed that H3 needed refinement (layout vs. volume), which earlier observation sessions might have caught sooner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#111] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200"
        aria-label="Scroll to top"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="2,9 7,4 12,9" />
        </svg>
      </button>
    </div>
  );
}
