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

  // Load and initialize the Calendly inline widget using the official JS API
  React.useEffect(() => {
    const checkAndInit = () => {
      const win = window as any;
      if (win.Calendly) {
        const container = document.getElementById("calendly-inline-container");
        if (container) {
          container.innerHTML = "";
        }
        win.Calendly.initInlineWidget({
          url: "https://calendly.com/izyanmiltex/30min",
          parentElement: container,
          prefill: {},
          pageSettings: {
            backgroundColor: "0c0f0f",
            textColor: "ffffff",
            primaryColor: "d4af37",
            hideLandingPageDetails: true,
            hideGdprBanner: true,
          }
        });

        // Ensure the generated iframe has no grey background and is styled correctly
        setTimeout(() => {
          const iframe = container?.querySelector("iframe");
          if (iframe) {
            iframe.style.border = "none";
            iframe.style.height = "100%";
            iframe.style.width = "100%";
          }
        }, 300);
      }
    };

    const win = window as any;
    if (win.Calendly) {
      checkAndInit();
    } else {
      const interval = setInterval(() => {
        if ((window as any).Calendly) {
          checkAndInit();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section id="spec-builder-section" className="py-20 md:py-32 bg-transparent text-white border-t border-white/5 relative overflow-hidden luxury-grid">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-3 block">
            Equestrian Samples Hub
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Claim Your Free Sample Now
          </h2>
          <p className="font-sans text-sm text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Choose your date and secure your 10-minute technical engineering alignment call. Handcrafted and express-shipped to your desk at zero obligation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Calendly Inline Widget Embed Container */}
          <div 
            id="calendly-inline-container" 
            className="w-full h-[1100px] bg-transparent border-0"
            style={{ border: "none" }}
          />
          
          {/* Micro NDA Guarantee */}
          <div className="mt-8 text-center">
            <p className="text-[11px] text-white/40 leading-relaxed font-light max-w-xl mx-auto">
              🛡️ Your designs and intellectual property are protected. Every booking triggers a mutual 2-way non-disclosure agreement before our alignment call begins.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
