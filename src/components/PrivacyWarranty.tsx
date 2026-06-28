import { ArrowLeft, ShieldAlert, Award, FileLock2, HelpCircle } from "lucide-react";

interface PrivacyWarrantyProps {
  onBack: () => void;
}

export default function PrivacyWarranty({ onBack }: PrivacyWarrantyProps) {
  const warrantyPillars = [
    {
      title: "180-Day Structural Guarantee",
      subtitle: "Sole Separation & Bond Failures",
      desc: "If any outsole delaminates or separates from the upper leather under standard industrial working conditions within 180 days, we issue a 100% credit or direct standard replacement with zero replacement costs."
    },
    {
      title: "Mutual NDA Integration",
      subtitle: "Absolute IP Exclusivity",
      desc: "All custom shoe molds, bespoke fitment modifications, outsole tread prints, and package brand stamp files remain 100% exclusive. We sign rigid mutual international NDAs prior to physical sample milling."
    },
    {
      title: "Leather Tearing Protection",
      subtitle: "High-Tensile Raw Material Bond",
      desc: "Our leather selection is guaranteed against structural surface cracking and fiber tearing. Full batch replacement is provided in the rare event of leather structural grain collapse during manufacturing."
    },
    {
      title: "Pre-Shipment Dimensional QC",
      subtitle: "Zero-Variance Fitment Guarantee",
      desc: "Each boot size is checked against digital CAD master files via electronic laser calibration. Fitment is guaranteed to map exactly within standard international sizing tolerances (±0.5mm deviation ceiling)."
    }
  ];

  return (
    <div className="bg-background min-h-screen text-on-background pt-36 md:pt-44 pb-16 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="border-b border-white/10 pb-8 mb-12">
          <div className="flex items-center gap-3 text-primary mb-3">
            <FileLock2 className="w-6 h-6 animate-pulse" />
            <span className="font-mono text-xs uppercase font-bold tracking-[0.25em]">Quality Exclusivity</span>
          </div>
          <h1 className="font-headline text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            Intellectual Privacy <span className="text-primary-container">&amp; Warranty Protection</span>
          </h1>
          <p className="text-white/60 font-sans text-sm md:text-base max-w-3xl mt-4 leading-relaxed font-light">
            Sourcing industrial footwear globally requires absolute certainty. Izyan Miltex protects your custom designs, provides legally binding non-disclosure protection, and guarantees real physical endurance.
          </p>
        </div>

        {/* Section 1: The Four Pillars */}
        <div className="mb-16">
          <h2 className="font-headline text-xl md:text-2xl font-bold uppercase tracking-wide text-white mb-8 flex items-center gap-2">
            <span className="text-primary font-mono">01.</span> Enforceable Warranty &amp; Exclusivity Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {warrantyPillars.map((pillar, idx) => (
              <div key={idx} className="bg-surface-container/30 border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary/20 group-hover:bg-primary transition-all" />
                <h3 className="text-white font-headline text-lg font-bold uppercase mb-1">{pillar.title}</h3>
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-primary mb-3 block">{pillar.subtitle}</span>
                <p className="text-white/50 text-xs md:text-sm font-light leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: NDA Verification & Legal Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 bg-surface-container/20 border border-white/5 rounded-2xl p-8">
            <h3 className="text-white font-headline text-lg font-bold uppercase mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Standard Legal NDA Protocol
            </h3>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed font-light mb-4">
              Our standard mutual Non-Disclosure Agreement (NDA) is governed by international trade regulations and is active from day one of sample configuration. We strictly guarantee:
            </p>
            <ul className="space-y-3 text-xs text-white/50">
              <li className="flex items-start gap-2.5">
                <span className="text-primary mt-1">✓</span>
                <span>All CAD assets, blueprint PDFs, and custom raw leather selection requirements are stored on isolated, offline-secured engineering directories.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary mt-1">✓</span>
                <span>Your exact company branding dies, debossing molds, and custom printed packaging runs are locked under physical key access and destroyed on program termination.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary mt-1">✓</span>
                <span>We never showcase customized client-labeled products in public showrooms or trade decks without express, written permission.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 bg-surface-container/40 border border-white/5 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <h3 className="text-white font-headline text-lg font-bold uppercase mb-4 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-primary" />
              Resolution Timeline
            </h3>
            <p className="text-white/60 text-xs leading-relaxed font-light mb-4">
              In the highly unlikely event of structural material or quality discrepancy, we prioritize resolution through a standard fast-track framework:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <div className="text-[10px] uppercase font-mono font-bold text-white tracking-widest">Phase 1: Claim Lodged (24 Hours)</div>
                <p className="text-[11px] text-white/40 font-light mt-0.5">Distributor provides direct batch code and detailed photos of the affected material/sole.</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="text-[10px] uppercase font-mono font-bold text-white tracking-widest">Phase 2: Laboratory Review (48 Hours)</div>
                <p className="text-[11px] text-white/40 font-light mt-0.5">Tannery engineering team reviews physical stresses to isolate chemical vs structural failure points.</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="text-[10px] uppercase font-mono font-bold text-white tracking-widest">Phase 3: Dispatch & Credit (72 Hours)</div>
                <p className="text-[11px] text-white/40 font-light mt-0.5">Replacement boots are packaged and loaded for priority logistics dispatch, or a direct account credit is issued.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Call to Action Area */}
        <div className="bg-gradient-to-r from-primary/10 via-primary-container/5 to-transparent border border-primary/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-primary">Pre-Production NDA Request</span>
            </div>
            <h3 className="text-white font-headline text-lg md:text-xl font-bold uppercase">Ready to review and sign our standard NDA?</h3>
            <p className="text-white/60 text-xs md:text-sm mt-1 leading-relaxed font-light">
              Submit your company details during our customizer call or contact Tehmeena directly to execute a mutual Non-Disclosure Agreement.
            </p>
          </div>
          <button
            onClick={onBack}
            className="px-6 py-3.5 bg-primary hover:bg-primary-container text-on-primary font-headline text-xs font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-300 shadow-xl shrink-0 cursor-pointer"
          >
            Review Custom Terms
          </button>
        </div>

      </div>
    </div>
  );
}
