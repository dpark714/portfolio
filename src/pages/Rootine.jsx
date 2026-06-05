import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import TableOfContents from '../components/TableOfContents.jsx';

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'research', label: 'Research' },
  { id: 'problem', label: 'Problem' },
  { id: 'persona', label: 'User Persona' },
  { id: 'principles', label: 'Design Principles' },
  { id: 'design', label: 'Final Design' },
  { id: 'reflection', label: 'Reflection' },
];



function ScreenSlideshow({ srcs, bg, alt, imageScale = 1 }) {
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState('pre');

  useEffect(() => {
    const ids = [];
    let active = true;
    let idx = 0;

    function cycle() {
      if (!active) return;
      setPhase('out');
      ids.push(setTimeout(() => {
        if (!active) return;
        idx = (idx + 1) % srcs.length;
        setCurrent(idx);
        setPhase('pre');
        ids.push(setTimeout(() => {
          if (!active) return;
          setPhase('in');
          ids.push(setTimeout(cycle, 2200));
        }, 50));
      }, 450));
    }

    ids.push(setTimeout(() => {
      if (!active) return;
      setPhase('in');
      ids.push(setTimeout(cycle, 2200));
    }, 300));

    return () => { active = false; ids.forEach(clearTimeout); };
  }, []);

  const s = imageScale;
  const style =
    phase === 'pre' ? { opacity: 0, transform: `translateX(-48px) scale(${s})`, transition: 'none' } :
      phase === 'in' ? { opacity: 1, transform: `translateX(0) scale(${s})`, transition: 'opacity 0.45s ease-out, transform 0.45s ease-out' } :
        { opacity: 0, transform: `translateX(48px) scale(${s})`, transition: 'opacity 0.35s ease-in, transform 0.35s ease-in' };

  return (
    <div className="aspect-square rounded-2xl relative overflow-hidden" style={{ backgroundColor: bg }}>
      <div className="absolute inset-4 flex items-center justify-center">
        <img
          src={srcs[current]}
          alt={alt}
          className="w-full h-full object-contain"
          style={style}
        />
      </div>
    </div>
  );
}

const features = [
  { name: 'Home' },
  { name: 'Routine' },
  { name: 'Profile' },
];

const meta = [
  { label: 'Role', value: 'End-to-End Product Designer' },
  { label: 'Timeline', value: 'April - May 2025' },
  { label: 'Disciplines', value: 'UXUI Design · Brand Design · Design System · Research' },
  { label: 'Tools', value: 'Figma · Adobe Illustrator' },
  { label: 'Platform', value: 'Mobile' },
];


const principles = [
  {
    number: '01',
    title: 'Limit is the feature',
    body: 'Three tasks per day. The constraint forces intentional prioritization before the day begins, not reactive scrambling.',
  },
  {
    number: '02',
    title: 'Measure consistency, not volume',
    body: 'Progress is tracked through streaks and habits, not how many items were crossed off. Showing up matters more than doing more.',
  },
  {
    number: '03',
    title: 'Reflect, not just complete',
    body: 'Gratitude logging at the end of each day closes the loop, turning task completion into a moment of meaning.',
  },
];

function Label({ children }) {
  return (
    <span className="type-label inline-block px-3 py-1.5 rounded-full bg-[#ff5e3a]/10 text-[#ff5e3a] mb-8">
      {children}
    </span>
  );
}

function Placeholder({ label, className = '' }) {
  return (
    <div className={`rounded-2xl bg-[#e4e4e4] flex items-end justify-start p-4 ${className}`}>
      <span className="type-label text-gray-400">{label}</span>
    </div>
  );
}

export default function Rootine() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-primary">
      <Navbar sticky={false} />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-14 xl:px-20 pt-28 sm:pt-32 pb-24 sm:pb-32">

        {/* ── Header ── */}
        <div className="mb-12">
          <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
            <h1 className="type-display text-primary">Rootine</h1>
            <div className="flex flex-wrap gap-2 pt-1">
              {['End-to-End', 'UXUI', 'Mobile'].map(tag => (
                <span key={tag} className="type-tag text-xs px-2.5 py-1 rounded-full bg-black/8 text-gray-500 border border-black/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="type-body-lg text-gray-400 max-w-xl">
            A daily productivity app that encourages intentional living by limiting your tasks to three per day.
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
        <div className="rounded-2xl overflow-hidden w-full aspect-[16/7] mb-16">
          <img src="/rootine/rootine-thumbnail2.png" alt="Rootine app mockup" className="w-full h-full object-cover object-[center_45%]" />
        </div>

        <TableOfContents sections={TOC} />

        <div>

          {/* ── Overview ── */}
          <div id="overview" className="mb-20">
            <Label>Overview</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <p className="type-body text-gray-500">
                Rootine is an end-to-end mobile app designed to help people reclaim focus in an age of endless task lists. The core premise is simple: you get three tasks a day. That's it.
              </p>
              <p className="type-body text-gray-500">
                I designed everything from brand identity and design system to the full product experience, covering research, information architecture, interaction design, and visual design.
              </p>
            </div>
          </div>

          {/* ── Research ── */}
          <div id="research" className="mb-20">
            <Label>Research</Label>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-px h-4 bg-gray-300" />
              <span className="type-label text-gray-400">Research</span>
            </div>

            {/* Supporting stats — compact, secondary */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <div className="flex items-center gap-4 rounded-2xl bg-white px-6 py-5 flex-1">
                <p className="type-stat text-primary shrink-0">47%</p>
                <div className="w-px h-8 bg-black/8 shrink-0" />
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wide text-gray-400 mb-0.5">Desk Research</p>
                  <p className="type-body-sm text-gray-500 leading-snug">of people carry lengthy to-do lists (APA)</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-white px-6 py-5 flex-1">
                <p className="type-stat text-primary shrink-0">25%</p>
                <div className="w-px h-8 bg-black/8 shrink-0" />
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wide text-gray-400 mb-0.5">In-depth Interviews · 8 professionals</p>
                  <p className="type-body-sm text-gray-500 leading-snug">actually finish their daily list</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-px h-4 bg-gray-300" />
              <span className="type-label text-gray-400">Insight</span>
            </div>

            {/* Key insights — grid cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                {
                  num: '01',
                  title: 'Task Overload',
                  body: 'Participants kept adding tasks throughout the day whatever comes to their minds.',
                },
                {
                  num: '02',
                  title: 'Poor Time Estimation',
                  body: 'Most underestimated how long each task would actually take. By midday, the list no longer reflected reality, generating anxiety rather than clarity.',
                },
                {
                  num: '03',
                  title: 'No Prioritization',
                  body: 'Without a forced hierarchy, participants naturally gravitated to easy tasks first. High-impact work was consistently deferred to "tomorrow".',
                },
              ].map((f) => (
                <div key={f.num} className="rounded-2xl bg-white p-7 flex flex-col gap-3">
                  <span className="type-label text-[#ff5e3a]">{f.num}</span>
                  <p className="type-title text-primary">{f.title}</p>
                  <p className="type-body-sm text-gray-500">{f.body}</p>
                </div>
              ))}
            </div>

            {/* Insight synthesis */}
            <p className="type-body text-gray-500">
              The failure was not motivation. It was structure.<br /> They needed a system that made saying no to the non-essential feel built-in.
            </p>
          </div>

          {/* ── Problem ── */}
          <div id="problem" className="mb-20">
            <Label>Problem</Label>
            <p className="font-sans font-semibold text-2xl md:text-[40px] leading-tight text-green-600 text-center">
              How might we help people build consistent to-do list habits that feel manageable & not overwhelming, while still gaining a real sense of achievement?
            </p>
          </div>

          {/* ── User Persona ── */}
          <div id="persona" className="mb-20">
            <Label>User Persona</Label>
            <div className="rounded-2xl bg-white p-6 md:p-10 flex flex-row items-start gap-5 md:gap-8">
              <img src="/rootine/persona.png" alt="Hailey Lee" className="w-20 h-20 md:w-44 md:h-44 shrink-0 rounded-full object-cover" />
              <div className="flex flex-col gap-4 flex-1 min-w-0">
                <div className="flex items-baseline gap-3">
                  <p className="font-sans font-medium text-lg text-primary">Hailey Lee</p>
                  <span className="font-mono text-xs text-gray-400">31 · HR Coordinator</span>
                </div>
                <p className="type-body text-gray-500 italic">
                  "I want a meaningful day with doable goals, not one packed with unrealistic plans."
                </p>
                <div className="flex flex-wrap gap-10 pt-2 border-t border-black/8 mt-2">
                  <div>
                    <p className="type-label text-gray-400 mb-2">Pain Points</p>
                    <ul className="list-disc list-inside flex flex-col gap-1">
                      <li className="type-body-sm text-gray-500">Task overload</li>
                      <li className="type-body-sm text-gray-500">Guilt from unfinished lists</li>
                      <li className="type-body-sm text-gray-500">No sense of progress</li>
                    </ul>
                  </div>
                  <div>
                    <p className="type-label text-gray-400 mb-2">Goals</p>
                    <ul className="list-disc list-inside flex flex-col gap-1">
                      <li className="type-body-sm text-gray-500">Feel accomplished at end of day</li>
                      <li className="type-body-sm text-gray-500">Build consistent habits</li>
                    </ul>
                  </div>
                  <div>
                    <p className="type-label text-gray-400 mb-2">Priorities</p>
                    <ul className="list-disc list-inside flex flex-col gap-1">
                      <li className="type-body-sm text-gray-500">Emotional Well-being</li>
                      <li className="type-body-sm text-gray-500">Minimalism</li>
                      <li className="type-body-sm text-gray-500">Personal Growth</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Design Principles ── */}
          <div id="principles" className="mb-20">
            <Label>Design Principles</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {principles.map((p) => (
                <div key={p.number} className="rounded-2xl bg-white p-7 flex flex-col gap-3">
                  <span className="type-label text-[#ff5e3a]">{p.number}</span>
                  <p className="type-title text-primary">{p.title}</p>
                  <p className="type-body-sm text-gray-500">{p.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Final Design ── */}
          <div id="design" className="mb-20">
            <Label>Final Design</Label>

            {/* Character description */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-10 mb-8">
              <p className="type-label text-gray-400 pt-1">Brand Identity</p>
              <p className="type-body text-gray-500 text-left md:text-right">
                Inspired by the growth cycle of a seed: planting, rooting, and sprouting.<br />Each character reflects the depth and consistency of the user's daily actions.
              </p>
            </div>

            {/* Characters — static horizontal */}
            {(() => {
              const chars = [
                { name: 'Tiny', src: '/rootine/rootine-tiny.png', bg: '#fceee6', desc: 'Your daily seed of growth before any goals is achieved' },
                { name: 'Mung Beanie', src: '/rootine/rootine-mung.png', bg: '#e8eff8', desc: 'The first sprout when daily goals are achieved' },
                { name: 'Carrot', src: '/rootine/rootine-carrot.png', bg: '#f8fff1', desc: 'Rooted and growing by collecting 7 Mung Beanie (1 week of commitment)' },
                { name: 'Tato', src: '/rootine/rootine-tato.png', bg: '#fdf8e8', desc: 'Fully grown by collecting 4 Carrie (1 month of commitment)' },
              ];
              return (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {chars.map((c) => (
                    <div key={c.name} className="flex flex-col gap-3">
                      <div className="w-full aspect-square rounded-2xl flex items-center justify-center overflow-hidden" style={{ backgroundColor: c.bg }}>
                        <img src={c.src} alt={c.name} className="w-4/5 h-4/5 object-contain" />
                      </div>
                      <div>
                        <p className="type-title text-primary mb-0.5">{c.name}</p>
                        <p className="type-body-sm text-gray-400">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.name} className={`flex flex-col gap-4 ${f.name === 'Profile' ? 'md:col-span-2' : ''}`}>
                  {f.name === 'Routine' ? (
                    <ScreenSlideshow
                      srcs={['/rootine/Routine_01.png', '/rootine/Routine_02.png', '/rootine/Routine_03.png']}
                      bg="#ffffff"
                      alt="Routine screen"
                      imageScale={0.88}
                    />
                  ) : f.name === 'Home' ? (
                    <ScreenSlideshow
                      srcs={['/rootine/Home_01.png', '/rootine/Home_02.png', '/rootine/Home_03.png']}
                      bg="#f0ede8"
                      alt="Home screen"
                      imageScale={0.82}
                    />
                  ) : (
                    <div className="w-full aspect-[16/7] rounded-2xl relative overflow-hidden bg-white">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img src="/rootine/profile.png" alt="Profile screen" className="h-[90%] w-auto object-contain" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Reflection ── */}
          <div id="reflection">
            <Label>Reflection</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="type-label text-gray-400 mb-3">What I learned</p>
                <p className="type-body text-gray-500">
                  Designing constraints into a productivity tool requires more conviction than most features. Holding the line on "three tasks only" meant repeatedly justifying the philosophy, and that process sharpened the design rationale significantly.
                </p>
              </div>
              <div>
                <p className="type-label text-gray-400 mb-3">What I'd do differently</p>
                <p className="type-body text-gray-500">
                  I'd invest more time in testing the overall user experience. The three-task constraint is unintuitive at first and needs more careful introduction than I initially gave it.
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
