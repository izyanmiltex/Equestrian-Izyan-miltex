import { ArrowLeft, HardHat, Factory, Compass, Users } from "lucide-react";

interface ManufacturingDeckProps {
  onBack: () => void;
}

export default function ManufacturingDeck({ onBack }: ManufacturingDeckProps) {
  const facilityStats = [
    { label: "Monthly Output Capacity", value: "50,000 Pairs", detail: "Fully scaleable to 75,000 pairs with secondary shifts" },
    { label: "Tannery Floor Space", value: "120,000 Sq Ft", detail: "State-of-the-art facility located in Kanpur Industrial Zone" },
    { label: "DESMA Injection Molders", value: "3 Active Lines", detail: "German-engineered dual density PU/Rubber direct injection" },
    { label: "Water Treatment Plant", value: "100% ZLD", detail: "Zero Liquid Discharge recycling 350,000 liters daily" },
  ];

  const manufacturingSteps = [
    {
      step: "01",
      title: "Raw Hide Selection & Grading",
      desc: "Hides are sourced from certified ethical livestock providers, inspected under physical guidelines, and sorted strictly for thickness (2.0mm - 2.2mm requirement) and pristine grain structure."
    },
    {
      step: "02",
      title: "Eco-Chemical Tanning Process",
      desc: "Tanning is executed in computerized drums utilizing premium Chrome-III or Chrome-Free organic extracts, resulting in water-repellent, high-breathability upper leather."
    },
    {
      step: "03",
      title: "Laser Cutting & Computerized Stitching",
      desc: "Patterns are cut using automated Swiss laser tables to ensure flawless millimeter alignment, then stitched with heavy-duty bonded nylon fibers using computer-guided sewing machines."
    },
    {
      step: "04",
      title: "DESMA Direct Injection Sole Bonding",
      desc: "Uppers are loaded onto automated dual-density PU/Rubber injection rotary tables. High-heat fusion binds the outsole directly to the leather, making leakage and separation physically impossible."
    },
    {
      step: "05",
      title: "Physical laboratory testing",
      desc: "Randomly selected boots are pulled from every single batch run and subjected to rigorous laboratory tests including toe impact, continuous flex cycles, and total waterproofing."
    },
    {
      step: "06",
      title: "Customized Branding & Carton Packing",
      desc: "Boots are customized with client-specific branding, logos, safety tags, and certified certificates, before being flat-packed in high-strength moisture-proof export cartons."
    }
  ];

  return (
    <div className="bg-background min-h-screen text-on-background pt-36 md:pt-44 pb-16 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="border-b border-white/10 pb-8 mb-12">
          <div className="flex items-center gap-3 text-primary mb-3">
            <Factory className="w-6 h-6 animate-pulse" />
            <span className="font-mono text-xs uppercase font-bold tracking-[0.25em]">Tannery Tour</span>
          </div>
          <h1 className="font-headline text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            Manufacturing <span className="text-primary-container">&amp; Industrial Tannery Deck</span>
          </h1>
          <p className="text-white/60 font-sans text-sm md:text-base max-w-3xl mt-4 leading-relaxed font-light">
            An in-depth review of Izyan Miltex's heavy-duty leather safety boot manufacturing infrastructure, industrial capacities, and advanced automated machinery.
          </p>
        </div>

        {/* Section 1: Facility Performance Stats */}
        <div className="mb-16">
          <h2 className="font-headline text-xl md:text-2xl font-bold uppercase tracking-wide text-white mb-8 flex items-center gap-2">
            <span className="text-primary font-mono">01.</span> Operational Infrastructure &amp; Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityStats.map((stat, idx) => (
              <div key={idx} className="bg-surface-container/30 border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-white/40 text-[10px] uppercase font-mono font-bold tracking-widest block mb-2">{stat.label}</span>
                  <div className="font-headline text-2xl lg:text-3xl font-extrabold text-primary uppercase tracking-tight">{stat.value}</div>
                </div>
                <p className="text-white/50 text-xs font-light mt-4 pt-4 border-t border-white/5">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Six-Step Production Sequence */}
        <div className="mb-16">
          <h2 className="font-headline text-xl md:text-2xl font-bold uppercase tracking-wide text-white mb-8 flex items-center gap-2">
            <span className="text-primary font-mono">02.</span> The Integrated Tannery &amp; Footwear Production Line
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturingSteps.map((step, idx) => (
              <div key={idx} className="bg-surface-container/20 border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-4 right-4 font-mono text-3xl font-extrabold text-white/5 group-hover:text-primary/10 transition-colors">
                  {step.step}
                </div>
                <h3 className="text-white font-headline text-base font-bold uppercase mb-3 flex items-center gap-2">
                  <span className="text-primary font-mono">{step.step}.</span>
                  {step.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Technology and Workforce */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mb-16">
          <div className="bg-surface-container/40 border border-white/5 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-headline text-lg font-bold uppercase mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-primary" />
                Raw Tannery Integration
              </h3>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed font-light mb-4">
                Unlike general assemblers, Izyan Miltex possesses full physical integration of raw leather tanneries. This guarantees an unbroken feedback loop on raw hide grading, leather thickness tolerances, specific chemical compound formulas, and color control. Our tannery handles raw hide processing through finished premium cow crust leather inside a single physical secure parameter.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 mt-4">
              <HardHat className="w-5 h-5 text-primary shrink-0" />
              <span className="text-[11px] text-white/60 leading-relaxed font-light">
                All production staff are certified to operate advanced machinery with mandatory safety protocols.
              </span>
            </div>
          </div>

          <div className="bg-surface-container/40 border border-white/5 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-headline text-lg font-bold uppercase mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Ethical Auditing &amp; Environment
              </h3>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed font-light mb-4">
                We take environmental sustainability and ethical workforce compliance incredibly seriously. Our zero-liquid discharge plant recycles 100% of chrome water effluent, preventing industrial water leakage into local waterways. We enforce zero child-labor standards, maintain standard industrial shifts, and guarantee fair compensation matching national guidelines.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-green-500/10 p-4 rounded-xl border border-green-500/20 mt-4">
              <span className="flex h-2 w-2 rounded-full bg-green-400 shrink-0" />
              <span className="text-[11px] text-green-300 font-mono font-bold uppercase">
                Leather Working Group Gold Audited
              </span>
            </div>
          </div>
        </div>

        {/* Section 4: Call to Action Area */}
        <div className="bg-gradient-to-r from-primary/10 via-primary-container/5 to-transparent border border-primary/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-white font-headline text-lg md:text-xl font-bold uppercase">Schedule a Video Facility Walkthrough</h3>
            <p className="text-white/60 text-xs md:text-sm mt-1 leading-relaxed font-light">
              Interested in inspecting our chemical drums, automated stitchers, or laboratory testers? Book our standard video tour call to connect with our plant manager.
            </p>
          </div>
          <button
            onClick={onBack}
            className="px-6 py-3.5 bg-primary hover:bg-primary-container text-on-primary font-headline text-xs font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-300 shadow-xl shrink-0 cursor-pointer"
          >
            Schedule Factory Tour Call
          </button>
        </div>

      </div>
    </div>
  );
}
