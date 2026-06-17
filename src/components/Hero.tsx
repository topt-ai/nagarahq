import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// 14 circles distributed across the image bounds (objectBoundingBox: 0..1).
// Spread evenly so the reveal feels organic, not radial.
const REVEAL_CIRCLES = [
  { cx: 0.18, cy: 0.12 },
  { cx: 0.55, cy: 0.08 },
  { cx: 0.86, cy: 0.18 },
  { cx: 0.30, cy: 0.30 },
  { cx: 0.68, cy: 0.30 },
  { cx: 0.12, cy: 0.45 },
  { cx: 0.45, cy: 0.50 },
  { cx: 0.80, cy: 0.50 },
  { cx: 0.25, cy: 0.68 },
  { cx: 0.60, cy: 0.68 },
  { cx: 0.90, cy: 0.72 },
  { cx: 0.18, cy: 0.88 },
  { cx: 0.50, cy: 0.92 },
  { cx: 0.78, cy: 0.90 },
];

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<Array<SVGCircleElement | null>>([]);

  useEffect(() => {
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('.word');

      gsap.to(words, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.3
      });
    }

    if (illustrationRef.current) {
      gsap.fromTo(
        illustrationRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 0.4, ease: 'power1.out' }
      );
    }

    const circles = circleRefs.current.filter(Boolean) as SVGCircleElement[];
    if (circles.length) {
      gsap.to(circles, {
        attr: { r: 0.5 },
        duration: 1.2,
        ease: 'power2.out',
        stagger: 0.08,
        delay: 0.6,
      });
    }
  }, []);

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const line1 = "Built to run".split(" ");
  const line2 = "without you.".split(" ");

  return (
    <section className="relative min-h-[100dvh] flex items-end pt-32 pb-[80px] overflow-hidden">

      {/* clipPath definition — circles start at r=0, expand via GSAP to reveal the image */}
      <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="hero-reveal-clip" clipPathUnits="objectBoundingBox">
            {REVEAL_CIRCLES.map((c, i) => (
              <circle
                key={i}
                ref={(el) => { circleRefs.current[i] = el; }}
                cx={c.cx}
                cy={c.cy}
                r={0}
              />
            ))}
          </clipPath>
        </defs>
      </svg>

      {/* Illustration — transparent PNG, no frame, overflows bottom & right edges */}
      <div
        ref={illustrationRef}
        className="hero-illustration hidden lg:block absolute bottom-0 right-0 opacity-0 pointer-events-none"
        style={{ width: '42%', height: '100%', overflow: 'visible', background: 'transparent' }}
        aria-hidden="true"
      >
        <div
          style={{
            position: 'absolute',
            bottom: '-6%',
            right: '-4%',
            width: '105%',
            maxWidth: '680px',
            display: 'inline-block',
            overflow: 'hidden',
            background: 'transparent',
          }}
        >
          <img
            src="/assets/lonely-boy.png"
            alt=""
            style={{
              display: 'block',
              width: '100%',
              background: 'transparent',
              mixBlendMode: 'normal',
              clipPath: 'url(#hero-reveal-clip)',
              WebkitClipPath: 'url(#hero-reveal-clip)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
            }}
          />
          {/* Subtle cherry-blossom cast. Multiply against the black hero bg
              keeps transparent areas black; only the character tints rose. */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: '#DDA9AD',
              mixBlendMode: 'multiply',
              opacity: 0.15,
              pointerEvents: 'none',
              clipPath: 'url(#hero-reveal-clip)',
              WebkitClipPath: 'url(#hero-reveal-clip)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
            }}
          />
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 relative flex items-end justify-between">
        <div className="max-w-[640px] GSAP-reveal" data-reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-6">
            Websites &nbsp;&middot;&nbsp; Automations &nbsp;&middot;&nbsp; nagarahq.com
          </div>

          <h1
            ref={headlineRef}
            className="font-display italic text-brand-primary text-[48px] md:text-[88px] leading-[1.05] mb-6 flex flex-wrap"
          >
            <div className="w-full flex gap-[0.25em] mb-2">
              {line1.map((word, i) => (
                <span key={`l1-${i}`} className="inline-block overflow-hidden">
                  <span className="word inline-block translate-y-[32px] opacity-0">{word}</span>
                </span>
              ))}
            </div>
            <div className="w-full flex gap-[0.25em]">
              {line2.map((word, i) => (
                <span key={`l2-${i}`} className="inline-block overflow-hidden">
                  <span className="word inline-block translate-y-[32px] opacity-0">{word}</span>
                </span>
              ))}
            </div>
          </h1>

          <p className="font-sans font-light text-[18px] text-brand-muted max-w-[480px] mt-6 mb-10 leading-relaxed GSAP-reveal" data-reveal>
            We build websites that generate leads and systems that replace manual work. Both run on their own.
          </p>

          <div className="flex items-center gap-6 mt-10 GSAP-reveal" data-reveal>
            <button
              onClick={scrollToContact}
              className="rounded-full bg-brand-hover text-white font-sans font-medium text-[14px] px-[28px] py-[12px] transition-all duration-250 hover:bg-[#D4888E] hover:shadow-[0_0_20px_rgba(201,113,122,0.3)] cursor-pointer"
            >
              Book a call
            </button>
            <button
              onClick={scrollToWork}
              className="font-sans font-normal text-[14px] text-brand-accent hover:underline cursor-pointer transition-colors duration-250"
            >
              See our work →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
