import { useState } from "react";
import { Phone, Rocket, Calendar, CheckSquare, Sparkles, Clipboard, ShieldCheck, Mail, Truck, Bell } from "lucide-react";

interface TimelineProps {
  onStartCustomizer: () => void;
}

export default function Timeline({ onStartCustomizer }: TimelineProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const toggleStep = (stepIdx: number) => {
    setActiveStep(activeStep === stepIdx ? null : stepIdx);
  };

  const steps = [
    {
      phase: 1,
      title: "01. Your Sizing Specs Review",
      period: "During Call",
      icon: <Clipboard className="w-5 h-5 text-primary" />,
      detailTitle: "Anatomical CAD Sizing Reviews",
      desc: "We look over your current design sketches, active tech packs, or best-selling retail patterns to determine necessary conformational tweaks such as custom wither clearance angles or girth curve offsets.",
      documents: ["Tech Pack Evaluation", "3D Breed Mesh Match", "Spine Contour Estimate"]
    },
    {
      phase: 1,
      title: "02. Material Sourcing Alignment",
      period: "During Call",
      icon: <Sparkles className="w-5 h-5 text-primary" />,
      detailTitle: "B2B Equestrian Sourcing Material & Hardware Swatches",
      desc: "Select from our vast tannery inventory of full-grain vegetable-tanned English hides, soft calfskin linings, heavy textile denier weights (up to 1680D), and marine-grade rustproof buckles.",
      documents: ["Leather Grade Certification", "Denier Weight Options", "Hardware Composition Specs"]
    },
    {
      phase: 1,
      title: "03. Sourcing Friction Audit",
      period: "During Call",
      icon: <Phone className="w-5 h-5 text-primary" />,
      detailTitle: "Factory countermeasure strategy",
      desc: "You flag your biggest headaches with your current overseas suppliers (such as stitching failures, loose binding, color bleeding, or delivery delays) so we bake counter-defensive stitching into your mock-ups.",
      documents: ["Manufacturer Failure Log", "QA Countermeasure Plan", "Moat Defense Sourcing"]
    },
    {
      phase: 2,
      title: "Step 01: Digital Spec Confirmation",
      period: "Within 48 Hours",
      icon: <Mail className="w-5 h-5 text-primary" />,
      detailTitle: "Production-ready blueprint sign-off",
      desc: "Our design house compiles our alignment call notes into a structured technical schematic PDF blueprint. Sourcing and engineering teams confirm details before raw cutting.",
      documents: ["Technical Blueprint PDF", "Signed Spec Matrix", "Estimated Delivery Schedule"]
    },
    {
      phase: 2,
      title: "Step 02: B2B Equestrian Sourcing Handcrafting",
      period: "Days 1 – 14",
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      detailTitle: "Tannery and workshop production",
      desc: "Craftsmen choose premium leather cutouts, hand-twist heavy waxed thread, and construct your actual physical mock-up from the agreed blueprints on our active factory floor.",
      documents: ["Raw Hide Selecting Checklist", "Stitching Quality Review", "Final QA Laser-Alignment Log"]
    },
    {
      phase: 2,
      title: "Step 03: Free Air-Express Delivery",
      period: "Days 15 – 21",
      icon: <Truck className="w-5 h-5 text-primary" />,
      detailTitle: "Express air shipping to your desk",
      desc: "We double-wrap your completed physical prototype and ship it directly to your corporate desk. Sourcing and custom brokers manage all clearing. Final invoice cost to you: $0.",
      documents: ["Express Priority Air Waybill", "Live DHL/FedEx Tracker Feed", "Zero-Cost Proforma Invoice"]
    }
  ];

  return (
    <section id="blueprint" className="py-20 md:py-32 bg-[#1B1A1A] text-white luxury-grid">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-3 block">
            Technical Alignment Journey
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
            The Sourcing Call Blueprint
          </h2>
          <p className="font-sans text-sm md:text-lg text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
            We value your professional time. This is a 10-minute technical alignment meeting with our core engineering team, not a high-pressure sales pitch. Click any phase below to reveal expected artifacts.
          </p>
        </div>

        {/* Phase Header 1 */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10 pb-4 border-b border-white/5 justify-center sm:justify-start">
            <Phone className="w-6 h-6 text-primary" />
            <h3 className="font-headline text-lg md:text-2xl font-bold uppercase tracking-widest text-primary">
              Phase 1: The 10-Minute Technical Call
            </h3>
          </div>

          {/* Phase 1 Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {steps.filter(s => s.phase === 1).map((step, idx) => {
              const actualIdx = idx;
              const isOpen = activeStep === actualIdx;
              return (
                <div
                  key={idx}
                  onClick={() => toggleStep(actualIdx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isOpen
                      ? "bg-primary/5 border-primary shadow-[0_4px_25px_rgba(212,175,55,0.1)]"
                      : "bg-surface-container/40 border-white/5 hover:border-white/15 hover:bg-surface-container/70"
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] uppercase font-bold font-mono tracking-widest text-primary">
                        {step.period}
                      </span>
                      <div className="p-2 rounded-lg bg-white/5">
                        {step.icon}
                      </div>
                    </div>
                    <h4 className="font-headline text-sm font-bold uppercase tracking-wide text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-white/60 font-light leading-relaxed line-clamp-3">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Phase Header 2 */}
          <div className="flex items-center gap-4 mb-10 pb-4 border-b border-white/5 justify-center sm:justify-start">
            <Rocket className="w-6 h-6 text-primary animate-pulse" />
            <h3 className="font-headline text-lg md:text-2xl font-bold uppercase tracking-widest text-primary">
              Phase 2: Post-Call Sourced Execution
            </h3>
          </div>

          {/* Phase 2 Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {steps.filter(s => s.phase === 2).map((step, idx) => {
              const actualIdx = idx + 3; // Shift index for proper matching
              const isOpen = activeStep === actualIdx;
              return (
                <div
                  key={idx}
                  onClick={() => toggleStep(actualIdx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isOpen
                      ? "bg-primary/5 border-primary shadow-[0_4px_25px_rgba(212,175,55,0.1)]"
                      : "bg-surface-container/40 border-white/5 hover:border-white/15 hover:bg-surface-container/70"
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] uppercase font-bold font-mono tracking-widest text-primary">
                        {step.period}
                      </span>
                      <div className="p-2 rounded-lg bg-white/5">
                        {step.icon}
                      </div>
                    </div>
                    <h4 className="font-headline text-sm font-bold uppercase tracking-wide text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-white/60 font-light leading-relaxed line-clamp-3">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expanded Detail Panel Display */}
          {activeStep !== null && (
            <div className="bg-surface p-6 md:p-8 rounded-2xl border border-primary/30 shadow-2xl relative overflow-hidden animate-fade-in mb-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-primary font-bold">
                    Active Blueprint Node: {steps[activeStep].period}
                  </span>
                  <h4 className="text-lg font-bold uppercase tracking-wider text-white mt-1">
                    {steps[activeStep].detailTitle}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveStep(null)}
                  className="text-white/40 hover:text-white text-xs uppercase tracking-widest font-bold font-mono"
                >
                  Close
                </button>
              </div>

              <p className="text-sm text-white/80 font-light mb-6 leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div>
                <h5 className="text-[10px] uppercase font-bold tracking-wider text-white/40 mb-3 font-mono">
                  Sourced Documentation / Deliverables:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {steps[activeStep].documents.map((doc, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/5 p-3 rounded-lg flex items-center gap-3">
                      <CheckSquare className="w-4 h-4 text-primary" />
                      <span className="text-xs text-white/90 font-light font-mono truncate">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Ultimate Moat Exclusivity Guarantee Card */}
          <div className="bg-gradient-to-r from-primary/5 to-transparent p-6 md:p-10 rounded-3xl border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8 mt-10">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-[10px] bg-primary/20 border border-primary/30 text-primary font-mono px-3 py-1 rounded uppercase font-bold tracking-widest inline-block mb-3">
                Guaranteed Moat
              </span>
              <h4 className="font-headline text-lg md:text-2xl font-bold uppercase tracking-tight text-white mb-2">
                2-Year Territorial Exclusivity Contract
              </h4>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                If the physical prototype aligns perfectly with your parameters, your brand qualifies for our territorial exclusivity arrangement. We secure your target markets so your competitive advantage remains locked under key.
              </p>
            </div>
            <div className="p-6 rounded-full bg-primary/10 border border-primary/20 text-primary flex-shrink-0">
              <ShieldCheck className="w-10 h-10 animate-pulse" />
            </div>
          </div>

          {/* Book my free prototype call CTA */}
          <div className="mt-16 flex flex-col items-center justify-center gap-4">
            <button
              onClick={onStartCustomizer}
              className="btn-shimmer text-on-primary cursor-pointer px-5 py-3.5 sm:py-4 font-headline text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] rounded-full transition-all duration-300 hover:scale-[1.03] shadow-2xl text-center flex items-center justify-center w-full max-w-[320px] sm:max-w-none sm:w-auto whitespace-nowrap mx-auto"
            >
              Book My Free Prototype Call →
            </button>
            <div className="flex items-center justify-center gap-1.5 text-white font-sans text-[10px] sm:text-xs uppercase tracking-[0.08em] whitespace-nowrap">
              <Bell className="w-3.5 h-3.5 text-primary shrink-0 animate-pulse" />
              <span className="shrink-0">Only 5 slots remaining for this month</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
