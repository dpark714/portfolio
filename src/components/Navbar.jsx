import { Link } from 'react-router-dom';
import { ArrowUpRight, AtSign } from 'lucide-react';

export default function Navbar({ sticky = true }) {
  return (
    <nav className={`${sticky ? 'fixed' : 'absolute'} top-0 left-0 right-0 z-50 h-20 bg-white/80 backdrop-blur-md border-b border-black/8 px-6 md:px-10 flex items-center`}>

      {/* Logo — far left */}
      <Link to="/" aria-label="Home" className="shrink-0 hover:opacity-70 transition-opacity">
        <img src="/google-logo.png" alt="Home" className="w-14 h-14 object-contain" />
      </Link>

      {/* Nav links — centered */}
      <div className="flex-1 flex items-center justify-center gap-8 md:gap-12">
        <Link to="/about" className="font-mono text-sm uppercase tracking-widest text-primary hover:opacity-40 transition-opacity">
          About
        </Link>
        <a href="/#work" className="font-mono text-sm uppercase tracking-widest text-primary hover:opacity-40 transition-opacity">
          Work
        </a>
        <a
          href="https://drive.google.com/file/d/1qXi_y5yIRCkUOBl626n6Qm6kEgaNMCBw/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-sm uppercase tracking-widest text-primary hover:opacity-40 transition-opacity flex items-center gap-1"
        >
          Resume <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      {/* Social icons — far right */}
      <div className="shrink-0 flex items-center gap-5">
        <a
          href="https://www.linkedin.com/in/dahyeon-park/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center text-primary hover:text-[#EE0002] transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a
          href="mailto:dahyeon714@gmail.com"
          className="flex items-center justify-center text-primary hover:text-[#EE0002] transition-colors"
          aria-label="Email"
        >
          <AtSign className="w-5 h-5" strokeWidth={1.5} />
        </a>
      </div>

    </nav>
  );
}
