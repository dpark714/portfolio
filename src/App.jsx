import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'rootine',
    title: 'Rootine',
    image: '/rootine/rootine_cover3.png',
  },
  {
    id: 'imdb',
    title: 'IMDb Redesign',
    image: '/imdb/imdb_cover2.png',
  },
  {
    id: 'interaction',
    title: 'Interaction Design',
    image: '/interaction/thumbnail.png',
  }
];

function Background() {
  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden bg-white">
    </div>
  );
}


export function BentoCard({ children, className = '', title, tags, bg = '#F9F9F9' }) {
  return (
    <div className={`relative group rounded-xl overflow-hidden flex flex-col shadow-lg border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-200 ${className}`}>
      {/* Header */}
      <div className="h-10 flex items-center justify-center bg-white z-30 relative shrink-0">
        <h2 className="font-mono text-sm tracking-tight text-primary font-normal">{title}</h2>
      </div>
      <div className="relative flex-1 overflow-hidden" style={{ backgroundColor: bg }}>
        {children}
        {tags && (
          <div className="absolute bottom-3 right-3 z-20 flex gap-1.5 flex-wrap justify-end">
            {tags.map((tag) => (
              <span key={tag} className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-black/30 text-white backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export const avatarColors = ['#fcd34d', '#bae6fd', '#fecdd3', '#bef264', '#e9d5ff', '#a8a29e', '#fef08a', '#f3f4f6'];

export const renderExpression = (exp) => {
  switch (exp) {
    case 0: return ( // Staring straight
      <div className="flex gap-2 relative z-10">
        <div className="w-6 h-7 bg-white rounded-[40%_60%_60%_40%] flex items-center justify-center shadow-sm">
          <div className="w-3 h-3 bg-[#111] rounded-full"></div>
        </div>
        <div className="w-6 h-7 bg-white rounded-[60%_40%_40%_60%] flex items-center justify-center shadow-sm">
          <div className="w-3 h-3 bg-[#111] rounded-full"></div>
        </div>
      </div>
    );
    case 1: return ( // Looking side
      <div className="flex gap-2 relative z-10">
        <div className="w-6 h-7 bg-white rounded-[40%_60%_60%_40%] flex items-center justify-start pl-1 shadow-sm">
          <div className="w-2.5 h-2.5 bg-[#111] rounded-full"></div>
        </div>
        <div className="w-6 h-7 bg-white rounded-[60%_40%_40%_60%] flex items-center justify-start pl-1 shadow-sm">
          <div className="w-2.5 h-2.5 bg-[#111] rounded-full"></div>
        </div>
      </div>
    );
    case 2: return ( // Derp
      <div className="flex gap-2 relative z-10">
        <div className="w-6 h-7 bg-white rounded-[40%_60%_60%_40%] flex items-start justify-center pt-1 shadow-sm">
          <div className="w-2.5 h-2.5 bg-[#111] rounded-full"></div>
        </div>
        <div className="w-6 h-7 bg-white rounded-[60%_40%_40%_60%] flex items-end justify-center pb-1 shadow-sm">
          <div className="w-2.5 h-2.5 bg-[#111] rounded-full"></div>
        </div>
      </div>
    );
    case 3: return ( // Happy / Closed
      <div className="flex gap-3 relative z-10 mt-2 mb-1">
        <div className="w-5 h-2.5 border-t-[3.5px] border-white rounded-t-full"></div>
        <div className="w-5 h-2.5 border-t-[3.5px] border-white rounded-t-full"></div>
      </div>
    );
    case 4: return ( // Shocked
      <div className="flex gap-2 relative z-10">
        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm">
          <div className="w-1.5 h-1.5 bg-[#111] rounded-full"></div>
        </div>
        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm">
          <div className="w-1.5 h-1.5 bg-[#111] rounded-full"></div>
        </div>
      </div>
    );
  }
};

const renderAvatar = (animalType, expType, accessoryType, scale = 1, headOnly = false) => {
  const eyes = renderExpression(expType);

  // Smooth integrated top accessories
  const topAcc = accessoryType === 2 ? ( // Sprout
    <div className={`absolute ${animalType === 1 ? '-top-10' : '-top-7'} z-0 flex flex-col items-center`}>
      <div className="w-5 h-5 bg-green-400 rounded-tl-full rounded-br-full rotate-45 mb-[-6px] shadow-sm border-[1.5px] border-green-600"></div>
      <div className="w-1.5 h-5 bg-green-600 rounded-full"></div>
    </div>
  ) : accessoryType === 3 ? ( // Beret
    <div className={`absolute ${animalType === 1 ? '-top-6 right-2' : '-top-3 right-0'} z-20 rotate-[15deg]`}>
      <div className="w-12 h-5 bg-yellow-400 rounded-[100%] border-b-[3px] border-yellow-500 relative shadow-sm">
        <div className="w-2 h-2 bg-yellow-400 rounded-full absolute -top-1 left-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  ) : accessoryType === 4 ? ( // Party Hat
    <div className={`absolute ${animalType === 1 ? '-top-14' : '-top-10'} z-20`}>
      <div className="w-8 h-10 bg-blue-400 [clip-path:polygon(50%_0%,0%_100%,100%_100%)] relative flex justify-center shadow-sm">
        <div className="w-2.5 h-2.5 bg-pink-400 rounded-full absolute -top-1"></div>
        <div className="w-full h-2 bg-yellow-300 absolute bottom-0"></div>
      </div>
    </div>
  ) : null;

  // Smooth integrated neck accessory
  const neckAcc = accessoryType === 1 && !headOnly ? ( // Scarf
    <div className="absolute -bottom-3 w-[120%] h-6 bg-red-400 rounded-full z-20 border-b-[3px] border-red-500 shadow-sm flex justify-end pr-3">
      <div className="w-4 h-10 bg-red-400 absolute top-2 right-2 rounded-b-md border-r-[3px] border-b-[3px] border-red-500 origin-top rotate-12"></div>
    </div>
  ) : null;

  let head;
  let headOffset = "mb-12";

  switch (animalType) {
    case 0: // Cat
      head = (
        <div className="relative w-20 h-20 bg-[#111] rounded-full flex flex-col items-center justify-center z-10">
          {topAcc}
          <div className="absolute -top-3 -left-1 w-8 h-8 bg-[#111] [clip-path:polygon(50%_0%,0%_100%,100%_100%)] rotate-[-20deg]"></div>
          <div className="absolute -top-3 -right-1 w-8 h-8 bg-[#111] [clip-path:polygon(50%_0%,0%_100%,100%_100%)] rotate-[20deg]"></div>
          <div className="absolute left-[-6px] top-9 w-4 h-[2px] bg-[#111] rotate-12"></div>
          <div className="absolute left-[-6px] top-11 w-4 h-[2px] bg-[#111] -rotate-12"></div>
          <div className="absolute right-[-6px] top-9 w-4 h-[2px] bg-[#111] -rotate-12"></div>
          <div className="absolute right-[-6px] top-11 w-4 h-[2px] bg-[#111] rotate-12"></div>
          {eyes}
          <div className="w-1.5 h-1 bg-white rounded-full mt-2 opacity-80"></div>
          {neckAcc}
        </div>
      );
      break;
    case 1: // Frog
      headOffset = "mb-10";
      head = (
        <div className="relative w-24 h-16 bg-[#111] rounded-[3rem] z-10 flex flex-col items-center justify-center">
          {topAcc}
          <div className="absolute -top-3 left-3 w-8 h-8 bg-[#111] rounded-full z-0"></div>
          <div className="absolute -top-3 right-3 w-8 h-8 bg-[#111] rounded-full z-0"></div>
          <div className="absolute -top-4 w-full flex justify-center gap-2 z-10">
            {eyes}
          </div>
          <div className="w-8 h-1.5 mt-4 border-b-[3px] border-white rounded-b-full opacity-80"></div>
          {neckAcc}
        </div>
      );
      break;
    case 2: // Rabbit
      headOffset = "mb-16";
      head = (
        <div className="relative w-20 h-20 bg-[#111] rounded-full z-10 flex flex-col items-center justify-center">
          {topAcc}
          {/* Left lop ear — droops outward to the left */}
          <div style={{ position: 'absolute', top: '-48px', left: '8px', width: '16px', height: '60px', background: '#111', borderRadius: '50%', transform: 'rotate(-45deg)', transformOrigin: 'bottom center', zIndex: 0 }}>
            <div style={{ position: 'absolute', top: '6px', left: '50%', transform: 'translateX(-50%)', width: '6px', height: '44px', background: 'rgba(249,168,212,0.65)', borderRadius: '50%' }} />
          </div>
          {/* Right lop ear — droops outward to the right */}
          <div style={{ position: 'absolute', top: '-48px', right: '8px', width: '16px', height: '60px', background: '#111', borderRadius: '50%', transform: 'rotate(45deg)', transformOrigin: 'bottom center', zIndex: 0 }}>
            <div style={{ position: 'absolute', top: '6px', left: '50%', transform: 'translateX(-50%)', width: '6px', height: '44px', background: 'rgba(249,168,212,0.65)', borderRadius: '50%' }} />
          </div>
          {eyes}
          <div className="w-2.5 h-1.5 bg-pink-200/50 rounded-full mt-2" />
          {neckAcc}
        </div>
      );
      break;
    case 3: // Dog
      headOffset = "mb-12";
      head = (
        <div className="relative w-20 h-20 bg-[#111] rounded-[2rem] z-10 flex flex-col items-center justify-center">
          {topAcc}
          <div className="absolute top-2 -left-4 w-6 h-14 bg-[#111] rounded-b-full rounded-t-md rotate-[20deg] origin-top"></div>
          <div className="absolute top-2 -right-4 w-6 h-14 bg-[#111] rounded-b-full rounded-t-md rotate-[-20deg] origin-top"></div>
          {eyes}
          <div className="w-4 h-2 bg-white/80 rounded-[40%_40%_50%_50%] mt-2"></div>
          {neckAcc}
        </div>
      );
      break;
    case 4: // Hamster
      headOffset = "mb-12";
      head = (
        <div className="relative w-24 h-20 bg-[#111] rounded-[3rem] z-10 flex flex-col items-center justify-center">
          {topAcc}
          {/* small round ears */}
          <div className="absolute -top-2 left-4 w-5 h-5 bg-[#111] rounded-full"></div>
          <div className="absolute -top-2 right-4 w-5 h-5 bg-[#111] rounded-full"></div>
          {/* chubby cheek pouches */}
          <div className="absolute -left-3 bottom-1 w-7 h-8 bg-[#111] rounded-full"></div>
          <div className="absolute -right-3 bottom-1 w-7 h-8 bg-[#111] rounded-full"></div>
          {eyes}
          <div className="w-2 h-1.5 bg-white/70 rounded-full mt-1.5"></div>
          {neckAcc}
        </div>
      );
      break;
  }

  return (
    <div className="relative flex flex-col items-center justify-end w-28 h-36" style={{ transform: `scale(${scale})` }}>
      <div className={`relative ${headOnly ? 'mb-4' : headOffset} z-10 flex justify-center w-full`}>
        {head}
      </div>
      {!headOnly && <div className="absolute bottom-[-10px] w-32 h-20 bg-[#111] rounded-t-[3rem] z-0"></div>}
    </div>
  );
};

function ProfileCreatorCard({ userName, setUserName, onSignGuestbook }) {
  const [animal, setAnimal] = useState(0);
  const [expression, setExpression] = useState(0);
  const [accessory, setAccessory] = useState(0);
  const [color, setColor] = useState('#bae6fd');

  const nextItem = (setter, length) => setter(prev => (prev + 1) % length);
  const prevItem = (setter, length) => setter(prev => (prev - 1 + length) % length);

  return (
    <BentoCard title="Who are you" className="flex flex-col h-auto">
      <div className="flex-1 w-full flex flex-col items-center justify-center p-4 md:p-6">

        {/* Live Avatar Preview */}
        <div className="w-44 h-44 rounded-full overflow-hidden relative flex items-end justify-center mb-4 shrink-0" style={{ backgroundColor: color }}>
          <div style={{ transform: 'scale(0.95)', transformOrigin: 'center bottom' }}>
            {renderAvatar(animal, expression, accessory, 1, false)}
          </div>
        </div>

        {/* Name Input Area - No border, flat style */}
        <div className="w-full flex flex-col items-center gap-1 mb-3">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="text-center font-sans font-medium text-base md:text-lg bg-gray-100/80 rounded-full py-2.5 px-6 w-full max-w-xs focus:outline-none transition-all text-gray-700 placeholder:text-gray-400"
            placeholder="dahyeon"
          />
        </div>

        {/* Gray Controls Box - Flat, no shadows */}
        <div className="w-full bg-gray-100 rounded-xl p-4 flex flex-col gap-5 mt-1">

          {/* Top Row: Selectors */}
          <div className="flex justify-between items-center px-4 md:px-2">

            {/* Animal/Head */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative flex items-center justify-center">
                <button className="absolute -left-3 z-10 w-5 h-5 bg-gray-300 hover:bg-gray-400 text-white rounded-full flex items-center justify-center transition-colors" onClick={() => prevItem(setAnimal, 5)}>
                  <ChevronLeft className="w-3 h-3 -ml-0.5" />
                </button>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {renderAvatar(animal, 0, 0, 0.5, true)}
                  </div>
                </div>
                <button className="absolute -right-3 z-10 w-5 h-5 bg-gray-300 hover:bg-gray-400 text-white rounded-full flex items-center justify-center transition-colors" onClick={() => nextItem(setAnimal, 5)}>
                  <ChevronRight className="w-3 h-3 -mr-0.5" />
                </button>
              </div>
              <span className="text-xs font-sans text-gray-600">animal</span>
            </div>

            {/* Face/Eyes */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative flex items-center justify-center">
                <button className="absolute -left-3 z-10 w-5 h-5 bg-gray-300 hover:bg-gray-400 text-white rounded-full flex items-center justify-center transition-colors" onClick={() => prevItem(setExpression, 5)}>
                  <ChevronLeft className="w-3 h-3 -ml-0.5" />
                </button>
                <div className="w-16 h-16 bg-[#111] rounded-full flex items-center justify-center relative">
                  <div className="transform scale-[0.85]">
                    {renderExpression(expression)}
                  </div>
                </div>
                <button className="absolute -right-3 z-10 w-5 h-5 bg-gray-300 hover:bg-gray-400 text-white rounded-full flex items-center justify-center transition-colors" onClick={() => nextItem(setExpression, 5)}>
                  <ChevronRight className="w-3 h-3 -mr-0.5" />
                </button>
              </div>
              <span className="text-xs font-sans text-gray-600">eyes</span>
            </div>

            {/* Accessories */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative flex items-center justify-center">
                <button className="absolute -left-3 z-10 w-5 h-5 bg-gray-300 hover:bg-gray-400 text-white rounded-full flex items-center justify-center transition-colors" onClick={() => prevItem(setAccessory, 5)}>
                  <ChevronLeft className="w-3 h-3 -ml-0.5" />
                </button>
                <div className="w-16 h-16 bg-white rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div style={{ transform: 'scale(0.38)', transformOrigin: 'center center' }}>
                      {renderAvatar(0, 0, accessory, 1, false)}
                    </div>
                  </div>
                </div>
                <button className="absolute -right-3 z-10 w-5 h-5 bg-gray-300 hover:bg-gray-400 text-white rounded-full flex items-center justify-center transition-colors" onClick={() => nextItem(setAccessory, 5)}>
                  <ChevronRight className="w-3 h-3 -mr-0.5" />
                </button>
              </div>
              <span className="text-xs font-sans text-gray-600">accessory</span>
            </div>

          </div>

          {/* Bottom Row: Colors */}
          <div className="bg-white/80 rounded-full py-3 px-4 flex justify-between items-center w-full">
            {avatarColors.map((c, i) => (
              <button
                key={`${c}-${i}`}
                onClick={() => setColor(c)}
                className={`w-6 h-6 md:w-7 md:h-7 rounded-full transition-all ${color === c ? 'scale-125 border-4 border-white' : 'hover:scale-110'}`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>

          <button
            onClick={() => {
              if (userName.trim()) {
                onSignGuestbook({ id: Date.now(), name: userName, animal, expression, accessory, color });
                setUserName('');
              }
            }}
            disabled={!userName.trim()}
            className="w-full mt-2 bg-[#111] text-white font-mono text-sm py-2.5 rounded-xl hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Sign Guestbook
          </button>

        </div>
      </div>
    </BentoCard>
  )
}

function DraggablePolaroid({ guest, index, renderAvatar }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const elementStart = useRef({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const bounds = useRef({ minX: -Infinity, maxX: Infinity, minY: -Infinity, maxY: Infinity });

  const handleStart = (clientX, clientY) => {
    setIsDragging(true);
    dragStart.current = { x: clientX, y: clientY };
    elementStart.current = { ...position };

    if (cardRef.current && cardRef.current.parentElement) {
      const parentRect = cardRef.current.parentElement.getBoundingClientRect();
      const rect = cardRef.current.getBoundingClientRect();
      bounds.current = {
        minX: position.x - (rect.left - parentRect.left),
        maxX: position.x + (parentRect.right - rect.right),
        minY: position.y - (rect.top - parentRect.top),
        maxY: position.y + (parentRect.bottom - rect.bottom)
      };
    }
  };

  const handleMouseDown = (e) => {
    handleStart(e.clientX, e.clientY);
    e.preventDefault();
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  useEffect(() => {
    const handleMove = (clientX, clientY) => {
      if (!isDragging) return;

      let newX = elementStart.current.x + (clientX - dragStart.current.x);
      let newY = elementStart.current.y + (clientY - dragStart.current.y);

      newX = Math.max(bounds.current.minX, Math.min(newX, bounds.current.maxX));
      newY = Math.max(bounds.current.minY, Math.min(newY, bounds.current.maxY));

      setPosition({ x: newX, y: newY });
    };

    const handleMouseMove = (e) => handleMove(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (isDragging) e.preventDefault();
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const handleEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col items-center transition-all ${isDragging ? 'z-50 cursor-grabbing duration-0 scale-105' : 'hover:z-40 cursor-grab duration-300'}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        rotate: `${isDragging ? 0 : (index % 5 - 2) * 4}deg`
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div className="group relative flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
        {/* The Binder Clip */}
        <div className="absolute -top-3 z-20 flex flex-col items-center drop-shadow-sm pointer-events-none">
          <div className="w-3 h-2.5 border-2 border-gray-400 rounded-t-[4px] -mb-1 relative z-10"></div>
          <div className="w-6 h-3.5 bg-[#222] rounded-sm shadow-sm border-b border-gray-700"></div>
        </div>

        {/* Polaroid Frame - slightly smaller */}
        <div className="bg-white p-2.5 pb-10 shadow-md rounded-sm border border-gray-100 flex flex-col items-center w-[110px] pointer-events-none select-none">
          {/* The Avatar */}
          <div className="w-full aspect-square overflow-hidden relative flex items-end justify-center border border-gray-100/50" style={{ backgroundColor: guest.color }}>
            <div style={{ transform: 'scale(0.5)', transformOrigin: 'center bottom', marginBottom: '-10px' }}>
              {renderAvatar(guest.animal, guest.expression, guest.accessory, 1, false)}
            </div>
          </div>
          {/* The Handwritten Name */}
          <span className="absolute bottom-2 font-['Caveat'] text-xl text-gray-800">
            {guest.name}
          </span>
        </div>
      </div>
    </div>
  );
}

const DEFAULT_GUESTS = [];
const MAX_GUESTS = 10;

function MainLayout() {
  const [userName, setUserName] = useState('');
  const sectionRef = useRef(null);
  const [guests, setGuests] = useState(() => {
    try {
      const saved = localStorage.getItem('guestbook');
      return saved ? JSON.parse(saved) : DEFAULT_GUESTS;
    } catch {
      return DEFAULT_GUESTS;
    }
  });

  useEffect(() => {
    localStorage.setItem('guestbook', JSON.stringify(guests));
  }, [guests]);

  const greeting = userName.trim() ? `Hi ${userName.trim()},` : 'Hi there,';

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fade-up', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Hero Section matching the wireframe */}
      <section className="pt-28 pb-12 px-10 md:px-32 max-w-[1600px] mx-auto fade-up">
        <div className="font-['Outfit'] font-light text-xl md:text-3xl space-y-4 md:space-y-6 text-primary tracking-tight">
          <p className="opacity-90">{greeting}</p>
          <p className="max-w-3xl leading-snug md:leading-normal">
            My name is Dahyeon, a UIUX designer<br className="hidden md:block" />
            <span className="bg-yellow-200 px-1">exploring how design shapes human behavior</span>
          </p>
          <p className="text-base md:text-lg font-['Crimson_Pro'] font-normal opacity-80 pt-4">
            Currently doing my Master's in User Experience Design at TH Ingolstadt in Germany
          </p>
        </div>
      </section>

      {/* 2-Column Masonry Grid */}
      <section id="work" className="px-10 md:px-32 pb-32 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* Left Column (35%) — desktop only content */}
          <div className="w-full lg:w-[35%] flex flex-col gap-6 lg:gap-8 fade-up">
            {/* Desktop only — on mobile shown at the end */}
            <div className="hidden lg:block">
              <ProfileCreatorCard userName={userName} setUserName={setUserName} onSignGuestbook={(g) => setGuests(prev => prev.length >= MAX_GUESTS ? [g] : [...prev, g])} />
            </div>
            {/* Desktop only — on mobile this is shown after IMDb in right column */}
            <Link to="/interaction-design" className="hidden lg:block">
              <BentoCard title="Interaction Design" className="h-[480px]" tags={['Current']} bg="#FAF4FF">
                <img src="/interaction/thumbnail.png" alt="Interaction Design" className="absolute inset-0 w-full h-full object-contain z-10" />
              </BentoCard>
            </Link>
          </div>

          {/* Right Column (65%) */}
          <div className="w-full lg:w-[65%] flex flex-col gap-6 lg:gap-8 fade-up">
            <Link to="/rootine">
              <BentoCard title="Rootine" className="h-[400px]" tags={['End-to-end', 'UXUI', 'Mobile']}>
                <img src={projects[0].image} alt="Rootine" className="absolute inset-0 w-full h-full object-cover z-10" style={{ objectPosition: 'center 20%' }} />
              </BentoCard>
            </Link>

            <Link to="/imdb">
              <BentoCard title="IMDb App" className="h-[300px]" tags={['Redesign', 'UXUI']}>
                <img src={projects[1].image} alt="IMDb App" className="absolute inset-0 w-full h-full object-cover z-10" style={{ objectPosition: 'center 20%' }} />
              </BentoCard>
            </Link>

            {/* Mobile only — on desktop this is shown in left column */}
            <Link to="/interaction-design" className="lg:hidden">
              <BentoCard title="Interaction Design" className="h-[480px]" tags={['Current']} bg="#FAF4FF">
                <img src="/interaction/thumbnail.png" alt="Interaction Design" className="absolute inset-0 w-full h-full object-contain z-10" />
              </BentoCard>
            </Link>

            <div className="flex gap-6 lg:gap-8">
              <BentoCard title="Fintalo" className="flex-1 aspect-square" tags={['TUM Design', 'UXUI', 'B2B', 'Web']}>
                <div className="absolute inset-0 z-0" style={{ backgroundColor: '#DFECFC' }} />
                <img src="/fintalo/thumbnail.png" alt="Fintalo" className="absolute inset-0 w-full h-full object-contain z-10" style={{ transform: 'scale(0.85)', transformOrigin: 'center center' }} />
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/40 backdrop-blur-[2px]">
                  <span className="font-mono text-xs text-primary/50 tracking-widest uppercase">Coming Soon</span>
                </div>
              </BentoCard>

              <BentoCard title="Scribbl...ing" className="h-[200px] flex-1">
                <div className="absolute inset-0 w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center p-6 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700 z-20">
                  <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'linear-gradient(90deg, #000 1px, transparent 1px), linear-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <span className="font-mono text-xs text-primary/40 z-10 relative bg-white/80 px-3 py-1.5 rounded-md border border-gray-100">Interactive Canvas</span>
                </div>
              </BentoCard>
            </div>

            {/* Mobile only — Who are you at the end */}
            <div className="lg:hidden">
              <ProfileCreatorCard userName={userName} setUserName={setUserName} onSignGuestbook={(g) => setGuests(prev => prev.length >= MAX_GUESTS ? [g] : [...prev, g])} />
            </div>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="w-full py-16 px-10 md:px-32 max-w-[1600px] mx-auto fade-up">
        <div
          className="w-full h-[1px] opacity-60 text-gray-900"
          style={{
            backgroundImage: 'linear-gradient(to right, currentColor 50%, transparent 50%)',
            backgroundSize: '20px 1px',
            backgroundRepeat: 'repeat-x'
          }}
        ></div>
      </div>

      {/* Guestbook Section */}
      <section className="px-10 md:px-32 pb-32 max-w-[1600px] mx-auto w-full fade-up flex flex-col items-center">
        <h2 className="font-mono text-sm tracking-tight text-primary font-medium mb-6 bg-white px-8 py-2.5 rounded-full border border-gray-100 shadow-sm z-10">
          Guestbook
        </h2>
        <div
          className="w-full min-h-[200px] md:min-h-[400px] relative p-4 sm:p-8 md:p-12 flex flex-wrap gap-4 sm:gap-8 md:gap-12 items-center justify-center bg-[#fdfdfd] border-4 border-gray-100 rounded-xl shadow-sm overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(90deg, #d4d4d4 2px, transparent 2px), linear-gradient(#d4d4d4 2px, transparent 2px)',
            backgroundSize: '100px 100px',
            backgroundPosition: 'center'
          }}
        >
          {guests.length === 0 ? (
            <div className="bg-white px-8 py-6 rounded-lg shadow-md rotate-2 border border-gray-100 flex flex-col items-center">
              <div className="w-8 h-3 bg-black/80 rounded-sm mb-4"></div>
              <p className="font-['Caveat'] text-2xl text-gray-500">No guests yet. Be the first!</p>
            </div>
          ) : (
            guests.map((g, i) => (
              <DraggablePolaroid key={g.id} guest={g} index={i} renderAvatar={renderAvatar} />
            ))
          )}
        </div>
      </section>

    </div>
  );
}

function LampScreen({ onReveal }) {
  const [phase, setPhase] = useState('idle');
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState(null);
  const [lerpedPos, setLerpedPos] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [radius, setRadius] = useState(0);
  const [targetRadius, setTargetRadius] = useState(0);

  const MAX_RADIUS = 180;
  const LERP_SPEED = 0.18;
  const RADIUS_LERP_SPEED = 0.13;

  const isOn = phase !== 'idle';
  const isRevealing = phase === 'revealing';

  // Lock body scroll while lamp screen is idle
  useEffect(() => {
    document.body.style.overflow = isOn ? '' : 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [isOn]);

  const handleClick = () => {
    if (phase !== 'idle') return;
    setPhase('lit');
    setTimeout(() => setPhase('revealing'), 420);
    setTimeout(() => onReveal(), 2800);
  };

  // Lerp position
  useEffect(() => {
    if (!hovered || !mousePos) { setLerpedPos(null); return; }
    let frame;
    const animate = () => {
      setLerpedPos(prev => {
        if (!prev) return mousePos;
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        if (Math.sqrt(dx * dx + dy * dy) < 0.5) return mousePos;
        return { x: prev.x + dx * LERP_SPEED, y: prev.y + dy * LERP_SPEED };
      });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [mousePos, hovered]);

  // Animate radius in/out
  useEffect(() => {
    setTargetRadius(hovered ? MAX_RADIUS : 0);
  }, [hovered]);

  useEffect(() => {
    let frame;
    const animateRadius = () => {
      setRadius(prev => {
        if (Math.abs(prev - targetRadius) < 1) return targetRadius;
        return prev + (targetRadius - prev) * RADIUS_LERP_SPEED;
      });
      frame = requestAnimationFrame(animateRadius);
    };
    frame = requestAnimationFrame(animateRadius);
    return () => cancelAnimationFrame(frame);
  }, [targetRadius]);

  const handleMouseMove = useCallback((e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    setMousePos(null);
    setLerpedPos(null);
  }, []);

  const r = radius;
  const spotlightMask = lerpedPos && r > 0
    ? `radial-gradient(circle at ${lerpedPos.x}px ${lerpedPos.y}px,
        transparent 0px,
        transparent ${r * 0.35}px,
        rgba(0,0,0,0.12) ${r * 0.55}px,
        rgba(0,0,0,0.40) ${r * 0.72}px,
        rgba(0,0,0,0.72) ${r * 0.88}px,
        black ${r}px,
        black 100%)`
    : null;

  const backdropMask = !isOn && spotlightMask
    ? { WebkitMaskImage: spotlightMask, maskImage: spotlightMask }
    : {};

  return (
    <>
      <style>{`
        @keyframes lampSway {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes hintAppear {
          from { opacity: 0; transform: translateY(7px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        ref={containerRef}
        className="fixed inset-0 z-[200] overflow-hidden"
        style={{
          opacity: isRevealing ? 0 : 1,
          transition: isRevealing ? 'opacity 2.2s ease-in-out' : 'none',
          pointerEvents: isRevealing ? 'none' : 'auto',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Blurred dark backdrop with spotlight reveal mask */}
        <div
          className="absolute inset-0 bg-[#0c0c0c]"
          style={backdropMask}
        />

        {/* Light circle — expands on click */}
        {isOn && (
          <div
            style={{
              position: 'absolute',
              top: '200px',
              left: '50%',
              width: isRevealing ? '360vmax' : '0px',
              height: isRevealing ? '360vmax' : '0px',
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #fffef5 0%, #f9f6f0 38%, rgba(249,246,240,0.55) 62%, transparent 80%)',
              transition: isRevealing
                ? 'width 3.6s cubic-bezier(0.16, 1, 0.3, 1), height 3.6s cubic-bezier(0.16, 1, 0.3, 1)'
                : 'all 0.3s ease-out',
              pointerEvents: 'none',
            }}
          />
        )}

        {/* Hanging lamp — pivots from ceiling attachment */}
        <div className="absolute top-0 left-1/2" style={{ transform: 'translateX(-50%)', zIndex: 10 }}>
          <div
            style={{
              transformOrigin: 'top center',
              animation: phase === 'idle' ? 'lampSway 3.8s ease-in-out infinite' : 'none',
            }}
          >
            <svg
              width="160" height="250" viewBox="0 0 160 250"
              style={{ overflow: 'visible', display: 'block', cursor: phase === 'idle' ? 'pointer' : 'default', position: 'relative', zIndex: 10 }}
              onClick={handleClick}
            >
              <defs>
                <filter id="sketchy" x="-15%" y="-15%" width="130%" height="130%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.038" numOctaves="4" seed="8" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.2" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </defs>

              <path d="M69,0 L91,1 L92,8 L68,7 Z"
                fill="rgba(210,198,172,0.25)" stroke="#c8bba0" strokeWidth="1.5" strokeLinejoin="round"
                filter="url(#sketchy)" />

              <path d="M80,7 C79,24 81,40 80,56 C79,72 81,86 80,102"
                fill="none" stroke="#c8bba0" strokeWidth="1.9" strokeLinecap="round"
                filter="url(#sketchy)" />

              <path d="M58,102 C51,127 30,163 20,190 Q80,206 140,190 C130,163 109,127 102,102"
                fill={isOn ? 'rgba(255,210,60,0.10)' : 'rgba(210,198,165,0.07)'}
                stroke="#c8bba0" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"
                style={{ transition: 'fill 0.5s ease' }}
                filter="url(#sketchy)" />

              <ellipse cx="80" cy="102" rx="22" ry="5"
                fill="rgba(210,198,165,0.25)" stroke="#c8bba0" strokeWidth="1.5"
                filter="url(#sketchy)" />

              <ellipse cx="80" cy="190" rx="60" ry="11"
                fill="rgba(210,198,165,0.20)" stroke="#c8bba0" strokeWidth="1.5"
                filter="url(#sketchy)" />

              <g stroke="#c8bba0" strokeWidth="0.9" opacity="0.22" strokeLinecap="round" filter="url(#sketchy)">
                <line x1="52" y1="120" x2="68" y2="116" />
                <line x1="48" y1="136" x2="67" y2="131" />
                <line x1="45" y1="152" x2="66" y2="146" />
                <line x1="42" y1="167" x2="65" y2="160" />
                <line x1="40" y1="181" x2="63" y2="173" />
              </g>

              <path d="M72,190 C65,190 60,194 60,200 C60,207 64,212 70,215 C73,217 87,217 90,215 C96,212 100,207 100,200 C100,194 95,190 88,190 C86,188 83,186 80,186 C77,186 74,188 72,190 Z"
                fill={isOn ? '#fffde7' : 'rgba(210,198,165,0.09)'}
                stroke="#c8bba0" strokeWidth="1.8" strokeLinejoin="round"
                style={{ transition: 'fill 0.45s ease' }}
                filter="url(#sketchy)" />

              <path d="M75,207 C76,202 79,199 80,196 C81,199 84,202 85,207"
                fill="none"
                stroke={isOn ? '#ffe566' : '#c8bba0'}
                strokeWidth="1.4" strokeLinecap="round"
                opacity={isOn ? 0.95 : 0.28}
                style={{ transition: 'stroke 0.4s ease, opacity 0.4s ease' }}
              />

              {isOn && (
                <>
                  <ellipse cx="80" cy="200" rx="25" ry="23"
                    fill="none" stroke="rgba(255,253,200,0.22)" strokeWidth="1.6"
                    filter="url(#sketchy)" />
                  <ellipse cx="80" cy="200" rx="40" ry="37"
                    fill="none" stroke="rgba(255,253,200,0.10)" strokeWidth="1.6"
                    filter="url(#sketchy)" />
                </>
              )}

              {!isOn && (
                <circle cx="80" cy="200" r="17" fill="none"
                  stroke="rgba(210,198,165,0.28)" strokeWidth="1.3" strokeDasharray="4,5"
                  filter="url(#sketchy)">
                  <animate attributeName="r" values="15;20;15" dur="2.3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.55;0.12;0.55" dur="2.3s" repeatCount="indefinite" />
                </circle>
              )}
            </svg>
          </div>
        </div>

        {/* Lamp hint */}
        {phase === 'idle' && (
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ top: '258px' }}>
            <p
              className="text-white/45 text-[13px] font-mono tracking-[0.28em] uppercase select-none pointer-events-none"
              style={{ animation: 'hintAppear 1.4s ease-out 1.2s both' }}
            >
              turn this on
            </p>
          </div>
        )}

        {/* Name intro — vertically centered */}
        {phase === 'idle' && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 select-none pointer-events-none"
            style={{ animation: 'hintAppear 1.6s ease-out 0.6s both' }}
          >
            <p className="font-['Outfit'] font-light text-5xl text-white/80 tracking-tight">Dahyeon Park</p>
            <p className="font-sans text-base text-white/50 tracking-wide">Product Designer</p>
          </div>
        )}
      </div>
    </>
  );
}

export default function App() {
  const [lampDone, setLampDone] = useState(() => {
    try { return sessionStorage.getItem('lampDone') === 'true'; } catch { return false; }
  });

  const handleReveal = () => {
    try { sessionStorage.setItem('lampDone', 'true'); } catch { }
    setLampDone(true);
  };

  return (
    <div className="min-h-screen font-sans text-primary relative selection:bg-yellow-200">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <MainLayout />
      </main>
      <Footer />
      {!lampDone && <LampScreen onReveal={handleReveal} />}
    </div>
  );
}
