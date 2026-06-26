import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RiskAssessment from "./components/RiskAssessment";
import Showroom from "./components/Showroom";
import Timeline from "./components/Timeline";
import SpecBuilder from "./components/SpecBuilder";
import MainCallToAction from "./components/MainCallToAction";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import ComplianceSpecs from "./components/ComplianceSpecs";
import PrivacyWarranty from "./components/PrivacyWarranty";
import ManufacturingDeck from "./components/ManufacturingDeck";
import Contact from "./components/Contact";
import { Bell } from "lucide-react";

export default function App() {
  const [activePage, setActivePage] = useState<"home" | "compliance" | "privacy" | "manufacturing" | "contact">(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get("page");
      if (
        pageParam === "compliance" ||
        pageParam === "privacy" ||
        pageParam === "manufacturing" ||
        pageParam === "contact"
      ) {
        return pageParam;
      }
    }
    return "home";
  });
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Triggered when clicking 'Configure' or 'Order' from any other section
  const handleConfigureProduct = (productId: string) => {
    setActivePage("home");
    setSelectedProductId(productId);
    setTimeout(() => {
      const element = document.getElementById("spec-builder-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleStartCustomizer = () => {
    setActivePage("home");
    setTimeout(() => {
      const element = document.getElementById("spec-builder-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleNavigatePage = (page: "home" | "compliance" | "privacy" | "manufacturing" | "contact") => {
    setActivePage(page);
    if (page === "home") {
      window.history.pushState({}, "", window.location.pathname);
    } else {
      window.history.pushState({}, "", `?page=${page}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-background text-on-background min-h-screen font-sans selection:bg-primary selection:text-on-primary pb-28 md:pb-0">
      {/* 1. Transparent Nav */}
      <Header onStartCustomizer={handleStartCustomizer} onNavigate={handleNavigatePage} activePage={activePage} />

      {activePage === "home" && (
        <>
          {/* 2. Hero Section */}
          <Hero onStartCustomizer={handleStartCustomizer} />

          {/* 3. Showroom and Blueprint Hotspots */}
          <Showroom onConfigureProduct={handleConfigureProduct} />

          {/* 4. Interactive Sourcing Risk Assessment */}
          <RiskAssessment onStartCustomizer={handleStartCustomizer} />

          {/* 5. The Call Blueprint (Timeline) */}
          <Timeline onStartCustomizer={handleStartCustomizer} />

          {/* 6. Interactive Prototype Spec Builder & Booking Wizard */}
          <SpecBuilder
            preselectedProductId={selectedProductId}
            onResetPreselection={() => setSelectedProductId(null)}
          />

          {/* Main Call To Action Section */}
          <MainCallToAction onStartCustomizer={handleStartCustomizer} />

          {/* 7. FAQ Accordion */}
          <FaqSection />
        </>
      )}

      {activePage === "compliance" && (
        <ComplianceSpecs onBack={() => handleNavigatePage("home")} />
      )}

      {activePage === "privacy" && (
        <PrivacyWarranty onBack={() => handleNavigatePage("home")} />
      )}

      {activePage === "manufacturing" && (
        <ManufacturingDeck onBack={() => handleNavigatePage("home")} />
      )}

      {activePage === "contact" && (
        <Contact onBack={() => handleNavigatePage("home")} />
      )}

      {/* 8. Footer with Collage and Inquiry Form */}
      <Footer onNavigate={handleNavigatePage} />

      {/* Mobile Sticky Frosted Glass Footer with Standard CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-t border-white/10 p-4 block md:hidden shadow-[0_-8px_32px_rgba(0,0,0,0.6)]">
        <div className="max-w-md mx-auto flex flex-col gap-2">
          <button
            onClick={handleStartCustomizer}
            className="btn-shimmer text-on-primary cursor-pointer px-5 py-3.5 sm:py-4 font-headline text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] rounded-full transition-all duration-300 hover:scale-[1.02] shadow-2xl text-center flex items-center justify-center w-full max-w-[320px] whitespace-nowrap mx-auto"
          >
            Book My Free Prototype Call →
          </button>
          <div className="flex items-center justify-center gap-1.5 text-white font-sans text-[10px] uppercase tracking-[0.08em] whitespace-nowrap">
            <Bell className="w-3.5 h-3.5 text-primary shrink-0 animate-pulse" />
            <span className="shrink-0">Only 5 slots remaining for this month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
