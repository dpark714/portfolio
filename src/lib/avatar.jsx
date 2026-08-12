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

export const renderAvatar = (animalType, expType, accessoryType, scale = 1, headOnly = false) => {
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
