import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandMoment } from './components/BrandMoment';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { SystemDiagram } from './components/SystemDiagram';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Setup global ScrollTrigger reveals
    const sections = gsap.utils.toArray<HTMLElement>('section');
    
    sections.forEach((section) => {
      const reveals = section.querySelectorAll('[data-reveal]');
      if (reveals.length === 0) return;
      
      gsap.fromTo(reveals, 
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          }
        }
      );
    });

    // Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden selection:bg-brand-accent selection:text-brand-bg">
      <div className="noise-overlay pointer-events-none"></div>
      
      <Navbar />
      <main>
        <Hero />
        <BrandMoment />
        <Services />
        <SystemDiagram />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
