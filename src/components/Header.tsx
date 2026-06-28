import { useState, useEffect } from "react";
import { Sparkles, Calendar, Menu, X, ShieldCheck } from "lucide-react";

interface HeaderProps {
  onStartCustomizer: () => void;
  onNavigate: (page: "home" | "products" | "compliance" | "privacy" | "manufacturing" | "contact") => void;
  activePage: "home" | "products" | "compliance" | "privacy" | "manufacturing" | "contact";
}

export default function Header({ onStartCustomizer, onNavigate, activePage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (activePage !== "home") {
      onNavigate("home");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
      {/* Yellow Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-[#d4af37] z-[9999] transition-all duration-700"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`absolute md:fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-transparent py-6 border-b border-white/5 md:border-b-0 ${
          isScrolled
            ? "md:bg-background/90 md:backdrop-blur-md md:border-b md:border-white/10 md:py-4 md:shadow-xl"
            : "md:bg-transparent md:py-8"
        }`}
      >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative flex justify-between items-center h-16 md:h-20">
        {/* Left Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-[12.8px] font-bold uppercase tracking-[0.2em] text-white/70">
          <button
            onClick={() => onNavigate("home")}
            className={`hover:text-primary transition-colors cursor-pointer text-left ${
              activePage === "home" ? "text-primary" : ""
            }`}
          >
            HOME
          </button>
          <button
            onClick={() => onNavigate("products")}
            className={`hover:text-primary transition-colors cursor-pointer text-left ${
              activePage === "products" ? "text-primary" : ""
            }`}
          >
            PRODUCTS
          </button>
          <button
            onClick={() => scrollToSection("risk-assessment")}
            className="hover:text-primary transition-colors cursor-pointer text-left"
          >
            SOURCING RISK
          </button>
        </nav>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-shrink-0 flex justify-center items-center z-10">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 cursor-pointer focus:outline-none"
            aria-label="Home"
          >
            <div className="flex flex-col items-center justify-center transition-all duration-500 hover:scale-105 select-none text-primary leading-none">
              <span 
                className="text-3xl md:text-4xl font-extrabold tracking-tight"
                style={{ fontFamily: "'Playfair Display', 'Didot', 'Georgia', serif" }}
              >
                IM
              </span>
              <span 
                className="text-[7.5px] md:text-[9.5px] font-bold tracking-[0.3em] uppercase text-primary mt-1 whitespace-nowrap font-sans"
              >
                IZYAN MILTEX
              </span>
            </div>
          </button>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-8 ml-auto text-[12.8px] font-bold uppercase tracking-[0.2em] text-white/70">
          <button
            onClick={() => scrollToSection("blueprint")}
            className="hover:text-primary transition-colors cursor-pointer text-left"
          >
            CALL BLUEPRINT
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className={`transition-colors cursor-pointer text-left ${
              activePage === "contact" ? "text-primary" : "hover:text-primary"
            }`}
          >
            CONTACT NOW
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden flex items-center gap-4 ml-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-white/10 shadow-2xl py-8 px-6 animate-fade-in">
          <div className="flex flex-col gap-6 text-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate("home");
              }}
              className={`text-sm font-bold uppercase tracking-[0.15em] hover:text-primary py-2 ${
                activePage === "home" ? "text-primary" : "text-white"
              }`}
            >
              HOME
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate("products");
              }}
              className={`text-sm font-bold uppercase tracking-[0.15em] hover:text-primary py-2 ${
                activePage === "products" ? "text-primary" : "text-white"
              }`}
            >
              PRODUCTS
            </button>
            <button
              onClick={() => scrollToSection("risk-assessment")}
              className="text-sm font-bold uppercase tracking-[0.15em] text-white hover:text-primary py-2"
            >
              SOURCING RISK
            </button>
            <button
              onClick={() => scrollToSection("blueprint")}
              className="text-sm font-bold uppercase tracking-[0.15em] text-white hover:text-primary py-2"
            >
              CALL BLUEPRINT
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate("contact");
              }}
              className={`text-sm font-bold uppercase tracking-[0.15em] hover:text-primary py-2 ${
                activePage === "contact" ? "text-primary" : "text-white"
              }`}
            >
              CONTACT NOW
            </button>
            <div className="h-[1px] bg-white/10 my-2"></div>
            <div className="flex justify-center items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest animate-pulse">
              <ShieldCheck className="w-4 h-4" />
              Risk-Free Sample Runs
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
