import { useState, useEffect } from 'react';

export default function TableOfContents({ sections }) {
  const [active, setActive] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
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
    <div className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-40 group/toc">
      <div className="rounded-xl px-3 py-3 transition-all duration-200 group-hover/toc:bg-white/90 group-hover/toc:backdrop-blur-sm group-hover/toc:shadow-sm">
        <nav className="flex flex-col gap-2">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => { setActive(id); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
              className={`flex flex-row-reverse items-center gap-2.5 text-right transition-colors duration-200 ${
                active === id ? 'text-primary' : 'text-gray-300 hover:text-gray-500'
              }`}
            >
              <span className={`shrink-0 h-px transition-all duration-300 ${
                active === id ? 'w-5 bg-primary' : 'w-3 bg-gray-300'
              }`} />
              <span className="font-mono text-[9px] tracking-widest uppercase leading-none whitespace-nowrap overflow-hidden transition-all duration-300 max-w-0 opacity-0 group-hover/toc:max-w-[200px] group-hover/toc:opacity-100">
                {label}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
