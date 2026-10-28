import { ArrowLeft } from 'lucide-react';

function Coupons({ onBack }) {
  const tickets = [
    { title: "Movie\nNight", rotation: -12, marginClass: 'mt-0 ml-0' },
    { title: "Game\nMarathon", rotation: 8, marginClass: 'mt-8 -ml-4' },
    { title: "Free\nGift", rotation: 5, marginClass: '-mt-4 ml-4' },
    { title: "Yes\nDay", rotation: -8, marginClass: 'mt-4 -ml-8' }
  ];

  return (
    <div className="relative min-h-screen flex flex-col p-8 overflow-hidden bg-[#1a1a1a]">
      
      {/* Decorative Vintage Flowers */}
      <img 
        src="/flower.png" 
        alt="" 
        className="absolute top-12 right-12 w-48 md:w-64 opacity-60 animate-fade-in pointer-events-none" 
        style={{ mixBlendMode: 'screen' }} 
      />
      <img 
        src="/flower.png" 
        alt="" 
        className="absolute bottom-12 left-12 w-48 md:w-64 opacity-60 animate-fade-in pointer-events-none transform scale-x-[-1] scale-y-[-1]" 
        style={{ mixBlendMode: 'screen' }} 
      />

      {/* Back Button */}
      <button 
        onClick={onBack}
        className="relative z-20 group flex items-center space-x-2 text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors w-fit mb-12"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span>Back</span>
      </button>

      {/* Angled Heading */}
      <div className="w-full flex justify-start pl-4 md:pl-24 mb-12 md:mb-24 z-10">
        <h2 
          className="text-5xl md:text-7xl font-cursive text-white animate-pop-in"
          style={{ transform: 'rotate(-10deg)' }}
        >
          Birthday Perks
        </h2>
      </div>

      {/* Tickets Area */}
      <div className="relative flex-1 flex items-center justify-center z-10">
        
        {/* Background String SVG */}
        <svg className="absolute w-full max-w-2xl h-[400px] text-white/30 pointer-events-none" viewBox="0 0 500 400" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M 50,350 Q 150,250 250,200 T 450,50" />
          <path d="M 100,50 Q 200,150 250,200 T 400,350" />
        </svg>

        {/* Tickets Grid/Cluster */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-3xl place-items-center mt-8 md:mt-0">
          {tickets.map((ticket, i) => (
            <div 
              key={i} 
              className={`real-ticket w-56 h-28 md:w-56 md:h-32 flex items-center justify-center cursor-pointer group hover:scale-110 transition-transform duration-300 animate-pop-in ${ticket.marginClass}`}
              style={{ 
                transform: `rotate(${ticket.rotation}deg)`,
                animationDelay: `${0.2 * i}s`
              }}
            >
              {/* Fake Barcode on the top */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-2 md:space-x-4 opacity-50">
                <span className="text-[6px] md:text-[8px] tracking-[0.2em] font-mono mr-2">
                  923456789012
                </span>
                <div className="flex space-x-[2px] h-3 md:h-4">
                  <div className="w-[1px] bg-black"></div>
                  <div className="w-[2px] bg-black"></div>
                  <div className="w-[1px] bg-black"></div>
                  <div className="w-[3px] bg-black"></div>
                  <div className="w-[1px] bg-black"></div>
                  <div className="w-[2px] bg-black"></div>
                  <div className="w-[2px] bg-black"></div>
                  <div className="w-[1px] bg-black"></div>
                  <div className="w-[2px] bg-black"></div>
                  <div className="w-[1px] bg-black"></div>
                </div>
              </div>
              
              {/* Ticket Text */}
              <div className="text-center w-full mt-4">
                <h3 className="font-serif text-lg md:text-2xl font-bold tracking-widest text-black whitespace-pre-line leading-tight">
                  {ticket.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default Coupons;
