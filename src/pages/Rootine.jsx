import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const ACCENT = '#ff5e3a';
const PANEL = '#F7F6F3';
const LINE = 'rgba(18,33,29,0.14)';
const INK = '#12211D';
const MUTED = 'rgba(18,33,29,0.62)';

const tags = ['UXUI', 'End-to-end'];

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'research', label: 'Research' },
  { id: 'problem', label: 'Problem' },
  { id: 'persona', label: 'User Persona' },
  { id: 'principles', label: 'Design Principles' },
  { id: 'design', label: 'Final Design' },
  { id: 'reflection', label: 'Reflection' },
];

const meta = [
  { label: 'Role', value: 'End-to-End Product Designer' },
  { label: 'Timeline', value: 'April – May 2025' },
  { label: 'Disciplines', value: 'UXUI · Brand · Design System · Research' },
  { label: 'Tools', value: 'Figma · Adobe Illustrator' },
  { label: 'Platform', value: 'Mobile' },
];

const insights = [
  { num: '01', title: 'Task Overload', body: 'Participants kept adding tasks throughout the day, whatever came to mind.' },
  { num: '02', title: 'Poor Time Estimation', body: 'Most underestimated how long each task would actually take. By midday, the list no longer reflected reality, generating anxiety rather than clarity.' },
  { num: '03', title: 'No Prioritization', body: 'Without a forced hierarchy, participants naturally gravitated to easy tasks first. High-impact work was consistently deferred to "tomorrow".' },
];

const principles = [
  { number: '01', title: 'Limit is the feature', body: 'Three tasks per day. The constraint forces intentional prioritization before the day begins, not reactive scrambling.' },
  { number: '02', title: 'Measure consistency, not volume', body: 'Progress is tracked through streaks and habits, not how many items were crossed off. Showing up matters more than doing more.' },
  { number: '03', title: 'Reflect, not just complete', body: 'Gratitude logging at the end of each day closes the loop, turning task completion into a moment of meaning.' },
];

const characters = [
  { name: 'Tiny', src: '/rootine/rootine-tiny.png', bg: '#fceee6', desc: 'Your daily seed of growth before any goals is achieved' },
  { name: 'Mung Beanie', src: '/rootine/rootine-mung.png', bg: '#e8eff8', desc: 'The first sprout when daily goals are achieved' },
  { name: 'Carrot', src: '/rootine/rootine-carrot.png', bg: '#f8fff1', desc: 'Rooted and growing by collecting 7 Mung Beanie (1 week of commitment)' },
  { name: 'Tato', src: '/rootine/rootine-tato.png', bg: '#fdf8e8', desc: 'Fully grown by collecting 4 Carrie (1 month of commitment)' },
];

const features = [
  { name: 'Home' },
  { name: 'Routine' },
  { name: 'Profile' },
];

function Eyebrow({ children }) {
  return (
    <span className="type-label text-[rgba(18,33,29,0.62)] mb-6 block">
      {children}
    </span>
  );
}

function Heading({ children, className = '' }) {
  return (
    <h2 className={`font-sans font-semibold text-2xl leading-snug mb-5 text-[#12211D] ${className}`}>
      {children}
    </h2>
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
              style={{ width: isActive ? '32px' : '14px', backgroundColor: isActive ? '#141414' : '#D4D4D4' }}
            />
            <span
              className={`pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md px-2.5 py-1 font-sans text-[10px] uppercase tracking-widest opacity-0 -translate-x-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0 ${isActive ? 'text-[#12211D] font-semibold' : 'text-[rgba(18,33,29,0.62)] font-normal'}`}
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #D4D4D4' }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

export default function Rootine() {
  return (
    <div className="min-h-screen bg-white text-[#12211D]">
      <Navbar />

      {/* ── Cover ── */}
      <div className="relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-14 xl:px-20 pt-24 sm:pt-28 pb-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-['Plus_Jakarta_Sans'] font-medium text-sm mb-4 inline-block" style={{ color: MUTED }}>Rootine</span>
              <h1 className="font-['Plus_Jakarta_Sans'] font-medium text-3xl sm:text-4xl leading-[1.2]" style={{ color: INK }}>
                You get three tasks a day. That's it.
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
            A daily productivity app that encourages intentional living by limiting your tasks to three per day.
          </p>

          <div className="flex flex-wrap gap-x-12 gap-y-5 mt-12">
            {meta.map(m => (
              <div key={m.label} className="flex flex-col gap-1">
                <span className="font-['Plus_Jakarta_Sans'] font-medium text-sm whitespace-nowrap" style={{ color: INK }}>{m.label}</span>
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-sm whitespace-nowrap" style={{ color: MUTED }}>{m.value}</span>
              </div>
            ))}
          </div>

          <Reveal className="rounded-2xl overflow-hidden w-full max-w-3xl mx-auto aspect-[16/10] mt-16" style={{ backgroundColor: PANEL }}>
            <img src="/rootine/rootine-thumbnail2.png" alt="Rootine app mockup" className="w-full h-full object-cover object-[center_45%]" />
          </Reveal>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-14 xl:px-20 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-x-16">
          <SectionNav sections={sections} />

          <div>
            {/* ── Overview ── */}
            <Reveal id="overview" className="mb-20 scroll-mt-28">
              <Heading>Overview</Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <Eyebrow>Context</Eyebrow>
                  <p className="type-body text-base text-[rgba(18,33,29,0.62)]">
                    Rootine is an end-to-end mobile app designed to help people reclaim focus in an age of endless task lists. The core premise is simple: you get three tasks a day. That's it.
                  </p>
                </div>
                <div>
                  <Eyebrow>My Contribution</Eyebrow>
                  <p className="type-body text-base text-[rgba(18,33,29,0.62)]">
                    I designed everything from brand identity and design system to the full product experience, covering research, information architecture, interaction design, and visual design.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* ── Research ── */}
            <Reveal id="research" className="mb-20 scroll-mt-28">
              <Heading>What the research surfaced</Heading>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <div className="flex flex-col gap-2 rounded-2xl px-6 py-5 flex-1" style={{ backgroundColor: PANEL }}>
                  <p className="font-mono text-[9px] uppercase tracking-wide text-[rgba(18,33,29,0.62)]">Desk Research</p>
                  <p className="leading-snug">
                    <span className="type-stat text-[#12211D]">47%</span>{' '}
                    <span className="type-body-sm text-[rgba(18,33,29,0.62)]">of people carry lengthy to-do lists (APA)</span>
                  </p>
                </div>
                <div className="flex flex-col gap-2 rounded-2xl px-6 py-5 flex-1" style={{ backgroundColor: PANEL }}>
                  <p className="font-mono text-[9px] uppercase tracking-wide text-[rgba(18,33,29,0.62)]">In-depth Interviews · 8 professionals</p>
                  <p className="leading-snug">
                    <span className="type-stat text-[#12211D]">25%</span>{' '}
                    <span className="type-body-sm text-[rgba(18,33,29,0.62)]">actually finish their daily list</span>
                  </p>
                </div>
              </div>

              <Eyebrow>Insight</Eyebrow>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {insights.map((f) => (
                  <div key={f.num} className="rounded-2xl p-7 flex flex-col gap-3" style={{ backgroundColor: PANEL }}>
                    <span className="type-label" style={{ color: ACCENT }}>{f.num}</span>
                    <p className="type-title text-base md:text-lg text-[#12211D]">{f.title}</p>
                    <p className="type-body-sm text-[rgba(18,33,29,0.62)]">{f.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* ── Problem ── */}
            <Reveal id="problem" className="mb-20 scroll-mt-28 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-10">
              <p className="font-sans font-semibold text-2xl text-[#12211D]">Problem</p>
              <p className="type-body text-base text-[rgba(18,33,29,0.62)]">
                How might we help people build consistent to-do list habits that feel manageable & not overwhelming, while still gaining a real sense of achievement?
              </p>
            </Reveal>

            {/* ── User Persona ── */}
            <Reveal id="persona" className="mb-20 scroll-mt-28">
              <Heading>User Persona</Heading>
              <div className="pt-6">
                <div className="flex flex-row items-start gap-5 md:gap-8">
                  <img src="/rootine/persona.png" alt="Hailey Lee" className="w-20 h-20 md:w-44 md:h-44 shrink-0 rounded-full object-cover" />
                  <div className="flex flex-col gap-1 md:gap-4 flex-1 min-w-0">
                    <div className="flex items-start justify-between md:items-baseline md:justify-start md:gap-3">
                      <p className="font-sans font-medium text-lg text-[#12211D]">
                        <span className="md:hidden">Hailey</span>
                        <span className="hidden md:inline">Hailey Lee</span>
                      </p>
                      <div className="font-mono text-xs text-[rgba(18,33,29,0.62)] text-right">
                        <span className="hidden md:inline">31 · HR Coordinator</span>
                        <span className="md:hidden leading-relaxed">31<br />HR Coordinator</span>
                      </div>
                    </div>
                    <div className="hidden md:flex flex-col gap-4">
                      <p className="type-body text-base text-[rgba(18,33,29,0.62)] italic">
                        "I want a meaningful day with doable goals, not one packed with unrealistic plans."
                      </p>
                      <div className="flex flex-wrap gap-10 pt-2 border-t border-black/8 mt-2">
                        <div>
                          <p className="type-label text-[rgba(18,33,29,0.62)] mb-2">Pain Points</p>
                          <ul className="list-disc list-inside flex flex-col gap-1">
                            <li className="type-body-sm text-[rgba(18,33,29,0.62)]">Task overload</li>
                            <li className="type-body-sm text-[rgba(18,33,29,0.62)]">Guilt from unfinished lists</li>
                            <li className="type-body-sm text-[rgba(18,33,29,0.62)]">No sense of progress</li>
                          </ul>
                        </div>
                        <div>
                          <p className="type-label text-[rgba(18,33,29,0.62)] mb-2">Goals</p>
                          <ul className="list-disc list-inside flex flex-col gap-1">
                            <li className="type-body-sm text-[rgba(18,33,29,0.62)]">Feel accomplished at end of day</li>
                            <li className="type-body-sm text-[rgba(18,33,29,0.62)]">Build consistent habits</li>
                          </ul>
                        </div>
                        <div>
                          <p className="type-label text-[rgba(18,33,29,0.62)] mb-2">Priorities</p>
                          <ul className="list-disc list-inside flex flex-col gap-1">
                            <li className="type-body-sm text-[rgba(18,33,29,0.62)]">Emotional Well-being</li>
                            <li className="type-body-sm text-[rgba(18,33,29,0.62)]">Minimalism</li>
                            <li className="type-body-sm text-[rgba(18,33,29,0.62)]">Personal Growth</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:hidden mt-4 flex flex-col gap-4">
                  <p className="type-body text-base text-[rgba(18,33,29,0.62)] italic">
                    "I want a meaningful day with doable goals, not one packed with unrealistic plans."
                  </p>
                  <div className="flex flex-col gap-6 pt-2 border-t border-black/8 mt-2">
                    <div>
                      <p className="type-label text-[rgba(18,33,29,0.62)] mb-2">Pain Points</p>
                      <ul className="list-disc list-inside flex flex-col gap-1">
                        <li className="type-body-sm text-[rgba(18,33,29,0.62)]">Task overload</li>
                        <li className="type-body-sm text-[rgba(18,33,29,0.62)]">Guilt from unfinished lists</li>
                        <li className="type-body-sm text-[rgba(18,33,29,0.62)]">No sense of progress</li>
                      </ul>
                    </div>
                    <div>
                      <p className="type-label text-[rgba(18,33,29,0.62)] mb-2">Goals</p>
                      <ul className="list-disc list-inside flex flex-col gap-1">
                        <li className="type-body-sm text-[rgba(18,33,29,0.62)]">Feel accomplished at end of day</li>
                        <li className="type-body-sm text-[rgba(18,33,29,0.62)]">Build consistent habits</li>
                      </ul>
                    </div>
                    <div>
                      <p className="type-label text-[rgba(18,33,29,0.62)] mb-2">Priorities</p>
                      <ul className="list-disc list-inside flex flex-col gap-1">
                        <li className="type-body-sm text-[rgba(18,33,29,0.62)]">Emotional Well-being</li>
                        <li className="type-body-sm text-[rgba(18,33,29,0.62)]">Minimalism</li>
                        <li className="type-body-sm text-[rgba(18,33,29,0.62)]">Personal Growth</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ── Design Principles ── */}
            <Reveal id="principles" className="mb-20 scroll-mt-28">
              <Heading>Design Principles</Heading>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 pt-6">
                {principles.map((p) => (
                  <div key={p.number} className="flex flex-col gap-2">
                    <span className="type-label" style={{ color: ACCENT }}>{p.number}</span>
                    <p className="type-title text-base md:text-lg text-[#12211D]">{p.title}</p>
                    <p className="type-body-sm text-[rgba(18,33,29,0.62)]">{p.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* ── Final Design ── */}
            <Reveal id="design" className="mb-20 scroll-mt-28">
              <Heading>Final Design</Heading>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-10 mb-8">
                <p className="type-label text-[rgba(18,33,29,0.62)] pt-1">Brand Identity</p>
                <p className="type-body text-base text-[rgba(18,33,29,0.62)] text-left md:text-right">
                  Inspired by the growth cycle of a seed: planting, rooting, and sprouting.<br />Each character reflects the depth and consistency of the user's daily actions.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {characters.map((c) => (
                  <div key={c.name} className="flex flex-col gap-3">
                    <div className="w-full aspect-square rounded-2xl flex items-center justify-center overflow-hidden" style={{ backgroundColor: c.bg }}>
                      <img src={c.src} alt={c.name} className="w-4/5 h-4/5 object-contain" />
                    </div>
                    <div>
                      <p className="type-title text-base text-[#12211D] mb-0.5">{c.name}</p>
                      <p className="type-body-sm text-[rgba(18,33,29,0.62)]">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((f) => (
                  <div key={f.name} className={`flex flex-col gap-4 ${f.name === 'Profile' ? 'md:col-span-2' : ''}`}>
                    {f.name === 'Routine' ? (
                      <ScreenSlideshow
                        srcs={['/rootine/Routine_01.png', '/rootine/Routine_02.png', '/rootine/Routine_03.png']}
                        bg="#FFFFFF"
                        alt="Routine screen"
                        imageScale={0.94}
                      />
                    ) : f.name === 'Home' ? (
                      <ScreenSlideshow
                        srcs={['/rootine/Home_01.png', '/rootine/Home_02.png', '/rootine/Home_03.png']}
                        bg="#FFFFFF"
                        alt="Home screen"
                        imageScale={0.82}
                      />
                    ) : (
                      <div className="w-full aspect-[16/7] rounded-2xl relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img src="/rootine/profile.png" alt="Profile screen" className="h-[90%] w-auto object-contain" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* ── Reflection ── */}
            <Reveal id="reflection" className="scroll-mt-28">
              <Heading>Reflection</Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <Eyebrow>What I learned</Eyebrow>
                  <p className="type-body text-base text-[rgba(18,33,29,0.62)]">
                    Designing constraints into a productivity tool requires more conviction than most features. Holding the line on "three tasks only" meant repeatedly justifying the philosophy, and that process sharpened the design rationale significantly.
                  </p>
                </div>
                <div>
                  <Eyebrow>What I'd do differently</Eyebrow>
                  <p className="type-body text-base text-[rgba(18,33,29,0.62)]">
                    I'd invest more time in testing the overall user experience. The three-task constraint is unintuitive at first and needs more careful introduction than I initially gave it.
                  </p>
                </div>
              </div>
            </Reveal>
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
