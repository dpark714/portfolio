import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1C1510]">
      <div className="max-w-[1600px] mx-auto px-10 md:px-32 pt-16 pb-10">

        {/* Top: message left, links right */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <p className="font-['Outfit'] font-light text-white/80 leading-relaxed max-w-2xl" style={{ fontSize: '30px' }}>
            Thanks for making it this far down the page.<br />I hope we can go even further together!
          </p>
          <div className="flex items-end gap-6">
            <img src="/footer-cherry.png" alt="" className="w-24 h-24 object-contain animate-wiggle self-end" />
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/dahyeon-park/"
                target="_blank"
                rel="noreferrer"
                className="group font-['Outfit'] font-semibold text-xl text-white/40 hover:text-white transition-colors duration-200 flex items-center gap-1 w-fit"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
              <a
                href="mailto:dahyeon714@gmail.com"
                className="group font-['Outfit'] font-semibold text-xl text-white/40 hover:text-white transition-colors duration-200 flex items-center gap-1 w-fit"
              >
                <span>Email me</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: name + copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
          <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Dahyeon Park</span>
          <span className="font-mono text-xs text-white/25">© 2026 Dahyeon Park</span>
        </div>

      </div>
    </footer>
  );
}
