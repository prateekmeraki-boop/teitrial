import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './components/layout/NavBar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import Contact from './pages/Contact';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ProjectsPage from './pages/Projects';

function App() {
  const location = useLocation();
  const hash = location.hash.slice(1);

  // Scroll to testimonials when hash is testimonials
  useEffect(() => {
    if (hash === 'testimonials') {
      setTimeout(() => {
        const element = document.getElementById('testimonials');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />
      <main className="flex-1">
        {hash === 'contact' && <Contact />}
        {hash === 'about' && <AboutPage />}
        {hash === 'services' && <ServicesPage />}
        {hash === 'projects' && <ProjectsPage />}
        {(hash === 'testimonials' || !hash || hash === 'home') && (
          <>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Testimonials />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
