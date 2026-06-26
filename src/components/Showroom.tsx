import { useState } from "react";
import { PRODUCT_LINES } from "../data";
import { Check, Info, Bell, ChevronLeft, ChevronRight } from "lucide-react";

interface ShowroomProps {
  onConfigureProduct: (productId: string) => void;
}

export default function Showroom({ onConfigureProduct }: ShowroomProps) {
  const [selectedProductId, setSelectedProductId] = useState(PRODUCT_LINES[0].id);
  const [selectedHotspotId, setSelectedHotspotId] = useState<string | null>(null);
  
  // State for specification tabs on mobile (Overview, Materials, Tech Specs)
  const [activeSpecTab, setActiveSpecTab] = useState<"overview" | "materials" | "features">("overview");

  const activeProduct = PRODUCT_LINES.find((p) => p.id === selectedProductId) || PRODUCT_LINES[0];

  // Auto select first hotspot on product switch or when none is selected
  const activeHotspot = activeProduct.hotspots.find((h) => h.id === selectedHotspotId) || activeProduct.hotspots[0];

  const handleProductSwitch = (id: string) => {
    setSelectedProductId(id);
    setSelectedHotspotId(null);
  };

  return (
    <section id="showroom" className="py-20 md:py-32 bg-surface text-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-3 block">
              The Kinetic Product Showroom
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
              Anatomical Blueprints &amp; Product Lines
            </h2>
          </div>
          <p className="font-sans text-sm text-white/50 max-w-sm font-light">
            Interactive blueprints of our elite equestrian lines. Click the hotspots on each design to explore the technical stitching, lining, and hardware specifications.
          </p>
        </div>

        {/* Product Navigation Switcher - Mobile-friendly 1-product-per-view arrow selector, Desktop Category tabs */}
        {/* Mobile Switcher */}
        <div className="flex lg:hidden items-center justify-between gap-4 mb-8 bg-surface-container/60 p-3 rounded-2xl border border-white/5">
          <button
            onClick={() => {
              const currentIndex = PRODUCT_LINES.findIndex((p) => p.id === selectedProductId);
              const prevIndex = (currentIndex - 1 + PRODUCT_LINES.length) % PRODUCT_LINES.length;
              handleProductSwitch(PRODUCT_LINES[prevIndex].id);
            }}
            className="p-3 bg-white/5 hover:bg-white/10 active:bg-white/20 rounded-xl transition-all border border-white/5"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          <div className="text-center flex-1">
            <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-primary block mb-0.5 font-mono">
              Product {PRODUCT_LINES.findIndex((p) => p.id === selectedProductId) + 1} of {PRODUCT_LINES.length}
            </span>
            <span className="text-xs uppercase font-bold tracking-wider text-white">
              {activeProduct.category}
            </span>
          </div>
          <button
            onClick={() => {
              const currentIndex = PRODUCT_LINES.findIndex((p) => p.id === selectedProductId);
              const nextIndex = (currentIndex + 1) % PRODUCT_LINES.length;
              handleProductSwitch(PRODUCT_LINES[nextIndex].id);
            }}
            className="p-3 bg-white/5 hover:bg-white/10 active:bg-white/20 rounded-xl transition-all border border-white/5"
            aria-label="Next product"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>
        </div>

        {/* Desktop Filter Bar (Preserved as is) */}
        <div className="hidden lg:flex flex-col gap-2 mb-10 pb-4 border-b border-white/5">
          <div className="flex gap-3">
            {PRODUCT_LINES.map((product) => (
              <button
                key={product.id}
                onClick={() => handleProductSwitch(product.id)}
                className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-widest cursor-pointer transition-all whitespace-nowrap ${
                  selectedProductId === product.id
                    ? "bg-primary text-on-primary font-bold shadow-lg shadow-primary/20"
                    : "bg-surface-container/60 hover:bg-surface-container-high text-white/70 hover:text-white border border-white/5"
                }`}
              >
                {product.category}
              </button>
            ))}
          </div>
        </div>

        {/* Showroom Interactive Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Image Blueprint & Hotspots (Only interactive on desktop, static on mobile) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black group product-vignette">
              
              {/* Product Background Image */}
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="w-full h-full object-cover opacity-90 transition-all duration-700 hover:scale-[1.02]"
              />

              {/* Hotspot Pulse Dots Overlay (Enlarged touch targets, visible only on desktop) */}
              <div className="hidden lg:block">
                {activeProduct.hotspots.map((hotspot) => {
                  const isActive = hotspot.id === activeHotspot?.id;
                  return (
                    <button
                      key={hotspot.id}
                      onClick={() => setSelectedHotspotId(hotspot.id)}
                      style={{ top: hotspot.top, left: hotspot.left }}
                      className="absolute z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer group w-12 h-12 flex items-center justify-center"
                      aria-label={`Hotspot ${hotspot.title}`}
                    >
                      {/* Ring Pulse */}
                      <span className={`absolute inline-flex h-8 w-8 rounded-full bg-primary/40 ${
                        isActive ? "animate-ping opacity-75" : "opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all"
                      }`} />
                      
                      {/* Core Dot (Pristine visual scale) */}
                      <span className={`relative flex items-center justify-center rounded-full h-6 w-6 text-[10px] font-mono font-bold transition-all border ${
                        isActive
                          ? "bg-primary text-on-primary border-white scale-110 shadow-lg shadow-primary/30"
                          : "bg-black/80 text-primary border-primary group-hover:bg-primary group-hover:text-on-primary"
                      }`}>
                        +
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Instructions Overlay - Desktop Only */}
              <div className="hidden lg:flex absolute bottom-4 left-4 z-20 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5 items-center gap-2 pointer-events-none">
                <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/70 font-mono">
                  Click hotspots to inspect raw engineering
                </span>
              </div>
            </div>

            {/* Selected Hotspot Explanation Box - Desktop Only */}
            {activeHotspot && (
              <div className="hidden lg:block bg-primary/5 border border-primary/20 p-5 rounded-2xl relative overflow-hidden animate-fade-in-up">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                    <Info className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-1.5">
                      Spec Focus: {activeHotspot.title}
                    </h4>
                    <p className="text-xs text-white/80 leading-relaxed font-light">
                      {activeHotspot.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Custom Specifications & Tech Details */}
          <div className="lg:col-span-5 flex flex-col gap-6 bg-surface-container/40 p-6 md:p-8 rounded-2xl border border-white/5 shadow-xl h-full justify-between">
            <div>
              {/* Product Label */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary font-mono">
                  {activeProduct.category}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">
                  Customizable Fit
                </span>
              </div>

              {/* Name and tagline */}
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tight text-white mb-3">
                {activeProduct.name}
              </h3>
              
              {/* 1. MOBILE-ONLY SPECS TAB BAR (Hides scroll clutter, highly organized CRO) */}
              <div className="lg:hidden flex border-b border-white/10 mb-6 gap-2">
                {(["overview", "materials", "features"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveSpecTab(tab)}
                    className={`flex-1 pb-2.5 text-[10px] font-bold uppercase tracking-wider border-b-2 transition-all ${
                      activeSpecTab === tab
                        ? "border-primary text-primary font-bold"
                        : "border-transparent text-white/40"
                    }`}
                  >
                    {tab === "overview" && "Overview"}
                    {tab === "materials" && "Materials"}
                    {tab === "features" && "Contour Tech"}
                  </button>
                ))}
              </div>

              {/* 2. MOBILE ACTIVE TAB CONTENT / DESKTOP ALL-EXPANDED SPECS */}
              
              {/* Tab Content: Overview (Mobile default, Desktop always visible) */}
              <div className={`flex flex-col gap-4 ${activeSpecTab === "overview" ? "block" : "hidden lg:block"}`}>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {activeProduct.specs.description}
                </p>
                
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1.5 mt-2">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-white/40 font-mono">
                    Sizing Guidelines
                  </span>
                  <span className="text-xs text-white font-medium">
                    {activeProduct.specs.dimensions}
                  </span>
                </div>
              </div>

              {/* Tab Content: Raw Materials (Mobile, Desktop always visible) */}
              <div className={`mt-6 ${activeSpecTab === "materials" ? "block" : "hidden lg:block"}`}>
                <h4 className="text-[10px] uppercase tracking-wider font-bold text-white/40 mb-3 font-mono">
                  Standard Sourced Raw Materials
                </h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {activeProduct.specs.materials.map((mat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                      <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span className="font-light truncate">{mat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tab Content: Built-in Features (Mobile, Desktop always visible) */}
              <div className={`mt-6 ${activeSpecTab === "features" ? "block" : "hidden lg:block"}`}>
                <h4 className="text-[10px] uppercase tracking-wider font-bold text-white/40 mb-3 font-mono">
                  Built-in Contour Features
                </h4>
                <ul className="space-y-2.5">
                  {activeProduct.specs.features.map((feat, idx) => (
                    <li key={idx} className="text-xs text-white/70 font-light flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Action buttons (Completely standardized layout and spacing) */}
            <div className="mt-8 border-t border-white/5 pt-6 flex flex-col gap-4">
              <button
                onClick={() => onConfigureProduct(activeProduct.id)}
                className="btn-shimmer text-on-primary cursor-pointer px-5 py-3.5 sm:py-4 font-headline text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] rounded-full transition-all duration-300 hover:scale-[1.03] shadow-2xl text-center flex items-center justify-center w-full max-w-[320px] sm:max-w-none sm:w-auto whitespace-nowrap mx-auto"
              >
                Book My Free Prototype Call →
              </button>
              
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center gap-1.5 text-white font-sans text-[10px] sm:text-xs uppercase tracking-[0.08em] whitespace-nowrap">
                  <Bell className="w-3.5 h-3.5 text-primary shrink-0 animate-pulse" />
                  <span className="shrink-0">Only 5 slots remaining for this month</span>
                </div>
                <p className="text-[10px] text-white/40 italic text-center leading-relaxed">
                  *Shipped via FedEx Express Priority at $0. No billing info required.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
