export function Contact() {
  return (
    <section id="contact" className="bg-brand-surface py-[120px]">
      <div className="w-full max-w-[800px] mx-auto px-6 md:px-12 text-center">

        <div className="GSAP-reveal" data-reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-6">
            Let's work together
          </div>
          <h2 className="font-display italic text-brand-primary text-[36px] md:text-[64px] leading-tight mb-6">
            Ready to build<br/>something that runs?
          </h2>
          <p className="font-sans font-light text-[18px] text-brand-muted max-w-[600px] mx-auto leading-relaxed mb-16 text-balance">
            Book a 30-minute call. No pitch, no pressure. Just a conversation about what you need.
          </p>
        </div>

        <div className="GSAP-reveal" data-reveal>
          {/* Cal.com embed goes here — replace with Cal embed script when domain is ready */}
          <div
            id="cal-embed"
            className="w-full min-h-[500px] bg-brand-bg border border-brand-border rounded-[16px] flex items-center justify-center p-8 mb-10"
          >
            <div className="text-center">
              <div className="w-[48px] h-[48px] border border-brand-border rounded-full flex items-center justify-center mx-auto mb-4 bg-brand-surface text-brand-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className="font-sans font-medium text-[15px] text-brand-primary mb-2">Schedule a Call</div>
              <div className="font-sans text-[13px] text-brand-muted">Calendar embed loading...</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <span className="font-sans font-light text-[14px] text-brand-muted">
              Prefer email? Reach us at
            </span>
            <a href="mailto:hello@nagarahq.com" className="font-sans font-normal text-[14px] text-brand-accent hover:underline transition-all">
              hello@nagarahq.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
