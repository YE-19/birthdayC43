import { motion } from 'framer-motion';

function Hero({ onNext }) {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen p-8 md:p-16 gap-12 md:gap-24 max-w-6xl mx-auto">

      {/* Left Side: Cake Image */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 flex justify-center w-full max-w-xs md:max-w-md"
      >
        <img
          src="/cake.png"
          alt="Birthday Cake"
          className="w-full h-auto"
          style={{ mixBlendMode: 'screen' }}
        />
      </motion.div>

      {/* Right Side: Text & Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="flex-1 flex flex-col items-center text-center"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-serif tracking-widest text-white/90 mb-[-10px] uppercase">
            HAPPY
          </h2>
          <h1 className="text-6xl md:text-9xl font-cursive text-white leading-none">
            Birthday
          </h1>
          <h3 className="text-2xl md:text-5xl font-cursive text-white/80 mt-2">
            my love
          </h3>

          {/* Decorative Divider Line */}
          <div className="w-64 h-12 mt-4 text-white/70">
            <svg viewBox="0 0 200 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 20,20 Q 50,40 100,20 T 180,20" />
              <path d="M 90,20 Q 100,5 110,20 Q 100,35 90,20" />
            </svg>
          </div>
        </div>

        <p className="text-sm md:text-base text-gray-300 font-sans tracking-wider max-w-xs mx-auto mt-6">
          Excited to see what I made for you?
        </p>

        <div className="flex gap-6 mt-8">
          <button
            onClick={onNext}
            className="px-8 py-3 bg-[#e2dfd8] hover:bg-white text-[#1a1a1a] rounded-full text-sm font-bold tracking-widest transition-all shadow-md transform hover:scale-105"
          >
            YES!
          </button>
          <button
            className="px-8 py-3 bg-[#e2dfd8] hover:bg-white text-[#1a1a1a] rounded-full text-sm font-bold tracking-widest transition-all shadow-md transform hover:scale-105"
          >
            NOOO!
          </button>
        </div>
      </motion.div>

    </div>
  );
}

export default Hero;
