import { useState } from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import VideoPlayer from './components/VideoPlayer';
import Coupons from './components/Coupons';
import Letter from './components/Letter';

function App() {
  const [currentView, setCurrentView] = useState('hero');

  const renderView = () => {
    switch (currentView) {
      case 'hero':
        return <Hero onNext={() => setCurrentView('menu')} />;
      case 'menu':
        return <Menu onNavigate={setCurrentView} />;
      case 'gallery':
        return <Gallery onBack={() => setCurrentView('menu')} />;
      case 'video':
        return <VideoPlayer onBack={() => setCurrentView('menu')} />;
      case 'coupons':
        return <Coupons onBack={() => setCurrentView('menu')} />;
      case 'letter':
        return <Letter onHome={() => setCurrentView('hero')} />;
      default:
        return <Hero onNext={() => setCurrentView('menu')} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f4f4f5] transition-all duration-500 ease-in-out">
      {renderView()}
    </div>
  );
}

export default App;
