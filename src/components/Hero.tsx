import { Sparkles, HelpCircle, ShieldAlert, ArrowDown, Bell } from "lucide-react";

interface HeroProps {
  onStartCustomizer: () => void;
}

export default function Hero({ onStartCustomizer }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="relative w-full flex items-center justify-center overflow-hidden py-24 md:py-32 min-h-screen bg-background">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle Overlay Texture */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.12] mix-blend-overlay"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBL-ftjHhogKSUcNgXlrP-ho-miRXQp6Se-W7I96obKGLZeajdKEPkAHcKfPhFOXLGQg59UO5pO7X0EoyrY5mx9Lia7hEILi1CS7OBF7vhGurZOmbrVsF8ghnGrDyAS0W26Xxudow2ss-C_0Zh5UaIJ4uYjTT2aKBuzTbAtdUn--hoP55eB_m8nF2v8eZBAdr3axsuDNK0KWqarAf5r5lBKkkmN8qwYZTVIgqTw6SiWXotwqvlRNnTe")`,
            filter: "contrast(150%) brightness(1000%)",
          }}
        />
        {/* Gold Ambient Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.18),transparent_70%)]" />
        {/* Dark Vignette Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle, transparent 30%, rgba(12,15,15,0.95) 100%)",
          }}
        />
        {/* Main Background Image - Ultra-premium English saddle */}
        <img
          alt="Ultra-premium black oiled-leather English saddle"
          className="w-full h-full object-cover hero-bg-animate opacity-80 md:opacity-70 object-center"
          src="https://lh3.googleusercontent.com/aida/AP1WRLtZ-QoTsKC4AS2PQnptd56lbQqs2GPJkQfda09tf0fvBWDgVynbsP_KRHKt2sI2itxiOGWAxady7U7HcEks0LCFuH5ICIG5jDBsqpCeLWPqBhKar6Kgj56jSrcLM32HLErwgF1QFdgvEqrE5hlCqb3WqNQ1IL8blJAIeQ3eRfVRl8HwfI8v09gJiv7z7fUcCHgTk9y2u2tyb4R19CsLElXBEZgZ8Sr69FpP8lx9MzkKfcK2EpbgAvMbh18"
        />
        {/* Gradient Transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background z-10" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 text-center flex flex-col items-center pt-16">
        {/* Premium Badge */}
        <div className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
          B2B Equestrian Sourcing
        </div>

        {/* Main Command Headline */}
        <h1 className="font-headline text-[31px] leading-tight md:text-[56px] md:leading-[1.1] text-white max-w-5xl tracking-tight uppercase mb-6 font-bold">
          Tired of Supplier <br />
          <span className="text-primary-container brightness-110 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            Quality Drops &amp; Poor Fitment?
          </span>
          <br />
          <span className="text-white">Shift 100% Sourcing Risk To Us</span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-sm md:text-lg text-white/80 max-w-2xl mb-12 tracking-wide leading-relaxed font-light">
          Provide your exact tech specs—we will handcraft and air-ship your physical prototype straight to your office desk at <span className="text-primary font-bold underline">$0 in 27 days</span>.
        </p>

        {/* Call To Actions */}
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            onClick={onStartCustomizer}
            className="btn-shimmer text-on-primary cursor-pointer px-[23px] py-[16px] sm:px-[25px] sm:py-[18px] font-headline text-[11px] sm:text-[13.2px] font-bold uppercase tracking-[0.12em] rounded-full transition-all duration-300 hover:scale-[1.03] shadow-2xl text-center flex items-center justify-center w-full max-w-[320px] sm:max-w-none sm:w-auto whitespace-nowrap mx-auto"
          >
            Book My Free Prototype Call →
          </button>
          
          <div className="flex items-center justify-center gap-1.5 text-white font-sans text-[10px] sm:text-xs uppercase tracking-[0.08em] whitespace-nowrap mt-4">
            <Bell className="w-3.5 h-3.5 text-primary shrink-0 animate-pulse" />
            <span className="shrink-0">Only 5 slots remaining for this month</span>
          </div>
        </div>
      </div>
    </header>
  );
}
