import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const projects = [
  {
    index: '01',
    category: 'Animated button',
    title: 'Toggle Wiggle',
    description: 'Same function, three personalities. How motion and form language reshape a simple on/off.',
    preview: '/toggleWiggleThumbnail.png',
    previewType: 'image',
    objectPosition: 'center',
    href: '/interaction-design/toggle-wiggle',
  },
  {
    index: '02',
    category: 'Stove Heat Control',
    title: 'HandleHeat',
    description: 'A physical-digital interface that maps handle grip and rotation to precise stove heat levels.',
    preview: '/HandleHeatThumnail.png',
    previewType: 'image',
    objectPosition: 'center',
    href: '/interaction-design/handle-heat',
  },
];

export default function InteractionDesign() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-primary">
      <Navbar sticky={false} />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-14 xl:px-20 pt-24 sm:pt-28 pb-24 sm:pb-32">

        {/* Page header */}
        <div className="mb-20">
          <h1 className="type-display text-primary leading-none">
            Interaction Design
          </h1>
        </div>

        {/* Project list */}
        <div className="flex flex-col">
          {projects.map((p) => (
            <Link
              key={p.href}
              to={p.href}
              className="group flex flex-col md:flex-row md:items-center gap-6 border-t border-black/10 py-10 hover:opacity-70 transition-opacity"
            >
              {/* Preview thumbnail */}
              <div className="w-full md:w-56 h-36 rounded-xl overflow-hidden bg-[#1c1c1e] shrink-0">
                {p.previewType === 'video' ? (
                  <video src={p.preview} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                ) : (
                  <img src={p.preview} alt={p.title} className="w-full h-full object-cover" style={{ objectPosition: p.objectPosition, transform: p.scale ? `scale(${p.scale})` : undefined, transformOrigin: p.objectPosition }} />
                )}
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-baseline gap-3">
                  <span className="type-tag text-gray-400">{p.index}</span>
                  <span className="type-label text-gray-400">{p.category}</span>
                </div>
                <h2 className="font-sans font-light text-2xl text-primary">{p.title}</h2>
                <p className="type-body text-gray-400">{p.description}</p>
              </div>

              {/* Arrow */}
              <ArrowUpRight className="w-5 h-5 text-gray-300 shrink-0 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all hidden md:block" />
            </Link>
          ))}

          {/* Bottom border */}
          <div className="border-t border-black/10" />
        </div>

      </div>
      <Footer />
    </div>
  );
}
