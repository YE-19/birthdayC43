import { ArrowDown, Heart } from 'lucide-react';
import hart1 from '../assets/hart1.png'

function Menu({ onNavigate }) {
  const navItems = [
    { id: 'gallery', label: 'Our Memories' },
    { id: 'video', label: 'Our Song' },
    { id: 'coupons', label: 'Coupons' },
    { id: 'letter', label: 'Letter' }
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-24 pb-8 px-8 overflow-hidden bg-[#1a1a1a]">

      {/* Decorative Bows - Top Left and Top Right */}
      <img
        src="/bow.png"
        alt=""
        className="absolute top-4 left-4 w-20 md:top-8 md:left-8 md:w-48 opacity-80 animate-fade-in pointer-events-none transform scale-x-[-1]"
        style={{ mixBlendMode: 'screen', animationDelay: '0.2s', filter: 'contrast(200%) grayscale(100%)' }}
      />
      <img
        src="/bow.png"
        alt=""
        className="absolute top-4 right-4 w-20 md:top-8 md:right-8 md:w-48 opacity-80 animate-fade-in pointer-events-none"
        style={{ mixBlendMode: 'screen', animationDelay: '0.4s', filter: 'contrast(200%) grayscale(100%)' }}
      />

      <div className="w-full max-w-5xl flex flex-col items-center z-10 mt-16 md:mt-8">

        {/* Horizontal Heading */}
        <div className="w-full flex justify-center mb-16 md:mb-24 px-4 text-center">
          <h2
            className="text-5xl md:text-8xl font-cursive text-white animate-pop-in"
            style={{ animationDelay: '0.6s' }}
          >
            Specially For You
          </h2>
        </div>

        {/* Horizontal Hearts Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 w-full">
          {navItems.map((item, idx) => (
            <div
              key={item.id}
              className="flex flex-col items-center animate-pop-in"
              style={{ animationDelay: `${1 + (idx * 0.3)}s` }}
            >
              <button
                onClick={() => onNavigate(item.id)}
                className="relative w-28 h-28 md:w-40 md:h-40 group flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                {/* The user's scalloped heart image */}
                <img
                  src={hart1}
                  alt={item.label}
                  className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-all duration-300"
                />

                {/* Text Label Below */}
                <span className="text-white/80 font-serif tracking-widest text-sm uppercase mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-8 whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Down Arrow Button at Bottom Center */}
      <div className="absolute bottom-12 animate-fade-in" style={{ animationDelay: '2.5s' }}>
        <button
          onClick={() => onNavigate('gallery')}
          className="text-white border-2 border-white rounded-full p-3 hover:bg-white hover:text-[#1a1a1a] transition-colors"
        >
          <ArrowDown size={24} strokeWidth={1.5} />
        </button>
      </div>

    </div>
  );
}

export default Menu;
