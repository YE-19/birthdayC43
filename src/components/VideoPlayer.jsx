import { ArrowLeft } from 'lucide-react';

function VideoPlayer({ onBack }) {
  return (
    <div className="flex flex-col min-h-screen p-8 max-w-4xl mx-auto items-center justify-center">
      <div className="w-full flex justify-start mb-12 absolute top-8 left-8">
        <button
          onClick={onBack}
          className="group flex items-center space-x-2 text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors w-fit"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </button>
      </div>

      <div className="space-y-6 mb-12 text-center">
        <h2 className="text-5xl md:text-6xl font-cursive text-white">
          This Song Is For You
        </h2>
        <p className="text-center text-sm text-gray-400 max-w-md mx-auto tracking-wide">
          Listen to the melody that reminds me of our most beautiful moments together.
        </p>
      </div>

      <div className="w-full max-w-2xl mx-auto lace-frame bg-[#1a1a1a]">
        <div className="relative w-full pb-[56.25%] overflow-hidden bg-black rounded">
          <iframe
            className="absolute top-0 left-0 w-full h-full filter grayscale hover:grayscale-0 transition-all duration-1000"
            src="https://www.youtube.com/embed/8PTDv_szmL0?si=1BMJme9eny1Jc5Ud"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
