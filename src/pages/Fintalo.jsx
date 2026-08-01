import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  { id: 'process', label: 'Process' },
  { id: 'solution', label: 'Solution' },
  { id: 'screens', label: 'Screens' },
  { id: 'takeaways', label: 'Takeaways' },
];

const meta = [
  { label: 'Role', value: 'UX/UI Designer' },
  { label: 'Client', value: 'Fintalo × TUDesign' },
  { label: 'Timeline', value: 'May – June 2026' },
  { label: 'Disciplines', value: 'Product Design, AI UX' },
  { label: 'Category', value: 'B2B SaaS, Fintech' },
];

const primaryParty = {
  body: 'The professional who runs the deal on behalf of their client.',
  traits: [
    'Manages several live deals at once, often under tight deadlines',
    'Represents the firm to clients and investors, so every interaction reflects on their reputation',
    'Relies on the platform daily and expects it to work as reliably as a premium enterprise tool',
  ],
};

const secondaryParties = [
  { tag: 'Secondary user', title: 'The Investor', body: 'Private equity firms, strategic acquirers, and family offices who review deals and sign NDAs to access opportunities.' },
  { tag: 'Tertiary user', title: 'The Owner', body: 'The client behind each deal, who needs visibility into progress without being pulled into the day-to-day process.' },
];

const stages = [
  { n: 'I', title: 'Lo-fi Wireframes', body: 'Sketched early flows for the investor journey and advisor dashboard to test structure before any visual design.' },
  { n: 'II', title: 'Review Session', body: 'Walked the wireframes through with the Fintalo team to validate assumptions and catch gaps early.' },
  { n: 'III', title: 'Iteration', body: 'Refined structure and flow based on feedback before moving into high fidelity.' },
  { n: 'IV', title: 'Hi-fi Wireframes', body: "Translated the validated flows into high-fidelity screens aligned with Fintalo's visual identity." },
];

const principles = ['Clarity over coverage', 'Make trust visible', "Guide, don't gate"];

const scopeItems = [
  { title: 'All-in-one Advisor View', body: 'Building clearer in-product guidance so advisors, new or experienced, always know what to do, when to do it, and where to find it during complex deal setup.' },
  { title: 'A Consistent Investor Workflow', body: 'Redesigning the flow from personalized invitation to NDA signing to closing, so investors always know what is expected next and never fall back on email.' },
  { title: 'AI Analyst Interface', body: 'Designing the front end for a new AI Analyst layer, surfacing insights in a way that feels trustworthy and useful rather than gimmicky or intrusive.' },
  { title: 'Design System', body: "Reviewing and refining Fintalo's existing visual identity into a cohesive, scalable component library that holds up across a growing feature set." },
];

const processArtifacts = [
  { tag: 'Fig. 1', caption: 'Homepage and Deals user flow, critiqued for ambiguous deal counts and duplicate paths', src: '/fintalo/fintalo_userflow1.png' },
  { tag: 'Fig. 2', caption: 'Cockpit and Documents user flow, flagged for inconsistent card patterns', src: '/fintalo/fintalo_userflow.png' },
  { tag: 'Fig. 3', caption: 'Simplified information architecture for the full product', src: '/fintalo/fintalo_simple_IA.png' },
];

const screens = [
  { tag: '01', label: 'Investor Flow' },
  { tag: '02', label: 'Advisor Dashboard' },
  { tag: '03', label: 'AI Analyst Panel' },
  { tag: '04', label: 'Design System' },
];

function Heading({ children, className = '' }) {
  return (
    <h2 className={`font-['Outfit'] font-semibold text-2xl md:text-3xl leading-snug mb-5 ${className}`} style={{ color: INK }}>
      {children}
    </h2>
  );
}

function Prose({ children, className = '' }) {
  return (
    <p className={`font-['Plus_Jakarta_Sans'] leading-relaxed mb-4 last:mb-0 ${className}`} style={{ color: MUTED }}>
      {children}
    </p>
  );
}

function Figure({ tag, caption, className = '', hideCaption = false }) {
  return (
    <div className="mb-3">
      <div className={`relative overflow-hidden rounded-2xl flex items-center justify-center ${className}`} style={{ backgroundColor: PANEL }}>
        <span
          className="type-label px-3 py-1 border rounded-sm rotate-[-3deg]"
          style={{ borderColor: INK, color: INK, backgroundColor: 'rgba(255,255,255,0.7)' }}
        >
          Redacted
        </span>
      </div>
      {!hideCaption && (
        <p className="font-['Plus_Jakarta_Sans'] italic text-sm text-center mt-3" style={{ color: MUTED }}>
          {tag} — {caption}
        </p>
      )}
    </div>
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
    <nav className="hidden lg:flex flex-col gap-3.5 sticky top-32 self-start">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="flex items-center gap-2.5 text-left"
        >
          <span
            className="shrink-0 w-1.5 h-1.5 rounded-full border transition-colors duration-200"
            style={{ backgroundColor: active === id ? INK : 'transparent', borderColor: active === id ? INK : LINE }}
          />
          <span
            className="type-label transition-colors duration-200"
            style={{ color: active === id ? INK : MUTED, fontWeight: active === id ? 600 : 400 }}
          >
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
}

function HowMightWeBubble({ children, align, progress, range }) {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [24, 0]);
  return (
    <motion.div
      style={{ opacity, y, backgroundColor: ACCENT, maxWidth: '85%' }}
      className={`px-6 py-5 rounded-2xl type-body-sm font-['Plus_Jakarta_Sans'] text-white ${align === 'start' ? 'self-start rounded-bl-md' : 'self-end rounded-br-md'}`}
    >
      {children}
    </motion.div>
  );
}

function HowMightWe() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'start 0.25'] });

  return (
    <div ref={ref} className="mb-20 -mt-8 flex flex-col items-center gap-6">
      <p className="font-['Plus_Jakarta_Sans'] font-extrabold uppercase text-sm tracking-wide" style={{ color: ACCENT }}>
        How might we…
      </p>
      <div className="flex flex-col gap-4 w-full max-w-xl">
        <HowMightWeBubble align="start" progress={scrollYProgress} range={[0, 0.5]}>
          Take the manual work out of running a deal?
        </HowMightWeBubble>
        <HowMightWeBubble align="end" progress={scrollYProgress} range={[0.35, 0.9]}>
          Give advisors one place they can trust to see exactly where things stand?
        </HowMightWeBubble>
      </div>
    </div>
  );
}

export default function Fintalo() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar sticky={false} solid />

      {/* ── Cover ── */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-14 xl:px-20 pt-40 sm:pt-48 pb-32 relative">
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <span className="type-label mb-5 inline-block" style={{ color: MUTED }}>Case Study — Fintalo</span>
            <h1 className="font-['Outfit'] italic text-3xl sm:text-4xl md:text-5xl leading-[1.1] whitespace-nowrap" style={{ color: INK }}>
              The operating system for M&A deals
            </h1>
          </div>

          <div
            className="relative z-10 max-w-2xl mx-auto my-6 sm:my-8 pointer-events-none overflow-hidden"
            style={{ aspectRatio: '2546 / 1726' }}
          >
            <img
              src="/fintalo/fintalo_hero.png"
              alt="Fintalo dashboard on a laptop screen"
              className="absolute block border-0 outline-none object-cover"
              style={{ top: '-0.5%', left: '-0.5%', width: '101%', height: '101%', border: 'none', outline: 'none', filter: 'brightness(1.03)' }}
            />
          </div>

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <p className="text-base md:text-lg font-['Plus_Jakarta_Sans']" style={{ color: MUTED }}>
              UX/UI and AI Analyst front end for a SaaS platform that runs M&A transactions from first outreach to close
            </p>
          </div>

          <div className="relative z-10 flex flex-nowrap justify-center gap-x-8 pt-10 mt-12 border-t max-w-5xl mx-auto overflow-x-auto" style={{ borderColor: LINE }}>
            {meta.map((m) => (
              <div key={m.label} className="flex flex-col items-center gap-1 shrink-0">
                <span className="type-label whitespace-nowrap" style={{ color: MUTED }}>{m.label}</span>
                <span className="type-body-sm font-['Plus_Jakarta_Sans'] whitespace-nowrap" style={{ color: INK }}>{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-14 xl:px-20 pt-20 pb-24 sm:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-x-16">
        <SectionNav sections={sections} />
        <div>

        {/* ── Overview ── */}
        <div id="overview" className="mb-20">
          <Heading>Overview</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-2">
            <div className="text-left">
              <span className="type-label mb-3 inline-block" style={{ color: MUTED }}>Context</span>
              <Prose className="max-w-md">
                Fintalo is building the operating system for M&A deals, bringing advisors, investors, and company owners into one place to manage a transaction from first outreach through closing.
              </Prose>
            </div>
            <div className="text-left">
              <span className="type-label mb-3 inline-block" style={{ color: MUTED }}>My Contribution</span>
              <Prose className="max-w-md">
                I partnered with the Fintalo team through TUDesign to <strong style={{ color: INK }}>redesign the product's UX/UI and design the front end for a new AI Analyst feature</strong>, working directly with the founders to shape the overall direction.
              </Prose>
            </div>
          </div>
        </div>

        {/* ── Users ── */}
        <div id="users" className="mb-20 text-left">
          <Heading>Built around the advisor who runs the deal</Heading>
          <Prose className="mb-10 max-w-xl">
            Fintalo has three user groups. The case study is centered on one: the M&A advisor, its most frequent and demanding user.
          </Prose>
        </div>

        {/* Users cards — full width */}
        <div className="mb-20 -mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl p-7 md:p-8 flex flex-col gap-4 md:col-span-2 border-2" style={{ backgroundColor: `${BLUE}14`, borderColor: BLUE }}>
            <span className="type-label" style={{ color: BLUE }}>Primary — in scope</span>
            <p className="font-['Outfit'] font-semibold text-2xl" style={{ color: INK }}>M&A Advisor</p>
            <p className="type-body-sm font-['Plus_Jakarta_Sans'] max-w-md" style={{ color: MUTED }}>{primaryParty.body}</p>
            <ul className="flex flex-col gap-2 pt-3 border-t" style={{ borderColor: LINE }}>
              {primaryParty.traits.map((t) => (
                <li key={t} className="type-body-sm font-['Plus_Jakarta_Sans'] list-disc list-inside" style={{ color: MUTED }}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            {secondaryParties.map((p) => (
              <div key={p.title} className="rounded-2xl p-6 flex flex-col gap-2 flex-1 border" style={{ backgroundColor: '#FFFFFF', borderColor: LINE }}>
                <span className="type-label" style={{ color: MUTED }}>{p.tag}</span>
                <p className="font-['Outfit'] font-semibold text-xl" style={{ color: INK }}>{p.title}</p>
                <p className="type-body-sm font-['Plus_Jakarta_Sans']" style={{ color: MUTED }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="research" className="mb-20 text-left">
          <Heading>What the due diligence surfaced</Heading>
          <Prose className="max-w-2xl">
            Working closely with the Fintalo team to understand where the current product was falling short, I mapped the advisor's user journey and audited existing user flows to pinpoint exactly where those breakdowns were occurring.
          </Prose>
          <Prose className="mb-10 max-w-2xl">
            It surfaced three recurring frictions: <strong style={{ color: INK }}>confusing navigation</strong>, a <strong style={{ color: INK }}>cluttered structure</strong> that scattered deals and features, and <strong style={{ color: INK }}>limited visibility</strong> into where a deal stood.
          </Prose>
        </div>

        {/* How might we — scroll-scrubbed chat-bubble reveal */}
        <HowMightWe />

        <div id="process" className="mb-20 text-left">
          <Heading>From rough structure to a validated design</Heading>
          <Prose className="mb-10 max-w-2xl">
            With the problems and users defined, the work moved through four stages, from rough structure to a validated, high-fidelity design.
          </Prose>
        </div>

        {/* Process diagram — full width */}
        <div className="mb-20 -mt-8 relative">
          <div className="hidden md:block absolute h-px" style={{ top: '18px', left: '12.5%', right: '12.5%', backgroundColor: ACCENT }} />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {stages.map((s) => (
              <div key={s.n} className="relative z-10 flex flex-col md:items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-['Outfit'] font-semibold text-sm shrink-0"
                  style={{ backgroundColor: ACCENT, color: '#FFFFFF' }}
                >
                  {s.n}
                </div>
                <div className="flex flex-col gap-1 md:text-center">
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-lg" style={{ color: INK }}>{s.title}</p>
                  <p className="type-body-sm font-['Plus_Jakarta_Sans'] md:max-w-[180px] md:mx-auto" style={{ color: MUTED }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process artifacts — bento: two flow critiques, then the resolved IA */}
        <div className="mb-20 -mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {processArtifacts.slice(0, 2).map((a) => (
              <div key={a.tag} className="group">
                <div className="relative overflow-hidden rounded-2xl border aspect-[4/3]" style={{ borderColor: LINE, backgroundColor: PANEL }}>
                  <img
                    src={a.src}
                    alt={a.caption}
                    className="absolute inset-0 w-full h-full object-cover object-top grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {processArtifacts.slice(2).map((a) => (
            <div key={a.tag} className="group mt-4">
              <div className="relative overflow-hidden rounded-2xl border" style={{ borderColor: LINE, backgroundColor: PANEL }}>
                <img
                  src={a.src}
                  alt={a.caption}
                  className="w-full h-auto grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <div id="solution" className="mb-8 text-left">
          <Heading>Four focus areas, three operating principles</Heading>
          <div className="flex flex-wrap gap-2 mb-10">
            {principles.map((c) => (
              <span key={c} className="type-tag text-xs px-3 py-1.5 rounded-full border" style={{ borderColor: ACCENT, color: ACCENT }}>
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Scope items — full width, image-led like a running narrative */}
        <div className="mb-20 flex flex-col gap-16">
          {scopeItems.map((item, i) => (
            <div key={item.title} className="max-w-2xl mx-auto text-center">
              <p className="font-['Outfit'] font-semibold text-xl leading-tight mb-3" style={{ color: INK }}>
                {i + 1}. {item.title}
              </p>
              <p className="type-body-sm font-['Plus_Jakarta_Sans'] mb-6" style={{ color: MUTED }}>{item.body}</p>
              <Figure className="w-full aspect-[16/9]" hideCaption />
            </div>
          ))}
        </div>

        <div id="screens" className="mb-8 text-left">
          <Heading>Screens on file, pending release.</Heading>
          <Prose className="mb-10 max-w-2xl">
            Fintalo's product is live client work under NDA, so final screens are withheld here until the client clears them for public release.
          </Prose>
        </div>

        {/* Screens grid — full width */}
        <div className="mb-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {screens.map((e) => (
            <Figure key={e.tag} tag={e.tag} caption={e.label} className="aspect-square" />
          ))}
        </div>

        </div>
      </div>
      </div>

      {/* ── Takeaways ── */}
      <div id="takeaways" style={{ backgroundColor: BLUE }}>
        <div className="max-w-2xl mx-auto px-6 py-24 md:py-28 text-center flex flex-col gap-8">
          <p className="type-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Takeaways</p>
          <p className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl leading-relaxed text-white/90">
            Designing for a platform that handles confidential deals with real money at stake is a different exercise than consumer products, since every interaction has to earn trust, not just usability. It has changed how I think about feedback, system states, and what "premium" means in a B2B context.
          </p>
          <p className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl leading-relaxed text-white/90">
            Next: finalizing the investor journey redesign, then moving into the AI Analyst interface and a refreshed design system. This page will be updated with real screens as the project clears for release.
          </p>
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
