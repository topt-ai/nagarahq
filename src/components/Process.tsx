export function Process() {
  return (
    <section className="bg-brand-bg py-[120px]">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">
        
        <div className="mb-16 GSAP-reveal" data-reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-4">
            The Process
          </div>
          <h2 className="font-display font-normal text-brand-primary text-[48px] leading-tight">
            Simple from day one.
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-12 md:gap-0 relative">
          
          {/* Connector Line Desktop */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-[#1E1E1E] z-0"></div>
          {/* Connector Line Mobile */}
          <div className="block md:hidden absolute left-[30px] top-[40px] bottom-[40px] w-[1px] bg-[#1E1E1E] z-0"></div>
          
          {/* Step 1 */}
          <div className="flex-1 px-0 md:px-6 relative z-10 GSAP-reveal" data-reveal pl-12 md:pl-0>
            <div className="font-mono text-[13px] text-[#1E1E1E] mb-6 hidden md:block bg-brand-bg w-max px-2 mx-auto">01</div>
            <div className="font-mono text-[13px] text-[#1E1E1E] mb-2 md:hidden absolute left-0 top-1 bg-brand-bg py-2">01</div>
            
            <h3 className="font-sans font-medium text-[20px] text-brand-primary mb-4 md:text-center">We talk</h3>
            <p className="font-sans font-light text-[15px] text-brand-muted leading-[1.6] md:text-center text-balance mx-auto">
              One call. You tell us what's broken or what's missing. We tell you what we'd build and what it would cost.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="flex-1 px-0 md:px-6 relative z-10 GSAP-reveal" data-reveal pl-12 md:pl-0>
            <div className="font-mono text-[13px] text-[#1E1E1E] mb-6 hidden md:block bg-brand-bg w-max px-2 mx-auto">02</div>
            <div className="font-mono text-[13px] text-[#1E1E1E] mb-2 md:hidden absolute left-0 top-1 bg-brand-bg py-2">02</div>
            
            <h3 className="font-sans font-medium text-[20px] text-brand-primary mb-4 md:text-center">We build</h3>
            <p className="font-sans font-light text-[15px] text-brand-muted leading-[1.6] md:text-center text-balance mx-auto">
              Fast turnaround. You get a working site or system, not a deck of wireframes and a three-month timeline.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="flex-1 px-0 md:px-6 relative z-10 GSAP-reveal" data-reveal pl-12 md:pl-0>
            <div className="font-mono text-[13px] text-[#1E1E1E] mb-6 hidden md:block bg-brand-bg w-max px-2 mx-auto">03</div>
            <div className="font-mono text-[13px] text-[#1E1E1E] mb-2 md:hidden absolute left-0 top-1 bg-brand-bg py-2">03</div>
            
            <h3 className="font-sans font-medium text-[20px] text-brand-primary mb-4 md:text-center">It runs</h3>
            <p className="font-sans font-light text-[15px] text-brand-muted leading-[1.6] md:text-center text-balance mx-auto">
              After delivery, your site ranks and your systems work. You don't manage them. That's the point.
            </p>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
