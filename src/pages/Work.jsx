import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const projects = [
  {
    index: '01',
    category: 'End-to-end · Mobile',
    title: 'Rootine',
    description: 'A habit-tracking app designed to build sustainable routines through micro-interactions.',
    preview: '/rootine/rootine_cover3.png',
    previewType: 'image',
    objectPosition: 'center 20%',
    href: '/rootine',
    tags: ['UXUI', 'End-to-end'],
    comingSoon: false,
  },
  {
    index: '02',
    category: 'Redesign · Mobile',
    title: 'IMDb App',
    description: 'A redesign of the IMDb mobile experience, streamlining discovery.',
    preview: '/imdb/imdb_cover2.png',
    previewType: 'image',
    objectPosition: 'center 20%',
    href: '/imdb',
    tags: ['UXUI', 'Redesign'],
    comingSoon: false,
  },
  {
    index: '03',
    category: 'B2B · Technical University of Munich Design Club',
    title: 'Fintalo',
    description: 'Designed the front-end interface for an AI Analyst feature on a B2B M&A platform.',
    preview: '/fintalo/thumbnail.png',
    previewType: 'image',
    objectPosition: 'center',
    href: '/work',
    tags: ['UXUI', 'B2B'],
    comingSoon: true,
  },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-primary">
      <Navbar sticky={false} />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-14 xl:px-20 pt-24 sm:pt-28 pb-24 sm:pb-32">

        {/* Page header */}
        <div className="mb-8">
          <h1 className="type-display text-primary leading-none">
            Work
          </h1>
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-4">
          {projects.map((p) => {
            const inner = (
              <div className={`group flex flex-col md:flex-row md:items-center gap-6 py-10 px-4 -mx-4 rounded-2xl transition-colors duration-200 ${p.comingSoon ? 'cursor-default' : 'hover:bg-black/[0.04]'}`}>
                {/* Preview thumbnail */}
                <div className="w-full md:w-56 h-36 rounded-xl overflow-hidden bg-[#1c1c1e] shrink-0 relative">
                  {p.previewType === 'video' ? (
                    <video src={p.preview} autoPlay loop muted playsInline className={`w-full h-full object-cover ${p.comingSoon ? 'opacity-40' : ''}`} />
                  ) : (
                    <img src={p.preview} alt={p.title} className={`w-full h-full object-cover ${p.comingSoon ? 'opacity-40' : ''}`} style={{ objectPosition: p.objectPosition }} />
                  )}
                  {p.comingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-xs text-white/70 tracking-widest uppercase bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex items-baseline gap-3">
                    <span className="type-tag text-gray-400">{p.index}</span>
                    <span className="type-label text-gray-400">{p.category}</span>
                  </div>
                  <h2 className={`font-sans font-light text-2xl ${p.comingSoon ? 'text-gray-400' : 'text-primary'}`}>{p.title}</h2>
                  <p className="type-body text-gray-400">{p.description}</p>
                  <div className="flex gap-2 mt-1">
                    {p.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-black/10 text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                {!p.comingSoon && (
                  <ArrowUpRight className="w-5 h-5 text-gray-300 shrink-0 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all hidden md:block" />
                )}
              </div>
            );

            return (
              <div key={p.href + p.index} className="border-b border-black/10">
                {p.comingSoon ? inner : <Link to={p.href}>{inner}</Link>}
              </div>
            );
          })}
        </div>

      </div>
      <Footer />
    </div>
  );
}
