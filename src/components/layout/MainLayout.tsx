
import * as React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Outlet, useLocation } from 'react-router-dom';

export function MainLayout() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = React.useState(location);
  const [transitionStage, setTransitionStage] = React.useState("fadeIn");
  
  // Smooth page transitions
  React.useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("fadeOut");
      setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("fadeIn");
        
        // Scroll to top on route change with smooth behavior
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 250); // Match this with the animation duration
    }
  }, [location, displayLocation]);
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <div 
          className={`transition-opacity duration-250 ease-smooth ${
            transitionStage === "fadeIn" ? "opacity-100" : "opacity-0"
          }`}
        >
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
