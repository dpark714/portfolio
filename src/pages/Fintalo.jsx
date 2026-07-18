import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import TableOfContents from '../components/TableOfContents.jsx';

const ACCENT = '#12A594';

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'research', label: 'Research' },
  { id: 'users', label: 'Users' },
  { id: 'process', label: 'Process' },
  { id: 'solution', label: 'Solution' },
  { id: 'reflection', label: 'Reflection' },
];

const meta = [
  { label: 'Role', value: 'UXUI Designer' },
  { label: 'Client', value: 'Fintalo & Technical University of Munich' },
  { label: 'Timeline', value: 'May - June 2026' },
  { label: 'Disciplines', value: 'UXUI Design · AI Product Design' },
  { label: 'Tools', value: 'Figma' },
  { label: 'Category', value: 'SaaS, B2B' },
];

const advisorProblems = [
  {
    number: '01',
    title: 'Manual workload',
    body: 'Advisors spend most of their time on repetitive tasks such as document preparation and follow ups, leaving less time for client strategy.',
  },
  {
    number: '02',
    title: 'Fragmented tools',
    body: 'Deal information is scattered across email, spreadsheets, and separate software, so nothing lives in one reliable place.',
  },
  {
    number: '03',
    title: 'Limited visibility',
    body: 'Without a single source of truth, advisors struggle to see where every investor stands at a given moment in the deal.',
  },
];

const research = [
  {
    label: 'User Interviews',
    body: 'Spoke with people who had basic investment knowledge rather than deep M&A expertise, to see how someone less familiar with the domain would read and move through the platform.',
  },
  {
    label: 'Client Requirements',
    body: 'Gathered requirements directly from the Fintalo founders, covering the AI Analyst roadmap and the constraints that shaped this phase of the redesign.',
  },
  {
    label: 'Competitive Analysis',
    body: 'Benchmarked adjacent tools such as virtual data rooms and CRM platforms to see how established products build trust and handle dense, high stakes information.',
  },
];

const advisorTraits = [
  'Manages several live deals at once, often under tight deadlines',
  'Represents the firm to clients and investors, so every interaction reflects on their reputation',
  'Relies on the platform daily and expects it to work as reliably as a premium enterprise tool',
];

const otherUsers = [
  {
    title: 'Buy-side Investor',
    body: 'Private equity firms, strategic acquirers, and family offices who review deals and sign NDAs to access opportunities.',
  },
  {
    title: 'Company Owner',
    body: 'The client behind each deal, who needs visibility into progress without being involved in the day to day process.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Lo-fi Wireframes',
    body: 'Sketched early flows for the investor journey and advisor dashboard to test structure before any visual design.',
  },
  {
    number: '02',
    title: 'Review Session',
    body: 'Walked through the wireframes with the Fintalo team to validate assumptions and catch gaps early.',
  },
  {
    number: '03',
    title: 'Iteration',
    body: 'Refined structure and flow based on feedback before moving into high fidelity.',
  },
  {
    number: '04',
    title: 'Hi-fi Wireframes',
    body: 'Translated the validated flows into high fidelity screens aligned with Fintalo’s visual identity.',
  },
];

const focusAreas = [
  {
    number: '01',
    title: 'Investor Journey',
    body: 'Redesigning the flow from personalized invitation to NDA signing to closing, so investors always know what is expected next and never fall back on email.',
  },
  {
    number: '02',
    title: 'Advisor Onboarding',
    body: 'Building clearer guidance inside the product so advisors, new or experienced, always know what to do, when to do it, and where to find it during a complex deal setup.',
  },
  {
    number: '03',
    title: 'AI Analyst Interface',
    body: 'Designing the front end for a new AI Analyst layer, surfacing insights in a way that feels trustworthy and useful rather than gimmicky or intrusive.',
  },
  {
    number: '04',
    title: 'Design System',
    body: 'Reviewing and refining Fintalo’s existing visual identity into a more cohesive, scalable component library that holds up across a growing feature set.',
  },
];

const principleChips = ['Clarity over coverage', 'Make trust visible', 'Guide, don’t gate'];

function Label({ children }) {
  return (
    <span
      className="type-label inline-block px-3 py-1.5 rounded-full mb-8"
      style={{ backgroundColor: `${ACCENT}1a`, color: ACCENT }}
    >
      {children}
    </span>
  );
}

function Divider({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-px h-4 bg-gray-300" />
      <span className="type-label text-gray-400">{children}</span>
    </div>
  );
}

function Placeholder({ label, className = '' }) {
  return (
    <div
      className={`rounded-2xl bg-white border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 text-center p-4 ${className}`}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="type-label text-gray-300">{label}</span>
    </div>
  );
}

export default function Fintalo() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-primary">
      <Navbar sticky={false} />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-14 xl:px-20 pt-28 sm:pt-32 pb-24 sm:pb-32">

        {/* ── Header ── */}
        <div className="mb-12">
          <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
            <h1 className="type-display text-primary">Fintalo</h1>
            <div className="flex flex-wrap gap-2 pt-1">
              {['SaaS', 'B2B', 'UXUI'].map(tag => (
                <span key={tag} className="type-tag text-xs px-2.5 py-1 rounded-full bg-black/8 text-gray-500 border border-black/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="type-body-lg text-gray-400 max-w-xl">
            Redesigning the UX/UI and AI Analyst front end for a SaaS platform that runs M&A deals from start to finish.
          </p>
        </div>

        {/* ── Meta row ── */}
        <div className="flex flex-wrap gap-x-10 gap-y-4 mb-16 pt-10 border-t border-b border-black/10 pb-10">
          {meta.map(m => (
            <div key={m.label} className="flex flex-col gap-1">
              <span className="type-label text-gray-400">{m.label}</span>
              <span className="type-body-sm text-primary">{m.value}</span>
            </div>
          ))}
        </div>

        {/* ── Hero ── */}
        <Placeholder label="Fintalo platform preview" className="w-full aspect-[16/7] mb-16" />

        <TableOfContents sections={TOC} />

        <div>

          {/* ── Overview ── */}
          <div id="overview" className="mb-20">
            <Label>Overview</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <p className="type-body text-gray-500">
                Fintalo is a SaaS company building the operating system for M&A deals. Its platform brings advisors, investors, and company owners into one place to manage a transaction from the first outreach through closing.
              </p>
              <p className="type-body text-gray-500">
                I partnered with the Fintalo team through TUdesign to redesign the product's UX/UI and design the front end for a new AI Analyst feature, working directly with the founders on the overall design direction.
              </p>
            </div>
          </div>

          {/* ── Problem ── */}
          <div id="problem" className="mb-20">
            <Label>Problem</Label>
            <p className="type-body text-gray-500 mb-8 max-w-2xl">
              We started by identifying where the current product was breaking down. Three problems in the M&A advisor's workflow shaped the direction of this project.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {advisorProblems.map((p) => (
                <div key={p.number} className="rounded-2xl bg-white p-7 flex flex-col gap-3">
                  <span className="type-label" style={{ color: ACCENT }}>{p.number}</span>
                  <p className="type-title text-primary">{p.title}</p>
                  <p className="type-body-sm text-gray-500">{p.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Research ── */}
          <div id="research" className="mb-20">
            <Label>Research</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {research.map((r) => (
                <div key={r.label} className="rounded-2xl bg-white p-7 flex flex-col gap-3">
                  <p className="type-title text-primary">{r.label}</p>
                  <p className="type-body-sm text-gray-500">{r.body}</p>
                </div>
              ))}
            </div>
            <Divider>Insight</Divider>
            <p className="type-body text-gray-500">
              Across all three inputs, the same conclusion kept surfacing: advisors did not need more features, they needed the existing ones to feel clearer and better guided.
            </p>
          </div>

          {/* ── Users ── */}
          <div id="users" className="mb-20">
            <Label>Who is the user?</Label>
            <p className="type-body text-gray-500 mb-6 max-w-2xl">
              Three groups use the platform, but this redesign focuses on the M&A advisor, the most frequent and demanding user.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                className="rounded-2xl p-7 md:p-8 flex flex-col gap-4 md:col-span-2 border-2"
                style={{ backgroundColor: `${ACCENT}0d`, borderColor: `${ACCENT}40` }}
              >
                <span className="type-label" style={{ color: ACCENT }}>Primary user</span>
                <p className="type-title text-primary">M&A Advisor</p>
                <p className="type-body-sm text-gray-500 max-w-md">
                  The professional who runs the deal on behalf of their client. This redesign supports their workflow specifically.
                </p>
                <ul className="flex flex-col gap-2 pt-2 border-t" style={{ borderColor: `${ACCENT}40` }}>
                  {advisorTraits.map((t) => (
                    <li key={t} className="type-body-sm text-gray-500 list-disc list-inside">{t}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                {otherUsers.map((u) => (
                  <div key={u.title} className="rounded-2xl bg-white p-6 flex flex-col gap-2 flex-1">
                    <span className="type-label text-gray-400">Secondary user</span>
                    <p className="type-title text-primary">{u.title}</p>
                    <p className="type-body-sm text-gray-500">{u.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Process ── */}
          <div id="process" className="mb-20">
            <Label>Process</Label>
            <p className="type-body text-gray-500 mb-8 max-w-2xl">
              With the problems and users defined, we moved from rough structure to a validated, high fidelity design through four stages.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
              {processSteps.map((s, i) => (
                <div key={s.number} className="relative flex flex-col gap-3">
                  <div
                    className="w-[30px] h-[30px] rounded-full bg-white border-[1.5px] flex items-center justify-center type-tag text-[11px] relative z-10"
                    style={{ borderColor: `${ACCENT}47`, color: ACCENT }}
                  >
                    {s.number}
                  </div>
                  {i < processSteps.length - 1 && (
                    <div
                      className="hidden md:block absolute h-px bg-black/10"
                      style={{ top: '15px', left: '30px', width: 'calc(100% - 30px + 24px)' }}
                    />
                  )}
                  <p className="type-title text-primary">{s.title}</p>
                  <p className="type-body-sm text-gray-500">{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Solution ── */}
          <div id="solution" className="mb-20">
            <Label>Solution</Label>
            <p className="type-body text-gray-500 mb-6 max-w-2xl">
              The redesign is organized around four focus areas, guided by three principles that shaped every decision along the way.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {principleChips.map((c) => (
                <span
                  key={c}
                  className="type-tag text-xs px-3 py-1.5 rounded-full border"
                  style={{ borderColor: `${ACCENT}40`, color: ACCENT }}
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="flex flex-col mb-12">
              {focusAreas.map((f, i) => (
                <div
                  key={f.number}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center py-8 ${i !== focusAreas.length - 1 ? 'border-b border-black/8' : ''}`}
                >
                  <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                    <Placeholder label={f.title} className="w-full aspect-[4/3]" />
                  </div>
                  <div className={`flex flex-col gap-3 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                    <span className="type-label" style={{ color: ACCENT }}>{f.number}</span>
                    <p className="type-title text-primary">{f.title}</p>
                    <p className="type-body-sm text-gray-500 max-w-md">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Divider>Final Screens</Divider>
            <p className="type-body-sm text-gray-400 mb-6 max-w-2xl">
              Screens will be added here as designs are finalized.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Placeholder label="Investor Flow" className="aspect-square" />
              <Placeholder label="Advisor Dashboard" className="aspect-square" />
              <Placeholder label="AI Analyst Panel" className="aspect-square" />
              <Placeholder label="Design System" className="aspect-square" />
            </div>
          </div>

          {/* ── Reflection ── */}
          <div id="reflection">
            <Label>Reflection</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="type-label text-gray-400 mb-3">What I'm learning</p>
                <p className="type-body text-gray-500">
                  Designing for a platform that handles confidential deals with real money at stake is a different exercise than consumer products, since every interaction has to earn trust, not just usability. It has changed how I think about feedback, system states, and what "premium" means in a B2B context.
                </p>
              </div>
              <div>
                <p className="type-label text-gray-400 mb-3">What's next</p>
                <p className="type-body text-gray-500">
                  Finalizing the investor journey redesign, then moving into the AI Analyst interface and a refreshed design system, this page will be updated with real screens as the project progresses.
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
