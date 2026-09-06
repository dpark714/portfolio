import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const INK = '#12211D';
const ACCENT = '#0C1242';
const BLUE = '#689FEE';
const MUTED = 'rgba(18,33,29,0.62)';
const LINE = 'rgba(18,33,29,0.14)';
const PANEL = '#F3F4F1';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'users', label: 'Users' },
  { id: 'research', label: 'Research' },
  { id: 'solution', label: 'Solution' },
];

const tags = ['B2B', 'SaaS', 'Fintech'];

const meta = [
  { label: 'Role', value: 'UX/UI Designer' },
  { label: 'Client', value: 'Fintalo × TUDesign' },
  { label: 'Timeline', value: 'May – June 2026' },
  { label: 'Disciplines', value: 'Product Design, AI UX' },
  { label: 'Category', value: 'B2B SaaS, Fintech' },
];

const parties = [
  {
    tag: 'Primary (In Scope)',
    title: 'M&A Advisor',
    body: 'The professional who runs the deal on behalf of their client.',
    accent: true,
    traits: [
      'Manages several live deals at once, often under tight deadlines',
      'Represents the firm to clients and investors, so every interaction reflects on their reputation',
      'Relies on the platform daily and expects it to work as reliably as a premium enterprise tool',
    ],
  },
  { tag: 'Secondary', title: 'The Investor', body: 'Private equity firms, strategic acquirers, and family offices who review deals and sign NDAs to access opportunities.' },
  { tag: 'Tertiary', title: 'The Owner', body: 'The client behind each deal, who needs visibility into progress without being pulled into the day-to-day process.' },
];

const principles = [
  { title: 'Clarity over coverage', body: "showing only what's needed to act rather than everything the system can do." },
  { title: 'Making trust visible', body: 'so users can see why the product suggests what it does.' },
  { title: 'Guiding, not gating', body: 'keeping advisors in control instead of blocking their path.' },
];

const scopeItems = [
  {
    title: 'All-in-one Advisor View',
    images: [
      { src: '/fintalo/fintalo_overview.png' },
      { src: '/fintalo/fintalo_allDealsAfter.svg' },
    ],
    description: "Advisors now have an all-in-one view. One dashboard with every deal in it, filterable by stage, role, and status.",
  },
  {
    title: 'Contextual Panels',
    images: [{ src: '/fintalo/fintalo_side.svg' }],
    video: '/fintalo/fintalo_charts.mp4',
    description: "One consistent pattern for getting things done without losing place on the page whether an advisor is assigning a document to a stage or just reviewing an investor's engagement history.",
  },
  {
    title: 'AI Analyst Interface',
    images: [{ src: '/fintalo/fintalo_side1.svg' }],
    video: '/fintalo/fintalo_chatbot.mp4',
    description: (
      <>
        Ask Fin to create a document in chat, and it becomes a task you can track in Activity for status, token cost, and time remaining. AI agent lives inside every deal, not just a chatbot.
      </>
    ),
  },
  {
    title: 'Design System',
    images: [{ src: '/fintalo/fintalo_design-system.svg' }],
    description: "A shared design system spanning color, type, and components keeps the product consistent as new features ship, so advisors work in one coherent interface instead of a patchwork of one-off screens.",
  },
];

function Eyebrow({ children }) {
  return (
    <span
      className="inline-block font-['Plus_Jakarta_Sans'] font-medium text-sm px-4 py-1.5 rounded-full border"
      style={{ borderColor: LINE, color: INK }}
    >
      {children}
    </span>
  );
}

function Row({ label, children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 md:gap-24 py-8 border-t first:border-t-0" style={{ borderColor: LINE }}>
      <p className="font-['Plus_Jakarta_Sans'] font-medium text-xl" style={{ color: INK }}>{label}</p>
      <div>{children}</div>
    </div>
  );
}

function Prose({ children, className = '' }) {
  return (
    <p className={`font-['Plus_Jakarta_Sans'] font-normal leading-relaxed mb-4 last:mb-0 ${className}`} style={{ color: MUTED }}>
      {children}
    </p>
  );
}

function ScopeImage({ src, alt, type }) {
  return (
    <div className="rounded-2xl overflow-hidden">
      {type === 'video' ? (
        <video src={src} autoPlay loop muted playsInline className="block w-full h-auto" />
      ) : (
        <img src={src} alt={alt} className="block w-full h-auto" />
      )}
    </div>
  );
}

function ScopeVideo({ src }) {
  return (
    <div className="rounded-2xl overflow-hidden">
      <video src={src} autoPlay loop muted playsInline className="block w-full h-auto" />
    </div>
  );
}

function ScopeVisual({ item }) {
  const images = item.images;
  const hasImages = images && images.length > 0;

  let imageBlock = null;

  if (!hasImages) {
    imageBlock = (
      <div
        className="relative flex items-center justify-center rounded-2xl border"
        style={{ aspectRatio: '16 / 10', borderColor: LINE }}
      >
        <span
          className="font-['Plus_Jakarta_Sans'] font-medium text-xs uppercase tracking-widest px-3 py-1 border rounded-sm rotate-[-3deg]"
          style={{ borderColor: INK, color: INK }}
        >
          Redacted
        </span>
      </div>
    );
  } else if (images.length === 1) {
    imageBlock = <ScopeImage src={images[0].src} alt={item.title} type={images[0].type} />;
  } else if (item.layout === 'row' && images.length > 2) {
    const rowItems = images.slice(0, -1);
    const last = images[images.length - 1];
    imageBlock = (
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {rowItems.map((img) => (
            <ScopeImage key={img.src} src={img.src} alt={item.title} type={img.type} />
          ))}
        </div>
        <ScopeImage src={last.src} alt={item.title} type={last.type} />
      </div>
    );
  } else {
    const layoutClass = item.layout === 'row' ? 'grid grid-cols-1 sm:grid-cols-2 gap-2' : 'flex flex-col gap-1';
    imageBlock = (
      <div className={layoutClass}>
        {images.map((img) => (
          <ScopeImage key={img.src} src={img.src} alt={item.title} type={img.type} />
        ))}
      </div>
    );
  }

  if (!item.video) {
    return <div key={item.title}>{imageBlock}</div>;
  }

  return (
    <div key={item.title} className="flex flex-col gap-2">
      {imageBlock}
      <ScopeVideo src={item.video} />
    </div>
  );
}

function ScopeSwitcher({ items }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div>
      <div
        className="flex w-full p-1.5 rounded-full mb-10"
        style={{ backgroundColor: PANEL }}
      >
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <button
              key={item.title}
              onClick={() => setActive(i)}
              className="flex-1 font-['Plus_Jakarta_Sans'] font-medium text-sm px-3 py-3 rounded-full leading-snug transition-colors"
              style={{
                backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                color: isActive ? INK : MUTED,
                boxShadow: isActive ? '0 1px 6px rgba(18,33,29,0.14)' : 'none',
              }}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      {current.description && (
        <Prose className="text-center mb-8">
          {current.description}
        </Prose>
      )}

      <ScopeVisual item={current} />
    </div>
  );
}

function Reveal({ children, delay = 0, ...rest }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div {...rest}>{children}</div>;
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
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
    <nav className="hidden lg:flex flex-col items-start gap-3 sticky top-32 self-start">
      {sections.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="group relative flex items-center py-0.5"
          >
            <span
              className="shrink-0 h-[2px] rounded-full transition-all duration-300"
              style={{
                width: isActive ? '32px' : '14px',
                backgroundColor: isActive ? INK : LINE,
              }}
            />
            <span
              className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md px-2.5 py-1 font-['Plus_Jakarta_Sans'] text-xs opacity-0 -translate-x-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0"
              style={{
                backgroundColor: '#FFFFFF',
                border: `1px solid ${LINE}`,
                color: isActive ? INK : MUTED,
                fontWeight: isActive ? 600 : 500,
              }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

function HowMightWeBubble({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [16, 0]);
  return (
    <motion.div
      style={{ opacity, y, borderColor: LINE, color: INK }}
      className="px-6 py-5 rounded-2xl border font-['Plus_Jakarta_Sans'] text-lg font-medium"
    >
      {children}
    </motion.div>
  );
}

function HowMightWe() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'start 0.25'] });

  return (
    <div ref={ref} className="mb-20 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-x-24">
      <div><Eyebrow>How might we</Eyebrow></div>
      <div className="flex flex-col gap-4">
        <HowMightWeBubble progress={scrollYProgress} range={[0, 0.5]}>
          Give one consistent structure to navigate, no matter which deal they're in?
        </HowMightWeBubble>
        <HowMightWeBubble progress={scrollYProgress} range={[0.35, 0.9]}>
          Bring every deal into a single view, so nothing gets lost across scattered screens and tools?
        </HowMightWeBubble>
      </div>
    </div>
  );
}

export default function Fintalo() {
  return (
    <div className="min-h-screen overflow-x-clip" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* ── Cover ── */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="animate-blob absolute -top-24 left-[8%] w-[480px] h-[480px] rounded-full blur-3xl" style={{ backgroundColor: BLUE, opacity: 0.22 }} />
          <div className="animate-blob animation-delay-2000 absolute top-0 right-[10%] w-[420px] h-[420px] rounded-full blur-3xl" style={{ backgroundColor: ACCENT, opacity: 0.14 }} />
          <div className="animate-blob animation-delay-4000 absolute top-[220px] left-[32%] w-[480px] h-[480px] rounded-full blur-3xl" style={{ backgroundColor: BLUE, opacity: 0.16 }} />
          <div className="animate-blob animation-delay-2000 absolute top-[480px] right-[18%] w-[500px] h-[500px] rounded-full blur-3xl" style={{ backgroundColor: ACCENT, opacity: 0.13 }} />
          <div className="animate-blob absolute top-[560px] left-[12%] w-[480px] h-[480px] rounded-full blur-3xl" style={{ backgroundColor: BLUE, opacity: 0.18 }} />
          <div className="animate-blob animation-delay-4000 absolute top-[820px] right-[28%] w-[520px] h-[520px] rounded-full blur-3xl" style={{ backgroundColor: BLUE, opacity: 0.15 }} />
          <div className="animate-blob animation-delay-2000 absolute top-[900px] left-[30%] w-[460px] h-[460px] rounded-full blur-3xl" style={{ backgroundColor: ACCENT, opacity: 0.12 }} />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-14 xl:px-20 pt-24 sm:pt-28 pb-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-['Plus_Jakarta_Sans'] font-medium text-sm mb-4 inline-block" style={{ color: MUTED }}>Fintalo</span>
              <h1 className="font-['Plus_Jakarta_Sans'] font-medium text-3xl sm:text-4xl leading-[1.2]" style={{ color: INK }}>
                The operating system for M&A deals
              </h1>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0 md:pt-1">
              {tags.map((t) => (
                <span
                  key={t}
                  className="font-['Plus_Jakarta_Sans'] font-medium text-sm px-4 py-1.5 rounded-full border"
                  style={{ borderColor: LINE, color: INK }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <p className="font-['Plus_Jakarta_Sans'] font-normal text-base leading-relaxed mt-5 md:whitespace-nowrap" style={{ color: MUTED }}>
            UX/UI and AI Analyst front end for a SaaS platform that runs M&A transactions from first outreach to close.
          </p>

          <div className="flex flex-wrap gap-x-12 gap-y-5 mt-12">
            {meta.map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <span className="font-['Plus_Jakarta_Sans'] font-medium text-sm whitespace-nowrap" style={{ color: INK }}>{m.label}</span>
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-sm whitespace-nowrap" style={{ color: MUTED }}>{m.value}</span>
              </div>
            ))}
          </div>

          <Reveal
            className="relative max-w-2xl mx-auto mt-16 pointer-events-none overflow-hidden"
            style={{ aspectRatio: '2546 / 1726' }}
          >
            <img
              src="/fintalo/fintalo_hero.png"
              alt="Fintalo dashboard on a laptop screen"
              className="absolute block border-0 outline-none object-cover"
              style={{ top: '-0.5%', left: '-0.5%', width: '101%', height: '101%', border: 'none', outline: 'none', filter: 'brightness(1.03)' }}
            />
          </Reveal>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-14 xl:px-20 pt-20 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[24px_1fr] gap-x-8">
          <SectionNav sections={sections} />
          <div>

            {/* ── Overview ── */}
            <Reveal id="overview" className="mb-20 scroll-mt-28 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-x-24">
              <div><Eyebrow>Overview</Eyebrow></div>
              <div>
                <Row label="Context">
                  <Prose>
                    Fintalo is building the operating system for M&A deals, bringing advisors, investors, and company owners into one place to manage a transaction from first outreach through closing.
                  </Prose>
                </Row>
                <Row label="Root Cause">
                  <Prose>
                    The platform was built around features, not around how an advisor actually works a deal. Advisors are juggling several deals at once, each one needing to stay organized, current, and followed up on. So when the platform can't keep up, advisors fall back on spreadsheets, memos, memory, which is exactly the manual work it was supposed to replace.
                  </Prose>
                </Row>
                <Row label="My Contribution">
                  <Prose>
                    I partnered with the Fintalo through TUDesign to <strong style={{ color: INK }}>redesign their platform and design the front end for a new AI Analyst feature</strong>, working directly with the founders to shape the overall direction.
                  </Prose>
                </Row>
              </div>
            </Reveal>

            {/* ── Users ── */}
            <Reveal id="users" className="mb-10 scroll-mt-28 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-x-24">
              <div><Eyebrow>Users</Eyebrow></div>
              <div>
                <h2 className="font-['Plus_Jakarta_Sans'] font-medium text-xl leading-snug mb-4" style={{ color: INK }}>
                  Built around the advisor who runs the deal
                </h2>
                <Prose>
                  Fintalo has three user groups. The case study is centered on one: the M&A advisor, its most frequent and demanding user.
                </Prose>
              </div>
            </Reveal>

            {/* Users cards — aligned to the text column */}
            <Reveal className="mb-20 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-x-24">
              <div />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {parties.map((p) => (
                  <div key={p.title} className="rounded-2xl p-6 flex flex-col gap-3 border" style={{ backgroundColor: '#FFFFFF', borderColor: p.accent ? BLUE : LINE }}>
                    <span className="font-['Plus_Jakarta_Sans'] font-medium text-sm" style={{ color: p.accent ? BLUE : MUTED }}>{p.tag}</span>
                    <p className="font-['Plus_Jakarta_Sans'] font-medium text-lg" style={{ color: INK }}>{p.title}</p>
                    <p className="font-['Plus_Jakarta_Sans'] font-normal text-sm" style={{ color: MUTED }}>{p.body}</p>
                    {p.traits && (
                      <ul className="flex flex-col gap-2 pt-3 mt-1 border-t" style={{ borderColor: LINE }}>
                        {p.traits.map((t) => (
                          <li key={t} className="font-['Plus_Jakarta_Sans'] font-normal text-sm list-disc list-inside" style={{ color: MUTED }}>{t}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal id="research" className="mb-20 scroll-mt-28 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-x-24">
              <div><Eyebrow>Research</Eyebrow></div>
              <div>
                <h2 className="font-['Plus_Jakarta_Sans'] font-medium text-xl leading-snug mb-4" style={{ color: INK }}>
                  What the due diligence surfaced
                </h2>
                <Prose>
                  Working closely with the Fintalo to understand where the current product was falling short, I mapped the advisor's user journey and audited existing user flows to pinpoint exactly where those breakdowns were occurring.
                </Prose>
                <Prose className="mb-10">
                  It surfaced three recurring frictions: <strong style={{ color: INK }}>confusing navigation</strong>, a <strong style={{ color: INK }}>cluttered structure</strong> that scattered deals and features, and <strong style={{ color: INK }}>limited visibility</strong> into where a deal stood.
                </Prose>

                <div className="rounded-2xl overflow-hidden border" style={{ borderColor: LINE }}>
                  <div className="flex items-center gap-4 px-4 py-2.5 border-b" style={{ borderColor: LINE, backgroundColor: '#F7F7F7' }}>
                    <div className="flex gap-1.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FEBC2E' }} />
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#28C840' }} />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="px-4 py-1 rounded-md bg-white border text-xs max-w-xs w-full text-center truncate font-['Plus_Jakarta_Sans']" style={{ borderColor: LINE, color: MUTED }}>
                        app.fintalo.com
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden" style={{ aspectRatio: '1.68 / 1' }}>
                    <video
                      src="/fintalo/fintalo_navRecording.mov"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute left-0 w-full h-auto"
                      style={{ top: '-9%' }}
                    />
                  </div>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] italic text-sm text-center mt-3" style={{ color: MUTED }}>
                  One example: the navigation shifts and the flow gets confusing as advisors drill into a single deal.
                </p>
              </div>
            </Reveal>

            {/* Exploration board — spans full content width */}
            <Reveal className="mb-20">
              <img
                src="/fintalo/fintalo_exploration.png"
                alt="Exploration across the advisor dashboard, annotated with usability critiques"
                className="w-full rounded-2xl block"
              />
              <p className="font-['Plus_Jakarta_Sans'] italic text-sm text-center mt-3" style={{ color: MUTED }}>
                Exploring the existing advisor workflow, flagged for inconsistent patterns and unclear flows
              </p>
            </Reveal>

            {/* How might we */}
            <HowMightWe />

            <Reveal id="solution" className="mb-12 scroll-mt-28 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-x-24">
              <div><Eyebrow>Solution</Eyebrow></div>
              <div>
                <h2 className="font-['Plus_Jakarta_Sans'] font-medium text-xl leading-snug mb-4" style={{ color: INK }}>
                  Four focus areas, three operating principles
                </h2>
                <Prose>
                  With the problems and users defined, the work moved through four stages, from rough structure to a validated, high-fidelity design, landing on <strong style={{ color: INK }}>three operating principles</strong> that held every decision to the same bar:
                </Prose>
                <div className="flex flex-col gap-4 mt-2">
                  {principles.map((p, i) => (
                    <div key={p.title} className="flex items-start gap-4">
                      <span
                        className="flex items-center justify-center shrink-0 w-6 h-6 rounded-full font-['Plus_Jakarta_Sans'] font-semibold text-xs"
                        style={{ backgroundColor: INK, color: '#FFFFFF' }}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-['Plus_Jakarta_Sans'] font-medium" style={{ color: INK }}>{p.title}</p>
                        <p className="font-['Plus_Jakarta_Sans'] font-normal leading-relaxed" style={{ color: MUTED }}>{p.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Solution hero screenshot — spans full viewport width */}
            <Reveal
              className="mb-20 py-14 px-6 sm:px-10"
              style={{
                backgroundColor: '#FAFAFA',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                width: '100vw',
              }}
            >
              <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden" style={{ aspectRatio: '1728 / 920' }}>
                <video
                  src="/fintalo/fintalo_overview2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover block"
                />
              </div>
            </Reveal>

            {/* Focus areas — switch between them via a tab menu */}
            <Reveal className="mb-20 max-w-4xl mx-auto">
              <ScopeSwitcher items={scopeItems} />
            </Reveal>

          </div>
        </div>
      </div>

      <Footer />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200"
        style={{ backgroundColor: INK }}
        aria-label="Scroll to top"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="2,9 7,4 12,9" />
        </svg>
      </button>
    </div>
  );
}
