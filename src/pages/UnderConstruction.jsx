export default function UnderConstruction() {
  return (
    <div className="min-h-screen bg-white font-sans text-primary flex flex-col items-center justify-center px-6 text-center selection:bg-yellow-200">
      <span className="inline-block animate-spin-slow mb-6">
        <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="currentColor" />
          <circle cx="35" cy="42" r="7" fill="white" />
          <circle cx="65" cy="42" r="7" fill="white" />
          <path d="M28 62 Q50 82 72 62" stroke="white" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>
      </span>
      <p className="font-['Plus_Jakarta_Sans'] font-bold text-3xl sm:text-4xl mb-3">Under construction</p>
      <p className="font-sans text-base text-gray-500 max-w-sm">
        This site is getting a redesign. Check back soon.
      </p>
    </div>
  );
}
