import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const education = [
  { degree: 'M.Sc. in User Experience Design', year: '2026 - Present', school: 'Technische Hochschule Ingolstadt, Germany' },
  { degree: 'B.Sc. in Computer Science', year: '2024', school: 'The City College of New York, USA' },
];

const experience = [
  { role: 'UX/UI Designer', year: '2026', company: 'Fintalo & TUDesign, Technische Universität München, Germany', image: '/fintalo/fintalo_presentation.jpg' },
  { role: 'Full-Stack Developer Intern', year: '2024', company: 'NYC Dept. of Records and Information Services, USA' },
  { role: 'AI/ML Engineer Fellow', year: '2023', company: 'Pfizer & Cornell University, USA', image: '/Pfizer_groupPic.jpg' },
];

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
    description: "I enjoy baking for friends, and living in Germany means good bread is basically part of the lifestyle. I'm always on the lookout for a great sourdough, so if you have any recommendations, I'd love to hear them! (I wish I baked the loaf in the first picture haha)",
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

      {/* Greeting */}
      <div className="px-6 md:px-16 pt-28 max-w-[1200px] mx-auto flex flex-col items-center">
        <p className="font-['Plus_Jakarta_Sans'] font-bold text-3xl sm:text-4xl md:text-[2.75rem] leading-snug text-primary text-center">
          Hi! Nice to meet you{' '}
          <span className="inline-block align-middle ml-2 animate-spin-slow">
            <svg width="24" height="24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" fill="currentColor" />
              <circle cx="35" cy="42" r="7" fill="white" />
              <circle cx="65" cy="42" r="7" fill="white" />
              <path d="M28 62 Q50 82 72 62" stroke="white" strokeWidth="8" strokeLinecap="round" fill="none" />
            </svg>
          </span>
        </p>
      </div>

      {/* Bio + Design process */}
      <div className="px-6 md:px-16 pt-16 pb-20 max-w-[1200px] mx-auto flex flex-col gap-20">

        {/* Bio */}
        <section className="flex flex-col-reverse md:flex-row gap-10 md:gap-14 lg:gap-16 items-start">
          <div className="flex-1 flex flex-col gap-6">
            <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">Who am I?</p>
            <div className="flex flex-col gap-5">
              <p className="font-sans text-base text-gray-600 leading-relaxed">
                Hi! I'm Dahyeon ["tah-hyuhn"]. Looking back, I was the kid who changed career dreams every other week. One day I wanted to be a dentist, the next a fashion designer, and then a dancer. Looking back, none of those dreams really stuck but the curiosity behind them did.
              </p>
              <p className="font-sans text-base text-gray-600 leading-relaxed">
                I graduated with a Bachelor of Science in Computer Science in New York, and soon after, I found myself drawn to product design as another way to explore that curiosity.
              </p>
              <p className="font-sans text-base text-gray-600 leading-relaxed">
                Today, I'm pursuing a Master's in User Experience Design at TH Ingolstadt in Germany. I care about the small details you might not notice, but can always feel. Behind the screens, you can find me brewing coffee, running, or baking.
              </p>
            </div>
          </div>

          {/* Country photo collage */}
          <div className="w-[220px] sm:w-[260px] md:w-[260px] lg:w-[340px] shrink-0 grid grid-cols-2 gap-2 mx-auto md:mx-0 md:mt-10">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img src="/country/USA.JPG" alt="United States" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img src="/country/Korea.jpg" alt="Korea" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="flex flex-col gap-10 max-w-2xl">
          <div className="flex flex-col gap-5">
            <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">Education</p>
            <div className="flex flex-col gap-5">
              {education.map((e) => (
                <div key={e.degree}>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-sans font-semibold text-base text-primary">{e.degree}</p>
                    <span className="font-sans text-sm text-gray-400 shrink-0">{e.year}</span>
                  </div>
                  <p className="font-sans text-sm text-gray-400">{e.school}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">Experience</p>
            <div className="flex flex-col gap-5">
              {experience.map((e) => (
                <div key={e.role} className="relative group">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-sans font-semibold text-base text-primary relative inline-block w-fit">
                      {e.role}
                      {e.image && (
                        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 z-10 w-40 h-28 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 pointer-events-none">
                          <img
                            src={e.image}
                            alt={`${e.company} team`}
                            className="w-full h-full object-cover rounded-xl shadow-lg border border-white"
                          />
                        </div>
                      )}
                    </p>
                    <span className="font-sans text-sm text-gray-400 shrink-0">{e.year}</span>
                  </div>
                  <p className="font-sans text-sm text-gray-400">{e.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* Things that make me happy */}
      <section className="px-6 md:px-16 pb-32 max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="flex flex-col items-center py-16">
          <p className="font-['Plus_Jakarta_Sans'] font-bold text-3xl sm:text-4xl md:text-[2.75rem] leading-snug text-primary text-center">
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
        <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-16 items-start">

          {/* Right: interest list */}
          <div className="flex flex-row md:flex-col gap-2 md:gap-0 flex-wrap shrink-0">
            {interests.map(item => (
              <button
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                className={`text-right w-full py-1.5 md:py-2 px-0 font-sans font-bold text-lg md:text-2xl leading-tight transition-colors duration-200 cursor-pointer ${activeId === item.id ? 'text-primary' : 'text-gray-200 hover:text-gray-400'
                  }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Left: photos + description */}
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
