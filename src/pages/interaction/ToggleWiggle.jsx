import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../components/Navbar.jsx';

const variants = [
  {
    name: 'Standard',
    src: '/interaction/toggle-wiggle/standard.mov',
    description: 'It allows users to quickly switch a setting on or off with a simple tap, making interaction fast and intuitive.',
  },
  {
    name: 'Exaggerated',
    src: '/interaction/toggle-wiggle/exaggerated.mov',
    description: 'The knob is inspired by a ball, exaggerating its motion to feel more dynamic and playful. When activated, the switch bounces back into place, emphasizing elasticity and momentum feedback.',
  },
  {
    name: 'Surprised',
    src: '/interaction/toggle-wiggle/surprised.mov',
    description: 'The toggle transforms into a pair of binoculars that "pop open" in surprise when activated, using sudden expansion and eye-like motion to convey curiosity and discovery. The eyes track the user\'s cursor to make it more engaged.',
  },
];

export default function ToggleWiggle() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-primary">
      <Navbar sticky={false} />
      <button
        onClick={() => navigate('/interaction-design')}
        className="fixed top-24 left-6 z-50 flex items-center gap-2 bg-white/70 backdrop-blur-md rounded-full px-4 py-2 text-sm font-mono hover:bg-gray-200 active:bg-gray-300 active:scale-95 transition-all duration-150 border border-white/50"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-14 xl:px-20 pt-28 sm:pt-32 pb-24 sm:pb-32 space-y-16">

        {/* Header */}
        <div>
          <div className="flex items-baseline justify-between border-t border-black/10 pt-6 mb-8">
            <div className="flex items-baseline gap-4">
              <span className="type-tag text-gray-400">01</span>
              <span className="type-label text-gray-400">Animated button</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="type-tag text-xs text-gray-500 border border-gray-300 rounded-full px-4 py-1.5">2-week sprint</span>
              <span className="type-tag text-xs text-gray-500 border border-gray-300 rounded-full px-4 py-1.5">Individual</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h1 className="font-sans font-light text-4xl md:text-5xl text-primary">Toggle Wiggle</h1>
            <p className="type-body text-gray-400 max-w-md md:text-right">
              Same function, three personalities.<br />How motion and form language reshape a simple on/off.
            </p>
          </div>
        </div>

        {/* Three variant cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {variants.map((v) => (
            <div key={v.name} className="flex flex-col">
              <div className="rounded-2xl overflow-hidden bg-[#1c1c1e] aspect-[3/4] mb-4">
                <video src={v.src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>
              <div className="flex items-baseline mb-1.5">
                <span className="type-title text-primary">{v.name}</span>
              </div>
              <p className="type-body text-gray-500">{v.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
