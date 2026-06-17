import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { cn } from '@/src/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  
  // States for counter
  const [score, setScore] = useState(0);
  const [loadTime, setLoadTime] = useState(2.0);
  const [customCode, setCustomCode] = useState(0);
  
  useEffect(() => {
    if (!card1Ref.current) return;
    
    ScrollTrigger.create({
      trigger: card1Ref.current,
      start: "top 85%",
      onEnter: () => {
        // Run counters
        gsap.to({ val: 0 }, {
          val: 98,
          duration: 1.5,
          ease: 'power3.out',
          onUpdate: function() {
            setScore(Math.floor(this.targets()[0].val));
          }
        });
        
        gsap.to({ val: 5 }, {
          val: 1.2,
          duration: 1.5,
          ease: 'power3.out',
          onUpdate: function() {
            setLoadTime(Number(this.targets()[0].val.toFixed(1)));
          }
        });
        
        gsap.to({ val: 0 }, {
          val: 100,
          duration: 1.5,
          ease: 'power3.out',
          onUpdate: function() {
            setCustomCode(Math.floor(this.targets()[0].val));
          }
        });
      },
      once: true
    });
  }, []);

  return (
    <section id="services" ref={sectionRef} className="bg-brand-bg py-[120px]">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">
        
        <div className="mb-12 GSAP-reveal" data-reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-4">
            What we build
          </div>
          <h2 className="font-display font-normal text-brand-primary text-[48px] leading-tight">
            Two services.<br/>No filler.
          </h2>
        </div>
        
        <hr className="border-t border-brand-border my-12 GSAP-reveal" data-reveal />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div 
            ref={card1Ref}
            className="group relative bg-transparent border border-brand-border hover:border-[#2A2A2A] rounded-[16px] p-6 md:p-10 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 GSAP-reveal" 
            data-reveal
          >
            <div className="font-mono text-[11px] text-brand-muted mb-4">01</div>
            <h3 className="font-display text-[36px] text-brand-primary mb-4">Websites</h3>
            <p className="font-sans font-light text-[16px] text-brand-muted leading-[1.7] mb-8">
              Custom-built sites that look serious, load fast, and show up on Google. No templates. No page builders. Code that does what it's supposed to do.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-10">
              <Tag label="React" />
              <Tag label="Vite" />
              <Tag label="Tailwind" />
              <Tag label="SEO" />
              <Tag label="Vercel" />
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-border/30">
              <div>
                <div className="font-display text-[32px] text-brand-accent mb-1">{score}</div>
                <div className="font-sans font-light text-[12px] text-brand-muted">PageSpeed score</div>
              </div>
              <div>
                <div className="font-display text-[32px] text-brand-accent mb-1">&lt; {loadTime < 2 ? '2' : loadTime}s</div>
                <div className="font-sans font-light text-[12px] text-brand-muted">Load time</div>
              </div>
              <div>
                <div className="font-display text-[32px] text-brand-accent mb-1">{customCode}%</div>
                <div className="font-sans font-light text-[12px] text-brand-muted">Custom code</div>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div 
            className="group relative bg-transparent border border-brand-border hover:border-[#2A2A2A] rounded-[16px] p-6 md:p-10 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 GSAP-reveal" 
            data-reveal
          >
            <div className="font-mono text-[11px] text-brand-muted mb-4">02</div>
            <h3 className="font-display text-[36px] text-brand-primary mb-4">Systems</h3>
            <p className="font-sans font-light text-[16px] text-brand-muted leading-[1.7] mb-8">
              Automations, AI agents, and custom workflows that replace the work your team does manually. Built once, running always.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-10">
              <Tag label="n8n" />
              <Tag label="AI Agents" />
              <Tag label="CRM" />
              <Tag label="Zapier" />
              <Tag label="APIs" />
            </div>
            
            <TypewriterEffect />
          </div>
          
        </div>
      </div>
    </section>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <div className="font-mono text-[11px] border border-brand-border text-brand-muted rounded-full px-[12px] py-[4px]">
      {label}
    </div>
  );
}

function TypewriterEffect() {
  const lines = [
    "> Lead qualified at 2:14 AM",
    "> Follow-up email sent automatically",
    "> CRM updated, no action needed",
    "> Appointment booked while you slept"
  ];
  
  const [displayText, setDisplayText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (charIndex < lines[lineIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev + lines[lineIndex].charAt(charIndex));
          setCharIndex(c => c + 1);
        }, 40); // typing speed
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setVisibleLines(prev => [...prev, lines[lineIndex]]);
          setDisplayText("");
          setCharIndex(0);
          
          if (lineIndex < lines.length - 1) {
            setLineIndex(l => l + 1);
            setIsTyping(true);
          } else {
            // Reset after a pause
            setTimeout(() => {
              setVisibleLines([]);
              setLineIndex(0);
              setIsTyping(true);
            }, 3000);
          }
        }, 800); // pause at end of line
      }
    }
    
    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, lineIndex, lines]);

  return (
    <div className="pt-6 border-t border-brand-border/30 h-[140px] relative">
      <div className="flex items-center gap-2 mb-4 absolute top-6 right-0">
        <div className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse"></div>
        <div className="font-mono text-[10px] uppercase text-[#4ADE80]">Live</div>
      </div>
      
      <div className="font-mono text-[13px] text-brand-accent leading-relaxed flex flex-col pt-1">
        {visibleLines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        {lineIndex < lines.length && (
          <div className="flex whitespace-pre-wrap">
            <span>{displayText}</span>
            <span className="w-2 bg-brand-accent animate-pulse inline-block ml-[2px] h-[15px] self-center"></span>
          </div>
        )}
      </div>
    </div>
  );
}
