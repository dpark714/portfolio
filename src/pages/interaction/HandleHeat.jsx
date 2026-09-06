import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../components/Navbar.jsx';

const INK = '#12211D';
const MUTED = 'rgba(18,33,29,0.62)';
const LINE = 'rgba(18,33,29,0.14)';

const stoveStates = [
  { label: 'Heating Up', src: '/interaction/handle-heat/heating-up.mp4', desc: 'Pan is on and actively heating. The interface responds with a gradual glow intensity.' },
  { label: 'Changing', src: '/interaction/handle-heat/changing.mp4', desc: 'Pan moves between burners. The system tracks position and transfers the heat state.' },
  { label: 'Warning', src: '/interaction/handle-heat/warning.mp4', desc: 'Emergency state: overflowing or burning triggers an urgent visual and haptic alert.' },
];

export default function HandleHeat() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-[#12211D]">
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
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-8">
            <div className="flex items-baseline gap-4">
              <span className="font-['Plus_Jakarta_Sans'] font-medium text-sm" style={{ color: MUTED }}>Stove Heat Control</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-['Plus_Jakarta_Sans'] font-medium text-sm rounded-full px-4 py-1.5 border" style={{ color: INK, borderColor: LINE }}>2-week sprint</span>
              <span className="font-['Plus_Jakarta_Sans'] font-medium text-sm rounded-full px-4 py-1.5 border" style={{ color: INK, borderColor: LINE }}>Team of 4</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <h1 className="font-['Plus_Jakarta_Sans'] font-medium text-3xl sm:text-4xl leading-[1.2]" style={{ color: INK }}>HandleHeat</h1>
            <p className="font-['Plus_Jakarta_Sans'] text-sm leading-relaxed max-w-sm md:text-right" style={{ color: MUTED }}>
              A physical-digital interface that maps handle grip and rotation to precise stove heat levels.
            </p>
          </div>
        </div>

        {/* Concept */}
        <div className="space-y-4">
          <span className="type-label" style={{ color: '#F59E0B' }}>Concept</span>
          <p className="type-body-sm text-[rgba(18,33,29,0.62)]">
            Cooking often demands adjusting heat mid-process, with occupied hands and controls that are unresponsive or difficult to clean. HandleHeat relocates heat control to the pan handle itself, where the hand already rests. The stove becomes a fully flat, adaptive surface that responds to where cookware is placed. The cookware handles the rest: detecting emergencies like burning or overflowing and alerting the user in real time, making cooking safer, cleaner, and more intuitive.
          </p>
        </div>

        {/* i. Heat Control */}
        <div className="space-y-4">
          <span className="type-label" style={{ color: '#F59E0B' }}>Overview</span>
          <div className="rounded-2xl overflow-hidden bg-[#111] w-full aspect-video">
            <video src="/interaction/handle-heat/overview-of-pan.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          </div>
        </div>

        {/* ii. Handle Interaction */}
        <div className="space-y-4">
          <span className="type-label" style={{ color: '#F59E0B' }}>Handle Interaction</span>
          <p className="type-body-sm text-[rgba(18,33,29,0.62)]">
            Auditory snap feedback confirms each heat increment. Ergonomic handle indentations guide natural grip for precise control. The wheel advances in distinct clicks with calibrated resistance, deliberate by design. Inspired by the camera dial: fluid enough to turn easily, resistant enough to prevent accidental changes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden bg-[#111] aspect-[4/3]">
              <video src="/interaction/handle-heat/camera-dial.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#111] aspect-[4/3]">
              <video src="/interaction/handle-heat/zoomed-in-pan.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* iii. Pans */}
        <div className="space-y-4">
          <span className="type-label" style={{ color: '#F59E0B' }}>Pans</span>
          <p className="type-body-sm text-[rgba(18,33,29,0.62)]">
            An LED ring on the pan rim reflects the current heat level in real time. LEDs beneath the pan illuminate to confirm active burner connection. Color and animation adapt to heat intensity, shifting from a slow pulse at low heat to a rapid flicker at high.
          </p>
          <div className="rounded-2xl overflow-hidden w-full">
            <img src="/interaction/handle-heat/pans-on-stove.png" alt="Pans on stove layout" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* iv. Stove states */}
        <div className="space-y-4">
          <span className="type-label" style={{ color: '#F59E0B' }}>Stove</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stoveStates.map((s) => (
              <div key={s.label} className="flex flex-col gap-3">
                <div className="rounded-2xl overflow-hidden bg-[#111] aspect-[4/3]">
                  <video src={s.src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="type-title text-[#12211D] mb-1">{s.label}</p>
                  <p className="type-body-sm text-[rgba(18,33,29,0.62)]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
