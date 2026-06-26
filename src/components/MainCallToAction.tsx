import React from "react";
import { Sparkles, Calendar, Bell } from "lucide-react";

interface MainCallToActionProps {
  onStartCustomizer: () => void;
}

export default function MainCallToAction({ onStartCustomizer }: MainCallToActionProps) {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-surface to-background text-white relative overflow-hidden border-t border-b border-white/5">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-[0.25em] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Zero-Cost Sourcing Run
        </div>
        
        <h2 className="font-headline text-3xl md:text-6xl font-bold uppercase tracking-tight text-white max-w-4xl mx-auto mb-6 leading-[1.1]">
          Ready to eliminate your <br className="hidden md:block" />
          sourcing overhead?
        </h2>
        
        <p className="font-sans text-sm md:text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Get complete material grade certification, hand-stitched premium samples, and air-freight delivery straight to your office table with absolute skin in the game.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            onClick={onStartCustomizer}
            className="btn-shimmer text-on-primary cursor-pointer px-5 py-3.5 sm:py-4 font-headline text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] rounded-full transition-all duration-300 hover:scale-[1.03] shadow-2xl text-center flex items-center justify-center w-full max-w-[320px] sm:max-w-none sm:w-auto whitespace-nowrap mx-auto"
          >
            Book My Free Prototype Call →
          </button>
          
          <div className="flex items-center justify-center gap-1.5 text-white font-sans text-[10px] sm:text-xs uppercase tracking-[0.08em] whitespace-nowrap mt-4">
            <Bell className="w-3.5 h-3.5 text-primary shrink-0 animate-pulse" />
            <span className="shrink-0">Only 5 slots remaining for this month</span>
          </div>
        </div>
      </div>
    </section>
  );
}
