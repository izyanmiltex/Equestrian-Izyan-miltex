import { useState } from "react";
import { MITIGATION_FACTORS } from "../data";
import { ShieldAlert, ShieldCheck, AlertTriangle, ChevronDown, ChevronUp, Bell } from "lucide-react";

interface RiskAssessmentProps {
  onStartCustomizer: () => void;
}

export default function RiskAssessment({ onStartCustomizer }: RiskAssessmentProps) {
  const [activeFactorId, setActiveFactorId] = useState(MITIGATION_FACTORS[0].id);

  const activeFactor = MITIGATION_FACTORS.find((f) => f.id === activeFactorId) || MITIGATION_FACTORS[0];

  const handleMobileToggle = (id: string) => {
    setActiveFactorId(activeFactorId === id ? "" : id);
  };

  return (
    <section id="risk-assessment" className="py-20 md:py-32 bg-surface-container-low text-white relative overflow-hidden luxury-grid">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-3 block">
              De-Risking Sourcing Risk
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
              Shift Your Entire Sourcing Risk To Our Wallet
            </h2>
          </div>
          <p className="font-sans text-sm text-white/50 max-w-sm font-light">
            Toggle the common defects and importing headaches below to see the rigorous engineering solutions we bake directly into your free physical prototypes.
          </p>
        </div>

        {/* 1. MOBILE RESPONSIVE ACCORDION LAYOUT (Optimized for CRO and High Engagement) */}
        <div className="lg:hidden flex flex-col gap-4">
          {MITIGATION_FACTORS.map((factor) => {
            const isExpanded = activeFactorId === factor.id;
            
            // Get custom display metric values for each card
            let statVal = "";
            let statLabel = "";
            if (factor.id === "fitment") {
              statVal = "100%";
              statLabel = "Anatomical Breed Conformity";
            } else if (factor.id === "quality") {
              statVal = "0";
              statLabel = "Defects Reported 4 Quarters";
            } else if (factor.id === "hardware") {
              statVal = "316";
              statLabel = "Stainless Steel Grade";
            } else if (factor.id === "delivery") {
              statVal = "27";
              statLabel = "Days Sourcing Delivery Guarantee";
            } else if (factor.id === "moq") {
              statVal = "-50%";
              statLabel = "Lower Minimum Capital Barrier";
            }

            return (
              <div 
                key={factor.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isExpanded 
                    ? "bg-surface-container border-primary shadow-xl shadow-primary/5" 
                    : "bg-surface-container/40 border-white/5"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => handleMobileToggle(factor.id)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-white/5"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-xl transition-colors ${
                      isExpanded ? "bg-primary text-on-primary" : "bg-white/5 text-white/60"
                    }`}>
                      {factor.id === "fitment" && <ShieldAlert className="w-4 h-4" />}
                      {factor.id === "quality" && <AlertTriangle className="w-4 h-4" />}
                      {factor.id === "hardware" && <ShieldAlert className="w-4 h-4" />}
                      {factor.id === "delivery" && <AlertTriangle className="w-4 h-4" />}
                      {factor.id === "moq" && <ShieldAlert className="w-4 h-4" />}
                    </div>
                    <span className={`text-xs uppercase font-bold tracking-[0.1em] ${
                      isExpanded ? "text-primary" : "text-white/80"
                    }`}>
                      {factor.painpoint}
                    </span>
                  </div>
                  <div>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-primary" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-white/40" />
                    )}
                  </div>
                </button>

                {/* Accordion Content */}
                {isExpanded && (
                  <div className="px-5 pb-6 pt-1 border-t border-white/5 bg-black/10 flex flex-col gap-4 animate-fade-in-up">
                    
                    {/* Sourcing Painpoint */}
                    <div className="p-4 rounded-xl bg-red-950/10 border border-red-500/10 flex gap-3">
                      <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-[10px] uppercase tracking-wider font-bold text-red-400 mb-1">
                          The Industry Painpoint
                        </h4>
                        <p className="text-xs text-white/70 font-light leading-relaxed">
                          {factor.cause}
                        </p>
                      </div>
                    </div>

                    {/* Sourcing Countermeasure */}
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex gap-3">
                      <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-[10px] uppercase tracking-wider font-bold text-primary mb-1">
                          The Izyan Countermeasure
                        </h4>
                        <p className="text-xs text-white/90 font-light leading-relaxed">
                          {factor.mitigation}
                        </p>
                      </div>
                    </div>

                    {/* Interactive Stat badge & CTA */}
                    <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-2xl font-bold text-primary">{statVal}</span>
                        <span className="text-[9px] uppercase tracking-wider text-white/50 leading-tight block">
                          {statLabel}
                        </span>
                      </div>
                      <span className="text-[10px] text-white/40 italic font-light">
                        *Free Alignment Phase
                      </span>
                    </div>

                    {/* Highly Targeted Inline CTA for Mobile Conversions */}
                    <div className="flex flex-col items-center gap-3 mt-2">
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
                )}
              </div>
            );
          })}
        </div>

        {/* 2. DESKTOP COMPARATIVE GRID LAYOUT (Preserved as is for desktop precision) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Pain Point Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <h4 className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold mb-2">
              Select Your Current Manufacturer Friction Point
            </h4>
            {MITIGATION_FACTORS.map((factor) => {
              const isSelected = factor.id === activeFactorId;
              return (
                <button
                  key={factor.id}
                  onClick={() => setActiveFactorId(factor.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                    isSelected
                      ? "bg-primary/10 border-primary shadow-[0_4px_20px_rgba(212,175,55,0.1)]"
                      : "bg-surface-container/40 border-white/5 hover:border-white/10 hover:bg-surface-container-high/60"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        isSelected ? "bg-primary text-on-primary" : "bg-white/5 text-white/50 group-hover:text-white"
                      }`}
                    >
                      {factor.id === "fitment" && <ShieldAlert className="w-4 h-4" />}
                      {factor.id === "quality" && <AlertTriangle className="w-4 h-4" />}
                      {factor.id === "hardware" && <ShieldAlert className="w-4 h-4" />}
                      {factor.id === "delivery" && <AlertTriangle className="w-4 h-4" />}
                      {factor.id === "moq" && <ShieldAlert className="w-4 h-4" />}
                    </div>
                    <div>
                      <span
                        className={`text-xs uppercase font-bold tracking-[0.1em] block ${
                          isSelected ? "text-primary" : "text-white/60 group-hover:text-white"
                        }`}
                      >
                        {factor.painpoint}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 -rotate-90 ${
                      isSelected ? "text-primary translate-x-1" : "text-white/20 group-hover:text-white/40"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column - Deep Mitigation Comparison Detail Panel */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container/60 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <ShieldCheck className="w-48 h-48 text-primary" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] bg-primary/20 text-primary border border-primary/30 rounded px-2.5 py-1 uppercase font-bold tracking-widest font-mono">
                    Analysis Mode
                  </span>
                  <span className="text-[10px] text-white/40 uppercase font-mono tracking-widest">
                    ID: MILTEX-{activeFactor.id.toUpperCase()}-QA
                  </span>
                </div>

                {/* Painpoint Description */}
                <div className="mb-6 p-4 rounded-xl bg-red-950/20 border border-red-500/10">
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-red-400 mb-1">
                        The Industry Painpoint
                      </h4>
                      <p className="text-sm text-white/70 font-light">
                        {activeFactor.cause}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Countermeasure Solution */}
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-primary text-on-primary flex-shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-primary mb-1">
                        The Izyan Countermeasure
                      </h4>
                      <p className="text-sm md:text-base text-white/90 font-light leading-relaxed">
                        {activeFactor.mitigation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Guarantee Stat */}
              <div className="mt-8 border-t border-white/5 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="font-mono text-3xl font-bold text-primary">
                    {activeFactor.id === "fitment" && "100%"}
                    {activeFactor.id === "quality" && "0"}
                    {activeFactor.id === "hardware" && "316"}
                    {activeFactor.id === "delivery" && "27"}
                    {activeFactor.id === "moq" && "-45%"}
                  </div>
                  <div className="text-[10px] text-white/50 uppercase font-bold tracking-widest leading-tight">
                    {activeFactor.id === "fitment" && "Anatomical Breed\nConformity Fit"}
                    {activeFactor.id === "quality" && "Defects Reported\nOver 4 Quarters"}
                    {activeFactor.id === "hardware" && "Stainless Steel\nHardware Grade"}
                    {activeFactor.id === "delivery" && "Days Sourcing\nDelivery Guarantee"}
                    {activeFactor.id === "moq" && "Average Minimum\nCapital Barrier"}
                  </div>
                </div>

                <div className="text-xs text-white/40 italic font-light">
                  *Baked directly into our free technical alignment phase.
                </div>
              </div>

              {/* Direct Call to Action (CRO Optimization) */}
              <div className="mt-8 border-t border-white/5 pt-6 flex flex-col items-center gap-4 relative z-10">
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

        </div>
      </div>
    </section>
  );
}
