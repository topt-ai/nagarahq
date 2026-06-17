export function Work() {
  return (
    <section id="work" className="bg-brand-bg py-[120px]">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">
        
        <div className="mb-12 GSAP-reveal" data-reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-4">
            Selected Work
          </div>
          <h2 className="font-display font-normal text-brand-primary text-[48px] leading-tight">
            Built for real businesses.
          </h2>
        </div>
        
        {/* Featured Project Card */}
        <div className="bg-brand-surface border border-brand-border rounded-[20px] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center GSAP-reveal" data-reveal>
          
          {/* Left Column */}
          <div className="flex flex-col">
            <div className="font-mono text-[11px] text-brand-muted mb-6 uppercase tracking-[0.05em]">
              Client Project &middot; 2024
            </div>
            
            <h3 className="font-display text-[36px] text-brand-primary mb-6">
              Marcus Realty
            </h3>
            
            <p className="font-sans font-light text-[16px] text-brand-muted max-w-[400px] mb-8 leading-[1.6]">
              A real estate agent site with a live listings portal, agent CRM, and Google Sheet integration. Listings update without touching the code.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-10">
              <span className="font-mono text-[11px] border border-brand-border text-brand-muted rounded-full px-[12px] py-[4px]">React</span>
              <span className="font-mono text-[11px] border border-brand-border text-brand-muted rounded-full px-[12px] py-[4px]">Vite</span>
              <span className="font-mono text-[11px] border border-brand-border text-brand-muted rounded-full px-[12px] py-[4px]">Clerk Auth</span>
              <span className="font-mono text-[11px] border border-brand-border text-brand-muted rounded-full px-[12px] py-[4px]">Google Sheets</span>
              <span className="font-mono text-[11px] border border-brand-border text-brand-muted rounded-full px-[12px] py-[4px]">n8n</span>
            </div>
            
            <div>
              <a href="#" className="font-sans font-normal text-[14px] text-brand-accent hover:underline transition-all">
                View live site →
              </a>
            </div>
          </div>
          
          {/* Right Column - Mockup (Hidden on mobile) */}
          <div className="hidden lg:block w-full">
            <div className="bg-[#0A0B10] rounded-[12px] border border-brand-border overflow-hidden shadow-2xl flex flex-col h-[400px]">
              
              {/* Browser Chrome */}
              <div className="bg-[#15161C] border-b border-brand-border/50 px-4 py-3 flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F56]"></div>
                  <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-[10px] h-[10px] rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="bg-[#0A0B10] px-4 py-1.5 rounded-md mx-auto text-center w-full max-w-[200px] font-mono text-[10px] text-brand-muted">
                  marcusrealty.com
                </div>
                <div className="w-12"></div> {/* Spacer for balance */}
              </div>
              
              {/* Mockup Canvas */}
              <div className="bg-[#050814] flex-1 p-6 flex flex-col gap-6 relative overflow-hidden">
                {/* Nav dummy */}
                <div className="flex justify-between items-center w-full">
                  <div className="w-8 h-8 rounded-sm bg-[#C9A84C]"></div>
                  <div className="flex gap-4">
                    <div className="w-8 h-2 rounded-full bg-[#1E2338]"></div>
                    <div className="w-8 h-2 rounded-full bg-[#1E2338]"></div>
                    <div className="w-12 h-2 rounded-full bg-[#C9A84C]/80"></div>
                  </div>
                </div>
                
                {/* Hero dummy */}
                <div className="mt-4">
                  <div className="w-[60%] h-6 bg-[#1A1F35] rounded-sm mb-3"></div>
                  <div className="w-[45%] h-6 bg-[#1A1F35] rounded-sm mb-6"></div>
                  <div className="w-[30%] h-2 bg-[#C9A84C]/50 rounded-full mb-2"></div>
                  <div className="w-[25%] h-2 bg-[#C9A84C]/50 rounded-full mb-8"></div>
                </div>
                
                {/* Layout dummy */}
                <div className="grid grid-cols-3 gap-4 h-full">
                  <div className="bg-[#0F1425] rounded-md border border-[#1A1F35] flex flex-col">
                    <div className="h-[100px] bg-[#141A2D] w-full rounded-t-md"></div>
                    <div className="p-3">
                      <div className="w-full h-2 bg-[#1E2338] rounded-full mb-2"></div>
                      <div className="w-2/3 h-2 bg-[#1E2338] rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-[#0F1425] rounded-md border border-[#1A1F35] flex flex-col">
                    <div className="h-[100px] bg-[#141A2D] w-full rounded-t-md"></div>
                    <div className="p-3">
                      <div className="w-full h-2 bg-[#1E2338] rounded-full mb-2"></div>
                      <div className="w-3/4 h-2 bg-[#1E2338] rounded-full mb-2"></div>
                      <div className="w-1/2 h-2 bg-[#C9A84C]/60 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-[#0F1425] rounded-md border border-[#1A1F35] flex flex-col">
                    <div className="h-[100px] bg-[#141A2D] w-full rounded-t-md"></div>
                    <div className="p-3">
                      <div className="w-full h-2 bg-[#1E2338] rounded-full mb-2"></div>
                      <div className="w-4/5 h-2 bg-[#1E2338] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Decorative glow */}
                <div className="absolute -top-[100px] -right-[100px] w-[300px] h-[300px] bg-[#C9A84C] blur-[120px] rounded-full opacity-10 pointer-events-none"></div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
