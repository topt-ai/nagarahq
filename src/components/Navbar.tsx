import { useEffect, useState } from 'react';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Lenis handles the smooth scroll when native scrollIntoView is called, 
      // or we can use lenis directly if we pass it via context, but lenis syncs with native scroll
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] items-center px-4 py-2 flex gap-8',
        scrolled
          ? 'bg-[#111111]/85 backdrop-blur-[12px] border border-brand-border'
          : 'bg-transparent border border-transparent'
      )}
    >
      <div
        className="text-[16px] tracking-[0.04em] text-brand-primary whitespace-nowrap"
        style={{ fontFamily: '"Shippori Mincho", "DM Serif Display", serif', fontWeight: 500 }}
      >
        Nagara HQ
      </div>
      <div className="flex items-center gap-6">
        <button 
          onClick={() => scrollToSection('work')}
          className="font-sans font-normal text-[14px] text-brand-muted hover:text-brand-primary transition-colors duration-250 cursor-pointer"
        >
          Work
        </button>
        <button 
          onClick={() => scrollToSection('services')}
          className="font-sans font-normal text-[14px] text-brand-muted hover:text-brand-primary transition-colors duration-250 cursor-pointer"
        >
          Services
        </button>
      </div>
      <button 
        onClick={() => scrollToSection('contact')}
        className="rounded-full bg-brand-hover text-white font-sans font-medium text-[13px] px-[20px] py-[8px] transition-all duration-250 hover:bg-[#D4888E] hover:shadow-[0_0_20px_rgba(201,113,122,0.3)] whitespace-nowrap cursor-pointer"
      >
        Book a call
      </button>
    </nav>
  );
}
