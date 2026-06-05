import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const interests = [
  {
    id: 'coffee',
    title: 'Coffee',
    description: "These are some of my proudest latte art creations (and many failed attempts behind them)! It's fun seeing small improvements over time and experimenting. I'm always surprised by how a simple cup of coffee can be much more than just something to drink.",
    images: [
      '/coffee/IMG_3412.jpeg',
      '/coffee/IMG_2342.jpeg',
      '/coffee/IMG_2420.jpeg',
      '/coffee/IMG_3193.jpeg',
    ],
  },
  {
    id: 'camera',
    title: 'Film',
    description: "I like to take photos or videos of some moments, especially with a film camera. Since I can't see the result right away, it makes me more intentional with every shot. I enjoy making a short video with some of my favorite songs and sharing it with friends.",
    images: [
      '/camera/IMG_5303.JPG',
      '/camera/IMG_5306.JPG',
      '/camera/IMG_5309.JPG',
      '/camera/IMG_5315.JPG',
    ],
  },
  {
    id: 'bread',
    title: 'Bread',
    description: "I enjoy baking for friends, and living in Germany means good bread is basically part of the lifestyle. I'm always on the lookout for a great sourdough, so if you have any recommendations, I'd love to hear them! (I wish I had baked the loaf in the first picture haha)",
    images: [
      '/bread/IMG_3716.jpeg',
      '/bread/IMG_6273.jpeg',
      '/bread/IMG_6400.jpeg',
      '/bread/IMG_6440.jpeg',
    ],
  },
];

export default function About() {
  const [activeId, setActiveId] = useState(interests[0].id);
  const active = interests.find(i => i.id === activeId);

  return (
    <div className="min-h-screen bg-white font-sans text-primary selection:bg-yellow-200">
      <Navbar sticky={false} />

      {/* Bio + Design process */}
      <div className="px-6 md:px-16 pt-28 pb-20 max-w-[1200px] mx-auto flex flex-col gap-20">

        {/* Bio */}
        <section className="flex flex-col-reverse md:flex-row gap-10 md:gap-14 lg:gap-16 items-start">
          <div className="flex-1 flex flex-col gap-6">
            <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">Who am I?</p>
            <div className="flex flex-col gap-5">
              <p className="font-sans text-base text-gray-600 leading-relaxed">
                Hi there! I'm Dahyeon. Growing up in South Korea, I was the kid who changed career dreams every other week. One day I wanted to be a dentist, the next a fashion designer, and then a dancer. Looking back, none of those dreams really stuck but the curiosity behind them did.
              </p>
              <p className="font-sans text-base text-gray-600 leading-relaxed">
                I moved to New York to broaden my perspective. I studied Computer Science at The City College of New York. During my time there, I worked as a full-stack developer intern, joined the Cornell Break Through Tech program, and collaborated with people from different disciplines. Living abroad on my own also taught me resilience, adaptability, and how much growth can come from stepping out of my comfort zone.
              </p>
              <p className="font-sans text-base text-gray-600 leading-relaxed">
                As I worked more closely with front-end development, I became increasingly curious about the people behind the screens. I found myself drawn to the creative and human side of technology. Today, I'm pursuing a Master's in User Experience Design at TH Ingolstadt in Germany. I enjoy designing experiences that feel meaningful and human. Behind the screens, you'll usually find me brewing coffee, running, or baking.
              </p>
            </div>
          </div>

          {/* Country photo collage */}
          <div className="w-full md:w-[260px] lg:w-[340px] shrink-0 flex flex-col gap-2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <img src="/country/USA.JPG" alt="United States" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <img src="/country/Korea.jpg" alt="Korea" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <img src="/country/Germany.JPG" alt="Germany" className="w-full h-full object-cover" style={{ objectPosition: 'center 60%' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Design process */}
        <section className="flex flex-col gap-6 max-w-2xl">
          <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">What is my design process</p>
          <div className="flex flex-col gap-5">
            <p className="font-sans text-base text-gray-600 leading-relaxed">
              My design process starts with curiosity. I begin by understanding the problem and the people behind it, then explore ideas early rather than waiting for perfect clarity.
            </p>
            <p className="font-sans text-base text-gray-600 leading-relaxed">
              I see design as an iterative process rather than a linear one. I move between researching, making, testing, and refining, using feedback and new insights to guide each step. Often, the most valuable discoveries come from seeing how a design works in a real context.
            </p>
            <p className="font-sans text-base text-gray-600 leading-relaxed">
              I enjoy exploring the intersection of user needs, business objectives. At the end of the day, my goal is to design experiences that work as a whole.
            </p>
          </div>
        </section>

      </div>

      {/* Things that make me happy */}
      <section className="px-6 md:px-16 pb-32 max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="flex flex-col items-center py-16">
          <p className="font-['Outfit'] font-bold text-3xl sm:text-4xl md:text-[2.75rem] leading-snug text-primary text-center">
            Things that make me{' '}
            <span className="font-['Crimson_Pro'] italic">happy</span>
            <span className="inline-block align-middle ml-3 animate-spin-slow">
              <svg width="34" height="34" viewBox="0 0 100 100" className="text-primary">
                {[0, 60, 120, 180, 240, 300].map(angle => {
                  const rad = (angle * Math.PI) / 180;
                  const cx = 50 + 24 * Math.sin(rad);
                  const cy = 50 - 24 * Math.cos(rad);
                  return <circle key={angle} cx={cx} cy={cy} r="19" fill="currentColor" />;
                })}
                <circle cx="50" cy="50" r="13" fill="white" />
              </svg>
            </span>
          </p>
        </div>

        {/* Interactive panel */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

          {/* Left: interest list */}
          <div className="flex flex-row md:flex-col gap-2 md:gap-0 flex-wrap md:w-[200px] shrink-0">
            {interests.map(item => (
              <button
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                className={`text-left py-1.5 md:py-2 px-0 font-sans font-bold text-lg md:text-2xl leading-tight transition-colors duration-200 cursor-pointer ${activeId === item.id ? 'text-primary' : 'text-gray-200 hover:text-gray-400'
                  }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Right: photos + description */}
          <div className="flex-1 flex flex-col gap-4">
            <p className="font-sans text-sm text-gray-400 leading-relaxed">{active.description}</p>
            <div className="grid grid-cols-4 gap-2 rounded-2xl overflow-hidden">
              {active.images.map((src, i) => (
                <div key={`${activeId}-${i}`} className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={src}
                    alt={`${active.title} ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
