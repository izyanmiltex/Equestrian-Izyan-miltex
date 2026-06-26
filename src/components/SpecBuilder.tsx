import React from "react";
import { Calendar, Sparkles } from "lucide-react";

interface SpecBuilderProps {
  preselectedProductId?: string | null;
  onResetPreselection?: () => void;
}

export default function SpecBuilder({ preselectedProductId, onResetPreselection }: SpecBuilderProps) {
  // In case showroom clicks and wants to scroll down
  React.useEffect(() => {
    if (preselectedProductId) {
      if (onResetPreselection) onResetPreselection();
      const element = document.getElementById("spec-builder-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [preselectedProductId, onResetPreselection]);

  return (
    <section id="spec-builder-section" className="py-20 md:py-32 bg-surface-container-lowest text-white border-t border-white/5 relative overflow-hidden luxury-grid">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-3 block">
            Equestrian Prototype Hub
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Claim Your Free Custom Prototype Run
          </h2>
          <p className="font-sans text-sm text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Choose your date and secure your 10-minute technical engineering alignment call. Handcrafted and express-shipped to your desk at zero obligation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          
          {/* Main Workspace Column - Calendly Embed Space */}
          <div className="bg-surface-container/40 p-6 md:p-10 border border-white/10 rounded-3xl shadow-2xl relative min-h-[600px] flex flex-col justify-center items-center text-center">
            {/* Visual ambient element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="w-full max-w-xl mx-auto flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 animate-pulse">
                <Calendar className="w-8 h-8" />
              </div>
              
              <h3 className="font-headline text-2xl font-bold uppercase tracking-wider text-white mb-3">
                Schedule Your Prototype Call
              </h3>
              
              <p className="text-xs text-white/50 uppercase tracking-widest font-mono mb-6">
                Direct Calendly Integration Space
              </p>
              
              <p className="text-sm text-white/70 font-light mb-8 leading-relaxed">
                Select your target date on the interactive calendar below to secure your complimentary sample run.
              </p>
              
              {/* This is the elegant space left to add the Calendly iframe or widget */}
              <div className="w-full bg-surface border border-dashed border-white/20 rounded-2xl p-10 flex flex-col items-center justify-center min-h-[350px] hover:border-primary/50 transition-colors group">
                <div className="p-4 rounded-xl bg-white/5 mb-4 group-hover:bg-primary/5 transition-colors">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-2">
                  [ Calendly Embed Code Goes Here ]
                </span>
                <span className="text-[10px] text-white/30 text-center max-w-sm leading-relaxed mb-6">
                  Replace this container with your Calendly inline embed HTML/JS code or iframe widget to activate live, seamless scheduling.
                </span>
                
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="px-6 py-3 bg-white/10 hover:bg-primary hover:text-black border border-white/10 hover:border-primary text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer text-white"
                >
                  Configure Calendly ↗
                </a>
              </div>
              
              {/* Micro NDA Guarantee */}
              <p className="text-[10px] text-white/40 leading-relaxed font-light mt-8">
                🛡️ Your designs and intellectual property are protected. Every booking triggers a mutual 2-way non-disclosure agreement before our alignment call begins.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
