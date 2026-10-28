import { Home } from 'lucide-react';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';

function Letter({ onHome }) {
  const strip1 = [
    p5, p2, p3, p4
  ];

  const strip2 = [
    p3, p1, p2, p6
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden">

      {/* Background Elements */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[70%] tartan-bg z-0 transform -rotate-6 opacity-90 shadow-2xl"></div>

      {/* Decorative branches (right side) */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-20 pointer-events-none flex flex-col justify-between">
        <svg viewBox="0 0 200 200" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M 200,50 Q 150,100 100,80 T 0,150" />
          <path d="M 180,20 Q 140,80 80,60 T -20,120" />
          {/* Leaves */}
          <path d="M 150,100 Q 140,90 130,100 Q 140,110 150,100" fill="currentColor" />
          <path d="M 100,80 Q 90,70 80,80 Q 90,90 100,80" fill="currentColor" />
        </svg>
      </div>

      {/* Home Button */}
      <div className="absolute top-8 right-8 z-50">
        <button
          onClick={onHome}
          className="group flex items-center space-x-2 text-sm uppercase tracking-widest text-black/60 hover:text-black transition-colors bg-white/90 px-4 py-2 rounded shadow-sm"
        >
          <Home size={16} className="group-hover:-translate-y-1 transition-transform" />
          <span>Home</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl w-full mt-16 md:mt-0 z-10">

        {/* Left Side: Envelope & Letter */}
        <div className="relative w-full max-w-full md:max-w-[500px] flex items-center justify-center animate-pop-in mt-8 md:mt-0">

          {/* Background Lace Doily (Fake) */}
          <div className="absolute -top-6 -left-6 md:-top-12 md:-left-12 w-48 h-48 md:w-64 md:h-64 rounded-full border-[12px] md:border-[16px] border-dashed border-[#f4f1ea]/80 opacity-80 z-0"></div>

          {/* Envelope Base */}
          <div className="absolute top-8 md:top-12 w-[300px] h-[200px] md:w-[380px] md:h-[260px] bg-[#ebe7e0] shadow-2xl transform rotate-3 z-10">
            {/* Open envelope top flap */}
            <div className="absolute top-0 left-0 w-full h-0 border-l-[150px] md:border-l-[190px] border-r-[150px] md:border-r-[190px] border-b-[100px] md:border-b-[130px] border-l-transparent border-r-transparent border-b-[#f4f1ea] transform origin-top rotate-180 -translate-y-full"></div>
            {/* Envelope side flaps */}
            <div className="absolute top-0 left-0 w-full h-full border-l-[150px] md:border-l-[190px] border-r-[150px] md:border-r-[190px] border-b-[100px] md:border-b-[130px] border-t-[100px] md:border-t-[130px] border-l-[#dfdad1] border-r-[#dfdad1] border-b-[#e5e1d9] border-t-transparent shadow-inner"></div>
          </div>

          {/* The Letter inside/on top */}
          <div className="relative w-[290px] sm:w-[330px] md:w-[390px] bg-[#fdfbf7] p-6 md:p-8 transform -rotate-2 z-20 shadow-2xl mt-[-20px] md:mt-[-40px] ml-2 md:ml-4 stamp-paper hover:-translate-y-4 transition-transform duration-500 cursor-pointer">

            <div className="space-y-3 md:space-y-4 handwritten text-[#2b2b2b] text-lg sm:text-xl md:text-[1.35rem] leading-relaxed" dir="ltr">
              <p>
                This is just something for you to look back at whenever you want and remind yourself how much I love you. You’re such an amazing person and you’ll always be my priority.
              </p>
              <p>
                Making you smile and seeing you happy is something I want to do for the rest of my life. I hope you never forget how special you are to me and how much happier you make my life just by being in it.
              </p>
              <p>
                No matter what happens I’ll always be here for you, loving you, choosing you and doing everything I can to make you smile and fill you up.. I love you forever monkey.
              </p>
              <p className="pt-1">
                You’ll always have a special place in my heart that you only entered into no one else could ever take. 4ever4life🤎
              </p>
            </div>

            {/* Vintage Stamp Logo */}
            <div className="flex justify-end mt-4 pr-1 opacity-40">
              <div className="w-11 h-11 rounded-full border border-gray-400 flex items-center justify-center">
                <span className="font-serif text-[10px] uppercase tracking-widest font-bold text-gray-600 transform -rotate-12">SEAL</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Photo Strips */}
        <div className="flex gap-4 md:gap-6 z-10 mt-16 lg:mt-0 animate-pop-in" style={{ animationDelay: '0.4s' }}>

          {/* Strip 1 */}
          <div className="bg-[#fdfbf7] p-3 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
            <div className="space-y-3">
              {strip1.map((url, i) => (
                <div key={i} className="w-24 h-24 md:w-32 md:h-32 overflow-hidden filter grayscale contrast-125 border border-gray-200">
                  <img
                    src={url}
                    alt={`Photo ${i + 1}`}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Strip 2 */}
          <div className="bg-[#fdfbf7] p-3 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 mt-8 z-10">
            <div className="space-y-3">
              {strip2.map((url, i) => (
                <div key={i} className="w-24 h-24 md:w-32 md:h-32 overflow-hidden filter grayscale contrast-125 border border-gray-200">
                  <img
                    src={url}
                    alt={`Photo ${i + 5}`}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Letter;
