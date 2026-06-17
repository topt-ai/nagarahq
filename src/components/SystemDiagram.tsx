import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Node = { id: string; label: string; sub: string; x: number; y: number };

const NODES: Node[] = [
  { id: 'lead',  label: 'Lead capture',  sub: 'form / chat',   x: 140,  y: 250 },
  { id: 'ai',    label: 'AI qualifier',  sub: 'classify',      x: 420,  y: 110 },
  { id: 'email', label: 'Email engine',  sub: 'sequence',      x: 690,  y: 300 },
  { id: 'crm',   label: 'CRM sync',      sub: 'pipeline',      x: 940,  y: 130 },
  { id: 'cal',   label: 'Calendar',      sub: 'book / hold',   x: 1080, y: 350 },
];

// Edges defined as straight lines; the path string is what packets ride on.
const EDGES: { from: string; to: string; delay: number; dur: number }[] = [
  { from: 'lead',  to: 'ai',    delay: 0,   dur: 3.2 },
  { from: 'ai',    to: 'email', delay: 0.6, dur: 3.6 },
  { from: 'ai',    to: 'crm',   delay: 1.4, dur: 4.0 },
  { from: 'email', to: 'crm',   delay: 2.2, dur: 3.4 },
  { from: 'crm',   to: 'cal',   delay: 1.8, dur: 2.8 },
  { from: 'email', to: 'cal',   delay: 3.0, dur: 4.2 },
];

const nodeById = (id: string) => NODES.find((n) => n.id === id)!;

export function SystemDiagram() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );

      gsap.fromTo(
        '.system-diagram-svg',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          ease: 'power1.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-bg py-[120px]">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">

        <div ref={headRef} className="mb-12 opacity-0">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-4">
            Live system
          </div>
          <h2 className="font-display font-normal text-brand-primary text-[48px] leading-tight">
            Your stack, awake at&nbsp;2&thinsp;AM.
          </h2>
          <p className="font-sans font-light text-[16px] text-brand-muted mt-6 max-w-[520px] leading-[1.6]">
            A real automation we ship — leads come in, get classified, routed, replied to, and booked. You sleep through it.
          </p>
        </div>

        <div className="system-diagram-svg w-full opacity-0">
          <svg
            viewBox="0 0 1200 480"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="auto"
            style={{ display: 'block', maxHeight: '480px' }}
          >
            <defs>
              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E8B4B8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#E8B4B8" stopOpacity="0" />
              </radialGradient>
              <filter id="packetGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" />
              </filter>
            </defs>

            {/* Edges — thin lines */}
            {EDGES.map((e, i) => {
              const a = nodeById(e.from);
              const b = nodeById(e.to);
              const pathId = `edge-${i}`;
              const d = `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
              return (
                <g key={pathId}>
                  <path
                    id={pathId}
                    d={d}
                    stroke="#1E1E1E"
                    strokeWidth="1"
                    fill="none"
                  />
                  {/* Glow trail of packet */}
                  <circle r="6" fill="#E8B4B8" opacity="0.35" filter="url(#packetGlow)">
                    <animateMotion
                      dur={`${e.dur}s`}
                      begin={`${e.delay}s`}
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                  {/* Packet */}
                  <circle r="3" fill="#E8B4B8">
                    <animateMotion
                      dur={`${e.dur}s`}
                      begin={`${e.delay}s`}
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                </g>
              );
            })}

            {/* Nodes */}
            {NODES.map((n) => (
              <g key={n.id}>
                {/* Soft halo */}
                <circle cx={n.x} cy={n.y} r="46" fill="url(#nodeGlow)" />
                {/* Outer ring */}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="22"
                  fill="#0A0A0A"
                  stroke="#2A2A2A"
                  strokeWidth="1"
                />
                {/* Pulsing inner dot */}
                <circle cx={n.x} cy={n.y} r="4" fill="#E8B4B8">
                  <animate
                    attributeName="opacity"
                    values="1;0.35;1"
                    dur="2.4s"
                    begin={`${(n.x + n.y) % 3}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Label */}
                <text
                  x={n.x}
                  y={n.y + 48}
                  textAnchor="middle"
                  fill="#F5F0EE"
                  fontFamily="DM Sans, sans-serif"
                  fontSize="13"
                  fontWeight="400"
                >
                  {n.label}
                </text>
                <text
                  x={n.x}
                  y={n.y + 66}
                  textAnchor="middle"
                  fill="#6B6B6B"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="10"
                  letterSpacing="0.08em"
                >
                  {n.sub.toUpperCase()}
                </text>
              </g>
            ))}
          </svg>
        </div>

      </div>
    </section>
  );
}
