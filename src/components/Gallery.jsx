import { ArrowLeft } from 'lucide-react';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';

function Gallery({ onBack }) {
  // Using some placeholder images for the gallery
  const photos = [
    p5, p2, p3, p4, p1, p6
  ];

  return (
    <div className="flex flex-col min-h-screen p-8 max-w-5xl mx-auto">
      <button
        onClick={onBack}
        className="group flex items-center space-x-2 text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors w-fit mb-12"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span>Back</span>
      </button>

      <div className="space-y-4 mb-16">
        <h2 className="text-5xl md:text-6xl font-cursive text-white text-start">
          Our Memories
        </h2>
        <p className="text-start text-sm text-gray-400 max-w-md tracking-wide">
          A collection of moments frozen in time. Like stamps on the letters of our journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-fit mx-auto">
        {photos.map((url, i) => (
          <div key={i} className="postage-stamp transform hover:scale-105 transition-transform duration-500">
            <div className="postage-edge">
              <img
                src={url}
                alt={`Memory ${i + 1}`}
                className="w-full h-64 object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
