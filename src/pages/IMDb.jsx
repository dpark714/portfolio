import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import TableOfContents from '../components/TableOfContents.jsx';

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'research', label: 'Research' },
  { id: 'problem', label: 'Problem' },
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
  {
    number: '01',
    text: 'Users use IMDb primarily to validate known content, not to discover due to their task oriented intent.',
  },
  {
    number: '02',
    text: 'Unintuitive and untrustworthy personal features reduce user retention.',
  },
  {
    number: '03',
    text: 'Excessive content and poor layout cause cognitive overload.',
  },
];

const validations = [
  {
    hypothesis: 'H1',
    result: 'Confirmed',
    text: 'Most users open IMDb with a specific title in mind, often after a recommendation. Discovery is rarely the intent.',
  },
  {
    hypothesis: 'H2',
    result: 'Confirmed',
    text: 'Features like watched lists exist but are not intuitive. Users switch to Letterboxd or other apps for logging, sharing, or trend following.',
  },
  {
    hypothesis: 'H3',
    result: 'Refined',
    text: 'Cognitive overload is caused more by layout structure (small UI, Ads overload, cluttered hierarchy) than by the volume of information itself.',
  },
];

const swot = [
  {
    label: 'Strengths',
    color: 'bg-green-50 border-green-100',
    labelColor: 'text-green-600',
    items: ['Most reliable database for movies and TV', 'Extensive cast, crew, and production details'],
  },
  {
    label: 'Weaknesses',
    color: 'bg-red-50 border-red-100',
    labelColor: 'text-red-500',
    items: ['Lack of community interaction', 'Linear, passive content exploration'],
  },
  {
    label: 'Opportunities',
    color: 'bg-blue-50 border-blue-100',
    labelColor: 'text-blue-500',
    items: ['Personalized content based on behavior', 'Enhance core user actions and logging'],
  },
  {
    label: 'Threats',
    color: 'bg-orange-50 border-orange-100',
    labelColor: 'text-orange-500',
    items: ['Shift toward social, community based consumption', 'Interface gap vs. modern competitors'],
  },
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

function Label({ children }) {
  return (
    <span className="type-label inline-block px-3 py-1.5 rounded-full bg-[#ff5e3a]/10 text-[#ff5e3a] mb-8">
      {children}
    </span>
  );
}

function SubLabel({ children }) {
  return (
    <p className="type-label text-gray-400 mb-6 pl-3 border-l-2 border-gray-300">
      {children}
    </p>
  );
}

export default function IMDb() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-primary">
      <Navbar sticky={false} />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-14 xl:px-20 pt-28 sm:pt-32 pb-24 sm:pb-32">

        <div className="mb-12">
          <div className="flex items-start justify-between mb-4">
            <h1 className="type-display text-primary">IMDb Redesign</h1>
            <div className="flex gap-2 pt-1">
              {['Redesign', 'UXUI'].map(tag => (
                <span key={tag} className="type-tag text-xs px-2.5 py-1 rounded-full bg-black/8 text-gray-500 border border-black/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="type-body-lg text-gray-400 max-w-xl">
            Modernizing the world's most trusted movie database, improving discoverability, personalization, and community.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-4 mb-16 pt-10 border-t border-b border-black/10 pb-10">
          {meta.map(m => (
            <div key={m.label} className="flex flex-col gap-1">
              <span className="type-label text-gray-400">{m.label}</span>
              <span className="type-body-sm text-primary">{m.value}</span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden w-full aspect-video mb-16">
          <img src="/imdb/imdb_cover.png" alt="IMDb Redesign cover" className="w-full h-full object-cover" />
        </div>

        <TableOfContents sections={TOC} />

        <div>

          <div id="overview" className="mb-20">
            <Label>Overview</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="type-body text-gray-500 mb-4">
                  IMDb is the world's most comprehensive entertainment database, covering cast, reviews, where to watch, behind the scenes details, and production insights for millions of titles.
                </p>
                <p className="type-body text-gray-500">
                  It holds a 4.7 on the App Store and 4.8 on Google Play. The data looks fine, but underneath the ratings, recurring complaints kept surfacing across community discussions.
                </p>
              </div>
              <div>
                <p className="type-body text-gray-500">
                  Meanwhile, Letterboxd and Rotten Tomatoes are reshaping how users engage with entertainment through community, personalization, and a more modern interface. This redesign focuses on closing that gap without losing what makes IMDb irreplaceable.
                </p>
              </div>
            </div>
          </div>

          <div id="research" className="mb-20">
            <Label>Research</Label>

            {/* 1. Voice of Customer */}
            <div className="mb-16">
              <SubLabel>Voice of Customer</SubLabel>
              <div className="flex flex-wrap gap-2 mb-8">
                {voiceOfCustomer.map(g => (
                  <span key={g.theme} className="px-4 py-2 rounded-full bg-yellow-400/15 text-yellow-600 font-sans font-medium text-sm leading-snug">
                    {g.theme.replace('\n', ' ')}
                  </span>
                ))}
              </div>
              <div className="columns-2 md:columns-3 gap-x-10">
                {voiceOfCustomer.flatMap(g => g.quotes).map((quote) => (
                  <p key={quote} className="font-sans italic text-gray-400 text-sm mb-5 break-inside-avoid">
                    &ldquo;{quote}&rdquo;
                  </p>
                ))}
              </div>
            </div>

            {/* 2. Hypothesis */}
            <div className="mb-16">
              <SubLabel>Hypothesis</SubLabel>
              <div className="flex flex-col gap-3">
                {hypotheses.map((h, i) => (
                  <div key={h.number} className="rounded-2xl bg-white p-6 md:p-8 flex items-start gap-6">
                    <span className="type-label text-[#ff5e3a] shrink-0 mt-0.5">H{i + 1}</span>
                    <p className="type-body text-gray-500">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. User Interview */}
            <div className="mb-16">
              <SubLabel>User Interview</SubLabel>
              <p className="type-body text-gray-500">
                I interviewed three active IMDb users, each with over a year of usage.{' '}
                <span className="font-medium text-primary">Their most frequently used features were Cast &amp; Crew Search, Trivia, and Quick Ratings Check — all quick lookups.</span>{' '}
                Search results were considered accurate, but users found the experience cluttered with{' '}
                <span className="font-medium text-primary">messy layout</span>,{' '}
                <span className="font-medium text-primary">long scroll</span>,{' '}
                <span className="font-medium text-primary">outdated UI</span>, and{' '}
                <span className="font-medium text-primary">hidden features</span>. Users consistently turned to other apps for social sharing, watch logging, and review comparison.
              </p>
            </div>

            {/* 4. Hypothesis Validation */}
            <div>
              <SubLabel>Hypothesis Validation</SubLabel>
              <div className="flex flex-col gap-3">
                {validations.map(v => (
                  <div key={v.hypothesis} className="rounded-2xl bg-white p-6 md:p-8 flex items-start gap-6">
                    <div className="flex flex-col items-center gap-1 shrink-0">
                      <span className="type-label text-[#ff5e3a]">{v.hypothesis}</span>
                      <span className={`type-label px-2 py-0.5 rounded-full ${v.result === 'Confirmed' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-500'}`}>
                        {v.result}
                      </span>
                    </div>
                    <p className="type-body text-gray-500">{v.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div id="problem" className="mb-20">
            <Label>Problem</Label>
            <p className="type-headline text-yellow-500 text-center">
              Users struggle to discover and engage with IMDb's personalized features, leaving their experience passive and surface-level.
            </p>
          </div>

          <div className="mb-20">
            <Label>Analysis</Label>
            <SubLabel>SWOT Analysis</SubLabel>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {swot.map(s => (
                <div key={s.label} className={`rounded-2xl border p-6 flex flex-col gap-3 ${s.color}`}>
                  <p className={`type-label font-medium ${s.labelColor}`}>{s.label}</p>
                  <ul className="flex flex-col gap-2 list-disc list-inside">
                    {s.items.map(item => (
                      <li key={item} className="type-body text-gray-500">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div id="solution" className="mb-20">
            <Label>Solution</Label>

            <div className="mb-16">
              <SubLabel>Direction</SubLabel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h2 className="font-sans font-light text-2xl md:text-3xl text-primary mb-4 leading-snug">
                    From passive lookup<br />to active engagement
                  </h2>
                </div>
                <div className="flex items-end">
                  <p className="type-body text-gray-500">
                    Improve goal oriented search behavior and enhance personalization through community driven recommendations, without disrupting the core use case IMDb already does well.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-20">
                {screens.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-baseline gap-3 mb-8">
                      <h3 className="font-sans font-light text-xl text-primary">{s.name}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="flex flex-col gap-3">
                        <span className="type-label text-gray-400">As Is</span>
                        <div className="rounded-2xl bg-white p-6 flex justify-center">
                          <div className="w-[240px] aspect-[9/16] shrink-0 flex items-center justify-center">
                            {s.beforeSrc ? (
                              <img src={s.beforeSrc} alt={`${s.name} before`} className="w-full h-full object-contain" />
                            ) : (
                              <div className="w-full h-full rounded-xl bg-[#e4e4e4] flex items-end p-4">
                                <span className="type-label text-gray-400">{s.name} current</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="type-body text-gray-500">{s.asBefore}</p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <span className="type-label text-[#ff5e3a]">To Be</span>
                        <div className="rounded-2xl bg-white p-6 flex justify-center">
                          <div className="w-[240px] aspect-[9/16] rounded-xl overflow-hidden shrink-0">
                            {s.video ? (
                              <video src={s.video} className="w-full h-full object-cover" autoPlay loop muted playsInline />
                            ) : (
                              <div className="w-full h-full bg-[#e4e4e4] flex items-end p-4">
                                <span className="type-label text-gray-400">{s.name} redesigned</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="type-body text-gray-500">{s.asAfter}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="reflection">
            <Label>Reflection</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="type-label text-gray-400 mb-3">What I learned</p>
                <p className="type-body text-gray-500">
                  High ratings don't mean users are satisfied; they mean users haven't found a better alternative yet. The gap between surface metrics and actual behavior is where the most important design opportunities live.
                </p>
              </div>
              <div>
                <p className="type-label text-gray-400 mb-3">What I'd do differently</p>
                <p className="type-body text-gray-500">
                  I'd run usability tests on the existing app before forming hypotheses, not after. The validation phase revealed that H3 needed refinement (layout vs. volume), which earlier observation sessions might have caught sooner.
                </p>
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
